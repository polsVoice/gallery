( function(){
    var fs = require( "fs" ),
        express = require( "express" ),
        app = express();

    fs.readFile( __dirname + "/test.txt", function( err, data ){
        if ( err ){
            throw err;
        }
        console.log( data.toString() );
    } );

    fs.readdir(__dirname, function(err, files) {
        if (err) return;
        files.forEach(function(f) {
            if ( fs.lstatSync( f ).isDirectory() ){
                console.log('Files: ' + f);
            }
        });
    });

    var walk = function(dir, done) {
      var results = [];
      fs.readdir(dir, function(err, list) {
        if (err) return done(err);
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
    //~ walk( process.env.PWD, function( err, results ){
        //~ if ( err ){
            //~ throw err;
        //~ }
        //~ var arr = [];
        //~ console.log( results );
    //~ } );
} )();
