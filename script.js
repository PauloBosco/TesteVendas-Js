const listaProdutos = [];
let valorVendido;
let saldoVendas=0;

function adicionarProduto(nome, valor){
    let produto = {nome: nome, preco: valor}
    listaProdutos.push(produto);
}

function venderProduto(nome) {
    for (let i = 0; i < listaProdutos.length; i++) {
        const element = listaProdutos[i];
        if (element.nome == nome) {
            valorVendido = element.preco * 1.25;
            saldoVendas += valorVendido;
            listaProdutos.splice(i,1);
            console.log(`O produto vendido foi ${element.nome} e o valor foi ${valorVendido}`)
        }   
    }
}

function saldoDeVendas() {
    return saldoVendas;
}


adicionarProduto("god",179);
adicionarProduto("hunt",65);
adicionarProduto("zomboid",28);

venderProduto("god");
venderProduto("hunt");
venderProduto("zomboid");




console.log(listaProdutos);
console.log(saldoDeVendas());

