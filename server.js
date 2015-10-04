module.exports = function(){
    var fs = require( "fs" )
        , express = require( "express" )
        , bodyParser = require( "body-parser" )
        , nodeDir = require( "node-dir" )
        , app = express();
    var htm
    app.get( "/", function( req, res ){
        "use strict";
        var html = fs.readFileSync( "./public/index.html" );
        res.writeHeader( 200, { "Content-Type": "text/html" } );
        res.write( html );
        res.end();
    } );
    app.listen( 30025 );
    return {
        walk: function( callback ){
            "use strict";
            nodeDir.files( "./public/img", function( err, files ){
                if ( err ){ throw err; }
                callback( files );
            } );
        }
    };
}();
