<template>
  <section>
    <h2 class="text-justify font-bold text-xl border-b pb-1"><a id="current-role" href="#current-role">Current Role</a></h2>
    <ul class="text-justify mt-2">
      <li>
        <p class="max-w-56 sm:max-w-full"><strong class="text-white">Network and System Engineer</strong> - Teradata Megah</p>
        <div v-scroll id="scrollGallery" class="overflow-x-auto sm:overflow-x-hidden cursor-grab select-none whitespace-nowrap items-center justify-center mx-auto">
          <div class="animate-slide">
          <div class="inline-block space-x-10" v-for="(img, index) in techStackImages" :key="index">
          <img :src="img.path" :alt="img.name" :class="`filter ${img.filter} mx-2 w-16 h-16 select-none pointer-events-none`" draggable="=false">
          </div>
          <div class="inline-block space-x-10" v-for="(img, index) in techStackImages" :key="index">
          <img :src="img.path" :alt="img.name" :class="`filter ${img.filter} mx-2 w-16 h-16 select-none pointer-events-none`" draggable="=false">
          </div>
          </div>
        </div>
      </li>
      <li>Created and managed virtualization environments using VMware and Citrix to support banking systems.

Maintained and secured network infrastructure, including Checkpoint firewall administration and rule management.

Configured and monitored IPSec and OpenVPN for secure client and inter-branch connectivity.

Collaborated closely with the Support and Developer teams to deploy core banking systems and API services to the production environment.

Implemented and monitored database replication strategies to ensure high availability and data consistency.</li>
    </ul>
  </section>
</template>

<!-- <script>
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
</script> -->

<style scoped>
.cursor-grabbing {
  cursor: grabbing !important;
}
</style>

<script setup>
const techStackImages = [
  {name: "vmware", path: "vmware-1.svg", filter:'invert'},
  {name: "citrix", path: "Citrix_Systems-Logo.wine.svg", filter:'invert'},
  {name: "cisco", path: "cisco.svg"},
  {name: "f5", path: "f5.svg"},
  {name: "check-point", path: "checkPoint.svg", filter: "invert"},  
  {name: "aruba", path: "Aruba_Networks-Logo.wine.svg"},
  {name: "hpe", path: "Hewlett_Packard_Enterprise-Logo.wine.svg", filter: "invert"},
  {name: "ubiquiti", path: "Ubiquiti_Networks-Logo.wine.svg"},
  {name: "microsoft", path: "Microsoft-Logo.wine.svg",},  
  {name: "mysql", path: "MySQL-Logo.wine.svg"},
  {name: "msql", path: "microsoft-sql-server-logo-svgrepo-com.svg", filter: "invert"},
]

const rolesExperience = [
  {title: "Network & System Engineer", company: "Teradata Megah", location: "Bandung"}

]
</script>