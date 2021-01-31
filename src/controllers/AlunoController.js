import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const Index = await Aluno.findAll();
    return res.json(Index);
  }

  async store(req, res) {
    try {
      const aluno = Aluno.create(req.body);
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(200).json({
          erros: ['Aluno não encontrado!'],
        });
      }
      const AlunoAtualizado = aluno.update(req.body);
      return res.status(200).json(AlunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(200).json({
          erros: ['Aluno não encontrado!'],
        });
      }
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(200).json({
          erros: ['Aluno não encontrado!'],
        });
      }
      await aluno.destroy();
      return res.status(200).json({ apagado: true });
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
