<template>
  <mainMenu />
  <div
    class="mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center text-center text-gray-300 dark:text-gray-700"
  >
    <h1 class="text-6xl font-bold">404</h1>
    <p class="mt-4 text-xl">Oops! Page Not Found.</p>
    <router-link
      to="/"
      class="button my-4 flex items-center gap-2 rounded bg-gradient-to-br from-slate-800 to-slate-900 to-75% p-2 text-xl sm:p-3"
    >
      <homeIcon />
      Go Home
    </router-link>
  </div>
</template>

<script setup lang="ts">
import mainMenu from '@/components/MainMenus.vue'
import homeIcon from '@/components/icons/HomeIcon.vue'
</script>
