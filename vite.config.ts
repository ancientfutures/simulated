import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import unoCSS from "unocss/vite";
import { presetUno, presetIcons, presetAttributify } from "unocss";

export default defineConfig({
  plugins: [
    Vue(),
    Components(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
    }),
    unoCSS({
      presets: [presetUno(), presetIcons(), presetAttributify()],
    }),
  ],
});
