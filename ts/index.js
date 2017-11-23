function func1(types_arr, opt, def) {
    if (def === void 0) { def = 'default params'; }
    if (typeof types_arr !== 'undefined') {
        [].map.call(types_arr, function (o) {
            console.log(o);
        });
    }
    return [].shift.call(types_arr);
}
var types1 = [
    {
        name: 'type1 name',
        id: 1
    },
    {
        name: 'type2 name',
        id: 2
    }
];
var typeRet = func1(types1);
console.log(typeRet);
var ScopePreservingExample = {
    text: "Property from lexical scope",
    run: function () {
        var _this = this;
        setTimeout(function () {
            alert(_this.text);
        }, 1000);
    }
};
