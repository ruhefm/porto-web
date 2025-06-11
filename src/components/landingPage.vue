<template>
  <div class="min-h-screen flex items-center justify-center max-w-screen-2xl">
        <div id="container" class="text-3xl sm:text-6xl font-mont">
          <div id="final" class="justify-left leading-relaxed text-left">
            <h1>Heru Purnama</h1>
            <h2 class="font-robo text-xl">Network & System Engineer, Software Engineer, Hunter.</h2>
            <p class="font-robo text-xl"><RouterLink to="/about" class="text-teal-600">Get to know more About Me</RouterLink></p>
            <div class="flex items-center">
              <a target="_blank" href="CV_Heru Purnama_Network_Public.pdf"><button class="flex gap-2 bg-gradient-to-br from-slate-800 to-slate-900 to-75% p-2 sm:p-3 rounded text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
Resume</button></a>
<a href="https://github.com/ruhefm" target="_blank"><img src="/github.svg" class="w-14 h-14 mx-1 py-1 invert"/></a>
<a href="https://www.linkedin.com/in/heru-purnama/" target="_blank"><img src="/linkedin.svg" class="w-14 h-14 mx-1 py-1 invert"/></a>
</div>
          </div>
    <div id="ketik" class="blinking-cursor text-left"></div>
</div>

  </div>

</template>

  <style scoped>
    .blinking-cursor::after {
      content: '|';
      animation: blink 1.5s step-start infinite;
    }

    @keyframes blink {
      50% { opacity: 0; }
    }
    #final{
      animation: daribawah 1s ease forwards;
    }
    @keyframes daribawah {
      0% {
        transform: translateY(25%);
        opacity: 0;
      }
      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  </style>

<script setup>
import { RouterLink } from 'vue-router'

  window.onload = function () {
    const sentences = [
      "Hi!",
      "I'm Heru Purnama",
      "An IT Specialist",
      "From Networking & Systems to Software Engineering",
      "I automate my work with code"
    ];

    const container = document.getElementById("container");
    const final = document.getElementById("final");
    const typewriter = document.getElementById("ketik");

    final.remove();

    let currentSentence = 0;
    let charIndex = 0;
    let speed = 120;
    let wait = 1200;
    let typing = false;
    let typingTimeout = null;
    document.addEventListener("click", Next);
    function typeSentence(sentence, callback) {
      typing = true;
      if (charIndex <= sentence.length) {
        typewriter.textContent = sentence.substring(0, charIndex);
        charIndex++;
        typingTimeout = setTimeout(() => typeSentence(sentence, callback), speed);
      } else {
        typing = false;
        callback();
      }
    }

    function startTyping() {
      if (currentSentence < sentences.length) {
        charIndex = 0;
        typeSentence(sentences[currentSentence], () => {
          currentSentence++;
          setTimeout(startTyping, wait);
        });
      } else {
        showFinalDiv();
      }
    }

    function Next() {
      if (typing) {
        clearTimeout(typingTimeout);
        typewriter.textContent = sentences[currentSentence];
        typing = false;
        currentSentence++;
        setTimeout(startTyping, wait);
      }
    }

    function showFinalDiv() {
      typewriter.remove();
      container.appendChild(final);
    }
    startTyping();
  };
</script>