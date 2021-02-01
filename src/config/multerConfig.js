import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

// SALVANDO LOCALMENTE NA MÁQUINA
const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads', 'tmp');

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }

    return cb(null, true);
  },

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex'); // aleatory
      const fileName = `${fileHash}-${file.originalname}`; // QUAL NOME QUE ESSE ARQUIVO VAI RECEBER
      return callback(null, fileName);
    },
  }),
};
