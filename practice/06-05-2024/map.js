let arr = [1, 3, 5, 2, 4, 5, 10];
arr.map(x => {
    console.log(x)
})
console.log('-------------------------------')
arr.map((x, y) => {
    console.log(x + ' tai vi tri '+y)
})

// dùng mapp, in ra các phần tử chăn trong mảng

// Dùng map, tính tích các phần tử trong mảng