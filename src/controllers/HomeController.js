class HomeController {
  index(req, res) {
    res.json({ message: 'true' });
  }
}

export default new HomeController();
