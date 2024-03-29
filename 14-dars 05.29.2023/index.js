//14-lesson
//Garbage Collection -unreacheble datas need to deleted when we don't use it
// let obj = {};
// let map = new Map();
// obj.name = "webbrain";
// console.log(obj, obj.name);
// // obj.1="22"//Error!!! Only string type key required from object
// map.title = "webbrain";
// console.log(map.size, map.title);
// // map.1="22"//error above reason
// map.set(
//   function Logged(date) {
//     return "44";
//   },
//   function password(data) {
//     return "55";
//   }
// );
// map.set(123, "number");
// console.log(map.get(123));
// console.log(map.size);
// // console.log(map.get(Logged()));
// console.log(map.get("title"));

// //Map() methods
// //has() - ichidagi ma'lumotnbi bor yoki yo'qligini tekshirib beradi
// console.log(map.has(123)); //tr

// //delete() - doanalab o'chiruvchi metod
// console.log(map.delete("title"));
// console.log(map);

// //clear() - hammasini bittada o'chiruvchi metod
// // console.log(map.clear());
// // console.log(map);

// //iteration - Map() ning key va va value lari uchun yoki umumiy pairlari uchun iteratsiya berish uchun qo'llaniladi
// //buning uchun Map() ga default qiymat berib ko'ramiz
// let supMap = new Map([
//   ["name", "asus"],
//   ["founded", "1987"],
// ]);
// console.log(supMap);

// //keys() - yasalgan mapning key:value ko'rinishidan faqat keylarni ajratib beruvchi method
// console.log(supMap.keys());

// //values() - yasalgan mapning key:value ko'riunishidan faqat valuelarni string koi'rinishida ajratib beruvchi metod
// console.log(supMap.values());

// //entries() - Map() ni key=>value dan old vaziyatiga qaytarib beruvchi metod
// console.log(supMap.entries());

// //Ular bilan for of iteratsiyasini qo'llaymiz
// for (let val of supMap.keys()) {
//   console.log(val);
// } //string keys
// for (let val of supMap.values()) {
//   console.log(val);
// } //string values
// for (let val of supMap.entries()) {
//   console.log(val);
// }
// //default chain
// for (let val of supMap) {
//   console.log(val);
// }
// //default chain

// //generator functions
// let gen = supMap.entries();
// gen.next();
// console.log(gen.next());

// //qachonki done:true bo'lsa next element not found bo'ladi

// //forEach() - Map() ning o'ziuga tegishli forEachi bo'lib xuddi arraydagi singari ishlaydi

// supMap.forEach((val) => {
//   console.log(val);
// });

//fromEntries() - Map()=>Object ko'rinishida key:value ko'rinishida Object qaytaradi
// console.log(Object.fromEntries(supMap)); //single thread bo'lsa ham Map() o'zgarib ketmaydi fromEntries() yangi variable qaytaradi
//Map() da 2 ta bir xil nameli key set qilinsa oxirgi setdagi value qoladi eskisi qabul qilinmaydi

//Set() - value collection
let setforExp = new Set();
console.log(setforExp);
//only value collection like object
//All unique value means different values in Set

//Set() - methods

//add() - metod map() ning set metodiga o'xshab Set() ga ma'lumot add qiladi lekin mapdan farqli ma'lumot Object ko'rinishida bo'ladi va ikkita bir xil ma'lumotdan so'nggisi qabul qilinadi
let obj = { name: "Granada" };
setforExp.add(obj);
console.log(setforExp);
setforExp.add("tilda");
setforExp.add("Malorka");
setforExp.add("tilda");
console.log(setforExp); //bitta ma'lumot qayta qayta yozilmasin baribir 1 marta yoziladi bunga add metodining single threadgfa bo'ysungani ya'ni o'tgan bunga o'xshagan data remove bo'lib bu add bo'lishi tushuniladi

//has() - tekshirish yoki setda bor yo'qligini bilish.Map() da get() metodidan ma'lumotni olish uchun foydalansak Set() da has() orqali tekshirib olishimiz mumkin
console.log(setforExp.has("tilda")); //true

//qolgan map metodlari set da ham ishlaydi
console.log(setforExp.values());
for (let val of setforExp.values()) {
  console.log(val);
}

//WeakMap() va WeakSet() bular  garbage collectiondan to'liq o'chirish uchun ishlatiladi agar declared qilingan map yoki set ma'lumotiimiz unreacheble bo'lib qolsa va shundan keyin garbage collectiondan ham o'chirishni istasak unda WeakMap() va WeakSet() dan foydalanamiz

// let WMap1 = WeakMap([
//   ["name", "founded man"],
//   ["year", "1999"],
// ]); //error no default
let WMap = new WeakMap();
let obj2 = {};
WMap.set(obj, "own value");
console.log(WMap);
// let obje = { data: WMap };
// WMap = null;
// console.log(WMap);
