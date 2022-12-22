var baseURL = "http://localhost:3000"




document.addEventListener("DOMContentLoaded",() => {
    getElementsFromDOM();

})


function getElementsFromDOM() {
  
    let btnAlterar = document.getElementsByTagName("button")[0];
    

    btnAlterar.addEventListener('click',async () => {
        let token = document.getElementById("input-token").value
        let senha = document.getElementById("input-senha").value
        let repeatSenha = document.getElementById("input-repeat-senha").value
        let email = document.getElementById("input-email").value
        console.log(senha,repeatSenha)
        if((senha === repeatSenha) === false) {
         alert("As duas senhas não são iguais!")
         return;
        } else {
            const obj = {
                token,
                password:senha,
                email
            }
            await axios.post(`${baseURL}/user/changepassword`,obj).then(async res => {
                console.log(res);
                if(res) {
                        M.toast({html: 'Senha alterada com sucesso!!, Faça Login!'},{displayLength: 6000},{classes:'toast'})
                        setInterval(() => {
                            window.location.href =  "http://127.0.0.1:5500/frontend/Login/Login.html"
                        },3000)
                    
                }
            })
         
        }
        
        
    })
}























