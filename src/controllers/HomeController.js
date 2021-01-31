import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
  }
}

export default new HomeController();
