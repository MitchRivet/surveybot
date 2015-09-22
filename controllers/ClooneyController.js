surveybot.controller('ClooneyCtrl', function ClooneyCtrl($scope, SurveyFactory) {
  $scope.answer2 = SurveyFactory.answer2;
  $scope.SurveyFactory = SurveyFactory;
});
