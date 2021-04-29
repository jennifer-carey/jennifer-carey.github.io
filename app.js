const navSlide = () => {
    const burger = document.querySelector(".menu-icon");
    const nav = document.querySelector(".nav-list");

    burger.addEventListener("click", ()=> {
        nav.classList.toggle("nav-active");
    });

    nav.addEventListener("click", ()=> {
        nav.classList.toggle("nav-active");
    });
}

navSlide();

