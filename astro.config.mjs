import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs/promises';

const sitemapAlias = () => ({
  name: 'sitemap-alias',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      try {
        const sitemap0 = new URL('sitemap-0.xml', dir);
        const sitemap = new URL('sitemap.xml', dir);
        await fs.copyFile(sitemap0, sitemap);
      } catch (err) {
        console.error('Failed to copy sitemap-0.xml to sitemap.xml:', err);
      }
    }
  }
});

export default defineConfig({
  site: 'https://hamzajhad.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString().split('T')[0];
        return item;
      }
    }),
    sitemapAlias()
  ],
  build: {
    format: 'directory'
  },
  devToolbar: {
    enabled: false
  }
});
