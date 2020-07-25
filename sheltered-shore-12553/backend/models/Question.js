const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema
let Question = new Schema({
   text: {
      type: String
   },
   id : {
     type: Number
   }

}, {
   collection: 'questions'
})



module.exports = mongoose.model('Question', Question)
