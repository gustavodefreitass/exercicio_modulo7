const form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

var NumeroA = document.getElementById('a').value;
var NumeroB = document.getElementById('b').value;

if(NumeroA > NumeroB){
    alert('Sucesso')
}else{
    alert('Incorreto')
}
})

console.log(form);