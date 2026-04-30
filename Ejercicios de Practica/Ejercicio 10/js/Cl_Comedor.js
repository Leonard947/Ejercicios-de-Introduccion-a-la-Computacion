export default class Cl_Comedor{
    constructor(){
        this.acumBecados=0
        this.acumNoBecados=0
        this.acumOtros=0
    }

    procesarDecanato(decanato){
        this.acumBecados+=decanato.bandBecados;
        this.acumNoBecados+=decanato.bandNoBecados;
        this.acumOtros+=decanato.bandOtros;
    }

    totalBandejasBecados(){
        return this.acumBecados;
    }
    totalBandejasOtros(){
        return this.acumOtros;
    }
    totalPorcentaje(){
        return this.acumBecados+this.acumNoBecados;
    }

    porcentajeBecados(){
        return (this.acumBecados*100)/this.totalPorcentaje();
    }
}