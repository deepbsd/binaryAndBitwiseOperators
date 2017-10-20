function bitwise(n1, n2, arg){
	switch (arg) {
		case 'and':
			return n1&n2;
			break;
		case 'or':
			return n1|n2;
			break;
		case 'xor':
			return n1^n2;
			break;
		case 'not':
			return ~(n1&n2);
			break;
		default:
			return '3rd arg must be "and" or "or" or "xor"';

	}
}



module.exports = bitwise;