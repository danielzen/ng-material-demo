var app = angular.module('demoApp', ['ngMaterial'])
  .controller('DialogBottomCtrl', function($scope, $mdDialog, $mdSidenav) {
    $scope.showConfirm = function(ev) {
      var confirm = $mdDialog.confirm()
        .title('Example of a Dialog')
        .content('Did you notice that it grew out of the button?')
        .ok('YES!')
        .cancel('Maybe I should do it again')
        .targetEvent(ev);
      $mdDialog.show(confirm).then(function() {
        $scope.alert = 'You decided to get rid of your debt.';
      }, function() {
        $scope.alert = 'You decided to keep your debt.';
      });
    };
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };
  })
  .controller('ButtonCtrl', function($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';
  })
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };
  })
  .controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
    $scope.close = function() {
      $mdSidenav('left').close();
    };
  })
  .controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
      $scope.alert = '';
      var promise = $mdBottomSheet.show({
        templateUrl: 'bottom-sheet-list-template.html',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      });
      console.log("promise: ", promise);
      promise.then(function(clickedItem) {
        console.log("showBottomSheet");
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
  })
  .controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Share', icon: 'share' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' }
    ];
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  });
