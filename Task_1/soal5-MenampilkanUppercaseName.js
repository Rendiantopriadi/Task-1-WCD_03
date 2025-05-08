// Input nama
let name = "Jhon Doe";

// Pisahkan nama menjadi array 
let nameParts = name.split(" ");

//Ambil huruf pertama dari setiap kata di rubah ke uppercase
let initials = nameParts.map(word => word[0].toUpperCase()).join(" ");

//Hasil
console.log(initials);
