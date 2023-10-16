var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entra)
a.addEventListener('mouseout', saio)

function clicar(){
    a.innerText = 'Clicou'
    a.style.background = 'red'
}
function entra () {
    a.innerText = 'Entou'
}

function saio(){
    a.innerText = 'Saio'
   a.style.background = 'yellow'
}

var q = window.document.getElementById('quadrado')

q.addEventListener ('click', clk)
q.addEventListener ('mouseenter', ent)
q.addEventListener ('mouseout', sai)
function clk() {
    q.style.background = 'cyan'
    q.innerText = 'Clicou'
}

function ent(){
    q.innerText = 'Entrou'
}

function sai(){
    q.innerHTML = 'Saio'
    q.style.background = 'green'
}