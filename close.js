const container = document.getElementById('container');
const body = document.getElementById('body');
setTimeout(function(){
    container.classList.add('cerrar');
    body.classList.remove('hiden');
    body.classList.add('show');
},2000);