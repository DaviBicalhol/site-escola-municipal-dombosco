// ============================================================
// 1. BANCO DE DADOS DE BILHETES (COM SENHAS)
// ============================================================
const bancoDeAvisos = {
    // --- TURNO DA MANHÃ ---
    "406": { data: "26/01/2026", texto: "Não esquecer o livro de matemática amanhã.", senha: "604" },
    "407": { data: "26/01/2026", texto: "Avisos para a turma 407 aparecerão aqui.", senha: "704" },
    "415": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "514" },
    "416": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "614" },
    "512": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "215" },
    "513": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "315" },
    "514": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "415" },
    "601": { data: "26/01/2026", texto: "Estudar para a prova de amanhã.", senha: "106" },
    "602": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "206" },
    "603": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "306" },
    "704": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "407" },
    "705": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "507" },
    "809": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "908" },
    "811": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "118" },
    "908": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "809" },
    "910": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "019" },

    // --- TURNO DA TARDE ---
    "112": { data: "26/01/2026", texto: "Trazer lanche saudável para a oficina.", senha: "211" },
    "113": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "311" },
    "114": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "411" },
    "205": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "502" },
    "206": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "602" },
    "207": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "702" },
    "304": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "403" },
    "315": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "513" },
    "316": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "613" },
    "601 (Tarde)": { data: "26/01/2026", texto: "Trazer autorização para o passeio.", senha: "106" },
    "602 (Tarde)": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "206" },
    "709": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "907" },
    "710": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "071" },
    "803": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "308" },
    "908 (Tarde)": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "809" },
    "911": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "119" }
};

// Variável global para saber qual turma está tentando logar
let turmaAtual = "";

// ============================================================
// 2. LÓGICA DO MODAL E LOGIN DE TURMAS
// ============================================================

function abrirLogin(idTurma) {
    turmaAtual = idTurma;
    const modal = document.getElementById('modalBilhetes');
    const campoSenha = document.getElementById('campoSenha');
    const msgErro = document.getElementById('mensagemErro');

    // Reseta o estado do modal ao abrir
    document.getElementById('areaLogin').style.display = "block";
    document.getElementById('areaConteudo').style.display = "none";
    
    // Limpa senha e erros anteriores
    campoSenha.value = ""; 
    campoSenha.classList.remove('input-erro');
    msgErro.style.display = "none";
    
    document.getElementById('tituloTurma').innerText = "Acesso - Turma " + idTurma;
    modal.style.display = "block";

    setTimeout(() => campoSenha.focus(), 100);
}

function validarSenha() {
    const campoSenha = document.getElementById('campoSenha');
    const senhaDigitada = campoSenha.value;
    const msgErro = document.getElementById('mensagemErro');
    const dadosDaTurma = bancoDeAvisos[turmaAtual];

    if (dadosDaTurma && senhaDigitada === dadosDaTurma.senha) {
        
        document.getElementById('areaLogin').style.display = "none";
        document.getElementById('areaConteudo').style.display = "block";
        msgErro.style.display = "none";
        campoSenha.classList.remove('input-erro');
        
        // Carrega o conteúdo
        const lista = document.getElementById('listaBilhetes');
        lista.innerHTML = `
            <div class="bilhete-item">
                <small>Publicado em: ${dadosDaTurma.data}</small>
                <p>${dadosDaTurma.texto}</p>
            </div>
        `;
    } else {
        // ERRO: Em vez de alert, usamos o estilo visual
        msgErro.style.display = "block";
        campoSenha.classList.add('input-erro');
        campoSenha.value = ""; 
        campoSenha.focus();
    }
}

// Configuração de eventos após carregar o DOM
document.addEventListener('DOMContentLoaded', function() {
    const btnConfirmar = document.getElementById('btnConfirmarSenha');
    const campoSenha = document.getElementById('campoSenha');

    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', validarSenha);
    }

    // Permite apertar ENTER para confirmar a senha
    if (campoSenha) {
        campoSenha.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                validarSenha();
            }
        });
    }

    // Carrega o aviso geral da semana
    carregarAvisoNoCard();
});

function fecharModal() {
    document.getElementById('modalBilhetes').style.display = "none";
}

// Fecha o modal ao clicar fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('modalBilhetes');
    if (event.target == modal) {
        fecharModal();
    }
};

// ============================================================
// 3. AVISO GERAL DA SEMANA
// ============================================================
const avisoGeralSemana = {
    titulo: "Escola nas Férias",
    data: "26 à 28 Jan 2026",
    texto: "Informamos que o Programa Escola nas Férias acontecerá nos dias 26, 27 e 28. A inscrição deve ser feita na secretaria entre os dias 05/01 e 20/01 de 8h às 11h."
};

