const SUPABASE_URL =
  "https://wtphyvfqmwferggidzgt.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_wdlAJqX0eGoc3XK-Hvg8Aw_f54EszKl";

const WHATSAPP =
  "5544997323438";

const PIX =
  "64213198000174";

const TAXA_ENTREGA = 4;


const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );


let carrinho = [];

let tipoEntrega = "";

let formaPagamento = "";

let trocoPara = "";


/* =========================
   CARDÁPIO
========================= */

const cardapio = {

  lanches: [

    [
      "X-Burguer",
      "Pão, hambúrguer, queijo e molho de alho.",
      19
    ],

    [
      "Pop Chicken",
      "Pão, Sassami, catupiry e molho de alho.",
      22
    ],

    [
      "Chicken",
      "Pão, Sassami, alface, tomate, cebola e molho de alho.",
      26
    ],

    [
      "X-Calabresa",
      "Pão, molho de alho, queijo, calabresa, hambúrguer, alface, tomate e cebola.",
      27
    ],

    [
      "X-Bacon",
      "Pão, muçarela, hambúrguer, creme de alho, bacon e catupiry.",
      27
    ],

    [
      "X-Salada",
      "Pão, hambúrguer, molho de alho, alface, tomate e cebola.",
      25
    ],

    [
      "X-Rings",
      "Pão, hambúrguer, 3 anéis de cebola, muçarela, alface, cebola e molho de alho.",
      27
    ],

    [
      "Especial Duplo Cheddar",
      "Pão, 2 hambúrgueres, cheddar, bacon, molho de alho e cebola caramelizada.",
      37
    ],

    [
      "Duplo Cheddar",
      "Pão, cheddar, 2 hambúrgueres, bacon e molho de alho.",
      33
    ],

    [
      "Americano",
      "Pão, tomate, alface, cebola, pepino, Sassami, cheddar e molho de alho.",
      28
    ],


    [
      "Combo Individual de Lanche",
      "1 Chicken + 300 g de batata + refrigerante 220 ml.",
      40
    ],

    [
      "Combo Duo de Lanche",
      "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml.",
      72
    ],

    [
      "Combo Trio de Lanche",
      "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml.",
      80
    ],

    [
      "Combo Família de Lanche",
      "5 Chickens + 1 kg de batata + refrigerante 2 L.",
      110
    ],

    [
      "Combo Especial Duplo Cheddar — Duo",
      "2 Especial Duplo Cheddar + 600 g de batata + 2 refrigerantes 220 ml.",
      84
    ],

    [
      "Combo Especial Duplo Cheddar — Individual",
      "1 Especial Duplo Cheddar + 300 g de batata + refrigerante 220 ml.",
      47
    ],

    [
      "Combo Especial Lanche",
      "2 Chickens + 500 g de batata bacon cheddar + 2 refrigerantes 220 ml.",
      80
    ],

    [
      "Combo Individual Chicken",
      "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml.",
      40
    ]

  ],


  /* =========================
     BALDES DE TULIPA
  ========================= */

  tulipa: [

    [
      "Balde de Tulipa — 8 unidades",
      "Balde com 8 unidades de Tulipa.",
      26
    ],

    [
      "Balde de Tulipa — P",
      "Balde de Tulipa tamanho P.",
      54
    ],

    [
      "Balde de Tulipa — M",
      "Balde de Tulipa tamanho M.",
      64
    ],

    [
      "Balde de Tulipa — G",
      "Balde de Tulipa tamanho G.",
      74
    ],

    [
      "Balde de Tulipa Fritas — P",
      "Tulipas acompanhadas de Batata Frita ou Polenta Frita.",
      70,
      "fritas"
    ],

    [
      "Balde de Tulipa Fritas — M",
      "Tulipas acompanhadas de Batata Frita ou Polenta Frita.",
      80,
      "fritas"
    ]

  ],


  /* =========================
     COMBOS
  ========================= */

  combos: [

    [
      "Combo 1",
      "1 kg de frango + 1 kg de batata com bacon e cheddar.",
      96
    ],

    [
      "Combo 2 — Misto",
      "1 kg de coxinha e Sassami + 1 kg de polenta + 500 g de calabresa acebolada.",
      130
    ],

    [
      "Combo 3",
      "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 litros.",
      120
    ],

    [
      "Combo 4",
      "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 litros.",
      65
    ],

    [
      "Combo 5",
      "1 kg de batata com bacon e cheddar.",
      85
    ],

    [
      "Combo 6",
      "1 kg de mandioca + 500 g de calabresa.",
      70
    ]

  ],


  /* =========================
     BEBIDAS
  ========================= */

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


  /* =========================
     PORÇÕES
  ========================= */

  porcoes: [

    [
      "Salada Americana",
      "Alface americano, tomate cereja, frango crocante e molho especial.",
      28
    ],

    [
      "Batata Apimentada",
      "Batata acompanhada de molho de pimenta.",
      38
    ],

    ["Batata 300 g", "", 19],

    ["Batata 500 g", "", 30],

    ["Batata Bacon + Cheddar 500 g", "", 36],

    ["Polenta 300 g", "", 12],

    ["Polenta 500 g", "", 17],

    ["Anel de Cebola 300 g", "", 20],

    ["Anel de Cebola 500 g", "", 35]

  ],


  /* =========================
     MOLHOS
  ========================= */

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


/* =========================
   ADICIONAIS
========================= */

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


/* =========================
   FUNÇÕES GERAIS
========================= */

function dinheiro(valor) {

  return Number(valor).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );

}


