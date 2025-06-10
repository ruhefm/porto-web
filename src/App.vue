<template>
  <main class="text-gray-300 font-noto font-light text-sm sm:text-lg mx-auto max-w-screen-lg p-8">
    <router-view />
      </main>
    <Footer />
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>
