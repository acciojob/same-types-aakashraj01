function isSameType(value1, value2) {
    if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) {
        return true;
    } else if (typeof value1 === 'number' && typeof value2 === 'number') {
        return true;
    } else {
        return Object.prototype.toString.call(value1) === Object.prototype.toString.call(value2);
    }
}

// Test case with const value1 = NaN; const value2 = 123;
console.log(isSameType(NaN, 123));  // Returns true

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));