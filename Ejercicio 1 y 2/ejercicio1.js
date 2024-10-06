let categorias = document.getElementsByClassName('style_wrapper');
let NombreCategoriasFrutas = ["melon", "orange", "peach", "strawberry", "watermelon"];
let ContenidoFrutas = [
    {categoria: 'melon', rutas: "images/frutas/melon/1.jpg"},
    {categoria: 'orange', rutas: "images/frutas/orange/1.jpg"},
    {categoria: 'peach', rutas: "images/frutas/peach/1.jpg"},
    {categoria: 'strawberry', rutas: "images/frutas/strawberry/1.jpg"},
    {categoria: 'watermelon', rutas: "images/frutas/watermelon/1.jpg"}
];


let NombreCategoriasVerduras = ["Cebolla_Dulce", "Cebolla_morada", "Tomate_cherry", "Tomate_raf", "Tomate_rosa"];
let ContenidoVerduras = [
    {categoria: 'Cebolla_Dulce', rutas: "images/verduras/cebolla_dulce/1.jpg"},
    {categoria: 'Cebolla_morada', rutas: "images/verduras/cebolla_morada/1.jpg"},
    {categoria: 'Tomate_cherry', rutas: "images/verduras/tomate_cherry/1.jpg"},
    {categoria: 'Tomate_raf', rutas: "images/verduras/tomate_raf/1.jpg"},
    {categoria: 'Tomate_rosa', rutas: "images/verduras/tomate_rosa/1.jpg"}
];


h1 = document.getElementsByTagName('h1');

function CategoriaFrutas(){
for (let i = 0; i < categorias.length; i++) {
    let Categoria = categorias[i].querySelector('p'); 
    Categoria.textContent = NombreCategoriasFrutas[i];

    categorias[i].addEventListener('mouseover', function() {
        Categoria.style.backgroundImage = `url(${ContenidoFrutas[i].rutas})`;
        Categoria.style.backgroundSize = 'cover';
    });

    categorias[i].addEventListener('mouseout', function() {
        Categoria.style.backgroundImage = ''; 
    });
}

h1.textContent= 'Frutas';
}


function CategoriaVerduras(){
    for (let i = 0; i < categorias.length; i++) {
        let Categoria = categorias[i].querySelector('p'); 
        Categoria.textContent = NombreCategoriasVerduras[i];
    
        categorias[i].addEventListener('mouseover', function() {
            Categoria.style.backgroundImage = `url(${ContenidoVerduras[i].rutas})`;
            Categoria.style.backgroundSize = 'cover';
        });
    
        categorias[i].addEventListener('mouseout', function() {
            Categoria.style.backgroundImage = ''; 
        });
    }

    h1.textContent= 'Verduras';
    } 


    CategoriaFrutas()