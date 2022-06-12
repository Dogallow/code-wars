// Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

// Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:

// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]


// loop through the string
// count the consecutive amount of letters and store them in an array with their value and the character.
// how to let the counter and variable know when the letter switches
//        some kind of condition if current letter  === char else
                                                      //push current letter and counter into arr
                                                        //set current letter to new char and reset counter


var runLengthEncoding = function(str){
let currentChar = str[0]
let currentValue = 1
let arr = []
if(str.length === 0) return arr
for (let i = 1; i <= str.length; i++){
  let letter = str[i]
  
  if(currentChar === letter){
    currentValue++;
  } else {
    arr.push([currentValue, currentChar])
    currentChar = letter;
    currentValue = 1
  }
  
}

  return arr // << fix this
}
// https://www.codewars.com/kata/546dba39fa8da224e8000467
