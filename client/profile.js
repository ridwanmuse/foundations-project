const happinessbtn= document.querySelector("#happinessbtn");

const baseURL= "http://localhost:3000/api/"

const message= document.querySelector("#message")

function happiness(){
    axios.get(`${baseURL}happiness`)
    .then(res => message.innerHTML = res.data.input)
    .catch(err => console.log(err.data))} 
happinessbtn.addEventListener("click",happiness)









