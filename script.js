/* =====================================================
   SUPABASE
===================================================== */

const SUPABASE_URL = "https://wtphyvfqmwferggidzgt.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_wdlAJqX0eGoc3XK-Hvg8Aw_f54EszKl";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const WHATSAPP = "5544997323438";
const PIX = "64213198000174";
const TAXA_ENTREGA = 4;


/* =====================================================
   CARDÁPIO
===================================================== */

const cardapio = {

  /* =========================
     LANCHES
  ========================= */

  lanches: [

    {
      nome: "X-Burguer",
      preco: 19,
      descricao: "Pão, hambúrguer, queijo e molho de alho."
    },

    {
      nome: "Pop Chicken",
      preco: 22,
      descricao: "Pão, Sassami, catupiry e molho de alho."
    },

    {
      nome: "Chicken",
      preco: 26,
      descricao: "Pão, Sassami, alface, tomate, cebola e molho de alho."
    },

    {
      nome: "X-Calabresa",
      preco: 27,
      descricao: "Pão, molho de alho, queijo, calabresa, hambúrguer, alface, tomate e cebola."
    },

    {
      nome: "X-Bacon",
      preco: 27,
      descricao: "Pão, muçarela, hambúrguer, creme de alho, bacon e catupiry."
    },

    {
      nome: "X-Salada",
      preco: 25,
      descricao: "Pão, hambúrguer, molho de alho, alface, tomate e cebola."
    },

    {
      nome: "X-Rings",
      preco: 27,
      descricao: "Pão, hambúrguer, 3 anéis de cebola, muçarela, alface, cebola e molho de alho."
    },

    {
      nome: "Especial Duplo Cheddar",
      preco: 37,
      descricao: "Pão, 2 hambúrgueres, cheddar, bacon, molho de alho e cebola caramelizada."
    },

    {
      nome: "Duplo Cheddar",
      preco: 33,
      descricao: "Pão, cheddar, 2 hambúrgueres, bacon e molho de alho."
    },

    {
      nome: "Americano",
      preco: 28,
      descricao: "Pão, tomate, alface, cebola, pepino, Sassami, cheddar e molho de alho."
    },


    /* =========================
       COMBOS DE LANCHE
    ========================= */

    {
      nome: "Combo Individual de Lanche",
      preco: 40,
      descricao: "1 Chicken + 300 g de batata + refrigerante 220 ml.",
      tipo: "combo-lanche"
    },

    {
      nome: "Combo Duo de Lanche",
      preco: 72,
      descricao: "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml.",
      tipo: "combo-lanche"
    },

    {
      nome: "Combo Trio de Lanche",
      preco: 80,
      descricao: "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml.",
      tipo: "combo-lanche"
    },

    {
      nome: "Combo Família de Lanche",
      preco: 110,
      descricao: "5 Chickens + 1 kg de batata + refrigerante 2 L.",
      tipo: "combo-lanche"
    },

    {
      nome: "Combo Especial Duplo Cheddar - Duo",
      preco: 84,
      descricao: "2 Especial Duplo Cheddar + 600 g de batata + 2 refrigerantes 220 ml.",
      tipo: "combo-lanche"
    },

    {
      nome: "Combo Especial Duplo Cheddar - Individual",
      preco: 47,
      descricao: "1 Especial Duplo Cheddar + 300 g de batata + refrigerante 220 ml.",
      tipo: "combo-lanche"
    },

    {
      nome: "Combo Especial Lanche",
      preco: 80,
      descricao: "2 Chickens + 500 g de batata bacon cheddar + 2 refrigerantes 220 ml.",
      tipo: "combo-lanche"
    },

    {
      nome: "Combo Individual Chicken",
      preco: 40,
      descricao: "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml.",
      tipo: "combo-lanche"
    }

  ],


  /* =========================
     BALDES DE TULIPA
  ========================= */

  baldes: [

    {
      nome: "Balde de 8 unidades",
      preco: 26,
      descricao: "8 unidades de Tulipa. Acompanha ketchup e barbecue.",
      tipo: "balde"
    },

    {
      nome: "Balde P",
      preco: 54,
      descricao: "12 unidades de Tulipa. Acompanha ketchup e barbecue.",
      tipo: "balde"
    },

    {
      nome: "Balde M",
      preco: 64,
      descricao: "15 unidades de Tulipa. Acompanha ketchup e barbecue.",
      tipo: "balde"
    },

    {
      nome: "Balde G",
      preco: 74,
      descricao: "20 unidades de Tulipa. Acompanha ketchup e barbecue.",
      tipo: "balde"
    },

    {
      nome: "Balde de Tulipa Fritas P",
      preco: 70,
      descricao: "12 unidades de Tulipa + 400 g de Batata Frita ou Polenta Frita. Acompanha ketchup e barbecue.",
      tipo: "balde-fritas"
    },

    {
      nome: "Balde de Tulipa Fritas M",
      preco: 80,
      descricao: "15 unidades de Tulipa + 600 g de Batata Frita ou Polenta Frita. Acompanha ketchup e barbecue.",
      tipo: "balde-fritas"
    }

  ],


  /* =========================
     COMBOS
  ========================= */

  combos: [

    {
      nome: "Combo 1",
      preco: 96,
      descricao: "1 kg de frango + 1 kg de batata com bacon e cheddar."
    },

    {
      nome: "Combo 2 - Misto",
      preco: 130,
      descricao: "1 kg de coxinha e Sassami + 1 kg de polenta + 500 g de calabresa acebolada."
    },

    {
      nome: "Combo 3",
      preco: 120,
      descricao: "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 litros."
    },

    {
      nome: "Combo 4",
      preco: 65,
      descricao: "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 litros."
    },

    {
      nome: "Combo 5",
      preco: 85,
      descricao: "1 kg de batata com bacon e cheddar."
    },

    {
      nome: "Combo 6",
      preco: 70,
      descricao: "1 kg de mandioca + 500 g de calabresa."
    }

  ],


  /* =========================
     BEBIDAS
  ========================= */

  bebidas: [

    {
      nome: "Coca-Cola 350 ml",
      preco: 6,
      descricao: "Lata 350 ml."
    },

    {
      nome: "Coca-Cola Zero 350 ml",
      preco: 6,
      descricao: "Lata 350 ml."
    },

    {
      nome: "Fanta Guaraná 350 ml",
      preco: 6,
      descricao: "Lata 350 ml."
    },

    {
      nome: "Sprite 350 ml",
      preco: 6,
      descricao: "Lata 350 ml."
    },

    {
      nome: "Fanta Laranja 350 ml",
      preco: 6,
      descricao: "Lata 350 ml."
    },

    {
      nome: "Coca-Cola 600 ml",
      preco: 9,
      descricao: "Garrafa 600 ml."
    },

    {
      nome: "Coca-Cola Zero 600 ml",
      preco: 9,
      descricao: "Garrafa 600 ml."
    },

    {
      nome: "Fanta Guaraná 600 ml",
      preco: 9,
      descricao: "Garrafa 600 ml."
    },

    {
      nome: "Sprite 600 ml",
      preco: 9,
      descricao: "Garrafa 600 ml."
    },

    {
      nome: "Fanta Laranja 600 ml",
      preco: 9,
      descricao: "Garrafa 600 ml."
    },

    {
      nome: "Coca-Cola 2 L",
      preco: 15,
      descricao: "Garrafa 2 litros."
    },

    {
      nome: "Coca-Cola Zero 2 L",
      preco: 15,
      descricao: "Garrafa 2 litros."
    },

    {
      nome: "Guaraná 2 L",
      preco: 14,
      descricao: "Garrafa 2 litros."
    },

    {
      nome: "Fanta 2 L",
      preco: 14,
      descricao: "Garrafa 2 litros."
    },

    {
      nome: "Sprite 2 L",
      preco: 14,
      descricao: "Garrafa 2 litros."
    },

    {
      nome: "Água com gás",
      preco: 3.50,
      descricao: "Água mineral com gás."
    }

  ],


  /* =========================
     PORÇÕES
  ========================= */

  porcoes: [

    {
      nome: "Salada Americana",
      preco: 28,
      descricao: "Alface americano, tomate cereja, frango crocante e molho especial."
    },

    {
      nome: "Batata Apimentada",
      preco: 38,
      descricao: "Batata frita com molho de pimenta."
    },

    {
      nome: "Batata 300 g",
      preco: 19,
      descricao: "Porção de batata frita."
    },

    {
      nome: "Batata 500 g",
      preco: 30,
      descricao: "Porção de batata frita."
    },

    {
      nome: "Batata Bacon + Cheddar 500 g",
      preco: 36,
      descricao: "Batata frita com bacon e cheddar."
    },

    {
      nome: "Polenta 300 g",
      preco: 12,
      descricao: "Porção de polenta frita."
    },

    {
      nome: "Polenta 500 g",
      preco: 17,
      descricao: "Porção de polenta frita."
    },

    {
      nome: "Anel de Cebola 300 g",
      preco: 20,
      descricao: "Porção de anéis de cebola."
    },

    {
      nome: "Anel de Cebola 500 g",
      preco: 35,
      descricao: "Porção de anéis de cebola."
    }

  ],


  /* =========================
     MOLHOS
  ========================= */

  molhos: [

    {
      nome: "Cheddar",
      preco: 6,
      descricao: "Molho cheddar."
    },

    {
      nome: "Pimenta",
      preco: 6,
      descricao: "Molho de pimenta."
    },

    {
      nome: "Mostarda e Mel",
      preco: 6,
      descricao: "Molho de mostarda e mel."
    },

    {
      nome: "Abacaxi com Pimenta",
      preco: 6,
      descricao: "Molho agridoce de abacaxi com pimenta."
    },

    {
      nome: "Creme de Alho",
      preco: 6,
      descricao: "Creme de alho."
    },

    {
      nome: "Barbecue",
      preco: 5,
      descricao: "Molho barbecue."
    },

    {
      nome: "Ketchup",
      preco: 5,
      descricao: "Ketchup."
    }

  ]

};


