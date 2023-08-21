import { resolve } from "path";
import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from 'vite-preset-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      preserveEntrySignatures: true,
      input: "src/application-root-config.js",
      output: {
        format: "system",
        entryFileNames: "src/[name].js",
      },
      external: ["react", "systenjs"],
    },
  },
  lib: {
    entry: resolve(__dirname, "src/application-root-config.js"),
  },
  plugins: [ basicSsl()],
  // plugins: [react(), basicSsl()],
  server: {
    https: false,
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: "@scotia",
  //       replacement: "/src",
  //     },
  //   ],
  // },
});
