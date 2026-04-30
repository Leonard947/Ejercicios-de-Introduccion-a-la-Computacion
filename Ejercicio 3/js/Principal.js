import Cl_Arepera from "./Cl_Arepera.js";
import Cl_IArepera from "./Cl_IArepera.js";

let iArepera= new Cl_IArepera(),
    canjq=iArepera.leercantJamQueso(),
    canpo=iArepera.leercantPollo(),
    canpa=iArepera.leercantPabellon(),
    cando=iArepera.leercantDomino(),
    canq=iArepera.leercantQueso(),

    Arepera= new Cl_Arepera(canjq,canpo,canpa,cando,canq),
    salida= document.getElementById("Salida")
    salida.innerHTML= iArepera.repArepera(Arepera.subTotJamQueso(),Arepera.subTotPollo(),Arepera.subTotPabellon(),Arepera.subTotDomino(),Arepera.subTotQueso(),Arepera.montTotal())
    //Cierre de la CLase Principal