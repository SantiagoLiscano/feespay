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
		}else if (processor == 1 && button == 'de'){
			processor = 2;
			tope.classList.add("skrill");
			tope.classList.remove("paypal");
		}break;
		case 2:if (processor == 2 && button == 'iz'){
			processor = 1;
			tope.classList.add("paypal");
			tope.classList.remove("skrill");
		}else if (processor == 2 && button == 'de'){
			processor = 3;
			tope.classList.add("neteller");
			tope.classList.remove("skrill");
		}break;
		case 3:if (processor == 3 && button == 'iz'){
			processor = 2;
			tope.classList.add("skrill");
			tope.classList.remove("neteller");
		}else if (processor == 3 && button == 'de'){
			processor = 4;
			tope.classList.add("petro");
			tope.classList.remove("neteller");
		}break;
		case 4:if (processor == 4 && button == 'iz'){
			processor = 3;
			tope.classList.add("neteller");
			tope.classList.remove("petro");
		}else if (processor == 4 && button == 'de'){
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
		document.getElementById("resultado").innerHTML = "Para vender $" +a+ " te deben pagar <strong id='resul'>$" + result.toFixed(2) + "</strong> y asi el comprador cubre los impuestos ($" + fees.toFixed(2) + ").";
	}else{
		document.getElementById("resultado").innerHTML = "Si comprarás $" +a+ " debes pagar <strong id='resul'>$" + result.toFixed(2) + "</strong> para cubrir los impuestos ($" + fees.toFixed(2) + ").";
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