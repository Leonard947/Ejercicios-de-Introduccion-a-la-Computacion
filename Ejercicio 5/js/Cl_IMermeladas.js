export default class Cl_IMermeladas{
     
    leersabor(){
        return prompt("Ingrese el Sabor de la Mermelada: 1)Fresa  2)Melocoton  3)Guayaba  4)Piña  5)Tamarindo");
    }
    leercosto(){
        return prompt("Introduzca el Costo de la Mermelada: ");
    }
    leercant(){
        return prompt("Ingrese la Cantidad deseada: ");
    }
    leerubi(){
        return prompt("¿Su Mermelada proviene del Edo. Lara (1.Si/0.No): ");
    }

    repMermeladas(merm,montRec,precio,montBase,desc,total){
        return `Sabor de la Mermelada: ${merm}
        <br>
        <br> Monto de Recarga sobre el Costo: ${montRec}$
        <br> Precio: ${precio}$
        <br> Monto Base: ${montBase}$
        <br> Monto Descontable: ${desc}$
        <br> Total a Pagar: ${total}$
        `;
    }
}
//Cierre de la CLase