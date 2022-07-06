interface Person {
    name: string;
    age: number;
    greet(phrase:string): void;
}

const user1: Person = {
    name: 'max',
    age: 18,
    greet: (phrase: string) => {
        console.info(`${phrase}, my name is ${user1.name}`);
    }
}

user1.greet('Hi there');

interface Named {
    readonly name: string;
    lastName?: string
}

interface Greetable extends Named {
    greet(phrase:string): void;
}

interface addFn {
    (a: number, b: number): number
}

const add: addFn = (number1: number, number2: number) => {
    return number1 + number2;
}

class Person implements Greetable {
    constructor(public name: string, public lastName?: string){

    }

    greet(this: Person, phrase: string): void {
        console.info(`${phrase}, my name is ${this.name} ${this.lastName || 'without last name'}`);
    }
}

const person1 = new Person('Pepito');
person1.greet('whatsapp');