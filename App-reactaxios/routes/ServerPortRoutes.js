const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require('../models/ServerPort');

ServerPortRouter.route('/add').post(function (req, res) {
  const serverport = new ServerPort(req.body);
  serverport.save()
    .then(serverport => {
        res.json('Server Eklendi..');
    })
    .catch(err => {
    res.send("Hata!");
    });
});

ServerPortRouter.route('/').get(function (req, res) {
  ServerPort.delete(function (err, serverports){
  if(err){
    console.log(err);
  }
  else {
    res.json(serverports);
  }
});
});

ServerPortRouter.route('/').get(function (req, res) {
    ServerPort.find(function (err, serverports){
    if(err){
      console.log(err);
    }
    else {
      res.json(serverports);
    }
  });
});

module.exports = ServerPortRouter;