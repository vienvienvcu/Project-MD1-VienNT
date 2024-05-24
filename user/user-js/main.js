let subMenus = document.getElementById("subMenus");
let openMenus = document.querySelector(".menus");

openMenus.addEventListener("click", () => {
  subMenus.classList.toggle("open-menus");
});
let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");

// show nav-toggle

const navToggle = document.querySelector(".nav-toggler"),
  headerToggle = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  document.querySelector(".header .navbar").classList.toggle("open");
  navToggle.classList.toggle("transition");
});

// show search
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};
// ======= SHOW SLIDER============

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ======= SHOW SLIDER food============

var swiper = new Swiper(".food-slider", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

function renderMenuCategory() {
  const categorys = JSON.parse(localStorage.getItem("categorys")) || [];
  const products = JSON.parse(localStorage.getItem("products")) || [];

  stringCategorySection = "";
  for (let i = 0; i < categorys.length; i++) {
    const productsOfCategory = products.filter(
      (name) => name.category === categorys[i].name
    );

    let stringProducts = "";
    for (let j = 0; j < productsOfCategory.length; j++) {
      stringProducts += `
        <div class="chicken-items">
          <div class="chicken-item">
            <div class="img-chicken">
              <img src="${productsOfCategory[j].image}" />
            </div>
            <div class="icon-heart">
              <i class="bx bxs-heart"></i>
            </div>
            <div class="chicken-dish-name">
              <h3>${productsOfCategory[j].name}</h3>
            </div>
            <div class="chicken-text">
              <p>
              ${productsOfCategory[j].description} 
              </p>
            </div>
            <button class="view-card btn">Add To Card</button>
            <span class="price-chicken">${productsOfCategory[j].price} VND </span>
          </div>
        </div> 
      `;
    }

    stringCategorySection += `
    <section class="chicken-menu">
      <h1>${categorys[i].name}</h1>

      <div class="container-chicken" id="container-chicken">
        
        ${stringProducts}

      </div>
    </section>
    `;
    document.getElementById("menu-category").innerHTML = stringCategorySection;
  }
}
renderMenuCategory();
