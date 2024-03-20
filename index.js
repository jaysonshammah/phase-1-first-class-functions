function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("THis is a named Function");
    };
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is an anonymous function")
    };
}