function coding() {
    let originalStr = '1010';
    let bits = originalStr.split('').map(Number);
    let result = [];
    for (let i = 0; i < bits.length; i++)
        result.push(bits[i]);
    result.push(getParityBit(bits[0], bits[1], bits[2]));
    result.push(getParityBit(bits[0], bits[1], bits[3]));
    result.push(getParityBit(bits[0], bits[2], bits[3]));
    console.log(result.join(''));
}

function getParityBit(n1, n2, n3) {
    return (n1 + n2 + n3) % 2
}

function decoding() {
    let originalStr = '1010010';
    let bits = originalStr.split('').map(Number);
    let parityBits = [];
    let result = [];
    parityBits.push(getParityBit(bits[0], bits[1], bits[2]));
    parityBits.push(getParityBit(bits[0], bits[1], bits[3]));
    parityBits.push(getParityBit(bits[0], bits[2], bits[3]));
    let errorBit = -1;
    if (bits[4] != parityBits[0] && bits[5] != parityBits[1] && bits[6] != parityBits[2])
        errorBit = 0;
    else if (parityBits[0] != bits[4] && bits[5] != parityBits[2])
        errorBit = 1;
    else if (bits[4] != parityBits[0] && bits[6] != parityBits[2])
        errorBit = 2;
    else if (bits[5] != parityBits[1] && bits[6] != parityBits[2])
        errorBit = 3;
    if (errorBit != -1)
        bits[errorBit] = (bits[errorBit] + 1) % 2
    for (let i = 0; i < 4; i++) {
        result[i] = bits[i];
    }
    console.log(errorBit);
    console.log(result.join(''));
}
coding();
decoding();
