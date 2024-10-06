let h1 = document.getElementsByTagName('h1')[0];

let ContenidoCategorias = [
    { categoria: 'Alcohol', rutas: [
        "src/alcohol/1.jpg", 
        "src/alcohol/2.jpg", 
        "src/alcohol/3.jpg", 
        "src/alcohol/4.jpg", 
        "src/alcohol/5.jpg"
    ]},
    { categoria: 'Cafe', rutas: [
        "src/cafe/1.jpg", 
        "src/cafe/2.jpg", 
        "src/cafe/3.jpg", 
        "src/cafe/4.jpg", 
        "src/cafe/5.jpg"
    ]},
    { categoria: 'Entrantes', rutas: [
        "src/entrantes/1.jpg", 
        "src/entrantes/2.jpg", 
        "src/entrantes/3.jpg", 
        "src/entrantes/4.jpg", 
        "src/entrantes/5.jpg"
    ]},
    { categoria: 'Fruta', rutas: [
        "src/fruta/1.jpg", 
        "src/fruta/2.jpg", 
        "src/fruta/3.jpg", 
        "src/fruta/4.jpg", 
        "src/fruta/5.jpg"
    ]},
    { categoria: 'Infusiones', rutas: [
        "src/infusiones/1.jpg", 
        "src/infusiones/2.jpg", 
        "src/infusiones/3.jpg", 
        "src/infusiones/4.jpg", 
        "src/infusiones/5.jpg"
    ]},
    { categoria: 'Tartas', rutas: [
        "src/tartas/1.jpg", 
        "src/tartas/2.jpg", 
        "src/tartas/3.jpg", 
        "src/tartas/4.jpg", 
        "src/tartas/5.jpg"
    ]}
];

let imagenCentral = document.getElementsByTagName('img')[0];
let currentCategoryIndex = 0;

function mostrarImagen() {
    imagenCentral.src = ContenidoCategorias[currentCategoryIndex].rutas[0];
    imagenCentral.style.width = '500px';
    imagenCentral.style.height = '400px';
    h1.textContent = ContenidoCategorias[currentCategoryIndex].categoria;
}

mostrarImagen();

// Botones
let BotonAnteriorArriba = document.getElementsByClassName('nutrition')[0];
let BotonSiguienteArriba = document.getElementsByClassName('nutrition')[1];
let BotonAnteriorAbajo = document.getElementsByClassName('nutrition')[2];
let BotonSiguienteAbajo = document.getElementsByClassName('nutrition')[3];

function Anterior(){
    if (currentCategoryIndex > 0) {
        currentCategoryIndex = currentCategoryIndex - 1;
    } else {
        currentCategoryIndex = ContenidoCategorias.length - 1;
    }
    mostrarImagen();
}

function Siguiente(){
    if (currentCategoryIndex < ContenidoCategorias.length - 1) {
        currentCategoryIndex = currentCategoryIndex + 1;
    } else {
        currentCategoryIndex = 0;
    }
    mostrarImagen();
}

BotonAnteriorArriba.addEventListener('click', Anterior);
BotonAnteriorAbajo.addEventListener('click', Anterior);
BotonSiguienteArriba.addEventListener('click', Siguiente);
BotonSiguienteAbajo.addEventListener('click', Siguiente);

// Paso 2 -> 5 fotos del menu al que le diste siguiente.
let TD = document.getElementsByTagName('td')[2];

imagenCentral.addEventListener('click', function(){
    imagenCentral.style.display = 'none'; 

    for (let i = 0; i < 5; i++) {
        let img = document.createElement('img');
        img.src = ContenidoCategorias[currentCategoryIndex].rutas[i];
        img.style.width = '100px'; 
        img.style.margin = '5px';
        img.classList.add('imagen-pequena');  // Usar la clase 'imagen-pequena'

        img.addEventListener('click', function() {
            imagenCentral.src = img.src;  
            imagenCentral.style.display = 'block'; 
            imagenCentral.style.width = '500px'; 
            imagenCentral.style.height = '400px'; 
        });

        TD.appendChild(img); 
    }
    
});

h1.addEventListener('click', function() {
    imagenCentral.style.display = 'block';
    mostrarImagen();

    // Seleccionar y eliminar las imágenes pequeñas con la clase 'imagen-pequena'
    let MiniImagenes  = document.querySelectorAll('.imagen-pequena');
    MiniImagenes.forEach(function(img) {
        img.remove();
    });
});