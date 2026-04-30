export default class Cl_Empresa{
    constructor(nMa,nMe, opc){
        this.nombreMayor=nMa;
        this.nombreMenor=nMe;
        this.mayor=0;
        this.menor=Infinity;
        this.opc=opc
    }

        set opc(opc){
            this.opc=+opc;
        }
        get opc(){
            return this.opc;
        }
        
    procesarEmp(emp){
        if(emp.ingreso>this.mayor){
            this.mayor=emp.ingreso;
            this.nombreMayor=emp.nombre;
        }

        if(emp.edad<this.menor){
            this.menor=emp.edad;
            this.nombreMenor=emp.nombre;
        }
    };
}