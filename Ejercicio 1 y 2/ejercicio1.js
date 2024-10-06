let categorias = document.getElementsByClassName('style_wrapper');

let NombreCategoriasFrutas = ["melon", "orange", "peach", "strawberry", "watermelon"];
let NombreCategoriasVerduras = ["Cebolla_Dulce", "Cebolla_morada", "Tomate_cherry", "Tomate_raf", "Tomate_rosa"];

let ContenidoFrutas = [
    { categoria: 'melon', rutas: [
        "images/frutas/melon/1.jpg", 
        "images/frutas/melon/2.jpg", 
        "images/frutas/melon/3.jpg", 
        "images/frutas/melon/4.jpg"
    ]},
    { categoria: 'orange', rutas: [
        "images/frutas/orange/1.jpg", 
        "images/frutas/orange/2.jpg",
        "images/frutas/orange/3.jpg",
        "images/frutas/orange/4.jpg"
    ]},
    { categoria: 'peach', rutas: [
        "images/frutas/peach/1.jpg", 
        "images/frutas/peach/2.jpg",
        "images/frutas/peach/3.jpg", 
        "images/frutas/peach/4.jpg"
    ]},
    { categoria: 'strawberry', rutas: [
        "images/frutas/strawberry/1.jpg", 
        "images/frutas/strawberry/2.jpg",
        "images/frutas/strawberry/3.jpg", 
        "images/frutas/strawberry/4.jpg"
    ]},
    { categoria: 'watermelon', rutas: [
        "images/frutas/watermelon/1.jpg", 
        "images/frutas/watermelon/2.jpg",
        "images/frutas/watermelon/3.jpg", 
        "images/frutas/watermelon/4.jpg"
    ]}
];

let ContenidoVerduras = [
    { categoria: 'Cebolla_Dulce', rutas: [
        "images/verduras/cebolla_dulce/1.jpg", 
        "images/verduras/cebolla_dulce/2.jpg",
        "images/verduras/cebolla_dulce/3.jpg", 
        "images/verduras/cebolla_dulce/4.jpg"
    ]},
    { categoria: 'Cebolla_morada', rutas: [
        "images/verduras/cebolla_morada/1.jpg", 
        "images/verduras/cebolla_morada/2.jpg",
        "images/verduras/cebolla_morada/3.jpg", 
        "images/verduras/cebolla_morada/4.jpg"
    ]},
    { categoria: 'Tomate_cherry', rutas: [
        "images/verduras/tomate_cherry/1.jpg", 
        "images/verduras/tomate_cherry/2.jpg",
        "images/verduras/tomate_cherry/3.jpg", 
        "images/verduras/tomate_cherry/4.jpg"
    ]},
    { categoria: 'Tomate_raf', rutas: [
        "images/verduras/tomate_raf/1.jpg", 
        "images/verduras/tomate_raf/2.jpg",
        "images/verduras/tomate_raf/3.jpg", 
        "images/verduras/tomate_raf/4.jpg"
    ]},
    { categoria: 'Tomate_rosa', rutas: [
        "images/verduras/tomate_rosa/1.jpg", 
        "images/verduras/tomate_rosa/2.jpg",
        "images/verduras/tomate_rosa/3.jpg", 
        "images/verduras/tomate_rosa/4.jpg"
    ]}
];

h1 = document.getElementsByTagName('h1')[0];
let h2 = document.getElementsByTagName('h2')[0];
let ImgPrincipal = document.getElementsByTagName('img')[0];

let PreviousButton = document.getElementsByTagName('button')[0];
let NextButton = document.getElementsByTagName('button')[1];

let currentCategoryIndex = 0; 
let currentImageIndex = 0; 

function clearEventListeners() {
    for (let i = 0; i < categorias.length; i++) {
        let clone = categorias[i].cloneNode(true);
        categorias[i].parentNode.replaceChild(clone, categorias[i]);
    }
}

// Cambiar a categoría frutas
function CategoriaFrutas() {
    clearEventListeners();
    currentCategoryIndex = 0; 
    currentImageIndex = 0; 

    for (let i = 0; i < categorias.length; i++) {
        let Categoria = categorias[i].getElementsByTagName('p')[0];
        Categoria.textContent = NombreCategoriasFrutas[i];

        categorias[i].addEventListener('mouseover', function () {
            currentCategoryIndex = i; 
            currentImageIndex = 0;
            ImgPrincipal.src = ContenidoFrutas[i].rutas[currentImageIndex]; 
            h2.textContent = ContenidoFrutas[i].categoria;
        });

    }

    h1.textContent = 'Frutas';
}

// Cambiar a categoría verduras
function CategoriaVerduras() {
    clearEventListeners();
    currentCategoryIndex = 5; 
    currentImageIndex = 0; 

    for (let i = 0; i < categorias.length; i++) {
        let Categoria = categorias[i].getElementsByTagName('p')[0];
        Categoria.textContent = NombreCategoriasVerduras[i];

        categorias[i].addEventListener('mouseover', function () {
            currentCategoryIndex = i + 5; 
            currentImageIndex = 0; 
            ImgPrincipal.src = ContenidoVerduras[i].rutas[currentImageIndex]; 
            h2.textContent = ContenidoVerduras[i].categoria;
        });

    }

    h1.textContent = 'Verduras';
}

function Previo() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        if (currentCategoryIndex < 5) { // Si estamos en la categoría de frutas
            currentImageIndex = ContenidoFrutas[currentCategoryIndex].rutas.length - 1; 
        } else { // Si estamos en la categoría de verduras
            currentImageIndex = ContenidoVerduras[currentCategoryIndex - 5].rutas.length - 1; 
        }
    }

    if (currentCategoryIndex < 5) { // Si estamos en la categoría de frutas
        ImgPrincipal.src = ContenidoFrutas[currentCategoryIndex].rutas[currentImageIndex]; 
    } else { // Si estamos en la categoría de verduras
        ImgPrincipal.src = ContenidoVerduras[currentCategoryIndex - 5].rutas[currentImageIndex]; 
    }
}

function Siguiente() {
    currentImageIndex++;
    
    if (currentCategoryIndex < 5) { // Si estamos en la categoría de frutas
        if (currentImageIndex >= ContenidoFrutas[currentCategoryIndex].rutas.length) {
            currentImageIndex = 0; 
        }
        ImgPrincipal.src = ContenidoFrutas[currentCategoryIndex].rutas[currentImageIndex]; 
    } else { // Si estamos en la categoría de verduras
        if (currentImageIndex >= ContenidoVerduras[currentCategoryIndex - 5].rutas.length) {
            currentImageIndex = 0; 
        }
        ImgPrincipal.src = ContenidoVerduras[currentCategoryIndex - 5].rutas[currentImageIndex]; 
    }
}

// Asignar eventos a los botones
PreviousButton.addEventListener('click', Previo);
NextButton.addEventListener('click', Siguiente);

// Iniciar con la categoría de frutas
CategoriaFrutas();