const studentsDiv = document.getElementById("students-div") 
const teachersDiv = document.getElementById("teachers-div") 

const peopleChangeInp = document.getElementById("peopleChangeInp")
const roleChangeInp = document.getElementById("roleChangeInp")
const peopleAddBtn = document.getElementById("people-add-btn")

const editBtn = document.getElementById("edit-btn")

const ENDPOINT = "http://localhost:3000"

const getUsers = (url) => {
    console.log(url);
    if (url == "/students") {
        let urlS = ENDPOINT + url
        axios.get(ENDPOINT  + url).then(({data}) => {
        data.forEach(({id,username}) => {
            const dd = JSON.stringify(id);
            // console.log(id);
            studentsDiv.innerHTML +=`
            <div id="card">
                <p>${username}</p> 
                 <div class="btn-div">
                    <button id="edit-btn" onclick='editFunc("${id}", "${url}","${username}")'>
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="delete-btn" onclick='deleteFunc("${id}", "${url}")'>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            `  
            urlS = ENDPOINT + "urlS"
            console.log(urlS);
        });

    })
                 
    }else if (url == "/teachers"){
        let urlt = ENDPOINT + url
        axios.get(ENDPOINT  + url).then(({data}) => {
        data.forEach(({id,username}) => {
            console.log(id);
            teachersDiv.innerHTML +=`
            <div id="card">
                <p>${username}</p> 
                <div class="btn-div">
                <button id="edit-btn" onclick='editFunc("${id}", "${url}","${username}")'>
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="delete-btn" onclick='deleteFunc("${id}", "${url}")'>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            `  
            urlT = ENDPOINT + "urlT"
            // console.log(urlT);
        });
        })}
}

getUsers("/students")
getUsers("/teachers")

const deleteFunc = (id, a) => {
    let v = a + "/" + id 
    console.log(v);    
    axios.delete(ENDPOINT + v)
    studentsDiv.innerHTML=``
    getUsers("/students")
    teachersDiv.innerHTML=``
    getUsers("/teachers")

}



const addFunc = () => {
    let role = ""
    if (roleChangeInp.value == "0") {
        role = "/students"
        console.log(role);
        let ad = peopleChangeInp.value
        let z = ENDPOINT + role
        axios.post(z, {
            username: ad
        })
    studentsDiv.innerHTML=``
    getUsers("/students")

    }else if(roleChangeInp.value == "1"){
        role = "/teachers"
        console.log(role);
        let ad = peopleChangeInp.value
        let z = ENDPOINT + role
        axios.post(z, {
            username: ad
        })
        teachersDiv.innerHTML=""
        getUsers("/teachers")
    }
}

const editFunc = (a,b,c) => {
    // console.log(a + " " +"id");
    // console.log(b + " " +"url");
    // console.log(c + " " +"name");
    console.log(`${ENDPOINT}${b}/${a}`);
    let newUserName = prompt("Enteer Your New Name")
    axios.put(`${ENDPOINT}${b}/${a}`, {
        // let c = prompt("sd")
        username : newUserName
    })
    studentsDiv.innerHTML=``
    getUsers("/students")
    teachersDiv.innerHTML=""
    getUsers("/teachers")
}



peopleAddBtn.addEventListener("click", addFunc)
editBtn.addEventListener("click", editFunc)




// getTeachers()