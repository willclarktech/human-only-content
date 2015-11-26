(function () {
  var app = angular.module('humanOnlyContent', []);

  app.controller('VerificationController', function () {
    this.humanVerified = false;
  });
}());
