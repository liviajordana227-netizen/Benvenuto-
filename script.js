
const SUPABASE_URL = "https://wtphyvfqmwferggidzgt.supabase.co";
const SUPABASE_KEY = "sb_publishable_wdlAJqX0eGoc3XK-Hvg8Aw_f54EszKl";
const WHATSAPP = "5544997323438";
const PIX = "64213198000174";
const TAXA_ENTREGA = 4;

const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

let carrinho = [];
let tipoEntrega = "";
let formaPagamento = "";
let trocoPara = "";
let enviandoPedido = false;

const cardapio = {
  lanches: [
    { nome: "X-Burguer", descricao: "Pão, hambúrguer, queijo e molho de alho.", preco: 19 },
    { nome: "Pop Chicken", descricao: "Pão, Sassami, catupiry e molho de alho.", preco: 22 },
    { nome: "Chicken", descricao: "Pão, Sassami, alface, tomate, cebola e molho de alho.", preco: 26 },
    { nome: "X-Calabresa", descricao: "Pão, molho de alho, queijo, calabresa, hambúrguer, alface, tomate e cebola.", preco: 27 },
    { nome: "X-Bacon", descricao: "Pão, muçarela, hambúrguer, creme de alho, bacon e catupiry.", preco: 27 },
    { nome: "X-Salada", descricao: "Pão, hambúrguer, molho de alho, alface, tomate e cebola.", preco: 25 },
    { nome: "X-Rings", descricao: "Pão, hambúrguer, 3 anéis de cebola, muçarela, alface, cebola e molho de alho.", preco: 27 },
    { nome: "Especial Duplo Cheddar", descricao: "Pão, 2 hambúrgueres, cheddar, bacon, molho de alho e cebola caramelizada.", preco: 37 },
    { nome: "Duplo Cheddar", descricao: "Pão, cheddar, 2 hambúrgueres, bacon e molho de alho.", preco: 33 },
    { nome: "Americano", descricao: "Pão, tomate, alface, cebola, pepino, Sassami, cheddar e molho de alho.", preco: 28 },
    { nome: "Combo Individual de Lanche", descricao: "1 Chicken + 300 g batata + refri 220 ml.", preco: 40 },
    { nome: "Combo Duo de Lanche", descricao: "2 Chickens + 500 g batata + 2 refris 220 ml.", preco: 72 },
    { nome: "Combo Trio de Lanche", descricao: "3 Chickens + 500 g batata + 3 refris 220 ml.", preco: 80 },
    { nome: "Combo Família de Lanche", descricao: "5 Chickens + 1 kg batata + refri 2 L.", preco: 110 },
    { nome: "Combo Especial Duplo Cheddar — Duo", descricao: "2 Especial Duplo Cheddar + 600 g batata + 2 refris 220 ml.", preco: 84 },
    { nome: "Combo Especial Duplo Cheddar — Individual", descricao: "1 Especial Duplo Cheddar + 300 g batata + refri 220 ml.", preco: 47 },
    { nome: "Combo Especial Lanche", descricao: "2 Chickens + 500 g batata bacon cheddar + 2 refris 220 ml.", preco: 80 },
    { nome: "Combo Individual Chicken", descricao: "1 Chicken + 300 g batata bacon cheddar + refri 220 ml.", preco: 40 }
  ],

  tulipa: [
    { nome: "Balde de Tulipa — 8 unidades", descricao: "Balde com 8 unidades.", preco: 26 },
    { nome: "Balde de Tulipa — P", descricao: "Balde pequeno.", preco: 54 },
    { nome: "Balde de Tulipa — M", descricao: "Balde médio.", preco: 64 },
    { nome: "Balde de Tulipa — G", descricao: "Balde grande.", preco: 74 },
    { nome: "Balde de Tulipa Fritas — P", descricao: "Acompanha batata ou polenta.", preco: 70, escolhaFrita: true },
    { nome: "Balde de Tulipa Fritas — M", descricao: "Acompanha batata ou polenta.", preco: 80, escolhaFrita: true }
  ],

  combos: [
    { nome: "Combo 1", descricao: "1 kg frango + 1 kg batata com bacon e cheddar.", preco: 96 },
    { nome: "Combo 2 — Misto", descricao: "1 kg coxinha e Sassami + 1 kg polenta + 500 g calabresa acebolada.", preco: 130 },
    { nome: "Combo 3", descricao: "1 kg coxinha + 500 g batata + 500 g anel de cebola + 500 g polenta + refri 2 L.", preco: 120 },
    { nome: "Combo 4", descricao: "1 kg mandioca + 1 kg Sassami + 500 g calabresa + refri 2 L.", preco: 65 },
    { nome: "Combo 5", descricao: "1 kg batata bacon cheddar.", preco: 85 },
    { nome: "Combo 6", descricao: "1 kg mandioca + 500 g calabresa.", preco: 70 }
  ],

  bebidas: [
    { nome: "Coca-Cola 350 ml", preco: 6 },
    { nome: "Coca-Cola Zero 350 ml", preco: 6 },
    { nome: "Fanta Guaraná 350 ml", preco: 6 },
    { nome: "Sprite 350 ml", preco: 6 },
    { nome: "Fanta Laranja 350 ml", preco: 6 },
    { nome: "Coca-Cola 600 ml", preco: 9 },
    { nome: "Coca-Cola Zero 600 ml", preco: 9 },
    { nome: "Fanta Guaraná 600 ml", preco: 9 },
    { nome: "Sprite 600 ml", preco: 9 },
    { nome: "Fanta Laranja 600 ml", preco: 9 },
    { nome: "Coca-Cola 2 L", preco: 15 },
    { nome: "Coca-Cola Zero 2 L", preco: 15 },
    { nome: "Guaraná 2 L", preco: 14 },
    { nome: "Fanta 2 L", preco: 14 },
    { nome: "Sprite 2 L", preco: 14 },
    { nome: "Água com gás", preco: 3.5 }
  ],

  porcoes: [
    { nome: "Salada Americana", preco: 28 },
    { nome: "Batata Apimentada", preco: 38 },
    { nome: "Batata 300 g", preco: 19 },
    { nome: "Batata 500 g", preco: 30 },
    { nome: "Batata Bacon + Cheddar 500 g", preco: 36 },
    { nome: "Polenta 300 g", preco: 12 },
    { nome: "Polenta 500 g", preco: 17 },
    { nome: "Anel de Cebola 300 g", preco: 20 },
    { nome: "Anel de Cebola 500 g", preco: 35 }
  ],

  molhos: [
    { nome: "Cheddar", preco: 6 },
    { nome: "Pimenta", preco: 6 },
    { nome: "Mostarda e Mel", preco: 6 },
    { nome: "Abacaxi com Pimenta", preco: 6 },
    { nome: "Creme de Alho", preco: 6 },
    { nome: "Barbecue", preco: 5 },
    { nome: "Ketchup", preco: 5 }
  ]
};

