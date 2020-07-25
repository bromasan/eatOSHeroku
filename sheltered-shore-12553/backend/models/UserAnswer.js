const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let UserAnswer = new Schema({
   text: {
      type: String
   },
   isCorrect: {
     type: Boolean
   },
   points: {
     type: Number
   },
   question: {
       type: Schema.Types.ObjectID,
       ref: 'Question'
   },
   user: {
     type: Schema.Types.ObjectID,
     ref: 'User'
   }

}, {
   collection: 'useranswers'
})

module.exports = mongoose.model('UserAnswer', UserAnswer)
