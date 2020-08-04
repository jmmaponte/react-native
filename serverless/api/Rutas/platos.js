const  express = require ('express');
const router = express.Router();

// dentro de lq ruta importamos el modelo
const  comidas = require('../Modelos/Comidas.js')
//bucamos todas los platos a traves de la ejecion de una promesa
router.get('/', (req, res) => {
     comidas.find()
     .exec()
     .then (i => res.status(200).send(i))
     })
   //  busccamos una comida  a traves de un solo ID
   router.get('/:id', (req, res) => {
    comidas.findByid(req.params.id)
    .exec()
    .then(i => res.status(200).send(i))
      })

      // ahora  vamos a crear un elemento ()... 
     router.post('*',(req, res)=> {
      comidas.create(req.body).then(i=> res.status(201).send(i))
     })
    // ahora la ruta para poder modificas.. como pueden ver recibe el id con el
    // metodo findByidAndUpdate, los buscamos y rempplzamos lo que nceistamos
    router.put('/:id', (req, res) => {
      comidas.findByidAndUpdate(req.body.id, req.body)
       .then(() => res.sendstatus(204))

       
     
      
      })
    // ahora la ruta para poder  eliminar la orden. como pueden tambien recibe el id
    router.delete('/:id', (req, res) => {
      comidas.findOneAndDelete(req.params.id)
      .exec
      .then(() => res.sendStatus(204))
       }) 
     module.exports = router;

//app.use('/api/platos', router)