const adicionais = [
  { nome: "Anel de Cebola", preco: 3 },
  { nome: "Hambúrguer", preco: 10 },
  { nome: "Bacon", preco: 5 },
  { nome: "Muçarela", preco: 4 },
  { nome: "Alface", preco: 1 },
  { nome: "Catupiry", preco: 5 },
  { nome: "Tomate", preco: 1 },
  { nome: "Cebola", preco: 1 },
  { nome: "Cheddar", preco: 5 },
  { nome: "Cebola Roxa", preco: 4 }
];

const $ = (id) => document.getElementById(id);

function dinheiro(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function abrirCardapio() {
  $("inicio").classList.add("hidden");
  $("categorias").classList.remove("hidden");
  $("produtos").classList.add("hidden");
  $("carrinho").classList.add("hidden");
}

function abrirCategoria(categoria) {
  if (!cardapio[categoria]) return;

  $("categorias").classList.add("hidden");
  $("produtos").classList.remove("hidden");
  $("carrinho").classList.add("hidden");

  renderProdutos(categoria);
}

function voltarCategorias() {
  $("produtos").classList.add("hidden");
  $("categorias").classList.remove("hidden");
}

function renderProdutos(categoria) {
  const lista = $("lista-produtos");
  lista.innerHTML = "";

  cardapio[categoria].forEach((produto) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const descricao = produto.descricao || "";

    card.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>${descricao}</p>
      <div class="product-bottom">
        <strong class="price">${dinheiro(produto.preco)}</strong>
        <button class="add-button" type="button">Adicionar</button>
      </div>
    `;

    card.querySelector(".add-button").addEventListener("click", () => {
      adicionarProduto(produto);
    });

    lista.appendChild(card);
  });
}

function adicionarProduto(produto) {
  if (produto.escolhaFrita) {
    abrirFritas(produto);
    return;
  }

  if (produto.nome.toLowerCase().includes("chicken") ||
      produto.nome.toLowerCase().includes("burguer") ||
      produto.nome.toLowerCase().includes("cheddar") ||
      produto.nome.toLowerCase().includes("salada") ||
      produto.nome.toLowerCase().includes("calabresa") ||
      produto.nome.toLowerCase().includes("rings") ||
      produto.nome.toLowerCase().includes("americano")) {
    abrirAdicionais(produto);
    return;
  }

  adicionarCarrinho(produto);
}

function abrirAdicionais(produto) {
  const opcoes = adicionais.map((adicional, index) => `
    <label class="option-item">
      <input type="checkbox" value="${index}">
      ${adicional.nome} (+${dinheiro(adicional.preco)})
    </label>
  `).join("");

  abrirModal(`
    <h2>Adicionais</h2>
    <p>Escolha os adicionais desejados:</p>
    <div class="option-list">${opcoes}</div>
    <div class="modal-actions">
      <button class="cancel" onclick="fecharModal()">Cancelar</button>
      <button class="confirm" id="confirmar-adicionais">Adicionar ao carrinho</button>
    </div>
  `);

  $("confirmar-adicionais").onclick = () => {
    const selecionados = [...document.querySelectorAll(".option-list input:checked")];
    const extras = selecionados.map((input) => adicionais[Number(input.value)]);

    const precoExtras = extras.reduce((soma, item) => soma + item.preco, 0);

    adicionarCarrinho({
      nome: produto.nome,
      preco: produto.preco + precoExtras,
      extras: extras.map((item) => item.nome)
    });

    fecharModal();
  };
}

function abrirFritas(produto) {
  abrirModal(`
    <h2>Escolha o acompanhamento</h2>
    <div class="option-list">
      <label class="option-item">
        <input type="radio" name="frita" value="Batata Frita">
        Batata Frita
      </label>
      <label class="option-item">
        <input type="radio" name="frita" value="Polenta Frita">
        Polenta Frita
      </label>
    </div>
    <div class="modal-actions">
      <button class="cancel" onclick="fecharModal()">Cancelar</button>
      <button class="confirm" id="confirmar-fritas">Confirmar</button>
    </div>
  `);

  $("confirmar-fritas").onclick = () => {
    const escolha = document.querySelector('input[name="frita"]:checked');

    if (!escolha) {
      alert("Escolha batata ou polenta.");
      return;
    }

    adicionarCarrinho({
      nome: produto.nome + " — " + escolha.value,
      preco: produto.preco
    });

    fecharModal();
  };
}

function adicionarCarrinho(produto) {
  carrinho.push({
    nome: produto.nome,
    preco: Number(produto.preco),
    extras: produto.extras || []
  });

  atualizarTudo();
  toast("Produto adicionado ao carrinho!");
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarTudo();
}

function abrirCarrinho() {
  $("inicio").classList.add("hidden");
  $("categorias").classList.add("hidden");
  $("produtos").classList.add("hidden");
  $("carrinho").classList.remove("hidden");
  renderCarrinho();
}

function fecharCarrinho() {
  $("carrinho").classList.add("hidden");
  $("categorias").classList.remove("hidden");
}

function renderCarrinho() {
  const lista = $("lista-carrinho");
  lista.innerHTML = "";

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
  }

  carrinho.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    const extras = item.extras.length
      ? `<small>Adicionais: ${item.extras.join(", ")}</small>`
      : "";

    div.innerHTML = `
      <div>
        <strong>${item.nome}</strong>
        ${extras}
        <p>${dinheiro(item.preco)}</p>
      </div>
      <button type="button" onclick="removerItem(${index})">Remover</button>
    `;

    lista.appendChild(div);
  });

  atualizarResumo();
}

function subtotal() {
  return carrinho.reduce((soma, item) => soma + item.preco, 0);
}

function total() {
  return subtotal() + (tipoEntrega === "entrega" ? TAXA_ENTREGA : 0);
}

function atualizarResumo() {
  if ($("subtotal")) $("subtotal").textContent = dinheiro(subtotal());

  if ($("taxa-entrega")) {
    $("taxa-entrega").textContent = dinheiro(
      tipoEntrega === "entrega" ? TAXA_ENTREGA : 0
    );
  }

  if ($("total-final")) $("total-final").textContent = dinheiro(total());

  if ($("cart-count-home")) {
    $("cart-count-home").textContent = carrinho.length;
  }

  if ($("cart-count-products")) {
    $("cart-count-products").textContent = carrinho.length;
  }
}

function atualizarTudo() {
  atualizarResumo();

  if (!$("carrinho").classList.contains("hidden")) {
    renderCarrinho();
  }
}

function selecionarEntrega(tipo, botao) {
  tipoEntrega = tipo;

  document.querySelectorAll(".choice-grid button").forEach((b) => {
    if (b.closest("#carrinho")) b.classList.remove("selected");
  });

  if (botao) botao.classList.add("selected");

  if ($("endereco")) {
    $("endereco").style.display = tipo === "entrega" ? "block" : "none";
  }

  atualizarResumo();
}

function selecionarPagamento(tipo, botao) {
  formaPagamento = tipo;

  document.querySelectorAll(".choice-grid button").forEach((b) => {
    if (b.closest("#carrinho")) b.classList.remove("selected");
  });

  if (botao) botao.classList.add("selected");

  if ($("campo-troco")) {
    $("campo-troco").style.display = tipo === "Dinheiro" ? "block" : "none";
  }

  if ($("dados-pix")) {
    $("dados-pix").style.display = tipo === "PIX" ? "block" : "none";
  }

  if (tipo !== "Dinheiro") trocoPara = "";
}

function mostrarCampoTroco() {
  trocoPara = "";

  if ($("troco-input")) $("troco-input").value = "";

  if ($("campo-troco-input")) {
    $("campo-troco-input").style.display = "block";
  }
}

function definirTroco(valor) {
  trocoPara = valor;
}

function abrirModal(conteudo) {
  $("modal").innerHTML = `<div class="modal-content">${conteudo}</div>`;
  $("modal").classList.remove("hidden");
}

function fecharModal() {
  $("modal").classList.add("hidden");
  $("modal").innerHTML = "";
}

function toast(mensagem) {
  const elemento = $("toast");
  if (!elemento) return;

  elemento.textContent = mensagem;
  elemento.classList.remove("hidden");

  setTimeout(() => {
    elemento.classList.add("hidden");
  }, 2500);
}

async function salvarPedidoNoSupabase(pedido) {
  if (!supabaseClient) {
    return { ok: false, erro: "Supabase não foi carregado." };
  }

  try {
    const resultado = await Promise.race([
      supabaseClient.from("Pedidos").insert([pedido]),
      new Promise((_, rejeitar) =>
        setTimeout(() => rejeitar(new Error("Tempo esgotado ao salvar pedido.")), 8000)
      )
    ]);

    if (resultado.error) {
      return { ok: false, erro: resultado.error.message };
    }

    return { ok: true };
  } catch (erro) {
    return { ok: false, erro: erro.message };
  }
}

async function enviarPedido() {
  if (enviandoPedido) return;

  if (carrinho.length === 0) {
    alert("Adicione produtos ao carrinho.");
    return;
  }

  const nome = $("nome").value.trim();

  if (!nome) {
    alert("Digite seu nome.");
    $("nome").focus();
    return;
  }

  if (!tipoEntrega) {
    alert("Escolha entre retirada e entrega.");
    return;
  }

  const rua = $("rua") ? $("rua").value.trim() : "";

  if (tipoEntrega === "entrega" && !rua) {
    alert("Digite seu endereço.");
    $("rua").focus();
    return;
  }

  if (!formaPagamento) {
    alert("Escolha a forma de pagamento.");
    return;
  }

  const observacao = $("observacao") ? $("observacao").value.trim() : "";

  const itensTexto = carrinho.map((item) => {
    const extras = item.extras.length
      ? ` (Adicionais: ${item.extras.join(", ")})`
      : "";

    return `${item.nome}${extras} - ${dinheiro(item.preco)}`;
  }).join("\n");

  const pedido = {
    Nome_clientes: nome,
    Tipo_entrega: tipoEntrega,
    Rua: rua,
    Observacao: observacao,
    Pagamento: formaPagamento,
    Troco: formaPagamento === "Dinheiro" ? (trocoPara || "Não informado") : "",
    Itens: itensTexto,
    Total: total(),
    Data: new Date().toISOString()
  };

  let mensagem = `🍗 *NOVO PEDIDO - BENVENUTO CHICKEN*\n\n`;
  mensagem += `👤 Nome: ${nome}\n`;
  mensagem += `📦 Tipo: ${tipoEntrega === "entrega" ? "Entrega" : "Retirada"}\n`;

  if (tipoEntrega === "entrega") {
    mensagem += `📍 Endereço: ${rua}\n`;
    mensagem += `🚚 Taxa de entrega: ${dinheiro(TAXA_ENTREGA)}\n`;
  }

  mensagem += `\n🛒 *PEDIDO:*\n${itensTexto}\n`;
  mensagem += `\n💰 Subtotal: ${dinheiro(subtotal())}\n`;
  mensagem += `💰 Total: ${dinheiro(total())}\n`;
  mensagem += `💳 Pagamento: ${formaPagamento}\n`;

  if (formaPagamento === "Dinheiro") {
    mensagem += `💵 Troco: ${trocoPara || "Não informado"}\n`;
  }

  if (formaPagamento === "PIX") {
    mensagem += `🔑 Chave PIX: ${PIX}\n`;
  }

  if (observacao) {
    mensagem += `\n📝 Observação: ${observacao}\n`;
  }

  enviandoPedido = true;

  try {
    const resultado = await salvarPedidoNoSupabase(pedido);

    if (!resultado.ok) {
      alert("Não foi possível salvar o pedido no sistema. Ele ainda será enviado pelo WhatsApp.\n\nErro: " + resultado.erro);
    }

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.location.assign(url);
  } finally {
    enviandoPedido = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarResumo();
});
