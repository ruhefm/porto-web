<template>
<nav v-scroll :class="{ 'backdrop-blur-sm shadow-lg': scrolled }" class="mx-auto w-full flex items-center justify-center text-white text-center overflow-x-auto select-none sticky top-0 z-50 transition-all duration-300 p-4 mt-6">
  <RouterLink to="/" active-class="border-b-2 border-indigo-500 text-indigo-500" class="flex items-center gap-2 hover:text-indigo-400 active">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</RouterLink>
<div class="flex">
<div class="mx-2 px-2 font-semibold" v-for="(link, index) in links" :key="index">
  <RouterLink :to="link.link" active-class="text-indigo-500 active" class="flex items-center gap-2 hover:text-indigo-400">
{{link.title}}
</RouterLink>
</div>
  <!-- <a :href="`mailto:herupurnama.work@gmail.com?subject=${emailSubject}`" active-class="text-indigo-500 active" class="mx-2 px-2 font-semibold flex items-center gap-2 hover:text-indigo-400">
  Contact
  </a> -->
</div>
</nav>
</template>


<script setup>
import { RouterLink } from 'vue-router'
const emailSubject = "Your_Title - from herupurnama.com"
const links = [
    { title: 'About', link:'/about' },
    { title: 'Projects', link:'/projects' },
    { title: 'Notes', link:'/notes' },
    // { title: 'Contact', link:'mailto:herupurnama.work@gmail.com' },
]

import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false) 

const handleScroll = () => {
  if (window.scrollY > 0) { 
    scrolled.value = true; 
  } else {
    scrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>