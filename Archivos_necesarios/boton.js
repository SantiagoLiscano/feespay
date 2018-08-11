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
}


function comprar(){
var a;
var result;
var fees;
a = document.getElementById("valor").value;
	if(a.length >= 2 && a.charAt(0) == "$"){
		a= a.slice(1,a.length);
	}
a = parseFloat(a);
result = (a + 0.3) / 0.946;
fees = result - a;
	if (isNaN(result) || a <= 0){
		document.getElementById("resultado").innerHTML = "Error, valor no aceptable.";	
	}else if(option == 1){
		document.getElementById("resultado").innerHTML = "Si quieres enviar $" +a+ " debes transferir <strong id='resul'>$" + result.toFixed(2) + "</strong> para cubrir los impuestos ($" + fees.toFixed(2) + "). &nbsp;&nbsp; <div id='container'><strong id='piso' class='icon-loop2'></strong> <span id='explanation'>Si quieres saber cuanto puedes enviar con $"+a+" pulsa aqui!</span></div> " ;
		var piso = document.getElementById('piso');
		piso.classList.add('girar');
		piso.addEventListener('click', function(){
			if (a < 0.35)
				document.getElementById("resultado").innerHTML = "Si tu maximo es de $" +a+ " no tienes dinero suficiente para realizar una transferencia.";
			else if (a < 1.41){
				document.getElementById("resultado").innerHTML = "Si tu maximo es de $" +a+ ", te alcanzará para transferir <strong id='resul'>$" + ((a - fees.toFixed(2))).toFixed(2) + "</strong> debido a los impuestos ($" + fees.toFixed(2) + ").";
			}else{
				var pru = a;						
				while (pru > (a - fees.toFixed(2))){
					pru--;
				}
				while((pru + 0.3) / 0.946 < a){
					pru++;
				}
				if((pru + 0.3) / 0.946 > a){
					pru -= 1;
				}		
				document.getElementById("resultado").innerHTML = "Si tu maximo es de $" +a+ ", te alcanzará para transferir <strong id='resul'>$" + pru + "</strong> debido a los impuestos ($" + ((pru + 0.3) / 0.946 - pru).toFixed(2) + ") quedandote en la cuenta $" + (a - (pru + 0.3) / 0.946).toFixed(2)  + " restantes.";
			}
			if (!isNaN(result) && a > 0){
				valor = document.getElementById("resul");
				valor.classList.add("strong");
				valor.classList.add("tipo" +processor);
			}
		});
	}else{
		document.getElementById("resultado").innerHTML = "Si quieres recibir $" +a+ " te deben enviar <strong id='resul'>$" + result.toFixed(2) + "</strong> para que cubran los impuestos ($" + fees.toFixed(2) + ").";
	}
	if (!isNaN(result) && a > 0){
		valor = document.getElementById("resul");
		valor.classList.add("strong");
		valor.classList.add("tipo" +processor);
	}
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
		sal.innerHTML = "Ingresa la cantidad de dinero que deseas recibir";
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
		sal.innerHTML = "Ingresa la cantidad de dinero que deseas enviar";
		see.classList.add("aparecera");
		place.value = "";
		place.placeholder = "$0.00";
		option = 1;
	}
}

