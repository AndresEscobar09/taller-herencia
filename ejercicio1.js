

//let empleados = [];

class Empleado{
    constructor(nombre,cargo,salario){
        this.nombre = String(nombre);
        this.cargo = String(cargo);
        this.salario = Number(salario)  ;
        this.Activo = true;
    };
    presentarse(){
        console.log(`Hola, mi nombre es ${this.nombre}, soy ${this.cargo}`);
    };
    calcularSalarioAnual(){
        return this.salario * 12;
    };
    desactivar(){
        this.Activo = false;
        console.log(`${this.nombre} ha sido desactivado.`);
    };
    info(){
        return(`
            Nombre: ${this.nombre}
            Cargo: ${this.cargo}
            Salario: ${this.salario}
            Activo: ${this.Activo}
            `);
    }

}

class Lider extends Empleado{
    constructor(nombre,salario,equipo){
        super(nombre,"Lider de equipo",salario);
        this.equipo = equipo;

       

    }
    presentarEquipo(){
        console.log(`Hola, soy ${this.nombre} y lidero el equipo de ${this.equipo.join(", ")}.`);
    }
    agregarMiembro(nombre){
        this.equipo.push(nombre);
        console.log(`${nombre} ha sido agregado al equipo de ${this.nombre}.`);
    }
    info(){
        return(`
            Nombre: ${this.nombre}
            Cargo: ${this.cargo}
            Salario: ${this.salario}
            Activo: ${this.Activo}
            Equipo: ${this.equipo.join(", ")}
            `);

    }
}

let empleado1 = new Empleado("Sofia Perez","Desarrollador",3000);
let empleado2 = new Empleado("Teresa Ardila","Diseñador",2500);
let empleado3 = new Empleado("Carlos Gomez","Analista",2800);
let empleado4 = new Empleado("Luis Ramirez","Tester",2200);

let lider1 = new Lider("Ana Torres",5000,["Sofia Perez","Teresa Ardila"]);
let lider2 = new Lider("Jorge Martinez",5500,["Carlos Gomez","Luis Ramirez"]);

let totalMensual = empleado1.salario+empleado2.salario+empleado3.salario+empleado4.salario+lider1.salario+lider2.salario;
console.log(`El total Anual de salarios es: ${totalMensual * 12}`);

empleado3.desactivar();

console.log(empleado3.info());

lider2.desactivar();

console.log(lider2.info());

console.log(lider1.info());
lider1.presentarEquipo();

console.log(lider2.info());
lider2.presentarEquipo();

