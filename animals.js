
class Animal {
    constructor(age){
        this.age = age; 
    }
    getValueInEuros(){
        return this.price * this.getWeightInKg();
    }
}

class Pig extends Animal {
    constructor( age){
        super(age)
        this.price = 4
    }
    getWeightInKg(){
        return this.weightInKg = Math.min(700, this.age * 2.3);
    }
}

class Cow extends Animal {
    constructor(age ){
        super(age)
        this.price = 5
    }
    getWeightInKg(){
    return this.weightInKg = Math.min(1200, this.age * 1.5);
    }
}

class Horse extends Animal {
    constructor(age ){
        super(age)
        this.price = 10
        
    }
    getWeightInKg(){
       return this.weightInKg = Math.min(1000, this.age * 1.7);
    }
}

module.exports = { Animal, Pig, Cow, Horse }