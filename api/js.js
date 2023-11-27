// // alert('test');
// async function ds(){
// await fetch('https://www.breakingbadapi.com/api/characters/1').then(function(response){
//    return response.json();
// }).then(function(data){
// console.log(data)
// })
// }
// ds();

// async function hiwa(){
// const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
// const data =await response.json()
// // console.log(data.error.type)
// data.map(dataa=>
//     console.log(dataa))
// // document.querySelector('#content').innerHTML=` <h1> ${data.error.type} </h1>`
// // document.querySelector('#content').innerHTML=`<h1> ${dataa.id}</h1>`
// document.querySelector('#actor').innerHTML=
// `
// <select>
// ${data.map(dataa => `<option>'${dataa.title}</option>`)}
// </select>
// `
// }
// hiwa()



// const api = 'https://jsonplaceholder.typicode.com/todos/'

// async function hh(){
//     const response = await fetch(api)
//     const data = await response.json()
//     // const dataa=data.map(h=>h.)
//     console.log(data)
// }

// hh()


const api = '';
async function hiwa() {
    const response = await fetch(api)
    const data = await response.json()
    // console.log(data)
    printData(data)
}
function printData(data) {
    const header = document.querySelector('#header')
    const content = document.querySelector('#content')
    console.log(header)



    header.innerHTML += `<select class = 'form-control' onchange ='getch(this.value)'> <option>please select title</option>${data.map(m => `<option>${m.title}</option>`)}</select>`


}
async function getch(e) {
    const content = document.querySelector('#content')
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${e}`)
    const data = await response.json()
    console.log(data)
    content.innerHTML = `<h2>${data[0].e}(${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <img src = '${data[0].img}' width='250' `
}
hiwa();



// const api = 'https://www.breakingbadapi.com/api/characters';

// async function fetchData() {
//   try {
//     const response = await fetch(api);
//     const data = await response.json();
//     printData(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function printData(data) {
//   const header = document.querySelector('#header');
//   const content = document.querySelector('#content');

//   header.innerHTML += `
//     <select class='form-control' onchange='getCharacter(this.value)'>
//       <option>Please select a character</option>
//       ${data.map(character => `<option value="${character.char_id}">${character.name}</option>`).join('')}
//     </select>
//   `;
// }

// async function getCharacter(characterId) {
//   try {
//     const response = await fetch(`https://www.breakingbadapi.com/api/characters/${characterId}`);
//     const data = await response.json();
//     console.log(data);
//     const character = data[0];
//     content.innerHTML = `
//       <h2>${character.name}</h2>
//       <h4>${character.nickname}</h4>
//       <img src="${character.img}" width="250" alt="${character.name}">
//     `;
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();