class Person {
    private _name: string;
    public age: number;
    private favs: Array<string> = ['hi'];
    constructor(name: string, age: number, favs: Array<string>) {
        this.name = name;
        this.age = age;
        this.favs = this.favs|| favs;
    }
    get name(): string {
        return this._name;
    }
    set name(val: string) {
        this._name = val;
    }
    updateFavs(favs, type: 'clear' | 'update') {
        this.favs = favs;
    }
}

class Doctor extends Person {
    constructor(name: string, age: number, favs: Array<string>) {
        super(name, age, favs);
    }
}