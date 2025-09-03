function hello (){
    console.log(`hello world`);
}
for(let i = 0; i<10; i++){
    hello();
}


//tính tổng a & b ( a, b được gọi là parameter)
function total(a,b){
    return a + b;
}
//dùng 1 biến để hứng kết quả trả về
const total =  sum(5,3);
console.log(total);
