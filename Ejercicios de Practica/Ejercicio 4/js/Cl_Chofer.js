export default class Cl_Chofer{
    constructor(nombre,canKm){
        this.nombre=nombre;
        this.canKm=canKm;
    }

    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }

    set canKm(cK){
        this._canKm=+cK;
    }
    get canKm(){
        return this._canKm
    }

    montBase(){
        return this.canKm*0.50
    }

    montCom(){
        if(this.canKm>200)
            return this.montBase()*10/100;
        else
            return 0
    }

    montTotal(){
        return this.montBase()+this.montCom();
    }
}
//Cierre de la Clase Chofer