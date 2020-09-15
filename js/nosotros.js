$(function(){
    /* Antes de que se ejecute la acción */
    $('#contacto').on('show.bs.modal', function(e){ /* Se referencia el id del modal */
        console.log('Se está mostrando el modal');

        $('#enviarBtn').removeClass('btn-dark');
        $('#enviarBtn').addClass('btn-outline-dark');
    });

    /* Después de que se ejecuta la acción */
    $('#contacto').on('shown.bs.modal', function(e){ /* Se referencia el id del modal */
        console.log('Se mostró el modal');
    });

    /* Antes de que se ejecute la acción */
    $('#contacto').on('hide.bs.modal', function(e){ /* Se referencia el id del modal */
        console.log('El modal se oculta');
    });

    /* Después de que se ejecuta la acción */
    $('#contacto').on('hidden.bs.modal', function(e){ /* Se referencia el id del modal */
        console.log('El modal se ocultó');

        $('#enviarBtn').prop('disabled', true);
    });
});