const listaProdutos = [];
let saldoVendas=0;

function adicionarProduto(nome, valor){
    let produto = {nome: nome, preco: valor}
    listaProdutos.push(produto);
}

function venderProduto(nome) {
    let encontrouElemento = false;
    for (let i = 0; i < listaProdutos.length; i++) {
        const elemento = listaProdutos[i];
        if (elemento.nome == nome) {
            let valorVendido = elemento.preco * 1.25;
            saldoVendas += valorVendido;
            listaProdutos.splice(i,1);
            console.log(`O produto vendido foi ${elemento.nome} e o valor foi ${valorVendido.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`);
            encontrouElemento = true;
        }     
    }
    if(!encontrouElemento){
        console.log(`Não foi ENCONTRADO o produto ${nome}`);
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
let saldoTotal = saldoDeVendas();
console.log(`Total Vendas: ${saldoTotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`);

