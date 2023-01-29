// this will be a function that can validate an anagram through indexing instead of for loops

export const anagramByIndex = (string1 = "", string2 = "") => {
  //validate the length and the type
  if (string1.length !== string2.length) {
    console.log(`The length of the strings are not the same therefore: Fasle`);
    return;
  }
  if (typeof string1 !== "string" || typeof string1 !== "string") {
    console.log(
      `The type of both arguments have to be strings, therefore: False`
    );
    return;
  }
  //initiate a map

  const sharedMatrix = new Map();

  for (let x = 0; x < string1.length; x++) {
    //both lists share a a same set and we can iterate once by index and add the keys sequentially after both strings
    // have been mapped to the shared

    let letter = string1[x];
    if (sharedMatrix.has(letter)) {
      //do something
      //var letter = string1[x];

      sharedMatrix.set(letter, sharedMatrix.get(letter) + 1);
    } else {
      // do something
      sharedMatrix.set(letter, 1);
    }

    letter = string2[x];
    if (sharedMatrix.has(letter)) {
      //do something
      //var letter = string2[x];
      sharedMatrix.set(letter, sharedMatrix.get(letter) - 1);
    } else {
      // do something
      sharedMatrix.set(letter, -1);
    }

    // the shared matrix values should all be 0 so you valide that the sum is 0
  }

  let count = 0;

  for (let val of sharedMatrix.values()) {
    count++;
    console.log(`The is the count: ${count}`);
    console.log(val);
    if (val !== 0) return false;
  }

  return true;
};

/// added a line just because
// added more to the code base
