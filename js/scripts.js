const buttonMenuSidebar = document.querySelector(".button-sidebar");
const headerContainerSidebar = document.querySelector(".header-list");
let showSidebar = false;

buttonMenuSidebar.addEventListener("click", toggleButtonSidebar);
buttonMenuSidebar.addEventListener("click", toggleSidebar);

function toggleButtonSidebar() {
    buttonMenuSidebar.classList.toggle("button-close");
}

headerContainerSidebar.style.display = "none";

function toggleSidebar() {
    showSidebar = !showSidebar;

    if (showSidebar) {
        headerContainerSidebar.style.display = "flex";

        headerContainerSidebar.style.marginRight = "0";

        headerContainerSidebar.style.animationName = "showSidebar";
    } else {
        headerContainerSidebar.style.display = "none";

        headerContainerSidebar.style.marginRight = "-100vw";

        headerContainerSidebar.style.animationName = "";
    }


    window.addEventListener("resize", function (event) {
        if (window.innerWidth > 768 && showSidebar) {
            toggleSidebar();
            buttonMenuSidebar.classList.toggle("button-close");
        }
    });

    const body = document.body;
    if (showSidebar) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "scroll";
    }
}

function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

const buttonChangeTheme = document.querySelector(".change-theme");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function loadTheme() {
    const darkMode = localStorage.getItem("dark-mode");

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

buttonChangeTheme.addEventListener("change", function () {
    toggleDarkMode();

    localStorage.removeItem("dark-mode");;

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", 1)
    }
});


const buttonPhoneOne = document.querySelector(".button-1");
const buttonPhoneTwo = document.querySelector(".button-2");
const buttonPhoneThree = document.querySelector(".button-3");
let imagePhone = document.querySelector(".main-img")
let namePhone = document.querySelector(".container-texts h1");
let descriptionPhone = document.querySelector(".container-texts p");
let pricePhone = document.querySelector(".container-texts span");

buttonPhoneOne.addEventListener("click", changeInformationPhoneOne);
buttonPhoneTwo.addEventListener("click", changeInformationPhoneTwo);
buttonPhoneThree.addEventListener("click", changeInformationPhoneThree);

function changeInformationPhoneOne() {
    imagePhone.src = "./img/product1.png";
    imagePhone.alt = "Produto 1";
    namePhone.textContent = "Sound Dream";
    descriptionPhone.textContent = "Incredible sound, incredible comfort.";
    pricePhone.innerHTML = "&#36; 599,00";
}

function changeInformationPhoneTwo() {
    imagePhone.src = "./img/product2.png";
    imagePhone.alt = "Produto 2";
    namePhone.textContent = "Air Sound";
    descriptionPhone.textContent = "The perfect companion for your music.";
    pricePhone.innerHTML = "&#36; 499,00";
}

function changeInformationPhoneThree() {
    imagePhone.src = "./img/product3.png";
    imagePhone.alt = "Produto 3";
    namePhone.textContent = "Black Sound";
    descriptionPhone.textContent = "The ultimate listening experience.";
    pricePhone.innerHTML = "&#36; 399,00";
}