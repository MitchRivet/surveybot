surveybot.controller('WineCtrl', function WineCtrl($scope, SurveyFactory) {
  $scope.answer1 = SurveyFactory.answer1;
  $scope.SurveyFactory = SurveyFactory; 
});
