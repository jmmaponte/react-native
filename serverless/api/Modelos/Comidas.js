const mongoose = require ('mongoose');
const  Schema = mongoose.Schema


const ComidaSchema=  new mongoose.Schema({
    name: {type: String, ref: 'name'},
     descrip: {type: String}
     })

     const  Comidas = mongoose.model('comidas', ComidaSchema)

module.exports=Comidas