let catalogo = [];

class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    ficha() {
        return `Título: ${this.titulo}\nGénero: ${this.genero}\nAño: ${this.anio}\nDisponible: ${this.disponible}`;
    }
    retirar() {
        this.disponible = false;
        return `${this.titulo}" ha sido retirado.`;
    }
    estado() {
        if (this.disponible) {
            return `${this.titulo} está disponible.`;
        } else {
            return `${this.titulo} no está disponible.`;
        }
    }

}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }
    duracionFormatada() {
        const horas = Math.floor(this.duracion / 60);
        const minutos = this.duracion % 60;
        return `${horas}h ${minutos}m`;
    }
    ficha() {
        return `${super.ficha()}\nDuración: ${this.duracionFormatada()}`;
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
    }
    registrarEpisodios(cantidad) {
        this.cantidad = cantidad;
    }
    totalTemporadas() {
        return this.cantidad * this.temporadas;
    }
    ficha() {    
            return `${super.ficha()}\nTemporadas: ${this.temporadas}\nEpisodios por temporada: ${this.cantidad}\nTotal episodios: ${this.totalTemporadas()}`;
    }
}

//peliculas agregar al catalogo

let pelicula1 = new Pelicula("The Godfather", "Mafia", 1972, 175);
let pelicula2 = new Pelicula("Openheimer", "Historia", 2023, 180);


//series agregar al catalogo
let serie1 = new Serie("the sopranos", "Mafia", 1999, 6);
let serie2 = new Serie("better call saul", "Drama", 2015, 6);

catalogo.push(pelicula1, pelicula2, serie1, serie2);

//mostrar catalogo
function mostrarCatalogo() {
for (let contenido of catalogo) {
    console.log(contenido.ficha());
    console.log("-------------");
}
}
function contarDisponibles() {
    let disponibles = 0;
    for (let contenido of catalogo) {
        if (contenido.disponible == true) {
            disponibles++;
        }
        
    }
    console.log(`Total de contenidos disponibles: ${disponibles}`);
}

mostrarCatalogo();
contarDisponibles();

serie1.registrarEpisodios(10);
serie2.registrarEpisodios(12);


pelicula2.retirar();
serie1.retirar();

mostrarCatalogo();

contarDisponibles();
