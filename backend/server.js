'use strict';
const Express = require('express');
const Server = Express();
const Request = require('request');
const BodyParser = require('body-parser');
const Path = require('path');

const API = {
  "admin_url": "https://439198291915981:Mkg4z0aSdewn1XlM79gNvxz1EwY@api.cloudinary.com/v1_1/clairephotography"
}

const Emailer = require('./emailer');

Server.use(Express.static(Path.join(__dirname + '/static')));
Server.use(BodyParser.json());

Server.get('/*', (req, res) => {
  res.redirect('/');
});

Server.get('/images', (req, res) => {
  const parse = (url) => {
    const query = `/upload/w_800,c_fill`;
    return url.split('/upload').join(query);
  }

  let url = `${API.admin_url}/resources/image`;

  Request(url, (error, response, body) => {
    let data = JSON.parse(body).resources;
    data.forEach( (obj) => {
      obj.selected = false;
      obj.url = parse(obj.url);
      obj.secure_url = parse(obj.secure_url);
    });

    res.send(data);
  });
});

Server.post('/order', (req, res) => {
  const send = (response) => res.send(response);
  Emailer.sendOrderEmail(req.body, send)
});

let server;
if (module === require.main) {
  server = Server.listen(process.env.PORT || 8080, () => {
    const PORT = server.address().port;
      console.log('Node Server listening on port %s', PORT);
  });
}

module.exports = server;
