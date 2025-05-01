# 📐 JavaScript Fundamental Exercises

Repositori ini berisi kumpulan program sederhana menggunakan JavaScript untuk menyelesaikan beberapa soal logika dan matematika dasar. Setiap soal dilengkapi dengan deskripsi, input/output yang diharapkan, dan implementasi kode yang jelas.

---

## ✅ Daftar Soal dan Penjelasan

### 1. Menghitung Luas Persegi Panjang

**Deskripsi:**
Menghitung luas dari sebuah persegi panjang menggunakan rumus `panjang x lebar`.

**Input:**
- panjang = 5
- lebar = 3

**Output:**
- 15

**Kode:**
```javascript
let panjang = 5;
let lebar = 3;
let luas = panjang * lebar;
console.log("Luas persegi panjang: " + luas);

### 2. Menghitung Diameter, Keliling, dan Luas Lingkaran
**Deskripsi: Diberikan jari-jari lingkaran, hitung:**

Diameter: 2 * radius
Keliling: 2 * π * radius
Luas: π * radius²

**Input:**
radius = 5

**Output:**
diameter = 10
circumference = 31.4159
area = 78.539

let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

console.log("Diameter:", diameter);
console.log("Circumference:", circumference.toFixed(4));
console.log("Area:", area.toFixed(3));



