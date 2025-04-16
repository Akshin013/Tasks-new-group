const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

const main2 = document.getElementById("main2");

const main = document.getElementById("main");
let a = 1;
setInterval(()=>{
    main.className = `main${a}`;
    a++;

    if (a > 3) {
        a = 1;
    }
}, 1200)


let b = 1;

nextBtn.addEventListener("click", () => {
    // b ++;
    main2.className = `main${b}`
    console.log(b);
    if (b >= 3) {
        // b = 3
        main2.className = `main${b}`
        nextBtn.disabled = true;
    }else if (b < 4) {
        b++;
        main2.className = `main${b}`
        backBtn.disabled = false;
    }
})



backBtn.addEventListener("click", () => {
    // b--;
    main2.className = `main${b}`
    if (b === 1) {
        // b = 1
        main2.className = `main${b}`
        backBtn.disabled = true;
    }else if (b > 1) {
        b--;
        main2.className = `main${b}`
        backBtn.disabled = false;
    }
})
