// var app = angular.module('candidateApp', []);

// app.controller('CandidateController', function($scope, CandidateService) {

//     $scope.getAllCandidates = function() {
//         CandidateService.getAllCandidates().then(function(response) {
//             $scope.candidates = response.data;
//         });
//     };

//     $scope.getCandidateById = function(id) {
//         CandidateService.getCandidateById(id).then(function(response) {
//             $scope.selectedCandidate = response.data;
//         });
//     };

//     $scope.addCandidate = function(candidate) {
//         CandidateService.addCandidate(candidate).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate added successfully!');
//             $scope.newCandidate = {};
//         });
//     };

//     $scope.updateCandidate = function(candidate) {
//         CandidateService.updateCandidate(candidate).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate updated successfully!');
//             $scope.newCandidate = {};
//         });
//     };

//     $scope.deleteCandidate = function(id) {
//         CandidateService.deleteCandidate(id).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate deleted successfully!');
//         });
//     };

// });



// var app = angular.module('candidateApp', []);

// app.controller('CandidateController', function($scope, CandidateService) {

//     $scope.candidates = [];
//     $scope.initialize = function() {
//         $scope.getAllCandidates();
//         console.log("Initialized");
//     };

//     $scope.getAllCandidates = function() {
//         CandidateService.getAllCandidates().then(function(response) {
//             $scope.candidates = response.data;
//         });
//     };

//     $scope.getCandidateById = function(id) {
//         CandidateService.getCandidateById(id).then(function(response) {
//             $scope.selectedCandidate = response.data;
//         });
//     };

//     $scope.addCandidate = function(candidate) {
//         CandidateService.addCandidate(candidate).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate added successfully!');
//             $scope.newCandidate = {};
//         });
//     };

//     $scope.updateCandidate = function(candidate) {
//         CandidateService.updateCandidate(candidate).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate updated successfully!');
//             $scope.selectedCandidate = {};
//         });
//     };

//     $scope.deleteCandidate = function(id) {
//         CandidateService.deleteCandidate(id).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate deleted successfully!');
//         });
//     };
//     $scope.initialize();

   
// });


// var app = angular.module('candidateApp', []);

// app.controller('CandidateController', function($scope, CandidateService) {

//     $scope.newCandidate = {};

//     $scope.initialize = function() {
//         console.log("initialize");
//         $scope.getAllCandidates();
//     };

//     $scope.getAllCandidates = function() {
//         CandidateService.getAllCandidates().then(function(response) {
//             $scope.candidates = response.data;
//         });
//     };

//     $scope.getCandidateById = function(id) {
//         CandidateService.getCandidateById(id).then(function(response) {
//             $scope.selectedCandidate = response.data;
//         });
//     };

//     $scope.addCandidate = function(candidate) {
//         CandidateService.addCandidate(candidate).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate added successfully!');
//             $scope.newCandidate = {};
//         });
//     };

//     $scope.updateCandidate = function(candidate) {
//         CandidateService.updateCandidate(candidate).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate updated successfully!');
//             $scope.newCandidate = {};
//         });
//     };

//     $scope.deleteCandidate = function(id) {
//         CandidateService.deleteCandidate(id).then(function(response) {
//             $scope.getAllCandidates();
//             alert('Candidate deleted successfully!');
//         });
//     };

//     $scope.initialize(); // Call the initialize function when the controller is loaded.
// });

// app.js

// var app=angular.module('candidateApp', []);
angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/candidates', {
                templateUrl: 'candidates.html',
                controller: 'CandidateController'
            })
            .otherwise({
                redirectTo: '/candidates'
            });
    });
