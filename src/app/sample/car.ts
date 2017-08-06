class Engine {

}


class Car {
    eng: Engine;

    constructor() {
        this.eng = new Engine();
    }
}

class Car2 {
    eng: Engine;
    constructor(eng: Engine) {
        this.eng = eng;
    }
}

let car: Car = new Car();

let eng: Engine = new Engine();
let car2: Car2 = new Car2(eng);

