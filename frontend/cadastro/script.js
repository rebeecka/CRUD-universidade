var baseURL = "http://localhost:3000"

var token = localStorage.getItem('token');

const config = {
    headers: {Authorization: `Bearer ${token}`}
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  
  
    const isLogged = token;
    

    if(!isLogged){
        setInterval(() => {
          M.toast({html: 'Precisa estar logado!!'},{displayLength: 5000},{classes:'toast'})
        },5000)
    window.location.href = "http://127.0.0.1:5500/frontend/Login/Login.html"
    }
});





function getElements() {
    event.preventDefault();
    let testeCpf = document.getElementById("cpf").value;

    if(!validarCPF(testeCpf)) {
      M.toast({html: 'cpf invalido!'},{displayLength: 2500},{classes:'toast'})
      return 0;
    }

    let nome = getFirstLetterToUpperCase(document.getElementById("nome").value);
    let cpf = document.getElementById("cpf").value;
    let endereco = getFirstLetterToUpperCase(document.getElementById("endereco").value);
    let sexo = getSexoChecked();
    let dataNascimento = document.getElementById("datadenascimento").value;
    let email = document.getElementById("email").value;
    let curso = getFirstLetterToUpperCase(document.getElementById("curso").value);
    let matricula = parseInt(document.getElementById("matricula").value);
    let turno = getFirstLetterToUpperCase(document.getElementById("turno").value);


    const aluno = {
        nome:nome,
        cpf:cpf,
        endereco:endereco,
        sexo:sexo,
        dataNascimento:dataNascimento,
        email:email,
        curso:curso,
        matricula:matricula,
        turno:turno
    };

   
    toStorageTheStudents(aluno);
    
   
    
}

function getSexoChecked() {
    let sexos = document.getElementsByName('sexo');
    let sexoChecked;
    console.log(sexos);
    console.log(sexos.length)
    for(let i = 0; i < sexos.length; i++) {
      if(sexos[i].checked) {
        if(i === 0) {
          sexoChecked = 'Masculino';
          return sexoChecked;
        }
        else {
          sexoChecked = 'Feminino';
          return sexoChecked;
        }
      }
    }

    return null;
}

function getFirstLetterToUpperCase(value) {
 const valueInUpperCase = value.charAt(0).toUpperCase() + value.slice(1);
 return valueInUpperCase;

}

async function toStorageTheStudents(student) {
  console.log(student)
  let token = config.headers;
  console.log(token);
    await axios({
      method:'post',
      url:`${baseURL}/aluno`,
      data:{
        nome:student.nome,
        email:student.email,
        cpf:student.cpf,
        sexo:student.sexo,
        dataNascimento:student.dataNascimento,
        turno:student.turno,
        matricula:student.matricula,
        endereco:student.endereco,
        curso:student.curso
      },
      headers:token
    }).then(response => {
      if(response.status === 201) {
        if(student.sexo === 'masculino') {
          M.toast({html: 'Aluno cadastrado com sucesso!!'},{displayLength: 5000},{classes:'toast'})
        } else {
          M.toast({html: 'Aluna cadastrada com sucesso!!'},{displayLength: 5000},{classes:'toast'})
        }
         
      }
     
    }).catch(e => {
      console.log(e);
    })
}




function validarCPF(inputCPF){
  var soma = 0;
  var resto;

  if(inputCPF == '00000000000') return false;
  for(i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if((resto == 10) || (resto == 11)) resto = 0;
  if(resto != parseInt(inputCPF.substring(9, 10))) return false;

  soma = 0;
  for(i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
  resto = (soma * 10) % 11;

  if((resto == 10) || (resto == 11)) resto = 0;
  if(resto != parseInt(inputCPF.substring(10, 11))) return false;
  return true;
}






