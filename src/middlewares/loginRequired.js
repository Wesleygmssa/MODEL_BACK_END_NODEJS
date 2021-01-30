import { verify } from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      erros: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const decode = verify(token, process.env.TOKEN_SECRET);
    const { id, email } = decode;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      erros: ['Token expirado ouinválido'],
    });
  }
};
