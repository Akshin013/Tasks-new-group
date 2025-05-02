const mainDiv = document.getElementById("main-div")

const ENDPOINT = "http://localhost:3000/newestCourses"
console.log(ENDPOINT);

axios.get(ENDPOINT).then(({data})=>{
    data.forEach(({title,instructor,description,rating,price,image,courseType, discount}) => {

        let a =""
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
        
        let btn = ``

        const btnAdd = (a) => {
            console.log(a);
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
            }            
        }
        btnAdd(courseType)

        mainDiv.innerHTML+=`
        <div id="main-child">
            <div id="img-div">
            
            </div>
            <p id="child-p1" class="ml">General English</p>
            <p id="child-p2" class="ml">Menzer</p>
            <p id="child-p3" class="ml">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatibus.</p>
        
            <div id="rate-price-div" class="ml">
                <div id="rate-div">
                    <p>${rating}</p>
                    <div>
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
        </div>
        `        
})})
