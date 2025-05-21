let input = 'elephant auonda'

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []

for(let i=0; i < input.length; i++){
  //console.log(input[i])
  if(input[i] === 'e'){
      resultArray.push(input[i])
    }
  
  if(input[i] === 'u'){
      resultArray.push(input[i])
    }
  for (let j=0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i])
    }
  }
}

var resultString = resultArray.join('').toUpperCase()

console.log(resultString)