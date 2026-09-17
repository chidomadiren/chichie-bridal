import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Chichie Bridal Boutique",
        short_name: "Chichie Bridal",

        description:
          "An elegant bridal boutique app for hiring beautiful wedding dresses.",

        theme_color: "#b76e79",
        background_color: "#fff8f5",

        display: "standalone",

        start_url: "/",

        icons: [
          {
            src: "/chichie-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/chichie-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});