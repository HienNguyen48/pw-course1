// 1. Khởi động Tàu Vũ trụ K16
let departurePlanet = 'Trái Đất';
let mission = 'Khám phá Vũ trụ K16';
let crew = ['A', 'B', 'C', 'D', 'H', 'I', 'K'];

function launchShip(crew) {
  return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(
    ', '
  )} sẽ đồng hành cùng bạn trong chuyến
phiêu lưu ${mission} `;
}

console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
  return speed * time;
}

console.log(`Khoảng cách : ${calculateDistance(1000, 24)}`);

// // 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
  return time.toString(16);
}

console.log(convertTimeToHex(120));

// // 4. Khám phá kho báu
function decryptCode(input) {
  let result = '';
  for (let char of input) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(decryptCode('K16 Challenge'));

// // 5. Trở về Trái Đất
function returnToEarth() {
  console.log('Chuẩn bị trở về Trái Đất!');
}

returnToEarth();
