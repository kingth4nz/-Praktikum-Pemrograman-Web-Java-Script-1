// Studi Kasus: Sistem Penggajian Karyawan

const namaKaryawan = "Budi Santoso";
const gajiPokok = 5000000;
const tunjangan = 1000000;
const bonus = 500000;
const persentasePotongan = 0.05;

// Arrow function untuk menghitung gaji
const hitungGaji = (gajiPokok, tunjangan, bonus) => {
  let totalPendapatan = gajiPokok + tunjangan + bonus;
  let potonganGaji = totalPendapatan * persentasePotongan;
  let gajiBersih = totalPendapatan - potonganGaji;

  return { totalPendapatan, potonganGaji, gajiBersih };
};

const hasil = hitungGaji(gajiPokok, tunjangan, bonus);

const formatRupiah = (angka) => `Rp${angka.toLocaleString("id-ID")}`;

// Menampilkan hasil dengan template literals
console.log(`Nama Karyawan    : ${namaKaryawan}`);
console.log(`Gaji Pokok       : ${formatRupiah(gajiPokok)}`);
console.log(`Tunjangan        : ${formatRupiah(tunjangan)}`);
console.log(`Bonus            : ${formatRupiah(bonus)}`);
console.log(`Total Pendapatan : ${formatRupiah(hasil.totalPendapatan)}`);
console.log(`Potongan (5%)    : ${formatRupiah(hasil.potonganGaji)}`);
console.log(`Gaji Bersih      : ${formatRupiah(hasil.gajiBersih)}`);
