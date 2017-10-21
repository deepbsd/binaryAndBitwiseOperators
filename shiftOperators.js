function shift(n1, n2, arg){
	switch (arg){
		case '>>':
			return n1 >> n2;
			break;
		case '<<':
			return n1 << n2;
			break;
		case '>>>':
			return n1 >>> n2;
			break;
		default:
			return 'arg can only be ">>" or "<<" or ">>>"';
	}
}

function leftShift2(n1, n2){
	var a = n1.toString(2);
	for (var n=0; n<n2; n++){
		a = a+'0';
	}
	return parseInt(a, 2);
}

function leftShift3(n1, n2){
	return n1*(Math.pow(2,n2))
}

function rightShift2(n1, n2){
	var a = (n1).toString(2);
	s = (a[0] === '-') ? '1' : '0';
	if (a[0] === '-') { a.slice(0,1,''); }
	for (var n=0; n<n2; n++){
		a = s+a.slice(0,a.length-1);
	}
	return parseInt(a, 2);
}



module.exports = {shift,leftShift2,leftShift3,rightShift2};