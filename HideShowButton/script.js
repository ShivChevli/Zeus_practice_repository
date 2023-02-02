let p = document.querySelector("p");
let btn = document.querySelector("#btn");
let show = false;
function toggleText() {
    if (show) {
        p.style.display = "block";
        btn.innerHTML = "Hide Data";
    } else {
        p.style.display = "none";
        btn.innerHTML = "Show Data";    
    }
    show = !show;
}
btn.addEventListener("click", () => {
    toggleText();
})