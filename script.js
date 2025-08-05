// Adicionar no início do arquivo
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classe de carregamento para transições suaves
    document.body.classList.add('loaded');
    
    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            var overlay = document.getElementById("overlay");
            overlay.classList.remove("open");
        }
    });
});

// Modificar a função searchSign para melhor feedback
function searchSign() {
    const word = document.getElementById("search").value.toLowerCase().trim();
    const resultDiv = document.getElementById("result");
    
    // Limpar resultados
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("no-results");
    
    if (!word) return;
    
    // Adicionar animação de carregamento
    resultDiv.innerHTML = '<div class="loading">Buscando...</div>';
    
    // Simular pequeno atraso para melhor UX
    setTimeout(function() {
        // Restante da função original...
        
        // Se não encontrar resultados
        if (!getDescription(word) || getDescription(word) === "Descrição não disponível.") {
            resultDiv.innerHTML = `
                <div class="no-results">
                    <p>Sinal não encontrado em nosso dicionário.</p>
                    <p>Deseja sugerir a inclusão deste sinal?</p>
                    <button onclick="suggestSign('${word}')">Sugerir Sinal</button>
                </div>
            `;
            resultDiv.classList.add("no-results");
        }
    }, 300);
}

// Nova função para sugestão de sinais
function suggestSign(word) {
    alert(`Obrigado por sugerir o sinal "${word}". Em breve nossa equipe avaliará a inclusão.`);
    document.getElementById("search").value = "";
}

