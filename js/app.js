var testArray=[];
for (var i = 0; i <= 10; i++){
	//Agregar elementos al arreglo en la última posisción
	testArray.push(i);
}
console.log(testArray);

//Eliminar el primer elemento del arreglo 
testArray.shift();
console.log(testArray);
//Eliminar último elemento del arreglo
testArray.pop();
console.log(testArray);
//Revertir los elementos del arreglo
testArray.reverse();
console.log(testArray);
/*-----------------------------------*/
var testString = 'adcde';
testString.charAt(2);
//c
/*Para obtener un carácter a partir de su código ASCII utilizo 
el métdo String.fromCharCode
Para obtener el código ASCII de un carácter utilio string.charCodeAt(índice)*/

var codigo = testString.charCodeAt(2);
console.log(codigo);

String.fromCharCode(99);
