
const cardapio={
lanches:{titulo:"🍔 Lanches",descricao:"Todos os lanches acompanham molho de alho.",produtos:[
["X-Burguer",19],["Pop Chicken",22],["Chicken",26],["X-Calabresa",27],["X-Bacon",27],["X-Salada",25],["X-Rings",27],["Especial Duplo Cheddar",37],["Duplo Cheddar",33],["Americano",28],["Supremo Tropical",39,"Hambúrguer, provolone, abacaxi, bacon, cebola caramelizada e alface."]]},
baldes:{titulo:"🍗 Baldes",descricao:"Escolha Coxinha, Sassami ou Misto + R$10. Todo balde acompanha ketchup e barbecue.",produtos:[
["Balde 8 unidades",21,"8 unidades"],["Balde P",40,"12 unidades"],["Balde M",50,"15 unidades"],["Balde G",60,"20 unidades"],["Balde Fritas P",55.90,"12 unidades + 400g de batata ou polenta. Metade frango e metade acompanhamento."],["Balde Fritas M",65.90,"15 unidades + 600g de batata ou polenta. Metade frango e metade acompanhamento."]]},
baldesTulipa:{titulo:"🍗 Baldes de Tulipa",descricao:"Todos acompanham barbecue e ketchup.",produtos:[
["Balde de Tulipa — 8 unidades",26,"8 unidades de tulipa"],["Balde de Tulipa P",54],["Balde de Tulipa M",64],["Balde de Tulipa G",74],["Balde de Fritas de Tulipa P",70],["Balde de Fritas de Tulipa M",80]]},
combos:{titulo:"🔥 Combos",descricao:"Combos de frango, batatas e lanches.",produtos:[
["Combo Individual de Frango",36,"8 unidades + 300g de batata ou polenta + refrigerante 220ml. Acompanha barbecue e ketchup."],
["Combo Duo de Frango",66,"12 unidades + 300g de batata ou polenta + refrigerante 600ml. Acompanha barbecue, ketchup e creme de alho."],
["Combo Família de Frango",106,"20 unidades + 500g de batata ou polenta + refrigerante 2 litros. Acompanha quatro molhos."],
["Combo 1",96,"1kg de frango + 1kg de batata com bacon e cheddar."],
["Combo 2 — Misto",120,"1kg de frango à escolha (Sassami ou Coxinha) + 1kg de polenta frita + 500g de calabresa acebolada."],
["Combo 3",116,"1kg de frango à escolha (Sassami ou Coxinha) + 500g de batata + 500g de anel de cebola + 500g de polenta + refrigerante 2 litros."],
["Combo 4",120,"1kg de mandioca + 1kg de Sassami + 500g de calabresa acebolada + refrigerante 2 litros."],
["Combo 5",50,"1kg de batata com bacon e cheddar."],
["Combo 6",40,"1kg de mandioca frita + 500g de calabresa acebolada."],
["Combo Individual Chicken",45,"1 Chicken + 300g de batata frita + refrigerante 220ml."],
["Combo Duo Chicken",66,"2 Chickens + 500g de batata + 2 refrigerantes 220ml."],
["Combo Trio Chicken",80,"3 Chickens + 500g de batata + 3 refrigerantes 220ml."],
["Combo Família Chicken",150,"5 Chickens + 1kg de batata + refrigerante 2 litros."],
["Combo Especial Duplo Cheddar — Duo",84,"2 Especial Duplo Cheddar + 600g de batata + 2 refrigerantes 220ml."],
["Combo Especial Duplo Cheddar — Individual",47,"1 Especial Duplo Cheddar + 300g de batata + refrigerante 220ml."],
["Combo Especial Lanche",80,"2 Chickens + 500g de batata com bacon e cheddar + refrigerante 600ml."],
["Combo Individual Chicken com Cheddar e Bacon",40,"1 Chicken + 300g de batata com cheddar e bacon + refrigerante 220ml."]]},
porcoes:{titulo:"🍟 Porções",descricao:"Porções para acompanhar seu pedido.",produtos:[
["Salada Americana",28,"Alface americana, tomate cereja, frango crocante e nosso molho especial."],
["Salada Americana G",42,"Salada americana tamanho grande."],
["Batata Apimentada",38,"Acompanha molho de pimenta."],
["Polenta Frita — 500g",17],["Polenta Frita — 300g",12],
["Anel de Cebola — 500g",35],["Anel de Cebola — 300g",20]]},
batatas:{titulo:"🥔 Batatas",descricao:"Batatas fritas e especiais.",produtos:[
["Batata Frita — 300g",19],["Batata Frita — 500g",30],["Batata Bacon e Cheddar — 500g",36]]},
bebidas:{titulo:"🥤 Bebidas",descricao:"Refrigerantes e água.",produtos:[
["Coca-Cola — Lata 350ml",6],["Coca-Cola Zero — Lata 350ml",6],["Fanta Guaraná — Lata 350ml",6],["Sprite — Lata 350ml",6],["Fanta Laranja — Lata 350ml",6],
["Coca-Cola — 600ml",9],["Coca-Cola Zero — 600ml",9],["Fanta Guaraná — 600ml",9],["Sprite — 600ml",9],["Fanta Laranja — 600ml",9],
["Coca-Cola — 2 litros",15],["Coca-Cola Zero — 2 litros",15],["Guaraná — 2 litros",14],["Fanta — 2 litros",14],["Sprite — 2 litros",14],["Água com gás",3.5]]},
molhos:{titulo:"🥣 Molhos",descricao:"Molhos extras.",produtos:[
["Molho Cheddar",6],["Molho de Pimenta",6],["Mostarda e Mel",6],["Abacaxi com Pimenta",6],["Creme de Alho",6],["Barbecue",5],["Ketchup",5]]},
adicionais:{titulo:"➕ Adicionais",descricao:"Adicionais para seus lanches.",produtos:[
["Anel de cebola",3],["Hambúrguer",10],["Bacon",5],["Muçarela",4],["Alface",1],["Catupiry",5],["Tomate",1],["Cebola",1],["Cheddar",5],["Cebola roxa",4]]}
};

