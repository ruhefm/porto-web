export default {
  mounted(el: any) {
    let isDown = false;
    let startX: any;
    let scrollLeft: any;

    el.addEventListener("mousedown", (e: any) => {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });

    el.addEventListener("mouseup", () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    });

    el.addEventListener("mouseleave", () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    });

    el.addEventListener("mousemove", (e: any) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    });
  }
};