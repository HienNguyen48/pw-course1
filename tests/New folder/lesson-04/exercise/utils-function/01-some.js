const scores = [85, 90, 78];
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"];

// 5.1 Kiểm tra scores có giá trị nào > 80 không.
const isGraterThan80 = scores.some((score) => score > 80);
console.log(isGraterThan80);

// 5.2 Kiểm tra ages có giá trị nào < 18 không.
const isLessThan18 = ages.some((age) => age < 18);
console.log(isGraterThan80);

// 5.3 Kiểm tra words có từ nào dài > 5 không.
const isLengthGraterThan5 = words.some((word) => word.length > 5);
console.log(isLengthGraterThan5);
