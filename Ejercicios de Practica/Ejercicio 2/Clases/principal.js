import Cl_Cliente from "./CL_Cliente.js";
import Cl_ICliente from "./Cl_ICliente.js";

let iCliente= new Cl_ICliente(),
ce= iCliente.leerCedula(),
tP= iCliente.leertipoProducto(),
ca= iCliente.leerCantidad(),

Cliente= new Cl_Cliente(ce,tP,ca),
salida= document.getElementById("Salida");
salida.innerHTML= iCliente.repCliente(Cliente.montTotal(), Cliente.Cedula, Cliente.nombreProducto())