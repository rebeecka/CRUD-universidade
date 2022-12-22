import Alunos from "../models/Aluno.js";


class UtilService {

    async generateanHTMLofStudentList() {
        var studentManha = await this.generateManhaStudents();
        var studentVespertino = await this.generateVespertinoStudents();
        var studentsNoturno = await this.generateNoiteStudents();
        var studentsIntegral = await this.generateIntegralStudents();
        return `<h1>Lista de Alunos por Turno</h1>
        <h3>Turno Manhã:</h3>
        ${studentManha}
        <hr>
        <h3>Turno Vespertino:</h3>
        ${studentVespertino}
        <hr>
        <h3>Turno Noite:</h3>
        ${studentsNoturno}
        <hr>
        <h3>Turno Integral:</h3>
        ${studentsIntegral}
        <hr>
        `
    }

    async generateManhaStudents() {
        var studentsManha = await Alunos.findAll({where:{
            turno:'Manhã'
        }})
       return `
       ${studentsManha.map(student => {
        if(student){
            return `<p>Nome: ${student.nome}</p>
            <p>Email: ${student.email}</p>
            <br>`
        }
       })}
       `
    }

    async generateVespertinoStudents() {
        var studentsVespertino = await Alunos.findAll({where:{
            turno:'Vespertino'
        }})
       return `
       ${studentsVespertino.map(student => {
        if(student){
            return `<p>Nome: ${student.nome}</p>
            <p>Email: ${student.email}</p>
            <br>`
        }
       })}
       `
    }

    async generateNoiteStudents() {
        var studentsNoturno = await Alunos.findAll({where:{
            turno:'Noturno'
        }})
       return `
       ${studentsNoturno.map(student => {
        if(student){
            return `<p>Nome: ${student.nome}</p>
            <p>Email: ${student.email}</p>
            <br>`
        }
       })}
       `
    }

    async generateIntegralStudents() {
        var studentsIntegral = await Alunos.findAll({where:{
            turno:'Integral'
        }})
        console.log(studentsIntegral);
       return `
       ${studentsIntegral.map(student => {
        if(student){
            return `<p>Nome: ${student.nome}</p>
            <p>Email: ${student.email}</p>
            <br>`
        }
       })}
       `
    }
}

export default new UtilService();