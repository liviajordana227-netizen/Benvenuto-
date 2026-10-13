/* Benvenuto Chicken */

const SUPABASE_URL = "https://wtphyvfqmwferggidzgt.supabase.co";
const SUPABASE_KEY = "sb_publishable_wdlAJqX0eGoc3XK-Hvg8Aw_f54EszKl";
const WHATSAPP = "5544997323438";
const CHAVE_PIX = "64213198000174";
const TAXA_ENTREGA = 4;

const supabaseClient =
  window.supabase && typeof window.supabase.createClient === "function"
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
    : null;

const cardapio = {
  lanches: {
    titulo: "🍔 Lanches",
    descricao: "Todos os lanches acompanham molho de alho.",
    produtos: [
      ["X-Burguer", 19],
      ["Pop Chicken", 22],
      ["Chicken", 26],
      ["X-Calabresa", 27],
      ["X-Bacon", 27],
      ["X-Salada", 25],
      ["X-Rings", 27],
      ["Especial Duplo Cheddar", 37],
      ["Duplo Cheddar", 33],
      ["Americano", 28],
      [
        "Supremo Tropical",
        39,
        "Hambúrguer, provolone, abacaxi, bacon, cebola caramelizada e alface."
      ]
    ]
  },

  baldes: {
    titulo: "🍗 Baldes",
    descricao: "Escolha Coxinha, Sassami ou Misto. Todos acompanham ketchup e barbecue.",
    produtos: [
      ["Balde 8 unidades", 21, "8 unidades"],
      ["Balde P", 40, "12 unidades"],
      ["Balde M", 50, "15 unidades"],
      ["Balde G", 60, "20 unidades"],
      [
        "Balde Fritas P",
        55.90,
        "12 unidades + 400g de batata ou polenta. Metade frango e metade acompanhamento."
      ],
      [
        "Balde Fritas M",
        65.90,
        "15 unidades + 600g de batata ou polenta. Metade frango e metade acompanhamento."
      ]
    ]
  },

  baldesTulipa: {
    titulo: "🍗 Baldes de Tulipa",
    descricao: "Todos acompanham barbecue e ketchup.",
    produtos: [
      ["Balde de Tulipa — 8 unidades", 26, "8 unidades de tulipa"],
      ["Balde de Tulipa P", 54, "Balde de tulipa tamanho P"],
      ["Balde de Tulipa M", 64, "Balde de tulipa tamanho M"],
      ["Balde de Tulipa G", 74, "Balde de tulipa tamanho G"],
      ["Balde de Fritas de Tulipa P", 70, "Tulipa com acompanhamento de fritas, tamanho P"],
      ["Balde de Fritas de Tulipa M", 80, "Tulipa com acompanhamento de fritas, tamanho M"]
    ]
  },

  combos: {
    titulo: "🔥 Combos",
    descricao: "Combos de frango, batatas e lanches.",
    produtos: [
      [
        "Combo Individual de Frango",
        36,
        "8 unidades + 300g de batata ou polenta + refrigerante 220ml. Acompanha barbecue e ketchup."
      ],
      [
        "Combo Duo de Frango",
        66,
        "12 unidades + 300g de batata ou polenta + refrigerante 600ml. Acompanha barbecue, ketchup e creme de alho."
      ],
      [
        "Combo Família de Frango",
        106,
        "20 unidades + 500g de batata ou polenta + refrigerante 2 litros. Acompanha quatro molhos."
      ],
      [
        "Combo 1",
        96,
        "1kg de frango + 1kg de batata com bacon e cheddar."
      ],
      [
        "Combo 2 — Misto",
        120,
        "1kg de frango + 1kg de polenta frita + 500g de calabresa acebolada."
      ],
      [
        "Combo 3",
        116,
        "1kg de frango + 500g de batata + 500g de anel de cebola + 500g de polenta + refrigerante 2 litros."
      ],
      [
        "Combo 4",
        120,
        "1kg de mandioca + 1kg de Sassami + 500g de calabresa acebolada + refrigerante 2 litros."
      ],
      ["Combo 5", 50, "1kg de batata com bacon e cheddar."],
      ["Combo 6", 40, "1kg de mandioca frita + 500g de calabresa acebolada."],
      [
        "Combo Individual Chicken",
        45,
        "1 Chicken + 300g de batata frita + refrigerante 220ml."
      ],
      [
        "Combo Duo Chicken",
        66,
        "2 Chickens + 500g de batata + 2 refrigerantes 220ml."
      ],
      [
        "Combo Trio Chicken",
        80,
        "3 Chickens + 500g de batata + 3 refrigerantes 220ml."
      ],
      [
        "Combo Família Chicken",
        150,
        "5 Chickens + 1kg de batata + refrigerante 2 litros."
      ],
      [
        "Combo Especial Duplo Cheddar — Duo",
        84,
        "2 Especial Duplo Cheddar + 600g de batata + 2 refrigerantes 220ml."
      ],
      [
        "Combo Especial Duplo Cheddar — Individual",
        47,
        "1 Especial Duplo Cheddar + 300g de batata + refrigerante 220ml."
      ],
      [
        "Combo Especial Lanche",
        80,
        "2 Chickens + 500g de batata com bacon e cheddar + refrigerante 600ml."
      ],
      [
        "Combo Individual Chicken com Cheddar e Bacon",
        40,
        "1 Chicken + 300g de batata com cheddar e bacon + refrigerante 220ml."
      ]
    ]
  },

  porcoes: {
    titulo: "🍟 Porções",
    descricao: "Porções para acompanhar seu pedido.",
    produtos: [
      [
        "Salada Americana",
        28,
        "Alface americana, tomate cereja, frango crocante e nosso molho especial."
      ],
      [
        "Salada Americana G",
        42,
        "Porção grande da salada americana, com alface americana, tomate cereja, frango crocante e nosso molho especial."
      ],
      ["Batata Apimentada", 38, "Acompanha molho de pimenta."],
      ["Polenta Frita — 500g", 17],
      ["Polenta Frita — 300g", 12],
      ["Anel de Cebola — 500g", 35],
      ["Anel de Cebola — 300g", 20]
    ]
  },

  batatas: {
    titulo: "🥔 Batatas",
    descricao: "Batatas fritas e especiais.",
    produtos: [
      ["Batata Frita — 300g", 19],
      ["Batata Frita — 500g", 30],
      ["Batata Bacon e Cheddar — 500g", 36]
    ]
  },

  bebidas: {
    titulo: "🥤 Bebidas",
    descricao: "Refrigerantes e água.",
    produtos: [
      ["Coca-Cola — Lata 350ml", 6],
      ["Coca-Cola Zero — Lata 350ml", 6],
      ["Fanta Guaraná — Lata 350ml", 6],
      ["Sprite — Lata 350ml", 6],
      ["Fanta Laranja — Lata 350ml", 6],
      ["Coca-Cola — 600ml", 9],
      ["Coca-Cola Zero — 600ml", 9],
      ["Fanta Guaraná — 600ml", 9],
      ["Sprite — 600ml", 9],
      ["Fanta Laranja — 600ml", 9],
      ["Coca-Cola — 2 litros", 15],
      ["Coca-Cola Zero — 2 litros", 15],
      ["Guaraná — 2 litros", 14],
      ["Fanta — 2 litros", 14],
      ["Sprite — 2 litros", 14],
      ["Água com gás", 3.50]
    ]
  },

  molhos: {
    titulo: "🥣 Molhos",
    descricao: "Molhos extras.",
    produtos: [
      ["Molho Cheddar", 6],
      ["Molho de Pimenta", 6],
      ["Mostarda e Mel", 6],
      ["Abacaxi com Pimenta", 6],
      ["Creme de Alho", 6],
      ["Barbecue", 5],
      ["Ketchup", 5]
    ]
  },

  adicionais: {
    titulo: "➕ Adicionais",
    descricao: "Adicionais para seus lanches.",
    produtos: [
      ["Anel de cebola", 3],
      ["Hambúrguer", 10],
      ["Bacon", 5],
      ["Muçarela", 4],
      ["Alface", 1],
      ["Catupiry", 5],
      ["Tomate", 1],
      ["Cebola", 1],
      ["Cheddar", 5],
      ["Cebola roxa", 4]
    ]
  }
};

