//=========================================================================================
//=========================================================================================
//=========================================================================================
//1-Tugma bosilganda rangni o'zgartirish
// Vazifa: HTML sahifasida bir nechta matn yozilgan bo‘lsin. "Matn rangini o'zgartirish" tugmasi bosilganda, barcha matnning rangi tasodifiy rangga o‘zgartirilsin.
// Ko‘rsatma:
// getElementById yoki querySelectorAll yordamida matnni olish.
// Tugma bosilganda rangni o‘zgartirish uchun style.colordan foydalanish.
// Rangni tasodifiy olish uchun Math.random()ni ishlatish.
// const btn=document.getElementById("btn");
// const text=document.querySelectorAll("h1")
// function btnn() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// btn.addEventListener("click", () => {
//   text.forEach((text) => {
//     text.style.color = btnn();
//   });
// });


//=========================================================================================
//=========================================================================================
//=========================================================================================
//2-Inputdagi qiymatni clipboardga nusxalash
// Vazifa: Foydalanuvchi input maydoniga matn yozadi. "Nusxa olish" tugmasi bosilganda, inputdagi qiymat clipboardga nusxalanadi va sahifada xabar ("Matn nusxalandi!") chiqariladi.
// Ko‘rsatma:
// querySelector orqali input va tugmani olish.
// Tugma bosilganda navigator.clipboard.writeText yordamida clipboardga yozib olish.
// Xabar chiqarish uchun DOM element yaratish va qo‘shish.
// const texxt=document.getElementById('texxt');
// const btn=document.getElementById('btn')
// btn.addEventListener('click',()=>{
//   navigator.clipboard.writeText(texxt.value)
// })


//=========================================================================================
//=========================================================================================
//=========================================================================================
//3-Qidiruv natijasini belgilash
// Vazifa: Sahifada matn yozilgan bo‘lsin. Foydalanuvchi qidiruv maydoniga so‘z kiritadi va "Qidirish" tugmasini bosadi. Sahifada shu so‘z bo‘lsa, uning orqa foni sariq rangga bo‘yaladi.
// Ko‘rsatma:
// querySelector orqali matn va input maydonini olish.
// Tugma bosilganda innerHTML orqali matnni bo‘yalgan elementlarga ajratish (masalan, <span style="background-color: yellow">).
// replace() funksiyasidan foydalanish.
// const texxt=document.getElementById('texxt');
// const inputt=document.getElementById('inputt');
// const btn=document.getElementById('btn')
// btn.addEventListener('click',function(){
//     if(inputt.value){
//         let wordd=texxt.innerHTML.trim();
//         wordd=wordd.replaceAll(inputt.value, `<span style="background-color:yellow">${inputt.value}</span>`)
//         texxt.innerHTML=wordd
//     }
// })


//=========================================================================================
//=========================================================================================
//=========================================================================================
//4-Elementni yashirish va ko‘rsatish
// Vazifa: Sahifada bir nechta paragraflar bo‘lsin. "Yashirish" tugmasi bosilganda, barcha paragraflar yashiriladi. "Ko‘rsatish" tugmasi bosilganda, ular qayta ko‘rinadigan bo‘lsin.
// Ko‘rsatma:
// querySelectorAll yordamida barcha paragraflarni olish.
// style.displayni "none" yoki "block" qilib o‘zgartirish.
// Turli tugmalar uchun alohida click hodisalarini ishlatish.
// const textt=document.querySelectorAll('p')
// const show=document.getElementById('show')
// const hide = document.getElementById('hide');
// hide.addEventListener('click',function(){
//     textt.forEach(textts=>{
//      textts.style.display = "none";
//     })
// })
// show.addEventListener("click", function () {
//   textt.forEach((textts) => {
//     textts.style.display = "block";
//   });
// });


//=========================================================================================
//=========================================================================================
//=========================================================================================
//5-Tugma bosilganda fon rangini o'zgartirish
// Vazifa: Sahifada bir nechta tugma joylashtirilgan bo‘lsin. Har bir tugma bosilganda butun sahifaning fon rangi o‘zgaradi. Tugmalar har xil ranglar uchun javob beradi (masalan: qizil, yashil, ko‘k).
// Ko‘rsatma:
// querySelectorAll orqali barcha tugmalarni olish.
// Tugmalarga click hodisasini ulash.
// Tugma bosilganda document.body.style.backgroundColor orqali rangni o‘zgartirish.
// const redd = document.getElementById("redd");
// const yellowww = document.getElementById("yell");
// const bluee = document.getElementById("bluee")
// redd.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red'
// });
// bluee.addEventListener('click', function () {
//     document.body.style.backgroundColor = "blue";
// });
// yellowww.addEventListener("click", function () {
//   document.body.style.backgroundColor = "yellow";
// });


//=========================================================================================
//=========================================================================================
//=========================================================================================
//6-Belgilangan matnni kattalashtirish
// Vazifa: Sahifada matnlar yozilgan bo‘lsin. Foydalanuvchi matn ustiga bosganda uning shrift o‘lchami kattalashadi.
// Ko‘rsatma:
// querySelectorAll orqali barcha matnlarni olish.
// Har bir elementga click hodisasini ulash.
// style.fontSizeni o‘zgartirib, matnni kattalashtirish.
// const textt=document.querySelectorAll('p')
// textt.forEach( texts=>{
//     texts.addEventListener("click", () => {
//       texts.style.fontSize = "40px";
//     });
// })


