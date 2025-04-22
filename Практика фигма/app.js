const bmBtn = document.getElementById("bm-btn")
const body = document.getElementsByClassName("body")
const bmDiv = document.getElementById("bm-result-div")
const header = document.getElementById("header")
const pages = document.getElementById("pages") 
const headerImg = document.getElementById("header-img")
const child3 = document.getElementById("child3")
bmBtn.addEventListener("click", ()=>{
    document.innerHTML=`
     <div class="bm-result-div">

    </div>
    `
    console.log(bmDiv);

    let a = bmDiv.getAttribute("class")
    console.log(a);
    
    if (a === "bm-result-div-none") {
        bmDiv.className="bm-result-div"
        pages.style.display="none"
        headerImg.style.display="none"
        // child3.style.width = "80%"
        child3.style.justifyContent = 'flex-end';
    }else{
        bmDiv.className="bm-result-div-none"
        pages.style.display="flex"
        headerImg.style.display="flex"
    }

})
