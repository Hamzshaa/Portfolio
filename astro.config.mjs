import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hamzajhad.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  devToolbar: {
    enabled: false
  }
});
