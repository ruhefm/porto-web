<template>
  <section class="animate-daribawah">
<nav v-scroll class="flex items-center sm:justify-normal gap-6 border-b-2 text-white text-center overflow-x-auto select-none">
  <div v-for="(link, index) in links" :key="index">
  <RouterLink :to=link.link active-class="border-b-2 pb-2 border-indigo-500 text-indigo-500" class="flex items-center gap-2 hover:text-indigo-400 active">
    <span>
<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" :d="link.img" />
</svg> -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    class="w-6 h-6 transition-colors"
  >
    <path
      :d="link.img"
    />
  </svg>
    </span>
    <span class="text-sm sm:block">{{ link.title }}</span>
</RouterLink>
</div>

</nav>
</section>
</template>


<script setup>
import { RouterLink } from 'vue-router'
const links = [
    { title: 'Overview', link:'/about', img:`M320-160q-33 0-56.5-23.5T240-240v-80q0-17 11.5-28.5T280-360h80v-90q-30-2-59.5-12.5T249-494q-6-6-9.5-13.5T236-523v-27h-29q-8 0-15.5-3t-13.5-9l-90-90q-12-12-12-28t12-28q29-29 78-42.5t90-13.5q27 0 52.5 4t51.5 15q0-23 16-39t39-16h345q33 0 56.5 23.5T840-720v440q0 50-35 85t-85 35H320Zm120-200h200q17 0 28.5 11.5T680-320v40q0 17 11.5 28.5T720-240q17 0 28.5-11.5T760-280v-440H440v24l229 229q9 9 11 20.5t-3 22.5q-5 11-14 17.5t-23 6.5q-8 0-15.5-3.5T612-412L510-514l-8 8q-14 14-29.5 25T440-464v104ZM224-630h52q17 0 28.5 11.5T316-590v46q12 8 25 11t27 3q23 0 41.5-7t36.5-25l8-8-56-56q-29-29-65-43.5T256-684q-20 0-38 3t-36 9l42 42Zm376 350H320v40h286q-3-9-4.5-19t-1.5-21Zm-280 40v-40 40Z`},
    { title: 'Education', link:'/about/education', img:'M242-249q-20-11-31-29.5T200-320v-192l-96-53q-11-6-16-15t-5-20q0-11 5-20t16-15l338-184q9-5 18.5-7.5T480-829q10 0 19.5 2.5T518-819l381 208q10 5 15.5 14.5T920-576v256q0 17-11.5 28.5T880-280q-17 0-28.5-11.5T840-320v-236l-80 44v192q0 23-11 41.5T718-249L518-141q-9 5-18.5 7.5T480-131q-10 0-19.5-2.5T442-141L242-249Zm238-203 274-148-274-148-274 148 274 148Zm0 241 200-108v-151l-161 89q-9 5-19 7.5t-20 2.5q-10 0-20-2.5t-19-7.5l-161-89v151l200 108Zm0-241Zm0 121Zm0 0Z' },
    { title: 'Experiences', link:'/about/experiences', img:'M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v120q0 17-11.5 28T840-481q-17 0-28.5-11.5T800-521v-119H160v440h260q17 0 28.5 11.5T460-160q0 17-11.5 28.5T420-120H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60Z' },
]
</script>