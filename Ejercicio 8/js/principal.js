import Cl_Empleado from "./Cl_Empleado.js";
import Cl_Empresa from "./Cl_Empresa.js";
import Cl_IEmpleado from "./Cl_IEmpleado.js";
import Cl_IEmpresa from "./Cl_IEmpresa.js";

let iEmpresa= new Cl_IEmpresa(),
    iEmpleado= new Cl_IEmpleado(),
    empresa= new Cl_Empresa(),
    salida= document.getElementById("salida")

    while(opc==1){
        let n=iEmpleado.leerNombre(),
            e=iEmpleado.leerEdad(),
            s=iEmpleado.leerSexo(),
            eC=iEmpleado.leerEstCivil(),
            i=iEmpleado.leerIngresos(),
            emp= new Cl_Empleado(n,e,s,eC,i);
            empresa.procesarEmp(emp);
            opc=iEmpresa.leerOpc();
    }

    salida.innerHTML+=iEmpresa.repEmpresa(empresa.nombreMayor(),empresa.nombreMenor());