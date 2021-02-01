import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        erros: ['Credenciais inválidas'],
      });
    }
    // verificação de email
    const user = await User.findOne({ where: { email } });
    // validação
    if (!user) {
      return res.status(401).json({
        erros: ['Email ou senha incorrenta!'],
      });
    }

    // comparação do hash password
    const hasgedPassword = await bcryptjs.compare(password, user.password_hash);
    if (!hasgedPassword) {
      return res.status(401).json({
        errors: ['Email ou senha incorrenta!'],
      });
    }
    // gerando token
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
