
/* ==========================================
   BENVENUTO CHICKEN
   Cardápio, carrinho, Supabase e WhatsApp
   ========================================== */

// CONFIGURAÇÃO DO SUPABASE
const SUPABASE_URL = "https://wtphyvfqmwferggidzgt.supabase.co";
const SUPABASE_KEY = "sb_publishable_wdlAJqX0eGoc3XK-Hvg8Aw_f54EszKl";

// DADOS DA LANCHONETE
const WHATSAPP = "5544997323438";
const CHAVE_PIX = "64213198000174";
const TAXA_ENTREGA = 4;

// ESTADO DO SITE
let supabaseClient = null;
let produtos = [];
let carrinho = [];
let categoriaAtual = "";
let recebimento = "entrega";
let pagamento = "";
let produtoPendente = null;
let tipoFrango = "";
let tiposMisto = [];
let adicionaisSelecionados = [];

// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================

function normalizar(valor) {
  return String(valor ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[\s-]+/g, "_");
}

function obterCampo(objeto, nomes, padrao = "") {
  for (const nome of nomes) {
    const chave = Object.keys(objeto || {}).find(
      k => normalizar(k) === normalizar(nome)
    );

    if (chave !== undefined && objeto[chave] != null) {
      return objeto[chave];
    }
  }

  return padrao;
}

function dinheiro(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function numeroPreco(valor) {
  if (typeof valor === "number") return valor;

  let texto = String(valor ?? "0").replace(/[R$\s]/g, "");

  if (texto.includes(",")) {
    texto = texto.replace(/\./g, "").replace(",", ".");
  }

  const numero = Number(texto);
  return Number.isFinite(numero) ? numero : 0;
}

function escaparHTML(valor) {
  return String(valor ?? "").replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[caractere]);
}

function categoriaCombina(valor, desejada) {
  const categoria = normalizar(valor);

  const aliases = {
    lanches: ["lanche", "lanches"],
    baldes: ["balde", "baldes", "frango", "frangos"],
    combos: ["combo", "combos", "promocoes"],
    bebidas: ["bebida", "bebidas"],
    porcoes: ["porcao", "porcoes"],
    batatas: ["batata", "batatas"],
    molhos: ["molho", "molhos"],
    adicionais: ["adicional", "adicionais", "extras"]
  };

  return (aliases[desejada] || [desejada]).includes(categoria);
}

// ==========================================
// CONEXÃO COM SUPABASE
// ==========================================

async function iniciarSupabase() {
  if (!window.supabase) {
    console.error("A biblioteca do Supabase não foi carregada.");
    return false;
  }

  if (
    !SUPABASE_KEY ||
    SUPABASE_KEY === "COLE_SUA_CHAVE_PUBLICA_AQUI"
  ) {
    console.error("A chave pública do Supabase não foi configurada.");
    return false;
  }

  if (!supabaseClient) {
    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );
  }

  return true;
}

// ==========================================
// CARREGAR PRODUTOS DA TABELA produtos
// ==========================================

async function carregarProdutos() {
  const lista = document.getElementById("listaProdutos");

  if (lista) {
    lista.innerHTML = "<p>Carregando cardápio...</p>";
  }

  const conectado = await iniciarSupabase();

  if (!conectado) {
    mostrarErroProdutos(
      "Não foi possível conectar ao Supabase. Confira a biblioteca e a chave pública."
    );
    return;
  }

  const { data, error } = await supabaseClient
    .from("produtos")
    .select("*");

  if (error) {
    console.error("Erro ao carregar produtos:", error);

    mostrarErroProdutos(
      "Não foi possível carregar o cardápio. Confira as permissões de leitura da tabela produtos no Supabase."
    );
    return;
  }

  produtos = (data || []).map((item, indice) => ({
    id: obterCampo(item, ["id"], indice + 1),
    nome: obterCampo(item, ["nome", "name"], "Produto"),
    preco: numeroPreco(
      obterCampo(item, ["preco", "preço", "valor", "price"], 0)
    ),
    descricao: obterCampo(
      item,
      ["descricao", "descrição", "description"],
      ""
    ),
    categoria: obterCampo(
      item,
      ["categoria", "category"],
      ""
    ),
    imagem: obterCampo(
      item,
      ["imagem", "image", "foto"],
      ""
    )
  }));

  mostrarCardapio();
}

function mostrarErroProdutos(mensagem) {
  const lista = document.getElementById("listaProdutos");

  if (lista) {
    lista.textContent = mensagem;
  }

  console.error(mensagem);
}

// ==========================================
// NAVEGAÇÃO
// ==========================================

