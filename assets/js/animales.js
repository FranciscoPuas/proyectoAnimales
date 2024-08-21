export class Animal {
  constructor(edad, comentarios) {
    this.edad = edad;
    this.comentarios = comentarios;
  }

  get nombre() {
    return this.constructor.name;
  }

  get imagen() {
    return `${this.nombre}.jpg`;
  }

  get sonido() {
    return `${this.nombre}.mp3`;
  }
}

export class Leon extends Animal {
  constructor(edad, comentarios) {
    super(edad, comentarios);
  }

  rugir() {
    console.log("El león ruge");
  }
}

export class Lobo extends Animal {
  constructor(edad, comentarios) {
    super(edad, comentarios);
  }

  aullar() {
    console.log("El lobo aulla");
  }
}
export class Oso extends Animal {
    constructor(edad, comentarios) {
      super(edad, comentarios);
    }
  
    gruñir() {
      console.log("El oso gruñe");
    }
  }
  
  export class Serpiente extends Animal {
    constructor(edad, comentarios) {
      super(edad, comentarios);
    }
  
    sisear() {
      console.log("La serpiente sisea");
    }
  }
  
  export class Aguila extends Animal {
    constructor(edad, comentarios) {
      super(edad, comentarios);
    }
  
    chillar() {
      console.log("El águila chilla");
    }
  }
  