function $(id) {

  return document.getElementById(id);

}


/* =========================
   NAVEGAÇÃO
========================= */

function abrirCardapio() {

  $("inicio").classList.add("hidden");

  $("categorias").classList.remove("hidden");

  window.scrollTo(0, 0);

}


function abrirCategoria(categoria) {

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


/* =========================
   PRODUTOS
========================= */

function renderProdutos(categoria) {

  const lista = $("lista-produtos");

  lista.innerHTML = "";

  cardapio[categoria].forEach(
    (produto, indice) => {

      const elemento =
        document.createElement("article");

      elemento.className =
        "product-card";


      elemento.innerHTML = `

        <h3>${produto[0]}</h3>

        ${
          produto[1]
            ? `<p>${produto[1]}</p>`
            : ""
        }

        <div class="product-bottom">

          <span class="price">
            ${dinheiro(produto[2])}
          </span>

          <button
            class="add-button"
            type="button">

            + ADICIONAR

          </button>

        </div>

      `;


      elemento
        .querySelector("button")
        .onclick = () =>
          adicionarProduto(
            categoria,
            indice
          );


      lista.appendChild(elemento);

    }
  );

}


/* =========================
   ADICIONAR PRODUTO
========================= */

function adicionarProduto(
  categoria,
  indice
) {

  const produto =
    cardapio[categoria][indice];


  if (produto[3] === "fritas") {

    abrirFritas(produto);

    return;

  }


  if (
    categoria === "lanches" &&
    lanchesIndividuais.includes(
      produto[0]
    )
  ) {

    abrirAdicionais(produto);

    return;

  }


  adicionarCarrinho(
    produto[0],
    produto[2],
    []
  );

}


/* =========================
   ADICIONAIS
========================= */

function abrirAdicionais(produto) {

  let html = `

    <div class="modal-content">

      <h2>${produto[0]}</h2>

      <p>
        Escolha os adicionais, se desejar:
      </p>

      <div class="option-list">

  `;


  adicionais.forEach(
    (adicional, indice) => {

      html += `

        <label class="option-item">

          <input
            type="checkbox"
            id="extra-${indice}">

          ${adicional[0]}
          — ${dinheiro(adicional[1])}

        </label>

      `;

    }
  );


  html += `

      </div>

      <div class="modal-actions">

        <button
          class="cancel"
          type="button"
          onclick="fecharModal()">

          CANCELAR

        </button>

        <button
          class="confirm"
          type="button"
          onclick="confirmarAdicionais(
            '${esc(produto[0])}',
            ${produto[2]}
          )">

          ADICIONAR

        </button>

      </div>

    </div>

  `;


  abrirModal(html);

}


/* =========================
   CONFIRMAR ADICIONAIS
========================= */

function confirmarAdicionais(
  nome,
  precoBase
) {

  let extras = [];

  let total = precoBase;


  adicionais.forEach(
    (adicional, indice) => {

      const checkbox =
        $("extra-" + indice);


      if (
        checkbox &&
        checkbox.checked
      ) {

        extras.push(
          adicional[0]
        );

        total += adicional[1];

      }

    }
  );


  adicionarCarrinho(
    nome,
    total,
    extras
  );


  fecharModal();

}


/* =========================
   BALDE FRITAS
========================= */

function abrirFritas(produto) {

  abrirModal(`

    <div class="modal-content">

      <h2>${produto[0]}</h2>

      <p>
        Escolha o acompanhamento:
      </p>

      <div class="option-list">

        <button
          class="confirm"
          type="button"
          style="
            padding:15px;
            border:0;
            border-radius:11px;
            color:white;
          "
          onclick="
            confirmarFritas(
              '${esc(produto[0])}',
              ${produto[2]},
              'Batata Frita'
            )
          ">

          🍟 BATATA FRITA

        </button>


        <button
          class="confirm"
          type="button"
          style="
            padding:15px;
            border:0;
            border-radius:11px;
            color:white;
          "
          onclick="
            confirmarFritas(
              '${esc(produto[0])}',
              ${produto[2]},
              'Polenta Frita'
            )
          ">

          🥔 POLENTA FRITA

        </button>

      </div>


      <div class="modal-actions">

        <button
          class="cancel"
          type="button"
          onclick="fecharModal()">

          CANCELAR

        </button>

      </div>

    </div>

  `);

}


function confirmarFritas(
  nome,
  preco,
  acompanhamento
) {

  adicionarCarrinho(
    nome,
    preco,
    [acompanhamento]
  );

  fecharModal();

}


/* =========================
   CARRINHO
========================= */

function adicionarCarrinho(
  nome,
  preco,
  extras
) {

  carrinho.push({

    nome: nome,

    preco: Number(preco),

    extras: extras

  });


  atualizarTudo();

  toast(
    nome +
    " foi adicionado ao carrinho!"
  );

}


function removerItem(indice) {

  carrinho.splice(
    indice,
    1
  );

  atualizarTudo();

}


function abrirCarrinho() {

  $("categorias")
    .classList.add("hidden");

  $("produtos")
    .classList.add("hidden");

  $("carrinho")
    .classList.remove("hidden");

  renderCarrinho();

  window.scrollTo(0, 0);

}


function fecharCarrinho() {

  $("carrinho")
    .classList.add("hidden");

  $("categorias")
    .classList.remove("hidden");

  window.scrollTo(0, 0);

}


/* =========================
   RENDER CARRINHO
========================= */

function renderCarrinho() {

  const lista =
    $("lista-carrinho");

  lista.innerHTML = "";


  if (!carrinho.length) {

    lista.innerHTML =
      '<div class="empty-cart">' +
      'Seu carrinho está vazio. 🍗' +
      '</div>';

    atualizarResumo();

    return;

  }


  carrinho.forEach(
    (item, indice) => {

      const elemento =
        document.createElement("div");

      elemento.className =
        "cart-item";


      elemento.innerHTML = `

        <div>

          <h3>
            ${item.nome}
          </h3>

          ${
            item.extras.length
              ? `<small>
                   + ${item.extras.join(", ")}
                 </small>`
              : ""
          }

          <strong>
            ${dinheiro(item.preco)}
          </strong>

        </div>


        <button
          class="remove-button"
          type="button">

          🗑️

        </button>

      `;


      elemento
        .querySelector("button")
        .onclick = () =>
          removerItem(indice);


      lista.appendChild(elemento);

    }
  );


  atualizarResumo();

}


function subtotal() {

  return carrinho.reduce(
    (total, item) =>
      total + item.preco,
    0
  );

}


function total() {

  return (
    subtotal() +
    (
      tipoEntrega === "entrega"
        ? TAXA_ENTREGA
        : 0
    )
  );

}


function atualizarResumo() {

  $("subtotal").textContent =
    dinheiro(subtotal());


  $("taxa-entrega").textContent =
    dinheiro(
      tipoEntrega === "entrega"
        ? TAXA_ENTREGA
        : 0
    );


  $("total-final").textContent =
    dinheiro(total());


  $("cart-count-home").textContent =
    carrinho.length;


  $("cart-count-products").textContent =
    carrinho.length;

}


function atualizarTudo() {

  renderCarrinho();

  atualizarResumo();

}


/* =========================
   ENTREGA / RETIRADA
========================= */

function selecionarEntrega(
  tipo,
  botao
) {

  tipoEntrega = tipo;


  document
    .querySelectorAll(
      ".opcao-entrega"
    )
    .forEach(
      b =>
        b.classList.remove(
          "selecionado"
        )
    );


  botao.classList.add(
    "selecionado"
  );


  $("endereco").style.display =
    tipo === "entrega"
      ? "block"
      : "none";


  atualizarResumo();

}


/* =========================
   PAGAMENTO
========================= */

function selecionarPagamento(
  pagamento,
  botao
) {

  formaPagamento = pagamento;


  document
    .querySelectorAll(
      ".opcao-pagamento"
    )
    .forEach(
      b =>
        b.classList.remove(
          "selecionado"
        )
    );


  botao.classList.add(
    "selecionado"
  );


  $("campo-troco").style.display =
    pagamento === "Dinheiro"
      ? "block"
      : "none";


  $("dados-pix").style.display =
    pagamento === "PIX"
      ? "block"
      : "none";


  if (pagamento !== "Dinheiro") {

    trocoPara = "";

    $("troco-valor")
      .style.display = "none";

  }

}


/* =========================
   TROCO
========================= */

function mostrarCampoTroco() {

  $("troco-valor")
    .style.display = "block";

  trocoPara = "";

}


function definirTroco(valor) {

  trocoPara = valor;

}


/* =========================
   SUPABASE
========================= */

async function salvarPedidoNoSupabase(
  dados
) {

  try {

    const resposta =
      await supabaseClient
        .from("Pedidos")
        .insert([dados]);


    if (resposta.error) {

      console.error(
        "Erro Supabase:",
        resposta.error
      );


      alert(
        "Não foi possível salvar o pedido no sistema.\n\n" +
        "Erro: " +
        resposta.error.message
      );


      return false;

    }


    return true;

  } catch (erro) {

    console.error(
      "Erro:",
      erro
    );


    alert(
      "Erro ao conectar com o sistema de pedidos."
    );


    return false;

  }

}


/* =========================
   ENVIAR PEDIDO
========================= */

async function enviarPedido() {

  if (!carrinho.length) {

    alert(
      "Seu carrinho está vazio!"
    );

    return;

  }


  if (!tipoEntrega) {

    alert(
      "Escolha Retirada ou Entrega."
    );

    return;

  }


  if (!formaPagamento) {

    alert(
      "Escolha a forma de pagamento."
    );

    return;

  }


  const nome =
    $("nome")
      .value
      .trim();


  const rua =
    $("rua")
      .value
      .trim();


  const bairro =
    $("bairro")
      .value
      .trim();


  const observacao =
    $("observacao")
      .value
      .trim();


  if (!nome) {

    alert(
      "Digite seu nome."
    );

    $("nome").focus();

    return;

  }


  if (
    tipoEntrega === "entrega" &&
    (!rua || !bairro)
  ) {

    alert(
      "Informe a rua e o bairro."
    );

    return;

  }


  const itens =
    carrinho
      .map(
        item =>
          item.nome +
          (
            item.extras.length
              ? " | " +
                item.extras.join(", ")
              : ""
          )
      )
      .join(" | ");


  const totalPedido =
    total();


  const dados = {

    Nome_clientes: nome,

    Tipo_entrega:
      tipoEntrega === "entrega"
        ? "Entrega"
        : "Retirada",

    Rua:
      tipoEntrega === "entrega"
        ? rua
        : "Não se aplica",

    Bairro:
      tipoEntrega === "entrega"
        ? bairro
        : "Não se aplica",

    Observacao:
      observacao || "Nenhuma",

    Pagamento:
      formaPagamento,

    Troco:
      formaPagamento === "Dinheiro"
        ? (
            trocoPara ||
            "Não precisa"
          )
        : "Não se aplica",

    Itens:
      itens,

    Total:
      totalPedido,

    Data:
      new Date().toISOString()

  };


  /*
    PRIMEIRO SALVA NO SUPABASE.
    SÓ DEPOIS ABRE O WHATSAPP.
  */

  const salvo =
    await salvarPedidoNoSupabase(
      dados
    );


  if (!salvo) {

    return;

  }


  /* =========================
     MENSAGEM WHATSAPP
  ========================= */

  let mensagem =
    "🍗 *NOVO PEDIDO — BENVENUTO CHICKEN*";

  mensagem +=
    "\n\n👤 *Cliente:* " +
    nome;


  mensagem +=
    "\n📦 *Tipo:* " +
    (
      tipoEntrega === "entrega"
        ? "Entrega"
        : "Retirada"
    );


  if (
    tipoEntrega === "entrega"
  ) {

    mensagem +=
      "\n📍 *Endereço:* " +
      rua +
      " — " +
      bairro;

  }


  mensagem +=
    "\n\n🛒 *PEDIDO:*";


  carrinho.forEach(
    item => {

      mensagem +=
        "\n• " +
        item.nome +
        " — " +
        dinheiro(item.preco);


      if (
        item.extras.length
      ) {

        mensagem +=
          "\n  + " +
          item.extras.join(
            ", "
          );

      }

    }
  );


  mensagem +=
    "\n\n💰 *Subtotal:* " +
    dinheiro(
      subtotal()
    );


  if (
    tipoEntrega === "entrega"
  ) {

    mensagem +=
      "\n🚚 *Taxa:* " +
      dinheiro(
        TAXA_ENTREGA
      );

  }


  mensagem +=
    "\n💵 *TOTAL:* " +
    dinheiro(
      totalPedido
    );


  mensagem +=
    "\n💳 *Pagamento:* " +
    formaPagamento;


  if (
    formaPagamento === "Dinheiro"
  ) {

    mensagem +=
      "\n💵 *Troco:* " +
      (
        trocoPara ||
        "Não precisa"
      );

  }


  if (
    formaPagamento === "PIX"
  ) {

    mensagem +=
      "\n🔑 *PIX:* " +
      PIX;

  }


  if (observacao) {

    mensagem +=
      "\n\n📝 *Observação:* " +
      observacao;

  }


  mensagem +=
    "\n\nObrigado pelo pedido! ❤️";


  /*
    ABRE O WHATSAPP
  */

  const url =
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(
      mensagem
    );


  window.location.href =
    url;

}


/* =========================
   MODAL
========================= */

function abrirModal(html) {

  $("modal").innerHTML =
    html;

  $("modal")
    .classList
    .remove("hidden");

}


function fecharModal() {

  $("modal")
    .classList
    .add("hidden");

  $("modal").innerHTML = "";

}


/* =========================
   AVISO
========================= */

function toast(texto) {

  const elemento =
    $("toast");


  elemento.textContent =
    texto;


  elemento.style.display =
    "block";


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(
      () =>
        elemento.style.display =
          "none",
      2200
    );

}


/* =========================
   SEGURANÇA PARA MODAL
========================= */

function esc(texto) {

  return texto
    .replaceAll("\\", "\\\\")
    .replaceAll("'", "\\'");

}


/* =========================
   INÍCIO
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    atualizarResumo();

  }
);
