//1-masala


// let vaada1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Birinchi vaada bajarildi"), 3000);
// });

// let vaada2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Ikkinchi vaada bajarildi"), 1000);
// });

// let vaada3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Uchinchi vaada bajarildi"), 2000);
// });

// Promise.race([vaada1, vaada2, vaada3])
//     .then((natija) => {
//         console.log("Eng tez natija:", natija);
//     });

    //2-masala

//     class Animal {
//     constructor(nomi) {
//         if (this.constructor === Animal) {
//             throw new Error("Animal class'dan to‘g‘ridan-to‘g‘ri obyekt yaratib bo‘lmaydi!");
//         }
//         this.nomi = nomi;
//     }
//     ovozChiqar() {
//         throw new Error("Bu metod child class'da yozilishi shart!");
//     }
// }

//3-masala

// class Hisoblash {

//     static qoshish(son1, son2) {
//         return son1 + son2;
//     }
// }
// class Qushlar {

//     static uchish(nomi) {
//         return nomi + " uchmoqda";
//     }
// }
// class Mashina {

//     static harakatlanish(model) {
//         return model + " harakatlanmoqda";
//     }
// }
// let hisobNatija = Hisoblash.qoshish(7, 5);
// console.log("Hisoblash:", hisobNatija);

// let qushHolati = Qushlar.uchish("Bulbul");
// console.log("Qush:", qushHolati);

// let mashinaHolati = Mashina.harakatlanish("Cobalt");
// console.log("Mashina:", mashinaHolati);



//4-masala
// class BankHisob {
//     #balans; 

//     constructor(boshlangichBalans) {
//         this.#balans = boshlangichBalans;
//     }

//     pulQoshish(summa) {
//         this.#balans += summa;
//     }

//     balansKorish() {
//         return this.#balans;
//     }
// }

// let hisob = new BankHisob(1000);
// hisob.pulQoshish(500);

// console.log("Joriy balans:", hisob.balansKorish());

