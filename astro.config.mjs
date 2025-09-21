import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";



export default defineConfig({
    site: "http://www.daliawadsworth.com/",
    integrations: [sitemap()],
    trailingSlash: "never",

    vite: {
        plugins: [tailwindcss()],
    },


    devToolbar: {
        enabled: false,
    }


  });