<template>
<section>
   <h2 class="text-justify font-bold text-xl border-b pb-1"><a id="music" href="#music">🎵 Music I Like</a></h2>
  <h2 class="text-2xl font-bold mb-4"></h2>
  <ul class="list-disc list-inside space-y-1 text-left" v-for="(music, index) in musicPreferences" :key="index">
    <li><a :href="music.link">{{music.title}}</a></li>
  </ul>
</section>
</template>

<script setup>
const musicPreferences = [
    {title:"Proof of a Hero - All Versions", link:"https://www.youtube.com/watch?v=kIJJ2XK1Xt4"},
    {title:"He's a Pirate", link:"https://www.youtube.com/watch?v=M8VB5Ye3XLM"},
    {title:"Howl's Moving Castle - Merry Go Round of Life", link:"https://www.youtube.com/watch?v=63OT3_Lfy50"},
    {title:"Hans Zimmer - Interstellar", link:"https://www.youtube.com/watch?v=Yo98PdmGzvo"},
    {title:"Can You Hear The Music", link:"https://www.youtube.com/watch?v=4JZ-o3iAJv4"},
    {title:"Janger", link:"https://www.youtube.com/watch?v=seSjfn6lh9k"},
    {title:"Paris Barantai", link:"https://www.youtube.com/watch?v=3dyCuxOigSY"},
    {title:"Isyana Sarasvati - IL SOGNO", link:"https://www.youtube.com/watch?v=MZrvJ_yuksI"}
]
</script>