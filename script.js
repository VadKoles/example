let button = document.querySelector('.btn');
let login = document.querySelector('.login');
function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    alert('Спасибо за подписку, ' + login.value)
}

button.addEventListener('click', handle);