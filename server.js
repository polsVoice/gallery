module.exports = {
    results: [],
    walk: function(callback){
        var nodeDir = require( "node-dir" );
        nodeDir.files( "./public/img", function( err, files ){
            if ( err ){ throw err; }
            callback( files );
        } );
    }
};