function esconderSecoes() {
  ["inicio", "cardapio", "produtosPagina"].forEach(id => {
    document.getElementById(id)?.classList.add("hidden");
  });
}

function mostrarInicio() {
  esconderSecoes();
  document.getElementById("inicio")?.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarCardapio() {
  esconderSecoes();
  document.getElementById("cardapio")?.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function abrirCategoria(categoria) {
  categoriaAtual = normalizar(categoria);

  esconderSecoes();
  document.getElementById("produtosPagina")?.classList.remove("hidden");

  const titulos = {
    lanches: "🍔 Lanches",
    baldes: "🍗 Baldes de frango",
    combos: "🔥 Combos",
    bebidas: "🥤 Bebidas",
    porcoes: "🍟 Porções",
    batatas: "🥔 Batatas",
    molhos: "🥣 Molhos",
    adicionais: "➕ Adicionais"
  };

  const titulo = document.getElementById("tituloCategoria");
  if (titulo) {
    titulo.textContent = titulos[categoriaAtual] || categoria;
  }

  const descricao = document.getElementById("descricaoCategoria");
  if (descricao) {
    descricao.textContent =
      "Escolha seus produtos e adicione ao pedido.";
  }

  renderizarProdutos();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function voltarCategorias() {
  mostrarCardapio();
}

// ==========================================
// EXIBIR PRODUTOS
// ==========================================

function renderizarProdutos() {
  const lista = document.getElementById("listaProdutos");
  if (!lista) return;

  const filtrados = produtos.filter(produto =>
    categoriaCombina(produto.categoria, categoriaAtual)
  );

  if (!filtrados.length) {
    lista.innerHTML =
      "<p>Não há produtos cadastrados nesta categoria ainda.</p>";
    return;
  }

  lista.innerHTML = filtrados.map(produto => {
    const imagem = produto.imagem
      ? `<img class="produto-imagem"
          src="${escaparHTML(produto.imagem)}"
          alt="${escaparHTML(produto.nome)}"
          loading="lazy"
          onerror="this.style.display='none'">`
      : "";

    return `
      <article class="produto">
        ${imagem}
        <h2>${escaparHTML(produto.nome)}</h2>
        <p class="produto-descricao">
          ${escaparHTML(produto.descricao)}
        </p>
        <p class="produto-preco">${dinheiro(produto.preco)}</p>
        <button class="botao-adicionar"
          onclick="iniciarAdicao(${JSON.stringify(String(produto.id))})">
          ➕ ADICIONAR
        </button>
      </article>
    `;
  }).join("");
}

// ==========================================
// ADICIONAR PRODUTOS
// ==========================================

function iniciarAdicao(id) {
  const produto = produtos.find(
    item => String(item.id) === String(id)
  );

  if (!produto) return;

  produtoPendente = produto;

  const categoria = normalizar(produto.categoria);
  const nome = normalizar(produto.nome);

  if (categoriaCombina(categoria, "baldes") || nome.includes("balde")) {
    abrirModalBalde(produto);
    return;
  }

  if (categoriaCombina(categoria, "lanches")) {
    abrirModalLanche(produto);
    return;
  }

  adicionarCarrinho(produto);
}

function adicionarCarrinho(
  produto,
  extras = [],
  escolha = "",
  acrescimo = 0
) {
  const totalAdicionais = extras.reduce(
    (soma, item) => soma + item.preco,
    0
  );

  carrinho.push({
    chave: `${Date.now()}-${Math.random()}`,
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco + totalAdicionais + acrescimo,
    quantidade: 1,
    escolha,
    adicionais: extras
  });

  atualizarCarrinho();

  fecharModal("modalBalde");
  fecharModal("modalLanche");
}

// ==========================================
// BALDES DE FRANGO
// ==========================================

function abrirModalBalde(produto) {
  tipoFrango = "";
  tiposMisto = [];

  const nome = document.getElementById("nomeBalde");
  if (nome) nome.textContent = produto.nome;

  document.querySelectorAll(".escolha-frango").forEach(botao => {
    botao.classList.remove("selecionado");
  });

  document.querySelectorAll(
    '#mistoBox input[type="checkbox"]'
  ).forEach(c => {
    c.checked = false;
  });

  document.getElementById("mistoBox")?.classList.add("hidden");

  const resumo = document.getElementById("resumoBalde");
  if (resumo) resumo.textContent = "Escolha o tipo de frango.";

  abrirModal("modalBalde");
}

function escolherTipoFrango(tipo, botao) {
  tipoFrango = tipo;
  tiposMisto = [];

  document.querySelectorAll(".escolha-frango").forEach(b => {
    b.classList.remove("selecionado");
  });

  botao.classList.add("selecionado");

  const misto = tipo === "Misto";

  document.getElementById("mistoBox")?.classList.toggle(
    "hidden",
    !misto
  );

  document.querySelectorAll(
    '#mistoBox input[type="checkbox"]'
  ).forEach(c => {
    c.checked = false;
  });

  atualizarResumoBalde();
}

function selecionarMisto(checkbox) {
  if (checkbox.checked) {
    if (tiposMisto.length >= 2) {
      checkbox.checked = false;
      alert("Escolha somente 2 tipos de frango.");
      return;
    }

    tiposMisto.push(checkbox.value);
  } else {
    tiposMisto = tiposMisto.filter(
      tipo => tipo !== checkbox.value
    );
  }

  const status = document.getElementById("statusMisto");

  if (status) {
    status.textContent =
      `Você escolheu ${tiposMisto.length} de 2 tipos.`;
  }

  atualizarResumoBalde();
}

function atualizarResumoBalde() {
  const resumo = document.getElementById("resumoBalde");
  if (!resumo) return;

  const acrescimo =
    tipoFrango === "Misto" || tipoFrango === "Tulipa" ? 10 : 0;

  const escolha = tipoFrango === "Misto"
    ? tiposMisto.join(" + ")
    : tipoFrango;

  resumo.textContent = escolha
    ? `Escolha: ${escolha}. Adicional: ${dinheiro(acrescimo)}`
    : "Escolha o tipo de frango.";
}

function confirmarBalde() {
  if (!produtoPendente || !tipoFrango) {
    alert("Escolha o tipo de frango.");
    return;
  }

  if (tipoFrango === "Misto" && tiposMisto.length !== 2) {
    alert("Para o Misto, escolha exatamente 2 tipos de frango.");
    return;
  }

  // Misto custa +R$10 no total, mesmo se incluir Tulipa.
  const acrescimo =
    tipoFrango === "Misto" || tipoFrango === "Tulipa" ? 10 : 0;

  const escolha = tipoFrango === "Misto"
    ? `Misto (${tiposMisto.join(" + ")})`
    : tipoFrango;

  adicionarCarrinho(produtoPendente, [], escolha, acrescimo);
}

// ==========================================
// LANCHES E ADICIONAIS
// ==========================================

const OPCOES_ADICIONAIS = [
  { nome: "Anel de cebola", preco: 3 },
  { nome: "Hambúrguer", preco: 10 },
  { nome: "Bacon", preco: 5 },
  { nome: "Muçarela", preco: 4 },
  { nome: "Alface", preco: 1 },
  { nome: "Catupiry", preco: 5 },
  { nome: "Tomate", preco: 1 },
  { nome: "Cebola", preco: 1 },
  { nome: "Cheddar", preco: 5 },
  { nome: "Cebola roxa", preco: 4 }
];

function abrirModalLanche(produto) {
  adicionaisSelecionados = [];

  const nome = document.getElementById("nomeLanche");
  if (nome) nome.textContent = produto.nome;

  const lista = document.getElementById("listaAdicionais");

  if (lista) {
    lista.innerHTML = OPCOES_ADICIONAIS.map((item, indice) => `
      <label class="adicional">
        <span>
          ${escaparHTML(item.nome)} (+${dinheiro(item.preco)})
        </span>
        <input type="checkbox"
          onchange="alternarAdicional(${indice}, this.checked)">
      </label>
    `).join("");
  }

  abrirModal("modalLanche");
}

function alternarAdicional(indice, marcado) {
  const item = OPCOES_ADICIONAIS[indice];
  if (!item) return;

  if (marcado) {
    adicionaisSelecionados.push({ ...item });
  } else {
    const posicao = adicionaisSelecionados.findIndex(
      adicional => adicional.nome === item.nome
    );

    if (posicao >= 0) {
      adicionaisSelecionados.splice(posicao, 1);
    }
  }
}

function confirmarLanche() {
  if (!produtoPendente) return;

  adicionarCarrinho(
    produtoPendente,
    [...adicionaisSelecionados]
  );

  adicionaisSelecionados = [];
}

// ==========================================
// CARRINHO
// ==========================================

function subtotalCarrinho() {
  return carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );
}

function totalCarrinho() {
  return subtotalCarrinho() +
    (recebimento === "entrega" ? TAXA_ENTREGA : 0);
}

function atualizarCarrinho() {
  const contador = document.getElementById("contador");

  if (contador) {
    contador.textContent = carrinho.reduce(
      (soma, item) => soma + item.quantidade,
      0
    );
  }

  renderizarCarrinho();
}

function renderizarCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  if (!lista) return;

  if (!carrinho.length) {
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
  } else {
    lista.innerHTML = carrinho.map(item => `
      <div class="item">
        <h3>${escaparHTML(item.nome)}</h3>
        ${item.escolha
          ? `<p>Escolha: ${escaparHTML(item.escolha)}</p>`
          : ""}
        ${item.adicionais.length
          ? `<p>Adicionais: ${item.adicionais.map(a =>
              escaparHTML(a.nome)).join(", ")}</p>`
          : ""}
        <p>${dinheiro(item.preco)} cada</p>
        <div class="controles">
          <button onclick="alterarQuantidade('${item.chave}', -1)">−</button>
          <strong>${item.quantidade}</strong>
          <button onclick="alterarQuantidade('${item.chave}', 1)">+</button>
          <button onclick="removerItem('${item.chave}')">🗑️</button>
        </div>
      </div>
    `).join("");
  }

  const subtotal = document.getElementById("subtotal");
  const taxa = document.getElementById("taxa");
  const total = document.getElementById("total");

  if (subtotal) subtotal.textContent = dinheiro(subtotalCarrinho());

  if (taxa) {
    taxa.textContent = dinheiro(
      recebimento === "entrega" ? TAXA_ENTREGA : 0
    );
  }

  if (total) total.textContent = dinheiro(totalCarrinho());
}

function alterarQuantidade(chave, mudanca) {
  const item = carrinho.find(p => p.chave === chave);
  if (!item) return;

  item.quantidade += mudanca;

  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(p => p.chave !== chave);
  }

  atualizarCarrinho();
}

