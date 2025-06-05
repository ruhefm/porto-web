<template>

    <Header />
    <main class="mx-auto p-6 space-y-10">
      <aboutMenu />
      <Introduction/>
      <Profile />
      <musicPreferences />
      <Skills />
    </main>

</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/aboutMenu.vue'
import Introduction from '@/components/Introduction.vue'
import musicPreferences from '@/components/musicPreferences.vue'
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
</script>
