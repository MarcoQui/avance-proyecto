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
]

const contenedorProductos = document.querySelector("#productos");

function cargarProductos(){

    productos.forEach(function(producto){

        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <a href="" id="${producto.id}">COMPRAR</a>
            <h3>${producto.titulo}</h3>
            <h4>S/ ${producto.precio}</h4>
        `;

        contenedorProductos.append(div);
    })
}

cargarProductos();

//modelo de html para ingresar mis productos por javascript

/*<div class="producto">
    <img src="./imagenes/nuevo-1.jpg" alt="">
    <a href="">COMPRAR</a>
    <h3>Polera Doble Color</h3>
    <h4>S/ 60.00</h4>
</div>*/

