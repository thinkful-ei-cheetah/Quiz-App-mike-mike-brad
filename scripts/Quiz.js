'use strict';


const Quiz = (function() {
  class Quiz {
    constructor(questions) {
      this.unasked = questions;
      this.asked = [];
      this.score = 0;
      this.scoreHistory = [];
      this.active = false;
    }

    start() {
      this.active = true;
    }

    nextQuestion() {
      if (!this.unasked.length) {
        console.log('error: no more question');
        return;
      }
      
      const question = this.unasked.pop();
      this.asked.push(question);
      console.log(question.text);
    }

    submitAnswer(answer) {
      return answer === this.asked[this.asked.length - 1].correctAnswer;
    }
  }

  return Quiz;
}());


