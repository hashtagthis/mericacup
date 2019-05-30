$(document).ready(function () {
    $("#mostrarPreguntas").click(function () {
        $('#question__body').fadeIn();
        $('.super_container').fadeOut();
    });
    $('#mostrarCuestionario').click(function () {
        $('.questions__container').addClass('active');
        $('.inputs__container').fadeOut();
        $('#subForm').fadeOut();
    });
});

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
        question: "¿Quién tiene la mejor campaña de un equipo campeón en la historia de la Copa América y en cuál año? ",
        choices: ["En 1942 Uruguay llegó invicto a la final además de ganarla por 8 goles arriba", "En 2001 Colombia ganó los seis partidos que jugó, con 11 goles a favor y la valla invicta", "En 1956 Paraguay dio que hablar en el campeonato", "En 1935 Brasil fue el mayor ganador del torneo por diferencia de goles"],
        correctAnswer: 1
    }, {
        question: "¿Cuántos y cuáles son los jugadores que han ganado el triplete sudamericano? (Copa Mundial, Copa América y Libertadores)",
        choices: ["4 jugadores - Ruggeri (Argentina), Marcos Silveira (Brasil), Cafú (Brasil) y Mauro Ramos (Brasil)", "3 jugadores - Ronaldo N. (Brasil), Batistuta (Argentina), Maradona (Argentina)", "2 jugadores - Pelé (Brasil) y Di Estefano (Argentina)", "1 jugador - Chilavert (Paraguay)"],
        correctAnswer: 0
    }, {
        question: "¿Cuál es el único tricampeón de la Copa América y en cuáles años?",
        choices: ["Uruguay 1923-1924-1925", "Brasil 1920-1921-1922", "Perú 1939-1941-1942", "Argentina 1945-1946-1947"],
        correctAnswer: 3
    }, {
        question: "En que sección del pasaporte figura: “Doy servicio de seguridad, cumpliendo con las disposiciones del cliente, cuidando el medio ambiente, cuidando mi integridad y salud, usando mis EPP, mejorando día a día porque Liderman me capacita.”",
        choices: ["Misión", "Visión", "Objetivos estratégicos", "Política integrada", "Consignas permanentes"],
        correctAnswer: 3
    }, {
        question: "Mencione las tres últimas selecciones sudamericanas en competir por primera vez en la Copa América",
        choices: ["(Ecuador - 1939), (Colombia - 1945) y (Venezuela -1967)."],
        correctAnswer: 0
    }, {
        question: "¿Desde cuál edición el campeón de la Copa América asiste a la Copa Confederaciones y cuál fue esa primera selección? ",
        choices: ["Argentina – 1991"],
        correctAnswer: 3
    }, {
        question: "¿Cuál es el único tricampeón de la Copa América y en cuáles años?",
        choices: ["Argentina 1945, 1946 y 1947"],
        correctAnswer: 1
    }, {
        question: "¿De cuál año a cuál año se usó el sistema de todos contra todos en la Copa América?",
        choices: ["Desde 1916 hasta la edición de 1967"],
        correctAnswer: 3
    }, {
        question: "¿Desde cuál Copa América la CONMEBOL exige al país organizador crear una mascota representativa del torneo y cuál fue la primera en existir?",
        choices: ["Copa América de 1987 - Gardelito"],
        correctAnswer: 4
    }, {
        question: "¿Cuál fue el histórico delantero que falló tres penaltis en un solo partido, en cuál partido y en cuál Copa América?",
        choices: ["Colombia – Argentina / Copa América de 1999 de Paraguay / Martín Palermo."],
        correctAnswer: 0
    }, {
        question: "Ante la falta de árbitros ¿Cuáles fueron los personajes que se vistieron de negro y dirigieron un par de partidos y en cuáles Copas América?",
        choices: ["El técnico chileno Carlos Fanta (1916 y 1920) y el jugador brasileño Sidney Pullen (1916)"],
        correctAnswer: 1
    }, {
        question: "¿Cuáles son las selecciones que salieron campeonas con un técnico de otra nacionalidad y en cuáles Copas América?",
        choices: ["El brasileño Danilo Alvim con Bolivia en 1963, el inglés Jack Greenwall con Perú en 1939, y Chile con los argentinos Juan Antonio Pizzi (2015) y Jorge Sampaoli (2016)"],
        correctAnswer: 3
    }, {
        question: "¿Cuáles son los dos jugadores con más Copa América jugadas, cuántas y sus nacionalidades?",
        choices: ["El ecuatoriano Álex Aguinaga y el uruguayo Ángel Romano tienen el récord de participaciones en la Copa América, con ocho ediciones cada uno."],
        correctAnswer: 3
    }, {
        question: "Desde 1990 ¿Cuáles jugadores han sido máximo goleador de la Copa América dos veces y en cuáles ediciones?",
        choices: ["Gabriel Omar Batistuta (1991 y 1995), Paolo Guerrero (2011 y 2015) y Eduardo Vargas (2015 y 2016)"],
        correctAnswer: 4
    }, {
        question: "En la primera Copa América, Argentina no tenía 11 jugadores para iniciar el partido. ¿De dónde llamaron a ese jugar y qué hizo en el partido?",
        choices: ["Un jugador que estaba sentado como espectador en la tribuna, José “Negro” Laguna y anotó el primer gol del encuentro"],
        correctAnswer: 2
    }, {
        question: "¿Cuál fue el resultado del primer partido en la historia de la Copa América y quiénes lo jugaron?",
        choices: ["Uruguay 4 – Chile 0"],
        correctAnswer: 3
    }, {
        question: "¿Cuánto duró el partido más largo de la Copa América, entre quiénes lo jugaron y en qué año?",
        choices: ["150 minutos / Brasil 3 - Uruguay 2 / Año 1919 "],
        correctAnswer: 2
    }, {
        question: "Catar jugará la Copa América por primera vez, y se convertirá en la novena selección fuera de CONMEBOL en disputar este certamen.",
        choices: ["Números de emergencia.", "Valores", "Matriz de riesgo medio ambiental (IAI).", "Inventario de extintores y gabinete contra incendio.", "Análisis de riesgo"],
        correctAnswer: 29329089183021
    }, {
        question: "La última vez que un anfitrión cayó en el duelo inaugural fue en la edición 2016. Colombia superó (2-0) a los Estados Unidos.",
        choices: ["Oxigeno", "Calor", "Combustible", "Hidrógeno", "Reacción en cadena."],
        correctAnswer: 3392183912081903281
    }, {
        question: "¿En qué año se jugaron dos ediciones de la Copa América, quiénes fueron los campeones y cuáles países fueron sede?",
        choices: ["Argentina (Argentina) y Uruguay (Ecuador)"],
        correctAnswer: 0
    }, {
        question: "¿Cuál jugador, de cuál selección y en cuál Copa América tuvo que jugar con pañales?",
        choices: ["Ronaldo / Brasil / Paraguay 1999"],
        correctAnswer: 1
    }, {
        question: "¿Cuál jugador, de cuál selección, en qué día y año convirtió el primer gol de la historia de la Copa América?",
        choices: ["El 2 de julio de 1916, el uruguayo José Piendibene"],
        correctAnswer: 2
    }, {
        question: "¿En qué años se realizaron las 3 ediciones de la Copa América que no tuvieron sede fija?",
        choices: ["1975, 1979 y 1983"],
        correctAnswer: 2
    }, {
        question: "¿Quién, de cuál selección y en cuál Copa América marcó el gol número 2,000 en la historia de la competencia?",
        choices: ["El mexicano Luis ‘El ‘Pájaro’  Hernández (Bolivia 1997)"],
        correctAnswer: 2
    }, {
        question: "¿Cuál es el estadio en donde más encuentros se disputaron en la historia de la Copa América?",
        choices: ["Lima, Estadio Nacional 76 partidos."],
        correctAnswer: 2
    }, {
        question: "¿A cuáles equipos y a partir de qué año se les entrega La Copa Bolivia?",
        choices: ["Trofeo internacional entregado por la CONMEBOL al subcampeón de la Copa América. Se entrega desde 1997"],
        correctAnswer: 2
    }];
    var sampleQuestions = _.sample(questions, 4); //Preguntas random
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

        var header = $('<h2>Pregunta ' + (index + 1) + ':</h2>');
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
        var score = $('<p>', { id: 'question' });

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === sampleQuestions[i].correctAnswer) {
                numCorrect++;
            }
        }
        if (numCorrect == 0) {
            numCorrect = '';
        }
        score.append(`¡Gracias por participar!. <br> ¡Mucha suerte!</p>' + '<form id="subForm" class="js-cm-form" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="92D4C54F0FEC16E5ADC2B1904DE9ED1AF626D99C1F785A74C61FC3136726BEAF6F9F85F771F0BB790F44EE83B30036C850A7F4A3DF13E5136ABA6ABEE3DC33B1">	<input id="fieldName" name="cm-name" type="text" /><input id="fieldEmail" name="cm-ydlyiii-ydlyiii" type="email" class="js-cm-email-input" required /><input id="fieldwvjhk" name="cm-f-wvjhk" type="text" /><input id="fieldwvijk" name="cm-f-wvijk" type="text" /><input id="fieldwviju" name="cm-f-wviju" type="text" /><button class="js-cm-submit-button" type="submit">Subscribe</button><script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>`);
        return score;
    }
})();