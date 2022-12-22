var baseURL = "http://localhost:3000"
var token = localStorage.getItem('token');

const config = {
    headers: {Authorization: `Bearer ${token}`}
}



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {accordion: true});

    const isLogged = token;

    if(!isLogged){
        setInterval(() => {
          M.toast({html: 'Precisa estar logado!!'},{displayLength: 5000},{classes:'toast'})
        },5000)
    window.location.href = "http://127.0.0.1:5500/frontend/Login/Login.html"
    }
   
  });


  
window.addEventListener('load', async () => {
      var listOfStudents;
       await axios.get(`${baseURL}/aluno`).then(res => {
        listOfStudents = res.data;
        })
       
    if(listOfStudents) {
        createResultElements(listOfStudents);
    }  else {
        createPageWithNotFound();
    }
    


    
});

window.addEventListener('storage', (event) => {
   location.reload()

})

createPageWithNotFound = () => {
    let containerParent = document.getElementsByClassName('container');

    let pageNotFound = document.createElement('div')
    pageNotFound.setAttribute("class","notfound");

    let texto = document.createElement('h2');
    texto.innerHTML = "Nenhum Estudante encontrado!"

    let imagem = document.createElement('img');
    imagem.setAttribute('src','./notfound.jpg');
    imagem.setAttribute('alt','imagem do not found');

    pageNotFound.appendChild(imagem);
    pageNotFound.appendChild(texto);

    containerParent[0].appendChild(pageNotFound);

}



createResultElements = (listOfStudents) => {
let timesToCreateStudents = listOfStudents
let student = timesToCreateStudents
for(let i = 0; i < timesToCreateStudents.length; i++) {
    let ul = document.getElementsByClassName('collapsible')[0]
    
    let li = document.createElement('li');
    li.setAttribute('class','');

    let divHeader = document.createElement('div');
    divHeader.setAttribute('class','collapsible-header grey darken-3');
    divHeader.setAttribute('tabindex',i);
    let icon = document.createElement('i')
    icon.setAttribute('class','material-icons')
    icon.innerHTML = `person`;

    divHeader.appendChild(icon);
    li.appendChild(divHeader);

    let divBody = document.createElement('div');
    divBody.setAttribute('class','collapsible-body')

    let span = document.createElement('span');
   

    divBody.appendChild(span);

    li.appendChild(divBody);
   
    let buttonRemove = document.createElement("button");
    let buttonEdit = document.createElement("button");
    buttonRemove.setAttribute("class","btn red waves-yellow");
    buttonEdit.setAttribute("class","btn blue waves-blue")
    buttonRemove.innerHTML = `Remover`
    buttonEdit.innerHTML = `Atualizar`
    divBody.appendChild(buttonRemove);
    divBody.appendChild(buttonEdit);
    buttonRemove.style.marginLeft= '32px'

    let h3Nome = document.createElement('h6');
    h3Nome.setAttribute('class','h3-menu');
    h3Nome.innerHTML = `${student[i].nome}`;
    divHeader.appendChild(h3Nome);
    
    let h5Id = document.createElement("h5");
    h5Id.innerHTML = `<i>ID:  </i>${student[i].id}`;

    let h5Cpf = document.createElement("h5");
    h5Cpf.innerHTML = `<i>CPF:  </i>${student[i].cpf}`;
    

    let h5Sexo = document.createElement("h5");
    h5Sexo.innerHTML = `<i>Sexo:  </i>${student[i].sexo}`;

    let h5DataNascimento = document.createElement("h5");
    h5DataNascimento.innerHTML = `<i>Data de Nascimento:  </i>${moment(student[i].dataNascimento).format("DD/MM/YYYY")}`;

    let h5Endereco = document.createElement("h5");
    h5Endereco.innerHTML = `<i>Endereço:  </i>${student[i].endereco}`;

    let h5Email = document.createElement("h5");
    h5Email.innerHTML = `<i>E-mail:  </i>${student[i].email}`;

    let h5Curso = document.createElement("h5");
    h5Curso.innerHTML = `<i>Curso:  </i>${student[i].curso}`;

    let h5Matricula = document.createElement("h5");
    h5Matricula.innerHTML = `<i>Matricula:  </i>${student[i].matricula}`;

    let h5Turno = document.createElement("h5");
    h5Turno.innerHTML = `Turno:  ${student[i].turno}`;

    span.appendChild(h5Cpf);
    span.appendChild(h5Sexo);  
    span.appendChild(h5DataNascimento);  
    span.appendChild(h5Endereco);
    span.appendChild(h5Email);
    span.appendChild(h5Curso);
    span.appendChild(h5Matricula);
    span.appendChild(h5Turno);
    ul.appendChild(li);

    



    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {accordion: false});
    
    
    buttonRemove.addEventListener('click',async () => {
        await axios.delete(`${baseURL}/aluno/`+student[i].id,config
        ).then(res => {
            M.toast({html: `${res.data}`},{displayLength: 3000},{classes:'toast'})
        }).catch(e => {
            console.log(e);
        })
        ul.remove(li);
    })

    buttonEdit.addEventListener('click',() => {
        sessionStorage.setItem("studentToUpdate",JSON.stringify(student[i]));
        window.location.href = "http://127.0.0.1:5500/frontend/atualizar/atualizar.html"
    })

}

}




