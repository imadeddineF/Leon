let up = document.getElementsByClassName("scroll");
window.onscroll = function () {
    if (window.scrollY >= 500) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
};
up.onclick = function () {
    window.scrollTo ({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};
