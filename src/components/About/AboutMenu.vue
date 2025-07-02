<template>
  <section class="">
    <nav
      v-scroll
      class="flex items-center gap-6 overflow-x-auto border-b-2 text-center text-white select-none sm:justify-normal"
    >
      <div v-for="link in links" :key="link.link">
        <RouterLink
          :to="link.link"
          active-class="border-b-2 pb-2 border-indigo-500 text-indigo-500"
          class="flex items-center gap-2 font-semibold hover:text-indigo-400 active"
        >
          <span>
            <component :is="link.icon" />
          </span>
          <span class="text-sm sm:block">{{ link.title }}</span>
        </RouterLink>
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Component } from 'vue'
import OverviewIcon from '@/components/icons/OverviewIcon.vue'
import EducationIcon from '@/components/icons/EducationIcon.vue'
import ExperiencesIcon from '@/components/icons/ExperiencesIcon.vue'

interface Link {
  title: string
  link: string
  icon: Component
}

const links: Link[] = [
  { title: 'Overview', link: '/about', icon: OverviewIcon },
  { title: 'Education', link: '/about/education', icon: EducationIcon },
  { title: 'Experiences', link: '/about/experiences', icon: ExperiencesIcon }
]
</script>