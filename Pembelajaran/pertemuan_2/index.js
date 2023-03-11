// variabel 

const name = 'Gani'
const age =23
const isMarried = false

const greeting = `
Hai nama saya ${name}
umur saya : ${age}

${isMarried ?  " Saya sudah menikah" : "Saya belum menikah"}
`


// conditional
const prediket =(nilai) =>{
    let grade = ""
    if (nilai > 90) {
        grade = "A";
    } else if (nilai > 80) {
        grade = "B";
    } else if (nilai > 70) {
        grade = "C";
    }else if(nilai > 60){
        grade = "D";
    }else{
        grade = "E";

    }
     console.log(`Grade Anda adalah : ${grade}`);
}


// perulangan
const loopingdata = (jml_data)=>{
    const data = jml_data
    for (let i = 0; i <= data; i++) {
    console.log("Angka ke " + i);
    }
}

// penggunaan function
const hitungUmurMhs = (tahun) => {
 const tahun_sekarang = 2023;
    return tahun_sekarang - tahun
}



// penggunaan array
const latihanArray = () =>{
    const animals  =["Cat", "Dog","Fish", "Bird"]
    // menggunakan foreach
    console.log("perulangan menggunakan foreach");
    animals.forEach((element,index) => {
        console.log(element);
    });

    // menggunakan for
    console.log("perulangan menggunakan for");
    for (let index = 0; index < animals.length; index++) {
        console.log(animals[i]);
        
    }
}

const latihanObject = () =>{

let data_diri = {
    nama: "Fulan",
    umur : 23,
    tinggi : 170
}

for (const key in data_diri) {
    if (Object.hasOwnProperty.call(data_diri, key)) {
        console.log(data_diri[key]);
        
    }
}
}


// memanggil semua function

// loopingdata(10);
// prediket(90);
// console.log(greeting);
// console.log(hitungUmurMhs(2020));
// console.log(latihanArray());
latihanObject();