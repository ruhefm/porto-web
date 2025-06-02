<template>
  <div class="min-h-screen bg-slate-800 text-gray-200 font-mono">
    <Header />
    <main class="max-w-5xl mx-auto p-6 space-y-10">
      <aboutMenu />
      <Profile />
      <Experience />
      <Education />
      <Skills />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import aboutMenu from './components/aboutMenu.vue'
import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
</script>
