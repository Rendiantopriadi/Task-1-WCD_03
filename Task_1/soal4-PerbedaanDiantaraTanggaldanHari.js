// Input dates
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");

//Kalkulasi perbedaan dalam milisecond
let differenceInTime = date2 - date1;

//Covert milisecond dalam hari
let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

//Menampilkan hasil
console.log("difference In Days:" , differenceInDays);