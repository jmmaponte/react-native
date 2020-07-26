const  express = require ('express')
const  app = express()

app.get ('*', (req, res) => {
    console.log('HOLA S MI PRIMERA APP EN EL SERVER');
     res.send({mensaje: 'hola chicos'})

    app.listen(3000)


})

module.exports = app