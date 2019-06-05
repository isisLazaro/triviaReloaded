//alert("HOLA");
let puntuacion, textAns;
let qN = 1, puntuacionTotal = 0, resultados=[], tFilms = 0, tBooks =0;

let nombre  = document.getElementById("textName"); //caja de texto
let botonOk = document.getElementById("buttonOk"); //boton Ok
let div0 = document.getElementById("div0");
let div1 = document.getElementById("div1");
let p2 = document.createElement("P");
botonOk.addEventListener("click", welcomeName);


function welcomeName(){
  /*función que muestra mensaje de Hola [tu nombre] y
    llama la función (buttonsTrivia) para mostrar los dos botones para comenzar a jugar.*/

  //console.log(nombre);
  //alert("Bienvenido "+ nombre.value);
  //document.write("Bienvenido "+ nombre.value);

  div0.innerHTML = "Bienvenid@ " + nombre.value +
  "<p>Sobre que tema deseas probar tus conocimientos:</p>";
  buttonsTrivia();
}


function buttonsTrivia(){
  /*función para mostrar los dos botones para comenzar a jugar.
    trivia libros y trivia películas*/
  let buttonBooks = document.createElement("BUTTON");
  buttonBooks.innerText = "Libros";
  buttonBooks.id="botonlibros";
    div0.appendChild(buttonBooks);
  buttonBooks.addEventListener("click", triviaLibros);

  let buttonFilms = document.createElement("BUTTON");
  buttonFilms.innerText = "Películas";
  buttonFilms.id="botonpelis";
  div0.appendChild(buttonFilms);
  buttonFilms.addEventListener("click", triviaPeliculas);
}


function triviaLibros(){
  /*Funcion para trivia Libros*/
  //alert("TRIVIA LIBROS");
  tBooks = 1; // indica que estamos en trivia libros
  tFilms = 0;
  if (qN == 1){ //pregunta #1
    /*let p1 = document.createElement("P")
    p1.innerText = " *****     TRIVIA LIBROS     ***** ";
    div0.appendChild(p1);*/
    div0.innerHTML = " *****     TRIVIA LIBROS     ***** ";

    let p = document.createElement("P")
    p.innerText = "1. La Maga es un personaje de: \n\n"+
      "a) Rayuela \n"+
      "b) Mañana Digo Basta \n"+
      "c) Misteriosa Buenos Aires";
    div0.appendChild(p);

    ansNext("Siguiente");
  }
  else if(qN == 2){ //pregunta #2
    let p = document.createElement("P");
    p.innerText = "2. Atos, Portos y Armis son compañeros inseparables en: \n\n"+
      "a) El Conde de Montecristo \n"+
      "b) El Señor de los Anillos \n"+
      "c) Los Tres Mosqueteros";
    div0.appendChild(p);

    ansNext("Siguiente");
  }
  else if(qN == 3){ //pregunta #3
    let p = document.createElement("P");
    p.innerText = "3. ¿En qué novela vive sus aventuras el Capitán Ahab?\n\n"+
      "a) Veintemil Leguas de Viaje Submarino \n"+
      "b) Moby Dick \n"+
      "c) La Isla del Tesoro";
    div0.appendChild(p);

    ansNext("Terminar");
  }
  else if(qN == 4){ //muestra pantalla de resultados
    let p = document.createElement("P")
    p.innerText = "Obtuviste " + puntuacionTotal + "/3"; //puntuacion total
    div0.appendChild(p);

    dispResultados(); //respuestas correctas e incorrectas
    //inicializar variables:
    qN = 1;
    puntuacionTotal = 0;
    resultados = [];

    // muestra los dos botones para volver a jugar:
    p = document.createElement("P");
    p.innerText = "¿Deseas volver a jugar?";
    div0.appendChild(p);
    buttonsTrivia();
    //buttonsTrivia(div0);
  }
}


