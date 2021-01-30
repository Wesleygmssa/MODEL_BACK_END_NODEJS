import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const Index = await Aluno.findAll();
    return res.json(Index);
  }
}

export default new HomeController();
