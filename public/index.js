var gallery = {
    getFileList: function(){
        "use strict";
        var dir = $( this ).val();
        console.log( dir );
        $.ajax( {
            url: "/dirList",
            type: "POST",
            data: {"dir":dir},
            datatype: "json",
            success: function( data ){
                console.log( data);
            },
            error: function( jqxhr, status, errThrown ){
                console.log( jqxhr.responseText );
                console.log( status );
                console.log( errThrown );
            }
        } );
    },
    init: function(){
        "use strict";
        var opt;
        $.get( "/directories", function( data ){
            $.each( data, function( index, value ){
                opt = "<option value=" +
                    value + ">" + value + "</option>";
                console.log( index + ": " + value );
                $( "#menu" ).append( opt );
            } );
            $( "#menu" ).change( gallery.getFileList );
        } );
    }
};
gallery.init();
