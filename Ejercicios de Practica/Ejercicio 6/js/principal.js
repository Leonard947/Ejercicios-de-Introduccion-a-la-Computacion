import Cl_Cliente from "./Cl_Cliente.js";
import Cl_ICliente from "./Cl_ICliente.js";

let iCliente=new Cl_ICliente(),
    n=iCliente.leerNombre(),
    t=iCliente.leerTipo(),
    cP=iCliente.leerCantPizza(),

    Cliente= new Cl_Cliente(n,t,cP),
    salida= document.getElementById("Salida");
salida.innerHTML= iCliente.repCliente(Cliente.subTotal(),Cliente.desc(),Cliente.Total());