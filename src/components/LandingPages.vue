<template>
  <div class="min-h-screen flex items-center justify-center max-w-2xl mx-auto">
        <div id="container" class="text-3xl sm:text-6xl font-mont">
          <div id="final" class="justify-left leading-relaxed text-left">
            <!-- <h1>Heru Purnama</h1> -->
            <div id="ketik" class="blinking-cursor text-left"></div>
            <h2 class="font-robo text-xl">Network & System Engineer, Software Engineer, Hunter.</h2>
            <p class="font-robo text-xl"><RouterLink to="/about" class="text-teal-600">Get to know more About Me</RouterLink></p>
            <div class="flex items-center">
              <a target="_blank" href="HeruPurnama_CV.pdf" class="button 
              inline-flex items-center 
              gap-2
              text-xl
              bg-gradient-to-br from-slate-800 to-slate-900 to-75% 
              p-2 sm:p-3 
              border-[1px] border-transparent rounded
              ">
                <DownloadIcon />
Resume</a>
<a href="https://github.com/ruhefm" target="_blank"><img src="/github.svg" class="w-14 h-14 mx-1 py-1 invert"/></a>
<a href="https://www.linkedin.com/in/heru-purnama/" target="_blank"><img src="/linkedin.svg" class="w-14 h-14 mx-1 py-1 invert"/></a>
</div>
          </div>
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

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import DownloadIcon from '@/components/icons/DownloadIcon.vue';

  onMounted(() => {

    interface SentencesArray extends Array<string> {}

    const sentences: SentencesArray = [
      "I'm Heru Purnama",
      "I automate my work with code"
    ];

    interface TypewriterElement extends HTMLElement {
    textContent: string | null;
    }

    const typewriter = document.getElementById("ketik") as TypewriterElement | null;

    // const container = document.getElementById("container");
    // const final = document.getElementById("final");

    // final.remove();

    let currentSentence = 0;
    let charIndex = 0;
    let speed = 100;
    let wait = 500;
    let typing = false;
    let typingTimeout: ReturnType<typeof setTimeout> | null = null;







    document.addEventListener("click", Next);
    interface TypeSentenceCallback {
      (): void;
    }

    function typeSentence(sentence: string, callback: TypeSentenceCallback): void {
      typing = true;
      if (charIndex <= sentence.length) {
      typewriter!.textContent = sentence.substring(0, charIndex);
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
        clearTimeout(typingTimeout !== null ? typingTimeout : undefined)
        typewriter!.textContent = sentences[currentSentence];
        typing = false;
        currentSentence++;
        setTimeout(startTyping, wait);
      }
    }

    function showFinalDiv() {
      // typewriter.remove();
      // container.appendChild(final);
      typewriter!.textContent = "Heru Purnama"
    }
    startTyping();
  });


</script>