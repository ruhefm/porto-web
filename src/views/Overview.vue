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
import mainMenu from '@/components/mainMenu.vue'
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/aboutMenu.vue'
import Introduction from '@/components/Introduction.vue'
import musicPreferences from '@/components/musicPreferences.vue'
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
</script>
