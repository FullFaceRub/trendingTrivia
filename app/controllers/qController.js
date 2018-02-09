angular.module('trivia-trends').controller('qController', function($scope, qService, $stateParams, $state){

    $scope.test = 'connected'

    this.determineDifficulty = function(diff){
        console.log('hit');
        $state.go('difficulty', {difficulty: diff})
    }

    qService.getQuestions().then(qList => {
        $scope.qList = qList;
    })

    qService.getDiffQuestions().then(qList => {
        $scope.qList = qList;
    })

})