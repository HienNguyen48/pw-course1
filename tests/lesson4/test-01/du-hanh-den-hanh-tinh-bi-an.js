
let speed = 1000;
let time = 24;
let total = 0;
function calculateDistance(speed, time){
    total = speed * time;
    console.log(`Trả về khoảng cách đến hành tinh: ${total} km.`);
}

calculateDistance(speed,time);