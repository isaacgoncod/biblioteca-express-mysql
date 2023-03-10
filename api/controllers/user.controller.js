const pool = require("../db/conn");
const User = require("../models/User");

const addUser = (req, res) => {
  let user = new User(req.body);

  pool.query(user.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readUser = (req, res) => {
  let user = new User(req.body);

  pool.query(user.read(), function (err, resp) {
    if (err) {
      console.log(err); 
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const authUser = (req, res) => {
  let user = new User(req.body);

  pool.query(user.auth(), function (err, resp) {
    if (err) {
      res.status(401).json(err).end();
    }
    if (resp.length == 0) {
      res.status(401).json({ msg: "Matricula ou Senha Inválidos" }).end();
    }

    let userPass = resp[0];

    delete userPass.senha;

    res.status(200).json(userPass).end();
  });
};

module.exports = {
  addUser,
  readUser,
  authUser,
};
