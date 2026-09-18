/* =========================================================
   BENVENUTO CHICKEN
   SCRIPT COMPLETO
========================================================= */


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const WHATSAPP = "5544997323438";
const CHAVE_PIX = "64213198000174";
const TAXA_ENTREGA = 4;


/* =========================================================
   CARDÁPIO
========================================================= */

const cardapio = {

  /* =========================
     LANCHES
  ========================== */

  lanches: {
    titulo: "🍔 LANCHES",

    produtos: [

      ["X-Burguer", 19,
        "Pão, hambúrguer, queijo e molho de alho."],

      ["Pop Chicken", 22,
        "Pão, Sassami, catupiry e molho de alho."],

      ["Chicken", 26,
        "Pão, Sassami, alface, tomate, cebola e molho de alho."],

      ["X-Calabresa", 27,
        "Pão, molho de alho, queijo, calabresa, hambúrguer, alface, tomate e cebola."],

      ["X-Bacon", 27,
        "Pão, muçarela, hambúrguer, creme de alho, bacon e catupiry."],

      ["X-Salada", 25,
        "Pão, hambúrguer, molho de alho, alface, tomate e cebola."],

      ["X-Rings", 27,
        "Pão, hambúrguer, 3 anéis de cebola, muçarela, alface, cebola e molho de alho."],

      ["Especial Duplo Cheddar", 37,
        "Pão, 2 hambúrgueres, cheddar, bacon, molho de alho e cebola caramelizada."],

      ["Duplo Cheddar", 33,
        "Pão, cheddar, 2 hambúrgueres, bacon e molho de alho."],

      ["Americano", 28,
        "Pão, tomate, alface, cebola, pepino, Sassami, cheddar e molho de alho."],

      ["Combo Individual de Lanche", 45,
        "1 Chicken + 300 g de batata + refrigerante 220 ml."],

      ["Combo Duo de Lanche", 66,
        "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml."],

      ["Combo Trio", 80,
        "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml."],

      ["Combo Família de Lanche", 150,
        "5 Chickens + 1 kg de batata + refrigerante 2 L."],

      ["Combo Especial Duplo Cheddar — Duo", 84,
        "2 Especial Duplo Cheddar + 600 g de batata + 2 refrigerantes 220 ml."],

      ["Combo Especial Duplo Cheddar — Individual", 47,
        "1 Especial Duplo Cheddar + 300 g de batata + refrigerante 220 ml."],

      ["Combo Especial Lanche", 80,
        "2 Chickens + 500 g de batata bacon cheddar + 2 refrigerantes 220 ml."],

      ["Combo Individual Chicken", 40,
        "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml."]
    ]
  },


  /* =========================
     BALDES
  ========================== */

  baldes: {
    titulo: "🍗 BALDES",

    produtos: [

      ["Balde 8 unidades", 21,
        "8 unidades de frango."],

      ["Balde P — 12 unidades", 40,
        "12 unidades de frango."],

      ["Balde M — 15 unidades", 50,
        "15 unidades de frango."],

      ["Balde G — 20 unidades", 60,
        "20 unidades de frango."],

      ["Balde Fritas P", 55.90,
        "12 unidades de frango + 400 g de batata ou polenta."],

      ["Balde Fritas M", 65.90,
        "15 unidades de frango + 600 g de batata ou polenta."]
    ]
  },


  /* =========================
     COMBOS
  ========================== */

  combos: {
    titulo: "🔥 COMBOS",

    produtos: [

      ["Combo Individual de Frango", 36,
        "8 unidades + 300 g de acompanhamento + refrigerante 220 ml."],

      ["Combo Duo de Frango", 66,
        "12 unidades + 300 g de acompanhamento + refrigerante 1 litro."],

      ["Combo Família de Frango", 106,
        "20 unidades + 500 g de acompanhamento + refrigerante 2 litros."],

      ["Combo 1", 96,
        "1 kg de frango + 1 kg de batata com bacon e cheddar."],

      ["Combo 2 — Misto", 120,
        "1 kg de coxinha e Sassami + 1 kg de polenta + 500 g de calabresa acebolada."],

      ["Combo 3", 116,
        "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 litros."],

      ["Combo 4", 120,
        "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 litros."],

      ["Combo 5", 50,
        "1 kg de batata com bacon e cheddar."],

      ["Combo 6", 40,
        "1 kg de mandioca + 500 g de calabresa."]
    ]
  },


  /* =========================
     BEBIDAS
  ========================== */

  bebidas: {
    titulo: "🥤 BEBIDAS",

    produtos: [

      ["Coca-Cola 350 ml", 6, ""],
      ["Coca-Cola Zero 350 ml", 6, ""],
      ["Fanta Guaraná 350 ml", 6, ""],
      ["Sprite 350 ml", 6, ""],
      ["Fanta Laranja 350 ml", 6, ""],

      ["Coca-Cola 600 ml", 9, ""],
      ["Coca-Cola Zero 600 ml", 9, ""],
      ["Fanta Guaraná 600 ml", 9, ""],
      ["Sprite 600 ml", 9, ""],
      ["Fanta Laranja 600 ml", 9, ""],

      ["Coca-Cola 2 L", 15, ""],
      ["Coca-Cola Zero 2 L", 15, ""],
      ["Guaraná 2 L", 14, ""],
      ["Fanta 2 L", 14, ""],
      ["Sprite 2 L", 14, ""],

      ["Água com gás", 3.50, ""]
    ]
  },


  /* =========================
     PORÇÕES
  ========================== */

  porcoes: {
    titulo: "🍟 PORÇÕES",

    produtos: [

      ["Salada Americana", 28,
        "Alface americano, tomate cereja, frango crocante e molho especial."],

      ["Batata Apimentada", 38,
        "Batata com molho de pimenta."],

      ["Batata 300 g", 19, ""],

      ["Batata 500 g", 30, ""],

      ["Batata Bacon + Cheddar 500 g", 36, ""],

      ["Polenta 300 g", 12, ""],

      ["Polenta 500 g", 17, ""],

      ["Polenta recheada com queijo 500 g", 40, ""],

      ["Polenta recheada com queijo 1 kg", 55, ""],

      ["Anel de Cebola 300 g", 20, ""],

      ["Anel de Cebola 500 g", 35, ""]
    ]
  },


  /* =========================
     MOLHOS
  ========================== */

  molhos: {
    titulo: "🥣 MOLHOS",

    produtos: [

      ["Cheddar", 6, ""],
      ["Pimenta", 6, ""],
      ["Mostarda e Mel", 6, ""],
      ["Abacaxi com Pimenta", 6, ""],
      ["Creme de Alho", 6, ""],
      ["Barbecue", 5, ""],
      ["Ketchup", 5, ""]
    ]
  }

};


