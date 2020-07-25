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

//Static method to find all answers with the same question
Answer.statics.findAnswers = function(id) {
  return this.find({question: id}, null, (err, data) => {
    if(err) {
      return next(err);
    } else {
      console.log("Answers have been found");
    }
  }).lean()
};

module.exports = mongoose.model('Answer', Answer)
