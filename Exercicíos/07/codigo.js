/*var nome = window.prompt('Digite seu nome')
var idade =window.prompt('Quantos anos voce tem?')
var email = window.prompt('Digete seu email')


function clicou(){
    var x = window.document.getElementById('colo')
    x.innerHTML = ('Clicou')
    x.style.background = 'red'

}


var x = window.document.getElementById('colo')
x.addEventListener('click', clicou)

function clicou(){
    x.style.background = 'red'
}

var y = window.document.querySelector('div#texto')
y.addEventListener('mouseenter',entou)
y.addEventListener('mouseout', saia)
y.addEventListener('click',cliquee)

function entou(){
    y.innerHTML = ('Entrou')
   
}

function saia(){
    y.innerHTML = ('Saio')
    y.style.background = 'black'
   
}

function cliquee(){
    y.style.background = 'red'
    
}
*/

/*
    function capturarValor() {
      // Obtendo a referência para o elemento de entrada
      var campoInput = document.getElementById("meuInput");

      // Obtendo o valor digitado pelo usuário
      var valorDigitado = campoInput.value;

      // Exibindo o valor digitado
      console.log(valorDigitado);
    }*/

    
    function capturarValor() {
      // Obtendo a referência para o elemento de entrada
      var campoInput = document.getElementById("meuInput");

      // Obtendo o valor digitado pelo usuário
      var valorDigitado = campoInput.value;

      // Exibindo o valor digitado na div de resultado
      var divResultado = document.getElementById("resultado");
      divResultado.textContent = valorDigitado;
    }