// Este é o seu "banco de dados" de bilhetes. 
// Para mudar um aviso, basta alterar o texto entre as aspas.
const bancoDeAvisos = {
    // --- TURNO DA MANHÃ ---
    "406": { data: "26/01/2026", texto: "Não esquecer o livro de matemática amanhã." },
    "407": { data: "26/01/2026", texto: "Avisos para a turma 407 aparecerão aqui." },
    "415": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "416": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "512": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "513": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "514": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "601": { data: "26/01/2026", texto: "Estudar para a prova de amanhã." },
    "602": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "603": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "704": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "705": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "809": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "811": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "908": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "910": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },

    // --- TURNO DA TARDE ---
    "112": { data: "26/01/2026", texto: "Trazer lanche saudável para a oficina." },
    "113": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "114": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "205": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "206": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "207": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "304": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "315": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "316": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "601 (Tarde)": { data: "26/01/2026", texto: "Trazer autorização para o passeio." },
    "602 (Tarde)": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "709": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "710": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "803": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "908 (Tarde)": { data: "26/01/2026", texto: "Nenhum aviso para hoje." },
    "911": { data: "26/01/2026", texto: "Nenhum aviso para hoje." }
};
function abrirLogin(idTurma) {
    const modal = document.getElementById('modalBilhetes');
    const titulo = document.getElementById('tituloTurma');
    const lista = document.getElementById('listaBilhetes');

    titulo.innerText = "Turma " + idTurma;

    const dadosDaTurma = bancoDeAvisos[idTurma];

    if (dadosDaTurma) {
        lista.innerHTML = `
            <div class="bilhete-item">
                <small>Publicado em: ${dadosDaTurma.data}</small>
                <p>${dadosDaTurma.texto}</p>
            </div>
        `;
    } else {
        lista.innerHTML = `
            <div class="bilhete-item">
                <p>Não há avisos registrados para hoje.</p>
            </div>
        `;
    }
    modal.style.display = "block";
}

// 3. FUNÇÕES DE APOIO (Fechar o Modal)
function fecharModal() {
    document.getElementById('modalBilhetes').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modalBilhetes');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

