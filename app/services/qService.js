angular.module('trivia-trends').service('qService',function($http){

    this.getQuestions = function(){
        $http.get('https://practiceapi.devmountain.com/api/trivia/questions').then(resp => {
            console.log(resp);
            return resp.data
        })
    }

    this.getDiffQuestions = function(diff){
        $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/'+diff).then(resp => {
            return resp.data
        })
    }
})