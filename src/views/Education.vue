<template>
      <mainMenu/>
    <main class="mx-auto max-w-screen-lg p-8">
      <Header />
      <aboutMenu />
      <Education />
    </main>

</template>

<script setup lang="ts">
import mainMenu from '@/components/MainMenu.vue'
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/About/AboutMenu.vue'
import Education from '@/components/About/Education.vue'
</script>
