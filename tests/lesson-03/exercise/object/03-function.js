// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng
// Gọi hàm với 2 cặp giá trị khác nhau.

function multiply (a, b) {
  return a * b;
}

console.log(multiply(5, 10));
console.log(multiply(15, 20));

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. 
// Gọi hàm và in kết quả với 2 bộ số khác nhau
function findMin(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;
}

console.log(findMin(5, 10, 50));
console.log(findMin(10, 10, 2));

// 3. Viết hàm getTopStudents nhận 2 tham số:
  // students: mảng các object, mỗi object chứa name (tên) và score (điểm).
  // threshold: ngưỡng điểm để được coi là "top" (số).
  // Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold. Gọi hàm với danh sách thực tế và in kết quả.
function getTopStudents(students, threshold) {
  let topStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topStudents.push(students[i].name)
    }
  }
  return topStudents;
}

let studentList = [
  { name: "An", score: 85 },
  { name: "Bình", score: 92 },
  { name: "Cường", score: 78 },
  { name: "Dung", score: 95 }
];

let result = getTopStudents(studentList, 90);

console.log(result);

// 4. Viết hàm calculateInterest
// Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm
// total = principal + principal * rate * years / 10

function calculateInterest(principal, rate, years) {
  const total = principal + (principal * rate * years / 100);
  return total;
}

console.log(calculateInterest(1000000, 5, 1));
