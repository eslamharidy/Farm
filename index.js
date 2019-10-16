


class Farm {
    constructor(name) {
      // ...
      this.name = name;
      this.crops = [];
      this.animals = [];
    }
    addCrop(crop) {
      this.crops.push(crop)
    }
    calculateIncome() {
      // calculate total income!
      return this.crops.map(crop => crop.getYieldInEuros()).reduce((a,b) => a + b, 0) 
      + this.animals.map(animal => animal.getValueInEuros()).reduce((a,b) => a + b, 0)

    }
    addAnimal(animal){
      this.animals.push(animal)
    }
    printReport() {
      console.log(`
   ----------------------
   - Farm: FARM NAME    -
   - No. of crops: ${this.crops.length}   -
   - No. of animals: ${this.animals.length} -
   - Total income: ${this.calculateIncome()}€ -
   ----------------------
      `)
    }
  }
  module.exports.Farm = Farm
