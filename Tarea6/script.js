//EJERCICIO 6//

// El método toLocaleUpperCase () convierte una cadena en letras mayúsculas

//  indexof() se usa para localizar valores en un array 

// El método substr() devuelve los caracteres de una cadena que comienzan en una localización especificada
//  y de acuerdo al número de caracteres que se especifiquen.

var nombre = (nombre ="Jordi") =>{
    var midiccionario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    inicial = nombre.substr(0,2).toLocaleUpperCase();
    // Aqui he provado (0,1), pero el resultado era J y no JO que son las 2 primeras iniciales. 
    // Entonces he puesto (0,2) y he visto que el resultado era correcto, aunque no entiendo el motivo.
    num =  midiccionario.indexOf(nombre.substr(0,1).toLocaleLowerCase())+1;
    return  inicial+num;
} 

console.log("Ej: Jordi=", nombre())


// EJERCICIO 9 y 10//

var nombre = prompt("¿Cúal es tu nombre?");
var numero = prompt("Introduce un numero.")

if (numero%2!=0 && numero%7!=0 && numero%3!=0 && numero/5 !=0){
    i(true);
} else i(false);

function i(primo){
   if (primo){
   document.getElementById("num-primo").innerHTML= nombre +" ,<br> el numero"+numero+" es primo.";
       document.getElementById("num-primo").style.color = "#0000FF";
   
    } else {
        document.getElementById("num-nop").innerHTML= nombre +" ,<br> el numero" +numero+" no es primo.";
            document.getElementById("num-nop").style.color ="#FF0000";
        }
    }


// Crea la función para la etiqueta div. 
// La siguiente función JavaScript toma la etiqueta div creada en el paso 1 y cambia el color a rojo:
//  function divColorChange() {document.getElementById('myDiv').style.color = '#FF0000';}
//https://techlandia.com/cambiar-color-texto-javascript-como_85899/