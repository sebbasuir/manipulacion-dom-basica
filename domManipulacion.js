const h1 = document.querySelector('h1');
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pResult = document.getElementById('result');

btn.addEventListener('click', sumarInputValues);
// form.addEventListener('submit', sumarInputValues);
function sumarInputValues(event) {
  // console.log(event);
  // event.preventDefault();
  const sumaResult =  Number(input1.value) +  Number(input2.value);
  pResult.innerText = sumaResult;
}