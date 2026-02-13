import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://uniconv.github.io',
  base: '/site',
  integrations: [tailwind(), mdx()],
});
