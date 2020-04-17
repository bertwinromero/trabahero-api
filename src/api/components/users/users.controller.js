exports.get_users = (req, res, next) => {
  res.send('Get all users with conroller');
}

exports.get_user = (req, res, next) => {
  res.send('Get user with conroller');
}

exports.create_user = (req, res, next) => {
  res.status(201).send('create user with conroller');
}


exports.update_user = (req, res, next) => {
  res.send('update user with conroller');
}

exports.delete_user = (req, res, next) => {
  res.send('delete user with conroller');
}