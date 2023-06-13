document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-num').addEventListener('submit', function(){
        var numeroMaximo = parseInt(document.getElementsByClassName('numeroMaximo').value);

        let numeroAleatorio = Math.random() * numeroMaximo;
        alert(numeroAleatorio);
    })
})