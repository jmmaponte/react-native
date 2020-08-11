const  express = require ('express')
const  mongoose = require ('mongoose');
const  platos  = require ('./Rutas/platos')
const  ordenes = require ('./Rutas/ordenes');
const  bodyParser = require('body-parser');

const url = 'mongodb://localhost:27017/lunchdb'
const  app = express()

mongoose.connect(url, {useNewUrlParser:true,  useUnifiedTopology: true,  useFindAndModify: false  })

.then (db => console.log('conetado a mongodb'))
.catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/api/platos', platos)
app.use('/api/ordenes', ordenes)


app.listen(3000, () => {
console.log('estamos conectado a server 3000')
});




