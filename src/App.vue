<template>
  <main class="text-gray-200 font-mono text-sm sm:text-lg">
    <router-view />
    <Footer />
      </main>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>
