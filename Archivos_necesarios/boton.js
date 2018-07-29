var option = 1;
var com = document.getElementById("comprar");
var ven = document.getElementById("vender");
var sal = document.getElementById("saludo");
var see = document.getElementById("resultado");
var place = document.getElementById("valor");
var processor = 1;
var tope = document.getElementById("opcion");

function cambiar(button){ 
	switch (processor) {
		case 1: if (processor == 1 && button == 'iz'){
			console.log("me muevo un poco a la izquierda");
		}else if (processor == 1 && button == 'de'){
			console.log("me muevo a la derecha a la posicion 2");
			processor = 2;
			tope.classList.add("skrill");
			tope.classList.remove("paypal");
		}break;
		case 2:if (processor == 2 && button == 'iz'){
			console.log("me muevo a la izquierda a la posicion 1");
			processor = 1;
			tope.classList.add("paypal");
			tope.classList.remove("skrill");
		}else if (processor == 2 && button == 'de'){
			console.log("me muevo a la derecha a la posicion 3");
			processor = 3;
			tope.classList.add("neteller");
			tope.classList.remove("skrill");
		}break;
		case 3:if (processor == 3 && button == 'iz'){
			console.log("me muevo a la izquierda a la posicion 2");
			processor = 2;
			tope.classList.add("skrill");
			tope.classList.remove("neteller");
		}else if (processor == 3 && button == 'de'){
			console.log("me muevo a la derecha a la posicion 4");
			processor = 4;
			tope.classList.add("petro");
			tope.classList.remove("neteller");
		}break;
		case 4:if (processor == 4 && button == 'iz'){
			console.log("me muevo a la izquierda a la posicion 3");
			processor = 3;
			tope.classList.add("neteller");
			tope.classList.remove("petro");
		}else if (processor == 4 && button == 'de'){
			console.log("me muevo un poco a la derecha");
		}break;
	}
	return processor;
}


function comprar(){
var a;
var results;
var fees;
a = document.getElementById("valor").value;
if(a.length >= 2 && a.charAt(0) == "$"){
a= a.slice(1,a.length);
}
a = parseFloat(a);
result = (a + 0.3) / 0.946;
fees = result - a;
	if ((Number.isNaN(result)) || a <= 0){
		document.getElementById("resultado").innerHTML = "Error, valor no aceptable.";	
	}else if(option == 1){
		document.getElementById("resultado").innerHTML = "Para $" +a+ " te deben pagar <strong id='resul'>$" + result.toFixed(2) + "</strong> y asi el comprador cubra las fees ($" + fees.toFixed(2) + ").";
	}else{
		document.getElementById("resultado").innerHTML = "Si venderás $" +a+ " debes pagar <strong id='resul'>$" + result.toFixed(2) + "</strong> para cubrir las fees ($" + fees.toFixed(2) + ").";
	}
	valor = document.getElementById("resul");
	valor.classList.add("strong");
	valor.classList.add("tipo" +processor);
	place.value = "";
	place.placeholder = "$0.00";
}

function aparecer(){
 	see.classList.remove("aparecera");
}

function select2(){
	if (option == 1){
		ven.classList.remove("selected");
		com.classList.add("selected");
		sal.innerHTML = "Ingresa la cantidad de dinero que deseas comprar";
		see.classList.add("aparecera");
		place.value = "";
		place.placeholder = "$0.00";
		option = 0;
	}
}

function select1(){
	if (option == 0){
		ven.classList.add("selected");
		com.classList.remove("selected");
		sal.innerHTML = "Ingresa la cantidad de dinero que deseas vender";
		see.classList.add("aparecera");
		place.value = "";
		place.placeholder = "$0.00";
		option = 1;
	}
}