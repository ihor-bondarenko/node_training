interface Type1 {
    name: string,
    id: number
}

function func1(types_arr?: Type1[], opt?: any, def: any = 'default params'): Type1 {
    if(typeof types_arr !== 'undefined') {
        [].map.call(types_arr, o => {
            console.log(o);
        })
    }
    return [].shift.call(types_arr);
}

let types1 = [
    {
        name: 'type1 name',
        id: 1
    },
    {
        name: 'type2 name',
        id: 2
    }
]

let typeRet = func1(types1);
console.log(typeRet);

var ScopePreservingExample = {
    text: "Property from lexical scope",
    run: function () {
        setTimeout(() => {
            alert(this.text);
        }, 1000);
    }
};
    