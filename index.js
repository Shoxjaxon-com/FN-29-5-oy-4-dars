//  === Symbol ga oid === //
//     let test = Symbol()
// let arr = {
//     name: "Shohjahon",
//     age: 16,
//     [test]: 123,
//     aboutName: function () {
//         return this
//     },
//     aboutAge: function () {
//         return this
//     }
// }
// let name = arr.aboutName();
// let age = arr.aboutAge();
// console.log(name);
// console.log(age);


// === Rekursiv funksiya oid === //

//     1 - masala

// let sum = 0;
// function test(arg) {
//     if (arg > 10) {
//         return sum
//     }
//     sum += arg
//     console.log(sum);
//     test(arg + 1)
// }

// test(1)

// 2 - masala
// function test(arr) {
//     if (arr == 1) {
//         return 1
//     }
//     return arr * test(arr - 1)
// }
// console.log(test(5));

// 3 - masala

// function fibanachiy(arr) {
//     if (arr === 0) {
//         return 0
//     } else if (arr === 1) {
//         return 1;
//     }
//     return fibanachiy(arr - 1) + fibanachiy(arr - 2)
// }
// console.log(fibanachiy(6));

//  === Class ga oid === //

//     1 - masala

// class car {
//     constructor(name, year, color) {
//         this.name = name,
//             this.year = year,
//             this.color = color
//     }
//     aboutBMW() {
//         return `name : ${this.name}, year : ${this.year} , color : ${this.color}`
//     }
// }

// let bmw = new car('BMW', 2024, 'black')
// console.log(bmw.aboutBMW());

// 2 - masala
// class tortburchak {
//     constructor(width, length) {
//         this.length = length,
//             this.width = width
//     }
//     aboutTortburchak() {
//         return this.length * this.width
//     }
// }
// let res = new tortburchak(5, 10)
// console.log(res.aboutTortburchak());

// === String metotdlari === //

// === charAt === //
//     1 - masala

// function arr(str, index) {
//     if (index >= str.length) {
//         return '';
//     }
//     return str.charAt(index)
// }
// console.log(arr('Salom', 0));

// 2 - masala
// function str(str) {
//     if (str.length > 0) {
//         return str.charAt(str.length - 1)
//     }
//     return ''
// }
// console.log(str('Salom'));

// 3 - masala
// function str(str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str.charAt(i));
//     }
// }
// console.log(str('Salom'));

// === CharCodeAt === //

//     1 - masala

// let str = 'Hello';
// let res = str.charCodeAt(1)
// console.log(res);

// 2 - masala
// function str(str) {
//     let res = []
//     for (let i = 0; i < str.length; i++) {
//         res.push(str.charCodeAt(i))
//     }
//     return res
// }
// console.log(str('Salom'));

// 3 - masala
// function str(str, index) {
//     for (let i = index + 1; i <= index + 3; i++) {
//         if (i < str.length) {
//             console.log(str.charCodeAt(i));
//         } else {
//             console.log(`Index ${i} str`);
//         }
//     }
// }
// console.log(str('Salom', 1));

// === At === //

// 1-masala

// let str ='Hello'
// console.log(str.at(1));

// 2-masala
// let str = 'Hello'
// let res = str.at(str.length-1)
// console.log(res);

// 3-masala
// let str = 'Hello'
// let res = str.at(str.length -1)
// console.log(res);

// === Slice === //

// 1-masala

// let arr ='Salom, dunyo';
// let res = arr.slice(7,12)
// console.log(res);

// 2-masala
// let arr = 'Salom'
// let res = arr.slice(0,3)
// console.log(res);

// 3-masala
// let arr ='Salom dunyo'
// let res =arr.slice(6,11)
// console.log(res);

// === Substring === //

// 1-masala
// let str ='Salom'
// let res = str.substr(2,5)
// console.log(res);

// 2-masala
// let str = 'Salom dunyo'
// let res = str.substr(6,11)
// console.log(res);

// 3-masala
// let str = 'Salom dunyo'
// let res = str.substr(7,11)
// console.log(res);

// === trim ,trimStart ,tirmEnd === //

// 1-masala
// let arr ='          Salom      dunyo'
// let res = arr.trim()
// console.log(res);

// 2-masala
// let arr ='          Salom      dunyo'
// let res = arr.trimStart()
// console.log(res);

// 3-masala
// let arr ='          Salom      dunyo    '
// let res = arr.trimEnd()
// console.log(res);


// === padEnd , padStart === //

// 1-masala

// let arr =''
// let res =arr.padEnd(10,'!')
// console.log(res);

// 2-masala
// let arr = 'salom'
// let res = arr.padStart(15,'Shohjahon ')
// console.log(res)

// 3-masala
// let tel = '+998'
// let res = tel.padStart(8,'00012345')
// console.log(res);

// === repeat === //

// 1-masala
// let arr ='Salom'
// let res = arr.repeat(3)
// console.log(res);

// 2-masala
// let arr = 'Salom'
// let res = ''
// for(let i =0;i<arr.length;i++){
//  res +=arr[i].repeat(2)
// }
// console.log(res);

// 3-masala
// let arr ='Salom'
// function test(arr){
//     return (arr + ' ,').repeat(5).slice(0,-2)
// }
// console.log(test(arr));


// === replace === //

// 1-masala
// let arr = 'Salom'
// console.log(arr.replace('S','a'));

// 2-masala
// let str = "salom dunyo";
// console.log(str.replace("s", "r"));

// 3-masala
// let str = "man finishga 2-bolib keldim";
// console.log(str.replace("2", "1"));

// === replaceAll === //

// 1-masala
// let arr = 'Salom JavaScript'
// let res = arr.replaceAll('a' , 'o')
// console.log(res);

// 2-masala
// let arr = '"Bu juda yaxshi kun. Juda yaxshi ob-havo. Juda yaxshi kayfiyat.'
// console.log(arr.replaceAll('juda' , 'ajoyib'));

// 3-masala
// let arr = 'Salom mening yoshim 16 da'
// console.log(arr.replaceAll( /[0-9]/g , '**'));

// === Split === //

// 1-masala

// let arr = 'olma, banan ,apelsin'
// console.log(arr.split(','));

// 2-masala
// let arr ='Salom'
// console.log(arr.split(''));

// 3-masala
// let arr ='S  a   l   o m   '
// console.log(arr.split(''));

// === INdexOF === //

// 1-masala
// let arr ='Salom dunyo'
// console.log(arr.indexOf('Salom'));

// 2-masala
// let arr = 'salom men bugun najot talimga bordim'
// console.log(arr.indexOf('najot'));

// 3-masala

// let arr ='Salom dunyo qalaysan'
// console.log(arr.indexOf('Salom'));

// === Last indexof === //

// 1-masala

// let arr ='Salom dunyo qalaysan dunyo'
// console.log(arr.lastIndexOf('dunyo'));

// 2-masala
// let arr ='S  a   l   o m   '
// console.log(arr.lastIndexOf(''));

// 3-masala
// let arr = 'Salom mening yoshim 16 da 17,18 ,19,20,77'
// console.log(arr.lastIndexOf(''));

// === inculdes === //

// 1-masala

// let arr = 'Salom men shohajahon men shohajonman'
// console.log(arr.includes('shohajon'));


