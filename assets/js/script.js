document.addEventListener("scroll", function () {
    const header = document.querySelector(".head");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
