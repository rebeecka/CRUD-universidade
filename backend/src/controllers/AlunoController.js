import { Sequelize } from 'sequelize';
import Aluno from '../models/Aluno';

const { Op } = Sequelize;

class AlunoController {
  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      return res.status(201).json(novoAluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  }

  async index(req, res) {
    try {
      const todosAlunos = await Aluno.findAll({});
      return res.status(200).json(todosAlunos);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'Id não informado!' });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ error: `Aluno não encontrado com o ID : ${id}` });
      }
      return res.status(200).json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(406).json({ error: 'Id não especificado/invalido' });
      }

      const alunoPeloId = await Aluno.findByPk(id);

      if (!alunoPeloId) {
        return res.status(406).json({ error: 'Aluno não valido com esse ID' });
      }

      const alunoAtualizado = await alunoPeloId.update(req.body);
      return res.status(200).json(alunoAtualizado);
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(406).json({ error: 'Id não especificado/invalido' });
      }

      const alunoParaDeletar = await Aluno.findByPk(id);

      if (!alunoParaDeletar) {
        return res.status(406).json({ error: 'Aluno não valido com esse ID' });
      }

      await alunoParaDeletar.destroy();
      return res.status(200).json('Deletado com sucesso');
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }

  async consultarPorEmail(req, res) {
    console.log(req.params);
    // eslint-disable-next-line quotes
    const email = String(req.params.parametro).replace("%40", "@");
    console.log(email);
    try {
      const aluno = await Aluno.findOne({ where: { email } });
      return res.status(200).json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ err: e });
    }
  }

  async consultarPorNome(req, res) {
    const { nome } = req.params;
    // const query = `%${nome}`;
    let aluno;
    try {
      aluno = await Aluno.findOne({ where: { nome: { [Op.substring]: nome } } });
      console.log(aluno);
      return res.status(200).json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ err: e });
    }
  }

  async consultarPorCpf(req, res) {
    const { cpf } = req.params;
    console.log(cpf);
    try {
      const aluno = await Aluno.findOne({ where: { cpf } });
      return res.status(200).json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ err: e });
    }
  }

  async consultarPorMatricula(req, res) {
    const { matricula } = req.params;
    console.log(matricula);
    try {
      const aluno = await Aluno.findOne({ where: { matricula } });
      return res.status(200).json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ err: e });
    }
  }
}

export default new AlunoController();
