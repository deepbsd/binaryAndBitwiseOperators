// This function takes a number and returns a string of the binary 
// representation of the number with zeros filled out to 32-bits of length


function toBinary(num){
    let zeros = "00000000 00000000 00000000 00000000 00000000 00000000"
    let newnumber = (num).toString(2)
    return zeros.substr(0,zeros.length-newnumber.length)+newnumber
}

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

function twosCompliment(str){
    let ptr = str.length-1
    console.log("ptr ",ptr, " char: ",str[ptr])

    while(str[ptr] !== '0'){
       if (str[ptr]==='1') { 
          str = str.substr(0,ptr)+'0'+str.substr(ptr+1) 
       }
       ptr--
    }

    str = str.substr(0,ptr)+'1'+str.substr(ptr+1)

    return str
}








let numbers = [10, 31, 18, 4, 6]

let binStrings = numbers.map( num => toBinary(num) )

let inversions = binStrings.map( str => invertBinary(str) )



for (let n=0; n<numbers.length; n++){
    console.log(
      "number: ",numbers[n],
      " binary: ",binStrings[n],
      " inversion: ",inversions[n],
      " twos compliment: ", twosCompliment(inversions[n])
    )
}