let carrinho = [];
let categoriaAtual = "";
let baldeAtual = null;
let tipoFrango = "";
let misto = [];
let lancheAtual = null;
let comboAtual = null;
let tipoFrangoCombo = "";
let formaRecebimento = "entrega";
let formaPagamento = "";
let precisaTroco = "";
let trocoPara = "";

const dinheiro = valor =>
  Number(valor || 0).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

const porId = id => document.getElementById(id);

function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
}

function esconderTodas() {
  ["inicio", "cardapio", "produtosPagina"].forEach(id =>
    porId(id)?.classList.add("hidden")
  );
}

function mostrarInicio() {
  esconderTodas();
  porId("inicio")?.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarCardapio() {
  esconderTodas();
  porId("cardapio")?.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function voltarCategorias() {
  mostrarCardapio();
}

function abrirCategoria(nome) {
  const categoria = cardapio[nome];

  if (!categoria) {
    alert("Essa categoria não foi encontrada. Atualize a página e tente novamente.");
    return;
  }

  categoriaAtual = nome;
  esconderTodas();
  porId("produtosPagina").classList.remove("hidden");
  porId("tituloCategoria").textContent = categoria.titulo;
  porId("descricaoCategoria").textContent = categoria.descricao || "";

  const lista = porId("listaProdutos");

  lista.innerHTML = categoria.produtos.map((produto, indice) => `
    <article class="produto">
      <h2>${escaparHTML(produto[0])}</h2>
      ${produto[3] ? `<img src="${escaparHTML(produto[3])}" alt="${escaparHTML(produto[0])}" loading="lazy" onerror="this.style.display='none'">` : ""}
      <p class="produto-descricao">${escaparHTML(
        produto[2] ||
        (nome === "lanches"
          ? "Acompanha molho de alho."
          : "Preparado com carinho pela Benvenuto Chicken.")
      )}</p>
      <div class="produto-preco">R$ ${dinheiro(produto[1])}</div>
      <button class="botao-adicionar" type="button" onclick="adicionarProduto(${indice})">
        🛒 ADICIONAR
      </button>
    </article>
  `).join("");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function adicionarProduto(indice) {
  const produto = cardapio[categoriaAtual]?.produtos[indice];
  if (!produto) return;

  if (categoriaAtual === "baldes") {
    abrirBalde(produto);
    return;
  }

  if (categoriaAtual === "baldesTulipa") {
    adicionarAoCarrinho(
      produto[0],
      produto[1],
      `${produto[2] || ""} • Acompanha ketchup e barbecue`,
      []
    );
    return;
  }

  if (
    categoriaAtual === "combos" &&
    /^combo [123](?:\b|$)/.test(normalizarTexto(produto[0]))
  ) {
    abrirEscolhaCombo(produto);
    return;
  }

  if (categoriaAtual === "lanches") {
    abrirLanche(produto);
    return;
  }

  adicionarAoCarrinho(produto[0], produto[1], produto[2] || "", []);
}

/* BALDES NORMAIS: sem opção de Tulipa */
function abrirBalde(produto) {
  baldeAtual = produto;
  tipoFrango = "";
  misto = [];

  porId("nomeBalde").textContent =
    `${produto[0]} — R$ ${dinheiro(produto[1])}`;

  porId("mistoBox").classList.add("hidden");
  porId("resumoBalde").textContent = "Escolha o tipo de frango.";

  document.querySelectorAll(".escolha-frango").forEach(botao =>
    botao.classList.remove("selecionado")
  );

  document.querySelectorAll(".misto-opcao input").forEach(input => {
    input.checked = false;
  });

  porId("statusMisto").textContent = "Escolha 2 tipos.";
  porId("modalBalde").classList.remove("hidden");
}

function escolherTipoFrango(tipo, botao) {
  tipoFrango = tipo;

  document.querySelectorAll(".escolha-frango").forEach(item =>
    item.classList.remove("selecionado")
  );

  botao.classList.add("selecionado");

  if (tipo === "Misto") {
    porId("mistoBox").classList.remove("hidden");
  } else {
    porId("mistoBox").classList.add("hidden");
    misto = [];

    document.querySelectorAll(".misto-opcao input").forEach(input => {
      input.checked = false;
    });
  }

  atualizarResumoBalde();
}

function selecionarMisto(input) {
  if (input.checked && misto.length >= 2) {
    input.checked = false;
    alert("No misto você pode escolher apenas 2 tipos de frango.");
    return;
  }

  if (input.checked) {
    misto.push(input.value);
  } else {
    misto = misto.filter(tipo => tipo !== input.value);
  }

  porId("statusMisto").textContent =
    misto.length === 2
      ? `✓ ${misto.join(" + ")}`
      : `Escolha ${2 - misto.length} tipo(s).`;

  atualizarResumoBalde();
}

function precoBaldeAtual() {
  if (!baldeAtual) return 0;

  if (tipoFrango === "Misto") {
    return Number(baldeAtual[1]) + 10;
  }

  return Number(baldeAtual[1]);
}

function atualizarResumoBalde() {
  if (!tipoFrango || !baldeAtual) return;

  const tipo =
    tipoFrango === "Misto" && misto.length === 2
      ? `Misto: ${misto.join(" + ")}`
      : tipoFrango;

  porId("resumoBalde").innerHTML =
    `🍗 <strong>${escaparHTML(tipo)}</strong><br>` +
    `🥫 Acompanha ketchup e barbecue<br>` +
    `💰 R$ ${dinheiro(precoBaldeAtual())}`;
}

function confirmarBalde() {
  if (!tipoFrango) {
    alert("Escolha Coxinha, Sassami ou Misto.");
    return;
  }

  if (tipoFrango === "Misto" && misto.length !== 2) {
    alert("Escolha exatamente 2 tipos de frango para o misto.");
    return;
  }

  const descricao =
    `${tipoFrango === "Misto" ? "Misto: " + misto.join(" + ") : tipoFrango}` +
    " • Acompanha ketchup e barbecue";

  adicionarAoCarrinho(
    baldeAtual[0],
    precoBaldeAtual(),
    descricao,
    []
  );

  fecharModal("modalBalde");
}

/* COMBOS 1, 2 E 3: escolha obrigatória de Sassami ou Coxinha */
function abrirEscolhaCombo(produto) {
  comboAtual = produto;
  tipoFrangoCombo = "";

  porId("nomeCombo").textContent =
    `${produto[0]} — R$ ${dinheiro(produto[1])}`;

  porId("resumoCombo").textContent = "Escolha Sassami ou Coxinha.";

  document.querySelectorAll(".escolha-combo").forEach(botao =>
    botao.classList.remove("selecionado")
  );

  porId("modalCombo").classList.remove("hidden");
}

function escolherFrangoCombo(tipo, botao) {
  tipoFrangoCombo = tipo;

  document.querySelectorAll(".escolha-combo").forEach(item =>
    item.classList.remove("selecionado")
  );

  botao.classList.add("selecionado");
  porId("resumoCombo").textContent = `Frango escolhido: ${tipo}`;
}

function confirmarCombo() {
  if (!comboAtual) return;

  if (!tipoFrangoCombo) {
    alert("Escolha Sassami ou Coxinha antes de adicionar o combo.");
    return;
  }

  const descricao =
    `${comboAtual[2] || ""} • Frango escolhido: ${tipoFrangoCombo}`;

  adicionarAoCarrinho(
    comboAtual[0],
    comboAtual[1],
    descricao,
    []
  );

  fecharModal("modalCombo");
}

/* LANCHES E ADICIONAIS */
function abrirLanche(produto) {
  lancheAtual = produto;

  porId("nomeLanche").textContent =
    `${produto[0]} — R$ ${dinheiro(produto[1])}`;

  porId("listaAdicionais").innerHTML =
    cardapio.adicionais.produtos.map((adicional, indice) => `
      <label class="adicional">
        <span>
          <input type="checkbox" value="${indice}">
          ${escaparHTML(adicional[0])}
        </span>
        <span>+ R$ ${dinheiro(adicional[1])}</span>
      </label>
    `).join("");

  porId("modalLanche").classList.remove("hidden");
}

function confirmarLanche() {
  if (!lancheAtual) return;

  const adicionais = [
    ...document.querySelectorAll("#listaAdicionais input:checked")
  ].map(input => {
    const item = cardapio.adicionais.produtos[Number(input.value)];
    return { nome: item[0], preco: item[1] };
  });

  adicionarAoCarrinho(
    lancheAtual[0],
    lancheAtual[1],
    "Acompanha molho de alho",
    adicionais
  );

  fecharModal("modalLanche");
}

/* CARRINHO */
function adicionarAoCarrinho(nome, preco, descricao, adicionais) {
  const chave =
    `${nome}|${descricao}|${adicionais.map(item => item.nome).join(",")}`;

  const existente = carrinho.find(item => item.chave === chave);

  if (existente) {
    existente.quantidade++;
  } else {
    carrinho.push({
      chave,
      nome,
      preco: Number(preco),
      descricao,
      adicionais,
      quantidade: 1
    });
  }

  atualizarContador();
  alert("✓ Produto adicionado ao pedido!");
}

function atualizarContador() {
  porId("contador").textContent =
    carrinho.reduce((total, item) => total + item.quantidade, 0);
}

function abrirCarrinho() {
  renderizarCarrinho();
  porId("modalCarrinho").classList.remove("hidden");
}

function renderizarCarrinho() {
  const lista = porId("listaCarrinho");

  if (!carrinho.length) {
    lista.innerHTML = "<p>Seu pedido está vazio.</p>";
  } else {
    lista.innerHTML = carrinho.map((item, indice) => {
      const precoUnitario =
        item.preco +
        item.adicionais.reduce((soma, adicional) => soma + adicional.preco, 0);

      return `
        <div class="item">
          <h3>${item.quantidade}x ${escaparHTML(item.nome)}</h3>
          <p>
            ${escaparHTML(item.descricao || "")}
            ${item.adicionais.length
              ? "<br>➕ " + item.adicionais.map(a => escaparHTML(a.nome)).join(", ")
              : ""}
          </p>
          <strong>R$ ${dinheiro(precoUnitario * item.quantidade)}</strong>
          <div class="controles">
            <button onclick="alterarQuantidade(${indice},-1)" aria-label="Diminuir quantidade">−</button>
            <strong>${item.quantidade}</strong>
            <button onclick="alterarQuantidade(${indice},1)" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
      `;
    }).join("");
  }

  atualizarValores();
}

function alterarQuantidade(indice, variacao) {
  if (!carrinho[indice]) return;

  carrinho[indice].quantidade += variacao;

  if (carrinho[indice].quantidade <= 0) {
    carrinho.splice(indice, 1);
  }

  atualizarContador();
  renderizarCarrinho();
}

function calcularTotais() {
  const subtotal = carrinho.reduce((soma, item) => {
    const adicionais =
      item.adicionais.reduce((total, adicional) => total + adicional.preco, 0);

    return soma + (item.preco + adicionais) * item.quantidade;
  }, 0);

  const taxa = formaRecebimento === "entrega" ? TAXA_ENTREGA : 0;

  return { subtotal, taxa, total: subtotal + taxa };
}

function atualizarValores() {
  const { subtotal, taxa, total } = calcularTotais();

  porId("subtotal").textContent = `R$ ${dinheiro(subtotal)}`;
  porId("taxa").textContent = `R$ ${dinheiro(taxa)}`;
  porId("total").textContent = `R$ ${dinheiro(total)}`;
}

/* ENTREGA E RETIRADA */
function selecionarRecebimento(tipo) {
  formaRecebimento = tipo;

  porId("botaoEntrega").classList.toggle("ativo", tipo === "entrega");
  porId("botaoRetirada").classList.toggle("ativo", tipo === "retirada");
  porId("campoEndereco").classList.toggle("hidden", tipo !== "entrega");
  porId("enderecoCliente").placeholder = "Rua, número e complemento";

  atualizarValores();
}

/* PAGAMENTO */
function selecionarPagamento(forma) {
  formaPagamento = forma;
  precisaTroco = "";
  trocoPara = "";

  ["pagDinheiro", "pagCredito", "pagDebito", "pagPix"].forEach(id => {
    porId(id).style.borderColor = "#333";
  });

  const ids = {
    "Dinheiro": "pagDinheiro",
    "Crédito": "pagCredito",
    "Débito": "pagDebito",
    "PIX": "pagPix"
  };

  if (ids[forma]) {
    porId(ids[forma]).style.borderColor = "#159447";
  }

  porId("detalhesDinheiro").classList.toggle("hidden", forma !== "Dinheiro");
  porId("detalhesPix").classList.toggle("hidden", forma !== "PIX");

  document.querySelectorAll('input[name="troco"]').forEach(input => {
    input.checked = false;
  });

  porId("campoTrocoContainer").classList.add("hidden");
  porId("trocoPara").value = "";
}

function mostrarCampoTroco(precisa) {
  const escolhido = document.querySelector('input[name="troco"]:checked');

  precisaTroco =
    precisa && escolhido ? escolhido.value : (precisa ? "Sim" : "Não");

  porId("campoTrocoContainer").classList.toggle("hidden", !precisa);

  if (!precisa) {
    porId("trocoPara").value = "";
    trocoPara = "";
  }
}

async function copiarPix() {
  try {
    await navigator.clipboard.writeText(CHAVE_PIX);
    alert("✓ Chave PIX copiada!");
  } catch (_) {
    window.prompt("Copie a chave PIX:", CHAVE_PIX);
  }
}

/* SUPABASE: REGISTRO DO PEDIDO */
function formatarItensParaPedido() {
  return carrinho.map(item => ({
    nome: item.nome,
    quantidade: item.quantidade,
    preco_unitario: item.preco,
    adicionais: item.adicionais,
    descricao: item.descricao,
    total_item:
      (item.preco + item.adicionais.reduce((soma, adicional) => soma + adicional.preco, 0)) *
      item.quantidade
  }));
}

async function salvarPedidoSupabase(pedido) {
  if (!supabaseClient) {
    return { ok: false, motivo: "Biblioteca do Supabase não carregou." };
  }

  let { error } = await supabaseClient.from("pedidos").insert([pedido]);

  if (error && Array.isArray(pedido["Itens"])) {
    const pedidoTexto = {
      ...pedido,
      "Itens": JSON.stringify(pedido["Itens"])
    };

    const segundaTentativa =
      await supabaseClient.from("pedidos").insert([pedidoTexto]);

    error = segundaTentativa.error;
  }

  if (error) {
    console.error("Não foi possível salvar o pedido no Supabase:", error);
    return { ok: false, motivo: error.message };
  }

  return { ok: true };
}

function normalizarTexto(valor) {
  return String(valor ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function valorDaLinha(linha, nomes) {
  const chaves = Object.keys(linha || {});

  for (const nome of nomes) {
    const chave = chaves.find(
      item => normalizarTexto(item) === normalizarTexto(nome)
    );

    if (chave !== undefined && linha[chave] !== null && linha[chave] !== "") {
      return linha[chave];
    }
  }

  return "";
}

function categoriaDaLinha(valor) {
  const categoria = normalizarTexto(valor).replace(/[^a-z0-9]/g, "");

  const mapa = {
    lanche: "lanches",
    lanches: "lanches",
    balde: "baldes",
    baldes: "baldes",
    baldestulipa: "baldesTulipa",
    baldetulipa: "baldesTulipa",
    tulipa: "baldesTulipa",
    combo: "combos",
    combos: "combos",
    porcao: "porcoes",
    porcoes: "porcoes",
    batata: "batatas",
    batatas: "batatas",
    bebida: "bebidas",
    bebidas: "bebidas",
    molho: "molhos",
    molhos: "molhos",
    adicional: "adicionais",
    adicionais: "adicionais"
  };

  return mapa[categoria] || "";
}

async function carregarProdutosSupabase() {
  if (!supabaseClient) return;

  try {
    const { data, error } = await supabaseClient.from("produtos").select("*");

    if (error) throw error;
    if (!Array.isArray(data) || data.length === 0) return;

    const agrupados = {};

    for (const linha of data) {
      const categoria = categoriaDaLinha(
        valorDaLinha(linha, ["categoria", "categoria_produto"])
      );

      const nome = valorDaLinha(linha, ["nome", "produto", "titulo", "title"]);
      const precoBruto = valorDaLinha(
        linha,
        ["preco", "preço", "valor", "price"]
      );

      if (!categoria || !nome || precoBruto === "") continue;

      const preco = typeof precoBruto === "number"
        ? precoBruto
        : Number(
            String(precoBruto)
              .replace(/R\$/gi, "")
              .trim()
              .replace(/\.(?=\d{3}(?:\D|$))/g, "")
              .replace(",", ".")
          );

      if (!Number.isFinite(preco)) continue;

      const descricao =
        valorDaLinha(linha, ["descricao", "descrição", "detalhes"]) || "";

      const imagem =
        valorDaLinha(linha, ["imagem", "image", "imagem_url", "foto", "url_imagem"]) || "";

      if (!agrupados[categoria]) agrupados[categoria] = [];

      agrupados[categoria].push([
        String(nome),
        preco,
        String(descricao),
        String(imagem)
      ]);
    }

    for (const [categoria, produtos] of Object.entries(agrupados)) {
      if (produtos.length && cardapio[categoria]) {
        const nomesBanco = new Set(
          produtos.map(item => normalizarTexto(item[0]))
        );

        const complementos = cardapio[categoria].produtos.filter(
          item => !nomesBanco.has(normalizarTexto(item[0]))
        );

        cardapio[categoria].produtos = [...produtos, ...complementos];
      }
    }
  } catch (erro) {
    console.warn(
      "Não foi possível carregar produtos do Supabase; usando o cardápio local.",
      erro?.message || erro
    );
  }
}

/* ENVIO DO PEDIDO PELO WHATSAPP */
async function enviarWhatsApp() {
  if (!carrinho.length) {
    alert("Seu pedido está vazio.");
    return;
  }

  const nome = porId("nomeCliente").value.trim();
  const endereco = porId("enderecoCliente").value.trim();
  const observacao = porId("observacoes").value.trim();

  if (!nome) {
    alert("Digite seu nome.");
    return;
  }

  if (formaRecebimento === "entrega" && !endereco) {
    alert("Digite seu endereço (rua, número e complemento).");
    return;
  }

  if (!formaPagamento) {
    alert("Escolha uma forma de pagamento.");
    return;
  }

  if (formaPagamento === "Dinheiro") {
    const radio = document.querySelector('input[name="troco"]:checked');

    if (!radio) {
      alert("Informe se precisa de troco.");
      return;
    }

    precisaTroco = radio.value;

    if (precisaTroco === "Sim") {
      trocoPara = porId("trocoPara").value.trim();

      if (!trocoPara) {
        alert("Digite para quanto precisa de troco.");
        return;
      }
    }
  }

  const { subtotal, taxa, total } = calcularTotais();

  let mensagem =
    `🍗 *BENVENUTO CHICKEN* 🍗\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `🛒 *NOVO PEDIDO*\n` +
    `━━━━━━━━━━━━━━━━━━\n\n` +
    `👤 *Nome:* ${nome}\n`;

  mensagem += formaRecebimento === "entrega"
    ? `🚚 *Entrega*\n📍 *Endereço:* ${endereco}\n`
    : "🏪 *Retirada no local*\n";

  mensagem += "\n🍔 *ITENS DO PEDIDO*\n━━━━━━━━━━━━━━━━━━\n\n";

  carrinho.forEach(item => {
    const precoUnitario =
      item.preco +
      item.adicionais.reduce((soma, adicional) => soma + adicional.preco, 0);

    mensagem +=
      `🍗 ${item.quantidade}x ${item.nome}\n` +
      `💰 R$ ${dinheiro(precoUnitario * item.quantidade)}\n`;

    if (item.descricao) {
      mensagem += `ℹ️ ${item.descricao}\n`;
    }

    if (item.adicionais.length) {
      mensagem +=
        `➕ Adicionais: ${item.adicionais.map(a => a.nome).join(", ")}\n`;
    }

    mensagem += "\n";
  });

  mensagem +=
    `━━━━━━━━━━━━━━━━━━\n` +
    `💰 *Subtotal:* R$ ${dinheiro(subtotal)}\n` +
    `🚚 *Taxa de entrega:* R$ ${dinheiro(taxa)}\n` +
    `💵 *TOTAL:* R$ ${dinheiro(total)}\n\n` +
    `💳 *PAGAMENTO*\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `💳 *Forma:* ${formaPagamento}\n`;

  if (formaPagamento === "PIX") {
    mensagem += `🔑 *Chave PIX:* ${CHAVE_PIX}\n`;
  }

  if (formaPagamento === "Dinheiro") {
    mensagem += `🔄 *Precisa de troco:* ${precisaTroco}\n`;

    if (precisaTroco === "Sim") {
      mensagem += `💵 *Troco para:* R$ ${trocoPara}\n`;
    }
  }

  if (observacao) {
    mensagem += `\n📝 *Observações:*\n${observacao}\n`;
  }

  mensagem += "\n❤️ Obrigado por pedir na Benvenuto Chicken!";

  const janela = window.open("about:blank", "_blank");

  const pedidoDB = {
    "Nome_clientes": nome,
    "Endereço": formaRecebimento === "entrega" ? endereco : "Retirada no local",
    "Observação": observacao || null,
    "Pagamento": formaPagamento,
    "Troco_para":
      formaPagamento === "Dinheiro" && precisaTroco === "Sim"
        ? trocoPara
        : null,
    "Itens": formatarItensParaPedido(),
    "Total": total,
    "Status": "Novo",
    "Tipo_entrega": formaRecebimento === "entrega" ? "Entrega" : "Retirada"
  };

  const urlWhatsApp =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

  if (janela && !janela.closed) {
    janela.location.href = urlWhatsApp;

    const resultado = await salvarPedidoSupabase(pedidoDB);

    if (!resultado.ok) {
      console.warn(
        "O WhatsApp abriu, mas o pedido pode não ter sido registrado no Supabase. Confira as colunas da tabela pedidos.",
        resultado.motivo
      );
    }
  } else {
    const resultado = await salvarPedidoSupabase(pedidoDB);

    if (!resultado.ok) {
      console.warn(
        "O pedido pode não ter sido registrado no Supabase. Confira as colunas da tabela pedidos.",
        resultado.motivo
      );
    }

    window.location.href = urlWhatsApp;
  }
}

function fecharModal(id) {
  porId(id)?.classList.add("hidden");
}

/* Início do site */
mostrarInicio();
atualizarContador();
selecionarRecebimento("entrega");
carregarProdutosSupabase();
