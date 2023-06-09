const express = require('express');
const path = require('path');

const app = express();

const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('public'));
app.use(mainRoutes);

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/main')
]);


app.listen(3000, () => { console.log('Servidor escuchando en el puerto 300') })