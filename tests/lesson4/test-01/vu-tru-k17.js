let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K17";
let crew = ['Uyen','Ngọc','Hoa','Na','Chi','Minh','Liên','Sinh'];
function launchShip(crew){
    for( let crews of crew){
        console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crews} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}.`);
    }
}
launchShip(crew);