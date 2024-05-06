// Câu 1:Hàm arrow sumArray nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
const sumArray = (arr) => {
    let sum = 0; // Khởi tạo biến sum để lưu tổng
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Cộng dồn từng phần tử của mảng vào biến sum
    }
    return sum; // Trả về tổng cuối cùng
};

// Câu 2:Hàm arrow squareArray nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
const squareArray = arr => {
    const squaredArr = []; // Khởi tạo một mảng để lưu các phần tử đã được bình phương
    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] ** 2); // Bình phương từng phần tử của mảng và thêm vào mảng mới
    }
    return squaredArr; // Trả về mảng mới chứa các phần tử đã được bình phương
};

// Câu 3:Hàm arrow filterGreaterThan nhận vào một mảng số nguyên và một giá trị nguyên, và trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
const filterGreaterThan = (arr, value) => {
    const filteredArr = []; // Khởi tạo một mảng để lưu các phần tử lớn hơn giá trị
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            filteredArr.push(arr[i]); // Nếu phần tử lớn hơn giá trị, thêm vào mảng mới
        }
    }
    return filteredArr; // Trả về mảng mới chỉ chứa các phần tử lớn hơn giá trị
};

// Câu 4:Hàm arrow maxInArray nhận vào một mảng và trả về giá trị lớn nhất trong mảng. 
const maxInArray = arr => {
    if (arr.length === 0) {
        return undefined; // Trả về undefined nếu mảng rỗng
    }

    let max = arr[0]; // Gán phần tử đầu tiên của mảng làm giá trị lớn nhất
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Cập nhật giá trị lớn nhất nếu tìm thấy phần tử lớn hơn
        }
    }

    return max; // Trả về giá trị lớn nhất
};

// Câu 5:Hàm arrow avgArray nhận vào một mảng và trả về giá trị trung bình của các phần tử trong mảng.
const avgArray = arr => {
    if (arr.length === 0) {
        return 0; // Trả về 0 nếu mảng rỗng
    }

    const sum = arr.reduce((total, num) => total + num, 0); // Tính tổng các phần tử trong mảng
    return sum / arr.length; // Trả về giá trị trung bình
};
