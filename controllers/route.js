var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/index", {
      templateUrl: "view/home.html",
      controller: "homeController",
    })
    .when("/product", {
      templateUrl: "view/product.html",
    })
    .when("/productdetail", {
      templateUrl: "view/productdetail.html",
    })
    .when("/contact", {
      templateUrl: "view/contact.html",
    })
    .when("/about", {
      templateUrl: "view/about.html",
    })
    .when("/login", {
      templateUrl: "view/login.html",
    })
    .when("/register", {
      templateUrl: "view/register.html",
    })
    .when("/forgot", {
      templateUrl: "view/forgot.html",
    })
    .otherwise({
      redirectTo: "/index",
      controller: "homeController",
    });
});
