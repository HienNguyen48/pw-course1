let chieuCao = 158;
let soLe = chieuCao % 100;// công thức quy đổi cm => m
let canNangLyTuong = (soLe * 9) / 10;
let mucCanToiDa = soLe;
let mucCanToithieu = (soLe * 8) / 10;

console.log("Cân nặng lý tưởng: ", canNangLyTuong + "Cân nặng tối đa : ", mucCanToiDa + "Cân nặng tối thiểu: ", mucCanToithieu);

console.log(`Cân nặng lý tường: ${canNangLyTuong}, Cân nặng tối đa: ${mucCanToiDa}, Cân nặng tối thiểu: ${mucCanToithieu}  với chiều cao: ${chieuCao} & số lẻ ${soLe}`);
