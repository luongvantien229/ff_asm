var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: homeController
    })
    .when("/product", {
      templateUrl: "views/product.html",
      controller: "productController",
    })
    .when("/productdetail", {
      templateUrl: "views/productdetail.html",
      controller: "productdetailController",
    })
    .when("/contact", {
      templateUrl: "views/contact.html",
      controller: "contactController",
    })
    .when("/about", {
      templateUrl: "views/about.html",
      controller: "aboutController",
    })
    .when("/login", {
      templateUrl: "views/login.html",
      controller: "loginController",
    })
    .when("/register", {
      templateUrl: "views/register.html",
      controller: "registerController",
    })
    .when("/forgot", {
      templateUrl: "views/forgot.html",
      controller: "forgotController",
    })
    .otherwise({
      redirectTo: "/",
      controller: homeController
    });
});
app.run(function ($rootScope) {
  $rootScope.$on("$routeChangeStart", function () {
    $rootScope.loading = true;
  });
  $rootScope.$on("$routeChangeSuccess", function () {
    $rootScope.loading = false;
  });
  $rootScope.$on("$routeChangeError", function () {
    $rootScope.loading = false;
    alert("Error");
  });
});
