let tabel1 = [
    {
      No: 1,
      Nama: "Ari",
      Waktu: 20.1,
      Nilai: 65.59
    },
    {
      No: 2,
      Nama: "Andi",
      Waktu: 10,
      Nilai: 50.01
    },
    {
      No: 3,
      Nama: "Budi",
      Waktu: 15.15,
      Nilai: 60
    },
    {
      No: 4,
      Nama: "Bayu",
      Waktu: 1.1,
      Nilai: 45
    },
    {
      No: 5,
      Nama: "Citra",
      Waktu: 2,
      Nilai: 55.35
    },
    {
      No: 6,
      Nama: "Candra",
      Waktu: 0.1,
      Nilai: 58.39
    },
    {
      No: 7,
      Nama: "Dodi",
      Waktu: 0.2,
      Nilai: 70
    },
    {
      No: 8,
      Nama: "Dimas",
      Waktu: 3.01,
      Nilai: 91
    },
    {
      No: 9,
      Nama: "Erwin",
      Waktu: 10.15,
      Nilai: 35.55
    },
    {
      No: 10,
      Nama: "Fikri",
      Waktu: 10.3,
      Nilai: 97.01
    },
    {
      No: 11,
      Nama: "Gilang",
      Waktu: 10.25,
      Nilai: 59.3
    },
    {
      No: 12,
      Nama: "Hailkal",
      Waktu: 3,
      Nilai: 70
    },
    {
      No: 13,
      Nama: "Irwan",
      Waktu: 3.3,
      Nilai: 60
    },
    {
      No: 14,
      Nama: "Joko",
      Waktu: 19.03,
      Nilai: 65.59
    },
    {
      No: 15,
      Nama: "Kirana",
      Waktu: 17,
      Nilai: 99
    },
    {
      No: 16,
      Nama: "Latif",
      Waktu: 14.05,
      Nilai: 89.9
    },
    {
      No: 17,
      Nama: "Naila",
      Waktu: 12.1,
      Nilai: 91
    }
  ]


     //nomer 2
    tabel1.sort(function(a, b) {
        if (a.Nilai === b.Waktu) {
        return a.Waktu - b.Waktu;
        } else {
        return b.Nilai - a.Nilai;
        }
    });
    console.log(tabel1);

    //nomer 3
    let sum = tabel1.reduce((acc, obj) => acc + obj.Nilai, 0);
    let averagenilai = sum / tabel1.length;

    let minnilai = Math.min(...tabel1.map(obj => obj.Nilai));
    let maxnilai = Math.max(...tabel1.map(obj => obj.Nilai));

    console.log(`Rata-rata nilai: ${averagenilai}`);
    console.log(`Nilai terendah: ${minnilai}`);
    console.log(`Nilai tertinggi: ${maxnilai}`);

