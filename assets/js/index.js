const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "./assets/img/Diseño-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "./assets/img/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "./assets/img/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "./assets/img/furgoneta.webp",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "./assets/img/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "./assets/img/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const inputCuartos = document.querySelector("#inputCuartos");
const inputMin = document.querySelector("#inputMin");
const inputMax = document.querySelector("#inputMax");
const formulario=document.querySelector("#formulario");
const divPropiedades=document.querySelector(".propiedades");




function renderPropiedades(array) {
  if (array.length === 0) {
    divPropiedades.innerHTML = `<h5>No hay Propiedades que mostrar. Favor amplíe el filtro o haga otra búsqueda</h5>`;
    return;
  } else {
    divPropiedades.innerHTML = "";
    for (let propiedad of array) {
      divPropiedades.innerHTML += `
        <div class="propiedad">
                <div class="img" style="background-image: url(${propiedad.src})"></div>
                <section>
                    <h5>${propiedad.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${propiedad.rooms}</p>
                        <p>Metros: ${propiedad.m}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
        </div>`;
    }
  }
}

renderPropiedades(propiedadesJSON);

formulario.addEventListener("reset",()=>renderPropiedades(propiedadesJSON));
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let cantCuartos=+inputCuartos.value;
  let min=+inputMin.value;
  let max=+inputMax.value;
  const arrayFiltrado=[];
  divPropiedades.innerHTML = "";
  if (cantCuartos <= 0 || max <= 0 || min < 0) {
    alert("Debe ingresar valores mayores a 0");
    return;
    } else{
      console.log("entre al if");
    
      for (let propiedad of propiedadesJSON) {
        if (propiedad.rooms === cantCuartos && propiedad.m>=min && propiedad.m<=max) {
          arrayFiltrado.push(propiedad);
        }
      }
      }
    return renderPropiedades(arrayFiltrado);
});
