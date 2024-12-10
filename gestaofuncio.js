// Verifica se o usuário está logado como admin
document.addEventListener('DOMContentLoaded', () => {
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
        document.getElementById("login-container").style.display = "flex";
        document.getElementById("main-container").style.display = "none";
    } else {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-container").style.display = "block";
    }
});

// Função para login e verificar se o usuário é admin
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        sessionStorage.setItem("isAdmin", "true");  // Simulando um sistema de login
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-container").style.display = "block";
    } else {
        alert("Usuário ou senha incorretos.");
    }document.addEventListener('DOMContentLoaded', () => {
        const isAdmin = sessionStorage.getItem("isAdmin");
        if (isAdmin !== "true") {
            document.getElementById("login-container").style.display = "flex";
            document.getElementById("main-container").style.display = "none";
        } else {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("main-container").style.display = "block";
        }
    });
    
    // Função para login e verificar se o usuário é admin
    function login(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        if (username === "admin" && password === "admin123") {
            sessionStorage.setItem("isAdmin", "true");  // Simulando um sistema de login
            document.getElementById("login-container").style.display = "none";
            document.getElementById("main-container").style.display = "block";
        } else {
            alert("Usuário ou senha incorretos.");
        }
    }
    
    // Função para pesquisar funcionários pelo nome ou cargo
    function pesquisarFuncionario() {
        const input = document.getElementById('search');
        const filter = input.value.toUpperCase();
        const lista = document.getElementById('lista-funcionarios');
        const funcionarios = lista.getElementsByTagName('li');
    
        Array.from(funcionarios).forEach((funcionario) => {
            const nome = funcionario.getElementsByTagName('span')[0].textContent.toUpperCase();
            const cargo = funcionario.getElementsByTagName('span')[1].textContent.toUpperCase();
            if (nome.indexOf(filter) > -1 || cargo.indexOf(filter) > -1) {
                funcionario.style.display = "";
            } else {
                funcionario.style.display = "none";
            }
        });
    }
    
    // Função para gerar relatório
    function gerarRelatorio() {
        const relatorio = `
            <h3>Relatório de Funcionários</h3>
            <p><strong>Total de Funcionários Ativos:</strong> 15</p>
            <p><strong>Total de Funcionários Inativos:</strong> 3</p>
            <p><strong>Média de Salário:</strong> R$ 2.500,00</p>
            <p><strong>Funcionários com Menor Salário:</strong> João da Silva, R$ 1.800,00</p>
            <p><strong>Funcionários com Maior Salário:</strong> Maria Oliveira, R$ 4.000,00</p>
        `;
        
        // Exibir o relatório na tela
        document.getElementById('relatorioResultado').innerHTML = relatorio;
        document.getElementById('relatorioResultado').style.display = 'block';
    }
    
}

// Função para pesquisar funcionários pelo nome ou cargo
function pesquisarFuncionario() {
    const input = document.getElementById('search');
    const filter = input.value.toUpperCase();
    const lista = document.getElementById('lista-funcionarios');
    const funcionarios = lista.getElementsByTagName('li');

    Array.from(funcionarios).forEach((funcionario) => {
        const nome = funcionario.getElementsByTagName('span')[0].textContent.toUpperCase();
        const cargo = funcionario.getElementsByTagName('span')[1].textContent.toUpperCase();
        if (nome.indexOf(filter) > -1 || cargo.indexOf(filter) > -1) {
            funcionario.style.display = "";
        } else {
            funcionario.style.display = "none";
        }
    });
}

// Função para abrir o modal de edição de funcionário
function editarFuncionario(id) {
    // Carregar as informações do funcionário pelo ID
    const funcionario = obterFuncionarioPorId(id);  // Supondo que você tenha uma função que busca os dados do funcionário
    document.getElementById("editNome").value = funcionario.nome;
    document.getElementById("editCargo").value = funcionario.cargo;
    document.getElementById("editAdmissao").value = funcionario.admissao;
    document.getElementById("editSalario").value = funcionario.salario;
    document.getElementById("editStatus").value = funcionario.status;
    
    document.getElementById("editModal").style.display = "flex";
}