let carrinho=[],categoriaAtual="",baldeAtual=null,tipoFrango="",misto=[],lancheAtual=null,formaRecebimento="entrega",formaPagamento="",precisaTroco="",trocoPara="";
const chavePix="64213198000174";
const dinheiro=v=>Number(v).toFixed(2).replace(".",",");

function esconderTodas(){
document.getElementById("inicio").classList.add("hidden");
document.getElementById("cardapio").classList.add("hidden");
document.getElementById("produtosPagina").classList.add("hidden");
document.getElementById("secaoPagamentos").classList.add("hidden");
document.querySelector("footer")?.classList.add("hidden");
}

function mostrarInicio(){
esconderTodas();
document.getElementById("inicio").classList.remove("hidden");
scrollTo(0,0);
}

function mostrarCardapio(){
esconderTodas();
document.getElementById("cardapio").classList.remove("hidden");
scrollTo(0,0);
}

function voltarCategorias(){mostrarCardapio();}

function abrirCategoria(nome){
categoriaAtual=nome;
let c=cardapio[nome];
esconderTodas();
document.getElementById("produtosPagina").classList.remove("hidden");
document.getElementById("secaoPagamentos").classList.remove("hidden");
document.querySelector("footer")?.classList.remove("hidden");
document.getElementById("tituloCategoria").textContent=c.titulo;
document.getElementById("descricaoCategoria").textContent=c.descricao;
document.getElementById("listaProdutos").innerHTML=c.produtos.map((p,i)=>`
<article class="produto">
<h2>${p[0]}</h2>
<p class="produto-descricao">${p[2]||"Preparado com carinho pela Benvenuto Chicken."}</p>
<div class="produto-preco">R$ ${dinheiro(p[1])}</div>
<button class="botao-adicionar" onclick="adicionarProduto(${i})">🛒 ADICIONAR</button>
</article>`).join("");
scrollTo(0,0);
}

