// 1000 Lights

// You have a bank of switches before you, numbered from 1 to count. Every
// switch is connected to exactly one light that is initially off. You walk down
// the row of switches and toggle every one of them, that is, you flip every
// switch. All the lights are now on. You walk back to the beginning of the row
// and start another pass. On this second pass, you toggle switches 2, 4, 6, and
// so on. Now, every other light is on. On the third pass, you go back to the
// beginning again, this time toggling switches 3, 6, 9, and so on. You continue
// to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after count passes.

// Understand the Problem:
// Input: a number, representing N passes to make
// Ouput: a list of the lights that are on after completing all the passes
// Rules:
//  - each round toggle the switches tha are divisible of round number
//  - example:
//    - 1st round: turn all lights on because every switch is multiple of 1
//    - 2nd round: toggle all switches that are multiple of 2
//    - 3rd round: toggle all switches that are multiple of 3


// Data Structure:
// Input: 
//  - integer
//  - Object
// Output: array

// Algorithm:

// initialiseSwitches function
// - set switches to an empty object ({})
// - set counter to 1
// - start a loop that ends when the counter is more than N (input)
//   - each time add a property to switches
//    - switches[counter] = false
//   - increase counter by 1
// - end loop
// return switches

// ligthsOn function
// - set switches = initialiseSwitches(N)
// - set round = 1;
// - start a loop that ends when round is more than N
//   - iterate over the switches
//    - if the current switch is multiple of round
//     - toggle the value of the switch
//   - icrement round by 1
// - end loop
// - set lightsOnArray to filtered out the switches that have a true value
// - convert all the element's value in lightsOnArrat array to Number type and return

function initialiseSwitches(number) {
  const switches = {};
  for (let property = 1; property <= number; property += 1) {
    switches[property] = false;
  }

  return switches;
}

function lightsOn(numSwitches) {
  const switches = initialiseSwitches(numSwitches);
  for (let round = 1; round <= numSwitches; round += 1) {
    for (let key in switches) {
      if (Number(key) % round === 0) {
        switches[key] = !switches[key]
      }
    }
  }

  const ligthsOnArray = Object.keys(switches).filter((key) => switches[key])
  return ligthsOnArray.map((num) => Number(num));
}

// Example / Test Cases
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]