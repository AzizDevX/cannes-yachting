// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
{
  /*MAKE base TO "/" AND build WHEN HOSTING*/
}

export default defineConfig({
  plugins: [react()],
  base: "/cannes-yachting/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
