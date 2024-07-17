async function listarProductos(){
    const conexion= await fetch("https://json-vercel-eta.vercel.app/productos");

    const conexionConvertida= conexion.json();

    // console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, img){
    const conexion= await fetch("https://json-vercel-eta.vercel.app/productos", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            img:img

        })
    });

    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al agregar el producto");
    }

    return conexionConvertida;
}

async function eliminarProducto(id){
    const conexion= await fetch(`https://json-vercel-eta.vercel.app/productos/${id}`, {
        method: "DELETE"
    });


    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al agregar el producto");
    }

    return conexionConvertida;
}


export const conexionAPI={
    listarProductos, enviarProducto, eliminarProducto
}