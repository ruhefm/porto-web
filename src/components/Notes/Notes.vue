<template>
    <section class="text-justify grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" v-if="notes.length">

    <div v-for="note in notes" :key="note.slug">
        <div class="
        p-5 my-4 mr-2
        max-w-sm rounded-3xl 
        border border-neutral-400 
        overflow-hidden 
        hover:border-teal-800 
        transition-all duration-300 
        min-h-72 max-h-72
        flex flex-col justify-between
        animate-daribawah">
    <RouterLink :to="`/notes/${note.slug}`">
        <h1 class="text-lg sm:text-lg font-semibold py-4 text-left">{{note.title}}</h1>
    <p class="text-sm my-1">{{note.desc}}</p>
    </RouterLink>
    <div v-scroll class="overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
    <span v-for="(tag, index) in note.tags" :key="index" class="text-sm mr-1 bg-neutral-800 px-2 py-1 items-center rounded">{{ tag }}</span>
    </div>
    </div>
    </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import fm from 'front-matter'

interface ProjectTool {
  imagePath: string
  alt: string
}

interface Project {
  slug: string
  title: string
  desc: string
  size: string
  images: string[]
  tools: ProjectTool[]
  tags: string[]
}


const notes = ref<Project[]>([])

const markdownFilesList = import.meta.glob(
  '@/assets/markdown/notes/*.md',
  { query: '?raw', import: 'default', eager: true }
)

for (const path in markdownFilesList) {
  const rawContent = markdownFilesList[path]
  const { attributes } = fm(rawContent as string)
  const slug = (path.split('/').pop() ?? '').replace('.md', '')

  const attrs = attributes as {
    title?: string
    desc?: string
    size?: string
    images?: string[]
    tools?: ProjectTool[]
    tags?: string[]
  }

  notes.value.push({
    slug,
    title: attrs.title || slug,
    desc: attrs.desc || '',
    size: attrs.size || '',
    images: attrs.images || [],
    tools: attrs.tools || [],
    tags: attrs.tags || [],
  })
}
</script>



