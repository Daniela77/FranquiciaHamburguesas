var nombreEmp = document.getElementById('nombreEmp');  	// encuentra nombre
nombreEmpText = nombreEmp.innerHTML;										// toma el contenido de H2
nombreEmpArr = nombreEmpText.split('');									// divide el contenido en la matriz
nombreEmp.innerHTML = '';														// vacia el contenido actual

var span;					// Crear variables para crear elementos
var letter;

for(i=0;i<nombreEmpArr.length;i++){									// Loop por cada letra
  span = document.createElement("span");					// Crea <span> 
  letter = document.createTextNode(nombreEmpArr[i]);	// Crea letra
  if(nombreEmpArr[i] == ' ') {												// si la letra es un espacio
    nombreEmp.appendChild(letter);					// agrega el espacio sin span
  } else {
		span.appendChild(letter);						// agrega la letra al span
  	nombreEmp.appendChild(span); 					// agrega span al h2
  }
}
