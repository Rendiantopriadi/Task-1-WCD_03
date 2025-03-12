# Task-1-WCD_03
Repository for storing tasks

# Tugas_1 Web_client_development

## Task sebagai berikut :

1. Menghitung luas kotak
2. Menampilkan Uppercase name
3. Mencari diameter
4. Perbedaan diantara tanggal
5. Menghitung sudut segitiga


### Jawaban Task_1 Mengitung luas kotak

console.log("Rendianto Priadi");
console.log("NIM 241300008 IKOM Akselerasi");

// hitung Luas Kotak
function hitungLuasKotak (panjang, lebar)
{return panjang * lebar;

}

let panjang = 5
let lebar = 3

let luas = hitungLuasKotak(panjang, lebar);

// Menampilkan hasil
console.log("LuasKotak: " + luas);



### Jawaban Task_2 Menampilkan uppercase name

// Input nama
let name = "Jhon Doe";

// Pisahkan nama menjadi array 
let nameParts = name.split(" ");

//Ambil huruf pertama dari setiap kata di rubah ke uppercase
let initials = nameParts.map(word => word[0].toUpperCase()).join(" ");

//Hasil
console.log(initials);



### Jawaban Task_3 Mencari diameter

// Mengambil input radius
let radius = 5; 

// Menghitung diameter, keliling, dan luas
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

// Menampilkan hasil
console.log("Diameter = " + diameter);
console.log("Circumference = " + circumference.toFixed(4));
console.log("Area = " + area.toFixed(4));


### Jawaban Task_4 Perbedaan diantara tanggal

// Input dates
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");

//Kalkulasi perbedaan dalam milisecond
let differenceInTime = date2 - date1;

//Covert milisecond dalam hari
let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

//Menampilkan hasil
console.log("difference In Days:" , differenceInDays);


### Jawaban Task_5 Menghitung sudut segitiga

//Input dua sudut segitiga
let a = 80;
let b = 65;

//Menghitung sudut segitiga 
let c = 180 - (a + b);

console.log("Sudut ketiga: " + c);

