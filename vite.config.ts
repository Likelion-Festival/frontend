import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        sw: "./sw.js",
      },
    },
  },
  resolve: {
    alias: [
      { find: "@apis", replacement: resolve(__dirname, "src/apis") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@constant", replacement: resolve(__dirname, "src/constant") },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@styles", replacement: resolve(__dirname, "src/styles") },
      { find: "@type", replacement: resolve(__dirname, "src/type") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
    ],
  },
});
