
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
    ["X-Burguer", "Pão, hambúrguer, queijo e molho de alho.", 19],
    ["Pop Chicken", "Pão, Sassami, catupiry e molho de alho.", 22],
    ["Chicken", "Pão, Sassami, alface, tomate, cebola e molho de alho.", 26],
    ["X-Calabresa", "Pão, molho de alho, queijo, calabresa, hambúrguer, alface, tomate e cebola.", 27],
    ["X-Bacon", "Pão, muçarela, hambúrguer, creme de alho, bacon e catupiry.", 27],
    ["X-Salada", "Pão, hambúrguer, molho de alho, alface, tomate e cebola.", 25],
    ["X-Rings", "Pão, hambúrguer, 3 anéis de cebola, muçarela, alface, cebola e molho de alho.", 27],
    ["Especial Duplo Cheddar", "Pão, 2 hambúrgueres, cheddar, bacon, molho de alho e cebola caramelizada.", 37],
    ["Duplo Cheddar", "Pão, cheddar, 2 hambúrgueres, bacon e molho de alho.", 33],
    ["Americano", "Pão, tomate, alface, cebola, pepino, Sassami, cheddar e molho de alho.", 28],
    ["Combo Individual de Lanche", "1 Chicken + 300 g de batata + refrigerante 220 ml.", 40],
    ["Combo Duo de Lanche", "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml.", 72],
    ["Combo Trio de Lanche", "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml.", 80],
    ["Combo Família de Lanche", "5 Chickens + 1 kg de batata + refrigerante 2 L.", 110],
    ["Combo Especial Duplo Cheddar — Duo", "2 Especial Duplo Cheddar + 600 g de batata + 2 refrigerantes 220 ml.", 84],
    ["Combo Especial Duplo Cheddar — Individual", "1 Especial Duplo Cheddar + 300 g de batata + refrigerante 220 ml.", 47],
    ["Combo Especial Lanche", "2 Chickens + 500 g de batata bacon cheddar + 2 refrigerantes 220 ml.", 80],
    ["Combo Individual Chicken", "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml.", 40]
  ],

  tulipa: [
    ["Balde de Tulipa — 8 unidades", "Balde com 8 unidades de Tulipa.", 26],
    ["Balde de Tulipa — P", "Balde de Tulipa tamanho P.", 54],
    ["Balde de Tulipa — M", "Balde de Tulipa tamanho M.", 64],
    ["Balde de Tulipa — G", "Balde de Tulipa tamanho G.", 74],
    ["Balde de Tulipa Fritas — P", "Tulipas acompanhadas de Batata Frita ou Polenta Frita.", 70, "fritas"],
    ["Balde de Tulipa Fritas — M", "Tulipas acompanhadas de Batata Frita ou Polenta Frita.", 80, "fritas"]
  ],

  combos: [
    ["Combo 1", "1 kg de frango + 1 kg de batata com bacon e cheddar.", 96],
    ["Combo 2 — Misto", "1 kg de coxinha e Sassami + 1 kg de polenta + 500 g de calabresa acebolada.", 130],
    ["Combo 3", "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 litros.", 120],
    ["Combo 4", "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 litros.", 65],
    ["Combo 5", "1 kg de batata com bacon e cheddar.", 85],
    ["Combo 6", "1 kg de mandioca + 500 g de calabresa.", 70]
  ],

  bebidas: [
    ["Coca-Cola 350 ml", "", 6],
    ["Coca-Cola Zero 350 ml", "", 6],
    ["Fanta Guaraná 350 ml", "", 6],
    ["Sprite 350 ml", "", 6],
    ["Fanta Laranja 350 ml", "", 6],
    ["Coca-Cola 600 ml", "", 9],
    ["Coca-Cola Zero 600 ml", "", 9],
    ["Fanta Guaraná 600 ml", "", 9],
    ["Sprite 600 ml", "", 9],
    ["Fanta Laranja 600 ml", "", 9],
    ["Coca-Cola 2 L", "", 15],
    ["Coca-Cola Zero 2 L", "", 15],
    ["Guaraná 2 L", "", 14],
    ["Fanta 2 L", "", 14],
    ["Sprite 2 L", "", 14],
    ["Água com gás", "", 3.5]
  ],

  porcoes: [
    ["Salada Americana", "Alface americano, tomate cereja, frango crocante e molho especial.", 28],
    ["Batata Apimentada", "Batata acompanhada de molho de pimenta.", 38],
    ["Batata 300 g", "", 19],
    ["Batata 500 g", "", 30],
    ["Batata Bacon + Cheddar 500 g", "", 36],
    ["Polenta 300 g", "", 12],
    ["Polenta 500 g", "", 17],
    ["Anel de Cebola 300 g", "", 20],
    ["Anel de Cebola 500 g", "", 35]
  ],

  molhos: [
    ["Cheddar", "", 6],
    ["Pimenta", "", 6],
    ["Mostarda e Mel", "", 6],
    ["Abacaxi com Pimenta", "", 6],
    ["Creme de Alho", "", 6],
    ["Barbecue", "", 5],
    ["Ketchup", "", 5]
  ]
};

