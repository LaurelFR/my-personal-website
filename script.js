const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }

}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

const hover = document.getElementById("nav-bar");
hover.addEventListener("mouseover", (event) => {
    event.target.style.color = "#0a9396";
});
hover.addEventListener("mouseout", (e) => {
    e.target.style.color = "#e9d8a6";
});

const hoverboard = document.getElementById("contact-link");
hoverboard.addEventListener("mouseover", (event) => {
    event.target.style.color = "#0a9396";
});
hoverboard.addEventListener("mouseout", (e) => {
    e.target.style.color = "#e9d8a6";
});