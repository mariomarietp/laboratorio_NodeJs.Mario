const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.get('/mariete', (req, res) => {
  res.send(`
    <html>
      <body>
        <p>Hola Mundo, este es el primer app de Mario</p>
        <script>
          alert('Bienvenido a la primera app de Mario!!!!');
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Aplicación escuchando en el puerto 3000');
});
