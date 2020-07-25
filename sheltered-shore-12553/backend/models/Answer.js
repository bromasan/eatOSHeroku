const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Answer = new Schema({
   text: {
      type: String
   },
   isCorrect: {
     type: Boolean
   },
   question:
     {
       type: String,
       ref: 'Question'
     }

}, {
   collection: 'answers'
})

Answer.statics.findAnswers = function(id) {
  console.log("ID", id);
  return this.find({question: id}, null, (err, data) => {
    if(err) {
      return next(err);
    } else {
      console.log("DATA ",data);
    }
  }).lean()
};

module.exports = mongoose.model('Answer', Answer)
