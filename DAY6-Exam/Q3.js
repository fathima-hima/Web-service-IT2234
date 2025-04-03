function getMaxNumber(num) {
    if (num < 10) return num;

    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''), 10);
}

console.log("Input Number = 215  "," Max = ",getMaxNumber(215));
console.log("Input Number = 1093 "," Max = ",getMaxNumber(1093)); 