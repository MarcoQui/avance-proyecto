const productos = [
    {
        id: "new-1",
        titulo: "Polera Doble Color",
        imagen: "./imagenes/nuevo-1.jpg",
        categoria: {
            nombre: "Polera",
            id: "polera"
        },
        precio: 60.00,
    },

    {
        id: "new-2",
        titulo: "Polera Contigo Perú",
        imagen: "./imagenes/nuevo-2.jpg",
        categoria: {
            nombre: "Polera",
            id: "polera"
        },
        precio: 50.00,
    },
    {
        id: "new-3",
        titulo: "Polo Feliz Navidad",
        imagen: "./imagenes/nuevo-3.jpg",
        categoria: {
            nombre: "Polo",
            id: "polo"
        },
        precio: 40.00,
    },
    {
        id: "new-4",
        titulo: "Polo Astronauta",
        imagen: "./imagenes/nuevo-4.jpg",
        categoria: {
            nombre: "Polo",
            id: "polo"
        },
        precio: 40.00,
    },
    {
        id: "new-5",
        titulo: "Polera Mickey Mouse",
        imagen: "./imagenes/nuevo-5.webp",
        categoria: {
            nombre: "Polera",
            id: "polera"
        },
        precio: 50.00,
    },
    {
        id: "new-6",
        titulo: "Polera para pareja",
        imagen: "./imagenes/nuevo-6.jpg",
        categoria: {
            nombre: "Polera",
            id: "polera"
        },
        precio: 120.00,
    },
    {
        id: "new-7",
        titulo: "Gorra Personalizada",
        imagen: "./imagenes/nuevo-7.jpg",
        categoria: {
            nombre: "Gorra",
            id: "gorra"
        },
        precio: 20.00,
    },
    {
        id: "new-8",
        titulo: "Gorras para parejas",
        imagen: "./imagenes/nuevo-8.jpg",
        categoria: {
            nombre: "Gorra",
            id: "gorra"
        },
        precio: 30.00,
    },
    {
        id: "new-9",
        titulo: "Gorras de Dragon Ball",
        imagen: "./imagenes/nuevo-9.jpg",
        categoria: {
            nombre: "Gorra",
            id: "gorra"
        },
        precio: 10.00,
    },
];

const contenedorProductos = document.querySelector("#contenedor-producto");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal= document.querySelector("#titulo-principal");

//agregar productos desde javascript

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML="";

    productosElegidos.forEach(function(producto){

        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalle">
                <h3 producto-titulo>${producto.titulo}</h3>
                <p class="producto-precio">S/ ${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">AGREGAR</button>
            </div>
        `;

        contenedorProductos.append(div);
    })
}

cargarProductos(productos);




/*  <div class="producto">
        <img class="producto-imagen" src="./imagenes/nuevo-1.jpg" alt="">
        <div class="producto-detalle">
            <h3 producto-titulo>ABRIGO 01</h3>
            <p class="producto-precio">$1000</p>
            <button class="producto-agregar">AGREGAR</button>
        </div>
    </div>*/

 //cambiar pestañas y nombres de categorias

    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e)=>{
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");

            if(e.currentTarget.id != "todos"){
                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText =  productoCategoria.categoria.nombre;

                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
                cargarProductos(productosBoton);
            } else{
                tituloPrincipal.innerText = "Todos los Productos"
                cargarProductos(productos);
            }
            
        })  
    })