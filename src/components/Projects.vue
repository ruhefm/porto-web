<template>
    <section class="text-justify animate-daribawah">
    <div v-for="(project,index) in projects" :key="index">
    <h1 class="font-mont text-3xl sm:text-4xl md:text-5xl font-semibold py-4 text-left">{{project.title}}</h1>
    <div v-scroll class="flex overflow-auto select-none">
    <img v-for="(image,index) in project.images" :key="index" :src="image" :class="`select-none opacity-75 max-h-screen mx-auto px-1 max-w-lg ${project.size}`">
    </div>
    <p class="py-4">{{project.desc}}</p>
    </div>
    </section>
</template>

<script setup>
const projects = [
    { title:'UI Project', size:'max-w-screen-xl', images:['/ui-2.png'], desc:`The main goal of this project is to improve my UI design skills and aesthetic sense. It is a mockup of a mobile application for water service payments in my neighborhood, IoT Plug and Play, and a health diagnose apps.` },
    { title:'Relate Project', size:'', images:['/relateDetection.png','/relateRegister1.png','/relateRegister2.png','/relateLogin.png','relateTitle.png'], desc:`This is a group project called RELATE, primarily a server-side web application. My main responsibility was integrating computer vision using YOLO (in Python) and displaying the results on the frontend. The project also features a chatbot built with React and NLP, which recommends appropriate actions based on the output—such as suggesting nearby repair shops if a phone screen is detected as cracked. The tech stack includes Python, Django, and UI-Kit for the frontend.` },
    { title:'Security Method Analysis on Mikrotik', size:'', images:['/skripsi.png'], desc:`This research demonstrates that using raw rules provides better performance compared to filter rules in Mikrotik. The evaluation was conducted using the TOPSIS multi-criteria decision-making method.` },
]
</script>