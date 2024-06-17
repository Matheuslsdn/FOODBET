//função de alerta de usuário

function verificarVisita() {
    if (localStorage.getItem('jaVisitou') === null) {
        setTimeout(function() {
            if (confirm("Seja bem vindo usuário, ja tem conta em nosso site?")) {
                if (confirm("Você deseja logar?")) {
                    window.location.href = 'login.html';
                }
            } else {
                if (confirm("Deseja criar uma conta?")) {
                    window.location.href = 'login.html';
                }
            }
            localStorage.setItem('jaVisitou', 'true');
        }, 3000);
    } else {
        var nomeUsuario = localStorage.getItem('nomeUsuario') || 'Usuário';
        alert('Bem-vindo de volta, ' + nomeUsuario + '!');
    }
}
window.onload = verificarVisita;

//função dos slides do restaurante

let slideIndex = [1,1,1,1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

//função do botão de saiba mais
