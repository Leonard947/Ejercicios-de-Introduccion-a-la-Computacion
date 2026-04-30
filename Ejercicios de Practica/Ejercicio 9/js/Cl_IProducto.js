export default class Cl_IProducto{

    leerCodigo(){
        return prompt ("Introduzca el Codigo del Producto: ")
    }
    leerPrecio(){
        return prompt ("Ingrese el Precio del Producto: ")
    }
    leerExistencia(){
        return prompt ("Ingrese la Cantidad del Producto existente en el almacen: ")
    }
    leerStockMin(){
        return prompt ("Ingrese el Stock Minimo del Producto: ")
    }
    solicitarOpc(){
        return prompt ("Desea ingresar otro Producto?: (1:SI  0:NO) ")
    }
}