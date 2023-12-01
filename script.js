const mouse = document.querySelectorAll(".mouse");
const body = document.querySelector("body");
body.addEventListener("mouseenter", () => {
  gsap.to(mouse, {
    display: 'inline-block',
    duration: 0.8,
    ease: Expo.easeInOut
  })  
})
body.addEventListener("mouseleave", () => {
  gsap.to(mouse, {
    display: 'none',
    duration: 0.8,
    ease: Expo.easeInOut
  })  
})
window.addEventListener("mousemove", dets => {
  gsap.to(mouse, {
    top: `${dets.clientY}px`,
    left: `${dets.clientX}px`,
    stagger: 0.03
  })
})