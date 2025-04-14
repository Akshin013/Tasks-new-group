const btn0 =         document.getElementById("btn-0")
const btn1 =         document.getElementById("btn-1")
const btn2 =         document.getElementById("btn-2")
const btn3 =         document.getElementById('btn-3')
const btn4 =         document.getElementById("btn-4")
const btn5 =         document.getElementById("btn-5")
const btn6 =         document.getElementById("btn-6")
const btn7 =         document.getElementById("btn-7")
const btn8 =         document.getElementById("btn-8")
const btn9 =         document.getElementById("btn-9")
const btnA =         document.getElementById("btn-ac")
const btnPlus =      document.getElementById("btn-+")
const btnProcent =   document.getElementById("btn-%")
const btnDivision =  document.getElementById("btn-/")
const btnX =         document.getElementById("btn-X")
const btnMinus =     document.getElementById("btn--")
const btnPlusMinus =  document.getElementById("btn-plus-minus") 
const btnk =         document.getElementById("b3n-k")
const btnPoint =     document.getElementById("btn-,")
const btnResult =    document.getElementById("btn-=") 

const result =       document.getElementById("result")

let resultCalk = []

btn0.addEventListener("click", () => {
    result.textContent += 0
})
btn1.addEventListener("click", () => {
    result.textContent += 1
})

btn2.addEventListener("click", () => {
    result.textContent += 2
})
btn3.addEventListener("click", () => {
    result.textContent += 3
})
btn4.addEventListener("click", () => {
    result.textContent += 4
})
btn5.addEventListener("click", () => {
    result.textContent += 5
})
btn6.addEventListener("click", () => {
    result.textContent += 6
})
btn7.addEventListener("click", () => {
    result.textContent += 7
})
btn8.addEventListener("click", () => {
    result.textContent += 8
})
btn9.addEventListener("click", () => {
    result.textContent += 9
    +
})

// OPER


btnPlus.addEventListener("click", () => {
    result.textContent += " + "
})

btnMinus.addEventListener("click", () => {
    result.textContent += "-"
})

// btnPlus.addEventListener("click", () => {
//     result.textContent += "+"
// })

// btnPlus.addEventListener("click", () => {
//     result.textContent += "+"
// })



// FOR OPER ===

btnResult.addEventListener("click", () => {
    if (result.textContent.includes("+")) {
       
    let a = result.textContent
    // a.concat(" + ", "sdf")
    // console.log(a);
    // console.log(a.slice(1,3));
    a.join("+")
    // console.log("result");
     console.log(a);
     
    }else{
     +  console.log("sdf");
    1  `Aq`1
        
    }
})



