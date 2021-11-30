const numStr = document.getElementById('numStr');
const limit = document.getElementById('limit');
const btn = document.getElementById('btn');
const div = document.getElementById('div');
const myStorage = window.localStorage;
let nextStr;
let nextLim;
for (let i = 0; i < myStorage.length; i++){
    div.insertAdjacentHTML('beforeend', `<img style="width: 200px; height: 150px;" src = "${myStorage.getItem(`${i}`)}">`)
};

btn.addEventListener('click', check);

function checkStr (){
    if (numStr.value >= 1 && numStr.value <= 10 && !isNaN(numStr.value)){
        nextStr = true;
    } else {
        nextStr = false
};
};
function checkLim (){
    if (limit.value >= 1 && limit.value <= 10 && !isNaN(limit.value)){
        nextLim = true;
    } else {
        nextLim = false
};
};
function check (){
    checkStr();
    checkLim();
    if (nextStr == false) {
        div.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    } else if (nextLim == false){
        div.innerHTML = 'Лимит вне диапазона от 1 до 10'
    } else if (nextStr == false && nextLim == false) {
        div.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
    } else if (nextStr == true && nextLim == true){
        div.innerHTML = '';
        linck();
    };
};
function linck (){
    fetch(` https://picsum.photos/v2/list?page=${numStr.value}&limit=${limit.value}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        myStorage.clear();
        for (let i = 0; i < limit.value; i++){
        myStorage.setItem(`${i}`, `${data[i].download_url}`);
        div.insertAdjacentHTML('beforeend', `<img style="width: 200px; height: 150px;" src = "${data[i].download_url}">`)
        };
    });
};
