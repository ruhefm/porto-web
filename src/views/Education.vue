<template>
      <mainMenu/>
    <main class="mx-auto max-w-screen-lg ">
      <Header />
      <aboutMenu />
      <Education />
    </main>

</template>

<script setup lang="ts">
import mainMenu from '@/components/mainMenu.vue'
import Header from '@/components/Header.vue'
import aboutMenu from '@/components/aboutMenu.vue'
import Education from '@/components/Education.vue'
</script>
