
class Vehiculo {
    constructor(private _marca: string, private _modelo: string, private _tipo: string) {}

    get marca(): string {
        return this._marca;
    }

    set marca(nuevaMarca: string) {
        this._marca = nuevaMarca;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(nuevoModelo: string) {
        this._modelo = nuevoModelo;
    }

    get tipo(): string {
        return this._tipo;
    }

    toString(): string {
        return `${this._tipo} - ${this._marca} ${this._modelo}`;
    }
}

class Auto extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo, "Auto");
    }
}

class Moto extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo, "Moto");
    }
}

class Camion extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo, "Camión");
    }
}


class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }

    agregarVehiculo(vehiculo: Vehiculo) {
        this.vehiculos.push(vehiculo);
    }

    modificarVehiculo(index: number, nuevaMarca: string, nuevoModelo: string) {
        const vehiculo = this.vehiculos[index];
        if (vehiculo) {
            vehiculo.marca = nuevaMarca;
            vehiculo.modelo = nuevoModelo;
        } else {
            console.log("Vehículo no encontrado");
        }
    }

    darDeBajaVehiculo(index: number) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        } else {
            console.log("Índice inválido");
        }
    }

    mostrarVehiculos() {
        if (this.vehiculos.length > 0) {
            this.vehiculos.forEach((vehiculo, index) => {
                console.log(`${index}: ${vehiculo.toString()}`);
            });
        } else {
            console.log("No hay vehículos registrados");
        }
    }
}


const registro = new RegistroAutomotor();

const auto = new Auto("Ford", "Focus");
const moto = new Moto("Zanella", "250");
const camion = new Camion("Scania", "250");

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);

console.log("Vehículos registrados:");
registro.mostrarVehiculos();

registro.modificarVehiculo(0, "Ford", "Fiesta");
registro.darDeBajaVehiculo(1);

console.log("\nDespués de modificar y dar de baja:");
registro.mostrarVehiculos();
