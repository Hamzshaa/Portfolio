import type { APIRoute } from 'astro';

export const prerender = true;

const SECRET_KEY = 'birtucan_portfolio_sec_2026_x89a';

const VENUES = [
  {
    id: 'cloudsun_addis',
    name: 'Cloud Sun Cafe (Addis)',
    urls: [
      'https://api2.cloudsun-cafe.com/api/v1/public/lifetime-metrics/',
      'https://cloudsun-cafe.com/api/v1/public/lifetime-metrics/',
    ],
  },
  {
    id: 'cloudsun_bahirdar',
    name: 'Cloud Sun (Bahir Dar)',
    urls: [
      'https://api2.cloudsunbahirdar.com/api/v1/public/lifetime-metrics/',
      'https://cloudsunbahirdar.com/api/v1/public/lifetime-metrics/',
    ],
  },
  {
    id: 'arabian_palace',
    name: 'Arabian Palace',
    urls: [
      'https://api2.arabianpalace-eth.com/api/v1/public/lifetime-metrics/',
      'https://arabianpalace-eth.com/api/v1/public/lifetime-metrics/',
    ],
  },
];

const FALLBACK_TOTAL_ORDERS = 125000;
const FALLBACK_TOTAL_ITEMS = 340000;

function parseMetricNumber(val: any): number | null {
  if (typeof val === 'number' && Number.isFinite(val) && val >= 0) return val;
  if (typeof val === 'string' && val.trim().length > 0) {
    const parsed = Number(val.replace(/,/g, ''));
    if (Number.isFinite(parsed) && parsed >= 0) return parsed;
  }
  return null;
}

async function fetchVenueMetric(venue: (typeof VENUES)[0]) {
  for (const url of venue.urls) {
    try {
      const target = `${url}?key=${encodeURIComponent(SECRET_KEY)}`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);

      const resp = await fetch(target, {
        method: 'GET',
        headers: {
          'X-API-Key': SECRET_KEY,
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (!resp.ok) continue;
      const ct = resp.headers.get('content-type') || '';
      if (ct.includes('html')) continue;

      let data: any;
      if (ct.includes('json') || ct.includes('text/plain') || ct === '') {
        const text = await resp.text();
        if (text.trim().startsWith('<')) continue;
        data = JSON.parse(text);
      } else {
        data = await resp.json();
      }

      const rawOrders = parseMetricNumber(data?.total_orders);
      const rawQuantity = parseMetricNumber(data?.total_quantity_sold);
      const rawItems = parseMetricNumber(data?.total_order_items);
      const resolvedItems = rawQuantity !== null ? rawQuantity : rawItems;

      if (rawOrders !== null || resolvedItems !== null) {
        return {
          orders: rawOrders,
          items: resolvedItems,
          isLive: true,
        };
      }
    } catch {
      continue;
    }
  }

  // If failing, non-responding or non-numeric, do NOT add to sum
  return {
    orders: null,
    items: null,
    isLive: false,
  };
}

export const GET: APIRoute = async () => {
  let sumOrders = 0;
  let sumItems = 0;
  let liveCount = 0;

  try {
    const settled = await Promise.allSettled(VENUES.map((v) => fetchVenueMetric(v)));

    settled.forEach((res) => {
      if (res.status === 'fulfilled' && res.value.isLive) {
        const val = res.value;
        if (typeof val.orders === 'number' && Number.isFinite(val.orders)) {
          sumOrders += val.orders;
        }
        if (typeof val.items === 'number' && Number.isFinite(val.items)) {
          sumItems += val.items;
        }
        liveCount++;
      }
    });
  } catch {
    // If all fail or unexpected error, use global fallback
  }

  // If at least one venue answered, use the sum of responding venues.
  // Only if ALL venues fail (liveCount === 0), use the global fallback.
  const total_orders = liveCount > 0 ? sumOrders : FALLBACK_TOTAL_ORDERS;
  const total_items = liveCount > 0 ? sumItems : FALLBACK_TOTAL_ITEMS;

  const payload = {
    total_orders,
    total_items,
    live_venues: liveCount,
    is_live: liveCount > 0,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=60',
    },
  });
};
