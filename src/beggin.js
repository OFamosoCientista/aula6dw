function show(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function addTask() {
    const task = document.getElementById('task').value;
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('list').appendChild(li);
}

let count = 0;

function increment() {
count++;
document.getElementById('count').textContent = count;
}

function calc(op) {
const n1 = Number(document.getElementById('num1').value);
const n2 = Number(document.getElementById('num2').value);
let res;
if(op === '+') res = n1 + n2;
if(op === '-') res = n1 - n2;
if(op === '*') res = n1 * n2;
if(op === '/') res = n1 / n2;
document.getElementById('result').textContent = res;
}

async function buscarCEP() {
const cep = document.getElementById('cepInput').value;
const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
const data = await res.json();
document.getElementById('cepResult').textContent = data.logradouro + ', ' + data.localidade;
}