/* Cú pháp if... else
    if(condition){
         logic code
    }else{
        logic code
    }
*/
//if...else
// let score =  8;
// if (score >=8){
//     console.log('Học sinh giỏi');
// }else{
//     console.log('Học sinh khá hoặc trung bình');
// }

//if...else...if
// let score1= 2;
// if (score1 >=8){
//     console.log('Học sinh giỏi');
// }else if(score1 <6 &&  score1 <8){
//     console.log('Học sinh khá');
// }else{
//     console.log('Học sinh trung bình');
// }

let month = 11;
switch(month){
    case 11:
        console.log('có 30 ngày');
        break;
    case 12:
        console.log('có 31 ngày');
        break;
    default:
        console.log('Tháng không hợp lệ');
}