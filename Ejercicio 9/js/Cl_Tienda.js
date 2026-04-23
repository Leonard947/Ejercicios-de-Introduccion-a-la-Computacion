export default class Cl_Tienda{
    constructor(){
        this.acumPrecio=0.0
        this.contProductos=0
        this.contProdProcesados=0
    }

    procesarProducto(Prod){
        if (Prod.existencia<Prod.stockMin){
           this.contProductos++
        }
        this.contProdProcesados++
        this.acumPrecio+=Prod.precio
    }

    cantProductos(){
        return this.contProductos
    }

    promPrecio(){
        if(this.contProdProcesados>0)
            return this.acumPrecio/this.contProdProcesados
        else
            return 0
    }
}