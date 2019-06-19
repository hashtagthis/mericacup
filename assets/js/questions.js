$(document).ready(function () {
    $("#mostrarPreguntas").click(function () {
        if (($('#nombre, #correo, #DNI').val().length > 0) && ($('#paises').val() !== "0")) {
            $('.preguntas__container').addClass('active');
            $('header').css('display', 'none');
            $('html').css('overflow-y', 'hidden');
        }
        $('#paises').val() !== "0" ? $(this).css('border', '1px solid red') : $(this).css('border', 'none');
    });
});


// Variable global
var numCorrect = 0;

(function () {
    var questions = [{
        question: "¿Cuántas veces fue sede de la Copa América Brasil y en cuáles de estas fue campeón?",
        choices: ["5 veces - 4 copas", "3 veces - 2 copas", "8 veces - 4 copas", "5 veces - 2 copas"],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el único país invicto en las finales de la Copa América y cuántas veces ha sido campeón?",
        choices: ["Perú - 1 vez", "Paragüay - 2 veces", "Uruguay - 1 vez", "Brasil - 2 veces"],
        correctAnswer: 0
    },
    {
        question: "¿Cómo se llamó inicialmente la Copa América y en qué año cambió de nombre?",
        choices: ["Copa de las Américas", "Campeonato Sudamericano de Fútbol", "Copa Sudamericana Latinoamericana", "La Gran Copa América"],
        correctAnswer: 1
    },
    {
        question: "¿Quién es el primer campeón y bicampeón de la Copa América y en cuáles años?",
        choices: ["Brasil (1921 y 1922)", "Brasil (1919 y 1920)", "Uruguay (1916 y 1917)", "Argentina (1927 y 1929)"],
        correctAnswer: 2
    },
    {
        question: "¿Cuáles son las dos selecciones sudamericanas que nunca han ganado una Copa América?",
        choices: ["Ecuador y Venezuela", "Paraguay y Ecuador", "Venezuela y Paraguay", "Chile y Argentina"],
        correctAnswer: 0
    },
    {
        question: "Existe un jugador de fútbol campeón de la Copa América que su padre y abuelo también la ganaron. ¿Quiénes son y en cuáles años?",
        choices: ["Diego Forlan ganó la Copa América en el 2011 mientras que su padre la ganó en 1967. Su abuelo Juan Carlos Corrazo también levantó el trofeo en 1959 como entrenador", "Ronaldinho ganó en el 2004, su padre lo ganó en el 1959 y su abuelo en 1922", "Messi ganó en el 2004. Su padre ganó la copa en el 1959 y su abuelo en el 1937", "Mentira, ninguno hizo eso"],
        correctAnswer: 0
    }, {
        question: "¿Quién tiene la mejor campaña de un equipo campeón en la historia de la Copa América y en cuál año?",
        choices: ["En 1942 Uruguay llegó invicto a la final además de ganarla por 8 goles arriba", "En 2001 Colombia ganó los seis partidos que jugó, con 11 goles a favor y la valla invicta", "En 1956 Paraguay dio que hablar en el campeonato", "En 1935 Brasil fue el mayor ganador del torneo por diferencia de goles"],
        correctAnswer: 1
    }, {
        question: "¿Cuántos y cuáles son los jugadores que han ganado el triplete sudamericano? (Mundial, C. América y Libertadores)",
        choices: ["4 jugadores - Ruggeri (Argentina), Marcos Silveira (Brasil), Cafú (Brasil) y Mauro Ramos (Brasil)", "3 jugadores - Ronaldo N. (Brasil), Batistuta (Argentina), Maradona (Argentina)", "2 jugadores - Pelé (Brasil) y Di Estefano (Argentina)", "1 jugador - Chilavert (Paraguay)"],
        correctAnswer: 0
    }, {
        question: "¿Cuál es el único tricampeón de la Copa América y en cuáles años?",
        choices: ["Uruguay 1923-1924-1925", "Brasil 1920-1921-1922", "Perú 1939-1941-1942", "Argentina 1945-1946-1947"],
        correctAnswer: 3
    }, {
        question: "Mencione las tres últimas selecciones sudamericanas en competir por primera vez en la Copa América",
        choices: ["(Ecuador - 1939), (Colombia - 1945) y (Venezuela - 1967).", "(Brasil - 1945), (Perú - 1914), (Argentina - 1940)", "(Argentina - 1920), (Ecuador - 1950), (Brasil - 1945), (Venezuela - 1950)"],
        correctAnswer: 0
    }, {
        question: "¿Desde cuál edición el campeón de la Copa América asiste a la Copa Confederaciones y cuál fue esa primera selección? ",
        choices: ["Argentina – 1991", "Perú - 1982", "Brasil - 1975", "Paraguay - 1940"],
        correctAnswer: 0
    }, {
        question: "¿Cuál es el único tricampeón de la Copa América y en cuáles años?",
        choices: ["Argentina 1945, 1946 y 1947", "Brasil 1952, 1956 y 1960", "Uruguay 1930, 1931 y 1932", "Paraguay 1980, 1984 y 1986"],
        correctAnswer: 0
    }, {
        question: "¿De cuál año a cuál año se usó el sistema de todos contra todos en la Copa América?",
        choices: ["Desde 1916 hasta la edición de 1967", "Desde 1960 hasta la edición de 1980", "Desde 1900 hasta la edición 1990", "Desde 1914 hasta la edición 1940"],
        correctAnswer: 0
    }, {
        question: "¿Desde cuál Copa América la CONMEBOL exige al país organizador crear una mascota representativa del torneo y cuál fue la primera en existir?",
        choices: ["Copa América de 1987 - Gardelito", "Copa América de 1940 - Naranjito", "Copa América de 1972 - Chaski", "Copa América de 1990 - Puku Puku"],
        correctAnswer: 0
    }, {
        question: "¿Cuál fue el histórico delantero que falló tres penaltis en un solo partido, en cuál partido y en cuál Copa América?",
        choices: ["Colombia – Argentina / Copa América de 1999 de Paraguay / Martín Palermo.", "Uruguay - Brasil / Copa América de 1994 de Brasil / Mauro Silva"],
        correctAnswer: 0
    }, {
        question: "Ante la falta de árbitros ¿Cuáles fueron los personajes que se vistieron de negro y dirigieron un par de partidos y en cuáles Copas América?",
        choices: ["El técnico brasilero Carlos Alberto Parreira (1993 y 1996) y el jugador uruguayo Nelson Cabrera (1994)", "El técnico chileno Carlos Fanta (1916 y 1920) y el jugador brasileño Sidney Pullen (1916)"],
        correctAnswer: 1
    }, {
        question: "¿Cuáles son las selecciones que salieron campeonas con un técnico de otra nacionalidad y en cuáles Copas América?",
        choices: ["El brasileño Danilo Alvim con Bolivia en 1963, el inglés Jack Greenwall con Perú en 1939, y Chile con los argentinos Juan Antonio Pizzi (2015) y Jorge Sampaoli (2016)", "El brasileño Oscar Ferro con Uruguay en 1963, el inglés Eber Moas con Perú en 1939, y Ecuador con los argentinos Guillermo Sanguinetti (1945) y Álvaro Gutierrez (2016)"],
        correctAnswer: 0
    }, {
        question: "¿Cuáles son los dos jugadores con más Copa América jugadas, cuántas y sus nacionalidades?",
        choices: ["El ecuatoriano Álex Aguinaga y el uruguayo Ángel Romano", "El brasilero Rubén Da Silva y el paraguayo Walter Pelleti"],
        correctAnswer: 0
    }, {
        question: "Desde 1990 ¿Cuáles jugadores han sido máximo goleador de la Copa América dos veces y en cuáles ediciones?",
        choices: ["Giovanni Hernández (2001 y 2006), Víctor Aristizabal (1997 y 2001)", "Gabriel Omar Batistuta (1991 y 1995), Paolo Guerrero (2011 y 2015) y Eduardo Vargas (2015 y 2016)", "Denilson (1993 y 1997), Jared Borgetti (1993 y 2001)"],
        correctAnswer: 1
    }, {
        question: "En la primera Copa América, Argentina no tenía 11 jugadores para iniciar el partido. ¿De dónde llamaron a ese jugar y qué hizo en el partido?",
        choices: ["Un jugador que estaba sentado como espectador en la tribuna, José “Negro” Laguna y anotó el primer gol del encuentro", "El mismo DT ingresó a jugar ese partido dándole el triunfo a último minuto", "Se prestaron de una selección que no estaba jugando el encuentro dando así el primer caso de ayuda entre selecciones"],
        correctAnswer: 0
    }, {
        question: "¿Cuál fue el resultado del primer partido en la historia de la Copa América y quiénes lo jugaron?",
        choices: ["Uruguay 4 – Chile 0", "Uruguay 2 - Perú 1", "Argentina 0 - Ecuador 0"],
        correctAnswer: 0
    }, {
        question: "¿Cuánto duró el partido más largo de la Copa América, entre quiénes lo jugaron y en qué año?",
        choices: ["150 minutos / Brasil 3 - Uruguay 2 / Año 1919", "180 minutos / Chile 2 - Argentina 1 / Año 1916"],
        correctAnswer: 2
    }, {
        question: "Catar jugará la Copa América por primera vez, y se convertirá en la novena selección fuera de CONMEBOL en disputar este certamen. ¿Verdadero o Falso?",
        choices: ["Verdadero", "Falso"],
        correctAnswer: 0
    }, {
        question: "La última vez que un anfitrión cayó en el duelo inaugural fue en la edición 2016. ¿Cuáles fueron esas selecciones?",
        choices: ["Colombia superó (2-0) a los Estados Unidos", "Ecuador superó (1-0) a los Estados Unidos", "Chile superó (2-1) a los Estados Unidos"],
        correctAnswer: 0
    }, {
        question: "¿En qué año se jugaron dos ediciones de la Copa América, quiénes fueron los campeones y cuáles países fueron sede?",
        choices: ["Argentina (Argentina) y Uruguay (Ecuador)", "Perú (Chile) y Ecuador (Perú)", "Chile (Argentina) y Ecuador (Uruguay)"],
        correctAnswer: 0
    }, {
        question: "¿Cuál jugador, de cuál selección y en cuál Copa América tuvo que jugar con pañales?",
        choices: ["Ronaldo / Brasil / Paraguay 1999", "Batistuta / Brasil / Uruguay 1994", "Sampaoli / Chile / Brasil 1982"],
        correctAnswer: 0
    }, {
        question: "¿Cuál jugador, de cuál selección, en qué día y año convirtió el primer gol de la historia de la Copa América?",
        choices: ["El 4 de agosto de 1916, el brasileño Roberto Carlos (abuelo)", "El 2 de julio de 1916, el uruguayo José Piendibene"],
        correctAnswer: 1
    }, {
        question: "¿En qué años se realizaron las 3 ediciones de la Copa América que no tuvieron sede fija?",
        choices: ["1975, 1979 y 1983", "1916, 1990, 1994", "1980, 1986, 1990"],
        correctAnswer: 0
    }, {
        question: "¿Quién, de cuál selección y en cuál Copa América marcó el gol número 2,000 en la historia de la competencia?",
        choices: ["El mexicano Luis ‘El ‘Pájaro’  Hernández (Bolivia 1997)", "El Colombiano Falcao (Argentina 1992)"],
        correctAnswer: 0
    }, {
        question: "¿Cuál es el estadio en donde más encuentros se disputaron en la historia de la Copa América?",
        choices: ["Lima, Estadio Nacional 76 partidos.", "Río de Janeiro, Estadio Maracaná 80 partidos", "Buenos Aires, Estadio Nacional 50 partidos"],
        correctAnswer: 0
    }, {
        question: "¿A cuáles equipos y a partir de qué año se les entrega La Copa Bolivia?",
        choices: ["Trofeo internacional entregado por la FIFA al subcampeón de la Copa América. Se entrega desde 1994", "Trofeo internacional entregado por la CONMEBOL al subcampeón de la Copa América. Se entrega desde 1997"],
        correctAnswer: 1
    }];
    var sampleQuestions = _.sample(questions, 3); //Preguntas random
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('Por favor elige una opción');
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });
        var header = $('<img src="assets/images/logo_copa.png" alt="Logo Copa América" id="logoCopa"><h2>Pregunta ' + (index + 1) + '</h2>' + '<img src="assets/images/titulo_sub.png" alt="Fondo Pasto" class="fondoTitulo">');
        qElement.append(header);

        var question = $('<p>').append(sampleQuestions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < sampleQuestions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' /><label for="">' + sampleQuestions[index].choices[i] + '</label>';
            // input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function () {
            $('#question').remove();

            if (questionCounter < sampleQuestions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        // Variables
        var nombre = $('#nombre').val(),
        correo = $('#correo').val(),
        dni = $('#DNI').val(),
        pais = $('#paises').val(),
        respuestaCorrecta = numCorrect;
        // Estilos
        $('.preguntas__container h1').fadeOut();
        $('#quiz').css('width', '100%');
        $('#quiz').css('overflow-y', 'scroll');
        $('.preguntas__container').addClass('newBG');
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === sampleQuestions[i].correctAnswer) {
                numCorrect++;
            }
        }
        if (numCorrect == 0) {
            numCorrect = '';
        }
        var score = $('<div>', { id: 'question' });
        score.append(`<div class="hiddenForm">
        <form id="subForm" class="js-cm-form" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="92D4C54F0FEC16E5ADC2B1904DE9ED1AF626D99C1F785A74C61FC3136726BEAF6F9F85F771F0BB790F44EE83B30036C850A7F4A3DF13E5136ABA6ABEE3DC33B1">	
        <input id="fieldName" name="cm-name" type="text" value="`+ nombre + `"/>
        <input id="fieldEmail" name="cm-ydlyiii-ydlyiii" type="email" class="js-cm-email-input"
        required value="`+ correo + `"/>
        <input id="fieldwvjhk" name="cm-f-wvjhk" type="text" value="`+ dni + `"/>
        <input id="fieldwtuuyy" name="cm-f-wtuuyy" type="text" value="` + pais + `"/>
        <input id="fieldwvijk" name="cm-f-wvijk" type="text" value="`+ respuestaCorrecta + `"/>
        <div class="center-box">
            <button class="btn js-cm-submit-button enviarABD" type="submit">Enviar Resultados</button>
        </div>
        </form>
        </div>
        <h3>¡Haz click en la pelota Liderman y participa!</h3>
        <div class="center-box">
            <a class="btn" id="enviar"><img src="assets/images/pelota_boton.png" alt="Pelota Liderman">Participar</a>
        </div>
        <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>`)
        return score;
    }

    // Funciones
    $('body').on('click', '.enviarResultados', guardarResultados);
    $('body').on('click', '#enviar', enviarResultados);
    $(document).on({
        mouseenter: function () {
            $(this).find('label').addClass('hoverItem');
        },
        mouseleave: function () {
            $(this).find('label').removeClass('hoverItem');
        }
    }, '#question ul li');

    function guardarResultados() {
        var formulario = $('#hiddenForm');
        $('#question .container').fadeOut(300);
        formulario.append(``);
    }

    function enviarResultados() {
        $('.enviarABD').trigger('click');
    }
})();