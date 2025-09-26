import { defineConfig, envField } from "astro/config";
import vercel from '@astrojs/vercel';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "http://www.daliawadsworth.com/",
    title: "Dalia Wadsworth",
    integrations: [
        sitemap(), 
    ],
    adapter: vercel({
        imageService: true,
    }),
    trailingSlash: "never",
    
    vite: {
        plugins: [tailwindcss()],
    },
    
    devToolbar: {
        enabled: false,
    },
    
});