const inp =document.getElementById("inp")
const box = document.getElementById("box")
const form = document.getElementById("form")

let number = "";
inp.addEventListener("input", (e) => {
    number = +e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    } 
    const msj = `${number} ededin fator: <span class="result">${factorial}</span>`
    box.innerHTML = msj;

    inp.value = "";
    inp.focus();
});

