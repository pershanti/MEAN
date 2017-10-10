// Create a new class called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja

function Ninja(name, health=100) {
    this.name = name
    this.health = health
    var speed = 3
    var strength = 3
    var self = this

    function getSpeed() {
        return speed
    }

    function getStrength() {
        return strength
    }

    this.sayName = function(){
        console.log(this.name)
    }
    this.showStats = function(){
        let speed = getSpeed()
        let strength = getStrength()
        console.log("Speed: "+ speed +" Strength: " + strength)
    }
    this.drinkSake = function () {
        this.health += 10
    }
}

var ninja1 = new Ninja("Shantini")
ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()
