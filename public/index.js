var gallery = {
    init: function(){
        $.get( "/directories", function( data ){
            console.dir( data );
        } );
    }
};
gallery.init();
