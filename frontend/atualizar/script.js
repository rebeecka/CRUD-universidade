var baseURL = "http://localhost:3000"
var token = localStorage.getItem('token');
var parametro;
var paramValue;
var clicked  = 0;


const config = {
    headers: {Authorization: `Bearer ${token}`}
}

document.addEventListener("DOMContentLoaded",() => {
    const isLogged = token;
    
    if(!isLogged){
        setInterval(() => {
          M.toast({html: 'Precisa estar logado!!'},{displayLength: 5000},{classes:'toast'})
        },5000)
    window.location.href = "http://127.0.0.1:5500/frontend/Login/Login.html"
    }
    getElementsFromDOM();
})

async function atualizarAluno() {
    let nome = document.getElementById("studentNome").value;
    let cpf = document.getElementById("studentCpf").value;
    let email = document.getElementById("studentEmail").value;
    let dataNascimento = document.getElementById("studentDataNascimento").value;
    let endereco = document.getElementById("studentEndereco").value;
    let matricula = document.getElementById("studentMatricula").value;
    let curso = document.getElementById("studentCurso").value;
    let sexo = document.getElementById("studentSexo").value;
    let studentIdToUpdate = document.getElementById("studentId").value;

    let studentToUpdate = {
        nome,
        cpf,
        email,
        dataNascimento,
        endereco,
        matricula:Number(matricula),
        curso,
        sexo
    }
    console.log(studentIdToUpdate);


    await axios({
     method:"PUT",
     url:`${baseURL}/aluno/${studentIdToUpdate}`,
     headers:config.headers,
     data: studentToUpdate
    }).then(res => {
        M.toast({html: 'Aluno atualizado com sucesso!!'},{displayLength: 5000},{classes:'toast'})
        sessionStorage.clear("studentToUpdate");
        window.location.href = "http://127.0.0.1:5500/frontend/home/home.html"
    }).catch(e => console.log(e));
   


    
}


function getElementsFromDOM() {
    let student = JSON.parse(sessionStorage.getItem('studentToUpdate'))
   let divPrincipal = document.getElementsByClassName("container-atualizar")[0]

   let h6Id = document.createElement("h6");
   h6Id.innerHTML = "Id"
   let inputId = document.createElement("input");
   inputId.setAttribute("id","studentId");
   inputId.setAttribute("type","text");
   inputId.setAttribute("value",student.id);
   inputId.setAttribute("style","color:rgb(130,130,130)")
   inputId.setAttribute("disabled",true);
   divPrincipal.appendChild(h6Id);
   divPrincipal.appendChild(inputId);

   let h6Nome = document.createElement("h6");
   h6Nome.innerHTML = "Nome"
   let inputNome = document.createElement("input");
   inputNome.setAttribute("id","studentNome");
   inputNome.setAttribute("type","text");
   inputNome.setAttribute("value",student.nome);
   divPrincipal.appendChild(h6Nome);
   divPrincipal.appendChild(inputNome);

   let h6Cpf = document.createElement("h6");
   h6Cpf.innerHTML = "CPF"
   let inputCPF = document.createElement("input");
   inputCPF.setAttribute("id","studentCpf");
   inputCPF.setAttribute("type","text");
   inputCPF.setAttribute("value",student.cpf);
   divPrincipal.appendChild(h6Cpf);
   divPrincipal.appendChild(inputCPF);

   let h6Email = document.createElement("h6");
   h6Email.innerHTML = "Email"
   let inputEmail = document.createElement("input");
   inputEmail.setAttribute("id","studentEmail");
   inputEmail.setAttribute("type","text");
   inputEmail.setAttribute("value",student.email);
   divPrincipal.appendChild(h6Email);
   divPrincipal.appendChild(inputEmail);
   
   let h6DataNascimento = document.createElement("h6");
   h6DataNascimento.innerHTML = "Data de Nascimento"
   let inputDataNascimento = document.createElement("input");
   inputDataNascimento.setAttribute("id","studentDataNascimento");
   inputDataNascimento.setAttribute("type","text");
   inputDataNascimento.setAttribute("value",moment(student.dataNascimento).format("DD/MM/YYYY"));
   divPrincipal.appendChild(h6DataNascimento);
   divPrincipal.appendChild(inputDataNascimento);

   
   let h6Endereco= document.createElement("h6");
   h6Endereco.innerHTML = "Endereço"
   let inputEndereco = document.createElement("input");
   inputEndereco.setAttribute("id","studentEndereco");
   inputEndereco.setAttribute("type","text");
   inputEndereco.setAttribute("value",student.endereco);
   divPrincipal.appendChild(h6Endereco);
   divPrincipal.appendChild(inputEndereco);

   let h6Matricula= document.createElement("h6");
   h6Matricula.innerHTML = "Matricula"
   let inputMatricula = document.createElement("input");
   inputMatricula.setAttribute("id","studentMatricula");
   inputMatricula.setAttribute("type","text");
   inputMatricula.setAttribute("value",student.matricula);
   divPrincipal.appendChild(h6Matricula);
   divPrincipal.appendChild(inputMatricula);

   let h6Curso= document.createElement("h6");
   h6Curso.innerHTML = "Curso"
   let inputCurso = document.createElement("input");
   inputCurso.setAttribute("id","studentCurso");
   inputCurso.setAttribute("type","text");
   inputCurso.setAttribute("value",student.curso);
   divPrincipal.appendChild(h6Curso);
   divPrincipal.appendChild(inputCurso);


   let h6Turno= document.createElement("h6");
   h6Turno.innerHTML = "Turno"
   let inputTurno = document.createElement("input");
   inputTurno.setAttribute("id","studentTurno");
   inputTurno.setAttribute("type","text");
   inputTurno.setAttribute("value",student.turno);
   divPrincipal.appendChild(h6Turno);
   divPrincipal.appendChild(inputTurno);

   let h6Sexo= document.createElement("h6");
   h6Sexo.innerHTML = "Sexo"
   let inputSexo = document.createElement("input");
   inputSexo.setAttribute("id","studentSexo");
   inputSexo.setAttribute("type","text");
   inputSexo.setAttribute("value",student.sexo);
   divPrincipal.appendChild(h6Sexo);
   divPrincipal.appendChild(inputSexo);

   let buttonAtualizar = document.createElement("button");
   buttonAtualizar.innerHTML = "Atualizar";
   buttonAtualizar.setAttribute("class","btn amber");
   buttonAtualizar.setAttribute("style","margin-left:-0px;margin-bottom:15px;")
   buttonAtualizar.setAttribute("onclick","atualizarAluno()")
   divPrincipal.appendChild(buttonAtualizar);





   


   







}























