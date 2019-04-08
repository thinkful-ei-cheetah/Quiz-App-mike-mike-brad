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
  }

  return Quiz;
}());


