function addPromise( a, b ) {
    var total = a + b;
    return new Promise(function( resolve, reject ) {
        if ( typeof total === 'number' ) {
            resolve(total);
        } else {
            reject('Not a number');
        }
    });
}

addPromise( "f", 7 ).then(
    function(num) {
        console.log(num);
    }, function(err) {
        console.log(err);
    }
);

addPromise( 5, 7 ).then(
    function(num) {
        console.log(num);
    }, function(err) {
        console.log(err);
    }
);