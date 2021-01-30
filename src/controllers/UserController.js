import User from '../models/User';
// CRUD de usuários

class UserController {
  async create(req, res) {
    const { nome, email, password } = req.body;
    try {
      const user = await User.create({ nome, email, password });

      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.json(null);
    }
  }
  // Show

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      // validação

      return res.status(200).json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          erros: ['Usuário não existe'],
        });
      }
      const novosDados = await user.update(req.body);
      return res.status(200).json(novosDados);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
  // Delete

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          erros: ['Usuário não existe'],
        });
      }
      await user.destroy(req.body);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