/* =========================================================
   ADICIONAIS
========================================================= */

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


/* =========================================================
   VARIÁVEIS
========================================================= */

let carrinho = [];

let produtoAtual = null;
let categoriaAtual = null;

let quantidadeAtual = 1;

let entregaSelecionada = "retirada";

let pagamentoSelecionado = "";

let trocoSelecionado = "nao";


/* =========================================================
   FORMATAÇÃO DE PREÇO
========================================================= */

function dinheiro(valor) {

  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

}


/* =========================================================
   MOSTRAR PRODUTOS
========================================================= */

function carregarProdutos(categoria) {

  categoriaAtual = categoria;

  const dados = cardapio[categoria];

  if (!dados) return;

  const titulo = document.getElementById("tituloCategoria");
  const lista = document.getElementById("listaProdutos");

  titulo.textContent = dados.titulo;

  lista.innerHTML = "";

  dados.produtos.forEach((produto, indice) => {

    const nome = produto[0];
    const preco = produto[1];
    const descricao = produto[2];

    const div = document.createElement("div");

    div.className = "produto";

    div.onclick = function () {
      abrirProduto(categoria, indice);
    };

    div.innerHTML = `

      <h3>${nome}</h3>

      ${
        descricao
          ? `<p>${descricao}</p>`
          : ""
      }

      <div class="preco">
        ${dinheiro(preco)}
      </div>

    `;

    lista.appendChild(div);

  });

}


