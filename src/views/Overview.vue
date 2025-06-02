<template>

    <Header />
    <main class="max-w-5xl mx-auto p-6 space-y-10">
      <aboutMenu />
      <Profile />
      <Skills />
    </main>

</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/aboutMenu.vue'
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
</script>
