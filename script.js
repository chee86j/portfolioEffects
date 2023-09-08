function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Code for the Tilt Effect
class VanillaTilt {
  constructor(element) {
    this.element = element;
    this.settings = {
      scale: 1,
      perspective: 1000,
      max: 15,
    };
    this.init();
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.element.addEventListener("mouseleave", this.onMouseLeave.bind(this));
  }

  onMouseEnter(event) {
    this.update(event);
  }

  onMouseMove(event) {
    this.update(event);
  }

  onMouseLeave() {
    this.reset();
  }

  update(event) {
    const rect = this.element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tiltX = (x - 0.5) * this.settings.max;
    const tiltY = (y - 0.5) * this.settings.max;

    this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${this.settings.scale})`;
  }

  reset() {
    this.element.style.transform = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const tiltElements = document.querySelectorAll("[data-tilt]");
  tiltElements.forEach(function (element) {
    new VanillaTilt(element);
  });
});
