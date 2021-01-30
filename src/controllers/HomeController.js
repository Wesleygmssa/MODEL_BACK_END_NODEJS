import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const newstudents = await Aluno.create({
      nome: 'Wesley ',
      sobrenome: 'Guerra',
      email: 'Wesleyguerra9@gmail.com',
      idade: 30,
      peso: 68,
      altura: 1.77,

    });
    res.json(newstudents);
  }
}

export default new HomeController();
