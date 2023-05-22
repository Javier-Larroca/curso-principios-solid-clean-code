
export abstract class Vehicle {
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle{
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle{
    getNumberOfseats(): number {
        throw new Error("Method not implemented.");
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle{
    getNumberOfseats(): number {
        throw new Error("Method not implemented.");
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle{
    getNumberOfseats(): number {
        throw new Error("Method not implemented.");
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
