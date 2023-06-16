const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(session({
    secret: 'mi_secreto',
    resave: false,
    saveUninitialized: false
  }));

const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static('public'));
app.use(mainRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/users'),
    path.join(__dirname, './views/products'),
]);


app.listen(3000, () => { console.log('Servidor escuchando en el puerto 300') })