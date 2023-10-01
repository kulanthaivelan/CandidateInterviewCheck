angular.module('myApp')
    .controller('CandidateController', function($scope, CandidateService) {

        $scope.getAllCandidates = function() {
            CandidateService.getAllCandidates().then(function(response) {
                $scope.candidates = response.data;
            });
        }

        $scope.addCandidate = function() {
            var newCandidate = {
                purpose: $scope.newCandidate.purpose,
                name: $scope.newCandidate.name,
                email: $scope.newCandidate.email,
                role: $scope.newCandidate.role,
                source: $scope.newCandidate.source,
                assignedTo: $scope.newCandidate.assignedTo,
                status: $scope.newCandidate.status,
                score: $scope.newCandidate.score,
                eligibleForInterview: $scope.newCandidate.eligibleForInterview,
                referral: $scope.newCandidate.referral,
                processStatus: $scope.newCandidate.processStatus
            };

            CandidateService.addCandidate(newCandidate).then(function(response) {
                $scope.getAllCandidates();
                $scope.newCandidate = {}; // Clear form inputs
            });
        }

        $scope.updateCandidate = function(candidate) {
            var updatedCandidate = {
                id: candidate.id,
                purpose: candidate.purpose,
                name: candidate.name,
                email: candidate.email,
                role: candidate.role,
                source: candidate.source,
                assignedTo: candidate.assignedTo,
                status: candidate.status,
                score: candidate.score,
                eligibleForInterview: candidate.eligibleForInterview,
                referral: candidate.referral,
                processStatus: candidate.processStatus
            };

            CandidateService.updateCandidate(candidate.id, updatedCandidate).then(function(response) {
                $scope.getAllCandidates();
            });
        }

        $scope.deleteCandidate = function(id) {
            CandidateService.deleteCandidate(id).then(function(response) {
                $scope.getAllCandidates();
            });
        }

        $scope.getAllCandidates();
        $scope.editCandidate = function(candidate) {
            $scope.editedCandidate = angular.copy(candidate);
        }
        
        $scope.saveEditedCandidate = function() {
            CandidateService.updateCandidate($scope.editedCandidate.id, $scope.editedCandidate).then(function(response) {
                $scope.getAllCandidates();
                $scope.editedCandidate = null;
            });
        }
        
        $scope.cancelEdit = function() {
            $scope.editedCandidate = null;
        }
        
    });
   