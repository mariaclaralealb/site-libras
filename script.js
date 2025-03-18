// Função para alternar o menu lateral
function toggleMenu() {
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("open");
}

// Fecha o menu se o usuário clicar fora dele
document.addEventListener("click", function (event) {
    var overlay = document.getElementById("overlay");
    var menuIcon = document.querySelector(".menu-icon");
    var overlayContent = document.querySelector(".overlay-content");

    // Verifica se o clique foi fora do menu, do botão de menu e do conteúdo do menu
    if (
        overlay.classList.contains("open") &&
        !menuIcon.contains(event.target) &&
        !overlayContent.contains(event.target)
    ) {
        overlay.classList.remove("open");
    }
});

// Função para limpar o campo de busca e o resultado
function clearSearch() {
    document.getElementById("search").value = "";
    searchSign();
}

// Função principal de busca
function searchSign() {
    const word = document.getElementById("search").value.toLowerCase().trim();
    const resultDiv = document.getElementById("result");

    // Limpa o conteúdo do resultado sempre que a busca é atualizada
    resultDiv.innerHTML = "";

    // Se o usuário não digitou nada, não faz nada
    if (!word) return;

    // Monta os caminhos dos arquivos de imagem e vídeo
    const imagePath = `img/${word}.png`;
    const videoPath = `videos/${word}.mp4`;

    // Pega a descrição do sinal (se existir)
    const descriptionText = getDescription(word);

    // Cria elementos para exibir descrição, imagem e vídeo
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "flex-start";
    container.style.width = "100%";
    container.style.justifyContent = "space-between";

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = `<strong>${word.toUpperCase()}</strong><br>DESCRIÇÃO:<br>${descriptionText}`;

    const content = document.createElement("div");
    content.className = "content";

    // Imagem
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = `Sinal de ${word}`;
    img.onerror = function () {
        console.error("Imagem não encontrada:", imagePath);
        resultDiv.innerHTML = `Sinal não encontrado. Verifique se o arquivo ${imagePath} existe.`;
    };
    content.appendChild(img);

    // Vídeo
    const video = document.createElement("video");
    video.src = videoPath;
    video.controls = true;
    video.onerror = function () {
        console.error("Vídeo não encontrado:", videoPath);
    };
    content.appendChild(video);

    // Monta o container final
    container.appendChild(description);
    container.appendChild(content);
    resultDiv.appendChild(container);
}

// Função para retornar a descrição de cada palavra (exemplo)
function getDescription(word) {
    const descriptions = {
                // Letras do alfabeto
                "a": "Primeira letra do alfabeto.",
                "b": "Segunda letra do alfabeto.",
                "c": "Terceira letra do alfabeto.",
                "d": "Quarta letra do alfabeto.",
                "e": "Quinta letra do alfabeto.",
                "f": "Sexta letra do alfabeto.",
                "g": "Sétima letra do alfabeto.",
                "h": "Oitava letra do alfabeto.",
                "i": "Nona letra do alfabeto.",
                "j": "Décima letra do alfabeto.",
                "k": "Décima primeira letra do alfabeto.",
                "l": "Décima segunda letra do alfabeto.",
                "m": "Décima terceira letra do alfabeto.",
                "n": "Décima quarta letra do alfabeto.",
                "o": "Décima quinta letra do alfabeto.",
                "p": "Décima sexta letra do alfabeto.",
                "q": "Décima sétima letra do alfabeto.",
                "r": "Décima oitava letra do alfabeto.",
                "s": "Décima nona letra do alfabeto.",
                "t": "Vigésima letra do alfabeto.",
                "u": "Vigésima primeira letra do alfabeto.",
                "v": "Vigésima segunda letra do alfabeto.",
                "w": "Vigésima terceira letra do alfabeto.",
                "x": "Vigésima quarta letra do alfabeto.",
                "y": "Vigésima quinta letra do alfabeto.",
                "z": "Vigésima sexta letra do alfabeto.",
        
                // Números de 0 a 10
                "0": "Número zero.",
                "1": "Número um.",
                "2": "Número dois.",
                "3": "Número três.",
                "4": "Número quatro.",
                "5": "Número cinco.",
                "6": "Número seis.",
                "7": "Número sete.",
                "8": "Número oito.",
                "9": "Número nove.",
                "10": "Número dez.",
                //Elementos 
                "água": "Substância essencial para a vida, incolor, inodora e insípida.",
                "fogo": "Combustão que gera calor e luz.",
                "terra": "Superfície sólida da crosta terrestre onde pisamos, construímos etc.; chão, solo.",
                "ar": "Espaço que circunda a superfície terrestre; atmosfera."
    };

    // Retorna a descrição correspondente ou uma mensagem padrão
    return descriptions[word] || "Descrição não disponível.";
}