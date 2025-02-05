const numeroHtml = document.getElementById('numero');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

let NumeroGloval = 0;

function sumrNUmero() {
    NumeroGloval++;
    numeroHtml.textContent = NumeroGloval;
    numeroHtml.style.color = 'blue';
}

function restarNumero() {
    NumeroGloval--;
    numeroHtml.textContent = NumeroGloval
    numeroHtml.style.color = 'red';
}

btn1.addEventListener('click', sumrNUmero);
btn2.addEventListener('click', restarNumero);

