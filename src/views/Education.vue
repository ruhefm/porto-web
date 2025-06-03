<template>

    <Header />
    <main class="mx-auto p-6 space-y-10">
      <aboutMenu />
      <Education />
    </main>

</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/aboutMenu.vue'
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
import Education from '@/components/Education.vue'

</script>
