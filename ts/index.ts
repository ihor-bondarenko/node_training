interface Type1 {
    name: string,
    id: number
}

/*function func1(types_arr?: Type1[], opt?: any, def: any = 'default params'): Type1 {
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

var ScopePreservingExample = {
    text: "Property from lexical scope",
    run: function () {
        setTimeout(() => {
            alert(this.text);
        }, 1000);
    }
};*/

interface GroupInterface {
    name: string,
    genre: string
}

class Group implements GroupInterface {   
    constructor(public name: string, public genre: string) {}

    public getGroupName() {
        return this.name;
    }
}

class Album {
    constructor(private group: Group, private name?: string) {
        //console.log(name);
    }

    public getAlbumName(): string {
        return this.name;
    }

    public getGroupName(): string {
        return this.group.getGroupName();
    }
}

const album = new Album(new Group('Mgla', 'Black Metal'), 'Exercises in futility');
console.log(album.getGroupName());