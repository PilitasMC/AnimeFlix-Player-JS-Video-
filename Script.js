//NUEVA VERSION DE MI REPRODUCTOR MALOTE OH SI MI COMPA

let siguiente = document.getElementById("sig"); //Boton debajo del player
let anterior = document.getElementById("ant");  //Btn under player
let anime = document.getElementById("my-video"); //Anime o video
let title = document.getElementById("title"); //Titulo para el video o anime
let capNum = document.getElementById("capitulo"); //Numero del episodio

let titleName = ["","Por siempre","Lily","On my way","Besos en guerra","Aprender a quererte","Del estadio al cielo"]; ///Nombre de los videos (Van manual si lo se compa) cuando aprenda un poco mas, sera automatico

//INCREMENTAMOS ESTAS PARA LOS CAMBIOS DE VIDEOS & LO MISMO APLICA PARA EL NUMERO DEL CAPITULO
let next = 1;
titulo();

    //FUNCION PARA CAMBIAR DE VIDEOS
    siguiente.onclick = function(){
        mayor();
        anime.setAttribute("src",`videos/${next}.mp4`);
    }
    anterior.onclick = function(){
        menor();
        anime.setAttribute("src",`videos/${next}.mp4`);
    }
    //FUNCION PARA SIGUIENTE
    function mayor(){
        if(next == 6){     //Cambia aqui el numero de episodios que tiene el anime
                next = 6;
        }
        else{
            next++;
            titulo();
        }
    }
    //FUNCION PARA ANTERIOR
    function menor(){
        if(next == 1){
            next = 1;
        }
        else{
            next--;
            titulo();
        }
    }
//FUNCION DE TITULO
function titulo(){
    title.innerHTML = titleName[next];
}