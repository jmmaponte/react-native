const  express = require ('express');
const router = express.Router();
// dentro de lq ruta importamos el modelo
const  pedidos = require ('../Modelos/pedidos')

//bucamos todas los platos a traves de la ejecion de una promesa o resultado
router.get('/', (req, res) => {
     pedidos.find()
     .exec()
     .then (i => res.status(201).send(i))
     })
   //  busccamos una pedido  a traves de un solo ID
   router.get('/:id', (req, res) => {
    pedidos.findByid(req.params.id)
    .exec()
    .then(i => res.status(201).send(i))
      })
      // ahara  vamos a crear un elemento ()... 
     router.post('/', (req, res) => {
      pedidos.create(req.body)
      .then (i => res.status(201).send(i))
     })
    // ahora la ruta para poder modificas.. como pueden ver recibe el id con el
    // metodo findByidAndUpdate, los buscamos y rempplzamos lo que nceistamos
   
    router.put('/:id', (req, res) => {
      pedidos.findByidAndUpdate(req.params.id, req.body)
     .then(()=> res.status(204))



             })
    // ahora la ruta para poder eliminar la orden. como pueden tambien recibe el id

    router.delete('/:id', (req, res) => {
      pedidos.findOneAndDelete(req.params.id)
      .exec
      .then(() => res.sendStatus(204))
       }) 
     module.exports = router;