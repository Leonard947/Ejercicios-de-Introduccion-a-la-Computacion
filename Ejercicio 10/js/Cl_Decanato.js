export default class Cl_Decanato{
    constructor(nombre,bandBecados,bandNoBecados,bandOtros){
        this.nombre=nombre;
        this.bandBecados=bandBecados;
        this.bandNoBecados=bandNoBecados;
        this.bandOtros=bandOtros;
    }

    set nombre(n){
        this._nombre=n
    }
    get nombre(){
        return this._nombre;
    }

    set bandBecados(bB){
        this._bandBecados=+bB;
    }
    get bandBecados(){
        return this._bandBecados;
    }

    set bandNoBecados(bNB){
        this._bandNoBecados=+bNB;
    }
    get bandNoBecados(){
        return this._bandNoBecados;
    }

    set bandOtros(bO){
        this._bandOtros=+bO;
    }
    get bandOtros(){
        return this._bandOtros;
    }

    totalBandejas(){
        return this.bandBecados+this.bandNoBecados+this.bandOtros;
    }
}