function removerItem(chave) {
  carrinho = carrinho.filter(p => p.chave !== chave);
  atualizarCarrinho();
}

function abrirCarrinho() {
  renderizarCarrinho();
  abrirModal("modalCarrinho");
}

function selecionarRecebimento(tipo) {
  recebimento = tipo;

  document.getElementById("botaoEntrega")?.classList.toggle(
    "ativo",
    tipo === "entrega"
  );

  document.getElementById("botaoRetirada")?.classList.toggle(
    "ativo",
    tipo === "retirada"
  );

  document.getElementById("campoEndereco")?.classList.toggle(
    "hidden",
    tipo !== "entrega"
  );

  renderizarCarrinho();
}

// ==========================================
// PAGAMENTO E PIX
// ==========================================

function selecionarPagamento(tipo) {
  pagamento = tipo;

  document.getElementById("detalhesDinheiro")?.classList.toggle(
    "hidden",
    tipo !== "Dinheiro"
  );

  document.getElementById("detalhesPix")?.classList.toggle(
    "hidden",
    tipo !== "PIX"
  );

  document.querySelectorAll(".pagamento").forEach(elemento => {
    elemento.style.borderColor = "";
  });

  const indice = {
    Dinheiro: 0,
    Crédito: 1,
    Débito: 2,
    PIX: 3
  }[tipo];

  const opcoes = document.querySelectorAll(".pagamento");

  if (opcoes[indice]) {
    opcoes[indice].style.borderColor = "#159447";
  }
}