function triviaPeliculas(){
  /*Funcion para trivia Libros*/
  tBooks = 0;
  tFilms = 1;
  if (qN == 1){
    /*let p1 = document.createElement("P")
    p1.innerText = " *****     TRIVIA LIBROS     ***** ";
    div0.appendChild(p1);*/
    div0.innerHTML = " *****     TRIVIA PELÍCULAS     ***** ";

    let p = document.createElement("P")
    p.innerText = "1. ¿Cómo lograron que los dinosaurios de Jurassic Park volvieran a la vida?: \n\n"+
      "a) Mediante ADN en el interior de un mosquito \n"+
      "b) Por un huevo encontrado \n"+
      "c) Residuos petrificados";
    div0.appendChild(p);

    ansNext("Siguiente");
  }
  else if(qN == 2){
    let p = document.createElement("P");
    p.innerText = "2. ¿Cuál es el componente principal que necesitaban en Volver al Futuro para viajar en el tiempo? \n\n"+
      "a) Baterías ácidas \n"+
      "b) Condensador de bujías \n"+
      "c) Condensador de fluidos";
    div0.appendChild(p);

    ansNext("Siguiente");
  }
  else if(qN == 3){
    let p = document.createElement("P");
    p.innerText = "3. ¿A qué película pertene esta frase: No se ve bien más que con el corazón, lo escencial es invisible a los ojos?\n\n"+
      "a) Forrest Gump \n"+
      "b) El Pianista \n"+
      "c) La Vida es Bella";
    div0.appendChild(p);

    ansNext("Terminar");
  }
  else if(qN == 4){
    let p = document.createElement("P")
    p.innerText = "Obtuviste " + puntuacionTotal + "/3";
    div0.appendChild(p);

    dispResultados();
    qN = 1;
    puntuacionTotal = 0;
    resultados = [];

    p = document.createElement("P");
    p.innerText = "¿Deseas volver a jugar?";
    div0.appendChild(p);
    buttonsTrivia();
  }
}


function ansNext(textButton){
  //función para controlar comportamiento botones Siguiente y Terminar
  textAns = document.createElement("INPUT"); //caja de texto para respuesta
  textAns.setAttribute("type", "text");
  div0.appendChild(textAns);

  let buttonNext = document.createElement("BUTTON"); //botón Siguiente/Finalizar
  buttonNext.innerText = textButton;
  buttonNext.id="botonsig";
  div0.appendChild(buttonNext);
  buttonNext.addEventListener("click", revisar);
}


function revisar(){
  //Función que "califica" las respuestas
  let ans = textAns.value;
  if (tBooks == 1 || tFilms == 0){ // trivia Libros ON
    if(qN == 1) {  //pregunta 1
      if(ans == "A" || ans == "a"){
        puntuacion = 1;
      }
      else {
          puntuacion = 0;
      }
    }
    else if(qN == 2) { //pregunta 2
      if(ans == "C" || ans == "c"){
        puntuacion = 1;
      }
      else {
          puntuacion = 0;
      }
    }
    else if(qN == 3) { //pregunta 3
      if(ans == "B" || ans == "b"){
        puntuacion = 1;
      }
      else {
          puntuacion = 0;
      }
    }

    puntuacionTotal = puntuacionTotal+puntuacion;
    resultados.push(puntuacion);
    //console.log(resultados);
    qN++; //incrementa número de pregunta
    triviaLibros(); // vuelve a la función
  }
  else if (tBooks == 0 || tFilms == 1) { // trivia Películas ON
    if(qN == 1) {
      if(ans == "A" || ans == "a"){
        puntuacion = 1;
      }
      else {
          puntuacion = 0;
      }
    }
    else if(qN == 2) {
      if(ans == "C" || ans == "c"){
        puntuacion = 1;
      }
      else {
          puntuacion = 0;
      }
    }
    else if(qN == 3) {
      if(ans == "A" || ans == "a"){
        puntuacion = 1;
      }
      else {
          puntuacion = 0;
      }
    }
    puntuacionTotal = puntuacionTotal+puntuacion;
    resultados.push(puntuacion);
    //console.log(resultados);
    qN++;
    triviaPeliculas();
  }
  }


function dispResultados(){
  // función para mostrar las respuestas correctas e incorrectas
  for (let i = 1; i < 4; i++){
    // lee el array de respuesta y lo califica
    if (resultados[i-1] == 1){
      //console.log(i+". correcto");
      let p2 = document.createElement("P")
      p2.innerText = i+". correcto";
      div0.appendChild(p2);
    }
    else{
      let p2 = document.createElement("P")
      p2.innerText = i+". incorrecto";
      div0.appendChild(p2);
    }

  }
}