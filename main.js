console.log('------------- # 4')
// Сумма чисел
function sum (y, z) {
    let x = y + z;
    return x;
};
console.log('Сумма чисел 2 + 4 = ', sum(2, 4)); //  6
// Разница чисел
function subtract (y, z) {
    let x = y - z;
    return x;
};
console.log('Разница чисел 3 - 1 = ', subtract(3, 1));// 2
// Произведение чисел
function multiply (y, z) {
    let x = y * z;
    return x;
};
console.log('Произведение чисел 2 * 4 = ', multiply(2, 4));//  8
// Деление чисел
function divide (y, z) {
    let x = y / z;
    return x;
};
console.log('Деление чисел 9 / 3 = ', divide(9, 3));

console.log('------------- # 5');
function numbersUp(n) {
    if (n >= 1) {      
      numbersUp(n - 1);
      console.log('Значения с низу вверх', n);
     };
};
numbersUp(5) // 1, 2, 3, 4, 5

console.log('------------- # 6');
function numbersDown(n) {
    if (n >= 1) {
      console.log('Значение сверху вниз = ', n);
      numbersDown(n - 1);
     };
};
numbersDown(5) // 5, 4, 3, 2, 1

console.log('------------- # 7');
function pow (x, n) {
    let sqr = Math.pow(x, n);
    return sqr;
};
console.log('x в степени n = ', pow (3, 2));//  3 * 3 = 9

function pow2 (x, n) {
    return (n > 0) ? x * pow (x, n - 1) : 1;
  }
console.log ('x в степени n = ', pow2 (2,3))

console.log('------------- # 8');
function isBigger(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}
console.log (isBigger(5, -1)); //true

console.log('------------- # 9');
function isSmaller (a, b) {
    if (a < b) {        
        return true;
    } else {        
        return false;
    };
};
console.log(isSmaller(5, -1));// false