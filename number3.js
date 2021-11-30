const btn = document.querySelector('button');
const input = document.querySelector('input');
const output = document.getElementById('myDiv');
function presButton (){
    output.innerHTML = '';
    if (input.value >= 1 && input.value <= 10 && !isNaN(input.value)){
        xhr();
    } else {
        output.innerHTML = 'Число вне диапозона от 1 до 10'
    }
};
function xhr (){
        let xhr = new XMLHttpRequest;
        xhr.open('GET', `https://picsum.photos/v2/list?limit=${input.value}`);
        xhr.send();
        xhr.onload = function (){
            let data = JSON.parse(xhr.response);
            for (let i = 0; i < input.value; i++) {
                let foto = data[i];
                output.insertAdjacentHTML("beforeend", `<img class = "foto" src = "${foto.download_url}">`);
            }
        }
};

btn.addEventListener('click', presButton);
