// ============================================================
// BENVENUTO CHICKEN - SCRIPT.JS
// ============================================================

const WHATSAPP = "5544997323438";
const PIX = "64213198000174";
const TAXA_ENTREGA = 4;

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

const dados = {

    // ========================================================
    // LANCHES
    // ========================================================

    lanches: {
        titulo: "🍔 LANCHES",

        produtos: [

            [
                "X-Burguer",
                19,
                "Pão, hambúrguer, queijo e molho de alho."
            ],

            [
                "Pop Chicken",
                22,
                "Pão, Sassami, catupiry e molho de alho."
            ],

            [
                "Chicken",
                26,
                "Pão, Sassami, alface, tomate, cebola e molho de alho."
            ],

            [
                "X-Calabresa",
                27,
                "Pão, molho de alho, queijo, calabresa, hambúrguer, alface, tomate e cebola."
            ],

            [
                "X-Bacon",
                27,
                "Pão, muçarela, hambúrguer, creme de alho, bacon e catupiry."
            ],

            [
                "X-Salada",
                25,
                "Pão, hambúrguer, molho de alho, alface, tomate e cebola."
            ],

            [
                "X-Rings",
                27,
                "Pão, hambúrguer, 3 anéis de cebola, muçarela, alface, cebola e molho de alho."
            ],

            [
                "Especial Duplo Cheddar",
                37,
                "Pão, 2 hambúrgueres, cheddar, bacon, molho de alho e cebola caramelizada."
            ],

            [
                "Duplo Cheddar",
                33,
                "Pão, cheddar, 2 hambúrgueres, bacon e molho de alho."
            ],

            [
                "Americano",
                28,
                "Pão, tomate, alface, cebola, pepino, Sassami, cheddar e molho de alho."
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
                "2 Chickens + 500 g de batata bacon cheddar + 2 refrigerantes 220 ml."
            ],

            [
                "Combo Individual Chicken",
                40,
                "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml."
            ]

        ]
    },

    // ========================================================
    // BALDES
    // ========================================================

    baldes: {
        titulo: "🍗 BALDES",

        produtos: [

            [
                "Balde 8 unidades",
                21,
                "8 unidades de frango."
            ],

            [
                "Balde P — 12 unidades",
                40,
                "12 unidades de frango."
            ],

            [
                "Balde M — 15 unidades",
                50,
                "15 unidades de frango."
            ],

            [
                "Balde G — 20 unidades",
                60,
                "20 unidades de frango."
            ],

            [
                "Balde Fritas P",
                55.90,
                "12 unidades de frango + 400 g de batata ou polenta."
            ],

            [
                "Balde Fritas M",
                65.90,
                "15 unidades de frango + 600 g de batata ou polenta."
            ]

        ]
    },

    // ========================================================
    // COMBOS
    // ========================================================

    combos: {
        titulo: "🔥 COMBOS",

        produtos: [

            [
                "Combo Individual de Frango",
                36,
                "8 unidades + 300 g de acompanhamento + refrigerante 220 ml."
            ],

            [
                "Combo Duo de Frango",
                66,
                "12 unidades + 300 g de acompanhamento + refrigerante 1 litro."
            ],

            [
                "Combo Família de Frango",
                106,
                "20 unidades + 500 g de acompanhamento + refrigerante 2 litros."
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
                "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 litros."
            ],

            [
                "Combo 4",
                120,
                "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 litros."
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
            ]

        ]
    },

    // ========================================================
    // BEBIDAS
    // ========================================================

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

    // ========================================================
    // PORÇÕES
    // ========================================================

    porcoes: {
        titulo: "🍟 PORÇÕES",

        produtos: [

            [
                "Salada Americana",
                28,
                "Alface americano, tomate cereja, frango crocante e molho especial."
            ],

            [
                "Batata Apimentada",
                38,
                "Batata com molho de pimenta."
            ],

            ["Batata 300 g", 19, ""],
            ["Batata 500 g", 30, ""],
            ["Batata Bacon + Cheddar 500 g", 36, ""],

            ["Polenta 300 g", 12, ""],
            ["Polenta 500 g", 17, ""],

            [
                "Polenta recheada com queijo 500 g",
                40,
                ""
            ],

            [
                "Polenta recheada com queijo 1 kg",
                55,
                ""
            ],

            ["Anel de Cebola 300 g", 20, ""],
            ["Anel de Cebola 500 g", 35, ""]

        ]
    },

    // ========================================================
    // MOLHOS
    // ========================================================

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


// ============================================================
// CARRINHO
// ============================================================

let carrinho = [];
let produtoAtual = null;
let quantidadeAtual = 1;


// ============================================================
// FORMATAÇÃO
// ============================================================

function dinheiro(valor) {

    return Number(valor).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}


// ============================================================
// TELAS
// ============================================================

function mostrarTela(id) {

    document.querySelectorAll(".tela").forEach(tela => {

        tela.classList.remove("ativa");
        tela.classList.remove("atual");

    });

    const tela = document.getElementById(id);

    if (tela) {

        tela.classList.add("ativa");
        tela.classList.add("atual");

        window.scrollTo(0, 0);

    }

}


function abrirCardapio() {

    mostrarTela("cardapio");

}


function voltarCategorias() {

    mostrarTela("cardapio");

}


// ============================================================
// CATEGORIAS
// ============================================================

function abrirCategoria(categoria) {

    if (!dados[categoria]) return;

    const titulo = document.getElementById("tituloCategoria");
    const lista = document.getElementById("listaProdutos");

    if (titulo) {

        titulo.textContent = dados[categoria].titulo;

    }

    if (!lista) return;

    lista.innerHTML = "";

    dados[categoria].produtos.forEach((produto, indice) => {

        const card = document.createElement("div");

        card.className = "produto-card";

        card.innerHTML = `

            <div class="produto-info">

                <h2>${produto[0]}</h2>

                ${
                    produto[2]
                    ? `<p>${produto[2]}</p>`
                    : ""
                }

                <strong>
                    R$ ${dinheiro(produto[1])}
                </strong>

            </div>

            <button
                class="produto-botao"
                onclick="abrirProduto('${categoria}', ${indice})"
            >
                ADICIONAR
            </button>

        `;

        lista.appendChild(card);

    });

    mostrarTela("produtos");

}


// ============================================================
// MODAL DO PRODUTO
// ============================================================

function abrirProduto(categoria, indice) {

    const produto = dados[categoria]?.produtos[indice];

    if (!produto) return;

    produtoAtual = {

        categoria: categoria,
        indice: indice,
        nome: produto[0],
        preco: Number(produto[1]),
        descricao: produto[2] || ""

    };

    quantidadeAtual = 1;

    const titulo = document.getElementById("modalTitulo");
    const descricao = document.getElementById("modalDescricao");
    const preco = document.getElementById("modalPreco");
    const quantidade = document.getElementById("quantidadeProduto");
    const opcoes = document.getElementById("opcoesProduto");
    const adicionaisDiv = document.getElementById("adicionaisProduto");

    if (titulo) titulo.textContent = produtoAtual.nome;

    if (descricao) descricao.textContent = produtoAtual.descricao;

    if (preco) preco.textContent = dinheiro(produtoAtual.preco);

    if (quantidade) quantidade.textContent = "1";

    if (opcoes) opcoes.innerHTML = "";

    if (adicionaisDiv) adicionaisDiv.innerHTML = "";

    criarOpcoesProduto();

    if (
        produtoAtual.categoria === "lanches" &&
        !produtoAtual.nome.toLowerCase().includes("combo")
    ) {

        criarAdicionais();

    }

    const modal = document.getElementById("modalProduto");

    if (modal) {

        modal.classList.add("aberto");
        modal.style.display = "flex";

    }

}


function fecharProduto() {

    const modal = document.getElementById("modalProduto");

    if (modal) {

        modal.classList.remove("aberto");
        modal.style.display = "none";

    }

    produtoAtual = null;

}


function alterarQuantidade(valor) {

    quantidadeAtual += valor;

    if (quantidadeAtual < 1) {

        quantidadeAtual = 1;

    }

    const quantidade =
        document.getElementById("quantidadeProduto");

    if (quantidade) {

        quantidade.textContent = quantidadeAtual;

    }

}


// ============================================================
// OPÇÕES
// ============================================================

function criarOpcoesProduto() {

    if (!produtoAtual) return;

    const opcoes =
        document.getElementById("opcoesProduto");

    if (!opcoes) return;

    const nome =
        produtoAtual.nome.toLowerCase();


    // BALDES

    if (
        produtoAtual.categoria === "baldes" &&
        !nome.includes("fritas")
    ) {

        opcoes.innerHTML += criarEscolhaFrango(true);

    }


    // BALDES FRITAS

    if (
        produtoAtual.categoria === "baldes" &&
        nome.includes("fritas")
    ) {

        opcoes.innerHTML += criarEscolhaAcompanhamento();

        opcoes.innerHTML += criarEscolhaFrango(true);

    }


    // COMBOS COM ESCOLHA DE FRANGO

    const combos = [

        "combo individual de frango",
        "combo duo de frango",
        "combo família de frango",
        "combo 1",
        "combo 3"

    ];


    if (
        produtoAtual.categoria === "combos" &&
        combos.includes(nome)
    ) {

        opcoes.innerHTML += criarEscolhaFrango(true);

        opcoes.innerHTML += criarEscolhaAcompanhamento();

    }

}


// ============================================================
// ESCOLHA DE FRANGO
// ============================================================

function criarEscolhaFrango(mostrarMisto) {

    let html = `

        <div class="opcao-secao">

            <h3>
                🍗 ESCOLHA O TIPO DE FRANGO
            </h3>

            <label class="opcao-grande">

                <input
                    type="radio"
                    name="tipoFrango"
                    value="Coxinha"
                    onchange="atualizarPrecoModal()"
                >

                Coxinha

            </label>

            <label class="opcao-grande">

                <input
                    type="radio"
                    name="tipoFrango"
                    value="Sassami"
                    onchange="atualizarPrecoModal()"
                >

                Sassami

            </label>

            <label class="opcao-grande">

                <input
                    type="radio"
                    name="tipoFrango"
                    value="Tulipa"
                    onchange="atualizarPrecoModal()"
                >

                Tulipa

                <span>
                    + R$ 10,00
                </span>

            </label>

    `;


    if (mostrarMisto) {

        html += `

            <label class="opcao-grande">

                <input
                    type="radio"
                    name="tipoFrango"
                    value="Misto"
                    onchange="mostrarMisto(); atualizarPrecoModal()"
                >

                Misto

                <span>
                    + R$ 5,00
                </span>

            </label>


            <div
                id="areaMisto"
                style="display:none;"
            >

                <h4>
                    Escolha 2 tipos para o Misto:
                </h4>


                <label class="opcao-grande">

                    <input
                        type="checkbox"
                        name="mistoTipo"
                        value="Coxinha"
                        onchange="limitarMisto()"
                    >

                    Coxinha

                </label>


                <label class="opcao-grande">

                    <input
                        type="checkbox"
                        name="mistoTipo"
                        value="Sassami"
                        onchange="limitarMisto()"
                    >

                    Sassami

                </label>


                <label class="opcao-grande">

                    <input
                        type="checkbox"
                        name="mistoTipo"
                        value="Tulipa"
                        onchange="limitarMisto()"
                    >

                    Tulipa

                </label>

            </div>

        `;

    }


    html += `</div>`;

    return html;

}


// ============================================================
// ACOMPANHAMENTO
// ============================================================

function criarEscolhaAcompanhamento() {

    return `

        <div class="opcao-secao">

            <h3>
                🍟 ESCOLHA O ACOMPANHAMENTO
            </h3>


            <label class="opcao-grande">

                <input
                    type="radio"
                    name="acompanhamento"
                    value="Batata frita"
                >

                Batata frita

            </label>


            <label class="opcao-grande">

                <input
                    type="radio"
                    name="acompanhamento"
                    value="Polenta frita"
                >

                Polenta frita

            </label>

        </div>

    `;

}


// ============================================================
// MISTO
// ============================================================

function mostrarMisto() {

    const selecionado =
        document.querySelector(
            'input[name="tipoFrango"]:checked'
        );

    const area =
        document.getElementById("areaMisto");

    if (!area) return;

    if (
        selecionado &&
        selecionado.value === "Misto"
    ) {

        area.style.display = "block";

    } else {

        area.style.display = "none";

        document
            .querySelectorAll('input[name="mistoTipo"]')
            .forEach(input => {

                input.checked = false;

            });

    }

}


function limitarMisto() {

    const selecionados =
        Array.from(
            document.querySelectorAll(
                'input[name="mistoTipo"]:checked'
            )
        );

    if (selecionados.length > 2) {

        selecionados[
            selecionados.length - 1
        ].checked = false;

    }

    atualizarPrecoModal();

}


// ============================================================
// ADICIONAIS
// ============================================================

function criarAdicionais() {

    const div =
        document.getElementById("adicionaisProduto");

    if (!div) return;

    div.innerHTML = `

        <div class="opcao-secao">

            <h3>
                ➕ ADICIONAIS
            </h3>

            ${

                adicionais.map((item, index) => `

                    <label class="opcao-grande">

                        <input
                            type="checkbox"
                            class="adicional-checkbox"
                            data-index="${index}"
                            value="${item[0]}"
                            onchange="atualizarPrecoModal()"
                        >

                        ${item[0]}

                        <span>
                            + R$ ${dinheiro(item[1])}
                        </span>

                    </label>

                `).join("")

            }

        </div>

    `;

}


function obterAdicionaisSelecionados() {

    return Array.from(
        document.querySelectorAll(
            ".adicional-checkbox:checked"
        )
    ).map(input => {

        const item =
            adicionais[
                Number(input.dataset.index)
            ];

        return {

            nome: item[0],
            preco: item[1]

        };

    });

}


// ============================================================
// PREÇO
// ============================================================

function obterAdicionalEscolha() {

    const selecionado =
        document.querySelector(
            'input[name="tipoFrango"]:checked'
        );

    if (!selecionado) return 0;

    if (
        selecionado.value === "Tulipa"
    ) {

        return 10;

    }

    if (
        selecionado.value === "Misto"
    ) {

        const tipos =
            Array.from(
                document.querySelectorAll(
                    'input[name="mistoTipo"]:checked'
                )
            ).map(input => input.value);

        if (
            tipos.includes("Tulipa")
        ) {

            return 10;

        }

        return 5;

    }

    return 0;

}


function atualizarPrecoModal() {

    if (!produtoAtual) return;

    let preco =
        produtoAtual.preco;

    preco +=
        obterAdicionalEscolha();

    obterAdicionaisSelecionados()
        .forEach(item => {

            preco += item.preco;

        });

    const elemento =
        document.getElementById("modalPreco");

    if (elemento) {

        elemento.textContent =
            dinheiro(preco);

    }

}


// ============================================================
// ADICIONAR AO CARRINHO
// ============================================================

function confirmarProduto() {

    if (!produtoAtual) return;

    let preco =
        produtoAtual.preco;

    const escolha =
        document.querySelector(
            'input[name="tipoFrango"]:checked'
        );

    let tipoFrango = "";

    let mistoTipos = [];


    if (escolha) {

        tipoFrango =
            escolha.value;


        if (
            tipoFrango === "Misto"
        ) {

            mistoTipos =
                Array.from(
                    document.querySelectorAll(
                        'input[name="mistoTipo"]:checked'
                    )
                ).map(input => input.value);


            if (
                mistoTipos.length !== 2
            ) {

                alert(
                    "No Misto, escolha exatamente 2 tipos de frango."
                );

                return;

            }


            if (
                mistoTipos.includes("Tulipa")
            ) {

                preco += 10;

            } else {

                preco += 5;

            }

        }


        else if (
            tipoFrango === "Tulipa"
        ) {

            preco += 10;

        }

    }


    const acompanhamento =
        document.querySelector(
            'input[name="acompanhamento"]:checked'
        )?.value || "";


    const ads =
        obterAdicionaisSelecionados();


    ads.forEach(item => {

        preco += item.preco;

    });


    carrinho.push({

        nome: produtoAtual.nome,

        preco: preco,

        quantidade: quantidadeAtual,

        tipoFrango: tipoFrango,

        mistoTipos: mistoTipos,

        acompanhamento: acompanhamento,

        adicionais: ads.map(
            item => item.nome
        )

    });


    atualizarCarrinho();

    fecharProduto();

    alert(
        "Produto adicionado ao carrinho!"
    );

}


// ============================================================
// CARRINHO
// ============================================================

function calcularSubtotal() {

    return carrinho.reduce(
        (total, item) =>
            total +
            item.preco *
            item.quantidade,
        0
    );

}


function atualizarCarrinho() {

    const quantidade =
        carrinho.reduce(
            (total, item) =>
                total + item.quantidade,
            0
        );


    const contador =
        document.getElementById(
            "quantidadeCarrinho"
        );


    if (contador) {

        contador.textContent =
            quantidade;

    }


    const lista =
        document.getElementById(
            "listaCarrinho"
        );


    if (!lista) return;


    if (
        carrinho.length === 0
    ) {

        lista.innerHTML = `

            <p class="carrinho-vazio">
                Seu carrinho está vazio.
            </p>

        `;

    }

    else {

        lista.innerHTML = "";


        carrinho.forEach(
            (item, index) => {

                const detalhes = [];


                if (
                    item.tipoFrango === "Misto"
                ) {

                    detalhes.push(
                        `Misto: ${item.mistoTipos.join(" + ")}`
                    );

                }

                else if (
                    item.tipoFrango
                ) {

                    detalhes.push(
                        item.tipoFrango
                    );

                }


                if (
                    item.acompanhamento
                ) {

                    detalhes.push(
                        item.acompanhamento
                    );

                }


                if (
                    item.adicionais.length
                ) {

                    detalhes.push(
                        "Adicionais: " +
                        item.adicionais.join(", ")
                    );

                }


                const div =
                    document.createElement("div");


                div.className =
                    "item-carrinho";


                div.innerHTML = `

                    <div class="item-carrinho-info">

                        <h3>
                            ${item.quantidade}x
                            ${item.nome}
                        </h3>

                        ${
                            detalhes.length
                            ? `<p>${detalhes.join(" • ")}</p>`
                            : ""
                        }

                        <strong>
                            R$
                            ${dinheiro(
                                item.preco *
                                item.quantidade
                            )}
                        </strong>

                    </div>


                    <button
                        class="btn-remover"
                        onclick="removerDoCarrinho(${index})"
                    >
                        🗑️
                    </button>

                `;


                lista.appendChild(div);

            }
        );

    }


    atualizarTotais();

}


function removerDoCarrinho(index) {

    if (
        index < 0 ||
        index >= carrinho.length
    ) {

        return;

    }


    carrinho.splice(index, 1);

    atualizarCarrinho();

}


// ============================================================
// ABRIR / FECHAR CARRINHO
// ============================================================

function abrirCarrinho() {

    atualizarCarrinho();

    const modal =
        document.getElementById(
            "modalCarrinho"
        );


    if (modal) {

        modal.classList.add("aberto");

        modal.style.display =
            "flex";

    }

}


function fecharCarrinho() {

    const modal =
        document.getElementById(
            "modalCarrinho"
        );


    if (modal) {

        modal.classList.remove("aberto");

        modal.style.display =
            "none";

    }

}


// ============================================================
// ENTREGA / RETIRADA
// ============================================================

function obterTipoPedido() {

    return document.querySelector(
        'input[name="tipoPedido"]:checked'
    )?.value || "";

}


function mudarTipoPedido() {

    const tipo =
        obterTipoPedido();


    const dadosEntrega =
        document.getElementById(
            "dadosEntrega"
        );


    if (dadosEntrega) {

        dadosEntrega.style.display =
            tipo === "Entrega"
            ? "block"
            : "none";

    }


    atualizarTotais();

}


function atualizarTotais() {

    const subtotal =
        calcularSubtotal();


    const taxa =
        obterTipoPedido() === "Entrega"
        ? TAXA_ENTREGA
        : 0;


    const total =
        subtotal + taxa;


    const subtotalEl =
        document.getElementById(
            "subtotal"
        );


    const taxaEl =
        document.getElementById(
            "taxaEntrega"
        );


    const totalEl =
        document.getElementById(
            "total"
        );


    if (subtotalEl) {

        subtotalEl.textContent =
            `R$ ${dinheiro(subtotal)}`;

    }


    if (taxaEl) {

        taxaEl.textContent =
            `R$ ${dinheiro(taxa)}`;

    }


    if (totalEl) {

        totalEl.textContent =
            `R$ ${dinheiro(total)}`;

    }

}


// ============================================================
// PAGAMENTO
// ============================================================

function mostrarPagamento() {

    const pagamento =
        document.querySelector(
            'input[name="pagamento"]:checked'
        )?.value || "";


    const div =
        document.getElementById(
            "dadosPagamento"
        );


    if (!div) return;


    div.innerHTML = "";


    if (
        pagamento === "PIX"
    ) {

        div.innerHTML = `

            <div class="pix-box">

                <h3>
                    🟢 PAGAMENTO VIA PIX
                </h3>

                <p>
                    Chave PIX:
                </p>

                <strong>
                    ${PIX}
                </strong>

                <button
                    type="button"
                    onclick="copiarPix()"
                >
                    📋 COPIAR CHAVE PIX
                </button>

            </div>

        `;

    }


    else if (
        pagamento === "Dinheiro"
    ) {

        div.innerHTML = `

            <div class="troco-box">

                <h3>
                    💵 TROCO
                </h3>


                <label class="opcao-grande">

                    <input
                        type="radio"
                        name="precisaTroco"
                        value="Não"
                        onchange="mostrarCampoTroco()"
                    >

                    Não precisa de troco

                </label>


                <label class="opcao-grande">

                    <input
                        type="radio"
                        name="precisaTroco"
                        value="Sim"
                        onchange="mostrarCampoTroco()"
                    >

                    Precisa de troco

                </label>


                <div
                    id="campoTroco"
                    style="display:none;"
                >

                    <label>
                        Troco para quanto?
                    </label>

                    <input
                        type="number"
                        id="trocoPara"
                        min="0"
                        step="0.01"
                        placeholder="Ex.: 50,00"
                    >

                </div>

            </div>

        `;

    }

}


function mostrarCampoTroco() {

    const valor =
        document.querySelector(
            'input[name="precisaTroco"]:checked'
        )?.value;


    const campo =
        document.getElementById(
            "campoTroco"
        );


    if (!campo) return;


    campo.style.display =
        valor === "Sim"
        ? "block"
        : "none";

}


async function copiarPix() {

    try {

        await navigator.clipboard.writeText(
            PIX
        );

        alert(
            "Chave PIX copiada!"
        );

    }

    catch (erro) {

        alert(
            `Chave PIX: ${PIX}`
        );

    }

}


// ============================================================
// WHATSAPP
// ============================================================

function enviarWhatsApp() {

    if (
        carrinho.length === 0
    ) {

        alert(
            "Seu carrinho está vazio."
        );

        return;

    }


    const nome =
        document.getElementById(
            "nomeCliente"
        )?.value.trim() || "";


    const tipo =
        obterTipoPedido();


    const observacao =
        document.getElementById(
            "observacaoCliente"
        )?.value.trim() || "";


    if (!nome) {

        alert(
            "Digite seu nome."
        );

        return;

    }


    if (!tipo) {

        alert(
            "Escolha entre Entrega ou Retirada."
        );

        return;

    }


    let rua = "";
    let bairro = "";


    if (
        tipo === "Entrega"
    ) {

        rua =
            document.getElementById(
                "ruaCliente"
            )?.value.trim() || "";


        bairro =
            document.getElementById(
                "bairroCliente"
            )?.value.trim() || "";


        if (!rua) {

            alert(
                "Digite sua rua e número."
            );

            return;

        }


        if (!bairro) {

            alert(
                "Digite seu bairro."
            );

            return;

        }

    }


    const pagamento =
        document.querySelector(
            'input[name="pagamento"]:checked'
        )?.value || "";


    if (!pagamento) {

        alert(
            "Escolha a forma de pagamento."
        );

        return;

    }


    let mensagem =
        "🍗 *BENVENUTO CHICKEN* 🍗\n" +
        "━━━━━━━━━━━━━━━━━━━━\n" +
        "*NOVO PEDIDO*\n\n";


    mensagem +=
        `👤 *Nome:* ${nome}\n`;


    mensagem +=
        `📦 *Pedido:* ${tipo}\n`;


    if (
        tipo === "Entrega"
    ) {

        mensagem +=
            `📍 *Endereço:* ${rua}\n`;

        mensagem +=
            `🏘️ *Bairro:* ${bairro}\n`;

    }


    mensagem +=
        "\n🛒 *ITENS DO PEDIDO*\n";


    carrinho.forEach(item => {

        mensagem +=
            `\n• ${item.quantidade}x ${item.nome}`;


        if (
            item.tipoFrango === "Misto"
        ) {

            mensagem +=
                ` — Misto (${item.mistoTipos.join(" + ")})`;

        }

        else if (
            item.tipoFrango
        ) {

            mensagem +=
                ` — ${item.tipoFrango}`;

        }


        if (
            item.acompanhamento
        ) {

            mensagem +=
                ` — ${item.acompanhamento}`;

        }


        if (
            item.adicionais.length
        ) {

            mensagem +=
                ` — Adicionais: ${item.adicionais.join(", ")}`;

        }


        mensagem +=
            ` — R$ ${dinheiro(
                item.preco *
                item.quantidade
            )}\n`;

    });


    const subtotal =
        calcularSubtotal();


    const taxa =
        tipo === "Entrega"
        ? TAXA_ENTREGA
        : 0;


    const total =
        subtotal + taxa;


    mensagem +=
        "\n━━━━━━━━━━━━━━━━━━━━\n";


    mensagem +=
        `💰 *Subtotal:* R$ ${dinheiro(subtotal)}\n`;


    if (taxa > 0) {

        mensagem +=
            `🚚 *Entrega:* R$ ${dinheiro(taxa)}\n`;

    }


    mensagem +=
        `💵 *TOTAL:* R$ ${dinheiro(total)}\n`;


    mensagem +=
        `💳 *Pagamento:* ${pagamento}\n`;


    if (
        pagamento === "Dinheiro"
    ) {

        const troco =
            document.querySelector(
                'input[name="precisaTroco"]:checked'
            )?.value || "";


        if (!troco) {

            alert(
                "Informe se precisa de troco."
            );

            return;

        }


        mensagem +=
            `💵 *Troco:* ${troco}\n`;


        if (
            troco === "Sim"
        ) {

            const valor =
                document.getElementById(
                    "trocoPara"
                )?.value || "";


            if (!valor) {

                alert(
                    "Informe para quanto precisa de troco."
                );

                return;

            }


            mensagem +=
                `💵 *Troco para:* R$ ${dinheiro(
                    Number(valor)
                )}\n`;

        }

    }


    if (
        pagamento === "PIX"
    ) {

        mensagem +=
            `🟢 *Chave PIX:* ${PIX}\n`;

    }


    if (
        observacao
    ) {

        mensagem +=
            `\n📝 *Observação:* ${observacao}\n`;

    }


    mensagem +=
        "\nObrigado! ❤️";


    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            mensagem
        )}`;


    window.open(
        url,
        "_blank"
    );

}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(".modal")
            .forEach(modal => {

                modal.style.display =
                    "none";

            });


        atualizarCarrinho();

    }
);
