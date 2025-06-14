<template>
    <section class="text-justify animate-daribawah grid-cols-1 md:grid-cols-2 lg:grid-cols-3" v-if="notes.length">

    <div v-for="note in notes" :key="note.slug">
    <RouterLink :to="`/notes/${note.slug}`">
        <div class="p-5 my-4 mr-2 max-w-sm rounded-3xl border border-neutral-400 overflow-hidden">
        <h1 class="font-mont text-lg sm:text-xl font-semibold py-4 text-left">{{note.title}}</h1>
    <p class="text-sm my-1">{{note.desc}}</p>
    <div v-scroll class="overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
    <span v-for="(tag, index) in note.tags" :key="index" class="text-sm mr-1 bg-neutral-800 px-2 py-1 rounded">{{ tag }}</span>
    </div>
    </div>
    </RouterLink>
    </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import fm from 'front-matter'

const notes = ref([])

const markdownFilesList = import.meta.glob(
  '@/assets/markdown/notes/*.md',
  { query: '?raw', import: 'default', eager: true }
)

for (const path in markdownFilesList) {
  const rawContent = markdownFilesList[path]
  const { attributes } = fm(rawContent)
  const slug = path.split('/').pop().replace('.md', '')

  console.log('YAML data:', attributes)

  notes.value.push({
    slug,
    title: attributes.title || slug,
    desc: attributes.desc || '',
    size: attributes.size || '',
    images: attributes.images || [],
    tools: attributes.tools || [],
    tags: attributes.tags || [],
  })
}
</script>



