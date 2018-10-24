let fixBitwise = function(num, bit, operation) {

    let mask = (num << (bit-1))

    switch (operation){
        case 'get':
            return mask
            break;
        case 'set':
            return num |= mask
            break;
        case 'clear':
            return num &= ~mask
            break;
        case 'toggle':
            return num ^= mask
            break;
        default:
            // see if a bit is set
            if ((num & mask) != 0){
                return 'bit is set'
            }else{
                return 'bit is NOT set'
            }
            break;
    }


}

num = 514
binary = num.toString(2)
bit = 9

console.log( 'NUM: ',num,'BIN: ', binary, ' STATUS: ', fixBitwise(num, bit, 'toggle'), ' MASK: ',(num << (bit-1)).toString(2)  )
