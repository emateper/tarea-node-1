var express = require('express');
var router = express.Router();


app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express!');
  });
  
  app.get('/about', (req, res) => {
  res.send('Esta es la página "Acerca de" de mi aplicación.');
  });
  
  app.get('/contact', (req, res) => {
  res.send('Ponte en contacto con nosotros en contact@example.com');
  });


module.exports = router;
