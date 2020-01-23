const express = require('express');
const app = express();

// .set para configuración
app.set('view engine', 'ejs');
app.set('views', './src/views');

// .use para middleware
app.use(express.static('public'));

//  RUTAS
const staticRoutes = require('./routes/static');
app.use('/', staticRoutes);

const productRoutes = require('./routes/products');
app.use('/productos', productRoutes);

app.get('*', (req, res) => { res.render('404'); });




app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));