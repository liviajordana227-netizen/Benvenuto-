/* =====================================================
   BENVENUTO CHICKEN
   ===================================================== */

const WHATSAPP = "5544997323438";
const PIX = "64213198000174";

let carrinho = [];

let recebimento = "retirada";
let pagamento = "";
let tipoCartao = "";
let precisaTroco = false;

let produtoAtual = null;
let categoriaAtual = "";

let comboAtual = null;


/* =====================================================
   PRODUTOS
   ===================================================== */

const produtos = {

    lanches: [

        ["X-Burguer", 19, "Acompanha 1 molho de alho."],

        ["Pop Chicken", 22, "Acompanha 1 molho de alho."],

        ["Chicken", 26, "Acompanha 1 molho de alho."],

        ["X-Calabresa", 27, "Acompanha 1 molho de alho."],

        ["X-Bacon", 27, "Acompanha 1 molho de alho."],

        ["X-Salada", 25, "Acompanha 1 molho de alho."],

        ["X-Rings", 27, "Acompanha 1 molho de alho."],

        ["Especial Duplo Cheddar", 37, "Acompanha 1 molho de alho."],

        ["Duplo Cheddar", 33, "Acompanha 1 molho de alho."],

        ["Americano", 28, "Acompanha 1 molho de alho."]
    ],


    baldes: [

        ["Balde 8 unidades", 21,
            "Escolha o tipo de frango."
        ],

        ["Balde P", 40,
            "12 unidades — escolha o tipo de frango."
        ],

        ["Balde M", 50,
            "15 unidades — escolha o tipo de frango."
        ],

        ["Balde G", 60,
            "20 unidades — escolha o tipo de frango."
        ],

        ["Balde Fritas P", 55.90,
            "12 unidades de frango + 400 g de batata ou polenta."
        ],

        ["Balde Fritas M", 65.90,
            "15 unidades de frango + 600 g de batata ou polenta."
        ]
    ],


    combos: [

        [
            "Combo Individual de Frango",
            36,
            "8 unidades + 300 g de acompanhamento + refrigerante 220 ml."
        ],

        [
            "Combo Duo de Frango",
            66,
            "12 unidades + 300 g de acompanhamento + refrigerante 600 ml."
        ],

        [
            "Combo Família de Frango",
            106,
            "20 unidades + 500 g de acompanhamento + refrigerante 2 L."
        ],

        [
            "Combo 1",
            96,
            "1 kg de frango + 1 kg de batata com bacon e cheddar."
        ],

        [
            "Combo 2 — Misto",
            120,
            "1 kg de coxinha e Sassami + 1 kg de polenta + 500 g de calabresa acebolada."
        ],

        [
            "Combo 3",
            116,
            "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 L."
        ],

        [
            "Combo 4",
            120,
            "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 L."
        ],

        [
            "Combo 5",
            50,
            "1 kg de batata com bacon e cheddar."
        ],

        [
            "Combo 6",
            40,
            "1 kg de mandioca + 500 g de calabresa."
        ],

        [
            "Combo Individual de Lanche",
            45,
            "1 Chicken + 300 g de batata + refrigerante 220 ml."
        ],

        [
            "Combo Duo de Lanche",
            66,
            "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml."
        ],

        [
            "Combo Trio",
            80,
            "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml."
        ],

        [
            "Combo Família de Lanche",
            150,
            "5 Chickens + 1 kg de batata + refrigerante 2 L."
        ],

        [
            "Combo Especial Duplo Cheddar — Duo",
            84,
            "2 Especial Duplo Cheddar + 600 g de batata + 2 refrigerantes 220 ml."
        ],

        [
            "Combo Especial Duplo Cheddar — Individual",
            47,
            "1 Especial Duplo Cheddar + 300 g de batata + refrigerante 220 ml."
        ],

        [
            "Combo Especial Lanche",
            80,
            "2 Chickens + 500 g de batata bacon cheddar + refrigerante 600 ml."
        ],

        [
            "Combo Individual Chicken",
            40,
            "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml."
        ]
    ],


    porcoes: [

        [
            "Salada Americana",
            28,
            "Alface americano + tomate-cereja + frango crocante + molho especial."
        ],

        [
            "Batata Apimentada",
            38,
            "Acompanha molho de pimenta."
        ],

        [
            "Batata frita — 300 g",
            19,
            ""
        ],

        [
            "Batata frita — 500 g",
            30,
            ""
        ],

        [
            "Batata com bacon e cheddar — 500 g",
            36,
            ""
        ],

        [
            "Polenta frita — 300 g",
            12,
            ""
        ],

        [
            "Polenta frita — 500 g",
            17,
            ""
        ],

        [
            "🧀 Polenta recheada com queijo — 500 g",
            40,
            ""
        ],

        [
            "🧀 Polenta recheada com queijo — 1 kg",
            55,
            ""
        ],

        [
            "Anel de cebola — 500 g",
            35,
            ""
        ],

        [
            "Anel de cebola — 300 g",
            20,
            ""
        ]
    ],


    molhos: [

        ["Molho cheddar", 6, ""],

        ["Molho de pimenta", 6, ""],

        ["Mostarda e mel", 6, ""],

        ["Abacaxi com pimenta", 6, ""],

        ["Creme de alho", 6, ""],

        ["Barbecue", 5, ""],

        ["Ketchup", 5, ""]
    ],


    bebidas: [

        ["Coca-Cola — 350 ml", 6, ""],
        ["Coca-Cola Zero — 350 ml", 6, ""],
        ["Fanta Guaraná — 350 ml", 6, ""],
        ["Sprite — 350 ml", 6, ""],
        ["Fanta Laranja — 350 ml", 6, ""],

        ["Coca-Cola — 600 ml", 9, ""],
        ["Coca-Cola Zero — 600 ml", 9, ""],
        ["Fanta Guaraná — 600 ml", 9, ""],
        ["Sprite — 600 ml", 9, ""],
        ["Fanta Laranja — 600 ml", 9, ""],

        ["Coca-Cola — 2 litros", 15, ""],
        ["Coca-Cola Zero — 2 litros", 15, ""],
        ["Guaraná — 2 litros", 14, ""],
        ["Fanta — 2 litros", 14, ""],
        ["Sprite — 2 litros", 14, ""],

        ["Água com gás", 3.50, ""]
    ]

};


