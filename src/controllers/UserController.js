import User from '../models/User';

class UserController {
  async create(req, res) {
    const newUser = await User.create({
      nome: 'Wesley ',
      sobrenome: 'Guerra',
      email: 'Wesleyguerra9@gmail.com',
      password: '123456',

    });
    res.json(newUser);
  }
}

export default new UserController();
