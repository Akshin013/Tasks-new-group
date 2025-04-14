const cardNomber = document.getElementById("cardNomber");
const cardPin = document.getElementById("cardPin");
const checkBtn = document.getElementById("checkBtn");
const mainDiv = document.getElementById("main-div")
const balance = 2423

const pinCode = "1234"
const nomber = "1111222233334444"
let nom = nomber.slice(0,4) + " " + nomber.slice(4,8) + " " + nomber.slice(8,12) + " " + nomber.slice(12,16)

function checkF() {

    let a = cardPin.value
    let b = cardNomber.value
    // console.log(b);
    
    if (a === pinCode && b === nomber) {
        mainDiv.innerHTML += 
        `
             <div id="menu-div">
                <div class="card-info">
                    <div class="card-1" id="card">
                        <img src="/Card  Task/images/chip.png" class="chip" alt="chip">
                        
                        <button class="eye-btn">
                            <img id="eye-btn" src="/Card  Task/images/eye.png">
                        </button>
                        <h1 id="nomer">${nom}</h1> 
                        <h class="name">AKSHIN GADIMOV</h>
                
                            <div class="data1">
                                <p5>Balance</p5>
                                <h1 id="balance" class="data">${balance}</h1>
                            </div>
                        <img src="/Card  Task/images/visa.png" class="visa" alt="visa">    
              
                    </div>
                <div class="card-2">
                    <input id="cashVal" type="number">
                    <button id="cash-btn">
                        Cash
                    </button>
                </div>  
            </div>
        </div>
        `
        const nomber = document.getElementById("nomer")
        const eyeBtn = document.getElementById("eye-btn")
        eyeBtn.addEventListener("click", () =>{
            nomber.textContent="****************"
        })

        const cashVal = document.getElementById("cashVal")
        const cashBtn = document.getElementById("cash-btn")
        const balanceId = document.getElementById("balance")
        cashBtn.addEventListener("click", () => {
            let a = balance - cashVal.value
            if (a>=0) {
                balanceId.textContent =a
            }else if (a<0){
                alert("Pulunuz catmir!!")
                
            }else{
                console.log("sdf");
            }
        })
}else{
    alert("Sehf var!! ")
}
}

checkBtn.addEventListener("click", checkF)
