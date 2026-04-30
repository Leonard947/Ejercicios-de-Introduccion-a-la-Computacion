export default class Cl_ICliente{
    
    leerCedula(){
        return prompt("Cedula: ");
    }

    leertipoProducto(){
        return prompt("Tipo de Producto:  1)Pollo entero (4.5$xKg)  2)Muslos (5$xKg)  3)Pechuga (5.5$xKg)  4)Otros (3.5xKg)");
    }

    leerCantidad(){
        return prompt("Cantidad: ");
    }

    repCliente(montTotal, ce, nombreProducto){
        return `Monto Total: ${montTotal}
        <br> Cedula: ${ce}</br>
        <br> Tipo de Pollo: ${nombreProducto}`;
    }
}
//Cierre de Cl_ICliente