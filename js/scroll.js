// Get scroll position to easily add scroll-based animations
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

// Shrink header upon scroll for desktop
const mediaquery = window.matchMedia("(min-width: 1024px)"),
  head = document.querySelector("#header");

if (mediaquery.matches) {
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      head.classList.add("small");
    } else {
      head.classList.remove("small");
    }
  });
}

// Display cta
const cta = document.querySelector("#fixedCta");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 700) {
    cta.classList.add("appear");
  } else {
    cta.classList.remove("appear");
  }
});
