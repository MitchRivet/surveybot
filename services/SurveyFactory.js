surveybot.factory('SurveyFactory', function SurveyFactory() {
  var factory = {};
  factory.answer1 = [];
  factory.answer2 = [];

  factory.addAnswerOne = function() {
    var answerOne = { result: factory.wineAnswer };
    factory.answer1.push(answerOne);
    factory.wineAnswer = null;
    };

  factory.addAnswerTwo = function() {
    var answerTwo = { result: factory.clooneyAnswer };
    factory.answer2.push(answerTwo);
    factory.clooneyAnswer = null;
  };

  // countwhite = 0;
  // countred = 0;
  // countcry = 0;
  // factory.displayWine = function () {
  //   answer1.forEach(function(wine) {
  //     if (wine === "white") {
  //       countwhite++;
  //     }
  //   })
  //
  //   return countwhite;
  // };

  return factory;
});
