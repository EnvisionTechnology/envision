// day/night toggle

const nightday = document.getElementById("nightday");
const target = document.getElementById("target");
const services = document.querySelector(".servicesContainer");

nightday.addEventListener("click", () => {
  target.classList.toggle("sun");
  target.classList.toggle("moon");
  services.classList.toggle("night");
});
