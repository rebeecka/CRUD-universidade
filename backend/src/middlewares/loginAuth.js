import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json('Não autenticado!');
  }
  const [, token] = authorization.split(' ');

  try {
    const dadosUsuario = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dadosUsuario;
    req.usuarioId = id;
    req.usuarioEmail = email;
    return next();
  } catch (e) {
    return res.status(400).json('Token expirado ou invalido!');
  }
};
