var gallery = {
    init: function(){
        $.get( "/directories", function( data ){
            console.log( data );
            $.each( data, function( index, value ){
                console.log( index + ": " + value );
                $( "#menu" ).append( "<option value=" +
                    value + ">" + value + "</option>" );
            } );
        } );
    }
};
gallery.init();
