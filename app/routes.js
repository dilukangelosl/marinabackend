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

    var news = {
        name: 'home.news',
        url: '/news',
        templateUrl: 'news/news.html',
        controller:'newsCtrl'
    }

    var facts = {
        name: 'home.facts',
        url: '/facts',
        templateUrl: 'facts/facts.html',
        controller:'factsCtrl'
    }

    var products = {
        name: 'home.products',
        url: '/products',
        templateUrl: 'products/products.html',
        controller:'productsCtrl'
    }  
    
    var recipes = {
        name: 'home.recipes',
        url: '/recipes',
        templateUrl: 'recipes/recipes.html',
        controller:'recipesCtrl'
    }

     var facts = {
        name: 'home.facts',
        url: '/facts',
        templateUrl: 'facts/facts.html',
        controller:'factsCtrl'
    }

     var mobileusers = {
        name: 'home.mobileusers',
        url: '/mobileusers',
        templateUrl: 'mobileusers/mobileusers.html',
        controller:'mobileusersCtrl'
    }





    $stateProvider.state(login);
    $stateProvider.state(home);
    $stateProvider.state(dashboard);
    $stateProvider.state(news);
    $stateProvider.state(facts);
    $stateProvider.state(products);
    $stateProvider.state(recipes);
    $stateProvider.state(mobileusers);


    $urlRouterProvider.otherwise('/login');
});