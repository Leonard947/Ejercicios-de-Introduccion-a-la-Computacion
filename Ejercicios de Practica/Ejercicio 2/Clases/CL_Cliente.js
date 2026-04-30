export default class Cl_Cliente {
constructor (Cedula, tipoProducto, Cantidad){
    this.Cedula=Cedula;
    this.tipoProducto=tipoProducto;
    this.Cantidad=Cantidad;
}

    set Cedula(ce){
        this._Cedula=ce;
    }
    get Cedula(){
        return this._Cedula;
    }

    set tipoProducto(tP){
        this._tipoProducto=+tP;
    }
    get tipoProducto(){
        return this._tipoProducto;
    }

    set Cantidad(ca){
        this._Cantidad=+ca;
    }
    get Cantidad(){
        return this._Cantidad;
    }

    subTotal(){
        switch (this.tipoProducto){
            case 1: return 4.5*this.Cantidad; break;
            case 2: return 5*this.Cantidad; break;
            case 3: return 5.5*this.Cantidad; break;
            default: return 3.5*this.Cantidad; 
        }
    }

    Descuento(){
        if(this.Cantidad>5)
            return this.subTotal()*12/100
        else
            return 0
    }

    nombreProducto(){
        switch (this.tipoProducto){
            case 1: return "Pollo Entero"; break;
            case 2: return "Muslos"; break;
            case 3: return "Pechuga"; break;
            default: return "Otros";
        }
    }

    montTotal(){
        return this.subTotal()-this.Descuento();
    }
}
//Cierre Cl_CLiente