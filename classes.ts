

export class Car {  //Creamos la clase con las propiedades

   
    static className = 'Carro';

   public readonly brand: string;
   public doors: number;
   public fuelTank: number;
   public isRunning: boolean;
   public type: string;

    

   private readonly createdAt: number;

    constructor(brand : string, type: string) { //Creamos el constructor para definir con valores las propiedades

        this.brand = 'No brand'; 
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = 'No type';
        
       

        this.createdAt = 123456789;
    }

   public turnOn() { // Creamos un metodo para cambiar el valor que tiene por defecto la propiedad isRunning , que era false, pudiendo ser true luego del cambio
        
        if ( this.isRunning ) {
        
            console.log('El carro ya estaba encendido');
            return;
        
        }

        if ( this.fuelTank <= 0 ) {
            console.log('El carro no tiene gasolina');
            return;
        }

             this.isRunning = true;
             console.log('El carro está encendido');
    

    }

        /*  
            gas: number
            gas > 100, this.fuelTank = 100;
            gas tiene positivo
            si ya está lleno, no sobre llenar
            si el tanque es 50 y añado 20, el valor del fuelTank seria 70
            si el fuelTank es 90, y añado 50, fullTank deberia ser 100;
        
        */
    
    fillTank( gas: number) {

        if ( gas <= 0 ) {
            console.log('El gas tiene que ser positivo');
            return;
    }   
            let newFuelTank = this.fuelTank + gas;
            if ( newFuelTank >= 100 ) {
                this.fuelTank = 100;
            } else {
                this.fuelTank = newFuelTank;
            }



        

    
        
    }

}


let myMazda = new Car('Mazda','Sedan');

myMazda.fillTank(50);
myMazda.fillTank(100);
myMazda.turnOn();
console.log(myMazda);


console.log( Car.className);

    







