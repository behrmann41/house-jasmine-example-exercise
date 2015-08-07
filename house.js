function House(numberOfDoors, numberOfWindows){
    this.numberOfDoors = numberOfDoors;
    this.numberOfWindows = numberOfWindows;
    this.toString = function(){
        var houseString = (numberOfDoors != 1) ? "doors" : "door";
        var windowString = (numberOfWindows != 1) ? "windows" : "window";
            return "The house has " + numberOfDoors + " " + houseString + " and " + numberOfWindows + " " + windowString;
    };
}

module.exports = House;
