<template>
  <div class="min-h-screen bg-slate-800 text-gray-200 font-mono text-sm sm:text-lg">
    <router-view />
    <Footer />
      </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>
