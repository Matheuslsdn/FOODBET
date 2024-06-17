let imagens = document.querySelectorAll('.imagens');

imagens.forEach(imagem => {
  imagem.addEventListener('mouseenter', () => {
    imagens.forEach(otherImage => {
      if (otherImage !== imagem) {
        otherImage.style.opacity = 0.5;
      }
    });
  });

  imagem.addEventListener('mouseleave', () => {
    imagens.forEach(imagem => {
      imagem.style.opacity = 1;
    });
  });
});