// date
// description
// value
// entrada
// saida 
// generater-table

// Confirmar
// Deletar
// Salvar
// Fechar faturamento


const Data = document.getElementById('date');
const descricao = document.getElementById('description');
const valor = Number(document.getElementById('value').value);
const entrada = document.getElementById('entrada');
const saida = document.getElementById('saida');

// Tabela
const GerarTabela = document.getElementById('generater-table');

// Btns
const confirmar = document.getElementById('Confirmar');
const deletar = document.getElementById('Deletar');
const salvar = document.getElementById('Salvar');
const fecharFaturamento = document.getElementById('Fechar faturamento');

//Valores do faturamento tabela 2
const ValoresFaturamento = document.getElement('resposta-table')

function Confirmar() {
    console.log('confirmarFaturamento');
      // Validar dados
       if (Data.value === '' || descricao.value === '' || valor.value === '') {
        alert('Preencha todos os campos');
        return;
      // Validar entrada/saida
      }else if(entrada.checked && saida.checked){
        alert('Selecione apenas uma das opções entrada ou saída');
        return;
    }
    addTableRow(Data.value, descricao.value, valor, entrada.checked, saida.checked);
  }
  // Adicionar dados na lista
  function addTableRow(data, descricao, valor, entrada, saida) {
    console.log('addTableRow');

    const newRow = GerarTabela.insertRow();
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    const cell3 = newRow.insertCell();
    const cell4 = newRow.insertCell();
    const cell5 = newRow.insertCell();

    cell1.textContent = data;
    cell2.textContent = descricao;
    cell3.textContent = valor;
    cell4.textContent = entrada ? 'Entrada' : 'Saída'; // Display a user-friendly value
    cell5.textContent = saida ? 'Saída' : 'Entrada'; // Assuming only one can be true


}
    

function Deletar(Deletar) {
   console.log('deletarFaturamento');
    // Remover um dado selecionado da lista

    // Atualizar tabela

}

function Salvar(Salvar) {
   console.log('salvarFaturamento');
    // Salvar dados no local storage
    // Atualizar tabela
}

function FecharFaturamento(FecharFaturamento) {
   console.log('fecharFaturamento');
    // Fechar faturamento e voltar para a tela inicial  vai aparecer na segunda tabela
    // Gerar tabela
}




// Eventos
confirmar.addEventListener('click', Confirmar);
deletar.addEventListener('click', Deletar);
salvar.addEventListener('click', Salvar);
fecharFaturamento.addEventListener('click', FecharFaturamento);
