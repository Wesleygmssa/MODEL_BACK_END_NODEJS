import bcryptjs from 'bcryptjs';
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

    if (!user) {
      return res.status(401).json({
        erros: ['Email ou senha incorrenta!'],
      });
    }

    const hasgedPassword = await bcryptjs.compare(password, user.password_hash);
    if (!hasgedPassword) {
      return res.status(401).json({
        errors: ['Email ou senha incorrenta!'],
      });
    }
    // senha do usuário não for valida
    // if (!(await user.passwordIsValid(password))) {
    //   return res.status(401).json({
    //     errors: ['Usuário não existe'],
    //   });
    // }

    return res.json(user);
  }
}

export default new TokenController();
