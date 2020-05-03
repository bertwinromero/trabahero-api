const router = require('express').Router();
const userController = require('./user.controller');
const validate = require('../../middlewares/validations/validate-user');
const verifyToken =  require('../../middlewares/verify-token');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './src/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
router.get('/', verifyToken, userController.getUsers);

router.get('/:id', verifyToken, userController.getUser);

router.post('/signup', upload.single('photoUrl'), validate.createUser, userController.createUser);

router.post('/signin', validate.signinUser, userController.signUser);

router.patch('/:id', verifyToken, validate.updateUser, userController.updateUser);

router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;
