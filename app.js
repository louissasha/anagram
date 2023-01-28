//anagram test
import { anagramByIndex } from "./anagramIndex.js";
//const anagramByIndex = require("./anagramIndex.js");
const anagram = (str1 = "", str2 = "") => {
  if (str1.length !== str2.length)
    return console.log("The values dont have the same length, terminating...");
  if (typeof str1 !== "string" || typeof str1 !== "string")
    return console.log("The values both have to be s");
  const freq1 = new Map();
  const freq2 = new Map();
  for (letter of str1) {
    console.log(letter);
    if (freq1.has(letter)) {
      freq1.set(letter, freq1.get(letter) + 1);
      // add to occurences
      console.log(freq1.get(letter));
    } else {
      freq1.set(letter, 1);
    }
  }

  console.log(freq1);

  for (letter of str2) {
    console.log(letter);
    if (freq2.has(letter)) {
      freq2.set(letter, freq2.get(letter) + 1);
      // add to occurences
      console.log(freq2.get(letter));
    } else {
      freq2.set(letter, 1);
    }
  }

  console.log(freq2);

  //compare the 2 maps together
  for (item of freq1) {
    // iterate through the first map
    //compare each item to the same item on the next list
    console.log(
      `The value being tested is: ${item[0]} and value is: ${item[1]}`
    );
    if (freq2.has(item[0])) {
      //compare the amount of repetitions
      console.log(
        `The value for: ${item[0]} inside the second array is: -> ${freq2.get(
          item[0]
        )}`
      );
      if (freq2.get(item[0]) !== item[1]) {
        console.log(
          `The values inside the array for letter: \"${item[0]}\" did not pass. Test Failed.`
        );
        return false;
      }
      console.log("--> It passed!!!");
    } else {
      console.log(`The letter ${item[0]} is not in the second word`);

      return false;
    }
  }
  return true;
};

//console.log(anagram("cah", "cashew"));

console.log(anagramByIndex("cahews", "cashew"));
