<template>
    <section class="text-justify">
    <div v-for="(project,index) in projects" :key="index">
    <h1 class="font-mont text-3xl sm:text-4xl md:text-5xl font-semibold py-4">{{project.title}}</h1>
    <div v-scroll class="flex overflow-auto">
    <img v-for="(image,index) in project.images" :key="index" :src="image" class="opacity-75 mx-2">
    <!-- <img src="/ui-1.png" class="md:max-w-xl opacity-75 mx-2"> -->
    </div>
    <p class="py-4">{{project.desc}}</p>
    </div>
    </section>
</template>

<script setup>
const projects = [
    { title:'UI Project', images:['/ui-2.png'], desc:`The main goal of this project is to improve my UI design skills and aesthetic sense. It is a mockup of a mobile application for water service payments in my neighborhood, IoT Plug and Play, and a health diagnose apps.` },
    { title:'RELATE Project', images:['/relateDetection.png','/relateRegister1.png','/relateRegister2.png','/relateLogin.png','relateTitle.png'], desc:`This is a group project called RELATE, primarily a server-side web application. My main responsibility was integrating computer vision using YOLO (in Python) and displaying the results on the frontend. The project also features a chatbot built with React and NLP, which recommends appropriate actions based on the output—such as suggesting nearby repair shops if a phone screen is detected as cracked. The tech stack includes Python, Django, and UI-Kit for the frontend.` }
]
</script>