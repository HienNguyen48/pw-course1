const person = {
    address: {
        strest: "367 Bình Đà",
        city: "Hà Nội",
        country: "Bình Minh - Thanh Oai"
    }
}

const{ 
    address: {strest},
} = person;

console.log (strest);
