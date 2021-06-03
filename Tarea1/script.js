// Fórmula --> area_circulo = π * radio 2
// Perímetro del circulo = 2 * π * radio

let radio = 4

function formulas() {
  
    /* Área de un círculo */
    this.areaCirculo = function (radio) {
    }
    /* Perímetro de un círculo */
    this.perimetroCirculo = function (radio){

    }
  }

  function formulas() {
  
    /* Área de un círculo */
    this.areaCirculo = function (radio) {
      return Math.PI * Math.pow(radio,2);
    }
    this.perimetroCirculo =function(radio) {
        return 2* Math.PI *(radio);
    }
  }


  let f = new formulas();
console.log (`El área de un círculo de radio ${radio} es:` + f.areaCirculo(4));
console.log(`El perímetro de un círculo de radio ${radio} es:` +f.perimetroCirculo(4));

