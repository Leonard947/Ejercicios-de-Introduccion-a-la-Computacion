export default class Cl_Producto{
    constructor(codigo,precio,existencia,stockMin){
        this.codigo=codigo;
        this.precio=precio;
        this.existencia=existencia;
        this.stockMin=stockMin;
    }

    set codigo(c){
        this._codigo=c
    }
    get codigo(){
        return this._codigo
    }

    set precio(p){
        this._precio=+p
    }
    get precio(){
        return this._precio
    }

    set existencia(e){
        this._existencia=+e
    }
    get existencia(){
        return this._existencia
    }

    set stockMin(sM){
        this._stockMin=+sM
    }
    get stockMin(){
        return this._stockMin
    }
}