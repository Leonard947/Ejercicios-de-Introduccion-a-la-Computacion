export default class Cl_Arepera{
    constructor(cantJamQueso, cantPollo, cantPabellon, cantDomino, cantQueso){
        this.cantJamQueso=cantJamQueso;
        this.cantPollo=cantPollo;
        this.cantPabellon=cantPabellon;
        this.cantDomino=cantDomino;
        this.cantQueso=cantQueso;
    }

    set cantJamQueso(canjq){
        this._cantJamQueso=+canjq;
    }
    get cantJamQueso(){
        return this._cantJamQueso;
    }

    set cantPollo(canpo){
        this._cantPollo=+canpo;
    }
    get cantPollo(){
        return this._cantPollo;
    }

    set cantPabellon(canpa){
        this._cantPabellon=+canpa;
    }
    get cantPabellon(){
        return this._cantPabellon;
    }

    set cantDomino(cando){
        this._cantDomino=cando;
    }
    get cantDomino(){
        return this._cantDomino;
    }

    set cantQueso(canq){
        this._cantQueso=canq;
    }
    get cantQueso(){
        return this._cantQueso;
    }


    subTotJamQueso(){
        return this.cantJamQueso*3;
    }
    subTotPollo(){
        return this.cantPollo*3.5;
    }
    subTotPabellon(){
        return this.cantPabellon*5;
    }
    subTotDomino(){
        return this.cantDomino*3;
    }
    subTotQueso(){
        return this.cantQueso*1.5;
    }

    montTotal(){
        return this.subTotJamQueso()+this.subTotPollo()+this.subTotPabellon()+this.subTotDomino()+this.subTotQueso();
    }
}
//Cierre de la Clase Cl_Arepera