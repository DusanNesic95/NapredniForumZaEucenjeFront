app.controller('homeController', ['$scope', 'funkcije', '$localStorage', '$http',
 function($scope, funkcije, $localStorage, $http) {
 	$scope.korisnik = $localStorage.korisnik;

	$scope.logout = function() {
		delete $localStorage.rola;
		delete $localStorage.predmet;
		window.location = "../index.html";
	}

	$scope.idiNaPocetnu = function() {
		window.location = "#/home";
	}
	
	$scope.idiNaPredmete = function() {
		window.location = "#/predmetprikazstudent";
	}

	$scope.idiNaTeme = function() {
		window.location = "#/temaprikazstudent";
	}

	$scope.aktivirajPocetnaStudent = function() {
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("teme").className = "treeview";
		document.getElementById("pocetna").className = "active treeview";
	}

	$scope.aktivirajPredmetiStudent = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("teme").className = "treeview";
		document.getElementById("predmeti").className = "active treeview";
	}

	$scope.aktivirajTemeStudent = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("teme").className = "active treeview";
	}

	$scope.aktivirajPocetnaProfesor = function() {
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("teme").className = "treeview";
		document.getElementById("materijali").className = "treeview";
		document.getElementById("pocetna").className = "active treeview";
	}

	$scope.aktivirajPredmetiProfesor = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("teme").className = "treeview";
		document.getElementById("materijali").className = "treeview";
		document.getElementById("predmeti").className = "active treeview";
	}

	$scope.aktivirajTemeProfesor = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("materijali").className = "treeview";
		document.getElementById("teme").className = "active treeview";
	}

	$scope.aktivirajMaterijaliProfesor = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("teme").className = "treeview";
		document.getElementById("materijali").className = "active treeview";
	}

	$scope.aktivirajPocetnaAdmin = function() {
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("materijali").className = "treeview";
		document.getElementById("korisnici").className = "treeview";
		document.getElementById("blokiranje").className = "treeview";
		document.getElementById("pocetna").className = "active treeview";
	}

	$scope.aktivirajPredmetiAdmin = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("materijali").className = "treeview";
		document.getElementById("korisnici").className = "treeview";
		document.getElementById("blokiranje").className = "treeview";
		document.getElementById("predmeti").className = "active treeview";
	}

	$scope.aktivirajMaterijaliAdmin = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("korisnici").className = "treeview";
		document.getElementById("blokiranje").className = "treeview";
		document.getElementById("materijali").className = "active treeview";
	}

	$scope.aktivirajKorisniciAdmin = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("blokiranje").className = "treeview";
		document.getElementById("materijali").className = "treeview";
		document.getElementById("korisnici").className = "active treeview";
	}

	$scope.aktivirajBlokiranjeAdmin = function() {
		document.getElementById("pocetna").className = "treeview";
		document.getElementById("predmeti").className = "treeview";
		document.getElementById("korisnici").className = "treeview";
		document.getElementById("materijali").className = "treeview";
		document.getElementById("blokiranje").className = "active treeview";
	}

}]);