// Função para salvar as edições no funcionário
function salvarEdicao() {
    const nome = document.getElementById("editNome").value;
    const cargo = document.getElementById("editCargo").value;
    const admissao = document.getElementById("editAdmissao").value;
    const salario = document.getElementById("editSalario").value;
    const status = document.getElementById("editStatus").value;

    // Aqui você deve atualizar a base de dados (localStorage, banco de dados, etc.)
    // Para o exemplo, vamos apenas mostrar no console
    console.log(`Funcionario editado: ${nome}, ${cargo}, ${admissao}, ${salario}, ${status}`);

    fecharModal(); // Fecha o modal após salvar
}

// Função para fechar o modal de edição
function fecharModal() {
    document.getElementById("editModal").style.display = "none";
}

// Função para excluir um funcionário
function excluirFuncionario(id) {
    if (confirm("Tem certeza que deseja excluir este funcionário?")) {
        // Aqui você deve remover o funcionário da base de dados (localStorage, banco de dados, etc.)
        console.log(`Funcionário ${id} excluído`);
        alert("Funcionário excluído com sucesso!");
    }
}

// Função para contatar funcionário via WhatsApp
function contatarFuncionario(whatsapp) {
    const mensagem = encodeURIComponent("Olá, gostaria de conversar sobre seu status na academia.");
    window.open(`https://wa.me/${whatsapp}?text=${mensagem}`, '_blank');
}

// Função para abrir o modal de histórico do funcionário
function verHistorico(id) {
    const funcionario = obterFuncionarioPorId(id);
    const historicoList = document.getElementById("historico-list");

    // Limpar o histórico atual
    historicoList.innerHTML = '';

    // Aqui, você pode carregar as informações de histórico reais
    const historico = funcionario.historico || [];
    historico.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historicoList.appendChild(li);
    });

    document.getElementById("historicoModal").style.display = "flex";
}

// Função para fechar o modal de histórico
function fecharHistorico() {
    document.getElementById("historicoModal").style.display = "none";
}

// Função para gerar relatório de funcionários
function gerarRelatorio() {
    const relatorio = [];
    const funcionarios = [
        { nome: "Maria Oliveira", status: "Ativo", cargo: "Personal Trainer", salario: 4500 },
        { nome: "João Silva", status: "Inativo", cargo: "Recepcionista", salario: 2000 },
        // Adicione mais funcionários aqui
    ];

    funcionarios.forEach(funcionario => {
        if (funcionario.status === "Ativo") {
            relatorio.push(`${funcionario.nome} - Cargo: ${funcionario.cargo} - Salário: R$${funcionario.salario}`);
        }
    });

    if (relatorio.length > 0) {
        alert("Relatório gerado com sucesso!");
        console.log(relatorio.join("\n"));
    } else {
        alert("Nenhum funcionário ativo encontrado.");
    }
}

// Função para obter as informações de um funcionário pelo ID (simulação)
function obterFuncionarioPorId(id) {
    // Isso deveria vir de um banco de dados ou de uma lista
    // Aqui, simulamos um funcionário
    return {
        nome: "Maria Oliveira",
        cargo: "Personal Trainer",
        admissao: "2020-01-15",
        salario: 4500,
        status: "Ativo",
        historico: [
            "Promoção para Personal Trainer em 2023",
            "Avaliação de desempenho excelente em Dezembro de 2023"
        ]
    };
}
function gerarRelatorio() {
    // Aqui você pode colocar a lógica para gerar o relatório real
    const relatorio = `
        <h3>Relatório de Funcionários</h3>
        <p><strong>Total de Funcionários Ativos:</strong> 15</p>
        <p><strong>Total de Funcionários Inativos:</strong> 3</p>
        <p><strong>Média de Salário:</strong> R$ 2.500,00</p>
        <p><strong>Funcionários com Menor Salário:</strong> João da Silva, R$ 1.800,00</p>
        <p><strong>Funcionários com Maior Salário:</strong> Maria Oliveira, R$ 4.000,00</p>
    `;
    
    // Exibir o relatório na tela
    document.getElementById('relatorioResultado').innerHTML = relatorio;
    document.getElementById('relatorioResultado').style.display = 'block';
}
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Limpar qualquer mensagem de erro anterior
    if (errorMessage) {
        errorMessage.remove();
    }

    if (username === "admin" && password === "admin123") {
        sessionStorage.setItem("isAdmin", "true"); // Simulando um sistema de login
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-container").style.display = "block";
    } else {
        const errorDiv = document.createElement("div");
        errorDiv.id = "error-message";
        errorDiv.classList.add("error-message");
        errorDiv.textContent = "Usuário ou senha incorretos.";
        document.querySelector(".login-container form").appendChild(errorDiv);
    }
}
