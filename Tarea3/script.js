// EJERCICIO 3 //
    function contar(palabras) {
        return palabras.length;
      }
      let frase = prompt("Inserta tu frase")
      let resultado = contar(frase);
      console.log("Resultado: " + resultado);

      // Para quitar los espacios interiores he buscado por internet y por ejemplo el .trim() no funciona,
      // porque solo me quitaria los espacios de ambos lados del texto. Por lo que utilizando replace() deberia funcionar
      // con los espacios interiores de tal forma:

      // // procesado = contar(palabras).replace(/\s+/g, '') 
      // // replace() usando una expresión Regex para reemplazar espacios en blanco

      // Aunque no he obtenido resultado. 

      // Seguiré averiguando como puedo solucionarlo y asi hacer el ejercicio 4.
    


// EJERCICIO 5 //

let robot = (nombre ="RX8") => nombre+(parseInt(Math.random()*90)+10);

document.getElementById("generadorNombres").innerHTML = 'El robot se llama: <br>'+robot();


