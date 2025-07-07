<template>
  <main class="text-gray-300 font-noto font-light text-sm sm:text-lg mx-auto">
    <router-view />
    <Footer />
      </main>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>