function adicionarProduto(i){
let p=cardapio[categoriaAtual].produtos[i];
if(categoriaAtual==="baldes")return abrirBalde(p);
if(categoriaAtual==="lanches")return abrirLanche(p);
if(categoriaAtual==="baldesTulipa"){
adicionarAoCarrinho(p[0],p[1],(p[2]||"")+" • Acompanha ketchup e barbecue",[]);
return;
}
if(categoriaAtual==="combos"&&["Combo 1","Combo 2 — Misto","Combo 3"].includes(p[0]))return abrirEscolhaCombo(p);
adicionarAoCarrinho(p[0],p[1],p[2]||"",[]);
}

function abrirBalde(p){
baldeAtual=p;
tipoFrango="";
misto=[];
document.getElementById("nomeBalde").innerHTML=`<strong>${p[0]}</strong> — R$ ${dinheiro(p[1])}`;
document.getElementById("mistoBox").classList.add("hidden");
document.getElementById("resumoBalde").innerHTML="Escolha o tipo de frango.";
document.querySelectorAll(".escolha-frango").forEach(b=>b.classList.remove("selecionado"));
document.querySelectorAll(".misto-opcao input").forEach(i=>i.checked=false);
document.getElementById("statusMisto").textContent="Escolha 2 tipos.";
document.getElementById("modalBalde").classList.remove("hidden");
}

function escolherTipoFrango(t,b){
tipoFrango=t;
document.querySelectorAll(".escolha-frango").forEach(x=>x.classList.remove("selecionado"));
b.classList.add("selecionado");
if(t==="Misto")document.getElementById("mistoBox").classList.remove("hidden");
else{
document.getElementById("mistoBox").classList.add("hidden");
misto=[];
}
atualizarResumoBalde();
}

function selecionarMisto(input){
if(input.checked&&misto.length>=2){
input.checked=false;
alert("No misto você pode escolher apenas 2 tipos de frango.");
return;
}
if(input.checked)misto.push(input.value);
else misto=misto.filter(x=>x!==input.value);
document.getElementById("statusMisto").textContent=misto.length===2?"✓ "+misto.join(" + "):`Escolha ${2-misto.length} tipo(s).`;
atualizarResumoBalde();
}

function atualizarResumoBalde(){
if(!tipoFrango)return;
let p=baldeAtual[1],t=tipoFrango;
if(tipoFrango==="Misto"){
p+=10;
if(misto.length===2)t="Misto: "+misto.join(" + ");
}
document.getElementById("resumoBalde").innerHTML=`🍗 <strong>${t}</strong><br>🥫 Acompanha ketchup e barbecue<br>💰 R$ ${dinheiro(p)}`;
}

function confirmarBalde(){
if(!tipoFrango)return alert("Escolha Coxinha, Sassami ou Misto.");
if(tipoFrango==="Misto"&&misto.length!==2)return alert("Escolha exatamente 2 tipos de frango para o misto.");
let p=baldeAtual[1],d=tipoFrango;
if(tipoFrango==="Misto"){
p+=10;
d="Misto: "+misto.join(" + ");
}
adicionarAoCarrinho(baldeAtual[0],p,d+" • Acompanha ketchup e barbecue",[]);
fecharModal("modalBalde");
}

let comboAtual=null,tipoFrangoCombo="";

function abrirEscolhaCombo(p){
comboAtual=p;
tipoFrangoCombo="";
document.getElementById("nomeCombo").textContent=p[0]+" — R$ "+dinheiro(p[1]);
document.getElementById("resumoCombo").textContent="Escolha Sassami ou Coxinha.";
document.querySelectorAll(".escolha-combo").forEach(b=>b.classList.remove("selecionado"));
document.getElementById("modalCombo").classList.remove("hidden");
}

function escolherFrangoCombo(t,b){
tipoFrangoCombo=t;
document.querySelectorAll(".escolha-combo").forEach(x=>x.classList.remove("selecionado"));
b.classList.add("selecionado");
document.getElementById("resumoCombo").textContent="Frango escolhido: "+t;
}

