export default class Cl_Seccion {
    constructor(codigo) {
        this.codigo = codigo;
        this.contAprob = 0;
        this.contReprob = 0;
        this.contSus = 0;
        this.acumNotas = 0.0;
    }

    set codigo(co) {
        this._codigo = co;
    }
    get codigo() {
        return this._codigo;
    }


    procesarEst(Estudiante) {
        this.acumNotas += Estudiante.notaFinal();

        if (Estudiante.notaFinal() >= 47.5) 
            this.contAprob++;
        else {
            this.contReprob++
            if (Estudiante.notaFinal() >= 37.5) this.contSus++
        }
    }

    cantAprob() {
        return this.contAprob;
    };
    cantSus() {
        return this.contSus;
    }
    porcReprob() {
        return this.contReprob * 100 / 3;
    }
    promNotas() {
        return this.acumNotas / 3;
    }

}