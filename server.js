( function(){
    var fs = require( "fs" ),
        express = require( "express" ),
        bodyParser = require( "body-parser" ),
        app = express();

    function walk( dir, done ){
        var results = [];
        fs.readdir(dir, function(err, list) {
            if (err) {return done(err)};
            var i = 0;
            (function next() {
                var file = list[i++];
                if (!file) return done(null, results);
                file = dir + '/' + file;
                fs.stat(file, function(err, stat) {
                    if (stat && stat.isDirectory()) {
                      walk(file, function(err, res) {
                        results = results.concat(res);
                        next();
                      });
                    } else {
                      results.push(file);
                      next();
                    }
                });
            })();
        });
    };
    app.use( bodyParser.urlencoded( { extended: false } ) );

    app.get( "/", function( req, res ){
        "use strict";
        var html = fs.readFileSync( __dirname + "/public/index.html" );
        res.writeHeader( 200, { "Content-Type": "text/html" } );
        res.write( html );
        res.end();
    } );

    app.get( "/directories", function( req, res ){
        "use strict";
        var path = "./public/img/";
        fs.readdir( path, function(err, files) {
            if (err) {return;}
            var arr = [];
            files.forEach(function(f) {
                if ( fs.lstatSync( path + f ).isDirectory() ){
                    arr.push( f );
                }
            });
            res.send( arr );
        });
    } );

    app.post( "/dirList", function( req, res ){
        var dir = req.body.dir;
        if ( dir !== "none" ){
			walk( process.env.PWD + "/public/img/" + dir, function( err, result ){
				if ( err ){ throw err; }
				result.forEach( function( element, index ){
					result[ index ] = element.replace( __dirname + "/public/", "" );
				} );
				res.send( { "result": result } );
			} );
		}
    } );

	app.use( "/", express.static( __dirname + "/public/" ) );

    app.listen( 30025 );
    console.log( "Listening on port 30025" );
} )();
