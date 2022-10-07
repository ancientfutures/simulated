<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header
    relative
    z-50
    text-gray-700
    dark:bg-dark-800
    dark:text-white
    transition-transform
    dark:transition-transform
  >
    <div
      relative
      max-w-screen-2xl
      mx-auto
      w-full
      py-4
      border-b-1
      dark:border-dark-200
    >
      <nav flex justify-between mx-auto w-full max-w-screen-xl px5>
        <div flex-1 text-xl items-center font-semibold>
          <a href="/" class="inline-flex items-center dark:text-purple-200"
            >Simulated</a
          >
        </div>
        <div relative hidden lg:flex lg:justify-center space-x-4>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
        </div>
        <div items-center flex flex-1 justify-end space-x-2>
          <DarkSwitcher />
          <button
            id="logo instagram"
            aria-label="instagram"
            i-carbon-logo-instagram
            w-6
            h-6
          />
          <button id="logo behance" aria-label="behance" i-bxl-behance w6 h6 />
        </div>
      </nav>
    </div>
  </header>
  <main flex justify-center p12 dark:bg-dark-800 h-screen dark:text-white>
    <RouterView />
  </main>
</template>
