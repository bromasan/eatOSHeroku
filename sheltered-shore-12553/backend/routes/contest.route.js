const express = require('express');
const app = express();
const contestRoute = express.Router();


let User = require('../models/User');
let Question = require('../models/Question');
let Answer = require('../models/Answer');
let UserAnswer = require('../models/UserAnswer');

//Signup API
contestRoute.route('/signup').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


//Get Question API
contestRoute.route('/question/:id').get((req, res, next) => {
  Question.findOne({ id: req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {


      let answers = Answer.findAnswers(data._id);
      answers.exec((error, answers) => {
        if (error){
          return next(error);
        } else {
          res.json({question: data, answers: answers});
        }
      })
    }
  })
});



//Submit API
contestRoute.route('/submit').post((req, res, next) => {
  let answer = req.body.answer;
  let correctAnswer = Answer.findOne({question: req.body.question, isCorrect: true});
  correctAnswer.exec((error, correct_answer) => {
    if (error){
      return next(error);
    } else {
      let correct = (answer === correct_answer.text);
      let points = (correct && 100) || 0;
      UserAnswer.create({text: answer, isCorrect: correct, points: points, user: req.body.user, question: req.body.question});
      let new_id = parseInt(req.body.qid)+1;
      if(new_id <= 4){
        res.json({id: new_id, isCorrect: correct});
      } else {
        res.json({alert: "fin", isCorrect: correct});
      }

    }
  })

});

//Get User API
contestRoute.route('/user/:_id').get((req, res, next) => {
  User.findById(req.params._id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("Found your user: ", data);
      res.json(data);
    }
  })
});

//Get Points
contestRoute.route('/points/:id').get((req, res, next) => {
  UserAnswer.find({user: req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      let points = 0;
      data.forEach(answer => points += answer.points);
      res.json({points: points});
    }
  })
});




module.exports = contestRoute;
