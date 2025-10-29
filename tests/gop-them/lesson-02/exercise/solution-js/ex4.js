const chieuCao = 170;
const soLeChieuCao = chieuCao % 100;
const canNangLyTuong = (soLeChieuCao * 9) / 10;
const mucCanToiDa = soLeChieuCao;
const mucCanToiThieu = (soLeChieuCao * 8) / 10;

console.log("Cân nặng lý tưởng: " + canNangLyTuong + " - " + "Cân nặng tối đa: " + mucCanToiDa + " - " + "Cân nặng tối thiểu: " + mucCanToiThieu);

// console.log(`Cân nặng lý tưởng ${canNangLyTuong} - Cân nặng tối đa: ${mucCanToiDa} - Cân nặng tối thiểu ${mucCanToiThieu}`)
