export default class Cl_Empleado{
    constructor(nombre,edad,sexo,estCivil,ingresos){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.estCivil=estCivil;
        this.ingresos=ingresos;
    };

    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    
    set edad(e){
        this._edad=+e;
    }
    get edad(){
        return this._edad;
    }

    set sexo(s){
        this._sexo=+s;
    }
    get sexo(){
        return this._sexo;
    }

    set estCivil(eC){
        this._estCivil=+eC;
    }
    get estCivil(){
        return this._estCivil;
    }

    set ingresos(i){
        this._ingresos=+i;
    }
    get ingresos(){
        return this._ingresos;
    }
}