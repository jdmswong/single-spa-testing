import { resolve } from "path";
import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // preserveEntrySignatures: true,
      // input: "src/index.js",
      // output: {
      //   format: "system",
      //   entryFileNames: "[name].js",
      // },
      // external: ["react", "systemjs"],
      input: 'src/index.js',
      format: 'system',
      preserveEntrySignatures: true
    },
  },
  // lib: {
  //   entry: resolve(__dirname, "src/index.js"),
  // },
  plugins: [react(), basicSsl()],
  // server: {
  //   https: false,
  // },
  // resolve: {
  //   alias: [
  //     {
  //       find: "@scotia",
  //       replacement: "/src",
  //     },
  //   ],
  // },
});
