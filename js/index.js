/* 1 DOCUMENT OBJET MODEL - DOM */

/* ------------------------------------------------------------------------ */
const body = document.body
console.log(body); // con esto seleccionamos el body de la pagina html

const head = document.head
console.log(head);

const domain = document.domain
console.log(domain);

const uri = document.baseURI
console.log(uri);

const formularios = document.forms
console.log(formularios)

const formulariosHijos = document.forms[0]
console.log(formulariosHijos);

const label = document.forms[0].children[0]
console.log(label);

const input = document.forms[0].children[1]
console.log(input);

const botoncito = document.forms[0].children[2]
console.log(botoncito)
const placeHolder = document.forms[0].children[1].placeholder
console.log(placeHolder);

const enlaces = document.links
console.log(enlaces);

const enlace = document.links[3]
console.log(enlace);

/* 1.1 seleccionar elementos por su clase - getElementsByClassName*/
const navFondo = document.getElementsByClassName('nav-bg')
console.log(navFondo);

const navegacion = document.getElementsByClassName('main-menu')
console.log(navegacion);

const contenedor_servicios = document.getElementsByClassName('services-contain')
console.log(contenedor_servicios);
/* 1.2 seleccionar elementos por su id - getElementById */
const services = document.getElementById('services')
console.log(services)
/* 1.2.1 seleccionar elementos por nombre etiqueta html - getElementsByTagName */
const imagenes = document.getElementsByTagName('img')
console.log(imagenes);
/* 1.3 Seleccionar elementos con querySelector -
Solo el primero - clases, id, tag*/

/* class */
const contenedor_serviciosfirst = document.querySelector('.services-contain')
console.log(contenedor_serviciosfirst);

const serviciosQ = document.querySelector('.services')
console.log(serviciosQ)

const contenido_giro = document.querySelector('.hero-contain')
console.log(contenido_giro)
/* id */
const serviciosId = document.querySelector('#services')
console.log(serviciosId)
/* tag */
const footer = document.querySelector('footer')
console.log(footer);

/* 1.4 Seleccionar todos los elementos con querySelectorAll -
todos - clases,id,tag*/
const contenedor_servicios_all = document.querySelectorAll('.services-contain')
console.log(contenedor_servicios_all)

const enlaces_all = document.querySelectorAll('a')
console.log(enlaces_all)

const enlaces_menu = document.querySelector('a')
console.log(enlaces_menu)

/* 1.5 Seleccionar y modificar el texto - textContent */
//.innerHTML;
//.innerText;
const subtitulo = document.querySelector('.hero-contain h2')
subtitulo.textContent = "Me fullfill your most amazing dreams with architecture"

subtitulo.innerHTML = `
<h2> and we live your dreams...yeahhhhhhhh </h2>
<p>so you must be quiet </p>
`
/* 1.6 Seleccionar y modificar imagenes imagen.src*/
const imgRemodelations = document.querySelector('.imgRemodelations')
imgRemodelations.src = "../img/constructora.jpg"
/* 1.7 Traversing de Padre a Hijo - children[] recorre hacia el hijo*/
const menuTraversing = document.querySelector('.main-menu')
menuTraversing.children[3].textContent = "private Menu"
menuTraversing.children[0].textContent = "private Home"

/* 1.8 Traversing de Hijo a Padre - parentElement - recorre
hacia el padre*/
console.log(imgRemodelations.parentElement.parentElement.parentElement)
console.log(imgRemodelations.parentElement.parentElement.parentElement.children[0].textContent = "PRODUCTOS")

const cambio = document.querySelector('.nav-bg')
cambio.children[0].children[2].textContent = "jejexd"
/* 1.9 Traversing - hermanos nextElementSibling previousElementSibling*/
let nosotros = document.querySelector('.nosotros')

nosotros.nextElementSibling.textContent="Despues de nosotros"
nosotros.previousElementSibling.textContent="Antes de nosotros"
nosotros.nextElementSibling.nextElementSibling.textContent="Holi"

/* 1.10. traversing primero - ultimo firstElementChild lastElementChild */
const contenedor = document.querySelector('.container')
contenedor.firstElementChild.textContent="First element"
contenedor.lastElementChild.textContent="Last element"


/* 1.11 eliminar elementos del dom - desde si mismo - remove()*/

// nosotros.remove();

/* 1.12 eliminar elementos del dom - desde referencia del padre */

// contenedor.removeChild(contenedor.children[0])

/* 2 Generar html con javascript DOM Scripting*/

/* 2.1 crear elemento html createElement('elemento')*/
const enlacePrivado = document.createElement('a')
/* 2.2 añadir texto al elemento  - textContent*/
enlacePrivado.textContent="Private link"
/* 2.3 añadir atributo href al elemento */
enlacePrivado.href="private.html"
/* 2.4 añadir target al elemento */
enlacePrivado.target="_blank"
/* 2.5 seleccionar el padre (ej. la navegacion) */
// const menu =document.querySelector('.container')
/* 2.6 añadir elemento al final  - appendChild()*/
contenedor.appendChild(enlacePrivado)
/* 2.7 añadir elemento en cualquier lugar  -
insertBefore(elemento,nodo de referencia)*/
contenedor.insertBefore(enlacePrivado,contenedor.children[1])


/*3 DOM Scripting- creation of cards*/
const card = document.createElement('section')//Creando una nueva etiqueta section
const tituloBuild =document.createElement('h3')//Creando una nueva etiqueta titulo
tituloBuild.textContent='Building Houses'//Agregando contenido a etiqueta titulo
const img=document.createElement('img')//Creando una etiqueta imagen
img.src="../img/house1.jpg"//Agregando la imagen
const texto = document.createElement('p')//Creando una etiqueta texto
texto.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit"//Agregando contenido al texto
card.classList.add('services-contain')//Agregando las clases a la etqueteta seccion llamada card
card.appendChild(tituloBuild)//Agregando el titulo a la seccion card
card.appendChild(img)//Agregando imagen a la seccion card
card.appendChild(texto)//Agregando el texto a la seccion card

const papa = document.querySelector('.services')//identificando el nodo padre donde vamos a agregar la seccion
papa.appendChild(card) //Agregando la seccion al nodo padre




//Creando otros servicios

const card1 = document.createElement('section')
const titulo2 = document.createElement('h3')
titulo2.textContent='Casas feas'
const img2 = document.createElement('img')
img2.src = "../img/casa-fea.jpg"
const texto2 = document.createElement('p')
texto2.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit'
card1.classList.add('services-contain')
card1.appendChild(titulo2)
card1.appendChild(img2)
card1.appendChild(texto2)
papa.appendChild(card1)


const card2 = document.createElement('section')
const titulo3 = document.createElement('h3')
titulo3.textContent='Casas Bonitas'
const img3 = document.createElement('img')
img3.src = "../img/casa-bonita.jpeg"
const texto3 = document.createElement('p')
texto3.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit'
card2.classList.add('services-contain')
card2.appendChild(titulo3)
card2.appendChild(img3)
card2.appendChild(texto3)
papa.appendChild(card2)