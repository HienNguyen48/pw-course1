// trim()
// let str = "   K16 Playwright    ";
// // console.log(str);
// str = str.trim();
// console.log(str);

// toLowerCase() và toUpperCase()
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// includes() -> boolean
// console.log(str.includes("K16"));
// console.log(str.includes("k16"));

// replace()
// str = str.replace("Playwright", "Cypress");
// console.log(str);


// split()
let str = "K16 Playwright";
console.log(str.split(" ")); // [ 'K16', 'Playwright' ]
console.log(str.length);

for (let i = 0; i < str.length; i = i + 3) {
    console.log(str[i]);

    console.log("K16");
    // them dieu kien
}

// const emails = "emailA@gmail.com, emailB@gmail.com";
// console.log(emails.split(",")); // ["emailA@gmail.com", " emailB@gmail.com"]
// console.log(emails.split(".")); 

// ["emailA@gmail", "com", "emailB@gmail", "com"]
// ["emailA@gmail", "com, emailB@gmail", "com"]

//substring()

// let str = "Hello World!";
// console.log(str.substring(0, 5));
// console.log(str.substring(6));


// indexOf()
// let str = "Hello World!";
// console.log(str.indexOf("World!")); // 6
// console.log(str.indexOf("K16!")); // -1
