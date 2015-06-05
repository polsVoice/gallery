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
		$.each( imgArray, function( element, index ){
			imgArray[ index ] = "{href: '" + element + "' }, ";
		} );
		$( "#startSlides" ).fancybox();
		$.fancybox.open( imgArray, {
		'openEffect'    :   'elastic',
    'closeEffect'   :   'elastic',
    'nextEffect'    :   'fade',
    'openSpeed'     :   600, 
    'closeSpeed'    :   200,
    helpers : {
        buttons : {}
    }
});
        //~ console.log( "First item is " + imgArray[ 0 ] );
		//~ $( "body" ).append( "<a class='fancybox' href='" + imgArray[0] + "'>Click Here</a>" );
    },
    init: function(){
        "use strict";
        
			
			$( ".fancybox" ).fancybox();
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
