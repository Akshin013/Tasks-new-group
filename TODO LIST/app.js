const addBtn    = document.getElementById("add-btn");
const editBtn   = document.getElementById("edit-btn"); 
const deleteBtn = document.getElementById("delete-btn"); 

let mainTodo = document.getElementById("todo-main-div");
// let todoDiv =  document.getElementById("todo-div");
let mainDiv =  document.getElementById("main-div");
    let f = "todo-div"

    // let now = Date.now();
    // console.log(now);
    
    // function vv() {
    // console.log(f);
    // let m = document.getElementsByClassName(`${now}`)
    // m.style.color = "red1"
    
    // let now = Date.now();
    // console.log(now);
    // let doneNow = Date.now();
    // console.log(now);
    function cc() {
        console.log("asd");
        console.log(`${now}`);
        
        console.log(`${doneNow}`);
    }

// }   

function todoAdd() {
    let f = 1
    // const g = vv()
    let now = Date.now();
    // let now = Date.now();
    console.log(now);
    let doneNow = Date.now();
    // let doneNow = Date.now();
    // console.log(now);
    let a = prompt("Enter your todo")
    localStorage.setItem(`${now}`, a)
    console.log(localStorage.getItem(`${now}`));
    
    mainTodo.innerHTML += `
    <div id="${now}" class="main-div">
         <div id="todo-div">
        <p>${a}</p>
        </div>

        <div id="btn-div" class=""> 
            <button id="${doneNow}" class="done-btn">Done</button>
            <button id="${f}" class="edit-btn">Edit</button>
            <button id="delete-btn" onclick="deleteF()">Dlete</button>
        </div>  
        </div>
    `



    // // mainTodo.innerHTML += `<button onclick="vv()">Done</button>`;
    // let todoDiv =  document.getElementById("todo-div");

    // const doneBtn = document.getElementById(`${doneNow}`);
    // console.log(doneBtn);
    
    // doneBtn.addEventListener("click", cc) 
    // doneBtn.addEventListener("click", ()=>{ 
    //     console.log(`${doneNow}`);
        

    //     console.log(`${now}`);
    //     // now.style.backgroundColor = "red";
    // })
    // // console.log(todoDiv);
}


addBtn.addEventListener("click", todoAdd)
localStorage.clear()