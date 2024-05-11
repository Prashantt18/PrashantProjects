// var app = angular.module('portfolioApp', []);
// app.controller('CertificatesController', function($scope) {
//     $scope.certificates = [
//         { title: "National Volleyball certificate", image: "national.jpeg" },
//         { title: "Inter-University Volleyball Competition ", image: "volley.jpeg" },
//         { title: "Cloud computing fundamentals", image: "cloud.jpeg" },
        
//     ];
//     // Function to chunk the certificates into rows
//     function chunkArray(array, chunkSize){
//         var result = [];
//         for (var i = 0; i < array.length; i += chunkSize) {
//             result.push(array.slice(i, i + chunkSize));
//         }
//         return result;
//     }

//     // Initialize filteredCertificateRows with all certificates
//     $scope.filteredCertificateRows = chunkArray($scope.certificates, 3);

//     // Watch for changes in the search query
//     $scope.$watch('searchQuery', function(newValue, oldValue) {
//         if (newValue !== oldValue) {
//             $scope.filteredCertificateRows = chunkArray(
//                 $scope.certificates.filter(function(certificate) {
//                     return certificate.title.toLowerCase().includes(newValue.toLowerCase());
//                 }),
//                 3
//             );
//         }
//     });
// });