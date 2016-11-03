//use this module to have this app in the global name space, it's better to have on than many 
var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);


//routeProvider is given by angular, it is a dependency, this is creating routes
myApp.config(function($routeProvider){
	$routeProvider
	.when('/books',{
		templateUrl: "partials/book-list.html",
		controller: "BooksListCtrl"
	})
	.when('/kart', {
		templateUrl: "partials/kart-list.html",
		controller: "KartListCtrl"
	})

	.otherwise({
		redirectTo: "/books"
	});


});

//this handles the kart service and pushes the objects into the kart variable
myApp.factory("kartService", function(){
    //this will hold the books added to the kart.
    var kart =[];
    
    return {
        getKart: function(){
            return kart;
        },
        addToKart: function(book){
            kart.push(book);
        },
        buy: function(book){
            alert("Thanks for buying!", book.name);
        }
    }
    
});

//This service is used to store the books object
myApp.factory("bookService", function(){
        var books = [
		{
			imgUrl: "adultery.jpeg",
			name: "Adultery",
			price: 9.99,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House",
			releaseDate: "12-08-2014",
			details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys eyes, she has a perfect life-happy marriage, children and a career. Yet what she feels is an eno... View More"
		},
		{
			imgUrl: "geronimo.jpeg",
			name: "Geronimo Stilton Spacemice#2 : You're Mine, Captain!",
			price: 14.99,
			rating: 5,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2014",
			details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo StiltonixHe is a spacemouse - the Geronimo Stilton of a parallel universe! He is captain of the spaceship Mou... View More"
		},
		{
			imgUrl: "life-or-death.jpeg",
			name: "Life or Death",
			price: 12.99,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette India",
			releaseDate: "01-04-2014",
			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang. Five... View More"
		},
		{
			imgUrl: "playing.jpeg",
			name: "Playing It My Way : My Autobiography",
			price: 7.99,
			rating: 5,
			binding: "Hardcover",
			publisher: "Hodder & Stoughton",
			releaseDate: "01-08-2014",
			details: "I knew that if I agreed to write my story, I would have to be completely honest, as thats the way I have always played the game and that would mean talking about a number of things I have not addr... View More"
		},
		{
			imgUrl: "the-fault.jpeg",
			name: "The Fault in Our Stars",
			price: 19.99,
			rating: 4.5,
			binding: "Paperback",
			publisher: "Penguin Books Ltd",
			releaseDate: "25-01-2013",
			details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist n... View More"
		},
		{
			imgUrl: "wings-of-fire.jpeg",
			name: "Wings of Fire: An Autobiography",
			price: 8.99,
			rating: 5,
			binding: "Paperback",
			publisher: "Universities Press",
			releaseDate: "25-08-2000",
			details: "Wings of Fire traces the life and times of India's former president A.P.J. Abdul Kalam. It gives a glimpse of his childhood as well as his growth as India's Missile Man. Summary of the Book Wings... View More"
		}
	];
              return {
                  getBooks: function (){
                      return books;
                  },
                  addToKart: function(book){
                      
                  }
              }
              });

myApp.controller("KartListCtrl", function($scope, kartService) {
	$scope.kart = kartService.getKart();
	
	$scope.buy = function(book) {
		kartService.buy(book);
	}
});

/* controller, also creates scope object, "view and controller are married by scope"
, scope acts as a glue, when you see a $ think of it as a self contained Angular js object. */
myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title= "BooKart";
	$scope.appDetails.tagline= "We have 1 million books for you";
	
    $scope.nav = {};
    //compares the path set in the index.html file to determine a return value.
    $scope.nav.isActive = function(path){
        if (path === $location.path()){
            return true;
        }
        return false;
    }
	});

//this uses the bookService and injects the information in the object.
myApp.controller("BooksListCtrl", function ($scope, bookService, kartService){

	$scope.books = bookService.getBooks();
        
$scope.addToKart = function(book){
	kartService.addToKart(book);
}


});