/* =========================================================
   ABRIR PRODUTO
========================================================= */

function abrirProduto(categoria, indice) {

  categoriaAtual = categoria;

  produtoAtual = cardapio[categoria].produtos[indice];

  quantidadeAtual = 1;

  document.getElementById("produtoNome").textContent =
    produtoAtual[0];

  document.getElementById("produtoDescricao").textContent =
    produtoAtual[2] || "";

  document.getElementById("produtoPreco").textContent =
    Number(produtoAtual[1]).toFixed(2).replace(".", ",");

  document.getElementById("quantidadeProduto").textContent =
    quantidadeAtual;

  montarOpcoesProduto();

  montarAdicionais();

  document.getElementById("produtoModal").classList.remove("hidden");

}


/* =========================================================
   FECHAR PRODUTO
========================================================= */

function fecharProduto() {

  document.getElementById("produtoModal").classList.add("hidden");

}


/* =========================================================
   OPÇÕES ESPECIAIS
========================================================= */

function montarOpcoesProduto() {

  const area = document.getElementById("opcoesProduto");

  area.innerHTML = "";

  if (!produtoAtual) return;

  const nome = produtoAtual[0];

  /* -------------------------
     BALDES
  ------------------------- */

  if (
    categoriaAtual === "baldes" &&
    nome.includes("Balde")
  ) {

    let html = `
      <h3>🍗 ESCOLHA O TIPO DE FRANGO</h3>

      <button class="opcao-produto"
        onclick="selecionarOpcao(this, 'Coxinha')">
        Coxinha
      </button>

      <button class="opcao-produto"
        onclick="selecionarOpcao(this, 'Sassami')">
        Sassami
      </button>

      <button class="opcao-produto"
        onclick="selecionarOpcao(this, 'Tulipa')">
        Tulipa <strong>(+ R$ 10,00)</strong>
      </button>

      <button class="opcao-produto"
        onclick="selecionarMisto(this)">
        Misto <strong>(+ R$ 5,00)</strong>
      </button>
    `;

    area.innerHTML += html;

    if (
      nome.includes("Fritas")
    ) {

      area.innerHTML += `

        <h3>🍟 ESCOLHA O ACOMPANHAMENTO</h3>

        <button class="opcao-produto"
          onclick="selecionarOpcao(this, 'Batata frita')">
          Batata frita
        </button>

        <button class="opcao-produto"
          onclick="selecionarOpcao(this, 'Polenta frita')">
          Polenta frita
        </button>

      `;

    }

  }


  /* -------------------------
     COMBOS DE FRANGO
  ------------------------- */

  if (
    categoriaAtual === "combos" &&
    (
      nome === "Combo Individual de Frango" ||
      nome === "Combo Duo de Frango" ||
      nome === "Combo Família de Frango" ||
      nome === "Combo 1" ||
      nome === "Combo 3"
    )
  ) {

    area.innerHTML += `

      <h3>🍗 ESCOLHA O TIPO DE FRANGO</h3>

      <button class="opcao-produto"
        onclick="selecionarOpcao(this, 'Coxinha')">
        Coxinha
      </button>

      <button class="opcao-produto"
        onclick="selecionarOpcao(this, 'Sassami')">
        Sassami
      </button>

      <button class="opcao-produto"
        onclick="selecionarOpcao(this, 'Tulipa')">
        Tulipa <strong>(+ R$ 10,00)</strong>
      </button>

      <button class="opcao-produto"
        onclick="selecionarMisto(this)">
        Misto <strong>(+ R$ 5,00)</strong>
      </button>

    `;


    area.innerHTML += `

      <h3>🍟 ESCOLHA O ACOMPANHAMENTO</h3>

      <button class="opcao-produto"
        onclick="selecionarOpcao(this, 'Batata frita')">
        Batata frita
      </button>

      <button class="opcao-produto"
        onclick="selecionarOpcao(this, 'Polenta frita')">
        Polenta frita
      </button>

    `;

  }

}


