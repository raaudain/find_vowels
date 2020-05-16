// Write a function that returns the number of vowels used in a string.
// Vowels are the characters "a", "e", "i", "o" and "u".

function vowels(str){
  // // Solution #1
  // const letters = new Set(["a", "e", "i", "o", "u"])
  // let count = 0;

  // for (let char of str.toLowerCase()){
  //   if (letters.has(char)){
  //     count++
  //   }
  // }

  // return count;

  
  // Solution #2
  let count = 0;
  const letters = "aeiou"

  for (let char of str.toLowerCase()){
    if(letters.includes(char)){
      count++
    }
  }

  return count;

  // console.log(str.match(/[aeiou]/g).length)
  
  //  ? 0 : str.match(/[aeiou]/g).length;
}


// vowels("Hi There!");
// vowels("Why do you ask?");
vowels("Why?");