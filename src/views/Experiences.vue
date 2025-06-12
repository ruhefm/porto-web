<template>
      <mainMenu/>

    <main class="mx-auto max-w-screen-lg p-8">
      <Header />
      <aboutMenu />
      <Experiences />
    </main>

</template>

<script setup lang="ts">
import mainMenu from '@/components/mainMenu.vue'
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/aboutMenu.vue'
import Experiences from '@/components/Experiences.vue'
</script>