function carregarAvisoNoCard() {
    const dataGeral = document.getElementById('dataGeral');
    const tituloGeral = document.getElementById('tituloGeral');
    
    if(dataGeral && tituloGeral) {
        dataGeral.innerText = avisoGeralSemana.data;
        tituloGeral.innerText = avisoGeralSemana.titulo;
    }
}

function abrirAvisoGeral() {
    const modal = document.getElementById('modalBilhetes');
    const titulo = document.getElementById('tituloTurma');
    const lista = document.getElementById('listaBilhetes');
    const areaLogin = document.getElementById('areaLogin');
    const areaConteudo = document.getElementById('areaConteudo');

    // Avisos GERAIS não precisam de senha
    areaLogin.style.display = "none";
    areaConteudo.style.display = "block";

    titulo.innerText = avisoGeralSemana.titulo;
    lista.innerHTML = `
        <div class="bilhete-item">
            <small>Válido para: ${avisoGeralSemana.data}</small>
            <p>${avisoGeralSemana.texto}</p>
        </div>
    `;
    modal.style.display = "block";
}

// ============================================================
// 4. NAVEGAÇÃO (VOLTAR AO TOPO)
// ============================================================
const botaoTopo = document.getElementById("btnTopo");

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (botaoTopo) botaoTopo.style.display = "block";
    } else {
        if (botaoTopo) botaoTopo.style.display = "none";
    }
});

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-foto');

function mudarBanner() {
    // Esconde a foto atual
    slides[currentSlide].classList.remove('active');
    
    // Pula para a próxima (se for a última, volta para a primeira)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Mostra a nova foto
    slides[currentSlide].classList.add('active');
}

// Troca a cada 5 segundos
setInterval(mudarBanner, 5000);


document.addEventListener("DOMContentLoaded", () => {
    // Lógica do Carrossel
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide-foto');
    const pontos = document.querySelectorAll('.dot'); // Usando .dot do seu CSS

    function mostrarSlide(n) {
        if (slides.length === 0) return;

        slides.forEach(s => s.classList.remove('active'));
        pontos.forEach(p => p.classList.remove('active'));

        slideIndex = (n + slides.length) % slides.length;

        slides[slideIndex].classList.add('active');
        if (pontos[slideIndex]) {
            pontos[slideIndex].classList.add('active');
        }
    }

    window.irParaSlide = (n) => {
        mostrarSlide(n);
    };

    setInterval(() => {
        slideIndex++;
        mostrarSlide(slideIndex);
    }, 5000);

    // Lógica de Erro na Senha (usando sua classe .input-erro do CSS)
    const btnLogin = document.getElementById('btnConfirmarSenha');
    const campoSenha = document.getElementById('campoSenha');

    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            // Exemplo de validação simples para disparar seu CSS de erro
            if (campoSenha.value !== "123") { // Substitua pela sua lógica real
                campoSenha.classList.add('input-erro');
                setTimeout(() => campoSenha.classList.remove('input-erro'), 3000);
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const listaEventos = document.getElementById('lista-eventos');

    // Array de objetos com os eventos da escola
    const eventos = [
        { data: '2026-02-16', titulo: 'Recesso escolar até o dia 18/02' },
        { data: '2026-02-28', titulo: 'Assembleia Escolar' },
        { data: '2026-03-10', titulo: 'Avaliações mensais 10/03 até 20/03' },
        { data: '2026-04-13', titulo: 'Avaliação trimestral 13/03 até 17/03' }
    ];

    const hoje = new Date();

    eventos.forEach(evento => {
        const dataEvento = new Date(evento.data + "T00:00:00"); // Garante precisão da data
        const diffTempo = dataEvento - hoje;
        const diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));

        // Cria o elemento HTML do card
        const card = document.createElement('div');
        card.classList.add('evento-card');

        // Se o evento for nos próximos 7 dias, adiciona destaque
        if (diffDias >= 0 && diffDias <= 7) {
            card.classList.add('evento-proximo');
        }

        // Formata a data para o padrão brasileiro (DD/MM)
        const dataFormatada = dataEvento.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

        card.innerHTML = `
            <span class="evento-data">${dataFormatada}</span>
            <h3 class="evento-titulo">${evento.titulo}</h3>
            ${diffDias <= 7 && diffDias >= 0 ? '<small style="color: var(--cor-primaria)">➔ Acontece em breve!</small>' : ''}
        `;

        listaEventos.appendChild(card);
    });
});
