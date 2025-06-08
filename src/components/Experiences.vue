<template>
  <section class="">
  <ul class="list-inside text-left" v-for="(education, index) in educations" :key="index">
    <li class="block py-2 md:flex border-b items-center">
      <!-- <div class="items-center justify-center flex py-4 min-w-20">
        <img :src="`/${education.path}`" :alt="education.title" class="w-16 h-16 rounded-full object-cover bg-white">
      </div> -->
      <div class="">
      <p class="text-xl md:text-2xl text-center md:text-left">{{ education.title }}</p>
      <p class="text-lg md:text-xl text-center md:text-left">{{ education.dateRange }}</p>
      <p class="text-lg md:text-xl text-center md:text-left">{{ education.place }}</p>
      <li class="list-disc" v-for="(line, idx) in education.desc.split('\n')" :key="idx">
    {{ line.replace(/^•\s*/, '') }}
  </li>
      </div>
    </li>
  </ul>
  </section>
</template>

<script setup>
const educations = [


  { title:'Scalable Web Service With GoLang', dateRange:'Feb 19 2024 - Mar 25 2024', path:'upi.png', place:'Kominfo Hacktiv8', 
  desc: `•	Developing code to import data from Excel, creating a REST API, and designing a minimal web game similar to Fallout Shelter.
•	Creating MyGram API, which includes user management (login and register), photo uploads, commenting functionality, and social media interactions (post, get, put, delete) related to userIDs, and deploying it to Railway.`},
  { title:'Artificial Intelligence Mastery Program', dateRange:'Feb 22 2022 - Jul 22 2022', path:'smkn5.png', place:'Orbit Future Academy', 
  desc: `•	Employing Git version control for collaboration.
•	Implement a chatbot with NLP to offer YouTube recommendations based on user queries.
•	Utilizing Computer Vision to categorize phone screen conditions, ranging from minor to severe damages.
•	Deploy a website featuring NLP, CV, Google API, CRUD, authentication, and a profile system on both Heroku and a private server.` },
  { title:'Computer Network Engineer & IT Helpdesk', dateRange:'Jul 02 2018 – Sep 28 2018', path:'smkn5.png', place:'DitSTI ITB', 
  desc: `•	Offer client services, including hardware upgrades and repairs (primarily laptops), installing, licensing, and repairing software to various operating systems.
•	LAN installation in new building and made perfect server with Control Panel using ISPConfig.` },



]
</script>