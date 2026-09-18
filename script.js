/* =========================================================
   BENVENUTO CHICKEN
   SCRIPT COMPLETO
   ========================================================= */

const WHATSAPP = "5544997323438";
const PIX = "64213198000174";
const TAXA_ENTREGA = 4;

let carrinho = [];
let formaEntrega = "retirada";
let formaPagamento = "";
let produtoAtual = null;

let adicionaisSelecionados = [];
let escolhasProduto = {};
let precisaTroco = false;


/* =========================================================
   CARDÁPIO
   ========================================================= */

const dados = {

  /* =========================
     LANCHES
     ========================= */

  lanches: {
    titulo: "🍔 LANCHES",

    produtos: [

      ["X-Burguer", 19,
        "Pão, hambúrguer, queijo e molho de alho."
      ],

      ["Pop Chicken", 22,
        "Pão, Sassami, catupiry e molho de alho."
      ],

      ["Chicken", 26,
        "Pão, Sassami, alface, tomate, cebola e molho de alho."
      ],

      ["X-Calabresa", 27,
        "Pão, molho de alho, queijo, calabresa, hambúrguer, alface, tomate e cebola."
      ],

      ["X-Bacon", 27,
        "Pão, muçarela, hambúrguer, creme de alho, bacon e catupiry."
      ],

      ["X-Salada", 25,
        "Pão, hambúrguer, molho de alho, alface, tomate e cebola."
      ],

      ["X-Rings", 27,
        "Pão, hambúrguer, 3 anéis de cebola, muçarela, alface, cebola e molho de alho."
      ],

      ["Especial Duplo Cheddar", 37,
        "Pão, 2 hambúrgueres, cheddar, bacon, molho de alho e cebola caramelizada."
      ],

      ["Duplo Cheddar", 33,
        "Pão, cheddar, 2 hambúrgueres, bacon e molho de alho."
      ],

      ["Americano", 28,
        "Pão, tomate, alface, cebola, pepino, Sassami, cheddar e molho de alho."
      ],

      ["Combo Individual de Lanche", 45,
        "1 Chicken + 300 g de batata + refrigerante 220 ml."
      ],

      ["Combo Duo de Lanche", 66,
        "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml."
      ],

      ["Combo Trio", 80,
        "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml."
      ],

      ["Combo Família de Lanche", 150,
        "5 Chickens + 1 kg de batata + refrigerante 2 L."
      ],

      ["Combo Especial Duplo Cheddar — Duo", 84,
        "2 Especial Duplo Cheddar + 600 g de batata + 2 refrigerantes 220 ml."
      ],

      ["Combo Especial Duplo Cheddar — Individual", 47,
        "1 Especial Duplo Cheddar + 300 g de batata + refrigerante 220 ml."
      ],

      ["Combo Especial Lanche", 80,
        "2 Chickens + 500 g de batata bacon cheddar + 2 refrigerantes 220 ml."
      ],

      ["Combo Individual Chicken", 40,
        "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml."
      ]
    ]
  },


  /* =========================
     BALDES
     ========================= */

  baldes: {
    titulo: "🍗 BALDES",

    produtos: [

      ["Balde 8 unidades", 21,
        "8 unidades de frango."
      ],

      ["Balde P — 12 unidades", 40,
        "12 unidades de frango."
      ],

      ["Balde M — 15 unidades", 50,
        "15 unidades de frango."
      ],

      ["Balde G — 20 unidades", 60,
        "20 unidades de frango."
      ],

      ["Balde Fritas P", 55.90,
        "12 unidades de frango + 400 g de batata ou polenta."
      ],

      ["Balde Fritas M", 65.90,
        "15 unidades de frango + 600 g de batata ou polenta."
      ]
    ]
  },


  /* =========================
     COMBOS
     ========================= */

  combos: {
    titulo: "🔥 COMBOS",

    produtos: [

      ["Combo Individual de Frango", 36,
        "8 unidades + 300 g de acompanhamento + refrigerante 220 ml."
      ],

      ["Combo Duo de Frango", 66,
        "12 unidades + 300 g de acompanhamento + refrigerante 1 litro."
      ],

      ["Combo Família de Frango", 106,
        "20 unidades + 500 g de acompanhamento + refrigerante 2 litros."
      ],

      ["Combo 1", 96,
        "1 kg de frango + 1 kg de batata com bacon e cheddar."
      ],

      ["Combo 2 — Misto", 120,
        "1 kg de coxinha e Sassami + 1 kg de polenta + 500 g de calabresa acebolada."
      ],

      ["Combo 3", 116,
        "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 litros."
      ],

      ["Combo 4", 120,
        "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 litros."
      ],

      ["Combo 5", 50,
        "1 kg de batata com bacon e cheddar."
      ],

      ["Combo 6", 40,
        "1 kg de mandioca + 500 g de calabresa."
      ]
    ]
  },


  /* =========================
     BEBIDAS
     ========================= */

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
     ========================= */

  porcoes: {
    titulo: "🍟 PORÇÕES",

    produtos: [

      ["Salada Americana", 28,
        "Alface americano, tomate cereja, frango crocante e molho especial."
      ],

      ["Batata Apimentada", 38,
        "Batata com molho de pimenta."
      ],

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
     ========================= */

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
   IMPORTANTE:
   SOMENTE LANCHES
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
   FORMATAÇÃO DE PREÇO
   ========================================================= */

function dinheiro(valor) {

  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

}


/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

function mostrarInicio() {

  const inicio = document.getElementById("inicio");
  const cardapio = document.getElementById("cardapio");
  const produtosPagina =
    document.getElementById("produtosPagina");

  if (inicio) inicio.classList.remove("hidden");

  if (cardapio) cardapio.classList.add("hidden");

  if (produtosPagina)
    produtosPagina.classList.add("hidden");
}


function mostrarCardapio() {

  const inicio = document.getElementById("inicio");
  const cardapio = document.getElementById("cardapio");
  const produtosPagina =
    document.getElementById("produtosPagina");

  if (inicio) inicio.classList.add("hidden");

  if (cardapio)
    cardapio.classList.remove("hidden");

  if (produtosPagina)
    produtosPagina.classList.add("hidden");
}


function mostrarProdutos(categoria) {

  const inicio = document.getElementById("inicio");
  const cardapio = document.getElementById("cardapio");
  const produtosPagina =
    document.getElementById("produtosPagina");

  if (inicio) inicio.classList.add("hidden");

  if (cardapio)
    cardapio.classList.add("hidden");

  if (produtosPagina)
    produtosPagina.classList.remove("hidden");

  carregarProdutos(categoria);
}


function voltarCategorias() {

  mostrarCardapio();

}


/* =========================================================
   CARREGAR PRODUTOS
   ========================================================= */

function carregarProdutos(categoria) {

  const area =
    document.getElementById("produtosLista");

  if (!area) return;

  const categoriaDados = dados[categoria];

  if (!categoriaDados) {

    area.innerHTML =
      "<p>Categoria não encontrada.</p>";

    return;
  }

  area.innerHTML = `
    <h2>${categoriaDados.titulo}</h2>
  `;


  categoriaDados.produtos.forEach((produto, index) => {

    const nome = produto[0];
    const preco = produto[1];
    const descricao = produto[2];

    const card =
      document.createElement("div");

    card.className = "produto-card";

    card.innerHTML = `

      <div class="produto-info">

        <h3>${nome}</h3>

        ${
          descricao
            ? `<p>${descricao}</p>`
            : ""
        }

        <strong>
          ${dinheiro(preco)}
        </strong>

      </div>

      <button
        class="btn-adicionar"
        onclick="abrirProduto('${categoria}', ${index})"
      >
        🛒 ADICIONAR
      </button>

    `;

    area.appendChild(card);

  });

}


/* =========================================================
   ABRIR PRODUTO
   ========================================================= */

function abrirProduto(categoria, index) {

  const produto =
    dados[categoria]?.produtos[index];

  if (!produto) return;

  produtoAtual = {

    categoria: categoria,
    index: index,

    nome: produto[0],
    preco: produto[1],
    descricao: produto[2]

  };

  adicionaisSelecionados = [];

  escolhasProduto = {};

  const modal =
    document.getElementById("produtoModal");

  const nome =
    document.getElementById("produtoNome");

  const preco =
    document.getElementById("produtoPreco");

  const descricao =
    document.getElementById("produtoDescricao");


  if (nome)
    nome.textContent =
      produtoAtual.nome;

  if (preco)
    preco.textContent =
      dinheiro(produtoAtual.preco);

  if (descricao)
    descricao.textContent =
      produtoAtual.descricao || "";


  montarOpcoesProduto();


  if (modal)
    modal.classList.remove("hidden");

}


function fecharProduto() {

  const modal =
    document.getElementById("produtoModal");

  if (modal)
    modal.classList.add("hidden");

}


/* =========================================================
   MONTAR OPÇÕES
   ========================================================= */

function montarOpcoesProduto() {

  const area =
    document.getElementById("opcoesProduto");

  if (!area || !produtoAtual)
    return;

  area.innerHTML = "";

  const categoria =
    produtoAtual.categoria;

  const nome =
    produtoAtual.nome;


  /* =====================================================
     ADICIONAIS
     SOMENTE PARA LANCHES
     ===================================================== */

  if (categoria === "lanches") {

    const titulo =
      document.createElement("h3");

    titulo.textContent =
      "➕ Adicionais";

    area.appendChild(titulo);


    adicionais.forEach((item, index) => {

      const div =
        document.createElement("label");

      div.className =
        "adicional-item";

      div.innerHTML = `

        <input
          type="checkbox"
          onchange="
            selecionarAdicional(
              ${index},
              this.checked
            )
          "
        >

        <span>
          ${item[0]} + ${dinheiro(item[1])}
        </span>

      `;

      area.appendChild(div);

    });

  }


  /* =====================================================
     BALDES
     ===================================================== */

  if (categoria === "baldes") {

    criarEscolhaFrango(area);


    if (nome.includes("Fritas")) {

      criarEscolhaAcompanhamento(area);

    }

  }


  /* =====================================================
     COMBOS
     SOMENTE AS OPÇÕES NECESSÁRIAS
     SEM ADICIONAIS
     ===================================================== */

  if (categoria === "combos") {

    const combosComEscolha = [

      "Combo Individual de Frango",
      "Combo Duo de Frango",
      "Combo Família de Frango",
      "Combo 1",
      "Combo 3"

    ];


    if (combosComEscolha.includes(nome)) {

      criarEscolhaFrango(area);

      criarEscolhaAcompanhamento(area);

    }

  }

}


/* =========================================================
   ESCOLHA DE FRANGO
   ========================================================= */

function criarEscolhaFrango(area) {

  const titulo =
    document.createElement("h3");

  titulo.textContent =
    "🍗 Escolha o tipo de frango";

  area.appendChild(titulo);


  const tipos = [

    ["Coxinha", 0],
    ["Sassami", 0],
    ["Tulipa", 10],
    ["Misto", 5]

  ];


  tipos.forEach(tipo => {

    const botao =
      document.createElement("button");

    botao.className =
      "opcao-produto";

    botao.textContent =
      tipo[0] +
      (
        tipo[1] > 0
          ? ` (+ ${dinheiro(tipo[1])})`
          : ""
      );


    botao.onclick = () => {

      selecionarTipoBalde(
        tipo[0],
        botao
      );

    };


    area.appendChild(botao);

  });


  const aviso =
    document.createElement("p");

  aviso.innerHTML = `
    <strong>Misto com Tulipa:</strong>
    acréscimo total de R$ 10,00.
  `;

  area.appendChild(aviso);

}


/* =========================================================
   ESCOLHA DE ACOMPANHAMENTO
   ========================================================= */

function criarEscolhaAcompanhamento(area) {

  const titulo =
    document.createElement("h3");

  titulo.textContent =
    "🍟 Escolha o acompanhamento";

  area.appendChild(titulo);


  ["Batata frita", "Polenta frita"]
    .forEach(tipo => {

      const botao =
        document.createElement("button");

      botao.className =
        "opcao-produto";

      botao.textContent =
        tipo;


      botao.onclick = () => {

        selecionarAcompanhamento(
          tipo,
          botao
        );

      };


      area.appendChild(botao);

    });

}


/* =========================================================
   SELECIONAR ADICIONAL
   ========================================================= */

function selecionarAdicional(index, marcado) {

  if (marcado) {

    if (
      !adicionaisSelecionados.includes(index)
    ) {

      adicionaisSelecionados.push(index);

    }

  } else {

    adicionaisSelecionados =
      adicionaisSelecionados.filter(
        i => i !== index
      );

  }

}


/* =========================================================
   SELECIONAR TIPO DE FRANGO
   ========================================================= */

function selecionarTipoBalde(tipo, botao) {

  escolhasProduto.tipoFrango =
    tipo;


  const area =
    document.getElementById("opcoesProduto");

  if (!area) return;


  area
    .querySelectorAll(".opcao-produto")
    .forEach(b => {

      if (

        b.textContent.includes("Coxinha") ||
        b.textContent.includes("Sassami") ||
        b.textContent.includes("Tulipa") ||
        b.textContent.includes("Misto")

      ) {

        b.classList.remove(
          "selecionado"
        );

      }

    });


  botao.classList.add(
    "selecionado"
  );


  /* =====================================================
     MISTO
     ===================================================== */

  const antigo =
    document.getElementById(
      "mistoEscolha"
    );

  if (antigo)
    antigo.remove();


  escolhasProduto.misto = [];


  if (tipo === "Misto") {

    const mistoArea =
      document.createElement("div");

    mistoArea.id =
      "mistoEscolha";


    mistoArea.innerHTML = `

      <h3>
        Escolha 2 tipos para o misto
      </h3>

      <button
        class="opcao-misto"
        onclick="
          selecionarMisto(
            'Coxinha',
            this
          )
        "
      >
        Coxinha
      </button>

      <button
        class="opcao-misto"
        onclick="
          selecionarMisto(
            'Sassami',
            this
          )
        "
      >
        Sassami
      </button>

      <button
        class="opcao-misto"
        onclick="
          selecionarMisto(
            'Tulipa',
            this
          )
        "
      >
        Tulipa
      </button>

      <p id="mistoSelecionado"></p>

    `;


    area.appendChild(
      mistoArea
    );

  }

}


/* =========================================================
   SELECIONAR MISTO
   ========================================================= */

function selecionarMisto(tipo, botao) {

  if (!escolhasProduto.misto)
    escolhasProduto.misto = [];


  if (
    escolhasProduto.misto.includes(tipo)
  ) {

    escolhasProduto.misto =
      escolhasProduto.misto.filter(
        t => t !== tipo
      );

    botao.classList.remove(
      "selecionado"
    );

  } else {

    if (
      escolhasProduto.misto.length >= 2
    ) {

      alert(
        "Escolha somente 2 tipos de frango."
      );

      return;

    }


    escolhasProduto.misto.push(
      tipo
    );

    botao.classList.add(
      "selecionado"
    );

  }


  const texto =
    document.getElementById(
      "mistoSelecionado"
    );


  if (texto) {

    if (
      escolhasProduto.misto.length
    ) {

      texto.textContent =
        "Escolhido: " +
        escolhasProduto.misto.join(
          " + "
        );

    } else {

      texto.textContent = "";

    }

  }

}


/* =========================================================
   ACOMPANHAMENTO
   ========================================================= */

function selecionarAcompanhamento(
  tipo,
  botao
) {

  escolhasProduto.acompanhamento =
    tipo;


  const area =
    document.getElementById(
      "opcoesProduto"
    );

  if (!area) return;


  area
    .querySelectorAll(".opcao-produto")
    .forEach(b => {

      if (

        b.textContent ===
          "Batata frita" ||

        b.textContent ===
          "Polenta frita"

      ) {

        b.classList.remove(
          "selecionado"
        );

      }

    });


  botao.classList.add(
    "selecionado"
  );

}


/* =========================================================
   ADICIONAR AO CARRINHO
   ========================================================= */

function adicionarAoCarrinho() {

  if (!produtoAtual)
    return;


  const categoria =
    produtoAtual.categoria;

  const nome =
    produtoAtual.nome;


  /* =====================================================
     VALIDAÇÃO DOS BALDES
     ===================================================== */

  if (categoria === "baldes") {

    if (!escolhasProduto.tipoFrango) {

      alert(
        "Escolha o tipo de frango."
      );

      return;

    }


    if (

      escolhasProduto.tipoFrango ===
        "Misto" &&

      (
        !escolhasProduto.misto ||
        escolhasProduto.misto.length !== 2
      )

    ) {

      alert(
        "Escolha exatamente 2 tipos para o misto."
      );

      return;

    }


    if (

      nome.includes("Fritas") &&

      !escolhasProduto.acompanhamento

    ) {

      alert(
        "Escolha Batata frita ou Polenta frita."
      );

      return;

    }

  }


  /* =====================================================
     VALIDAÇÃO DOS COMBOS
     ===================================================== */

  const combosComEscolha = [

    "Combo Individual de Frango",
    "Combo Duo de Frango",
    "Combo Família de Frango",
    "Combo 1",
    "Combo 3"

  ];


  if (

    categoria === "combos" &&

    combosComEscolha.includes(nome)

  ) {

    if (!escolhasProduto.tipoFrango) {

      alert(
        "Escolha o tipo de frango."
      );

      return;

    }


    if (

      escolhasProduto.tipoFrango ===
        "Misto" &&

      (
        !escolhasProduto.misto ||
        escolhasProduto.misto.length !== 2
      )

    ) {

      alert(
        "Escolha exatamente 2 tipos para o misto."
      );

      return;

    }


    if (
      !escolhasProduto.acompanhamento
    ) {

      alert(
        "Escolha Batata frita ou Polenta frita."
      );

      return;

    }

  }


  /* =====================================================
     CALCULAR PREÇO
     ===================================================== */

  let precoFinal =
    produtoAtual.preco;


  /* Tulipa */
  if (
    escolhasProduto.tipoFrango ===
    "Tulipa"
  ) {

    precoFinal += 10;

  }


  /* Misto */
  if (
    escolhasProduto.tipoFrango ===
    "Misto"
  ) {

    const temTulipa =
      escolhasProduto.misto &&
      escolhasProduto.misto.includes(
        "Tulipa"
      );


    /*
      Misto normal = +5
      Misto com Tulipa = +10 TOTAL
    */

    precoFinal +=
      temTulipa ? 10 : 5;

  }


  /* =====================================================
     ADICIONAIS
     SOMENTE LANCHES
     ===================================================== */

  let extras = [];


  if (
    categoria === "lanches"
  ) {

    adicionaisSelecionados
      .forEach(index => {

        precoFinal +=
          adicionais[index][1];


        extras.push({

          nome:
            adicionais[index][0],

          preco:
            adicionais[index][1]

        });

      });

  }


  /* =====================================================
     ESCOLHAS
     ===================================================== */

  const escolhas = {};


  if (
    escolhasProduto.tipoFrango
  ) {

    if (
      escolhasProduto.tipoFrango ===
      "Misto"
    ) {

      escolhas.frango =
        "Misto: " +
        escolhasProduto.misto.join(
          " + "
        );

    } else {

      escolhas.frango =
        escolhasProduto.tipoFrango;

    }

  }


  if (
    escolhasProduto.acompanhamento
  ) {

    escolhas.acompanhamento =
      escolhasProduto.acompanhamento;

  }


  /* =====================================================
     COLOCAR NO CARRINHO
     ===================================================== */

  carrinho.push({

    nome:
      produtoAtual.nome,

    preco:
      precoFinal,

    categoria:
      categoria,

    escolhas:
      escolhas,

    /*
      Somente lanches podem ter adicionais.
    */

    adicionais:
      categoria === "lanches"
        ? extras
        : [],

    quantidade: 1

  });


  fecharProduto();

  atualizarCarrinho();

}


/* =========================================================
   ABRIR CARRINHO
   ========================================================= */

function abrirCarrinho() {

  const modal =
    document.getElementById(
      "carrinhoModal"
    );


  if (modal)
    modal.classList.remove(
      "hidden"
    );


  atualizarCarrinho();

}


function fecharCarrinho() {

  const modal =
    document.getElementById(
      "carrinhoModal"
    );


  if (modal)
    modal.classList.add(
      "hidden"
    );

}


/* =========================================================
   ATUALIZAR CARRINHO
   ========================================================= */

function atualizarCarrinho() {

  const area =
    document.getElementById(
      "itensCarrinho"
    );

  const contador =
    document.getElementById(
      "contadorCarrinho"
    );


  if (contador) {

    contador.textContent =
      carrinho.reduce(
        (total, item) =>
          total + item.quantidade,
        0
      );

  }


  if (!area)
    return;


  if (
    carrinho.length === 0
  ) {

    area.innerHTML = `

      <p class="carrinho-vazio">
        Seu carrinho está vazio.
      </p>

    `;

  } else {

    area.innerHTML = "";


    carrinho.forEach(
      (item, index) => {

        const div =
          document.createElement(
            "div"
          );

        div.className =
          "item-carrinho";


        let detalhes = "";


        /* Tipo de frango */

        if (
          item.escolhas?.frango
        ) {

          detalhes += `

            <small>
              🍗 ${item.escolhas.frango}
            </small>

          `;

        }


        /* Acompanhamento */

        if (
          item.escolhas?.acompanhamento
        ) {

          detalhes += `

            <small>
              🍟 ${item.escolhas
