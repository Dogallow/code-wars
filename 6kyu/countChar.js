// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {
    // The function code should be here
    let countObj = {}
    for (let i = 0; i<string.length; i++){
      let letter = string[i]
      console.log(string[i])
      if (Object.keys(countObj).includes(string[i])){
        countObj[letter]++
      }else {
        countObj[letter]= 1
      }
    }
     return countObj
  }
