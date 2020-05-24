class Engine {
    constructor(public horsepower: number, public engineType: string){}
}
class Car {
    private _engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    get engine() :Engine {
        return this._engine;
    }

    set engine(value: Engine)  {
        if (value == undefined) throw 'Please Supply a value';
        this._engine = value;
    }

    start(): void {
        alert('Car engine started ' + this._engine.engineType);
    }
}

window.onload = function () {
    var engine = new Engine(1234, 'Test');
    var car = new Car(engine);
    alert(car.engine.engineType)
    car.start();
};
