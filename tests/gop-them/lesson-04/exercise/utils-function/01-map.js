const scores = [85, 90, 78];

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
const adjustScores = scores.map((score) => {
  if (score < 90) {
    return score + 0.1 * score;
  } else {
    return score - 0.05 * score;
  }
});
console.log(adjustScores);

const numbers = [1, 2, 3];
 
// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
const toStr = numbers.map(num => num.toString());
console.log(toStr);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.
const arrDouble = numbers.map(num => num * 2);
console.log(arrDouble);