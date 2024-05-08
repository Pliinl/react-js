f1()
let f1 = () => { };
f11();
function f1() { }

// Vị trí sử dụng

// function ten(x, y,z) {
//     ...a 
//     return kết quả
// }

// let ten = (x, y, z) => {
//     ...A 
//     return keesst quả
// }
let arr = [1, 3, 5, 2, 4, 5, 10];
let sumArray = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]))
let squareArray = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i]);
    }
    return newArr;
}
console.log(squareArray(arr))

let filterGreaterThan = (arr, x) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterGreaterThan(arr, 4))

let maxInArray = arr => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
console.log(maxInArray(arr))
let avgArray = arr => sumArray(arr)/arr.length;

console.log(avgArray(arr))
let f22 = a => { // chỉ cho 1 tham số

}

function f2(a) {

}

let f33 = () => 10; // chỉ có câu lệnh reture => bỏ ngoặc nhọn, bỏ reture

function f3() {
    return 10;
}
