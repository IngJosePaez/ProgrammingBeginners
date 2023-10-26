


export function heroesThatStartsWith( nameList: string [], letter: string ) {

    letter = letter.toUpperCase();
    let newNamelist: string[] = [];


  //  for ( let i = 0; i < nameList.length; i ++) {
 //      let name = nameList[i];

 //       if ( name.startsWith(letter)) {
  //          newNamelist.push( name );

    for ( let name of nameList ){ //Recorrer un array modo DIOS 

        if ( name.startsWith(letter)) {
            newNamelist.push( name );
        }
    }


    return newNamelist;

    }



 








let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith( heroes, 'D');
console.log( herosWithLetterS ); // She Hulk, Spiderman