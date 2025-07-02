<template>
      <mainMenu/>
    <main class="mx-auto max-w-screen-lg p-8">
      <Header />
      <aboutMenu />
      <Introduction/>
      <Profile />
      <Skills />
      <musicPreferences />
    </main>

</template>

<script setup lang="ts">
import mainMenu from '@/components/MainMenu.vue'
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/About/AboutMenu.vue'
import Introduction from '@/components/About/Introduction.vue'
import musicPreferences from '@/components/About/MusicPreferences.vue'
import Profile from '@/components/About/Profile.vue'
import Skills from '@/components/Skills.vue'
</script>
