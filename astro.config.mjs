import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://steroidxx.github.io',
  base: '/hno-praxis-mohadjer',
  integrations: [tailwind()],
});
