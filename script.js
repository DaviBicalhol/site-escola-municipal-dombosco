// ============================================================
// 1. BANCO DE DADOS DE BILHETES (COM SENHAS)
// ============================================================
const bancoDeAvisos = {
    // --- TURNO DA MANHÃ ---
    "406": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "604" },
    "407": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "704" },
    "415": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "514" },
    "416": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "614" },
    "512": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "215" },
    "513": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "315" },
    "514": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "415" },
    "601": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "106" },
    "602": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "206" },
    "603": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "306" },
    
    "704": { data: "26/01/2026", texto: "Atenção!<br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br>📅 Sexta-feira <br>⏰ 7h30min às 8h30min <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br>📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11h <br><br> Contamos com a presença de todos. <br> <b>Atenciosamente, Equipe Gestora<b>", senha: "407" },
    
    "705": { data: "26/01/2026", texto: "Atenção!<br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br>📅 Sexta-feira <br>⏰ 7h30min às 8h30min <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br>📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11h <br><br> Contamos com a presença de todos. <br> <b>Atenciosamente, Equipe Gestora<b>", senha: "507" },
    
    "809": { data: "26/01/2026", texto: "Atenção! <br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br>📅 Sexta-feira <br> ⏰ 16h às 17h  <br><br>A família que não puder comparecer nesse horário poderá retirar o livro: <br><br>📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11<br><br>Contamos com a presença de todos. <br> <b>Atenciosamente, Equipe Gestora<b>", senha: "908" },
    
    "811": { data: "26/01/2026", texto: "Atenção! <br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br>📅 Sexta-feira <br> ⏰ 16h às 17h  <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br>📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11<br><br>Contamos com a presença de todos. <br> <b>Atenciosamente, Equipe Gestora<b>", senha: "118" },
    
    "908": { data: "05/03/2026", texto: "Atenção! <br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br> 📅 Sexta-feira, 06/03/26 <br> ⏰ 16h às 17h <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br> 📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11h <br> Contamos com a presença de todos. <br> <b> Atenciosamente, Equipe Gestora <b>", senha: "809" },
    
    "910": { data: "05/03/2026", texto: "Atenção! <br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br> 📅 Sexta-feira, 06/03/26 <br> ⏰ 16h às 17h <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br> 📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11h <br> Contamos com a presença de todos. <br> <b> Atenciosamente, Equipe Gestora <b>", senha: "019" },

    // --- TURNO DA TARDE ---
    "112": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "211" },
    "113": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "311" },
    "114": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "411" },
    "205": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "502" },
    "206": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "602" },
    "207": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "702" },
    "304": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "403" },
    "315": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "513" },
    "316": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "613" },
    "601 (Tarde)": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "106" },
    "602 (Tarde)": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "206" },
    
    "709": { data: "26/01/2026", texto: "Atenção!<br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br>📅 Sexta-feira <br>⏰ 7h30min às 8h30min <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br>📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11h <br><br> Contamos com a presença de todos. <br> <b>Atenciosamente, Equipe Gestora<b>", senha: "907" },
    
    "710": { data: "26/01/2026", texto: "Atenção!<br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br>📅 Sexta-feira <br>⏰ 7h30min às 8h30min <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br>📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11h <br><br> Contamos com a presença de todos. <br> <b>Atenciosamente, Equipe Gestora<b>", senha: "017" },
    
    "803": { data: "26/01/2026", texto: "Atenção! <br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br>📅 Sexta-feira <br> ⏰ 16h às 17h A <br><br>família que não puder comparecer nesse horário poderá retirar o livro: <br><br>📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11<br><br>Contamos com a presença de todos. <br> <b>Atenciosamente, Equipe Gestora<b>", senha: "308" },
    
    "908 (Tarde)": { data: "05/03/2026", texto: "Atenção! <br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br> 📅 Sexta-feira, 06/03/26 <br> ⏰ 16h às 17h <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br> 📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11h <br> Contamos com a presença de todos. <br> <b> Atenciosamente, Equipe Gestora <b>", senha: "809" },
    
    "911": { data: "05/03/2026", texto: "Atenção! <br> Informamos que haverá reunião para entrega de livros didáticos na: <br><br> 📅 Sexta-feira, 06/03/26 <br> ⏰ 16h às 17h <br><br> A família que não puder comparecer nesse horário poderá retirar o livro: <br><br> 📌 Sexta-feira: das 13h às 15h <br>📌 Segunda-feira: das 9h às 11h <br> Contamos com a presença de todos. <br> <b> Atenciosamente, Equipe Gestora <b>", senha: "119" }
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
    const btn = document.getElementById('btnConfirmarSenha');

    // Log para você ver no F12 do navegador
    console.log("Abrindo login para a turma: " + idTurma);
    console.log("Tentativas atuais desta turma: " + (tentativasPorTurma[idTurma] || 0));

    // Reset padrão do Modal
    document.getElementById('areaLogin').style.display = "block";
    document.getElementById('areaConteudo').style.display = "none";
    campoSenha.value = "";
    campoSenha.classList.remove('input-erro');

    // VERIFICAÇÃO CRUCIAL: Se a turma já estiver bloqueada, mantém o botão desativado
    if (tentativasPorTurma[idTurma] >= 3) {
        btn.disabled = true;
        btn.style.backgroundColor = "#ccc";
        msgErro.innerText = "Esta turma está temporariamente bloqueada.";
        msgErro.style.display = "block";
    } else {
        btn.disabled = false;
        btn.style.backgroundColor = "";
        msgErro.style.display = "none";
    }

    document.getElementById('tituloTurma').innerText = "Acesso - Turma " + idTurma;
    modal.style.display = "block";
    setTimeout(() => campoSenha.focus(), 100);
}
function validarSenha() {
    const campoSenha = document.getElementById('campoSenha');
    const msgErro = document.getElementById('mensagemErro');
    const btn = document.getElementById('btnConfirmarSenha');
    const dadosDaTurma = bancoDeAvisos[turmaAtual];

    if (!tentativasPorTurma[turmaAtual]) tentativasPorTurma[turmaAtual] = 0;

    if (dadosDaTurma && campoSenha.value === dadosDaTurma.senha) {
        console.log("Senha correta para a turma " + turmaAtual);
        tentativasPorTurma[turmaAtual] = 0;
        
        document.getElementById('areaLogin').style.display = "none";
        document.getElementById('areaConteudo').style.display = "block";
        
        const lista = document.getElementById('listaBilhetes');
        // Versão "quebrada" para evitar erro 403 da Hostinger
        lista.innerHTML = '<' + 'div class="bilhete-item">' + 
                          '<' + 'small>Publicado em: ' + dadosDaTurma.data + '<' + '/small>' +
                          '<' + 'p>' + dadosDaTurma.texto + '<' + '/p>' + 
                          '<' + '/div>';
    } else {
        tentativasPorTurma[turmaAtual]++;
        console.log("Erro na turma " + turmaAtual + ". Tentativa: " + tentativasPorTurma[turmaAtual]);

        if (tentativasPorTurma[turmaAtual] >= 3) {
            btn.disabled = true;
            btn.style.backgroundColor = "#ccc";
            msgErro.innerText = "Muitas tentativas! Turma " + turmaAtual + " bloqueada por 60s.";
            
            setTimeout(function() {
                tentativasPorTurma[turmaAtual] = 0;
                // Só reativa se o usuário ainda estiver com o modal desta turma aberto
                if (turmaAtual === idTurmaOriginal) { 
                    btn.disabled = false;
                    btn.style.backgroundColor = "";
                    msgErro.style.display = "none";
                }
                console.log("Bloqueio da turma " + turmaAtual + " expirou.");
            }, 60000);
        } else {
            msgErro.innerText = "Senha incorreta! Tentativa " + tentativasPorTurma[turmaAtual] + " de 3.";
            msgErro.style.display = "block";
            campoSenha.classList.add('input-erro');
            setTimeout(() => campoSenha.classList.remove('input-erro'), 500);
        }
    }
    campoSenha.value = "";
}

