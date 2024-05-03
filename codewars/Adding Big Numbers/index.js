function addLargeNumbers(num1, num2) {
    let carry = 0;
    let result = '';
    let maxLength = Math.max(num1.length, num2.length);

    for (let i = 0; i < maxLength || carry; i++) {
        const sum = parseInt(num1[num1.length - 1 - i] || 0) + parseInt(num2[num2.length - 1 - i] || 0) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    return result;
}