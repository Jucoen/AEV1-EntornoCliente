let categorias = document.getElementsByClassName('style_wrapper');

let NombreCategoriasFrutas = ["melon", "orange", "peach", "strawberry", "watermelon"];
let NombreCategoriasVerduras = ["Cebolla_Dulce", "Cebolla_morada", "Tomate_cherry", "Tomate_raf", "Tomate_rosa"];

let ContenidoFrutas = [
    {categoria: 'melon', rutas: "images/frutas/melon/1.jpg"},
    {categoria: 'orange', rutas: "images/frutas/orange/1.jpg"},
    {categoria: 'peach', rutas: "images/frutas/peach/1.jpg"},
    {categoria: 'strawberry', rutas: "images/frutas/strawberry/1.jpg"},
    {categoria: 'watermelon', rutas: "images/frutas/watermelon/1.jpg"}
];

let ContenidoVerduras = [
    {categoria: 'Cebolla_Dulce', rutas: "images/verduras/cebolla_dulce/1.jpg"},
    {categoria: 'Cebolla_morada', rutas: "images/verduras/cebolla_morada/1.jpg"},
    {categoria: 'Tomate_cherry', rutas: "images/verduras/tomate_cherry/1.jpg"},
    {categoria: 'Tomate_raf', rutas: "images/verduras/tomate_raf/1.jpg"},
    {categoria: 'Tomate_rosa', rutas: "images/verduras/tomate_rosa/1.jpg"}
];

h1 = document.getElementsByTagName('h1')[0];
let h2 = document.getElementsByTagName('h2')[0];
let PreviousButton = document.getElementsByTagName('button')[0];
let NextButton = document.getElementsByTagName('button')[1];

function clearEventListeners() {
    for (let i = 0; i < categorias.length; i++) {
        let clone = categorias[i].cloneNode(true);
        categorias[i].parentNode.replaceChild(clone, categorias[i]);
    }
}

// Funcion que llama el formulario para cambiar a categoria frutas
function CategoriaFrutas() {
    clearEventListeners(); 
    for (let i = 0; i < categorias.length; i++) {
        let Categoria = categorias[i].getElementsByTagName('p')[0]; 
        Categoria.textContent = NombreCategoriasFrutas[i];

        categorias[i].addEventListener('mouseover', function() {
            Categoria.style.backgroundImage = `url(${ContenidoFrutas[i].rutas})`;
            Categoria.style.backgroundSize = 'cover';
            h2.textContent = ContenidoFrutas[i].categoria;
        });

        categorias[i].addEventListener('mouseout', function() {
            Categoria.style.backgroundImage = ''; 
        });
    }

    h1.textContent = 'Frutas';
}

// Funcion que llama el formulario para cambiar a categoria verduras
function CategoriaVerduras() {
    clearEventListeners(); 
    for (let i = 0; i < categorias.length; i++) {
        let Categoria = categorias[i].getElementsByTagName('p')[0]; 
        Categoria.textContent = NombreCategoriasVerduras[i];
    
        categorias[i].addEventListener('mouseover', function() {
            Categoria.style.backgroundImage = `url(${ContenidoVerduras[i].rutas})`;
            Categoria.style.backgroundSize = 'cover';
            h2.textContent = ContenidoVerduras[i].categoria;
        });
    
        categorias[i].addEventListener('mouseout', function() {
            Categoria.style.backgroundImage = ''; 
        });
    }

    h1.textContent = 'Verduras';
}

// Para que arranque con categoria frutas
CategoriaFrutas();