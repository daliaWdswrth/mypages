import { defineConfig, envField } from "astro/config";
import vercel from '@astrojs/vercel';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";



export default defineConfig({
    site: "http://www.daliawadsworth.com/",
    integrations: [sitemap()],
    adapter: vercel(),
    trailingSlash: "never",

    vite: {
        plugins: [tailwindcss()],
    },


    devToolbar: {
        enabled: false,
    },

    adapter: vercel({
        imageService: true,
    }),


  });