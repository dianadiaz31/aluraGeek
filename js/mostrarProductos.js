import { conexionAPI } from "./conexionAPI.js";



const productosContainer = document.querySelector("[data-productos]");
const contenedorMensajeError=document.querySelector("[data-contenedor]")

function crearCard(nombre, precio, img, id){
    console.log(id);
    const producto = document.createElement("div");
    producto.className="cardProduct";
    producto.innerHTML=`
     <figure class="card__figure">
    <img src="${img}" alt="foto" class="card__img">
  </figure>
  <h5 class="card__title">${nombre}</h5>
  <div class="card__priceAndBuyFlex">
    <p class="card__price">$${precio}</p>
    <img src="./img/trash.svg" alt="carrito" class="card__buy">
  </div>`;

  const btnSelected=producto.querySelector(".card__buy");

  btnSelected.addEventListener("click", async()=>{
    // const id=btnSelected.id;
    // console.log("se ha hecho click", id)
    // console.log(id);
    window.location.reload();

    await conexionAPI.eliminarProducto(id);

  })
  // console.log(btnSelected);

  return producto;
}

async function listarProductos(){

    try{
      const listaAPI= await conexionAPI.listarProductos();

      listaAPI.forEach(({nombre, precio, img, id}) => productosContainer.appendChild(crearCard(nombre, precio, img, id)));
    }catch{
      contenedorMensajeError.innerHTML=` <h1 class="productCard__error">Ha ocurrido un problema con la conexión</h3>

      `
    }

}



// const eliminarProductoDePantalla=(id)=>{
//   console.log("Elimina a : ", id);
// }


listarProductos();