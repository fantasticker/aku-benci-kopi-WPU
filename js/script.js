// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// Saat hamburger menu di klik
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
});

// Klik di luar elemen
document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    e.preventDefault();
};

// Klik di luar elemen
const searchButton = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }
});

// Toggle class active shopping cart
const shoppingCartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault;
};

//Klik di luar elemen
document.addEventListener("click", function (e) {
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove("active");
    }
});
