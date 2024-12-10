// Dados dos alunos
let alunos = [
    { id: 1, nome: "João da Silva", pagamento: "Em dia", status: "ativo", telefone: "1234567890" },
    { id: 2, nome: "Maria Oliveira", pagamento: "Pendente", status: "inativo", telefone: "0987654321" },
    { id: 3, nome: "Carlos Souza", pagamento: "Em dia", status: "ativo", telefone: "1122334455" },
];

let alunoEditando = null;

// Função para exibir a lista de alunos
function exibirAlunos() {
    const listaAlunos = document.getElementById('lista-alunos');
    listaAlunos.innerHTML = '';

    alunos.forEach(aluno => {
        const alunoItem = document.createElement('li');
        alunoItem.innerHTML = `
            <span>${aluno.nome} - Pagamento: ${aluno.pagamento} - Status: ${aluno.status}</span>
            <button class="edit-button" onclick="editarAluno(${aluno.id})">Editar</button>
            <button onclick="excluirAluno(${aluno.id})">Excluir</button>
            <button class="whatsapp-button" onclick="contatarAluno('${aluno.telefone}')">WhatsApp</button>
            <button onclick="visualizarContrato(${aluno.id})">Visualizar Contrato</button>
        `;
        listaAlunos.appendChild(alunoItem);
    });
}

// Função para pesquisar alunos
function pesquisarAluno() {
    const termo = document.getElementById('search').value.toLowerCase();
    const listaAlunos = document.getElementById('lista-alunos');
    const alunosFiltrados = alunos.filter(aluno => aluno.nome.toLowerCase().includes(termo));

    listaAlunos.innerHTML = '';

    if (alunosFiltrados.length === 0) {
        listaAlunos.innerHTML = '<li>Nenhum aluno encontrado</li>';
    } else {
        alunosFiltrados.forEach(aluno => {
            const alunoItem = document.createElement('li');
            alunoItem.innerHTML = `
                <span>${aluno.nome} - Pagamento: ${aluno.pagamento} - Status: ${aluno.status}</span>
                <button class="edit-button" onclick="editarAluno(${aluno.id})">Editar</button>
                <button onclick="excluirAluno(${aluno.id})">Excluir</button>
                <button class="whatsapp-button" onclick="contatarAluno('${aluno.telefone}')">WhatsApp</button>
                <button onclick="visualizarContrato(${aluno.id})">Visualizar Contrato</button>
            `;
            listaAlunos.appendChild(alunoItem);
        });
    }
}

// Função para editar um aluno
function editarAluno(id) {
    alunoEditando = alunos.find(aluno => aluno.id === id);
    document.getElementById('editNome').value = alunoEditando.nome;
    document.getElementById('editPagamento').value = alunoEditando.pagamento;
    document.getElementById('editStatus').value = alunoEditando.status;
    document.getElementById('editModal').style.display = 'flex';
}

// Função para salvar as edições do aluno
function salvarEdicao() {
    alunoEditando.nome = document.getElementById('editNome').value;
    alunoEditando.pagamento = document.getElementById('editPagamento').value;
    alunoEditando.status = document.getElementById('editStatus').value;

    exibirAlunos();
    fecharModal();
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Função para excluir um aluno
function excluirAluno(id) {
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
        alunos = alunos.filter(aluno => aluno.id !== id);
        exibirAlunos();
    }
}

// Função para entrar em contato via WhatsApp
function contatarAluno(telefone) {
    window.open(`https://wa.me/${telefone}`, '_blank');
}

// Função para visualizar o contrato assinado do aluno
function visualizarContrato(id) {
    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        alert("Aluno não encontrado.");
        return;
    }

    const contratoAssinado = `
        Contrato de Prestação de Serviços de Academia
        -------------------------------------------
        Contrato assinado por: ${aluno.nome}

        Termos e condições:
        - O aluno se compromete a frequentar regularmente a academia...
        - O valor da mensalidade é de R$ 150,00...
        - O aluno concorda com o cancelamento e regras da academia...

        (Outros termos do contrato)
    `;

    // Exibir o contrato no modal
    document.getElementById('contractText').textContent = contratoAssinado;
    document.getElementById('contractModal').style.display = 'flex';
}

// Função para fechar o modal do contrato
function fecharContractModal() {
    document.getElementById('contractModal').style.display = 'none';
}

// Fechar modal de contrato ao clicar fora da área de conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById('contractModal')) {
        fecharContractModal();
    }
};

// Exibe a lista inicial de alunos
exibirAlunos();
