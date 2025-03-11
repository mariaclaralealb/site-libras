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
