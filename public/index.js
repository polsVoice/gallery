var gallery = {
    init: function(){
        $.get( "/directories", function( data ){
            console.log( data );
        } );
    }
};
gallery.init();
