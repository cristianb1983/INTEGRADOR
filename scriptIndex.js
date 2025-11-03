let imagenes = [
{ 
   src: './img/laPescaDelOro.webp',
   titulo: 'La pesca del oro',
   descripcion: `Cada verano, cuando se produce el deshielo, un grupo de "cazafortunas" busca oro en las
                profundidades de uno de los lugares más peligrosos del planeta: el Mar de Bering. La Pesca del Oro,
                acompaña a algunos intrépidos, y en ocasiones temerarios y excéntricos personajes en su imparable
                búsqueda de la fortuna en las aguas de este amenazador océano.`
},
{ 
   src: './img/pesadillaEnLaCocina.webp',
   titulo: 'Pesadilla en la cocina',
   descripcion: `Un reconocido cocinero, quien recorre la geografía española para ayudar a restaurantes
                al borde de la quiebra. El formato consiste en que Chicote visita locales en crisis,
                detecta los problemas que amenazan su viabilidad, como mala gestión, insalubridad, falta
                de profesionalismo o problemas familiares entre el personal, y trabaja durante unos días
                para transformarlos y sacarlos adelante económicamente. El proceso puede ser complicado,
                tenso y hasta doloroso, ya que el chef actúa con directitud y sinceridad para lograr
                cambios significativos.`
},
{
    src: './img/laFibreDelOro.webp',
    titulo: 'La fiebre del oro',
    descripcion: `CLa fiebre del oro es un reality show estadounidense que sigue a un grupo de mineros,
                liderados por Todd Hoffman, que se embarcan en una aventura en el sudeste de Alaska,
                específicamente en Porcupine Creek, para buscar oro con el objetivo de superar la crisis
                económica. La serie, que comenzó en 2010, muestra cómo estos hombres, con poca o ninguna
                experiencia en minería, enfrentan desafíos extremos como el clima severo, fallas mecánicas,
                conflictos internos y la presencia de osos. A lo largo de sus múltiples temporadas, el
                programa ha destacado figuras como Parker Schnabel, Tony Beets y Rick Ness, quienes han
                enfrentado decisiones críticas y estrategias innovadoras para sobrevivir y prosperar
                en la búsqueda del oro.`
},
{
    src: './img/laGranjaClarckson.webp',
    titulo: 'La granja Clarkson',
    descripcion: `Un año intenso, arduo y muy divertido en la vida del agricultor más insólito de Gran
                Bretaña, Jeremy Clarkson. Únete a Jeremy y a su grupo de socios agrícolas mientras se
                enfrentan a un tiempo de locos, animales desobedientes, cultivos que no crecen y una
                pandemia inesperada. Verás a Jeremy Clarkson como nunca antes lo habías visto.`
},
{
    src: './img/pescaPesada.webp',
    titulo: 'Pesca pesada',
    descripcion: `Pesca Pesada es un reality show que sigue a pescadores comerciales de atún rojo en
                Gloucester, Massachusetts, durante la temporada de pesca. La serie destaca la intensa
                competencia entre los capitanes, cuyos ingresos dependen directamente del tamaño y
                la cantidad de atún que capturen. Cada pez puede valer miles de dólares, lo que
                genera alta presión, riesgos financieros y tensiones personales. Entre los personajes
                principales están Dave Marciano del Hard Merchandise y Tyler McLaughlin del Pinwheel,
                cuyas estrategias y rivalidades marcan el ritmo del programa.`
},
{
    src: './img/elMundoEnMoto.webp',
    titulo: 'El mundo en moto',
    descripcion: `El mundo en moto es un documental que sigue a Ewan McGregor y Charley Boorman en un
                viaje épico en motocicleta desde Londres hasta Nueva York, pasando por Europa, Asia
                y América del Norte. A lo largo de 22 episodios, los actores y amigos recorren más
                de 20.000 millas a través de 18 países, enfrentando desafíos extremos como terrenos
                inhóspitos, condiciones climáticas severas, problemas mecánicos y barreras culturales.
                El viaje, que dura 100 días, combina aventura, humor y reflexiones personales sobre la
                vida, la amistad y la conexión humana.`
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