function mostrarCampoTroco(mostrar) {
  document.getElementById("campoTrocoContainer")?.classList.toggle(
    "hidden",
    !mostrar
  );
}

async function copiarPix() {
  try {
    await navigator.clipboard.writeText(CHAVE_PIX);
    alert("Chave PIX copiada!");
  } catch {
    alert("Sua chave PIX é: " + CHAVE_PIX);
  }
}

// ==========================================
// SALVAR PEDIDO NA TABELA pedidos
// ==========================================

async function salvarPedido(pedido) {
  if (!supabaseClient) {
    throw new Error("Supabase não está conectado.");
  }

  const registro = {
    "Nome_clientes": pedido.nome,
    "Endereço": pedido.endereco,
    "Observação": pedido.observacao,
    "Pagamento": pedido.pagamento,
    "Troco_para": pedido.troco,
    "Itens": pedido.itens,
    "Total": pedido.total,
    "Status": "Novo",
    "Tipo_entrega": pedido.tipoEntrega
  };

  let resultado = await supabaseClient
    .from("pedidos")
    .insert([registro]);

  if (resultado.error) {
    console.error("Erro ao salvar o pedido:", resultado.error);
    throw resultado.error;
  }

  return true;
}

// ==========================================
// ENVIAR PEDIDO PELO WHATSAPP
// ==========================================