/* =========================================================
   SELECIONAR OPÇÃO
========================================================= */

function selecionarOpcao(botao, valor) {

  const grupo = botao.parentElement;

  const botoes = grupo.querySelectorAll(
    ".opcao-produto"
  );

  /*
    Detecta se é tipo de frango ou acompanhamento
  */

  let grupoBotoes = [];

  botoes.forEach(b => {

    if (
      b.textContent.includes("Coxinha") ||
      b.textContent.includes("Sassami") ||
      b.textContent.includes("Tulipa") ||
      b.textContent.includes("Misto") ||
      b.textContent.includes("Batata frita") ||
      b.textContent.includes("Polenta frita")
    ) {

      grupoBotoes.push(b);

    }

  });


  if (grupoBotoes.includes(botao)) {

    grupoBotoes.forEach(b =>
      b.classList.remove("selecionada")
    );

  } else {

    botoes.forEach(b =>
      b.classList.remove("selecionada")
    );

  }

  botao.classList.add("selecionada");

  botao.dataset.valor = valor;

}


/* =========================================================
   MISTO
========================================================= */

function selecionarMisto(botao) {

  const area = document.getElementById("opcoesProduto");

  /*
    Se já existe seleção do misto, remove
  */

  document
    .querySelectorAll(".misto-escolha")
    .forEach(e => e.remove());


  document
    .querySelectorAll(".opcao-produto")
    .forEach(b => b.classList.remove("selecionada"));


  botao.classList.add("selecionada");

  botao.dataset.valor = "Misto";


  const div = document.createElement("div");

  div.className = "misto-escolha";

  div.innerHTML = `

    <h3>🍗 ESCOLHA OS 2 TIPOS DE FRANGO</h3>

    <p style="font-size:16px;color:#ddd;margin-bottom:10px;">
      Escolha exatamente 2 opções.
      Se escolher Tulipa, o acréscimo total será
      R$ 10,00.
    </p>

    <label class="adicional-item">
      <span>Coxinha</span>
      <input
        type="checkbox"
        value="Coxinha"
        class="misto-tipo">
    </label>

    <label class="adicional-item">
      <span>Sassami</span>
      <input
        type="checkbox"
        value="Sassami"
        class="misto-tipo">
    </label>

    <label class="adicional-item">
      <span>Tulipa</span>
      <input
        type="checkbox"
        value="Tulipa"
        class="misto-tipo">
    </label>

  `;

  area.appendChild(div);

}


/* =========================================================
   ADICIONAIS
========================================================= */

function montarAdicionais() {

  const area = document.getElementById(
    "adicionaisProduto"
  );

  area.innerHTML = `
    <h3>➕ ADICIONAIS</h3>
  `;


  adicionais.forEach((adicional, indice) => {

    const nome = adicional[0];

    const preco = adicional[1];

    const div = document.createElement("div");

    div.className = "adicional-item";

    div.innerHTML = `

      <label for="adicional-${indice}">
        ${nome}
        <span>
          + ${dinheiro(preco)}
        </span>
      </label>

      <input
        type="checkbox"
        id="adicional-${indice}"
        value="${indice}">

    `;

    area.appendChild(div);

  });

}


/* =========================================================
   QUANTIDADE
========================================================= */

function alterarQuantidade(valor) {

  quantidadeAtual += valor;

  if (quantidadeAtual < 1) {
    quantidadeAtual = 1;
  }

  document.getElementById(
    "quantidadeProduto"
  ).textContent = quantidadeAtual;

}


/* =========================================================
   PEGAR OPÇÕES ESCOLHIDAS
========================================================= */

