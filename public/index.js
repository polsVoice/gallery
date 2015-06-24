var gallery = {
    dir: null,
    getFileList: function(){
        "use strict";
        $( this ).blur();
        var dir = $( this ).val();
        if ( dir === "&mdash;" ){return false;}
        $.ajax( {
            url: "/dirList",
            type: "POST",
            data: {"dir":dir},
            datatype: "json",
            success: function( data ){
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
		"use strict";
		var arr = [], item = "";
		$.each( imgArray, function( element, index ){
			imgArray[ index ] = "{href: '" + element + "' }, ";
		} );
		$( "#startSlides" ).fancybox();
		$.fancybox.open( imgArray, {
			'openEffect'    :   'elastic',
			'closeEffect'   :   'elastic',
			'nextEffect'    :   'fade',
			'openSpeed'     :   600, 
			'closeSpeed'    :   200
		});
    },
    init: function(){
        "use strict";			
		$( ".fancybox" ).fancybox();
        var opt;
        $.get( "/directories", function( data ){
            $.each( data, function( index, value ){
                opt = "<option value=" +
                    value + ">" + value + "</option>";
                $( "#menu" ).append( opt );
            } );
            $( "#menu" ).click( gallery.getFileList );
        } );
    }
};
gallery.init();
