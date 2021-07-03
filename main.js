console.log('------------- # 4')
// Сумма чисел
function sum (y, z) {
    x = y + z;
    return x;
};
console.log('Сумма чисел 2 + 4 = ', sum(2, 4)); //  6
// Разница чисел
function subtract (y, z) {
    x = y - z;
    return x;
};
console.log('Разница чисел 3 - 1 = ', subtract(3, 1));// 2
// Произведение чисел
function multiply (y, z) {
    x = y * z;
    return x;
};
console.log('Произведение чисел 2 * 4 = ', multiply(2, 4));//  8
// Деление чисел
function divide (y, z) {
    x = y / z;
    return x;
};
console.log('Деление чисел 9 / 3 = ', divide(9, 3));// 3

console.log('------------- # 5');
function numbersUp(n) {
    if (n >= 1) {      
      numbersUp(n - 1);
      console.log('Значения с низу вверх', n);
     };
};
numbersUp(5) // 1, 2, 3, 4, 5

function numbersUp2 (n) {
for (let i = 1; i<=n; i++) {
    console.log('numbersUp2 = ', i);
    };
};
numbersUp2 (5);// 1, 2, 3, 4, 5

function numbersUp3 (n) {
    let i = 0;
    while (i < n) {        
        i++;        
        console.log('numbersUp3 = ', i);
    };
};
numbersUp3(5);// 1, 2, 3, 4, 5

console.log('------------- # 6');
function numbersDown(n) {
    if (n >= 1) {
      console.log('Значение сверху вниз = ', n);
      numbersDown(n - 1);
     };
};
numbersDown(5) // 5, 4, 3, 2, 1

function numbersDown2 (n) {
    let i = 0;
    while (i < n){
        console.log('numbersDown2 = ' , n);
        n--;                
    };
};
numbersDown2 (5);// 5, 4, 3, 2, 1

function numbersDown3 (n) {
    for (let i = 1; i <= n; n--) {
        console.log('numbersDown3 = ', n);
    };
};
numbersDown3 (5);// 5, 4, 3, 2, 1

console.log('------------- # 7');
function pow (x, n) {
    return Math.pow(x, n);
};
console.log('x в степени n = ', pow (3, 2));//  3 * 3 = 9

function pow2 (x, n) {
    return (n > 0) ? x * pow2 (x, n - 1) : 1;
};
console.log ('x в степени n = ', pow2 (2, 3));// 8

function pow3 (xp, np) {   
    let result = xp;
    for (let i = 1; i < np; i++) {        
        result *= xp;               
    };
    return result;
};
let xp = +prompt('X', 1);
let np = +prompt('N', 1);
alert(`Результата возведения ${xp} в степень ${np} равняется = ` + pow3(xp, np));
console.log('x в степени n = ', pow3 (xp, np));// Зависит от чисел введенных пользователем

let btnpow3 = document.getElementById('pow4');
    btnpow3.addEventListener('click', pow4);

function pow(x, n) {
    let result = x;      
    for (let i = 1; i < n; i++) {
        result *= x;
    }      
    return result;
};
    
function pow4() {
    let x = +prompt("Введите значение X");
    let n = +prompt("Введите значение N");
    pow(x, n);
      
    if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
    } else {
    alert(`Результата возведения ${x} в степень ${n} равняется = ` + pow(x, n));
    };
};

console.log('------------- # 8');
function isBigger(a, b) {
    if (a > b) {
        return true;
    }
        return false;
};
console.log (isBigger(5, -1)); //true

console.log('------------- # 9');
function isSmaller (a, b) {
    if (a < b) {        
        return true;
    }       
        return false;
};
console.log(isSmaller(5, -1));// false