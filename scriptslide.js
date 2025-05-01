let slides = document.querySelectorAll('.fotos'); // Seleciona as imagens com a classe "fotos"
let atual = 0;

setInterval(() => {
    slides[atual].classList.remove('active'); // Remove "active" da imagem atual
    atual = (atual + 1) % slides.length; // Atualiza o índice para o próximo slide
    slides[atual].classList.add('active'); // Adiciona "active" ao próximo slide
}, 3000);


function fecharpopup(){
    document.getElementById("pop-up").style.display="none";
    document.getElementById("principal").style.display="block";    

    const musica = document.getElementById("som");
    musica.play();


}

    for (let i = 0; i < 10; i++) {
      const coracao = document.createElement("div");
      coracao.classList.add("coracao");
      coracao.textContent = "❤️";
  
      // Posição horizontal aleatória
      coracao.style.left = Math.random() * 100 + "vw";
  
      // Joga o coração na tela
      document.getElementById("area-coracoes").appendChild(coracao);
  
      // Remove após a animação
      setTimeout(() => {
        coracao.remove();
      }, 2000);
    }
  