const endpoint = "https://jsonplaceholder.typicode.com/users"
// const nameP = document.getElementById("name")
const emailp = document.getElementById("email")
const phoneP = document.getElementById("phone")
const container = document.getElementById("container")

// fetch(endpoint, {
//     method: "GET"    
// }).then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
//     console.log(data[0].name);
//     const a = ""
//     data.forEach(i => {
//         // console.log(i.name);
//         const a = i.name
//         // console.log(a);
        
//     container.innerHTML += `
//     <div class="info">
//         <p>Name:</p>
//         <span>${i.name}</span>

//         <p>Email:</p>
//         <span id="email">${i.email}</span>

//         <p>Phone:</p>
//         <span id="phone">${i.phone}</span>        
//     </div>
//     `
    
//     });
//     console.log(a);
    
//     nameP.innerText += a
// })


const peoples = "https://dummyjson.com/products"

fetch(peoples, {
    method: "GET"    
}).then((res) => {
    return res.json();
}).then((data) => {
 
    data.products.forEach(i => {
        console.log(i.id);

        container.innerHTML+=`
        <div id="container2">
                <span>ID:</span>
                <span>${i.id}</span>
        
                <p>Title:</p>
                <span>${i.title}</span>
        
                <p>Rating:</p>
                <span>${i.rating}</span>    
            </div>
    
        `
    });        
})