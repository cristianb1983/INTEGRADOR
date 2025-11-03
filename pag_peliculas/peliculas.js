let imagenes = [
{ 
   src: '../img/alien.webp',
   titulo: 'Alien planeta tierra',
   descripcion: `Cuando una misteriosa nave se estrella contra la Tierra, una joven y
                un variopinto grupo de soldados tácticos hacen un fatídico hallazgo que
                los pone cara a cara con la mayor amenaza del planeta. El equipo de
                rescate busca supervivientes entre los restos de la colisión y se
                topa con una forma de vida depredadora que levanta más misterios y
                miedos de los que cabría imaginarse. Debido a esta nueva amenaza,
                el equipo deberá luchar por sobrevivir. Lo que decidan hacer con
                este descubrimiento podría cambiar el planeta Tierra tal y como lo conocen.`
},
{ 
   src: '../img/Kimetsu.webp',
   titulo: 'Demon Slayer Castillo infinito',
   descripcion: `Mientras los miembros del Cuerpo y los Pilares participaban en el Entrenamiento
                de los Hashira para prepararse para la batalla final, Muzan Kibutsuji aparece en
                la Mansión Ubuyashiki, poniendo en peligro al líder del Cuerpo.
                Al intentar protegerlo, Tanjiro y los Pilares son arrastrados por Muzan a un
                espacio misterioso: el Castillo Infinito, el bastión de los demonios, donde se
                establece el campo de batalla definitivo entre humanos y demonios. En este
                laberinto distorsionado, los cazadores deben enfrentarse a los demonios más
                poderosos, incluyendo a Akaza y Douma, en una lucha desesperada por la
                supervivencia y el destino de la humanidad.`
},
{
    src: '../img/4fantasticos.webp',
    titulo: 'Los 4 fantasticos primeros pasos',
    descripcion: `Con un mundo retrofuturista inspirado en los años 60 como telón de fondo, la
                Primera Familia de Marvel deberá hacer frente a su mayor desafío hasta la
                fecha. Obligados a buscar el equilibrio entre su papel de héroes y sus
                fuertes vínculos familiares, tendrán que defender la Tierra de un hambriento
                dios espacial llamado Galactus y su intrigante heraldo, Estela Plateada.`
},
{
    src: '../img/ballerina.webp',
    titulo: 'Ballerina',
    descripcion: `Eve Macarro es una asesina entrenada por la Ruska Roma desde su infancia, la misma
                organización criminal encargada del adiestramiento de John Wick. En esta violenta
                historia de venganza, Eve intentará por todos los medios averiguar quién está
                detrás del asesinato de su padre. En su lucha por conocer la verdad, tendrá que
                atenerse a las normas de la Alta Mesa y, por supuesto, a las del Hotel Continental,
                donde descubrirá que existen secretos ocultos sobre su pasado.`
},
{
    src: '../img/guerrerasKPop.webp',
    titulo: 'Las guerreras kpop',
    descripcion: `Cuando no están llenando estadios, las superestrellas del K-pop Rumi, Mira
                y Zoey usan sus poderes secretos para proteger a sus fans de una amenaza
                sobrenatural.`
},
{
    src: '../img/blackPhone.webp',
    titulo: 'El telefono negro',
    descripcion: `Cuatro años después de su secuestro, Finney, ahora con 17 años, lucha por
                adaptarse a la vida tras su cautiverio, mientras su hermana Gwen, de 15 años,
                no quiere rendirse. Gwen comienza a recibir llamadas en sus sueños a través
                del teléfono negro y a tener visiones perturbadoras de tres chicos perseguidos
                en un campamento de invierno llamado Alpine Lake.`
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


