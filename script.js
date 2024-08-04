const scrollElement = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollElement.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollElement.scrollLeft += evt.deltaY;
    scrollElement.style.scrollBehavior = "auto";
})

backBtn.addEventListener("click", () => {
    scrollElement.style.scrollBehavior = "smooth";
    scrollElement.scrollLeft -= 900;
})
nextBtn.addEventListener("click", () => {
    scrollElement.style.scrollBehavior = "smooth";
    scrollElement.scrollLeft += 900;
})

