let imagenes = [
{ 
  src: '../img/Elio.webp',
    titulo: 'Elio',
    descripcion: `Cuenta la historia de Elio, un niño de 11 años, 
                    que lucha por encajar hasta que de repente es 
                    transportado por extraterrestres y es elegido 
                    para ser el embajador galáctico de la Tierra.`   
},
{ 
    src: '../img/Tipos_malos2.webp',
    titulo: 'Tipos malos 2',
    descripcion: `Un genial equipo de animales que no respetan la ley, 
                    los ahora muy reformados Tipos Malos, se esfuerzan (mucho, muchísimo) 
                    en ser buenos, pero se ven envueltos involuntariamente en un golpe 
                    de envergadura mundial planeado por un inesperado grupo de criminales: 
                    las Tipas Malas..`
},
{
    src: '../img/mufasa.webp',
    titulo: 'Mufasa: el rey leon',
    descripcion: `Rafiki debe transmitir la leyenda de Mufasa a la joven cachorro 
                    de león Kiara, hija de Simba y Nala, y con Timón y Pumba prestando 
                    su estilo característico. Mufasa, un cachorro huérfano, perdido y 
                    solo, conoce a un simpático león llamado Taka, heredero de un linaje 
                    real. Este encuentro casual pone en marcha un viaje de un 
                    extraordinario grupo de inadaptados que buscan su destino.`
},
{
    src: '../img/animalesAlRescate.webp',
    titulo: 'Animales al rescate',
    descripcion: `En un tren que está a punto de salir de la estación, suena la alarma 
                    que obliga a todos los pasajeros a bajarse. Pero entonces el tren 
                    arranca de manera improvista, llevándose a bordo los viajeros que no han 
                    tenido tiempo de bajar: los animales de compañía. Asombrados, estos 
                    descubren que el tren está bajo el control de Hans, un tejón manipulador 
                    y rencoroso, que se quiere vengar de Rex, el perro policía que le puso 
                    entre rejas hace años. Como los servicios de rescate no consiguen 
                    intervenir en el trayecto montañoso del tren, que circula a toda velocidad, 
                    los animales de compañía solo pueden contar con Falcon, un mapache 
                    un poco tramposo que hará todo lo posible para salvarles.`
},
{
    src: '../img/ne_zah_2.jpg',
    titulo: 'Ne Zah 2',
    descripcion: `Cuando los cuerpos de los dos amigos, Aobing y Nezha, están a punto 
                    de ser destruidos, se les permite que sus almas sigan existiendo. 
                    Su maestro, Taiyi Zhenren, restaura sus cuerpos con la ayuda de una flor de loto. 
                    Después de esto, Nezha parte en busca de enfrentar al Rey Dragón del Mar del Este, 
                    Ao Guang.`
},
{
    src: '../img/coco.webp',
    titulo: 'Coco',
    descripcion: `Un joven aspirante a músico llamado Miguel se embarca en un viaje 
                    extraordinario a la mágica tierra de sus ancestros. Allí, el encantador 
                    embaucador Héctor se convierte en su inesperado amigo y le ayuda a 
                    descubrir los misterios detrás de las historias y tradiciones de su familia.`
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