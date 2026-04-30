export default class Cl_IComedor{

    repComedor(totalBandejasBecados,totalBandejasOtros,porcentajeBecados){
        return `----------------------------------------------------------------------------------------------------
        <br>El total de Bandejas servidas a Estudiantes Becados fue de ${totalBandejasBecados}
        <br> El total de Bandejas servidas a otros comensales fue de ${totalBandejasOtros}
        <br>--------------------------------------------------------------------------------------------------------
        <br> El Porcentaje de Estudiantes Becados con respecto al resto de Estudiantes es del ${porcentajeBecados}%`
    }
}