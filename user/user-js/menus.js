// show chicken menus popup

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-card")) {
    // console.log("hihi");
    toggleChickenPopup();
    chickenDetail(e.target.parentElement);
  }
});
function toggleChickenPopup() {
  document.querySelector(".popup-chicken").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
}
document.querySelector("#close-popup").onclick = () => {
  document.querySelector(".popup-chicken").classList.remove("open");
};
// hide popup when clicking outside of it

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-chicken")) {
    toggleChickenPopup();
  }
});

function chickenDetail(chickenItem) {
  document.querySelector(".popup-chicken-img img").src =
    chickenItem.querySelector(".img-chicken img").src;
  document.querySelector(".chicken-name h3").innerHTML =
    chickenItem.querySelector(".chicken-dish-name h3").innerHTML;
  document.querySelector(".chicken-text-popup p").innerHTML =
    chickenItem.querySelector(".chicken-text p").innerHTML;
  document.querySelector(".price").innerHTML =
    chickenItem.querySelector(".price-chicken ").innerHTML;
}

// add product
