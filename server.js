var gallery = {
    fs: require( "fs" ),
    express: require( "express" ),
    bodyParser: require( "body-parser" ),
    walk: function(callback){
        "use strict";
        var nodeDir = require( "node-dir" );
        nodeDir.files( "./public/img", function( err, files ){
            if ( err ){ throw err; }
            callback( files );
        } );
    },
    init: function(){
        var app = this.express();
        app.use( this.bodyParser.urlencoded( { extended: false } ) );
        app.get( "/", function( req, res ){
            res.send( "Hello world" );
        } );
        app.listen( 3000 );
    }
};
//~ gallery.init();
module.exports = gallery;
