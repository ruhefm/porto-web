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
      <div class="my-4 mx-auto">
        <RouterLink :to="`/projects/${project.slug}`">
        <button class="bg-gradient-to-br from-slate-700 to-slate-900 to-75% p-2 text-sm">
        Read More
        </button>
    </RouterLink>
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

const projects = ref<Project[]>([])

const markdownFilesList = import.meta.glob(
  '@/assets/markdown/projects/*.md',
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
  projects.value.push({
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



