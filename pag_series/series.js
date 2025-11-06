let imagenes = [
{ 
  src: '../img/juegoDeTronos.webp',
    titulo: 'Juego de tronos',
    descripcion: `En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una
                vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras
                del este, pasando por el helado norte y el milenario muro que protege el reino de las
                fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por 
                gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas 
                sobrenaturales sacuden los pilares de los reinos, la sangrienta batalla por 
                el trono de Hierro tendrá consecuencias imprevistas y trascendentales.
                El invierno se acerca. Que empiece 'Juego de tronos'.`   
},
{ 
    src: '../img/juegosDelCalamar.webp',
    titulo: 'Los juegos del calamar',
    descripcion: `Cientos de personas con problemas de dinero aceptan una invitación 
                rarísima para competir en juegos infantiles. Dentro los esperan un 
                tentador premio y desafíos letales.`
},
{
    src: '../img/Peaky_blinders.webp',
    titulo: 'Peaky blinders',
    descripcion: `Una familia de pandilleros asentada en Birmingham, Reino Unido, 
                    tras la Primera Guerra Mundial (1914-1918), dirige un local de 
                    apuestas hípicas. Las actividades del ambicioso jefe de la banda 
                    llaman la atención del Inspector jefe Chester Campbell, un detective 
                    de la Real Policía Irlandesa que es enviado desde Belfast para 
                    limpiar la ciudad y acabar con la banda.`
},
{
    src: '../img/stranger_things.webp',
    titulo: 'Strange things',
    descripcion: `A raíz de la desaparición de un niño, un pueblo desvela un misterio 
    relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.`
},
{
    src: '../img/the_witcher.webp',
    titulo: 'The witcher Temp. 4',
    descripcion: `Tras los sucesos de la tercera temporada que transformaron el continente, Geralt, 
    Yennefer y Ciri se encuentran separados por una guerra devastadora e innumerables enemigos. 
    A medida que sus caminos se bifurcan y sus objetivos se definen con mayor claridad, se topan con
    aliados inesperados deseosos de unirse a su viaje. Y si logran aceptar a estas familias adoptivas,
    tal vez tengan la oportunidad de reunirse para siempre...`
},
{
    src: '../img/tulsa_king.webp',
    titulo: 'Tulsa king',
    descripcion: `Justo después de ser liberado de prisión después de 25 años, el capo
                    de la mafia de Nueva York, Dwight "El General" Manfredi, es exiliado
                    sin contemplaciones por su jefe para instalarse en Tulsa, Oklahoma. 
                    Al darse cuenta de que su familia de la mafia puede no tener sus mejores 
                    intereses en mente, Dwight construye lentamente una "tripulación" a partir 
                    de un grupo de personajes inverosímiles, para ayudarlo a establecer un 
                    nuevo imperio criminal en un lugar que para él bien podría ser otro planeta.`
}]

//Comienza en 1 porque si comezara en 0 el primer click no funcionaria
let posicion = 1;
//Traemos los posters con document y asignamos el arreglo a posters
const posters = document.getElementsByClassName('poster');

function siguiente(){
    for(let i = 0; i < 3; i++){
        //Asigna
        let img = posters[i].querySelector('img')
        let titulo = posters[i].querySelector('h3')
        let descripcion = posters[i].querySelector('p')

        let index = posicion + i;
        if(index >= imagenes.length){
            index = index - imagenes.length
        }

        img.src = imagenes[index].src
        titulo.textContent = imagenes[index].titulo
        descripcion.textContent = imagenes[index].descripcion
    } 
    posicion++;
    if(posicion >= imagenes.length){
        posicion = posicion - imagenes.length
    }
}

let posicionAnterior = 5
function anterior(){
        for(let i = 0; i < 3; i++){
        //Asigna
        let img = posters[i].querySelector('img')
        let titulo = posters[i].querySelector('h3')
        let descripcion = posters[i].querySelector('p')

        let index = posicionAnterior + i;
        if(index >= imagenes.length){
            index = index - imagenes.length
        }

        img.src = imagenes[index].src
        titulo.textContent = imagenes[index].titulo
        descripcion.textContent = imagenes[index].descripcion
    } 
    posicionAnterior--;
    if(posicionAnterior == 0){
        posicionAnterior = posicionAnterior + imagenes.length
    }
    console.log(posicionAnterior)
}
