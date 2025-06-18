import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ankitjajadiya.github.io/", // ✅ Add this line
  plugins: [react(), tailwindcss],
});
