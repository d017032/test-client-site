import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // site should be updated to your Netlify URL once you have it
  site: 'https://your-client-site.netlify.app',
  base: '/', 
  integrations: [
    tailwind({ applyBaseStyles: false }), 
    react()
  ],
  output: 'static',
  adapter: netlify(),
});