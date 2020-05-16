// Write a function that returns the number of vowels used in a string.
// Vowels are the characters "a", "e", "i", "o" and "u".

function vowels(str){
  // Solution #1
  const letters = new Set(["a", "e", "i", "o", "u"])
  let count = 0;

  for (let char of str){
    if (letters.has(char)){
      count++
    }
  }

  return count;
}


// vowels("Hi There!");
vowels("Why do you ask?");
// vowels("Why?");