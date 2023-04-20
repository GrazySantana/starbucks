// Fazer esta função 1° (Ela altera o estado Ativo/Desativo)
function toggleMenu() {
    var menuToogle = document.querySelector('.toggle'); // Cria uma variável usa o DOM para selecionar a classe (.toggle)
    var links = document.querySelector('.links'); // Cria uma variável usa o DOM para selecionar a classe (.toggle)
    menuToogle.classList.toggle('active') // Troca o estado da classe (.toggle) para ativo
    links.classList.toggle('active')  //Troca o estado da classe (.links) para ativo
    }

    // Troca a imagem (Do sorvete grande)
    function imgSlider(anything){
        document.querySelector('.starbucks').src = anything;
    }

    function changeCircleColor(color){
        const circulo =document.querySelector('.circulo');
        circulo.style.background = color;
    }