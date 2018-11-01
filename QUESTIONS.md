Hey Alanna,

The main problem is that there are no answers given in the curriculum that I can compare my code to.  I can easily (?) write code that provides answers, but there are several ways they can be provided.  It's hard to know whether I'm on the right track unless I can compare my code to some sort of gist or repo or something.  Then I can follow the reasoning.  
Here's an example.  The lesson on Twos Compliment uses examples with 4 8-bit words.  The exercise says to follow the recipe provided (1. invert all bits of the current number, 2. add one to the very end of the inverted bits), but the "hint" of using the "~" operator doesn't provide an answer in that specified format, and neither does using (N << 2).toString(2).  In fact, these approaches do not follow the recipe at all.  They each provide a string of characters with leading zeros removed and without inverted bits.  They provide what I think are the right answers, yet the instructions do not lead one to believe that.  So I additionally went back and provided a different approach that provided a string of inverted bits with one added to the last bit:

```
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
```

This assignment bothered me, because it seemed actually to be more about string manipulation.  Unless the "clue" was intended to be a red herring?  Or perhaps the chapter just wasn't edited very carefully.
Another example.  The memory.js gist used in the Array lesson.  The free() method was left completely empty.  Not a huge deal, but I would have liked to see how to free the memory.  My guess was resetting the HEAD to zero rather than to the memory.length value.  Leaving the method completely empty makes me wonder whether anyone edited the curriculum content.
Also in the Arrays chapter, there's an exercise where we're asked to merge two sorted arrays into a single sorted array.  I couldn't think of a way, so I googled it and found the idea of using two pointers, one for each array, and only incrementing each pointer when the value in that position of its array (the array belonging to that pointer) is copied onto the new resulting array.  If I'm not mistaken, that idea is the essence of a Merge Sort, which was actually invented by John Von Neumann in 1945.  I have to assume it was anticipated that we would use Google and not be expected to re-invent this algorithm or duplicate its creator's genius.  After finding the idea implemented elsewhere, I eventually came up with:

```
function newSort(arr1, arr2){
    let newArr = []
    // Create a left and right pointer that each increment when that value is added to newArr
    // Continue incrementing until all values in both arrays are exhausted
    let l_ptr=0, r_ptr=0
    while (l_ptr+r_ptr < arr1.length+arr2.length){
        // arr1 uses left_ptr and arr2 uses right_ptr
        if (l_ptr >= arr1.length || arr1[l_ptr] >= arr2[r_ptr] ){
          // r_ptr is only incremented after the value is pushed onto newArr
          newArr.push(arr2[r_ptr++])
        }
        else{
          newArr.push(arr1[l_ptr++])
        }
        //console.log("newArr: ", newArr)
    }
   return newArr
}
 //arrOne = [1, 3, 6, 8, 11]
 //arrTwo = [2, 3, 5, 8, 9, 10]
arrOne = [ 1,2,3,4,5 ]
arrTwo = [ 6, 9, 15, 33 ]
console.log(newSort(arrOne, arrTwo))
```

It works, so I guess it's okay.  But it would have been nice to see an answer to check against.  My mentor couldn't say for sure either.  I could be right on or I could be way off.
There was also an assignment to create a function that would multiply an a array of integers together and produce an array of values where each value in the resulting array is the product excluding the value in the same position as the input array.  That is, an input array of [1,2,3] would produce an output array of [6,3,2], because output[0] must exclude the value of '1' from the product, output[1] must exclude the value of '2' from the product, and so forth.  The following code produces the desired result:

```
function arrayProducts(arr){
    let newArr = []
    let product = arr.reduce( (a,b) => a*b )
    for (let n=0; n<arr.length; n++){
        newArr.push(product/arr[n])
    }   
    return newArr
}
```

But I have no idea whether that was the intended solution.  It actually calls for iterating over the array twice, once to create the product and a second time to divide the product by the positional value in the input array.  But was I expected to iterate only once?  
Once again, it provides the right answer, but am I right on or way off?  I have no idea.
I suppose I'll get an idea after my interview, but it would be nice to have an idea how far off I am, or not, *before* the interview, wouldn't it?
Thanks!
Dave
