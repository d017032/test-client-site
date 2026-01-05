import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // 1. Force static output so Netlify's crawler can find the form tags
  output: 'static',

  // 2. Configure the Netlify adapter to stay out of the way of static forms
  adapter: netlify({
    edgeMiddleware: false,
    cacheOnDemandPages: false
  }),

  integrations: [
    tailwind(), 
    react()
  ],

  build: {
    // 3. Ensures /contact becomes /contact/index.html (Netlify's preferred structure)
    format: 'directory'
  },

  // 4. Matches your successPath logic in contact.astro
  trailingSlash: 'always'
});