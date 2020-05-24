var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
    }
    car.prototype.start = function () {
        alert('Engine Started' + this.engine);
    };
    car.prototype.stop = function () {
        alert('Engine Stopped' + this.engine);
    };
    return car;
}());
window.onload = function () {
    var Car = new car("HondaCity");
    Car.start();
    Car.stop();
};
//# sourceMappingURL=file.js.map