// let result = '5' ==5; // '5' ép về kiểu số 5 luôn
// let result1 = '5' ===5; // '5' là string khác với số 5 => vừa so sánh về giá trị, vừa so sánh về kiểu dữ liệu luôn => phải giống hết mới là tru, nếu chỉ đúng 1 trong 2 thì là false 
// let result2 = 5 ===5; //true vì vừa đúng kiểu dữ liệu và vừa đúng giá trị 

// console.log(result);
// console.log(result1);
// console.log(result2);

/* let result4 = '5' !==5;
 console.log(result4);
Toán tử !== là so sánh nghiêm ngặt (strict inequality).

Nó không ép kiểu trước khi so sánh.

'5' là string, còn 5 là number.

Vì khác kiểu dữ liệu, nên '5' !== 5 sẽ trả về true.

/*
let result5 = '5' !=5;//khác nhau về giá trị 
console.log(result5);

Toán tử != trong JavaScript là so sánh không chặt chẽ (loose inequality).

Khi dùng != hoặc ==, JavaScript sẽ ép kiểu (type coercion) trước khi so sánh.

Cụ thể ở đây:

'5' là string

5 là number

Khi so sánh '5' != 5, JS sẽ chuyển '5' sang số → Number('5') = 5.
Và tất nhiên 5 != 5 là false.
*/