async function enviarWhatsApp() {
  if (!carrinho.length) {
    alert("Adicione pelo menos um produto ao carrinho.");
    return;
  }

  const nome =
    document.getElementById("nomeCliente")?.value.trim() || "";

  const endereco =
    document.getElementById("enderecoCliente")?.value.trim() || "";

  const observacao =
    document.getElementById("observacoes")?.value.trim() || "";

  if (!nome) {
    alert("Digite seu nome.");
    document.getElementById("nomeCliente")?.focus();
    return;
  }

  if (recebimento === "entrega" && !endereco) {
    alert("Digite o endereço de entrega.");
    document.getElementById("enderecoCliente")?.focus();
    return;
  }

  if (!pagamento) {
    alert("Selecione a forma de pagamento.");
    return;
  }

  let troco = "Não precisa";

  if (pagamento === "Dinheiro") {
    const escolhaTroco = document.querySelector(
      'input[name="troco"]:checked'
    );

    if (!escolhaTroco) {
      alert("Informe se precisa de troco.");
      return;
    }

    if (escolhaTroco.value === "Sim") {
      troco =
        document.getElementById("trocoPara")?.value.trim() || "";

      if (!troco) {
        alert("Informe o valor para o troco.");
        return;
      }
    }
  }

  const itens = carrinho.map(item => ({
    nome: item.nome,
    quantidade: item.quantidade,
    preco_unitario: item.preco,
    escolha: item.escolha || "",
    adicionais: item.adicionais.map(a => a.nome),
    subtotal: Number((item.preco * item.quantidade).toFixed(2))
  }));

  const pedido = {
    nome,
    endereco: recebimento === "entrega"
      ? endereco
      : "Retirada no local",
    observacao,
    pagamento,
    troco: pagamento === "Dinheiro" ? troco : "Não se aplica",
    itens,
    total: Number(totalCarrinho().toFixed(2)),
    tipoEntrega: recebimento === "entrega" ? "Entrega" : "Retirada"
  };

  const linhasItens = itens.map(item => {
    let linha = `• ${item.quantidade}x ${item.nome}`;

    if (item.escolha) {
      linha += ` (${item.escolha})`;
    }

    if (item.adicionais.length) {
      linha += ` | Adicionais: ${item.adicionais.join(", ")}`;
    }

    linha += ` — ${dinheiro(item.subtotal)}`;
    return linha;
  });

  let mensagem =
    `🍗 *PEDIDO — BENVENUTO CHICKEN*\n\n` +
    `👤 *Cliente:* ${nome}\n` +
    `📦 *Recebimento:* ${pedido.tipoEntrega}\n`;

  if (recebimento === "entrega") {
    mensagem += `📍 *Endereço:* ${endereco}\n`;
  }

  mensagem +=
    `\n🛒 *ITENS DO PEDIDO*\n${linhasItens.join("\n")}\n\n` +
    `💰 *Subtotal:* ${dinheiro(subtotalCarrinho())}\n` +
    `🚚 *Taxa de entrega:* ${dinheiro(
      recebimento === "entrega" ? TAXA_ENTREGA : 0
    )}\n` +
    `💵 *TOTAL:* ${dinheiro(pedido.total)}\n\n` +
    `💳 *Pagamento:* ${pagamento}\n`;

  if (pagamento === "PIX") {
    mensagem += `🔑 *Chave PIX:* ${CHAVE_PIX}\n`;
  }

  if (pagamento === "Dinheiro") {
    mensagem += `💵 *Troco:* ${troco}\n`;
  }

  if (observacao) {
    mensagem += `\n📝 *Observações:* ${observacao}\n`;
  }

  mensagem +=
    "\nObrigado por escolher a Benvenuto Chicken! ❤️";

  const urlWhatsApp =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

  // Abre a janela imediatamente para reduzir bloqueios do navegador.
  const janela = window.open("about:blank", "_blank");

  try {
    await salvarPedido(pedido);
    console.log("Pedido registrado no Supabase.");
  } catch (erro) {
    console.error("Não foi possível salvar o pedido:", erro);

    alert(
      "Não conseguimos registrar o pedido no banco de dados. " +
      "O WhatsApp será aberto para você continuar."
    );
  }

  if (janela) {
    janela.location.href = urlWhatsApp;
  } else {
    window.location.href = urlWhatsApp;
  }
}

// ==========================================
// MODAIS
// ==========================================

function abrirModal(id) {
  document.getElementById(id)?.classList.remove("hidden");
}

function fecharModal(id) {
  document.getElementById(id)?.classList.add("hidden");
}

// ==========================================
// INICIAR
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {
  const conectado = await iniciarSupabase();

  const chavePix = document.getElementById("chavePix");
  if (chavePix) {
    chavePix.textContent = CHAVE_PIX;
  }

  if (conectado) {
    await carregarProdutos();
  }
});
