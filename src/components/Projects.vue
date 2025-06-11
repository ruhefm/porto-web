<template>
    <section class="text-justify animate-daribawah" v-if="projects.length">
    <div v-for="project in projects" :key="project.slug">
    <RouterLink :to="`/projects/${project.slug}`">
        <h1 class="font-mont text-3xl sm:text-4xl md:text-5xl font-semibold py-4 text-left">{{project.title}}</h1>
    </RouterLink>
    <div v-scroll class="flex overflow-auto select-none">
    <img v-for="(image,index) in project.images" :key="index" :src="image" :class="`select-none opacity-75 max-h-screen mx-auto px-1 max-w-lg ${project.size}`">
    </div>
    <p class="py-4">{{project.desc}}</p>
    <div v-scroll class="flex items-center overflow-auto">
        <p class="mr-2"><strong>Tools:</strong></p>
    <img v-for="(tool,index) in project.tools" :key="index" :src="tool.imagePath" :class="`select-none w-8  h-8 mr-2 rounded-full bg-slate-300 p-1 object-fill`" :alt="tool.alt">
    </div>
    </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import fm from 'front-matter'

const projects = ref([])

const markdownFilesList = import.meta.glob(
  '@/assets/markdown/projects/*.md',
  { query: '?raw', import: 'default', eager: true }
)

for (const path in markdownFilesList) {
  const rawContent = markdownFilesList[path]
  const { attributes } = fm(rawContent)
  const slug = path.split('/').pop().replace('.md', '')

  console.log('YAML data:', attributes)

  projects.value.push({
    slug,
    title: attributes.title || slug,
    desc: attributes.desc || '',
    size: attributes.size || '',
    images: attributes.images || [],
    tools: attributes.tools || [],
  })
}
</script>



