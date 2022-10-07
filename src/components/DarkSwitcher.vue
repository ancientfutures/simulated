<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    aria-label="switcher"
    w-6
    h-6
    transition-transform
    dark:rotate-180
    dark:transition-transform
    i-gg-dark-mode
    @click="toggleDark()"
  />
</template>
