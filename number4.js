const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const btn = document.getElementById('btn');
const div = document.getElementById('myDiv');
// const urlJpg;
btn.addEventListener('click', check);
async function check(){
    div.innerHTML = '';
    if (input1.value >= 100 && input1.value <= 300 && !isNaN(input1.value)){
        console.log('ok')
        let width = input1.value;
        if (input2.value >= 100 && input2.value <= 300 && !isNaN(input2.value)){
            let heght = input2.value;
            console.log(heght, width);
            resultFetch(heght, width);
        } else {
            div.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
        };
    } else {
        div.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
    };
};
function resultFetch(heght, width){
    fetch(`https://picsum.photos/${width}/${heght}`)
    .then ((response) => {
        console.log(response)
        return response;
      })
    .then((data) => {
          console.log(data.url);
          let urlJpg = data.url;
          div.insertAdjacentHTML("beforeend", `<img src = "${urlJpg}">`)
      })
};
