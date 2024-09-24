import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.endsWith(".md")) {
          // For .md files, transform the raw content for usage
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
