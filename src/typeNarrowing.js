function getCake(kind) {
    if (typeof kind === 'string') {
        return "Making ".concat(kind, " cake");
    }
    return "".concat(kind);
}
function orderChai(size) {
    if (size === "small") {
        return "small chai";
    }
    if (size === "medium" || size === "large") {
        return "make extra chai";
    }
    return "chai order #".concat(size);
}
var KulhadChai = /** @class */ (function () {
    function KulhadChai() {
    }
    KulhadChai.prototype.serve = function () {
        return "Serving Kulhad Chai";
    };
    return KulhadChai;
}());
var Cutting = /** @class */ (function () {
    function Cutting() {
    }
    Cutting.prototype.serve = function () {
        return "Serving Cutitng Chai";
    };
    return Cutting;
}());
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
var obj = new KulhadChai;
console.log(serve(obj));
