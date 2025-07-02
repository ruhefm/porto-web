<template>
<section class="py-4">
   <h2 class="text-justify font-bold text-xl border-b pb-1">
    <a id="music" href="#music" class="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>
 <span class="mx-2">Music I Like</span></a></h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4">
  <ul class="list-disc list-inside space-y-1 text-left" v-for="(music, index) in musicPreferences" :key="index">
    <li><a :href="music.link">{{music.title}}</a></li>
  </ul>
</div>
  

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-2 max-w-screen-2xl overflow-hidden">
<div v-for="(music, index) in musicPreferences" :key="index">
<div class="min-h-36 sm:min-h-72 bg-gradient-to-br from-slate-800 to-slate-900 to-75% rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 border-gray-700 mr-4 my-4 items-center justify-center">
    <a href="#">
      <div class = "items-center justify-center flex">
        <!-- <img class="rounded-t-lg object-cover" src="" alt="" /> -->
         <iframe class="w-full aspect-video" :src=music.linkEmbed :title=music.title frameborder="0" allowfullscreen></iframe>
      </div>
    </a>
        <a :href=music.link>
            <h5 class="p-6 md:p-8 items-center justify-center text-sm sm:text-lg text-center text-white dark:text-white">{{music.title}}</h5>
        </a>
        <!-- <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> -->
</div>
</div>
</div>
</section>
</template>

<script setup lang="ts">
interface musicPreference {
  title: string;
  link: string;
  linkEmbed: string;
}
const musicPreferences : musicPreference[] = [
    {title:"Proof of a Hero - All Versions", link:"https://www.youtube.com/watch?v=kIJJ2XK1Xt4", linkEmbed:"https://www.youtube.com/embed/kIJJ2XK1Xt4"},
  {
    title: "He's a Pirate",
    link: "https://www.youtube.com/watch?v=M8VB5Ye3XLM",
    linkEmbed: "https://www.youtube.com/embed/M8VB5Ye3XLM"
  },
  {
    title: "Howl's Moving Castle - Merry Go Round of Life",
    link: "https://www.youtube.com/watch?v=63OT3_Lfy50",
    linkEmbed: "https://www.youtube.com/embed/63OT3_Lfy50"
  },
  {
    title: "Hans Zimmer - Interstellar",
    link: "https://www.youtube.com/watch?v=Yo98PdmGzvo",
    linkEmbed: "https://www.youtube.com/embed/Yo98PdmGzvo"
  },
  {
    title: "Can You Hear The Music",
    link: "https://www.youtube.com/watch?v=4JZ-o3iAJv4",
    linkEmbed: "https://www.youtube.com/embed/4JZ-o3iAJv4"
  },
  {
    title: "Janger",
    link: "https://www.youtube.com/watch?v=seSjfn6lh9k",
    linkEmbed: "https://www.youtube.com/embed/seSjfn6lh9k"
  },
  {
    title: "Paris Barantai",
    link: "https://www.youtube.com/watch?v=3dyCuxOigSY",
    linkEmbed: "https://www.youtube.com/embed/3dyCuxOigSY"
  },
  {
    title: "Isyana Sarasvati - IL SOGNO",
    link: "https://www.youtube.com/watch?v=MZrvJ_yuksI",
    linkEmbed: "https://www.youtube.com/embed/MZrvJ_yuksI"
  }
]
</script>