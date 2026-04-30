export default class Cl_IArepera{

    leercantJamQueso(){
        return prompt("Ingrese cantidad de arepas de Jamón y Queso vendidas: ");
    }
    leercantPollo(){
        return prompt("Ingrese cantidad de arepas de Pollo vendidas: ");
    }
    leercantPabellon(){
        return prompt("Ingrese cantidad de arepas de Pabellon vendidas: ");
    }
    leercantDomino(){
        return prompt("Ingrese cantidad de arepas Domino vendidas: ");
    }
    leercantQueso(){
        return prompt("Ingrese cantidad de arepas de Queso vendidas: ");
    }

    repArepera(subTotJamQueso,subTotPollo,subTotPabellon,subTotDomino,subTotQueso, montTotal){
        return `Total de Arepas de Jamón y Queso vendidas: ${subTotJamQueso}$
        <br> Total de Arepas de Pollo vendidas: ${subTotPollo}$
        <br> Total de Arepas de Pabellón vendidas: ${subTotPabellon}$
        <br> Total de Arepas Domino vendidas: ${subTotDomino}$
        <br> Total de Arepas de Queso vendidas: ${subTotQueso}$
        <br>
        <br> Ventas Totales del Día: ${montTotal}$
        `; 
    }
}
//Cierre de la CLase IArepera