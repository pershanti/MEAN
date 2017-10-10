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

    function setStrength(num){
        strength += num
    }
    

    this.updateStrength = function (num) {
        setStrength(num)
    }

    this.sayName = function(){
        return this.name
    }
    this.showStats = function(){
        let speed = getSpeed()
        let strength = getStrength()
        console.log("Speed: "+ speed +" Strength: " + strength)
    }
    this.drinkSake = function () {
        this.health += 10
    }

    this.punch = function (ninja) {
        ninja.updateStrength(-5)
        console.log(ninja.sayName()+" was punched by " + this.sayName())
    }

    this.kick = function (ninja) {
        let amount = -15 * getStrength()
        ninja.updateStrength(amount)
        console.log(ninja.sayName()+" was kicked by " + this.sayName())
    }
}

var ninja1 = new Ninja("NinjaGod")
var ninja2 = new Ninja("NinjaDemon")

ninja1.punch(ninja2)
ninja1.kick(ninja2)
ninja2.showStats()

