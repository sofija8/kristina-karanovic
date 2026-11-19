// Filter vesti po vrsti (Sve, Tekstovi, Video...)
// Kasnije: ovde ide i učitavanje vesti iz News Manager API-ja.
var buttons = document.querySelectorAll(".filters button");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var type = btn.getAttribute("data-filter");

        buttons.forEach(function (b) {
            b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });

        document.querySelectorAll("#vesti .news-card").forEach(function (card) {
            card.hidden = type !== "sve" && card.getAttribute("data-type") !== type;
        });
    });
});
