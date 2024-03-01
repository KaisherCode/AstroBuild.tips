import { defineConfig } from 'astro/config';
import taillwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    integrations: [taillwind()]
});
