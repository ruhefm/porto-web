---
title: SEO in Vue Vite
desc: This is to enable customize SEO meta inside <head> to each file. Using SSG/SSR to be rendered at built moment so it recognized by robots.txt.
images: []
size:
tools: []
tags: ['SEO', 'Vue', 'Vite']
---

# SEO
## Install dependencies
Vueuse head digunakan untuk <head> metadata dinamis.
Sementara SSG digunakan untuk render halaman ketika dibuild lalu disimpan, agar bisa langsung diakses tanpa dirender di client.
```
npm install @vueuse/head
npm install vite-plugin-ssr-ssg
```