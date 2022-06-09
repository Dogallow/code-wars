// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


function toWeirdCase(string){
    //TODO
    let newStr = string.split(' ')

    let arr = []

    for (let i = 0; i<newStr.length; i++){
      let word = newStr[i]
              let weirdStr = ''

        for (let j = 0; j<word.length; j++){
          let letter = word[j]
          if(j%2 === 0){
            weirdStr += letter.toUpperCase()
          } else {
            weirdStr += letter
          }
        }
       word = weirdStr
       arr.push(word)
    }
    return arr.join(' ')

  }
