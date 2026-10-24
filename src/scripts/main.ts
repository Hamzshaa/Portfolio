export {};

const body = document.body;

body.classList.remove('no-js');

const STORAGE_KEY = 'user-color-scheme';
const COLOR_MODE_KEY = '--color-mode';

const modeToggleButton = document.querySelector<HTMLButtonElement>('.js-mode-toggle');
const modeToggleText = document.querySelector<HTMLElement>('.js-mode-toggle-text');

const getCSSCustomProp = (propKey: string): string => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);

  if (response.length) {
    response = response.replace(/'|"/g, '').trim();
  }

  return response;
};

const setButtonLabel = (_currentSetting: string): void => {
  if (modeToggleText) {
    modeToggleText.innerText = 'mode';
  }
};

const applySetting = (passedSetting?: string): void => {
  const currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

  if (currentSetting) {
    document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
    setButtonLabel(currentSetting);
  } else {
    setButtonLabel(getCSSCustomProp(COLOR_MODE_KEY));
  }
};

const toggleSetting = (): string => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  switch (currentSetting) {
    case null:
      currentSetting = getCSSCustomProp(COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
      break;
    case 'light':
      currentSetting = 'dark';
      break;
    case 'dark':
      currentSetting = 'light';
      break;
  }

  localStorage.setItem(STORAGE_KEY, currentSetting);
  return currentSetting;
};

if (modeToggleButton) {
  modeToggleButton.addEventListener('click', (evt: Event) => {
    evt.preventDefault();
    applySetting(toggleSetting());
  });
}

applySetting();

/**
 * Stretching and squashing
 */
const app = document.querySelector<HTMLElement>('.app');
if (app) {
  const appWidth = app.offsetWidth;
  let windowWidth = window.innerWidth;

  const observerDebouncers = new WeakMap<Element, ReturnType<typeof setTimeout>>();

  const myObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const existingTimeout = observerDebouncers.get(entry.target);
      if (existingTimeout) {
        clearTimeout(existingTimeout);
      }
      observerDebouncers.set(
        entry.target,
        setTimeout(() => {
          entry.target.dispatchEvent(new CustomEvent('resized'));
        }, 200)
      );
      const newWidth = entry.contentRect.width;
      const scaleX = Math.max(0.01, (newWidth - windowWidth) / appWidth + 1);
      app.style.transform = 'scale(' + scaleX + ', 1)';
    });
  });

  body.addEventListener('resized', () => {
    windowWidth = window.innerWidth;
    app.style.transform = 'scale(1, 1)';
  });

  myObserver.observe(document.body);
}