const adicionais = [
  ["Anel de Cebola", 3],
  ["Hambúrguer", 10],
  ["Bacon", 5],
  ["Muçarela", 4],
  ["Alface", 1],
  ["Catupiry", 5],
  ["Tomate", 1],
  ["Cebola", 1],
  ["Cheddar", 5],
  ["Cebola Roxa", 4]
];

const lanchesIndividuais = [
  "X-Burguer", "Pop Chicken", "Chicken", "X-Calabresa", "X-Bacon",
  "X-Salada", "X-Rings", "Especial Duplo Cheddar", "Duplo Cheddar", "Americano"
];

function $(id) {
  return document.getElementById(id);
}

function dinheiro(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function abrirCardapio() {
  $("inicio").classList.add("hidden");
  $("categorias").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function abrirCategoria(categoria) {
  if (!cardapio[categoria]) return;
  $("categorias").classList.add("hidden");
  $("carrinho").classList.add("hidden");
  $("produtos").classList.remove("hidden");
  renderProdutos(categoria);
  window.scrollTo(0, 0);
}

function voltarCategorias() {
  $("produtos").classList.add("hidden");
  $("categorias").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function renderProdutos(categoria) {
  const lista = $("lista-produtos");
  lista.innerHTML = "";

  cardapio[categoria].forEach((produto, indice) => {
    const elemento = document.createElement("article");
    elemento.className = "product-card";

    const titulo = document.createElement("h3");
    titulo.textContent = produto[0];
    elemento.appendChild(titulo);

    if (produto[1]) {
      const descricao = document.createElement("p");
      descricao.textContent = produto[1];
      elemento.appendChild(descricao);
    }

    const parteInferior = document.createElement("div");
    parteInferior.className = "product-bottom";

    const preco = document.createElement("span");
    preco.className = "price";
    preco.textContent = dinheiro(produto[2]);

    const botao = document.createElement("button");
    botao.className = "add-button";
    botao.type = "button";
    botao.textContent = "+ ADICIONAR";
    botao.onclick = () => adicionarProduto(categoria, indice);

    parteInferior.append(preco, botao);
    elemento.appendChild(parteInferior);
    lista.appendChild(elemento);
  });
}

function adicionarProduto(categoria, indice) {
  const produto = cardapio[categoria][indice];

  if (produto[3] === "fritas") {
    abrirFritas(produto);
    return;
  }

  if (categoria === "lanches" && lanchesIndividuais.includes(produto[0])) {
    abrirAdicionais(produto);
    return;
  }

  adicionarCarrinho(produto[0], produto[2], []);
}

function abrirAdicionais(produto) {
  let html = `<div class="modal-content">
    <h2>${produto[0]}</h2>
    <p>Escolha os adicionais, se desejar:</p>
    <div class="option-list">`;

  adicionais.forEach((adicional, indice) => {
    html += `<label class="option-item">
      <input type="checkbox" id="extra-${indice}">
      ${adicional[0]} — ${dinheiro(adicional[1])}
    </label>`;
  });

  html += `</div>
    <div class="modal-actions">
      <button class="cancel" type="button" onclick="fecharModal()">CANCELAR</button>
      <button class="confirm" type="button" id="confirmar-adicionais">ADICIONAR</button>
    </div>
  </div>`;

  abrirModal(html);

  $("confirmar-adicionais").onclick = () => {
    const extras = [];
    let precoFinal = produto[2];

    adicionais.forEach((adicional, indice) => {
      const checkbox = $("extra-" + indice);
      if (checkbox && checkbox.checked) {
        extras.push(adicional[0]);
        precoFinal += adicional[1];
      }
    });

    adicionarCarrinho(produto[0], precoFinal, extras);
    fecharModal();
  };
}

function abrirFritas(produto) {
  abrirModal(`<div class="modal-content">
    <h2>${produto[0]}</h2>
    <p>Escolha o acompanhamento:</p>
    <div class="option-list">
      <button class="confirm" type="button" id="escolher-batata">🍟 BATATA FRITA</button>
      <button class="confirm" type="button" id="escolher-polenta">🥔 POLENTA FRITA</button>
    </div>
    <div class="modal-actions">
      <button class="cancel" type="button" onclick="fecharModal()">CANCELAR</button>
    </div>
  </div>`);

  $("escolher-batata").onclick = () => {
    confirmarFritas(produto[0], produto[2], "Batata Frita");
  };

  $("escolher-polenta").onclick = () => {
    confirmarFritas(produto[0], produto[2], "Polenta Frita");
  };
}

function confirmarFritas(nome, preco, acompanhamento) {
  adicionarCarrinho(nome, preco, [acompanhamento]);
  fecharModal();
}

function adicionarCarrinho(nome, preco, extras) {
  carrinho.push({
    nome,
    preco: Number(preco),
    extras
  });

  atualizarTudo();
  toast(nome + " foi adicionado ao carrinho!");
}

function removerItem(indice) {
  carrinho.splice(indice, 1);
  atualizarTudo();
}

function abrirCarrinho() {
  $("categorias").classList.add("hidden");
  $("produtos").classList.add("hidden");
  $("carrinho").classList.remove("hidden");
  renderCarrinho();
  window.scrollTo(0, 0);
}

function fecharCarrinho() {
  $("carrinho").classList.add("hidden");
  $("categorias").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function renderCarrinho() {
  const lista = $("lista-carrinho");
  lista.innerHTML = "";

  if (!carrinho.length) {
    lista.innerHTML = '<div class="empty-cart">Seu carrinho está vazio. 🍗</div>';
    atualizarResumo();
    return;
  }

  carrinho.forEach((item, indice) => {
    const elemento = document.createElement("div");
    elemento.className = "cart-item";

    const detalhes = document.createElement("div");
    const titulo = document.createElement("h3");
    titulo.textContent = item.nome;
    detalhes.appendChild(titulo);

    if (item.extras.length) {
      const extras = document.createElement("small");
      extras.textContent = "+ " + item.extras.join(", ");
      detalhes.appendChild(extras);
    }

    const preco = document.createElement("strong");
    preco.textContent = dinheiro(item.preco);
    detalhes.appendChild(preco);

    const remover = document.createElement("button");
    remover.className = "remove-button";
    remover.type = "button";
    remover.textContent = "🗑️";
    remover.onclick = () => removerItem(indice);

    elemento.append(detalhes, remover);
    lista.appendChild(elemento);
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
  $("subtotal").textContent = dinheiro(subtotal());
  $("taxa-entrega").textContent = dinheiro(tipoEntrega === "entrega" ? TAXA_ENTREGA : 0);
  $("total-final").textContent = dinheiro(total());
  $("cart-count-home").textContent = carrinho.length;
  $("cart-count-products").textContent = carrinho.length;
}

function atualizarTudo() {
  renderCarrinho();
  atualizarResumo();
}

function selecionarEntrega(tipo, botao) {
  tipoEntrega = tipo;

  document.querySelectorAll(".opcao-entrega").forEach(b => {
    b.classList.remove("selecionado");
  });

  botao.classList.add("selecionado");
  $("endereco").style.display = tipo === "entrega" ? "block" : "none";
  atualizarResumo();
}

function selecionarPagamento(pagamento, botao) {
  formaPagamento = pagamento;

  document.querySelectorAll(".opcao-pagamento").forEach(b => {
    b.classList.remove("selecionado");
  });

  botao.classList.add("selecionado");
  $("campo-troco").style.display = pagamento === "Dinheiro" ? "block" : "none";
  $("dados-pix").style.display = pagamento === "PIX" ? "block" : "none";

  if (pagamento !== "Dinheiro") {
    trocoPara = "";
    $("troco-valor").style.display = "none";
    $("troco-input").value = "";
  }
}

function mostrarCampoTroco() {
  $("troco-valor").style.display = "block";
  $("troco-input").focus();
  trocoPara = "";
}

function definirTroco(valor) {
  trocoPara = valor;
}

function abrirModal(html) {
  $("modal").innerHTML = html;
  $("modal").classList.remove("hidden");
}

function fecharModal() {
  $("modal").classList.add("hidden");
  $("modal").innerHTML = "";
}

function toast(texto) {
  const elemento = $("toast");
  elemento.textContent = texto;
  elemento.style.display = "block";
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    elemento.style.display = "none";
  }, 2200);
}

async function salvarPedidoNoSupabase(dados) {
  if (!supabaseClient) {
    return { ok: false, erro: "A biblioteca do Supabase não carregou." };
  }

  try {
    const tentativa = supabaseClient
      .from("Pedidos")
      .insert([dados]);

    const resultado = await Promise.race([
      tentativa.then(resposta => ({
        terminou: true,
        resposta
      })),
      new Promise(resolve => setTimeout(() => resolve({
        terminou: false
      }), 8000))
    ]);

    if (!resultado.terminou) {
      return {
        ok: false,
        erro: "O banco demorou mais de 8 segundos para responder."
      };
    }

    if (resultado.resposta.error) {
      console.error("Erro Supabase:", resultado.resposta.error);
      return {
        ok: false,
        erro: resultado.resposta.error.message
      };
    }

    return { ok: true, erro: "" };
  } catch (erro) {
    console.error("Erro Supabase:", erro);
    return {
      ok: false,
      erro: erro.message || "Não foi possível conectar ao banco."
    };
  }
}

async function enviarPedido() {
  if (enviandoPedido) return;

  if (!carrinho.length) {
    alert("Seu carrinho está vazio!");
    return;
  }

  if (!tipoEntrega) {
    alert("Escolha Retirada ou Entrega.");
    return;
  }

  if (!formaPagamento) {
    alert("Escolha a forma de pagamento.");
    return;
  }

  const nome = $("nome").value.trim();
  const rua = $("rua").value.trim();
  const observacao = $("observacao").value.trim();

  if (!nome) {
    alert("Digite seu nome.");
    $("nome").focus();
    return;
  }

  if (tipoEntrega === "entrega" && !rua) {
    alert("Informe a rua e o número.");
    $("rua").focus();
    return;
  }

  const totalPedido = total();

  const dados = {
    Nome_clientes: nome,
    Tipo_entrega: tipoEntrega === "entrega" ? "Entrega" : "Retirada",
    Rua: tipoEntrega === "entrega" ? rua : "Não se aplica",
    Observacao: observacao || "Nenhuma",
    Pagamento: formaPagamento,
    Troco: formaPagamento === "Dinheiro" ? (trocoPara || "Não precisa") : "Não se aplica",
    Itens: carrinho.map(item =>
      item.nome + (item.extras.length ? " | " + item.extras.join(", ") : "")
    ).join(" | "),
    Total: totalPedido,
    Data: new Date().toISOString()
  };

  let mensagem = "🍗 *NOVO PEDIDO — BENVENUTO CHICKEN*";
  mensagem += "\n\n👤 *Cliente:* " + nome;
  mensagem += "\n📦 *Tipo:* " + (tipoEntrega === "entrega" ? "Entrega" : "Retirada");

  if (tipoEntrega === "entrega") {
    mensagem += "\n📍 *Endereço:* " + rua;
  }

  mensagem += "\n\n🛒 *PEDIDO:*";

  carrinho.forEach(item => {
    mensagem += "\n• " + item.nome + " — " + dinheiro(item.preco);
    if (item.extras.length) {
      mensagem += "\n  + " + item.extras.join(", ");
    }
  });

  mensagem += "\n\n💰 *Subtotal:* " + dinheiro(subtotal());

  if (tipoEntrega === "entrega") {
    mensagem += "\n🚚 *Taxa:* " + dinheiro(TAXA_ENTREGA);
  }

  mensagem += "\n💵 *TOTAL:* " + dinheiro(totalPedido);
  mensagem += "\n💳 *Pagamento:* " + formaPagamento;

  if (formaPagamento === "Dinheiro") {
    mensagem += "\n💵 *Troco:* " + (trocoPara || "Não precisa");
  }

  if (formaPagamento === "PIX") {
    mensagem += "\n🔑 *PIX:* " + PIX;
  }

  if (observacao) {
    mensagem += "\n\n📝 *Observação:* " + observacao;
  }

  mensagem += "\n\nObrigado pelo pedido! ❤️";

  const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(mensagem);

  enviandoPedido = true;
  const botaoEnviar = document.querySelector(".whatsapp-button");
  botaoEnviar.disabled = true;
  botaoEnviar.textContent = "⏳ PREPARANDO PEDIDO...";

  const salvamento = await salvarPedidoNoSupabase(dados);

  if (!salvamento.ok) {
    alert(
      "Atenção: não conseguimos confirmar o salvamento do pedido no sistema.\n\n" +
      "O WhatsApp será aberto para você não perder o pedido.\n\n" +
      "Motivo: " + salvamento.erro
    );
  }

  // Abre o WhatsApp mesmo se o salvamento falhar.
  window.location.assign(url);
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarResumo();
});
