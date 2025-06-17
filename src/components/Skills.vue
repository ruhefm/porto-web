<template>
  <section class="">
    <h2 class="text-xl font-semibold border-b pb-1 my-4 text-left"><a id="tools" href="#tools">Tools</a></h2>
    <ul class="flex flex-wrap gap-2 text-sm">
      <li class="bg-gradient-to-br from-slate-800 to-slate-900 to-75% px-3 py-1 rounded" v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const skills = ["Python", "Flask", "Django", "Paramiko", "JavaScript", "Vue.js", "Express", 'Mikrotik', 'OpenVPN', 'IPSec', 'BGP', 'Nginx', 'Apache Tomcat', 'VMware', 'Citrix']
</script>