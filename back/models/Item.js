const {Schema, model} = require('mongoose');


const schema = new Schema({
  id: {type: String, required: true, unique: true},
  type: {type: String, required: true},
  classItem: {type: String, required: true},
  title: {type: String},
  descr: {type: String, required: true},
  country: {type: String},
  region: {type: String},
  collectionYear: {type: Date},
  pressingYear: {type: Date},
  arrSteps: {type: Array},
  price: {type: Number, required: true, default: 0},
  amount: {type: Number, required: true, default: 0},
  typeAmount: {type: String, require: true},
  stepAmount: {type: String},
  images: {type: Array},
})

module.exports = model('Item', schema)