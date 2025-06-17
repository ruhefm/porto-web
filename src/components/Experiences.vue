<template>
  <section class="">
  <ul class="list-inside text-left" v-for="(experience, index) in experiences" :key="index">
    <li class="block py-4 md:flex items-center border-b border-b-slate-800">
      <!-- <div class="items-center justify-center flex py-4 min-w-20">
        <img :src="`/${experience.path}`" :alt="experience.title" class="w-16 h-16 rounded-full object-cover bg-white">
      </div> -->
      <div class="">
      <p class="text-sm md:text-md text-left md:text-left font-roboto text-gray-400">{{ experience.dateRange }}</p>
      <p class="text-xl md:text-xl text-left md:text-left text-white font-semibold">{{ experience.title }}</p>
      <!-- <div class='flex items-center'>
        <img :src=experience.path class="w-10 h-10 rounded-full object-cover">
        <p class="text-md md:text-lg text-left md:text-left tracking-wider mx-4">{{ experience.place }}</p>
      </div> -->
      <p class="text-md md:text-lg text-left md:text-left tracking-wider">{{ experience.place }}</p>
      <li class="list-disc" v-for="(line, index) in experience.desc.split('\n')" :key="index">
    {{ line.replace(/^•\s*/, '') }}
  </li>
      </div>
    </li>
  </ul>
  </section>
</template>

<script setup lang="ts">

interface Experience {
  title: string;
  dateRange: string;
  path: string;
  place: string;
  desc: string;
}

const experiences : Experience[] = [


  { title:'Scalable Web Service With GoLang', dateRange:'FEB 2024 - MAR 2024', path:'/hacktiv8.png', place:'Hacktiv8 - Indonesia, Remote', 
  desc: `•	Developing code to import data from Excel, creating a REST API, and designing a minimal web game similar to Fallout Shelter.
•	Creating MyGram API, which includes user management (login and register), photo uploads, commenting functionality, and social media interactions (post, get, put, delete) related to userIDs, and deploying it to Railway.`},
  { title:'Artificial Intelligence Mastery Program', dateRange:'FEB 2022 - JUL 2022', path:'/orbit.png', place:'Orbit Future Academy - Indonesia, Remote', 
  desc: `•	Employing Git version control for collaboration.
•	Implement a chatbot with NLP to offer YouTube recommendations based on user queries.
•	Utilizing Computer Vision to categorize phone screen conditions, ranging from minor to severe damages.
•	Deploy a website featuring NLP, CV, Google API, CRUD, authentication, and a profile system on both Heroku and a private server.` },
  { title:'Computer Network Engineer & IT Helpdesk', dateRange:'JUL 2018 - SEP 2018', path:'smkn5.png', place:'DitSTI ITB - Bandung, Office', 
  desc: `•	Offer client services, including hardware upgrades and repairs (primarily laptops), installing, licensing, and repairing software to various operating systems.
•	LAN installation in new building and made perfect server with Control Panel using ISPConfig.` },



]
</script>