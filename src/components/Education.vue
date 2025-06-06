<template>
  <section class="">
  <ul class="list-inside text-left" v-for="(education, index) in educations" :key="index">
    <li class="block py-2 md:flex border-b items-center">
      <div class="items-center justify-center flex py-4"><img :src="`/${education.path}`" :alt="education.title" class="w-16 h-16 rounded-full object-cover bg-white"></div>
      <div>
      <p class="px-4 text-xl md:text-2xl text-center md:text-left">{{ education.title }}</p>
      <p class="px-4 text-lg md:text-xl text-center md:text-left">{{ education.dateRange }}</p>
      <p class="px-4 text-lg md:text-xl text-center md:text-left">{{ education.major }}</p>
      <li class="px-4 list-disc" v-for="(line, idx) in education.desc.split('\n')" :key="idx">
    {{ line.replace(/^•\s*/, '') }}
  </li>
      </div>
    </li>
  </ul>
  </section>
</template>

<script setup>
const educations = [
  { title:'Universitas Pendidikan Indonesia', dateRange:'Apr 2019 - Aug 2023', path:'upi.png', major:'Bachelor of Electrical Engineering', 
  desc: `•	Actively participating in the Kampus Merdeka program.
•	Engaged in server management for ee.upi.edu, involving routers, switches, firewalls, NAT, and port forwarding, Proxmox.
•	Assisting friends with projects: IoT projects, graph, parking system with db, API, MQTT, SIM800L Telegram.
•	Developed a website to provide easy access to the TOPSIS algorithm, using Flask and Python.
•	Engaging in off-campus activities by enrolling in various online courses and webinars.
•	Proficient in operating AutoCAD, SketchUp, and Blender for building and electrical drawings.`},
  { title:'SMKN 5 Bandung', dateRange:'Jul 2017 - May 2019', path:'smkn5.png', major:'Network and Computer Engineering', 
  desc: `•	Actively participating in the Kampus Merdeka program.
•	Engaged in server management for ee.upi.edu, involving routers, switches, firewalls, NAT, and port forwarding, Proxmox.
•	Assisting friends with projects: IoT projects, graph, parking system with db, API, MQTT, SIM800L Telegram.
•	Developed a website to provide easy access to the TOPSIS algorithm, using Flask and Python.
•	Engaging in off-campus activities by enrolling in various online courses and webinars.
•	Proficient in operating AutoCAD, SketchUp, and Blender for building and electrical drawings.` },
]
</script>