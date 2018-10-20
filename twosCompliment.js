var toBinary = function(num){
	num = parseInt(num);
	return (-num >>> 0).toString(2);
}

var numbers = [23, 14, -18, 91, 20]

 numbers.forEach(function(num){
 	console.log('Number: ',num,'Binary: ',toBinary(num))
 })

module.exports = toBinary;
//export default toBinary;
