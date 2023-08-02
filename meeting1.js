// array

// let arr = [`orek`, `opor`, `teri`, `nasi`]

//  console.log (array[0]);
//  console.log (array);


 //arr
//  arr.forEach((food) =>{
//     console.log(food)
//  });

 // loop
 
 

 //METHOD
 //1.PUSH = menammbah
//  arr.push(`indome ayam`);
//  console.log(arr)

 //2.POP = menghapus
//  arr.pop();
//  console.log(arr)


 //3.SHIFT  
//  arr.shift();
//  console.log(arr)

 //4.SPLICE
//  arr.splice();
//  console.log(arr)

 //TUGAS ARRAY

// let nama = [`Samsung`,`Tokopedia`, `Gojek`, `Grab`, `Line`, `Toko oren`, `Yamaha`]


// for (let i = 0; i<nama.length; i++) {
//   console.log(nama [i]);
//     }


// nama.push(`allo bank`);
// nama.pop(`Toko oren`);
// console.log(nama)

// nama.pop(`Toko oren`);
// console.log(nama)


// const angka = (a)=>{
// let kartu  = [2,4,6,8,10,12];
// for(l= 1; l<=a; l++){
//     let angka = Math.floor(Math.random() * 6 + 1);
// switch(angka){
//     case 1:
//         console.log(`ambil kartu ${kartu[0]}`)
//         break;
//     case 2:
//         console.log(`ambil kartu ${kartu[1]}`)
//         break;
//     case 3:
//         console.log(`ambil kartu ${kartu[2]}`)
//         break;
//     case 4:
//         console.log(`ambil kartu ${kartu[3]}`)
//         break;
//     case 5:
//         console.log(`ambil kartu ${kartu[4]}`)
//         break;
//     case 6:
//         console.log(`ambil kartu ${kartu[5]}`)
//         break;
// }
// }
// }
// angka (parseInt(prompt("masukan angkanya")));













// var waktuGame = [2,2,3,3,1,4,5];
// var totalWaktu = 0;
// var jumlahLebih = 0 ;

// for (let i = 0; i <waktuGame.length; i++) {
//     totalWaktu+= waktuGame[i];

//     if (waktuGame [i] > 2) {
//         jumlahLebih++
//     }
//  }

//  console.log (` Total waktu game: ${totalWaktu}`,"jam");
//  console.log (`jumlah waktu melebihi bermain:`, jumlahLebih, "hari" )




let waktuBermain = [2, 2, 3, 3, 1, 4, 5];
let totalWaktu = 0;
let jumlahMelebihi = 0;

for (let i = 0; i < waktuBermain.length; i++) {
  totalWaktu += waktuBermain[i];
  
  if (waktuBermain[i] > 2) {
    jumlahMelebihi++;
  }
}

console.log(`Total waktu bermain game: ${totalWaktu}`, "jam");
console.log("Jumlah melebihi batas waktu bermain:", jumlahMelebihi, "hari");