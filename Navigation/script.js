let heading = document.querySelector("#heading");
let nameInput = document.querySelector("input");

nameInput.addEventListener("change", (e) => {
    heading.innerHTML = `Welcome ${e.target.value}`;
})