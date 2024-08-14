// Função para mudar o texto do cabeçalho
function changeHeaderText() {
    const header = document.querySelector('header h1');
    if (header) {
        header.textContent = 'Texto Atualizado!';
    }
}

// Função para adicionar um item à lista
function addListItem() {
    const list = document.getElementById('dynamic-list');
    if (list) {
        const newItem = document.createElement('li');
        newItem.textContent = 'Novo item ' + (list.children.length + 1);
        list.appendChild(newItem);
    }
}

// Adicionar event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const changeTextBtn = document.getElementById('change-text-btn');
    if (changeTextBtn) {
        changeTextBtn.addEventListener('click', changeHeaderText);
    }

    const addItemBtn = document.getElementById('add-item-btn');
    if (addItemBtn) {
        addItemBtn.addEventListener('click', addListItem);
    }
});