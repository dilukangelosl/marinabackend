app.config(function($stateProvider,$urlRouterProvider) {
    var login = {
        name: 'login',
        url: '/login',
        templateUrl: 'view1/view1.html',
        controller:'loginCtrl'
    }

    var home = {
        name: 'home',
        url: '/home',
        templateUrl: 'view2/view2.html',
        controller:'homeCtrl'
    }


    var dashboard = {
        name: 'home.dashboard',
        url: '/dashboard',
        templateUrl: 'dashboard/dash.html',
        controller:'homeCtrl'
    }

    $stateProvider.state(login);
    $stateProvider.state(home);
    $stateProvider.state(dashboard);

    $urlRouterProvider.otherwise('/login');
});