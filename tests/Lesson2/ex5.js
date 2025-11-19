// lặp từ 1 => 100
// for(let i = 1; i <=100; i ++){
//     console.log(i);
// }

// Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
// for(let i = 1; i <=100; i ++){
//     if(i % 2 === 0){
//     console.log(`Số ${i} là số chẵn`);
//     }
// }
// Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”
// for(let i = 1; i <=100; i ++){
//     if(i % 2 === 2){
//     console.log(`Số ${i} là số lẻ`);
//     }
// }

//Gộp
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`Số ${i} là số chẵn`);
    } else {
        console.log(`Số ${i} là số lẻ`);
    }
}