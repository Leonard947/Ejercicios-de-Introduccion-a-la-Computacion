export default class Cl_ITienda{
    repTienda(promPrecio,cantProductos){
        return `El promedio del precio de los productos totales es de ${promPrecio}$
        <br> La Cantidad de Productos cuya existencia esta por debajo del stock minimo es de ${cantProductos}`
    }
}