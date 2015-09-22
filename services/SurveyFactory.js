surveybot.factory('SurveyFactory', function SurveyFactory() {
  var factory = {};

  factory.answer1 = [];

  factory.answer2 = [];

  factory.addAnswerOne = function() {
    var answerOne = { result: factory.wineAnswer };
    factory.answer1.push(answerOne);
    };

  factory.addAnswerTwo = function() {
    var answerTwo = { result: factory.clooneyAnswer };
    factory.answer2.push(answerTwo);
  };

    return factory;
});