/* =====================================================
   ADICIONAIS DOS LANCHES
   ===================================================== */

const adicionais = [

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

];


/* =====================================================
   FORMATAÇÃO
   ===================================================== */

function dinheiro(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


/* =====================================================
   TELA INICIAL
   ===================================================== */

function mostrarInicio() {

    document.getElementById("inicio")
        .classList.remove("escondido");

    document.getElementById("cardapio")
        .classList.add("escondido");

    window.scrollTo(0, 0);

}


function abrirCardapio() {

    document.getElementById("inicio")
        .classList.add("escondido");

    document.getElementById("cardapio")
        .classList.remove("escondido");

    document.querySelectorAll(".categoria-produtos")
        .forEach(el => {
            el.classList.remove("ativa");
        });

    window.scrollTo(0, 0);

}


/* =====================================================
   MOSTRAR CATEGORIA
   ===================================================== */

function mostrarCategoria(categoria) {

    document.querySelectorAll(".categoria-produtos")
        .forEach(el => {
            el.classList.remove("ativa");
        });

    const secao = document.getElementById(categoria);

    if (secao) {
        secao.classList.add("ativa");
    }

    document.getElementById("produtos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   CARREGAR PRODUTOS
   ===================================================== */

function carregarProdutos() {

    for (const categoria in produtos) {

        const container =
            document.getElementById(categoria);

        if (!container) continue;

        container.innerHTML = "";

        produtos[categoria].forEach((produto, indice) => {

            const nome = produto[0];
            const preco = produto[1];
            const descricao = produto[2];

            const card =
                document.createElement("div");

            card.className = "card-produto";

            card.innerHTML = `

                <h3>${nome}</h3>

                ${
                    descricao
                    ?
                    `<p class="descricao">${descricao}</p>`
                    :
                    ""
                }

                <div class="preco">
                    ${dinheiro(preco)}
                </div>

                <button
                    class="botao-adicionar"
                    onclick="adicionarProduto('${categoria}', ${indice})">

                    ADICIONAR

                </button>
            `;

            container.appendChild(card);

        });

    }

}


/* =====================================================
   ADICIONAR PRODUTO
   ===================================================== */

function adicionarProduto(categoria, indice) {

    const produto = produtos[categoria][indice];

    produtoAtual = {
        categoria,
        nome: produto[0],
        preco: produto[1]
    };


    /* Lanches */

    if (categoria === "lanches") {

        abrirModalLanche();

        return;
    }


    /* Baldes */

    if (categoria === "baldes") {

        abrirModalBalde();

        return;
    }


    /* Combos */

    if (categoria === "combos") {

        abrirModalCombo();

        return;
    }


    /* Produtos normais */

    adicionarAoCarrinho(
        produto[0],
        produto[1],
        []
    );

}


/* =====================================================
   MODAL LANCHE
   ===================================================== */

function abrirModalLanche() {

    document.getElementById("lancheNome")
        .textContent = produtoAtual.nome;

    document.getElementById("lanchePreco")
        .textContent = dinheiro(produtoAtual.preco);


    const lista =
        document.getElementById("listaAdicionais");

    lista.innerHTML = "";


    adicionais.forEach((item, index) => {

        lista.innerHTML += `

            <label class="opcao">

                <input
                    type="checkbox"
                    value="${index}">

                <span>
                    ${item[0]} — ${dinheiro(item[1])}
                </span>

            </label>
        `;

    });


    document.getElementById("lancheModal")
        .classList.remove("escondido");

}


function confirmarLanche() {

    const selecionados =
        [...document.querySelectorAll(
            "#listaAdicionais input:checked"
        )];


    const extras = selecionados.map(input => {

        const adicional =
            adicionais[input.value];

        return {
            nome: adicional[0],
            preco: adicional[1]
        };

    });


    adicionarAoCarrinho(
        produtoAtual.nome,
        produtoAtual.preco,
        extras
    );


    fecharModal("lancheModal");

}


/* =====================================================
   MODAL BALDE
   ===================================================== */

function abrirModalBalde() {

    document.getElementById("baldeNome")
        .textContent = produtoAtual.nome;

    document.getElementById("baldePreco")
        .textContent =
        dinheiro(produtoAtual.preco);


    const opcoes =
        document.getElementById("opcoesFrango");

    opcoes.innerHTML = `

        <label class="opcao">

            <input
                type="radio"
                name="tipoFrango"
                value="Coxinha">

            🍗 Coxinha

        </label>


        <label class="opcao">

            <input
                type="radio"
                name="tipoFrango"
                value="Sassami">

            🍗 Sassami

        </label>


        <label class="opcao">

            <input
                type="radio"
                name="tipoFrango"
                value="Tulipa">

            🍗 Tulipa <strong>(+ R$10,00)</strong>

        </label>


        <label class="opcao">

            <input
                type="radio"
                name="tipoFrango"
                value="Misto"
                onchange="mostrarOpcoesMisto()">

            🍗 Misto <strong>(+ R$10,00)</strong>

        </label>

    `;


    const acompanhamento =
        document.getElementById(
            "opcoesAcompanhamento"
        );


    const nome = produtoAtual.nome.toLowerCase();


    /* Balde Fritas */

    if (nome.includes("fritas")) {

        acompanhamento.innerHTML = `

            <label class="opcao">

                <input
                    type="radio"
                    name="acompanhamentoBalde"
                    value="Batata frita">

                🍟 Batata frita

            </label>


            <label class="opcao">

                <input
                    type="radio"
                    name="acompanhamentoBalde"
                    value="Polenta frita">

                🟨 Polenta frita

            </label>

        `;

        document.getElementById(
            "tituloAcompanhamento"
        ).classList.remove("escondido");

    } else {

        acompanhamento.innerHTML = "";

        document.getElementById(
            "tituloAcompanhamento"
        ).classList.add("escondido");

    }


    document.getElementById("avisoBalde")
        .textContent =
        "Tulipa ou Misto acrescentam R$10,00. No Misto, o adicional é apenas R$10,00 no total.";


    document.getElementById("modalBalde")
        .classList.remove("escondido");

}


/* =====================================================
   MISTO DO BALDE
   ===================================================== */

function mostrarOpcoesMisto() {

    const container =
        document.getElementById("opcoesFrango");


    if (
        document.querySelector(
            'input[name="tipoFrango"][value="Misto"]'
        )?.checked
    ) {

        container.innerHTML += `

            <div id="escolhaMisto">

                <h3>
                    Escolha os 2 tipos de frango:
                </h3>


                <label class="opcao">

                    <input
                        type="checkbox"
                        class="mistoTipo"
                        value="Coxinha">

                    Coxinha

                </label>


                <label class="opcao">

                    <input
                        type="checkbox"
                        class="mistoTipo"
                        value="Sassami">

                    Sassami

                </label>


                <label class="opcao">

                    <input
                        type="checkbox"
                        class="mistoTipo"
                        value="Tulipa">

                    Tulipa

                </label>

            </div>
        `;

    }

}


/* =====================================================
   CONFIRMAR BALDE
   ===================================================== */

function confirmarBalde() {

    const tipoSelecionado =
        document.querySelector(
            'input[name="tipoFrango"]:checked'
        );


    if (!tipoSelecionado) {

        alert("Escolha o tipo de frango.");

        return;
    }


    let tipoFrango =
        tipoSelecionado.value;


    let descricaoEscolha = "";

    let precoFinal =
        produtoAtual.preco;


    /* MISTO */

    if (tipoFrango === "Misto") {

        const tipos =
            [...document.querySelectorAll(
                ".mistoTipo:checked"
            )].map(el => el.value);


        if (tipos.length !== 2) {

            alert(
                "No Misto, escolha exatamente 2 tipos de frango."
            );

            return;
        }


        descricaoEscolha =
            "Misto: " + tipos.join(" + ");


        /* Misto custa SOMENTE +R$10 */

        precoFinal += 10;

    }


    /* TULIPA */

    else if (tipoFrango === "Tulipa") {

        descricaoEscolha =
            "Tulipa";

        precoFinal += 10;

    }


    /* COXINHA / SASSAMI */

    else {

        descricaoEscolha =
            tipoFrango;

    }


    /* ACOMPANHAMENTO */

    const acompanhamento =
        document.querySelector(
            'input[name="acompanhamentoBalde"]:checked'
        );


    if (
        produtoAtual.nome
            .toLowerCase()
            .includes("fritas")
    ) {

        if (!acompanhamento) {

            alert(
                "Escolha batata frita ou polenta frita."
            );

            return;
        }

        descricaoEscolha +=
            " | " + acompanhamento.value;

    }


    adicionarAoCarrinho(
        produtoAtual.nome,
        precoFinal,
        [],
        descricaoEscolha
    );


    fecharModal("modalBalde");

}


/* =====================================================
   MODAL COMBO
   ===================================================== */

function abrirModalCombo() {

    comboAtual = produtoAtual;


    document.getElementById("comboNome")
        .textContent = produtoAtual.nome;


    document.getElementById("comboPreco")
        .textContent =
        dinheiro(produtoAtual.preco);


    const container =
        document.getElementById("opcoesCombo");


    container.innerHTML = "";


    const nome =
        produtoAtual.nome.toLowerCase();


    /*
       Combos que precisam escolher
       tipo de frango.
    */

    const comboComFrango =

        nome.includes("individual de frango") ||
        nome.includes("duo de frango") ||
        nome.includes("família de frango") ||
        nome.includes("combo 1") ||
        nome.includes("combo 3") ||
        nome.includes("combo 4");


    /*
       Combos que possuem acompanhamento
       escolhido pelo cliente.
    */

    const comboComEscolhaAcompanhamento =

        nome.includes("individual de frango") ||
        nome.includes("duo de frango") ||
        nome.includes("família de frango") ||
        nome.includes("combo 1") ||
        nome.includes("combo 3");


    if (comboComFrango) {

        container.innerHTML += `

            <h3>Escolha o frango</h3>


            <label class="opcao">

                <input
                    type="radio"
                    name="frangoCombo"
                    value="Coxinha">

                🍗 Coxinha

            </label>


            <label class="opcao">

                <input
                    type="radio"
                    name="frangoCombo"
                    value="Sassami">

                🍗 Sassami

            </label>


            <label class="opcao">

                <input
                    type="radio"
                    name="frangoCombo"
                    value="Tulipa">

                🍗 Tulipa

            </label>

        `;

    }


    if (comboComEscolhaAcompanhamento) {

        container.innerHTML += `

            <h3>Escolha o acompanhamento</h3>


            <label class="opcao">

                <input
                    type="radio"
                    name="acompCombo"
                    value="Batata frita">

                🍟 Batata frita

            </label>


            <label class="opcao">

                <input
                    type="radio"
                    name="acompCombo"
                    value="Polenta frita">

                🟨 Polenta frita

            </label>

        `;

    }


    /*
       Combos de lanche que já têm batata
       definida no produto não pedem
       escolha de frango.
    */


    document.getElementById("modalCombo")
        .classList.remove("escondido");

}


/* =====================================================
   CONFIRMAR COMBO
   ===================================================== */

function confirmarCombo() {

    const nome =
        comboAtual.nome.toLowerCase();


    const extras = [];


    /* FRANGO */

    const frango =
        document.querySelector(
            'input[name="frangoCombo"]:checked'
        );


    if (
        (
            nome.includes("individual de frango") ||
            nome.includes("duo de frango") ||
            nome.includes("família de frango") ||
            nome.includes("combo 1") ||
            nome.includes("combo 3") ||
            nome.includes("combo 4")
        )
        &&
        !frango
    ) {

        alert("Escolha o tipo de frango.");

        return;

    }


    /* ACOMPANHAMENTO */

    const acompanhamento =
        document.querySelector(
            'input[name="acompCombo"]:checked'
        );


    if (
        (
            nome.includes("individual de frango") ||
            nome.includes("duo de frango") ||
            nome.includes("família de frango") ||
            nome.includes("combo 1") ||
            nome.includes("combo 3")
        )
        &&
        !acompanhamento
    ) {

        alert(
            "Escolha batata frita ou polenta frita."
        );

        return;

    }


    let escolha = [];


    if (frango) {

        escolha.push(
            "Frango: " + frango.value
        );

    }


    if (acompanhamento) {

        escolha.push(
            "Acompanhamento: " +
            acompanhamento.value
        );

    }


    adicionarAoCarrinho(
        comboAtual.nome,
        comboAtual.preco,
        extras,
        escolha.join(" | ")
    );


    fecharModal("modalCombo");

}


/* =====================================================
   ADICIONAR AO CARRINHO
   ===================================================== */

function adicionarAoCarrinho(
    nome,
    preco,
    extras = [],
    escolha = ""
) {

    const valorExtras =
        extras.reduce(
            (total, item) =>
                total + item.preco,
            0
        );


    const precoFinal =
        preco + valorExtras;


    const chave =
        nome +
        "|" +
        JSON.stringify(extras) +
        "|" +
        escolha;


    const existente =
        carrinho.find(
            item => item.chave === chave
        );


    if (existente) {

        existente.quantidade++;

    } else {

        carrinho.push({

            chave,

            nome,

            preco: precoFinal,

            extras,

            escolha,

            quantidade: 1

        });

    }


    atualizarCarrinho();

}


/* =====================================================
   CARRINHO
   ===================================================== */

function atualizarCarrinho() {

    const lista =
        document.getElementById(
            "listaCarrinho"
        );


    lista.innerHTML = "";


    if (carrinho.length === 0) {

        lista.innerHTML =
            "<p>Seu carrinho está vazio.</p>";

    }


    carrinho.forEach((item, index) => {

        let detalhes = "";


        if (item.escolha) {

            detalhes +=
                `<p>👉 ${item.escolha}</p>`;

        }


        if (item.extras.length > 0) {

            detalhes +=
                "<p>Adicionais: " +
                item.extras
                    .map(extra => extra.nome)
                    .join(", ") +
                "</p>";

        }


        lista.innerHTML += `

            <div class="item-carrinho">

                <h4>
                    ${item.nome}
                </h4>

                ${detalhes}

                <p>
                    ${dinheiro(item.preco)}
                    cada
                </p>

                <div class="controles">

                    <button
                        onclick="alterarQuantidade(${index}, -1)">
                        −
                    </button>

                    <strong>
                        ${item.quantidade}
                    </strong>

                    <button
                        onclick="alterarQuantidade(${index}, 1)">
                        +
                    </button>

                    <button
                        onclick="removerItem(${index})">
                        🗑️
                    </button>

                </div>

            </div>
        `;

    });


    const subtotal =
        calcularSubtotal();


    const taxa =
        recebimento === "entrega"
        ? 4
        : 0;


    const total =
        subtotal + taxa;


    document.getElementById("subtotal")
        .textContent =
        dinheiro(subtotal);


    document.getElementById("taxaEntrega")
        .textContent =
        dinheiro(taxa);


    document.getElementById("total")
        .textContent =
        dinheiro(total);


    const quantidade =
        carrinho.reduce(
            (soma, item) =>
                soma + item.quantidade,
            0
        );


    document.getElementById(
        "contadorCarrinho"
    ).textContent = quantidade;

}


function calcularSubtotal() {

    return carrinho.reduce(
        (total, item) =>
            total +
            item.preco *
            item.quantidade,
        0
    );

}


function alterarQuantidade(index, valor) {

    carrinho[index].quantidade += valor;


    if (
        carrinho[index].quantidade <= 0
    ) {

        carrinho.splice(index, 1);

    }


    atualizarCarrinho();

}


function removerItem(index) {

    carrinho.splice(index, 1);

    atualizarCarrinho();

}


/* =====================================================
   ABRIR CARRINHO
   ===================================================== */

function abrirCarrinho() {

    document.getElementById(
        "modalCarrinho"
    ).classList.remove("escondido");

}


/* =====================================================
   RECEBIMENTO
   ===================================================== */

function selecionarRecebimento(tipo) {

    recebimento = tipo;


    document.getElementById(
        "btnRetirada"
    ).classList.remove("ativo");


    document.getElementById(
        "btnEntrega"
    ).classList.remove("ativo");


    if (tipo === "retirada") {

        document.getElementById(
            "btnRetirada"
        ).classList.add("ativo");


        document.getElementById(
            "campoEndereco"
        ).classList.add("escondido");

    } else {

        document.getElementById(
            "btnEntrega"
        ).classList.add("ativo");


        document.getElementById(
            "campoEndereco"
        ).classList.remove("escondido");

    }


    atualizarCarrinho();

}


/* =====================================================
   PAGAMENTO
   ===================================================== */

function selecionarPagamento(tipo) {

    pagamento = tipo;


    document.querySelectorAll(
        ".opcoes-pagamento button"
    ).forEach(button => {

        button.classList.remove("ativo");

    });


    document.getElementById(
        "dinheiroInfo"
    ).classList.add("escondido");


    document.getElementById(
        "cartaoInfo"
    ).classList.add("escondido");


    document.getElementById(
        "pixInfo"
    ).classList.add("escondido");


    if (tipo === "dinheiro") {

        document.getElementById(
            "pagDinheiro"
        ).classList.add("ativo");


        document.getElementById(
            "dinheiroInfo"
        ).classList.remove("escondido");

    }


    if (tipo === "cartao") {

        document.getElementById(
            "pagCartao"
        ).classList.add("ativo");


        document.getElementById(
            "cartaoInfo"
        ).classList.remove("escondido");

    }


    if (tipo === "pix") {

        document.getElementById(
            "pagPix"
        ).classList.add("ativo");


        document.getElementById(
            "pixInfo"
        ).classList.remove("escondido");

    }

}


/* =====================================================
   TROCO
   ===================================================== */

function selecionarTroco(sim) {

    precisaTroco = sim;


    document.getElementById(
        "trocoSim"
    ).classList.remove("ativo");


    document.getElementById(
        "trocoNao"
    ).classList.remove("ativo");


    if (sim) {

        document.getElementById(
            "trocoSim"
        ).classList.add("ativo");


        document.getElementById(
            "campoTroco"
        ).classList.remove("escondido");

    } else {

        document.getElementById(
            "trocoNao"
        ).classList.add("ativo");


        document.getElementById(
            "campoTroco"
        ).classList.add("escondido");

    }

}


/* =====================================================
   CARTÃO
   ===================================================== */

function selecionarCartao(tipo) {

    tipoCartao = tipo;


    document.getElementById(
        "cartaoDebito"
    ).classList.remove("ativo");


    document.getElementById(
        "cartaoCredito"
    ).classList.remove("ativo");


    if (tipo === "Débito") {

        document.getElementById(
            "cartaoDebito"
        ).classList.add("ativo");

    } else {

        document.getElementById(
            "cartaoCredito"
        ).classList.add("ativo");

    }

}


/* =====================================================
   COPIAR PIX
   ===================================================== */

function copiarPix() {

    navigator.clipboard
        .writeText(PIX)
        .then(() => {

            alert(
                "Chave PIX copiada!"
            );

        })
        .catch(() => {

            alert(
                "Não foi possível copiar automaticamente. Chave: " +
                PIX
            );

        });

}


/* =====================================================
   WHATSAPP
   ===================================================== */

function enviarWhatsApp() {

    if (carrinho.length === 0) {

        alert(
            "Adicione pelo menos um produto ao carrinho."
        );

        return;

    }


    const nome =
        document.getElementById(
            "nomeCliente"
        ).value.trim();


    if (!nome) {

        alert("Digite seu nome.");

        return;

    }


    if (recebimento === "entrega") {

        const endereco =
            document.getElementById(
                "endereco"
            ).value.trim();


        if (!endereco) {

            alert(
                "Digite o endereço para entrega."
            );

            return;

        }

    }


    if (!pagamento) {

        alert(
            "Escolha a forma de pagamento."
        );

        return;

    }


    if (
        pagamento === "cartao" &&
        !tipoCartao
    ) {

        alert(
            "Escolha débito ou crédito."
        );

        return;

    }


    if (
        pagamento === "dinheiro" &&
        precisaTroco
    ) {

        const valorTroco =
            document.getElementById(
                "valorTroco"
            ).value;


        if (!valorTroco) {

            alert(
                "Informe para quanto precisa de troco."
            );

            return;

        }

    }


    let mensagem = "";


    mensagem +=
        "🍗 *NOVO PEDIDO — BENVENUTO CHICKEN* 🍗\n\n";


    mensagem +=
        "👤 *Cliente:* " +
        nome +
        "\n\n";


    mensagem +=
        "🛒 *PEDIDO*\n";


    carrinho.forEach(item => {

        mensagem +=
            "\n• " +
            item.quantidade +
            "x " +
            item.nome;


        if (item.escolha) {

            mensagem +=
                "\n  ↳ " +
                item.escolha;

        }


        if (item.extras.length > 0) {

            mensagem +=
                "\n  ↳ Adicionais: " +
                item.extras
                    .map(extra => extra.nome)
                    .join(", ");

        }


        mensagem +=
            "\n  " +
            dinheiro(
                item.preco *
                item.quantidade
            ) +
            "\n";

    });


    const subtotal =
        calcularSubtotal();


    const taxa =
        recebimento === "entrega"
        ? 4
        : 0;


    const total =
        subtotal + taxa;


    mensagem +=
        "\n💰 *Subtotal:* " +
        dinheiro(subtotal);


    mensagem +=
        "\n🚚 *Recebimento:* " +
        (
            recebimento === "entrega"
            ? "Entrega"
            : "Retirada"
        );


    if (recebimento === "entrega") {

        mensagem +=
            "\n📍 *Endereço:* " +
            document.getElementById(
                "endereco"
            ).value.trim();

    }


    mensagem +=
        "\n💵 *Taxa de entrega:* " +
        dinheiro(taxa);


    mensagem +=
        "\n💰 *TOTAL:* " +
        dinheiro(total);


    mensagem +=
        "\n\n💳 *PAGAMENTO:* ";


    if (pagamento === "pix") {

        mensagem +=
            "PIX";


        mensagem +=
            "\n🔑 Chave PIX: " +
            PIX;

    }


    else if (pagamento === "cartao") {

        mensagem +=
            "Cartão — " +
            tipoCartao;

    }


    else {

        mensagem +=
            "Dinheiro";


        if (precisaTroco) {

            mensagem +=
                "\n💵 Troco para: R$ " +
                document.getElementById(
                    "valorTroco"
                ).value;

        } else {

            mensagem +=
                "\n💵 Sem necessidade de troco";

        }

    }


    const observacoes =
        document.getElementById(
            "observacoes"
        ).value.trim();


    if (observacoes) {

        mensagem +=
            "\n\n📝 *Observações:* " +
            observacoes;

    }


    mensagem +=
        "\n\nObrigado! ❤️";


    const url =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(mensagem);


    window.location.href = url;

}


/* =====================================================
   FECHAR MODAIS
   ===================================================== */

function fecharModal(id) {

    document.getElementById(id)
        .classList.add("escondido");

}


/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        carregarProdutos();

        atualizarCarrinho();

        selecionarRecebimento(
            "retirada"
        );

        mostrarInicio();

    }
);
