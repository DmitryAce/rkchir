const likeButton = document.getElementById("likeButton");
const canvas = document.getElementById("canvas");

let drawing = false;

likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("active");

    if (likeButton.classList.contains("active")) {
        startDrawing();
    } else {
        stopDrawing();
    }
});

function startDrawing() {
    drawing = true;
    canvas.style.pointerEvents = "auto";
}

function stopDrawing() {
    drawing = false;
    canvas.style.pointerEvents = "none";
}

canvas.addEventListener("mousemove", drawElement);

function drawElement(event) {
    if (drawing) {
        const element = document.createElement("div");
        element.classList.add("drawn-element");
        element.style.left = event.clientX + "px";
        element.style.top = event.clientY + "px";
        canvas.appendChild(element);
    }
}
