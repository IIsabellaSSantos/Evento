let tarefas = [
    { id: 1, titulo: "Estudar para a prova", concluida: true },
    { id: 2, titulo: "Ir na casa da vó sábado", concluida: false },
    { id: 3, titulo: "Pagar Taciana", concluida: true },
];

const listaTarefas = document.getElementById('listaTarefas');
const filtro = document.getElementById('filtro');
const novaTarefaInput = document.getElementById('novaTarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');

// Função para exibir tarefas com base no filtro
function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    const tipoFiltro = filtro.value;
    let tarefasFiltradas = tarefas;

    if (tipoFiltro === "concluidas") {
        tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida);
    } else if (tipoFiltro === "naoConcluidas") {
        tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida);
    }

    tarefasFiltradas.forEach(tarefa => {
        const item = document.createElement("li");
        item.textContent = tarefa.titulo;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;

        checkbox.addEventListener("change", () => {
            tarefa.concluida = checkbox.checked;
            renderizarTarefas(); // Atualiza a lista
        });

        item.prepend(checkbox);
        listaTarefas.appendChild(item);
    });
}

// Atualiza ao mudar o filtro
filtro.addEventListener("change", renderizarTarefas);

// Função para adicionar nova tarefa
function adicionarTarefa() {
    const novaTarefa = novaTarefaInput.value.trim();

    if (novaTarefa !== "") {
        const tarefa = {
            id: tarefas.length + 1,
            titulo: novaTarefa,
            concluida: false
        };

        tarefas.push(tarefa);
        novaTarefaInput.value = "";  // Limpa o input
        renderizarTarefas();  // Atualiza a lista
    }
}

// Evento de click no botão "Adicionar Tarefa"
adicionarBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Impede o comportamento padrão
    adicionarTarefa();
});

// Evento de pressionamento de tecla (para Enter) no input
novaTarefaInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();  // Impede o envio de formulário
        adicionarTarefa();
    }
});

// Renderiza inicialmente
renderizarTarefas();
