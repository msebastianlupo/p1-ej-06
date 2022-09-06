"use strict";

function ingresar(){
    let numero = parseInt(prompt("Ingrese un número"));
    let impuesto = parseInt(prompt("Ingrese un impuesto", 21));
    if(isNaN(numero) || numero <= 0 || impuesto < 0 || impuesto > 100){
        alert("Valores ingresados son inválidos");
        return 0;
    }else{
        calcular(numero, impuesto);
        return numero + impuesto;
    }
}

function calcular(prec, imp){
   console.info(`El precio sin IVA es $${prec}`);
   console.info(`El IVA es ${imp}%`);
   console.info(`El precio IVA incluído es $${prec + (prec * imp / 100)}`);
}


