<template>
  <div class="w-full">
  <main class="text-gray-200 font-mono text-sm sm:text-lg">
    <router-view />
      </main>
    <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>
