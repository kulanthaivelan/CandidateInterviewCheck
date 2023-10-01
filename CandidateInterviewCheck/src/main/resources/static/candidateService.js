// // 
// app.service('candidateService', ['$http', function($http) {
//     var baseUrl = 'http://localhost:8080/candidates';

//     this.getAllCandidates = function() {
//         return $http.get(baseUrl);
//     };

//     this.getCandidateById = function(id) {
//         return $http.get(baseUrl + '/' + id);
//     };

//     this.addCandidate = function(candidate) {
//         return $http.post(baseUrl, candidate);
//     };

//     this.updateCandidate = function(id, candidate) {
//         return $http.put(baseUrl + '/' + id, candidate);
//     };

//     this.deleteCandidate = function(id) {
//         return $http.delete(baseUrl + '/' + id);
//     };
// }]);
// app.service('CandidateService', function($http) {

//     this.getAllCandidates = function() {
//         return $http.get('http://localhost:8080/candidates/');
//     };

//     this.getCandidateById = function(id) {
//         return $http.get('http://localhost:8080/candidates/' + id);
//     };

//     this.addCandidate = function(candidate) {
//         return $http.post('http://localhost:8080/candidates/create', candidate);
//     };

//     this.updateCandidate = function(candidate) {
//         return $http.put('http://localhost:8080/candidates/update/' + candidate.id, candidate);
//     };

//     this.deleteCandidate = function(id) {
//         return $http.delete('http://localhost:8080/candidates/delete/' + id);
//     };

// });
angular.module('myApp')
    .service('CandidateService', function($http) {

        this.getAllCandidates = function() {
            return $http.get('http://localhost:8080/candidates/');
        }

        this.addCandidate = function(candidate) {
            return $http.post('http://localhost:8080/candidates/create', candidate);
        }

        this.updateCandidate = function(id, updatedCandidate) {
            return $http.put('http://localhost:8080/candidates/update/' + id, updatedCandidate);
        }

        this.deleteCandidate = function(id) {
            return $http.delete('http://localhost:8080/candidates/delete/' + id);
        }
    });
