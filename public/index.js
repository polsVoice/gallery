var gallery = {
    dir: null,
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
                console.log( data.result );
                gallery.dir = data.result;
                console.log( "gallery.dir is " + gallery.dir );
                console.log( "Contents of array after $.ajax is " + data.result );
                gallery.imgRender( data.result );
            },
            error: function( jqxhr, status, errThrown ){
                console.log( jqxhr.responseText );
                console.log( status );
                console.log( errThrown );
            }
        } );
    },
    imgRender: function( imgArray ){
        console.log( "First item is " + imgArray[ 0 ] );
		$( "body" ).append( "<img src='" + imgArray[ 0 ] + "' />" );
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
