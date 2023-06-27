// Capturar os dados do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const num1 = parseFloat(document.querySelector('#Num1').value);
  const num2 = parseFloat(document.querySelector('#Num2').value);
  
  if (isNaN(num1) || isNaN(num2)) {
    alert('Não foi possível calcular!');
  } else {
    const media = (num1 + num2) / 2;
    alert('A média é: ' + media.toFixed(2));
  }
});