/* =====================================================
   ADICIONAIS DOS LANCHES
===================================================== */

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


const nomesDosLanches = [
  "X-Burguer",
  "Pop Chicken",
  "Chicken",
  "X-Calabresa",
  "X-Bacon",
  "X-Salada",
  "X-Rings",
  "Especial Duplo Cheddar",
  "Duplo Cheddar",
  "Americano"
];


/* =====================================================
   VARIÁVEIS
===================================================== */

let carrinho = [];
let categoriaAtual = null;
let produtoSelecionado = null;
let acompanhamentoSelecionado = null;
let tipoEntrega = null;
let formaPagamento = null;
let precisaTroco = null;


/* =====================================================
   FUNÇÕES BÁSICAS
===================================================== */

function formatarPreco(valor) {

  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

}


function fecharModal(id) {

  const elemento = document.getElementById(id);

  if (elemento) {
    elemento.classList.remove("aberto");
  }

}


/* =====================================================
   NAVEGAÇÃO
===================================================== */

function abrirCardapio() {

  document.getElementById("inicio").classList.remove("ativa");
  document.getElementById("categorias").classList.add("ativa");

}


function abrirCategoria(categoria) {

  categoriaAtual = categoria;

  document.getElementById("categorias").classList.remove("ativa");
  document.getElementById("inicio").classList.remove("ativa");
  document.getElementById("produtos").classList.add("ativa");

  const nomes = {
    lanches: "🍔 LANCHES",
    baldes: "🍗 BALDES DE TULIPA",
    combos: "🔥 COMBOS",
    bebidas: "🥤 BEBIDAS",
    porcoes: "🍟 PORÇÕES",
    molhos: "🥣 MOLHOS"
  };

  document.getElementById("tituloCategoria").textContent =
    nomes[categoria] || "Produtos";

  mostrarProdutos(categoria);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function voltarCategorias() {

  document.getElementById("produtos").classList.remove("ativa");
  document.getElementById("categorias").classList.add("ativa");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   MOSTRAR PRODUTOS
===================================================== */

function mostrarProdutos(categoria) {

  const lista = document.getElementById("listaProdutos");

  lista.innerHTML = "";

  const produtos = cardapio[categoria] || [];

  produtos.forEach((produto, index) => {

    const div = document.createElement("div");

    div.className = "produto";

    div.innerHTML = `

      <h2>${produto.nome}</h2>

      <p>${produto.descricao}</p>

      <div class="produto-baixo">

        <span class="preco">
          ${formatarPreco(produto.preco)}
        </span>

        <button
          class="btn-adicionar"
          onclick="adicionarProduto(${index})"
        >
          + ADICIONAR
        </button>

      </div>

    `;

    lista.appendChild(div);

  });

}


/* =====================================================
   ADICIONAR PRODUTO
===================================================== */

function adicionarProduto(index) {

  const produto = cardapio[categoriaAtual][index];

  produtoSelecionado = produto;


  /* LANCHES NORMAIS */

  if (
    categoriaAtual === "lanches" &&
    nomesDosLanches.includes(produto.nome)
  ) {

    abrirModalLanche();

    return;
  }


  /* BALDES FRITAS */

  if (
    categoriaAtual === "baldes" &&
    produto.tipo === "balde-fritas"
  ) {

    abrirModalBalde();

    return;
  }


  /* BALDES NORMAIS */

  if (
    categoriaAtual === "baldes" &&
    produto.tipo === "balde"
  ) {

    adicionarAoCarrinho(
      produto.nome,
      produto.preco,
      "Tulipa"
    );

    return;
  }


  /* OUTROS PRODUTOS */

  adicionarAoCarrinho(
    produto.nome,
    produto.preco,
    ""
  );

}


/* =====================================================
   MODAL LANCHES
===================================================== */

function abrirModalLanche() {

  document.getElementById("nomeLancheModal").textContent =
    produtoSelecionado.nome;

  const lista = document.getElementById("listaAdicionais");

  lista.innerHTML = "";

  adicionais.forEach((item, index) => {

    const nome = item[0];
    const preco = item[1];

    lista.innerHTML += `

      <div class="adicional">

        <label>
          ${nome}
          <span>+ ${formatarPreco(preco)}</span>
        </label>

        <input
          type="checkbox"
          value="${index}"
          class="checkbox-adicional"
        >

      </div>

    `;

  });

  document
    .getElementById("modalLanche")
    .classList.add("aberto");

}


function confirmarLanche() {

  let precoFinal = produtoSelecionado.preco;

  const selecionados = [];

  document
    .querySelectorAll(".checkbox-adicional:checked")
    .forEach(checkbox => {

      const index = Number(checkbox.value);

      const nome = adicionais[index][0];
      const preco = adicionais[index][1];

      precoFinal += preco;

      selecionados.push(nome);

    });


  adicionarAoCarrinho(
    produtoSelecionado.nome,
    precoFinal,
    selecionados.join(", ")
  );


  document
    .querySelectorAll(".checkbox-adicional")
    .forEach(c => {
      c.checked = false;
    });

  fecharModal("modalLanche");

}


/* =====================================================
   BALDES DE TULIPA
===================================================== */

function abrirModalBalde() {

  document.getElementById("nomeBaldeModal").textContent =
    produtoSelecionado.nome;

  acompanhamentoSelecionado = null;

  document
    .getElementById("modalBalde")
    .classList.add("aberto");

}


function selecionarAcompanhamento(acompanhamento) {

  acompanhamentoSelecionado = acompanhamento;

  adicionarAoCarrinho(
    produtoSelecionado.nome,
    produtoSelecionado.preco,
    "Tulipa + " + acompanhamento
  );

  fecharModal("modalBalde");

}


/* =====================================================
   CARRINHO
===================================================== */

function adicionarAoCarrinho(nome, preco, escolha) {

  carrinho.push({
    nome: nome,
    preco: Number(preco),
    escolha: escolha
  });

  atualizarCarrinho();

}


function removerItem(index) {

  carrinho.splice(index, 1);

  atualizarCarrinho();

}


function atualizarCarrinho() {

  const quantidade = carrinho.length;

  document.getElementById("quantidadeCarrinho").textContent =
    quantidade;

  const container = document.getElementById("itensCarrinho");

  container.innerHTML = "";


  if (carrinho.length === 0) {

    container.innerHTML = `
      <p style="color:#ccc; padding:20px 0;">
        Seu carrinho está vazio.
      </p>
    `;

    document.getElementById("totalCarrinho").textContent =
      formatarPreco(0);

    return;
  }


  carrinho.forEach((item, index) => {

    const div = document.createElement("div");

    div.className = "item-carrinho";

    div.innerHTML = `

      <h3>${item.nome}</h3>

      ${
        item.escolha
        ? `<p>${item.escolha}</p>`
        : ""
      }

      <div class="item-carrinho-baixo">

        <strong>
          ${formatarPreco(item.preco)}
        </strong>

        <button
          class="btn-remover"
          onclick="removerItem(${index})"
        >
          REMOVER
        </button>

      </div>

    `;

    container.appendChild(div);

  });


  document.getElementById("totalCarrinho").textContent =
    formatarPreco(calcularSubtotal());

}


function calcularSubtotal() {

  return carrinho.reduce(
    (total, item) => total + Number(item.preco),
    0
  );

}


function calcularTotal() {

  let total = calcularSubtotal();

  if (tipoEntrega === "Entrega") {
    total += TAXA_ENTREGA;
  }

  return total;

}


function abrirCarrinho() {

  atualizarCarrinho();

  document
    .getElementById("modalCarrinho")
    .classList.add("aberto");

}


/* =====================================================
   FINALIZAÇÃO
===================================================== */

function abrirFinalizacao() {

  if (carrinho.length === 0) {

    alert("Seu carrinho está vazio.");

    return;
  }

  fecharModal("modalCarrinho");

  atualizarTotalFinal();

  document
    .getElementById("modalFinalizacao")
    .classList.add("aberto");

}


function selecionarEntrega(tipo) {

  tipoEntrega = tipo;

  document
    .getElementById("btnRetirada")
    .style.borderColor =
    tipo === "Retirada" ? "#00b94f" : "white";

  document
    .getElementById("btnEntrega")
    .style.borderColor =
    tipo === "Entrega" ? "#00b94f" : "white";


  if (tipo === "Entrega") {

    document
      .getElementById("dadosEntrega")
      .classList.remove("escondido");

  } else {

    document
      .getElementById("dadosEntrega")
      .classList.add("escondido");

  }


  atualizarTotalFinal();

}


/* =====================================================
   PAGAMENTO
===================================================== */

function selecionarPagamento(pagamento, botao) {

  formaPagamento = pagamento;


  document
    .querySelectorAll(".pagamento")
    .forEach(btn => {

      btn.style.borderColor = "white";

    });


  if (botao) {
    botao.style.borderColor = "#00b94f";
  }


  document
    .getElementById("dadosDinheiro")
    .classList.add("escondido");

  document
    .getElementById("pixInfo")
    .classList.add("escondido");


  if (pagamento === "Dinheiro") {

    document
      .getElementById("dadosDinheiro")
      .classList.remove("escondido");

  }


  if (pagamento === "PIX") {

    document
      .getElementById("pixInfo")
      .classList.remove("escondido");

  }

}


function selecionarTroco(valor) {

  precisaTroco = valor;


  if (valor === "Sim") {

    document
      .getElementById("campoTroco")
      .classList.remove("escondido");

  } else {

    document
      .getElementById("campoTroco")
      .classList.add("escondido");

  }

}


function atualizarTotalFinal() {

  document.getElementById("totalFinal").textContent =
    formatarPreco(calcularTotal());

}


/* =====================================================
   COPIAR PIX
===================================================== */

async function copiarPix() {

  try {

    await navigator.clipboard.writeText(PIX);

    alert("Chave PIX copiada!");

  } catch (erro) {

    alert("Não foi possível copiar automaticamente.");

  }

}


/* =====================================================
   SALVAR PEDIDO NO SUPABASE
===================================================== */

async function salvarPedidoNoSupabase(dadosPedido) {

  try {

    const { data, error } = await supabaseClient
      .from("Pedidos")
      .insert([dadosPedido])
      .select();

    if (error) {

      console.error("ERRO SUPABASE:", error);

      alert(
        "Não foi possível salvar o pedido no banco.\n\n" +
        "Erro: " + error.message
      );

      return false;
    }

    console.log("PEDIDO SALVO COM SUCESSO:", data);

    return true;

  } catch (erro) {

    console.error("ERRO:", erro);

    alert(
      "Erro ao tentar salvar o pedido:\n\n" +
      erro.message
    );

    return false;

  }

}


/* =====================================================
   ENVIAR PEDIDO
===================================================== */

async function enviarPedido() {

  const nome = document
    .getElementById("nomeCliente")
    .value
    .trim();


  if (!nome) {

    alert("Digite seu nome.");

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


  if (
    tipoEntrega === "Entrega" &&
    (
      !document.getElementById("rua").value.trim() ||
      !document.getElementById("bairro").value.trim()
    )
  ) {

    alert("Preencha a rua e o bairro.");

    return;
  }


  if (
    formaPagamento === "Dinheiro" &&
    !precisaTroco
  ) {

    alert("Informe se precisa de troco.");

    return;
  }


  if (
    formaPagamento === "Dinheiro" &&
    precisaTroco === "Sim" &&
    !document.getElementById("trocoPara").value
  ) {

    alert("Informe o valor para o qual precisa de troco.");

    return;
  }


  const rua =
    document.getElementById("rua").value.trim();

  const bairro =
    document.getElementById("bairro").value.trim();

  const observacao =
    document.getElementById("observacao").value.trim();

  const trocoPara =
    document.getElementById("trocoPara").value;

  const total = calcularTotal();


  /* =========================
     MONTAR ITENS
  ========================= */

  const itensTexto = carrinho.map(item => {

    let texto = item.nome;

    if (item.escolha) {
      texto += ` — ${item.escolha}`;
    }

    return texto;

  }).join("\n");


  /* =========================
     PEDIDO PARA SUPABASE
  ========================= */

  const pedidoBanco = {

    Nome_clientes: nome,

    Tipo_entrega: tipoEntrega,

    Rua: rua,

    Bairro: bairro,

    Observacao: observacao,

    Pagamento: formaPagamento,

    Troco: trocoPara || "Não",

    Itens: itensTexto,

    Total: total,

    Data: new Date().toISOString()

  };


  /* =========================
     SALVAR NO SUPABASE
  ========================= */

  const pedidoSalvo =
    await salvarPedidoNoSupabase(pedidoBanco);


  /*
     IMPORTANTE:
     Se o Supabase rejeitar o pedido,
     o WhatsApp NÃO será aberto.
  */

  if (!pedidoSalvo) {

    return;

  }


  /* =========================
     WHATSAPP
  ========================= */

  let mensagem = "";

  mensagem += `🍗 *NOVO PEDIDO - BENVENUTO CHICKEN*%0A%0A`;

  mensagem += `👤 *Nome:* ${nome}%0A`;

  mensagem += `📦 *${tipoEntrega}*%0A%0A`;

  mensagem += `🛒 *PEDIDO:*%0A`;


  carrinho.forEach(item => {

    mensagem += `• ${item.nome}`;

    if (item.escolha) {

      mensagem += ` — ${item.escolha}`;

    }

    mensagem += ` — ${formatarPreco(item.preco)}%0A`;

  });


  if (tipoEntrega === "Entrega") {

    mensagem += `%0A📍 *Endereço:*%0A`;

    mensagem += `${rua}%0A`;

    mensagem += `${bairro}%0A`;

  }


  if (observacao) {

    mensagem += `%0A📝 *Observação:* ${observacao}%0A`;

  }


  mensagem += `%0A💳 *Pagamento:* ${formaPagamento}%0A`;


  if (formaPagamento === "Dinheiro") {

    if (precisaTroco === "Sim") {

      mensagem += `💵 *Troco para:* R$ ${trocoPara}%0A`;

    } else {

      mensagem += `💵 *Troco:* Não precisa%0A`;

    }

  }


  if (formaPagamento === "PIX") {

    mensagem += `🟢 *PIX:* Chave informada no site%0A`;

  }


  if (tipoEntrega === "Entrega") {

    mensagem += `%0A🛵 *Taxa de entrega:* R$ 4,00%0A`;

  }


  mensagem += `%0A💰 *TOTAL: ${formatarPreco(total)}*`;


  const url =
    `https://wa.me/${WHATSAPP}?text=${mensagem}`;


  window.location.href = url;

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  atualizarCarrinho();

});
