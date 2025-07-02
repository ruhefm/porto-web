<template>
  <section class="prose prose-invert max-w-none">
    <div v-if="htmlContent" v-html="htmlContent" />
    <div v-else class="flex items-center justify-center min-h-screen">
    <div class="loading"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import fm from 'front-matter'
import markdownIt from 'markdown-it'

const route = useRoute()
const slug = route.params.slug
const htmlContent = ref('')

const files = import.meta.glob('@/assets/markdown/projects/*.md', { query: '?raw', import: 'default' })

const loadMarkdown = async () => {
  const filePath = `/src/assets/markdown/projects/${slug}.md`
  const file = files[filePath]

  if (!file) {
    htmlContent.value = `<div class="min-h-screen flex flex-col items-center justify-center text-center text-gray-300 dark:text-gray-700">
    <h1 class="text-6xl font-bold">404</h1>
    <p class="mt-4 text-xl">Oops! Page Under Construction.</p>
  <a href="/projects"><button class="my-4 flex gap-2 bg-gradient-to-br from-slate-800 to-slate-900 to-75% p-2 sm:p-3 rounded text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
Projects</button></a>
</div>`
    return
  }

const raw = await file()
const { body } = fm(raw as string)
const md = markdownIt()
htmlContent.value = md.render(body)

}

loadMarkdown()
</script>


<style scoped>
.prose :deep(img){
  max-width: 600px;
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  height: auto;
  margin: 1rem auto;
  display: block;
  border-radius: 0.5rem;
}
.prose :deep(p){
    text-align:justify;
    margin:1rem auto;
}
.prose :deep(strong){
    color: aliceblue;
}
.prose :deep(h1){
    margin:1rem auto;
    font-size: xx-large;
    font-family: 'Dancing Script', cursive;
    line-height: 1;
    color: azure;
}
.prose :deep(h2){
    margin:1rem auto;
    font-size: x-large;
    font-family: 'Dancing Script', cursive;
    color: aliceblue;
}
.prose :deep(h3){
    color: aliceblue;
    font-size: medium;
  }
.prose :deep(ol ul li){
    margin:1rem auto;
}
.prose :deep(table){
    width:100%;
  align-content: center;
      text-align: center; 
      vertical-align: middle;
}

.prose :deep(th td){
  align-content: center;
  border: 1px solid #444;
  vertical-align: middle;
  padding: 8px;
  text-align: center; 
}
</style>