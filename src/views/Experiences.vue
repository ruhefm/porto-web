<template>
      <mainMenu/>

    <main class="mx-auto max-w-screen-lg p-8">
      <Header />
      <aboutMenu />
      <Experiences />
    </main>

</template>

<script setup lang="ts">
import mainMenu from '@/components/MainMenus.vue'
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/About/AboutMenu.vue'
import Experiences from '@/components/About/Experiences.vue'
</script>