function confirmarCombo(){
if(!comboAtual)return;
if(!tipoFrangoCombo)return alert("Escolha Sassami ou Coxinha antes de adicionar o combo.");
adicionarAoCarrinho(comboAtual[0],comboAtual[1],(comboAtual[2]||"")+" • Frango escolhido: "+tipoFrangoCombo,[]);
fecharModal("modalCombo");
}

function abrirLanche(p){
lancheAtual=p;
document.getElementById("nomeLanche").innerHTML=`<strong>${p[0]}</strong> — R$ ${dinheiro(p[1])}`;
document.getElementById("listaAdicionais").innerHTML=cardapio.adicionais.produtos.map((x,i)=>`
<label class="adicional">
<span><input type="checkbox" value="${i}"> ${x[0]}</span>
<span>+ R$ ${dinheiro(x[1])}</span>
</label>`).join("");
document.getElementById("modalLanche").classList.remove("hidden");
}

function confirmarLanche(){
let a=[...document.querySelectorAll("#listaAdicionais input:checked")].map(i=>{
let x=cardapio.adicionais.produtos[Number(i.value)];
return{nome:x[0],preco:x[1]};
});
adicionarAoCarrinho(lancheAtual[0],lancheAtual[1],"Acompanha molho de alho",a);
fecharModal("modalLanche");
}

function adicionarAoCarrinho(nome,preco,descricao,adicionais){
let chave=nome+"|"+descricao+"|"+adicionais.map(a=>a.nome).join(",");
let e=carrinho.find(x=>x.chave===chave);
if(e)e.quantidade++;
else carrinho.push({chave,nome,preco,descricao,adicionais,quantidade:1});
atualizarContador();
alert("✓ Produto adicionado ao pedido!");
}

function atualizarContador(){
let q=carrinho.reduce((s,x)=>s+x.quantidade,0);
document.getElementById("contador").textContent=q;
}

function abrirCarrinho(){
renderizarCarrinho();
document.getElementById("modalCarrinho").classList.remove("hidden");
}

function renderizarCarrinho(){
let lista=document.getElementById("listaCarrinho");
if(!carrinho.length){
lista.innerHTML="<p>Seu pedido está vazio.</p>";
atualizarValores();
return;
}
lista.innerHTML=carrinho.map((x,i)=>{
let p=x.preco+x.adicionais.reduce((s,a)=>s+a.preco,0);
return `<div class="item">
<h3>${x.quantidade}x ${x.nome}</h3>
<p>${x.descricao}${x.adicionais.length?"<br>➕ "+x.adicionais.map(a=>a.nome).join(", "):""}</p>
<strong>R$ ${dinheiro(p*x.quantidade)}</strong>
<div class="controles">
<button onclick="alterarQuantidade(${i},-1)">−</button>
<strong>${x.quantidade}</strong>
<button onclick="alterarQuantidade(${i},1)">+</button>
</div>
</div>`;
}).join("");
atualizarValores();
}

function alterarQuantidade(i,q){
carrinho[i].quantidade+=q;
if(carrinho[i].quantidade<=0)carrinho.splice(i,1);
atualizarContador();
renderizarCarrinho();
}

function atualizarValores(){
let subtotal=carrinho.reduce((s,x)=>s+(x.preco+x.adicionais.reduce((a,b)=>a+b.preco,0))*x.quantidade,0);
let taxa=formaRecebimento==="entrega"?4:0;
document.getElementById("subtotal").textContent="R$ "+dinheiro(subtotal);
document.getElementById("taxa").textContent="R$ "+dinheiro(taxa);
document.getElementById("total").textContent="R$ "+dinheiro(subtotal+taxa);
}

function selecionarRecebimento(t){
formaRecebimento=t;
document.getElementById("botaoEntrega").classList.toggle("ativo",t==="entrega");
document.getElementById("botaoRetirada").classList.toggle("ativo",t==="retirada");
document.getElementById("campoEndereco").classList.toggle("hidden",t!=="entrega");
atualizarValores();
}

