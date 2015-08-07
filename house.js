function House(numberOfDoors, numberOfWindows){
    this.numberOfDoors = numberOfDoors;
    this.numberOfWindows = numberOfWindows;
    this.toString = function(){
        if((numberOfDoors > 1 && numberOfWindows > 1) || (numberOfDoors < 1 && numberOfWindows < 1)){
            return "The house has " + numberOfDoors + " doors and " + numberOfWindows + " windows"
        }else if (numberOfDoors === 1 && numberOfWindows === 1){
          return "The house has " + numberOfDoors + " door and " + numberOfWindows + " window"
        }else if (numberOfDoors === 1 && numberOfWindows > 1){
          return "The house has " + numberOfDoors + " door and " + numberOfWindows + " windows"
        }else if (numberOfDoors > 1 && numberOfWindows === 1){
          return "The house has " + numberOfDoors + " doors and " + numberOfWindows + " window"
        }
    };
}

module.exports = House;