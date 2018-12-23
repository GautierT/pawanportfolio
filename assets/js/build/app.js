angular.module("StarterApp",["ngMaterial","ngMdIcons","ui.router","ui.router.stateHelper","main.config","main.controllers"])
.config(["$urlRouterProvider","$locationProvider",function($urlRouterProvider,$locationProvider)
{$urlRouterProvider.otherwise("/"),$locationProvider.html5Mode({enabled:!0,requireBase:!1})}])
.config(["$httpProvider",function($httpProvider){var growlMessages=function($q,$log,$rootScope)
    {return{response:function(result)
        {return result.data.growlMessages&&$rootScope.$broadcast("growlMessages",result.data.growlMessages),result},responseError:function(result)
        {return result.data.growlMessages&&$rootScope.$broadcast("growlMessages",result.data.growlMessages),$q.reject(result)
    }
}
};$httpProvider.interceptors.push(growlMessages)}])
.run(["$rootScope","$mdToast","$log","$state",function($rootScope,$mdToast,$log,$state)
{$rootScope.$on("growlMessages",function(event,data)
{data.forEach(function(message)
    {$mdToast.show($mdToast.simple().hideDelay(3e3).position("top right")
    .content(message.text))})}),$rootScope._=window._,$rootScope.$state=$state}])
    .controller("AppController",["$rootScope","$scope","$mdSidenav","$log",function($rootScope,$scope,$mdSidenav,$log)
    {$log.info("AppController loaded."),$scope.toggleSidenav=function(menuId)
    {$mdSidenav(menuId).toggle()},$rootScope.$on("$stateChangeStart",function(event,toState,toParams,fromState,fromParams)
    {$log.info("toState : ",toState)})}]),angular.module("main.config",[])
    .config(["$stateProvider","stateHelperProvider",function($stateProvider,stateHelperProvider)
    {stateHelperProvider.state({name:"index",url:"","abstract":!0,template:"<div ui-view></div>",children:[{name:"home",url:"/",templateUrl:"/views/partials/home.html",controller:"HomeController"}]})
}]),angular.module("main.controllers",[])
.controller("HomeController",["$rootScope","$scope","$log",function($rootScope,$scope,$log)
{$log.info("HomeController loaded.")}]);