//=========================================================================================
//=========================================================================================
//=========================================================================================
//7-Ko‘zgu (mirror) effekti
// Vazifa: Sahifada bir input maydoni va bir matn ko‘rsatiladigan bo‘sh joy bo‘lsin. Foydalanuvchi inputga nimadir yozganda, yozilgan matn real vaqt rejimida bo‘sh joyga ko‘chib ko‘rsatiladi.
// Ko‘rsatma:
// Input maydonini querySelector orqali olish.
// input hodisasini ulash.
// textContent yoki innerText yordamida inputdagi qiymatni boshqa elementga yozib borish.
// const texxt=document.querySelector('input');
// const textcopy=document.getElementById('textcopy');
// texxt.addEventListener('input',function(){
//     textcopy.innerHTML=this.value
// })



//=========================================================================================
//=========================================================================================
//=========================================================================================
//8-Parolni ko‘rsatish/yashirish
// Vazifa: Foydalanuvchiga parol maydoni va "Ko‘rsatish/Yashirish" tugmasi ko‘rsatiladi. Tugma bosilganda parol ko‘rinadigan yoki yashirin holatga o‘tadi.
// Ko‘rsatma:
// querySelector orqali input va tugmani olish.
// Tugma bosilganda inputning type xususiyatini text yoki passwordga o‘zgartirish.
// const password=document.getElementById('password');
// const btn=document.getElementById('btn')




//=========================================================================================
//=========================================================================================
//=========================================================================================
// 9-Elementni boshqarish
// Vazifa: Sahifada bitta kvadrat shakl bo‘lsin. Foydalanuvchi kvadratni yuqoriga, pastga, chapga yoki o‘ngga ko‘chirish uchun tugmalardan foydalanadi.
// Ko‘rsatma:
// Kvadratni olish uchun querySelectordan foydalanish.
// Har bir yo‘nalish tugmasi uchun click hodisasini ulash.
// Kvadratning joylashuvini style.marginLeft, style.marginTop yordamida o‘zgartirish.
// const square=document.getElementById('kvadrat')
// const up=document.getElementById('up')
// const down = document.getElementById("down");
// const right = document.getElementById("right");
// const left = document.getElementById("left");
// let marginrightt=0
// let margintopp=0  
// up.addEventListener("click", () => {
//   margintopp -= 50;
//   square.style.marginTop = margintopp + "px";
// });
// down.addEventListener("click", () => {
//     margintopp += 50;
//   square.style.marginTop =margintopp + "px";
// });
// right.addEventListener("click", () => {
//     marginrightt += 50;
//   square.style.marginLeft =marginrightt + "px";
// });
// left.addEventListener("click", () => {
//   marginrightt -= 50;
//   square.style.marginLeft = marginrightt + "px";
// });





//=========================================================================================
//=========================================================================================
//=========================================================================================
//10-Tasodifiy rasm ko'rsatish
// Vazifa: Sahifada "Tasodifiy rasm ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda tasodifiy rasm (oldindan berilgan URL ro‘yxatidan) sahifada ko‘rsatiladi.
// Ko‘rsatma:
// Rasm URL’larini massivda saqlash.
// Math.random yordamida tasodifiy rasmni tanlash.
// Rasm elementini yaratish yoki mavjud elementga src o‘zgartirish orqali tasvirni yangilash.
// const img=document.querySelector('img');
// const button=document.querySelector('button');
// const images = [
//   "https://picsum.photos/id/237/200/300",
//   "https://picsum.photos/id/247/200/300",
//   "https://picsum.photos/id/267/200/300",
//   "https://picsum.photos/id/297/200/300",
//   "https://picsum.photos/id/287/200/300",
//   "https://picsum.photos/id/217/200/300",
//   "https://picsum.photos/id/207/200/300",
//   "https://picsum.photos/id/277/200/300",
// ];
// button.addEventListener('click',function(){
//     let random=Math.floor(Math.random()*images.length)
//     img.setAttribute('src',images[random])
// })


//=========================================================================================
//=========================================================================================
//=========================================================================================
//11-Paragraflarni yashirish va ko‘rsatish
// Vazifa: Sahifada bir nechta paragraflar bo‘lsin. Har bir paragraf yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda faqat o‘sha paragraf yashiriladi.
// Ko‘rsatma:
// querySelectorAll orqali barcha paragraflarni olish.
// Har bir paragraf uchun "Yashirish" tugmasi yaratib, ulash.
// Tugma bosilganda tegishli paragrafni style.display = "none" qilish.
// const btn=document.querySelectorAll('button')
// btn.forEach(item=>{
//     item.addEventListener('click',()=>{
//       item.parentElement.style.display='none'
//     })
// })   


//=========================================================================================
//=========================================================================================
//=========================================================================================
//12-Matnni almashtirish
// Vazifa: Sahifada bir nechta paragraflar yozilgan bo‘lsin. Foydalanuvchi har bir paragrafga bosganda, o‘sha matn "Salom, dunyo!" ga almashtiriladi.
// Ko‘rsatma:
// querySelectorAll orqali barcha paragraflarni olish.
// Har biriga click hodisasini ulash.
// innerTextni o‘zgartirib, yangi matnni ko‘rsatish.
// const textt=document.querySelectorAll('p');
// textt.forEach(value=>{
//    value.addEventListener('click',()=>{
//     value.innerText="Salom Dunyo!"
//    }) 
// })
