import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario';
import PasswordTokenService from '../service/PasswordTokenService';
import UserService from '../service/UserService';

dotenv.config();

const JWTSecret = process.env.TOKEN_SECRET;

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      console.log(novoUsuario);
      return res.status(201).json(novoUsuario);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  }

  async index(req, res) {
    try {
      const todosUsuarios = await Usuario.findAll({});
      return res.status(200).json(todosUsuarios);
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
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(400).json({ error: `Usuário não encontrado com o ID : ${id}` });
      }
      return res.status(200).json(usuario);
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

      const usuarioPeloId = await Usuario.findByPk(id);

      if (!usuarioPeloId) {
        return res.status(406).json({ error: 'Usuario não valido com esse ID' });
      }

      const usuarioAtualizado = await usuarioPeloId.update(req.body);
      return res.status(200).json(usuarioAtualizado);
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

      const usuarioParaDeletar = await Usuario.findByPk(id);

      if (!usuarioParaDeletar) {
        return res.status(406).json({ error: 'Usuario não valido com esse ID' });
      }

      await usuarioParaDeletar.destroy();
      return res.status(200).json('Deletado com sucesso');
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }

  async recoverPassword(req, res) {
    const { email } = req.body;
    try {
      const result = await PasswordTokenService.createTokenForRecover(email);
      if (result) {
        const emailFoiEnviado = await PasswordTokenService.sendMailTo(result, email);
        return res.status(200).json({ emailFoiEnviado, email });
      }
      return res.status(400).json({ error: 'error' });
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }

  async changePassword(req, res) {
    const { token, password, email } = req.body;
    const isTokenValid = await PasswordTokenService.validate(token);

    if (isTokenValid.status) {
      // eslint-disable-next-line max-len
      await UserService.changePassword(password, email, isTokenValid.token.token);
      res.status(200).send('Senha alterada!');
    } else {
      res.status(406).send('Token inválido!');
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    console.log('DADOS', req.body);
    try {
      const user = await UserService.findByEmail({ where: { email } });
      console.log('O USER', user);
      if (user !== undefined) {
        console.log('ACHOU', user);
        const result = await bcrypt.compare(password, user.password_hash);
        if (result) {
          const token = jwt.sign({ email: user.email, id: user.id }, JWTSecret);
          res.status(200).json({ token });
        } else {
          res.status(406).json('Senha incorreta');
        }
      } else {
        res.status(400).json('error');
      }
    } catch (e) {
      console.log(e);
      res.status(406).json(e);
    }
  }
}

export default new UsuarioController();
