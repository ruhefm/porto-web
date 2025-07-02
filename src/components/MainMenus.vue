<template>
<nav v-scroll :class="{ 'backdrop-blur-sm shadow-lg': scrolled }" class="mx-auto w-full flex items-center justify-center text-white text-center overflow-x-auto select-none sticky top-0 z-50 transition-all duration-300 p-4 mt-6">
  <RouterLink to="/" active-class="border-b-2 border-indigo-500 text-indigo-500" class="flex items-center gap-2 hover:text-indigo-400 active">
<HomeIcon/>
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


<script setup lang="ts">
import { RouterLink } from 'vue-router'

// const emailSubject = "Your_Title - from herupurnama.com"

interface link {
    title: string;
    link: string;
}

const links : link[] = [
    { title: 'About', link:'/about' },
    { title: 'Projects', link:'/projects' },
    { title: 'Notes', link:'/notes' },
    // { title: 'Contact', link:'mailto:herupurnama.work@gmail.com' },
]

import { ref, onMounted, onUnmounted } from 'vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
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