// Adicionar no CSS:
/*
.loading {
    text-align: center;
    padding: 20px;
    font-style: italic;
    color: var(--dark-color);
}

.no-results {
    text-align: center;
    padding: 20px;
    color: var(--dark-color);
}

.no-results button {
    background: var(--secondary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
}

.no-results button:hover {
    background: var(--hover-color);
}
*/
// Função para alternar o menu lateral
function toggleMenu(event) {
    if (event) {
        event.stopPropagation(); // Impede a propagação do evento
    }
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("open");
    document.body.classList.toggle("menu-open");
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
                "ar": "Espaço que circunda a superfície terrestre; atmosfera.",

                //Alimentos/Bebidas
                "alimentos": "Tudo aquilo que serve para nutrir um ser vivo",
                "manga": "Fruto tropical doce, suculento, da mangueira",
                "macarrão": "massa feita de farinha de trigo, geralmente cozida e servida com molhos.",
                "melancia": "fruta grande, com casca verde, polpa vermelha e bastante água.",
                "mel": "substância doce produzida pelas abelhas a partir do néctar das flores.",
                "maracuja": "fruta com casca amarela ou roxa, polpa amarela e sabor ácido.",
                "manteiga": "derivado do leite, usado como gordura para cozinhar ou passar no pão.",
                "mandioca": "raiz rica em carboidratos, usada cozida, frita ou para fazer farinha.",
                "feijão": "leguminosa rica em ferro, consumida cozida e muito presente na culinária brasileira.",
                "frango": "carne branca de ave, consumida cozida, frita, assada ou grelhada.",
                "frutas": "alimentos naturais, geralmente doces ou ácidos, ricos em vitaminas.",
                "gelatina": "sobremesa colorida e gelatinosa feita com pó saborizado e água.",
                "jaboticaba": "fruta pequena, roxa e doce, típica do Brasil, cresce no tronco da árvore.",
                "kiwi": "fruta de casca marrom e polpa verde, sabor ácido e refrescante.",
                "laranja": "fruta cítrica rica em vitamina C, de polpa suculenta e sabor doce ou levemente ácido.",
                "leite": "líquido branco nutritivo, geralmente de vaca, consumido puro ou usado em receitas.",
                "limão": "fruta cítrica azeda, usada em sucos, temperos e sobremesas.",
                "linguiça": "embutido de carne temperada, geralmente suína, consumida frita ou assada.",
                "maça": "fruta crocante e adocicada, com casca fina e sementes centrais.",
                "ervilha": "leguminosa verde, pequena e redonda, usada em saladas, sopas e refogados.",
                "melão": "fruta grande e adocicada, com casca grossa e polpa clara.",
                "mexerica": "fruta cítrica, doce e fácil de descascar, semelhante à tangerina.",
                "salada": "mistura de vegetais crus ou cozidos, geralmente servida fria e temperada.",
                "queijo": "derivado do leite, sólido ou cremoso, usado puro ou em preparações culinárias.",
                "pirulito": "doce duro em forma de disco ou bola, preso a um palito.",
                "pipoca": "milho estourado com calor, consumido como lanche.",
                "pimenta": "fruto pequeno e ardido, usado como tempero para dar sabor picante.",
                "pêra": "fruta macia, suculenta e adocicada, com casca fina.",
                "pastel": "massa frita com recheios variados, como carne, queijo ou doce.",
                "sopa": "prato líquido e quente, feito com legumes, carnes, massas ou grãos.",
                "sorvete": "sobremesa gelada feita com leite, creme ou frutas.",
                "tomate": "fruto vermelho, usado cru em saladas ou cozido em molhos e refogados.",
                "milho": "grão amarelo, consumido cozido, em espigas, como pipoca ou farinha.",
                "morango": "fruta pequena, vermelha e adocicada, muito usada em sobremesas.",
                "ovo": "alimento nutritivo, geralmente de galinha, consumido cozido, frito ou em receitas.",
                "pão": "alimento assado feito com farinha e fermento, consumido no café da manhã ou lanches.",
                "salsicha": "embutido de carne processada, usado em lanches como cachorro-quente.",
                "vinagre": "líquido ácido feito da fermentação do vinho ou álcool, usado como tempero.",
                "legumes": "vegetais geralmente cozidos ou refogados, como cenoura, abobrinha, batata etc.",
                "repolho": "verdura de folhas sobrepostas, usada crua em saladas ou cozida em refogados.",
                "doce": "alimento preparado com alto teor de açúcar, como balas, bolos e sobremesas.",
                "óleo": "gordura líquida de origem vegetal, usada para frituras e preparações culinárias.",
                "batata": "raiz rica em amido, usada frita, cozida, assada ou em purês.",
                "batata doce": "raiz adocicada, rica em fibras, consumida cozida ou assada.",
                "banana": "fruta doce, rica em potássio, consumida crua, frita ou em sobremesas.",
                "bala": "doce pequeno, mastigável ou duro, embalado individualmente.",
                "azeite": "óleo extraído da azeitona, usado como tempero mais saudável.",
                "azeitona": "fruto da oliveira, consumido em conservas e saladas.",
                "arroz": "grão branco ou integral, base da alimentação brasileira, cozido com água e sal.",
                "amora": "fruta pequena e escura, de sabor agridoce, usada em doces e geleias.",
                "amendoim": "grão rico em gordura, consumido torrado, salgado ou em forma de pasta.",
                "alho": "tempero de sabor forte, muito usado em refogados e molhos.",
                "alface": "verdura de folhas verdes e crocantes, usada em saladas.",
                "açucar": "substância doce extraída da cana-de-açúcar, usada para adoçar alimentos.",
                "abobrinha": "legume verde e macio, usado em refogados, sopas ou grelhados.",
                "abacaxi": "fruta tropical de casca espinhosa, polpa amarela e sabor ácido.",
                "abacate": "fruta de polpa verde e cremosa, usada em vitaminas, saladas ou doces.",
                "berinjela": "legume roxo e macio, usado assado, refogado ou empanado.",
                "biscoito": "alimento assado, crocante, doce ou salgado.",
                "couve": "verdura de folhas verdes escuras, consumida refogada ou crua.",
                "coco": "fruto de casca dura e polpa branca, usado em doces, sucos ou puro.",
                "churrasco": "carne assada na brasa, típica da culinária brasileira.",
                "chocolate": "doce feito com cacau, pode ser ao leite, amargo ou branco.",
                "chiclete": "doce mastigável feito de goma com sabor artificial.",
                "chá": "bebida feita por infusão de folhas, flores ou ervas em água quente.",
                "cenoura": "raiz laranja, crocante, usada crua em saladas ou cozida.",
                "cebolinha": "erva aromática usada como tempero, de sabor suave.",
                "cebola": "bulbo usado como base para temperos, pode ser consumido cru ou cozido.",
                "carne": "alimento de origem animal, como boi, porco ou frango.",
                "bolacha": "semelhante a biscoito, termo mais comum em algumas regiões.",
                "bolo": "massa doce assada, consumida em festas ou no café da tarde.",
                "bombom": "doce de chocolate com recheio cremoso ou crocante.",
                "cachorro quente": "lanche com pão, salsicha e acompanhamentos.",
                "café": "bebida feita com grãos torrados, geralmente consumida quente.",
                "caju": "fruta com castanha externa e polpa suculenta, usada em sucos e doces.",
                "carambola": "fruta em forma de estrela quando cortada, de sabor agridoce.",
                
                //Identidade/Cumprimentos
                "Bom dia": "Cumprimento usado durante a manhã, como forma educada de iniciar uma conversa.",
                "Boa tarde": "Cumprimento usado no período da tarde, demonstrando cordialidade.",
                "Boa noite": "Cumprimento usado à noite, tanto na chegada quanto na despedida.",
                "Tchau": "Forma informal e comum de se despedir.",
                "Até logo": "Despedida que expressa a intenção de ver a pessoa novamente em breve.",
                "Oi": "Cumprimento informal e breve, comum entre conhecidos.",
                "Prazer em te conhecer": "Frase usada para demonstrar satisfação ao conhecer alguém pela primeira vez.",
                "Obrigada": "Expressão usada para demonstrar agradecimento.",
                "Desculpe": "Expressão usada para pedir perdão ou desculpas por um erro ou inconveniente.",
                "Por favor": "Expressão usada para fazer um pedido de forma educada.",
                "Bem": "Advérbio que indica estado positivo, como sentir-se bem ou realizar algo corretamente.",
                "Bom": "Adjetivo que qualifica algo como positivo, adequado ou de qualidade.",
                "Tudo bem": "Expressão usada para indicar que tudo está em ordem ou para responder positivamente a uma pergunta sobre estado.",
                "Peso": "Medida da força com que a gravidade atrai um corpo. Geralmente expressa em quilogramas (kg) ou gramas (g).",
                "Saudade": "Sentimento de melancolia ou afeto causado pela ausência de alguém, de algum lugar ou de algo importante ou querido.",
                "Meu nome": "Expressão usada para indicar o nome próprio de quem fala.",
                "Nome completo": "Conjunto do nome próprio e sobrenomes de uma pessoa, usado para identificação oficial.",
                "Seu nome": "Expressão usada para se referir ao nome da pessoa com quem se fala.",
                "Nascimento": "Evento que marca o início da vida de uma pessoa, ou o ato de nascer.",
                "Meu sinal": "Expressão usada para se referir ao signo do zodíaco de uma pessoa, determinado pela data de seu nascimento.",
                "Altura": "Medida vertical de algo ou alguém, geralmente expressa em metros (m) ou centímetros (cm), que indica a distância do chão até o topo.",
                "Cumprimento": "Ação de saudar ou dirigir palavras cordiais a alguém, como 'bom dia', 'oi' ou 'olá'; também pode se referir a gestos como aperto de mão.",
                "Idade": "Tempo de vida de uma pessoa ou ser vivo, geralmente contado em anos a partir do nascimento.",

                //Pronomes
                "Eu": "Pronome pessoal usado por quem fala para se referir a si mesmo.",
                "Seu": "Pronome possessivo usado para indicar que algo pertence à pessoa com quem se fala (masculino).",
                "Nós": "Pronome pessoal usado para se referir ao grupo que inclui quem fala e pelo menos mais uma pessoa.",
                "Meu": "Pronome possessivo usado por quem fala para indicar posse (masculino).",
                "Ele": "Pronome pessoal usado para se referir a um homem ou a algo do gênero masculino.",
                "Você": "Pronome usado para se referir diretamente à pessoa com quem se fala, geralmente de forma informal.",

                //Calendario
                "Manhã": "Substantivo feminino. Período do dia entre o nascer do sol e o meio-dia, geralmente associado ao início das atividades diárias.",
                "Tarde": "Substantivo feminino. Período do dia entre o meio-dia e o anoitecer, geralmente associado à continuidade das atividades iniciadas pela manhã.",
                "Noite": "Substantivo feminino. Período do dia que se inicia ao entardecer e vai até o amanhecer, caracterizado pela ausência de luz solar.",
                "Domingo" :"Substantivo masculino. Dia da semana considerado o último no calendário comercial e o primeiro em alguns calendários; tradicionalmente dedicado ao descanso e atividades de lazer.",
                "Segunda feira": "Substantivo feminino. Primeiro dia útil da semana, situado entre o domingo e a terça-feira, geralmente associado ao início das atividades semanais.",
                "Terça feira": "Substantivo feminino. Segundo dia útil da semana, situado entre a segunda-feira e a quarta-feira.",
                "Quarta feira" :"Substantivo feminino. Terceiro dia útil da semana, situado entre a terça-feira e a quinta-feira.",
                "Quinta feira": "Substantivo feminino. Quarto dia útil da semana, situado entre a quarta-feira e a sexta-feira.",
                "Sexta feira" :"Substantivo feminino. Quinto e último dia útil tradicional da semana, situado entre a quinta-feira e o sábado.",
                "Sábado" :"Substantivo masculino. Dia da semana situado entre a sexta-feira e o domingo, geralmente associado ao lazer e ao descanso.",
                "Janeiro": "Substantivo masculino. Primeiro mês do ano, com 31 dias; marca o início do calendário anual e é associado ao verão no hemisfério sul.",
                "Fevereiro" :"Substantivo masculino. Segundo mês do ano, com 28 dias (29 em anos bissextos); é o mês mais curto do calendário.",
                "Março" :"Substantivo masculino. Terceiro mês do ano, com 31 dias; marca o início do outono no hemisfério sul e da primavera no hemisfério norte.",
                "Abril" :"Substantivo masculino. Quarto mês do ano, com 30 dias; frequentemente associado ao outono no hemisfério sul.",
                "Maio" :"Substantivo masculino. Quinto mês do ano, com 31 dias; tradicionalmente ligado à chegada do frio no hemisfério sul.",
                "Junho" :"Substantivo masculino. Sexto mês do ano, com 30 dias; marca o início do inverno no hemisfério sul.",
                "Julho" :"Substantivo masculino. Sétimo mês do ano, com 31 dias; conhecido por ser período de férias escolares no Brasil.",
                "Agosto" :"Substantivo masculino. Oitavo mês do ano, com 31 dias; popularmente conhecido como o mês mais longo do ano.",
                "Setembro" :"Substantivo masculino. Nono mês do ano, com 30 dias; marca o início da primavera no hemisfério sul.",
                "Outubro" :"Substantivo masculino. Décimo mês do ano, com 31 dias; frequentemente associado a festividades e mudanças climáticas.",
                "Novembro": "Substantivo masculino. Décimo primeiro mês do ano, com 30 dias; penúltimo mês do calendário anual.",
                "Dezembro": "Substantivo masculino. Décimo segundo e último mês do ano, com 31 dias; marcado por festas de fim de ano e início do verão no hemisfério sul.",
                "Verão" :"Substantivo masculino. Estação do ano caracterizada por temperaturas altas, dias mais longos e noites mais curtas; no hemisfério sul, ocorre entre dezembro e março.",
                "Outono": "Substantivo masculino. Estação do ano marcada pela queda das folhas, temperaturas amenas e dias que começam a ficar mais curtos; no hemisfério sul, ocorre entre março e junho.",
                "Inverno": "Substantivo masculino. Estação do ano com temperaturas mais baixas, noites longas e dias curtos; no hemisfério sul, ocorre entre junho e setembro.",
                "Primavera": "Substantivo feminino. Estação do ano caracterizada pelo florescimento das plantas, aumento gradual das temperaturas e dias mais longos; no hemisfério sul, ocorre entre setembro e dezembro.",
                "Semana" :"Substantivo feminino. Período de sete dias consecutivos que compõem um ciclo completo, geralmente começando na segunda-feira e terminando no domingo.",
                "Passado": "Substantivo masculino. Período de tempo que já ocorreu, anterior ao presente; refere-se a eventos e fatos que aconteceram antes do momento atual.",
                "Ontem": "Advérbio de tempo. Refere-se ao dia imediatamente anterior ao dia atual; indica um momento no passado recente.",
                "Hoje": "Advérbio de tempo. Refere-se ao dia atual, em contraste com ontem.",
                "Minuto": "Substantivo masculino. Unidade de medida de tempo equivalente a 60 segundos; usada para indicar breves intervalos temporais.",
                "Futuro": "Substantivo masculino. Tempo que ainda não aconteceu; conjunto dos eventos que estão por vir.",
                "Férias" :"Substantivo feminino plural. Período de descanso temporário das atividades escolares ou profissionais; geralmente associado a lazer, viagens e relaxamento.",
                "Feriado" :"Substantivo masculino. Dia determinado por lei em que se suspendem atividades profissionais e escolares, geralmente para comemorar eventos cívicos, religiosos ou históricos.",
                "Antes" :"Advérbio de tempo. Indica que algo ocorreu ou deve ocorrer em momento anterior a outro; oposto de depois.",
                "Depois": "Advérbio de tempo. Indica que algo ocorre em um momento posterior a outro; oposto de antes.",
                "Amanhã":"Advérbio de tempo. Refere-se ao dia que sucede o dia atual; indica um futuro próximo.",
                "Ao que vem" :"Expressão. Refere-se ao próximo ano em relação ao ano atual; forma comum de indicar um futuro mais distante que 'amanhã' ou 'semana que vem'.",
                "Ano" :"Substantivo masculino. Período de tempo correspondente a 12 meses ou aproximadamente 365 dias, necessário para a Terra completar uma volta ao redor do Sol.",
                "Estações do ano":"Expressão. Divisões do ano baseadas em variações climáticas causadas pela inclinação da Terra em relação ao Sol; incluem verão, outono, inverno e primavera.",


                //Pessoas/Familia
                "Primo": "Substantivo masculino. Filho do tio ou da tia; parente de segundo grau.",
                "Padrinho" :"Substantivo masculino. Homem escolhido para acompanhar espiritualmente uma criança no batismo ou em outros ritos; também usado para designar um protetor ou mentor.",
                "Sobrinho" :"Substantivo masculino. Filho do irmão ou da irmã.",
                "Sogro" :"Substantivo masculino. Pai do cônjuge; pai do marido ou da esposa.",
                "Solteiro" :"Adjetivo/Substantivo. Pessoa que não é casada; estado civil de quem não tem cônjuge.",
                "Tio": "Substantivo masculino. Irmão do pai ou da mãe; também usado como forma de respeito a homens mais velhos próximos da família.",
                "Vizinho" :"Substantivo masculino. Pessoa que mora perto, geralmente na mesma rua, prédio ou comunidade.",
                "Vovô": "Substantivo masculino. Forma carinhosa e informal de se referir ao avô.",
                "Padrasto":"Substantivo masculino. Marido da mãe em um segundo casamento; não é o pai biológico.",
                "Adulto": "Substantivo/Adjetivo. Pessoa que atingiu a maturidade física e mental, geralmente a partir dos 18 anos.",
                "Afilhado": "Substantivo masculino. Pessoa que recebe um padrinho ou madrinha em batismo ou outro rito religioso.",
                "Namorado": "Substantivo masculino. Pessoa com quem se mantém um relacionamento amoroso sem casamento formal.",
                "Menino" :"Substantivo masculino. Criança do sexo masculino; também usado para jovens do sexo masculino.",
                "Marido": "Substantivo masculino. Homem unido em casamento com uma mulher ou outro homem.",
                "Jovem": "Substantivo/Adjetivo. Pessoa em fase de transição entre a adolescência e a vida adulta; também usado para descrever alguém com pouca idade.",
                "Noivo" :"Substantivo masculino. Homem comprometido oficialmente para casar-se com alguém.",
                "Irmão" :"Substantivo masculino. Pessoa do mesmo pai e/ou da mesma mãe.",
                "Homem" :"Substantivo masculino. Indivíduo adulto do sexo masculino.",
                "Genro" :"Substantivo masculino. Marido da filha em relação aos sogros.",
                "Gêmeos": "Substantivo masculino plural. Dois irmãos nascidos da mesma gestação.",
                "Neto": "Substantivo masculino. Filho do filho ou da filha.",
                "Filho" :"Substantivo masculino. Pessoa gerada ou adotada por alguém; descendente de primeiro grau.",
                "Amigo": "Substantivo masculino. Pessoa com quem se tem uma relação de afeto, confiança e companheirismo, sem vínculo familiar.",
                "Bebê" :"Substantivo masculino. Criança recém-nascida ou com poucos meses de vida.",
                "Velho" :"Adjetivo/Substantivo. Pessoa de idade avançada; pode ser usado de forma pejorativa ou carinhosa, dependendo do contexto.",
                "Bisavô" :"Substantivo masculino. Pai do avô ou da avó; ascendência de quarta geração.",
                "Criança" :"Substantivo feminino. Pessoa em fase inicial da vida, entre o nascimento e a adolescência.",
                "Crianças": "Substantivo feminino plural. Conjunto de indivíduos na fase da infância.",
                "Cunhado": "Substantivo masculino. Irmão do cônjuge ou marido da irmã.",
                "Filho adotivo":"Expressão. Criança ou pessoa legalmente reconhecida como filho, sem vínculo biológico com os pais.",

                //Bebidas
                "Vinho" :"Substantivo masculino. Bebida alcoólica feita a partir da fermentação do suco da uva; pode ser tinto, branco ou rosé.",
                "Bebidas" :"Substantivo feminino. Qualquer líquido que pode ser ingerido; pode ou não conter álcool.",
                "Cachaça" :"Substantivo feminino. Bebida alcoólica típica do Brasil, obtida da destilação do caldo de cana-de-açúcar fermentado.",
                "Cerveja" :"Substantivo feminino. Bebida alcoólica produzida pela fermentação de cereais, como cevada; consumida gelada, é uma das bebidas mais populares do mundo.",
                "Champanhe" :"Substantivo masculino. Tipo de vinho espumante produzido na região de Champagne, na França; associado a celebrações.",
                "Refrigerante": "Substantivo masculino. Bebida não alcoólica, gaseificada, geralmente doce e com sabores variados; muito consumida em todo o mundo.",
                "Suco" :"Substantivo masculino. Bebida não alcoólica extraída de frutas, legumes ou vegetais, geralmente consumida fresca.",

                //Cores
                "Bege" :"Substantivo masculino. Cor clara, próxima ao tom da areia ou do creme; transmite suavidade e neutralidade.",
                "Azul": "Substantivo masculino. Cor que remete ao céu e ao mar; associada à tranquilidade, confiança e serenidade.",
                "Prata" :"Substantivo masculino. Cor metálica semelhante ao brilho do metal prata; associada à modernidade, tecnologia e sofisticação.",
                "Vermelho": "Substantivo masculino. Cor intensa, associada ao fogo, à paixão, ao amor e à energia.",
                "Branco": "Substantivo masculino. Cor da luz total; simboliza pureza, paz e limpeza.",
                "Cinza" :"Substantivo masculino. Cor intermediária entre o branco e o preto; representa neutralidade, equilíbrio ou indecisão.",
                "Claro" :"Adjetivo. Indica uma tonalidade mais suave ou iluminada de uma cor.",
                "Laranja" :"Substantivo masculino. Cor vibrante resultante da mistura de vermelho e amarelo; associada à criatividade e entusiasmo.",
                "Escuro": "Adjetivo. Indica uma tonalidade mais profunda ou fechada de uma cor.",
                "Lilás": "Substantivo masculino. Cor suave entre o roxo e o rosa; ligada à espiritualidade e à delicadeza.",
                "Marrom": "Substantivo masculino. Cor que lembra a terra ou madeira; associada à estabilidade e rusticidade.",
                "Rosa" :"Substantivo masculino. Cor delicada, entre o vermelho e o branco; associada ao romantismo, doçura e carinho.",
                "Roxo" :"Substantivo masculino. Cor intensa entre o azul e o vermelho; ligada à nobreza, mistério e espiritualidade.",
                "Verde" :"Substantivo masculino. Cor associada à natureza, equilíbrio, saúde e esperança.",
                "Ouro": "Substantivo masculino. Cor metálica semelhante ao metal ouro; associada à riqueza, prestígio e luxo.",
                "Preto" :"Substantivo masculino. Cor da ausência de luz; simboliza elegância, poder ou luto, dependendo do contexto.",
                "Amarelo": "Substantivo masculino. Cor vibrante ligada ao sol, à alegria, à energia e à criatividade.",



};

    // Retorna a descrição correspondente ou uma mensagem padrão
    return descriptions[word] || "Descrição não disponível.";
}
// Accordion functionality
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});
// Back to top button
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});