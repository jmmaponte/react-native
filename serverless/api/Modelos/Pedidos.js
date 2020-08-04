const mongoose = require ('mongoose');
const  Schema = mongoose.Schema


const pedidos=mongoose.model('Pedido', new Schema({
    
    comida_id: {type: Schema.Types.ObjectId, ref: 'comidas' },
    Usuario_id: String,
}))
 module.exports=pedidos