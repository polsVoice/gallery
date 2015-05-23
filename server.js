( function(){
    var fs = require( "fs" ),
        express = require( "express" ),
        bodyParser = require( "body-parser" ),
        app = express();

    var walk = function(dir, done) {
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
    fs.readFile( __dirname + "/test.txt", function( err, data ){
        if ( err ){throw err;}
        console.log( data.toString() );
    } );

    app.get( "/", function( req, res ){
        "use strict";
        var html = fs.readFileSync( __dirname + "/public/index.html" );
        res.writeHeader( 200, { "Content-Type": "text/html" } );
        res.write( html );
        res.end();
    } );

    app.get( "/directories", function( req, res ){
        "use strict";
        fs.readdir(__dirname, function(err, files) {
            if (err) {return;}
            var arr = [];
            files.forEach(function(f) {
                if ( fs.lstatSync( f ).isDirectory() &&
                    f !== ".git" &&
                    f !== "node_modules" &&
                    f !== "public" ){
                    arr.push( f );
                }
            });
            console.log( "Send from server.js " + arr );
            res.send( arr );
        });
    } );

    app.post( "/dirList", function( req, res ){
        var dir = req.body.dir;
        console.log( dir );
        walk( process.env.PWD + "/" + dir, function( err, result ){
            if ( err ){ throw err; }
            var arr = result;
            console.log( arr );
            res.send( { "result": result } );
        } );
    } );

    app.use( "/", express.static( __dirname + "/public/" ) );

    app.listen( 30025 );
    console.log( "Listening on port 30025" );
} )();
