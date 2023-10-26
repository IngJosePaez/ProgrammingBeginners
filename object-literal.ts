
//let person = {
//   name: 'Melissa',
//   age: 30,
//   isActive: true,
//   hobbies: ['soccer','baseball'],
//    toString() {
//        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
//        console.log( objectString );

//    }

//}
//person.toString();

export let car = {
    brand: 'Toyota',
    color: 'Black',
    model: 2023,
    toStringC() {
        let carPrint = this.brand + ' ' + this.color + ' ' + this.model;
        console.log( carPrint );
    }
}

let smartTv = {
    inches: 40,
    colorc: 'White',
    resolution: 2400,
    toStringS() {
        let smartPrint = this.inches + ' ' + this.colorc + ' ' + this.resolution;
        console.log( smartPrint );
    }
}

let youtubeVideo = {
    nameV: 'DragonBall',
    sizeMb: 400,
    durationMinutes: 5,
    toStringY() {
        let youtubePrint = this.nameV + ' ' + this.sizeMb + ' ' + this.durationMinutes;
        console.log( youtubePrint );
    }
}

car.toStringC();
smartTv.toStringS();
youtubeVideo.toStringY();



    







