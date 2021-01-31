class PhotoController {
  async store(req, res) {
    return res.json({ msg: 'ok' });
  }
}

export default new PhotoController();