function pegarOpcoes() {

  const opcoes = [];

  document
    .querySelectorAll(
      "#opcoesProduto .opcao-produto.selecionada"
    )
    .forEach(botao => {

      if (botao.dataset.valor) {

        opcoes.push(botao.dataset.valor);

      }

    });


  /*
    Misto
  */

  const misto = document.querySelectorAll(
    ".misto-tipo:checked"
  );

  if (misto.length > 0) {

    const tipos = [];

    misto.forEach(item => {
      tipos.push(item.value);
    });

    if (tipos.length === 2) {

      const indexMisto = opcoes.indexOf("Misto");

      if (indexMisto !== -1) {
        opcoes[indexMisto] =
          "Misto: " + tipos.join(" + ");
      }

    }

  }


  return opcoes;

}


/* =========================================================
   ADICIONAR AO CARRINHO
========================================================= */

function adicionarAoCarrinho() {

  if (!produtoAtual) return;


  const opcoes = pegarOpcoes();


  /*
    Validação de tipo de frango
  */

  const precisaFrango =

    categoriaAtual === "baldes" ||

    (
      categoriaAtual === "combos" &&
      (
        produtoAtual[0] === "Combo Individual de Frango" ||
        produtoAtual[0] === "Combo Duo de Frango" ||
        produtoAtual[0] === "Combo Família de Frango" ||
        produtoAtual[0] === "Combo 1" ||
        produtoAtual[0] === "Combo 3"
      )
    );


  if (precisaFrango) {

    const temFrango = opcoes.some(opcao =>

      opcao === "Coxinha" ||
      opcao === "Sassami" ||
      opcao === "Tulipa" ||
      opcao.startsWith("Misto:")

    );


    if (!temFrango) {

      alert(
        "Por favor, escolha o tipo de frango."
      );

      return;

    }

  }


  /*
    Validação do Misto
  */

  const botaoMisto =
    document.querySelector(
      "#opcoesProduto .opcao-produto.selecionada[data-valor='Misto']"
    );


  if (botaoMisto) {

    const escolhidos =
      document.querySelectorAll(
        ".misto-tipo:checked"
      );


    if (escolhidos.length !== 2) {

      alert(
        "No Misto, escolha exatamente 2 tipos de frango."
      );

      return;

    }

  }


  /*
    Adicionais
  */

  const adicionaisSelecionados = [];

  adicionais.forEach((adicional, indice) => {

    const checkbox =
      document.getElementById(
        `adicional-${indice}`
      );

    if (
      checkbox &&
      checkbox.checked
    ) {

      adicionaisSelecionados.push({
        nome: adicional[0],
        preco: adicional[1]
      });

    }

  });


  /*
    Acréscimo de frango
  */

  let acrescimo = 0;


  opcoes.forEach(opcao => {

    if (opcao === "Tulipa") {

      acrescimo += 10;

    }


    if (
      opcao.startsWith("Misto:")
    ) {

      if (
        opcao.includes("Tulipa")
      ) {

        acrescimo += 10;

      } else {

        acrescimo += 5;

      }

    }

  });


  /*
    Valor dos adicionais
  */

  adicionaisSelecionados.forEach(adicional => {

    acrescimo += adicional.preco;

  });


  const precoUnitario =
    Number(produtoAtual[1]) + acrescimo;


  const item = {

    nome: produtoAtual[0],

    preco: precoUnitario,

    precoBase: Number(produtoAtual[1]),

    quantidade: quantidadeAtual,

    opcoes: opcoes,

    adicionais: adicionaisSelecionados

  };


  carrinho.push(item);


  fecharProduto();

  atualizarCarrinho();

  alert(
    "✅ Produto adicionado ao carrinho!"
  );

}


/* =========================================================
   ATUALIZAR CARRINHO
========================================================= */

function atualizarCarrinho() {

  const quantidade = carrinho.reduce(
    (total, item) =>
      total + item.quantidade,
    0
  );


  document.getElementById(
    "contadorCarrinho"
  ).textContent = quantidade;


  document.getElementById(
    "contadorCarrinhoTopo"
  ).textContent = quantidade;


  renderizarCarrinho();

}


