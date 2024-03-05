var pcs = [];


btnAdd.onclick = function()
{
    var marca = txtmarca.value;
    var placa = txtplaca.value;
    var process = txtprocess.value;

    var novo= new pc();
    novo.marca = marca;
    novo.placa = placa;
    novo.processador = process;
    
    pcs.push(novo);

    divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";

    spanAtual.innerHTML = pcs.length;
    spanTotal.innerHTML = pcs.length;
}

btnPrimeiro.onclick = function()
{
        var novo = pcs[0] 
        divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";
        spanAtual.innerHTML = 1
}

btnUltimo.onclick = function()
{
    x=pcs.length-1;
    var novo = pcs[x];
    divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";
    spanAtual.innerHTML = pcs.length;
}
btnProximo.onclick = function()
{
    var atual = Number.parseInt(spanAtual.innerHTML);
    atual++;
    if(atual<=pcs.length)
    {
        var novo = pcs[atual-1];
        divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";
        spanAtual.innerHTML = atual;
    }
}
btnAnterior.onclick = function ()
{ 
    var atual = Number.parseInt(spanAtual.innerHTML);
    atual+=-1 ;
    if(atual>=0)
    {
        var novo = pcs[atual-1];
        divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";
        spanAtual.innerHTML = atual;        
    }
}

btnOrdenar.onclick = function()
{
    pcs.sort();
    var novo = pcs[0] 
        divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";
        spanAtual.innerHTML = 1
}

btnRemoverAtual.onclick = function()
{
    var atual = Number.parseInt(spanAtual.innerHTML);
    pcs.splice(atual-1,1)
    switch (pcs.length) {
        case 0:
            divPC.innerHTML = "Nenhum PC adicionado";
            spanAtual.innerHTML = pcs.length;
            spanTotal.innerHTML = pcs.length;
            break;
    
        default:
            var novo = pcs[0]; 
            divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";
            spanAtual.innerHTML = 1
            spanTotal.innerHTML = pcs.length;
            break;
    }
}

btnRemoverPrimeiro.onclick = function()
{
    pcs.shift();
    switch (pcs.length) {
        case 0:
            divPC.innerHTML = "Nenhum PC adicionado";
            spanAtual.innerHTML = pcs.length;
            spanTotal.innerHTML = pcs.length;
            break;
    
        default:
            var novo = pcs[0]; 
            divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";
            spanAtual.innerHTML = 1
            spanTotal.innerHTML = pcs.length;
            break;
    }

}

btnRemoverUltimo.onclick = function()
{
    pcs.pop();
    switch (pcs.length) {
        case 0:
            divPC.innerHTML = "Nenhum PC adicionado";
            spanAtual.innerHTML = pcs.length;
            spanTotal.innerHTML = pcs.length;
            break;
    
        default:
            var novo = pcs[0]; 
            divPC.innerHTML = novo.marca + "</br>" + novo.placa + "</br>" + novo.processador+ "</br>";
            spanAtual.innerHTML = 1
            spanTotal.innerHTML = pcs.length;
            break;
    }

}