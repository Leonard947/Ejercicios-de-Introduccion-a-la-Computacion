import Cl_Producto from "./Cl_Producto.js";
import Cl_IProducto from "./Cl_IProducto.js";
import Cl_Tienda from "./Cl_Tienda.js";
import Cl_ITienda from "./Cl_ITienda.js";

let iTienda = new Cl_ITienda(),
    tienda = new Cl_Tienda(),
    salida= document.getElementById("salida");

    let opc=1
    while(opc==1){
        let iProducto = new Cl_IProducto(),
        c = iProducto.leerCodigo(),
        p = iProducto.leerPrecio(),
        e = iProducto.leerExistencia(),
        sM = iProducto.leerStockMin()

        let Prod = new Cl_Producto(c,p,e,sM)
            tienda.procesarProducto(Prod)
        
        opc = iProducto.solicitarOpc()
    }

    salida=document.getElementById("salida");
    salida.innerHTML+=iTienda.repTienda(tienda.promPrecio(),tienda.cantProductos())