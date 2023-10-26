

function max( a: number, b: number, c: number) {

    if ( a > b ) {
        return ( a > c ) ? a : c;
    }

    if ( b > c ) {
        return b;
    } 
        return ( a > c ) ? a : c;
    }


export let maxValue = max( 100, 24, 140);
console.log( maxValue );