function selecionarPagamento(f){
formaPagamento=f;
precisaTroco="";
trocoPara="";
document.getElementById("detalhesDinheiro").classList.add("hidden");
document.getElementById("detalhesPix").classList.add("hidden");
if(f==="Dinheiro")document.getElementById("detalhesDinheiro").classList.remove("hidden");
if(f==="PIX")document.getElementById("detalhesPix").classList.remove("hidden");
}

function mostrarCampoTroco(m){
document.getElementById("campoTrocoContainer").classList.toggle("hidden",!m);
if(!m){
document.getElementById("trocoPara").value="";
trocoPara="";
}
}

function copiarPix(){
navigator.clipboard?.writeText(chavePix)
.then(()=>alert("✓ Chave PIX copiada!"))
.catch(()=>alert("Chave PIX: "+chavePix));
}

function enviarWhatsApp(){
if(!carrinho.length)return alert("Seu pedido está vazio.");

let nome=document.getElementById("nomeCliente").value.trim();
let end=document.getElementById("enderecoCliente").value.trim();
let obs=document.getElementById("observacoes").value.trim();

if(!nome)return alert("Digite seu nome.");
if(formaRecebimento==="entrega"&&!end)return alert("Digite seu endereço.");
if(!formaPagamento)return alert("Escolha uma forma de pagamento.");

if(formaPagamento==="Dinheiro"){
let r=document.querySelector('input[name="troco"]:checked');
if(!r)return alert("Informe se precisa de troco.");
precisaTroco=r.value;
if(r.value==="Sim"){
trocoPara=document.getElementById("trocoPara").value.trim();
if(!trocoPara)return alert("Digite para quanto precisa de troco.");
}
}

let subtotal=0;
let m=`🍗 *BENVENUTO CHICKEN* 🍗\n━━━━━━━━━━━━━━━━━━\n🛒 *NOVO PEDIDO*\n━━━━━━━━━━━━━━━━━━\n\n👤 *Nome:* ${nome}\n`;

m+=formaRecebimento==="entrega"
?`🚚 *Entrega*\n📍 *Endereço:* ${end}\n`
:"🏪 *Retirada no local*\n";

m+="\n🍔 *ITENS DO PEDIDO*\n━━━━━━━━━━━━━━━━━━\n\n";

carrinho.forEach(x=>{
let p=x.preco+x.adicionais.reduce((s,a)=>s+a.preco,0);
let v=p*x.quantidade;
subtotal+=v;
m+=`🍗 ${x.quantidade}x ${x.nome}\n💰 R$ ${dinheiro(v)}\n`;
if(x.descricao)m+=`ℹ️ ${x.descricao}\n`;
if(x.adicionais.length)m+=`➕ Adicionais: ${x.adicionais.map(a=>a.nome).join(", ")}\n`;
m+="\n";
});

let taxa=formaRecebimento==="entrega"?4:0;
m+=`━━━━━━━━━━━━━━━━━━\n💰 *Subtotal:* R$ ${dinheiro(subtotal)}\n🚚 *Taxa de entrega:* R$ ${dinheiro(taxa)}\n💵 *TOTAL:* R$ ${dinheiro(subtotal+taxa)}\n\n💳 *PAGAMENTO*\n━━━━━━━━━━━━━━━━━━\n💳 *Forma:* ${formaPagamento}\n`;

if(formaPagamento==="PIX")m+=`🔑 *Chave PIX:* ${chavePix}\n`;

if(formaPagamento==="Dinheiro"){
m+=`🔄 *Precisa de troco:* ${precisaTroco}\n`;
if(precisaTroco==="Sim")m+=`💵 *Troco para:* ${trocoPara}\n`;
}

if(obs)m+=`\n📝 *Observações:*\n${obs}\n`;
m+="\n❤️ Obrigado por pedir na Benvenuto Chicken!";

window.open("https://wa.me/5544997323438?text="+encodeURIComponent(m),"_blank");
}

function fecharModal(id){
document.getElementById(id).classList.add("hidden");
}

mostrarInicio();
atualizarContador();
