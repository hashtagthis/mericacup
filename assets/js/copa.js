(function () {
    'use strict';
    var CopaAmerica;

    CopaAmerica = function () {
        var me = this;
        me.Eventos = {
            RegexDNI: function () {
                var regex = /^([0-9])?$/;
                if (!regex.test($(this).val())) {
                    $(this).val($(this).val().replace(/[^0-9]/g, ''));
                }
            }
        };
        me.Funciones = {
            InicializarEventos: function () {
                $('body').on('keyup', '.dniRGX', me.Eventos.RegexDNI);
            },
            InicializarProcesosOnLoad: function () {
                if ($(window).innerWidth() <= 750) {
                    $('.preguntas__container').css('background', 'url("assets/images/fondo_preguntas_sinlogo.jpg")');
                }
            }
        }
        me.Inicializar = function () {
            me.Funciones.InicializarEventos();
            me.Funciones.InicializarProcesosOnLoad();
        }
    }
    CopaAmerica = new CopaAmerica();
    CopaAmerica.Inicializar();

})(window);