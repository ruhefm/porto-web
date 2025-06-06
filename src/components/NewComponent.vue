<template>
	<section class="">
	  <ul class="list-inside text-left" v-for="(education, index) in educations" :key="index">
	    <li class="block py-2 sm:flex border-b items-center">
	      <div class="items-center justify-center flex py-4"><img :src="`/${education.path}`" :alt="education.title" class="w-16 h-16 rounded-full object-cover bg-white"></div>
	      <div>
	      <p class="px-4 text-xl sm:text-2xl text-center sm:text-left">{{ education.title }}</p>
	      <p class="px-4 text-lg sm:text-xl text-center sm:text-left">{{ education.dateRange }}</p>
	      <p class="px-4 text-lg sm:text-xl text-center sm:text-left">{{ education.major }}</p>
	      <li class="px-4 list-disc" v-for="(line, idx) in education.desc.split('\n')" :key="idx">
	    {{ line.replace(/^•\s*/, '') }}
	  </li>
	      </div>
	    </li>
	  </ul>
	  </section>
</template>

<script setup lang="ts">
defineProps<{ 
	educations: { title: string; dateRange: string; path: string; major: string; desc: string; }[];
}>()
</script>
