const mainDiv = document.getElementById("main-div")

const ENDPOINT = "http://localhost:3000/newestCourses"
// console.log(ENDPOINT);
const addEl = document.getElementById("addEl")
const body = document.getElementById("body")



const addElFunc = () => {
    body.innerHTML=`
        <div id="addElement">
        <input id="title-input" placeholder="title">
        <input id="instructor-input" placeholder="instructor">
        <input id="price-input" placeholder="price">
        <button  id="addElBtn">Add </button>

    </div>
    `
    const titleInput = document.getElementById("title-input");
    const instructorInput = document.getElementById("instructor-input");
    const priceInput = document.getElementById("price-input");
    const addElBtn = document.getElementById("addElBtn");
    // const addElement = document.getElementById("addElement")
    // const addElBtn = document.getElementById("addElBtn")
        const createFunc = () => {
            let titleI = titleInput.value
            let instructorI = instructorInput.value
            let priceI = priceInput.value    
            axios.post(
                ENDPOINT,
                {
                title: titleI,
                instructor: instructorI,
                price: priceI
                }
            )

            //  mainDiv.innerHTML=""
            getUsers()
            console.log(titleI);
            console.log(instructorI);
            console.log(priceI);
            const addElement = document.getElementById("addElement")
            const deleteBtn = document.getElementById("delete-btn")
            // deleteBtn.addEventListener("click", delet)
            addElement.style.display="none"
            getUsers()

    }
    addElBtn.addEventListener("click", createFunc)
    getUsers()
};
addEl.addEventListener("click", addElFunc);

// const titleInput = document.getElementById("title-input");
// const instructorInput = document.getElementById("instructor-input");
// const priceInput = document.getElementById("price-input");
// const addElBtn = document.getElementById("addElBtn");

// const createFunc = () => {
//     let titleI = titleInput.value
//     let instructorI = instructorInput.value
//     let priceI = priceInput.value    
//     axios.post(
//         ENDPOINT,
//         {
//         title: titleI,
//         instructor: instructorI,
//         price: priceI
//         }
//     )
//     mainDiv.innerHTML=""
//     getUsers()
//     console.log(titleI);
//     console.log(instructorI);
//     console.log(priceI);
// }
// addElBtn.addEventListener("click", createFunc)

const getUsers = () => {

    axios.get(ENDPOINT).then(({data})=>{
        data.forEach(({id,title,instructor,description,rating,price,image,courseType, discount}) => {
            let a =""
            let v = id
            const priceAdd = ( ) => {
                if (discount) {
                    // console.log(discount);
                    a = discount + " AZN"
                }else{
                    // console.log("no");
                    a = a
                }
            }
            priceAdd(discount)
            let btn = ""
            const btnAdd = (a) => {
                // console.log(a);
                // 0 true
                if (a == 0) {
                    btn=`
                          <button id="about-btn">Etrafli</button>
                    <button id="basket-btn">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </button>
                    `
                } else if (a == 1){
                    btn=`
                          <button id="about-btn">Etrafli</button>
                    `
                } else{
                    btn=`
                        <button id="about-btn">Etrafli</button>
                        <button id="basket-btn">
                            <i class="fa-solid fa-basket-shopping"></i>
                        </button>
                    `
                }         
            }
            btnAdd(courseType)
            // console.log(data);
            
            mainDiv.innerHTML+=`
            <div id="main-child">
                <div id="img-div">
                
                </div>
                <p id="child-p1" class="ml">${title}</p>
                <p id="child-p2" class="ml">${instructor}</p>
                <p id="child-p3" class="ml">${description}</p>
            
                <div id="rate-price-div" class="ml">
                    <div id="rate-div">
                        <p>${rating}</p>
                        <div class="rate-fl">
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                        </div>
                    </div>
    
                    <div id="price-div">
                        <p id="price-">20 AZN</p>
                        <p id="price-line">${a}</p>
                    </div>
                </div>
    
                <div id="btn-div" class="ml btn-div">
                    ${btn}
                </div>
                <div>
                    <button id="delete-btn" onclick="deteleFunc(${id})">
                        Delete
                    </button>
                </div>
            </div>
            `        
            const deleteBtn = document.getElementById("delete-btn")
            deleteBtn.addEventListener("click", deteleFunc)
            console.log(deleteBtn);
            
    })})
}

getUsers()

const deteleFunc = (a) => {
    console.log(a);
    console.log("asd"); 
    axios.delete(ENDPOINT + "/" + a)
    // console.log(ENDPOINT + "/" + a);
    mainDiv.innerHTML=""
    getUsers()
}

