export default class Cl_Mermeladas{
    constructor(sabor,costo,cant,ubi){
        this.sabor=sabor;
        this.costo=costo;
        this.cant=cant;
        this.ubi=ubi;
    }

    set sabor(s){
        this._sabor=+s;
    }
    get sabor(){
        return this._sabor;
    }

    set costo(co){
        this._costo=+co;
    }
    get costo(){
        return this._costo;
    }

    set cant(ca){
        this._cant=+ca;
    }
    get cant(){
        return this._cant;
    }

    set ubi(u){
        this._ubi=+u;
    }
    get ubi(){
        return this._ubi;
    }


    montRec(){
        switch(this.sabor){
            case 1: return this.costo*35/100; break;
            case 2: return this.costo*30/100; break;
            case 3: return this.costo*25/100; break;
            case 4: return this.costo*20/100; break;
            default: return this.costo*40/100;
        }
    }

    
     merm(){
        switch(this.sabor){
            case 1: return "Fresa"; break;
            case 2: return "Melocoton"; break;
            case 3: return "Guayaba"; break;
            case 4: return "Piña"; break;
            default: return "Tamarindo";
        }
    }

    precio(){
        return this.costo+this.montRec();
    }

    montBase(){
        return this.precio()*this.cant;  
    }

    desc(){
        if (this.ubi=1)
            return this.montBase()*5/100;
        if (this.ubi=0)
            return 0
    }

    total(){
        return this.montBase()-this.desc();
    }
}
//Cierre de Clase