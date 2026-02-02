// ============================================================
// 1. BANCO DE DADOS DE BILHETES (COM SENHAS)
// ============================================================
const bancoDeAvisos = {
    // --- TURNO DA MANHÃ ---
    "406": { data: "26/01/2026", texto: "Não esquecer o livro de matemática amanhã.", senha: "604" },
    "407": { data: "26/01/2026", texto: "Avisos para a turma 407 aparecerão aqui.", senha: "407" },
    "415": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "415" },
    "416": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "416" },
    "512": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "512" },
    "513": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "513" },
    "514": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "514" },
    "601": { data: "26/01/2026", texto: "Estudar para a prova de amanhã.", senha: "601" },
    "602": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "602" },
    "603": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "603" },
    "704": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "704" },
    "705": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "705" },
    "809": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "809" },
    "811": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "811" },
    "908": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "908" },
    "910": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "910" },

    // --- TURNO DA TARDE ---
    "112": { data: "26/01/2026", texto: "Trazer lanche saudável para a oficina.", senha: "112" },
    "113": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "113" },
    "114": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "114" },
    "205": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "205" },
    "206": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "206" },
    "207": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "207" },
    "304": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "304" },
    "315": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "315" },
    "316": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "316" },
    "601 (Tarde)": { data: "26/01/2026", texto: "Trazer autorização para o passeio.", senha: "601" },
    "602 (Tarde)": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "602" },
    "709": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "709" },
    "710": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "710" },
    "803": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "803" },
    "908 (Tarde)": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "908" },
    "911": { data: "26/01/2026", texto: "Nenhum aviso para hoje.", senha: "911" }
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
        // Sucesso
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
        campoSenha.value = ""; // Limpa para nova tentativa
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