
function abc(num, operator) {
    return operator ?operator(num):num;
}

function zero(o) {return execute(0, o)}
function one(o) {return execute(1, o)}
function two(o) {}
function three(o) {}
function four(o) {}
function five(o) {}
function six(o) {}
function seven(o) {}
function eight(o) {}
function nine(o) {}

function plus(num1) {return function(num2){return num1 + num2}}
function minus() {}
function times() {}
function dividedBy() {}
