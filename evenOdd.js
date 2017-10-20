function isOdd(num){
	var binary = parseInt(num).toString(2);
	return 1&parseInt(binary[binary.length-1]);
}



module.exports = isOdd;