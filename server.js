module.exports = function(){
    var results = [];
    walk = function(){
        var nodeDir = require( "node-dir" );
        nodeDir.files( __dirname + "/public/img", function( err, files ){
            if ( err ){ throw err; }    
            results = files;
        } );  
    };
    var getData = function(){
        console.log( results );
        return results;
    }
};