/* =========================================================
   RENDERIZAR CARRINHO
========================================================= */

function renderizarCarrinho() {

  const area =
    document.getElementById(
      "itensCarrinho"
    );


  if (carrinho.length === 0) {

    area.innerHTML = `

      <p class="carrinho-vazio">
        Seu carrinho está vazio.
      </p>

    `;

    atualizarTotal();

    return;

  }


  area.innerHTML = "";


  carrinho.forEach((item, indice) => {

    const div =
      document.createElement("div");

    div.className =
      "item-carrinho";


    let detalhes = "";


    /*
      Mostrar somente escolhas
      feitas pelo cliente.
    */

    if (item.opcoes.length > 0) {

      detalhes +=
        item.opcoes.join(" • ");

    }


    if (
      item.adicionais.length > 0
    ) {

      const nomes =
        item.adicionais.map(
          adicional =>
            adicional.nome
        );

      if (detalhes) {
        detalhes += " • ";
      }

      detalhes +=
        "Adicionais: " +
        nomes.join(", ");

    }


    div.innerHTML = `

      <h3>
        ${item.quantidade}x ${item.nome}
      </h3>

      ${
        detalhes
          ? `<p>${detalhes}</p>`
          : ""
      }

      <strong>
        ${dinheiro(
          item.preco *
          item.quantidade
        )}
      </strong>

      <button
        onclick="removerItem(${indice})"
        style="
          margin-top:10px;
          padding:9px 13px;
          border:2px solid #d71920;
          border-radius:8px;
          background:#111;
          color:#fff;
          font-weight:bold;
        ">

        🗑️ REMOVER

      </button>

    `;


    area.appendChild(div);

  });


  atualizarTotal();

}


/* =========================================================
   REMOVER ITEM
========================================================= */

function removerItem(indice) {

  carrinho.splice(indice, 1);

  atualizarCarrinho();

}


/* =========================================================
   TOTAL
========================================================= */

function calcularSubtotal() {

  return carrinho.reduce(
    (total, item) =>
      total +
      (
        item.preco *
        item.quantidade
      ),
    0
  );

}


function calcularTotal() {

  let total =
    calcularSubtotal();


  if (
    entregaSelecionada === "entrega" &&
    carrinho.length > 0
  ) {

    total += TAXA_ENTREGA;

  }


  return total;

}


function atualizarTotal() {

  const elemento =
    document.getElementById(
      "totalCarrinho"
    );


  if (!elemento) return;


  elemento.textContent =
    dinheiro(
      calcularTotal()
    );

}


/* =========================================================
   ABRIR / FECHAR CARRINHO
========================================================= */

function abrirCarrinho() {

  renderizarCarrinho();

  document
    .getElementById(
      "carrinhoModal"
    )
    .classList.remove("hidden");

}


function fecharCarrinho() {

  document
    .getElementById(
      "carrinhoModal"
    )
    .classList.add("hidden");

}


/* =========================================================
   ENTREGA / RETIRADA
========================================================= */

function selecionarEntrega(tipo) {

  entregaSelecionada = tipo;


  const retirada =
    document.getElementById(
      "btnRetirada"
    );

  const entrega =
    document.getElementById(
      "btnEntrega"
    );


  retirada.classList.remove(
    "selecionado"
  );

  entrega.classList.remove(
    "selecionado"
  );


  if (tipo === "retirada") {

    retirada.classList.add(
      "selecionado"
    );

  } else {

    entrega.classList.add(
      "selecionado"
    );

  }


  atualizarTotal();

}


/* =========================================================
   PAGAMENTO
========================================================= */

