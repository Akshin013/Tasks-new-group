const addBtn    = document.getElementById("add-btn");
const editBtn   = document.getElementById("edit-btn"); 
const deleteBtn = document.getElementById("delete-btn"); 

let mainTodo = document.getElementById("todo-main-div");
// let todoDiv =  document.getElementById("todo-div");
let mainDiv =  document.getElementById("main-div");
    let f = "todo-div"

    // let now = Date.now();
    // console.log(now);
    
    function vv() {
    console.log(f);
    let m = document.getElementsByClassName(`${now}`)
    m.style.color = "red1"
    
    console.log(`${now}`);
    
}   

function todoAdd() {
    const g = vv()

    let now = Date.now();
    console.log(now);
    let a = prompt("Enter your todo")
    mainTodo.innerHTML += `
    <div id="${f}" class="${now}">
         <div id="todo-div">
        <p>
            ${a}
        </p>
        </div>

        <div id="btn-div" class=""> 
            <button id="done-btn" onclick="g()">Done</button>
            <button id="edit-btn">Edit</button>
            <button id="delete-btn" onclick="deleteF()">Dlete</button>
        </div>  
        </div>
    `
    // mainTodo.innerHTML += `<button onclick="vv()">Done</button>`;
    let todoDiv =  document.getElementById("todo-div");
    console.log(todoDiv);
}


addBtn.addEventListener("click", todoAdd)
