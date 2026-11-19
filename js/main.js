// Meni na telefonu: dugme otvara i zatvara navigaciju
var toggle = document.querySelector(".menu-toggle");
var nav = document.getElementById("glavni-meni");

toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
});
