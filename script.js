function isSameType(value1, value2) {
    if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) {
        return true;
    } else {
        return Object.prototype.toString.call(value1) === Object.prototype.toString.call(value2);
    }
}
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));