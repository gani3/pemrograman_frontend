console.log("#####################");
console.log('# destruction array #');
console.log("#####################");
// destruction javascript
    const req = {
        body : {
            name : 'Gani',
            age : 20
        }
    };

    // destructing object
    const {name,age,tinggi=170} = req.body;
    console.log(name,age,tinggi);


    // destructing array
    const family = ['michael', 'hannah', 'jonas'];

    const [suami,istri,anak] = family;
    console.log(suami,istri,anak);
//end destruction


console.log("####################");
console.log('# Rest dan Spread  #');
console.log("####################");
// rest dan spreads
    // rest parameter (menggabungkan banyak parameter secara otomatis)
        function sum(...numbers) {
            let hasil = 0;
            for (let index = 0; index < numbers.length; index++) {
                hasil += numbers[index];  
            }
            console.log(hasil);
        }
        sum(1,2,3,4,5)
    //

    //spread parameter (memisahkan object ke banyak nilai)
        // spread pada array
        const keluarga = ['Micahel', 'Hannah'];
        const newKeluarga = [...keluarga,'Jonas'];
        console.log(newKeluarga);

        //spread pada object
        let biodata = {
            name : 'Gani',
            age : 20
        }

        const newbiodata= {
            ...biodata,
            major : 'Informatica',
        }
        console.log(newbiodata);
    // node : jika ada key yang sama maka value awal dari key tersebut akan di timpa
//end rest dan spread

console.log("#####################");
console.log('# Callback function #');
console.log("#####################");
// callback atau inputan yang berupa fungsi pada sebuah fungsi
    const names = ['michael','hannah','jonas']
    // hanya meluping data array yang masuk
    names.forEach(function (name) {
        console.log(name);
    })

    // melakukan formating atau perubahan pada array
    const namaTerformat = names.map(function (name) {
        return `Mr/Mrs ${name}`
    })

    console.log(namaTerformat);
//end callback


