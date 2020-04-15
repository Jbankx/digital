let firstName; 
let lastName; 
let age = 30; 
let lightOn =  true; 

function lightSwitch() {
    if (lightOn == true) {
        lightOn = false
        console.log(lightOn)
    }
    else {
        lightOn = true
        console.log(lightOn)
    }
}

lightSwitch()
lightSwitch()
lightSwitch()

let numberOne;
let numberTwo;
let total;

function addition() {
    total = numberOne + numberTwo
    console.log(total)
}

addition(20, 30)
addition(70, 20)
addition(50, 50)


console.log(lightOn)