

// This function takes a number and returns a string of the binary 
// representation of the number with zeros filled out to 32-bits of length
function toBinary(num){
    let zeros = "00000000 00000000 00000000 00000000"
    let newnumber = (num).toString(2)
    return zeros.substr(0,zeros.length-newnumber.length)+newnumber
}

// This function takes a 32-bit word string and returns its ones compliment
function invertBinary(str){
    let newStr = '';
    [...str].forEach(function(char){
        if (char === '1'){
            newStr += '0'
        } else if (char === '0'){
            newStr += '1'
        } else if (char === ' '){
            newStr += ' '
        }
    })
    return newStr
}

// This function takes a one's compliment as input and returns the twos 
// compliment of that string
function twosCompliment(str){
    let ptr = str.length-1

    while(str[ptr] !== '0'){
       if (str[ptr]==='1') { 
          str = str.substr(0,ptr)+'0'+str.substr(ptr+1) 
       }
       ptr--
    }

    str = str.substr(0,ptr)+'1'+str.substr(ptr+1)

    return str
}

//This function takes two decimal numbers and returns
//the Morton number in decimal format.  It calls the other 
//functions in this suite
function makeMorton(n1, n2){
    let newBinary = [];
    let bin1 = toBinary(n1)
    let bin2 = toBinary(n2)
    for (let n=bin1.length-1; n>=0; n--){
        newBinary.unshift([...bin2][n])
        newBinary.unshift([...bin1][n])
    }
    newBinary = newBinary.join('').toString()
    newBinary = newBinary.replace(/\s\s/g, ' ')
    //return newBinary
    return parseInt(newBinary.replace(/\s/g,''),2)
}


module.exports = {toBinary, invertBinary, twosCompliment, makeMorton}

let numbers = [10, 31, 18, 4, 6]

let binStrings = numbers.map( num => toBinary(num) )

let inversions = binStrings.map( str => invertBinary(str) )



for (let n=0; n<numbers.length; n++){
    console.log(
      "number: ",numbers[n],
      " binary: ",binStrings[n],
      " inversion: ",inversions[n],
      " twos compliment: ", twosCompliment(inversions[n]),
      " morton numbers of n, n*2: ", makeMorton(numbers[n], numbers[n]*2)
    )
}



