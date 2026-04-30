export default class Cl_Cliente{
    constructor(nombre,tipo,cantPizza){
        this.nombre=nombre;
        this.tipo=tipo;
        this.cantPizza=cantPizza;
    }

    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre
    }

    set tipo(t){
        this._tipo=+t;
    }
    get tipo(){
        return this._tipo
    }

    set cantPizza(cP){
        this._cantPizza=+cP;
    }
    get cantPizza(){
        return this._cantPizza
    }


    subTotal(){
        if(this.tipo==1)
            return this.cantPizza*5;
        else
           if (this.tipo==2){
                return this.cantPizza*10;
           }
           else
            if(this.tipo==3){
                return this.cantPizza*15;
            }
            else{
                return 0;
            }     
    }

    desc(){
        if(this.cantPizza>2)
            return this.subTotal()*25/100;
        else 
            return 0;
    }

    Total(){
        return this.subTotal()-this.desc();
    }
}
//Cierre clase