// 1. Objeto para armazenar as tentativas de cada turma individualmente
let tentativasPorTurma = {};

function validarSenha() {
    const campoSenha = document.getElementById('campoSenha');
    const senhaDigitada = campoSenha.value;
    const msgErro = document.getElementById('mensagemErro');
    const btn = document.getElementById('btnConfirmarSenha');
    const dadosDaTurma = bancoDeAvisos[turmaAtual];

    if (!tentativasPorTurma[turmaAtual]) {
        tentativasPorTurma[turmaAtual] = 0;
    }

    if (btn.disabled) return;

    if (dadosDaTurma && senhaDigitada === dadosDaTurma.senha) {
        
        document.getElementById('areaLogin').style.display = "none";
        document.getElementById('areaConteudo').style.display = "block";
        msgErro.style.display = "none";
        campoSenha.classList.remove('input-erro');
        tentativasPorTurma[turmaAtual] = 0; 
        
        // Carrega o conteúdo (lógica que você já tem)
        const lista = document.getElementById('listaBilhetes');
        lista.innerHTML = '<div class="bilhete-item"><small>Publicado em: ' + dadosDaTurma.data + '</small><p>' + dadosDaTurma.texto + '</p></div>';
    } else {
        // ERRO: Aumenta o contador apenas da turma atual
        tentativasPorTurma[turmaAtual]++;
        
        if (tentativasPorTurma[turmaAtual] >= 3) {
            // BLOQUEIO ESPECÍFICO DA TURMA
            msgErro.innerText = "Muitas tentativas para a Turma " + turmaAtual + "! Bloqueado por 60s.";
            msgErro.style.display = "block";
            btn.disabled = true;
            btn.style.backgroundColor = "#ccc";

            setTimeout(function() {
                tentativasPorTurma[turmaAtual] = 0; 
                btn.disabled = false;
                btn.style.backgroundColor = "";
                msgErro.style.display = "none";
            }, 60000); 

        } else {
            // ERRO SIMPLES
            msgErro.innerText = "Senha incorreta! Tentativa " + tentativasPorTurma[turmaAtual] + " de 3.";
            msgErro.style.display = "block";
            campoSenha.classList.add('input-erro');
            setTimeout(() => campoSenha.classList.remove('input-erro'), 500);
        }
        
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
   
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
}

setInterval(mudarBanner, 5000);

document.addEventListener("DOMContentLoaded", () => {
    // Lógica do Carrossel
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide-foto');
    const pontos = document.querySelectorAll('.dot'); 

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

    // Lógica de Erro na Senha 
    const btnLogin = document.getElementById('btnConfirmarSenha');
    const campoSenha = document.getElementById('campoSenha');

    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            if (campoSenha.value !== "123") { 
                campoSenha.classList.add('input-erro');
                setTimeout(() => campoSenha.classList.remove('input-erro'), 3000);
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const listaEventos = document.getElementById('lista-eventos');

    const eventos = [
        { 
            data: '2026-02-26', 
            titulo: 'Retorno da Escola Integrada',
            descricao: 'Prezadas famílias,<br><br>Informamos que amanhã, 26/02 (quinta-feira), terão início as aulas da Escola Integrada para os estudantes veteranos, ou seja, aqueles que já frequentavam a Integrada no ano de 2025.<br><br>Neste primeiro momento, o atendimento será destinado apenas a esses alunos, para que possamos organizar as turmas e acolher as crianças com tranquilidade.<br><br>Em breve, enviaremos novas orientações sobre o início para os demais estudantes.'
        },
        { data: '2026-02-28', titulo: 'Assembleia Escolar', descricao: 'Pauta:<br><ul><li>Apresentação equipe gestão escolar 2026; <li>Regras e regimento escolar; <li>Entrega de uniforme escolar; <li> Apresentação site da escola; <li> Finalização obras PEI;  <li> Prestação de contas 2025;  <li>Informes Gerais..' },
        { data: '2026-03-10', titulo: 'Avaliações mensais', descricao: 'Período de avaliações mensais do 1º trimestre. Entre os dias 10/03 e 20/03' },
        { data: '2026-04-13', titulo: 'Avaliação trimestral', descricao: 'Início das provas trimestrais para todas as turmas. Entre os dias 13/04 e 17/04' }
    ];

    const hoje = new Date();

    eventos.forEach(evento => {
        const dataEvento = new Date(evento.data + "T00:00:00");
        const diffDias = Math.ceil((dataEvento - hoje) / (1000 * 60 * 60 * 24));

        const card = document.createElement('div');
        card.classList.add('evento-card');
        card.style.cursor = 'pointer'; 

        if (diffDias >= 0 && diffDias <= 7) card.classList.add('evento-proximo');

        const dataFormatada = dataEvento.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

        card.innerHTML = `
            <span class="evento-data">${dataFormatada}</span>
            <h3 class="evento-titulo">${evento.titulo}</h3>
            <small style="color: #666">Clique para ver detalhes</small>
        `;

        // Abrir o aviso ao clicar
        card.onclick = () => abrirAvisoEvento(evento.titulo, evento.descricao);

        listaEventos.appendChild(card);
    });
});

// Função para exibir o aviso (Versão Anti-Bloqueio Hostinger)
    function abrirAvisoEvento(titulo, descricao) {
        var modal = document.getElementById('modalBilhetes');
        var areaLogin = document.getElementById('areaLogin');
        var areaConteudo = document.getElementById('areaConteudo');
        var lista = document.getElementById('listaBilhetes');
        
        document.getElementById('tituloTurma').innerText = titulo;
        
        if(areaLogin) areaLogin.style.display = "none";
        if(areaConteudo) areaConteudo.style.display = "block";
        
        lista.innerHTML = "";
        var divItem = document.createElement("div");
        divItem.className = "bilhete-item";
        
        var paragrafo = document.createElement("p");
        paragrafo.innerHTML = descricao; 
        
        divItem.appendChild(paragrafo);
        lista.appendChild(divItem);
        
        if(modal) modal.style.display = "block";
    }
    // Função para ativar a animação de Fade-In nos blocos de história
document.addEventListener("DOMContentLoaded", function() {
    const blocos = document.querySelectorAll('.bloco-historia');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
            }
        });
    }, {
        threshold: 0.15 // O bloco aparece quando 15% dele estiver visível
    });

    blocos.forEach(bloco => {
        observer.observe(bloco);
    });
});