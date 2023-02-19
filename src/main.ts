export class Person{

    constructor(private name: string, private age:number){}

    askAge(){
        return this.age
    }

    askName(){
        return this.name
    }

    greet(){
        return `hi! my name is ${this.name}.`
    }

    talk(){
        return `${this.name} is talking!`
    }

    walk(){
        return `${this.name} is walking!`
    }

}