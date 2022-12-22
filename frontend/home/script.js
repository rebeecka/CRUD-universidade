var baseURL = "http://localhost:3000"
var token = localStorage.getItem('token');
var parametro;
var paramValue;
var clicked  = 0;


const config = {
    headers: {'responseType':'application/pdf','content-type':"application/pdf"}
}

document.addEventListener("DOMContentLoaded", () => {
    const isLogged = token;
    if(!isLogged) {
        window.location.href = "http://127.0.0.1:5500/frontend/Login/Login.html"
    }
    var btnListarPDF = document.querySelector("#btnPDF")
    
    btnListarPDF.addEventListener("click", async (e) => {
      window.open("http://localhost:3000/gerarpdf")
        
})

})























