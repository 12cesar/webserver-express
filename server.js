const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');
//para encontrar el puerto
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'JULIO'
    });

    //res.send('Hola mundo')
});
app.get('/about', (req, res) => {


    res.render('about');

    //res.send('Hola mundo')
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})