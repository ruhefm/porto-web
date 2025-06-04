<template>
  <section>
    <p class="leading-relaxed text-justify">Hi, I am <strong class="text-white">Heru Purnama</strong>.</p>
    <br/><p class="leading- text-justify">
      I am  an <strong class="text-white">IT Specialist</strong> with a passion for troubleshooting and resolving technical issues. Skilled in maintaining hardware and software systems to ensure optimal
performance and user satisfaction. Aspiring <strong class="text-white">Network and System Engineer</strong> with a passion for networking concepts and protocols, build and maintain reliable network
infrastructure. <strong class="text-white">Junior Full Stack Developer</strong> with a foundation in web development and iot communication. Excited to
contribute to the creation of innovative and user-friendly web and Internet of Things applications.
    </p>
  </section>
  <section>
    <h2 class="text-justify font-bold text-xl border-b pb-1"><a id="current-role" href="#current-role">Current Role</a></h2>
    <ul class="text-justify mt-2">
      <li>
        <strong class="text-white">Network and System Engineer</strong> - Teradata Megah
        <div id="scrollGallery" class="overflow-x-auto sm:overflow-x-hidden cursor-grab select-none whitespace-nowrap max-w-2xl mx-auto py-2">
          <div class="flex space-x-8">
                <img src="/vmware-1.svg" class="w-auto h-16">
                <img src="/vite.svg" class="w-auto h-16">
                <img src="/vue.svg" class="w-auto h-16">


          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "scrollGallery",
  
  mounted() {
    const slider = document.getElementById("scrollGallery");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
};
</script>

<style scoped>
.cursor-grabbing {
  cursor: grabbing !important;
}
</style>