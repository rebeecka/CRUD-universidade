import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario';

class UsuarioServive {
  async changePassword(newPassword, email) {
    const hash = await bcrypt.hash(newPassword, 8);

    await Usuario.update({ password_hash: hash }, { where: { email } }).then((user) => {
      console.log(user);
    }).catch((e) => {
      console.log(e);
    });
  }

  async findByEmail(email) {
    try {
      let usuario;
      await Usuario.findOne(email).then((response) => {
        usuario = response;
        console.log(usuario);
      }).catch((e) => e);
      return usuario;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export default new UsuarioServive();
