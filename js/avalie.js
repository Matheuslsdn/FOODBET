document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-avaliar');
    const questao1 = document.getElementById('questao-1');
    const questao2 = document.getElementById('questao-2');
    const questao3 = document.getElementById('questao-3');
  
    let currentQuestion = 1;
  
    button.addEventListener('click', () => {
      if (currentQuestion === 1) {
        setTimeout(() => {
          questao1.style.display = 'none';
          questao2.style.display = 'block';
          currentQuestion = 2;
        }, 2000);
      } else if (currentQuestion === 2) {
        setTimeout(() => {
          questao2.style.display = 'none';
          questao3.style.display = 'block';
          currentQuestion = 3;
        }, 2000);
      }
    });
  });