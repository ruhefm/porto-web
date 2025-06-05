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
    {title:"Howl's Moving Castle - Merry Go Round of Life", link:"https://www.youtube.com/watch?v=63OT3_Lfy50"},
    {title:"Isyana Sarasvati - IL SOGNO", link:"https://www.youtube.com/watch?v=MZrvJ_yuksI"}
]
</script>