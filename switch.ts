
export let weekDay: number = 2; // 1 = Lunes, 2=Martes, 3= Miércoles

if ( weekDay <= 0 ) {
    //console.log('Dia de la semana no permitido')
    throw new Error('Dia de la semana no permitido');

}

switch( weekDay ) {

    case 1:
        console.log( 'Es Lunes');
        break;

    case 2:
        console.log( 'Es martes');
        break;

    case 3:
        console.log('Es miércoles');
        break;

    default:
        console.log('No es Lunes, Martes o Miércoles');

}








    







