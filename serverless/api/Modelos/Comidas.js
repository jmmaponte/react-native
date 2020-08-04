const mongoose = require ('mongoose');
const  Schema = mongoose.Schema


const Comidas=  mongoose.model ('Comida', mongoose.Schema({name: String,  descrip: String }))


module.exports=Comidas