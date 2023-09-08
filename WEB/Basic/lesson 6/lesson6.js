alert("Lan dz");
console.log("Lan đz qua");

// các kiểu dữ liệu trong javascript
// Number: 1,2,3,4
// Boolean true false
// String chuỗi "Hoang Lan", "Duc Trung"
// Null: ko có j
// Undifined: giá trị ko xác định
// Array: chuỗi hay mảng, danh sách,...
// object: đối tượng

//cách khai báo biến
const c = 10 //hằng số
let name = 'Lan'; //biến số
var num = 13
var a = 3
var b = 4

console.log(a)

//Câu điều kiện
if (num%2 == 0){
    if (num%3 == 0){
        console.log(String(num) + 'là số chỉ số chia hết cho cả 2 và 3')
    }
    else{
        console.log(String(num) + 'là số chia hết cho 2 mà ko chia hết cho 3')
    }

}
else{
    console.log(String(num) + 'là số chia hết cho 2 mà ko chia hết cho 3')
}

a += 1 // a = a + 1
console.log(a)
