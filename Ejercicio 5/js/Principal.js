import Cl_Mermeladas from "./Cl_Mermeladas.js";
import Cl_IMermeladas from "./Cl_IMermeladas.js";

let iMermelada= new Cl_IMermeladas(),
    s=iMermelada.leersabor(),
    co=iMermelada.leercosto(),
    ca=iMermelada.leercant(),
    u=iMermelada.leerubi(),

    Mermelada= new Cl_Mermeladas(s,co,ca,u),
    salida= document.getElementById("Salida")
    salida.innerHTML= iMermelada.repMermeladas(
        Mermelada.merm(),
        Mermelada.montRec(),
        Mermelada.precio(),
        Mermelada.montBase(),
        Mermelada.desc(),
        Mermelada.total()
    );