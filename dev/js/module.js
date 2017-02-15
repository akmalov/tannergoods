var second = function() {
    console.log('works Second module!');
};
var first = function() {
    console.log('works Second module!!!');
};
module.exports = {
    func1: first,
    func2: second
};