function selecionarPagamento(tipo) {

  pagamentoSelecionado = tipo;


  document
    .querySelectorAll(
      ".opcao-pagamento"
    )
    .forEach(botao => {

      botao.classList.remove(
        "selecionado"
      );

    });


  const botoes =
    document.querySelectorAll(
      ".opcao-pagamento"
    );


  botoes.forEach(botao => {

    if (
      botao.textContent
        .trim()
        .includes(
          tipo.toUpperCase()
        )
    ) {

      botao.classList.add(
        "selecionado"
      );

    }

  });


  const pix =
    document.getElementById(
      "pixInfo"
    );

  const troco =
    document.getElementById(
      "trocoArea"
    );


  pix.classList.add("hidden");

  troco.classList.add("hidden");


  if (tipo === "PIX") {

    pix.classList.remove(
      "hidden"
    );

  }


  if (tipo === "Dinheiro") {

    troco.classList.remove(
      "hidden"
    );

  }

}


/* =========================================================
   TROCO
========================================================= */

function selecionarTroco(tipo) {

  trocoSelecionado = tipo;


  const area =
    document.getElementById(
      "valorTrocoArea"
    );


  if (tipo === "sim") {

    area.classList.remove(
      "hidden"
    );

  } else {

    area.classList.add(
      "hidden"
    );

  }

}


/* =========================================================
   FINALIZAR PEDIDO
========================================================= */

function finalizarPedido() {

  if (carrinho.length === 0) {

    alert(
      "Seu carrinho está vazio."
    );

    return;

  }


  if (!pagamentoSelecionado) {

    alert(
      "Escolha a forma de pagamento."
    );

    return;

  }


  if (
    pagamentoSelecionado === "Dinheiro" &&
    trocoSelecionado === "sim"
  ) {

    const valor =
      document.getElementById(
        "valorTroco"
      ).value;


    if (!valor || Number(valor) <= 0) {

      alert(
        "Informe o valor para o troco."
      );

      return;

    }

  }


  let mensagem =
    "🍗 *BENVENUTO CHICKEN* 🍗\n\n";


  mensagem +=
    "🛒 *PEDIDO*\n";


  carrinho.forEach(item => {

    mensagem +=
      `\n${item.quantidade}x ${item.nome}`;


    /*
      Só escolhas feitas pelo cliente.
      Não colocar composição padrão.
    */

    if (
      item.opcoes.length > 0
    ) {

      mensagem +=
        ` — ${item.opcoes.join(", ")}`;

    }


    if (
      item.adicionais.length > 0
    ) {

      mensagem +=
        `\n   ➕ ${item.adicionais
          .map(a => a.nome)
          .join(", ")}`;

    }


    mensagem +=
      `\n   ${dinheiro(
        item.preco *
        item.quantidade
      )}\n`;

  });


  const subtotal =
    calcularSubtotal();


  mensagem +=
    `\n💰 Subtotal: ${dinheiro(subtotal)}`;


  if (
    entregaSelecionada === "entrega"
  ) {

    mensagem +=
      `\n🛵 Entrega: ${dinheiro(TAXA_ENTREGA)}`;

  } else {

    mensagem +=
      "\n🏪 Retirada: sem taxa";

  }


  mensagem +=
    `\n💵 *TOTAL: ${dinheiro(
      calcularTotal()
    )}*`;


  mensagem +=
    `\n\n📍 *Recebimento:* ${
      entregaSelecionada === "entrega"
        ? "Entrega"
        : "Retirada"
    }`;


  mensagem +=
    `\n💳 *Pagamento:* ${
      pagamentoSelecionado
    }`;


  if (
    pagamentoSelecionado === "PIX"
  ) {

    mensagem +=
      `\n🔑 Chave PIX: ${CHAVE_PIX}`;

  }


  if (
    pagamentoSelecionado === "Dinheiro"
  ) {

    if (
      trocoSelecionado === "sim"
    ) {

      const valor =
        document.getElementById(
          "valorTroco"
        ).value;


      mensagem +=
        `\n💵 Troco para: ${dinheiro(
          Number(valor)
        )}`;

    } else {

      mensagem +=
        "\n💵 Troco: Não precisa";

    }

  }


  const url =
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(
      mensagem
    );


  window.open(
    url,
    "_blank"
  );

}


/* =========================================================
   INÍCIO
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    atualizarCarrinho();

  }
);
