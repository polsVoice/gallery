module.exports = function(){
    var fs = require( "fs" )
        , express = require( "express" )
        , bodyParser = require( "body-parser" )
        , nodeDir = require( "node-dir" )
        , app = express();
    return {
        walk: function( callback ){
            "use strict";
            nodeDir.files( "./public/img", function( err, files ){
                if ( err ){ throw err; }
                callback( files );
            } );
        },
        init: function(){
            app.get( "/", function( req, res ){
                res.send( "hello world" );
            } );
            app.listen( 3000 );
        }
    };
}();
