// ============================================
// CONFIGURAÇÕES
// ============================================

const SUPABASE_URL = "https://wtphyvfqmwferggidzgt.supabase.co";
const SUPABASE_KEY = "sb_publishable_wdlAJqX0eGoc3XK-Hvg8Aw_f54EszKl";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const WHATSAPP = "5544997323438";
const PIX = "64213198000174";
const TAXA_ENTREGA = 4;


// ============================================
// VARIÁVEIS
// ============================================

let carrinho = [];
let tipoEntrega = "";
let formaPagamento = "";
let trocoPara = "";


// ============================================
// CARDÁPIO
// ============================================

const cardapio = {

    lanches: [

        {
            nome: "X-Burguer",
            descricao: "Pão, hambúrguer, queijo e molho de alho.",
            preco: 19
        },

        {
            nome: "Pop Chicken",
            descricao: "Pão, Sassami, catupiry e molho de alho.",
            preco: 22
        },

        {
            nome: "Chicken",
            descricao: "Pão, Sassami, alface, tomate, cebola e molho de alho.",
            preco: 26
        },

        {
            nome: "X-Calabresa",
            descricao: "Pão, molho de alho, queijo, calabresa, hambúrguer, alface, tomate e cebola.",
            preco: 27
        },

        {
            nome: "X-Bacon",
            descricao: "Pão, muçarela, hambúrguer, creme de alho, bacon e catupiry.",
            preco: 27
        },

        {
            nome: "X-Salada",
            descricao: "Pão, hambúrguer, molho de alho, alface, tomate e cebola.",
            preco: 25
        },

        {
            nome: "X-Rings",
            descricao: "Pão, hambúrguer, 3 anéis de cebola, muçarela, alface, cebola e molho de alho.",
            preco: 27
        },

        {
            nome: "Especial Duplo Cheddar",
            descricao: "Pão, 2 hambúrgueres, cheddar, bacon, molho de alho e cebola caramelizada.",
            preco: 37
        },

        {
            nome: "Duplo Cheddar",
            descricao: "Pão, cheddar, 2 hambúrgueres, bacon e molho de alho.",
            preco: 33
        },

        {
            nome: "Americano",
            descricao: "Pão, tomate, alface, cebola, pepino, Sassami, cheddar e molho de alho.",
            preco: 28
        },

        // COMBOS DE LANCHE

        {
            nome: "Combo Individual de Lanche",
            descricao: "1 Chicken + 300 g de batata + refrigerante 220 ml.",
            preco: 40,
            tipo: "combo-lanche"
        },

        {
            nome: "Combo Duo de Lanche",
            descricao: "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml.",
            preco: 72,
            tipo: "combo-lanche"
        },

        {
            nome: "Combo Trio de Lanche",
            descricao: "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml.",
            preco: 80,
            tipo: "combo-lanche"
        },

        {
            nome: "Combo Família de Lanche",
            descricao: "5 Chickens + 1 kg de batata + refrigerante 2 L.",
            preco: 110,
            tipo: "combo-lanche"
        },

        {
            nome: "Combo Especial Duplo Cheddar — Duo",
            descricao: "2 Especial Duplo Cheddar + 600 g de batata + 2 refrigerantes 220 ml.",
            preco: 84,
            tipo: "combo-lanche"
        },

        {
            nome: "Combo Especial Duplo Cheddar — Individual",
            descricao: "1 Especial Duplo Cheddar + 300 g de batata + refrigerante 220 ml.",
            preco: 47,
            tipo: "combo-lanche"
        },

        {
            nome: "Combo Especial Lanche",
            descricao: "2 Chickens + 500 g de batata bacon cheddar + 2 refrigerantes 220 ml.",
            preco: 80,
            tipo: "combo-lanche"
        },

        {
            nome: "Combo Individual Chicken",
            descricao: "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml.",
            preco: 40,
            tipo: "combo-lanche"
        }
    ],


    tulipa: [

        {
            nome: "Balde de Tulipa — 8 unidades",
            descricao: "Balde com 8 unidades de Tulipa.",
            preco: 26
        },

        {
            nome: "Balde de Tulipa — P",
            descricao: "Balde de Tulipa tamanho P.",
            preco: 54
        },

        {
            nome: "Balde de Tulipa — M",
            descricao: "Balde de Tulipa tamanho M.",
            preco: 64
        },

        {
            nome: "Balde de Tulipa — G",
            descricao: "Balde de Tulipa tamanho G.",
            preco: 74
        },

        {
            nome: "Balde de Tulipa Fritas — P",
            descricao: "Tulipas acompanhadas de Batata Frita ou Polenta Frita.",
            preco: 70,
            fritas: true
        },

        {
            nome: "Balde de Tulipa Fritas — M",
            descricao: "Tulipas acompanhadas de Batata Frita ou Polenta Frita.",
            preco: 80,
            fritas: true
        }
    ],


    combos: [

        {
            nome: "Combo 1",
            descricao: "1 kg de frango + 1 kg de batata com bacon e cheddar.",
            preco: 96
        },

        {
            nome: "Combo 2 — Misto",
            descricao: "1 kg de coxinha e Sassami + 1 kg de polenta + 500 g de calabresa acebolada.",
            preco: 130
        },

        {
            nome: "Combo 3",
            descricao: "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 litros.",
            preco: 120
        },

        {
            nome: "Combo 4",
            descricao: "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 litros.",
            preco: 65
        },

        {
            nome: "Combo 5",
            descricao: "1 kg de batata com bacon e cheddar.",
            preco: 85
        },

        {
            nome: "Combo 6",
            descricao: "1 kg de mandioca + 500 g de calabresa.",
            preco: 70
        }
    ],


    bebidas: [

        {
            nome: "Coca-Cola 350 ml",
            preco: 6
        },

        {
            nome: "Coca-Cola Zero 350 ml",
            preco: 6
        },

        {
            nome: "Fanta Guaraná 350 ml",
            preco: 6
        },

        {
            nome: "Sprite 350 ml",
            preco: 6
        },

        {
            nome: "Fanta Laranja 350 ml",
            preco: 6
        },

        {
            nome: "Coca-Cola 600 ml",
            preco: 9
        },

        {
            nome: "Coca-Cola Zero 600 ml",
            preco: 9
        },

        {
            nome: "Fanta Guaraná 600 ml",
            preco: 9
        },

        {
            nome: "Sprite 600 ml",
            preco: 9
        },

        {
            nome: "Fanta Laranja 600 ml",
            preco: 9
        },

        {
            nome: "Coca-Cola 2 L",
            preco: 15
        },

        {
            nome: "Coca-Cola Zero 2 L",
            preco: 15
        },

        {
            nome: "Guaraná 2 L",
            preco: 14
        },

        {
            nome: "Fanta 2 L",
            preco: 14
        },

        {
            nome: "Sprite 2 L",
            preco: 14
        },

        {
            nome: "Água com gás",
            preco: 3.50
        }
    ],


    porcoes: [

        {
            nome: "Salada Americana",
            descricao: "Alface americano, tomate cereja, frango crocante e molho especial.",
            preco: 28
        },

        {
            nome: "Batata Apimentada",
            descricao: "Batata acompanhada de molho de pimenta.",
            preco: 38
        },

        {
            nome: "Batata 300 g",
            preco: 19
        },

        {
            nome: "Batata 500 g",
            preco: 30
        },

        {
            nome: "Batata Bacon + Cheddar 500 g",
            preco: 36
        },

        {
            nome: "Polenta 300 g",
            preco: 12
        },

        {
            nome: "Polenta 500 g",
            preco: 17
        },

        {
            nome: "Anel de Cebola 300 g",
            preco: 20
        },

        {
            nome: "Anel de Cebola 500 g",
            preco: 35
        }
    ],


    molhos: [

        {
            nome: "Cheddar",
            preco: 6
        },

        {
            nome: "Pimenta",
            preco: 6
        },

        {
            nome: "Mostarda e Mel",
            preco: 6
        },

        {
            nome: "Abacaxi com Pimenta",
            preco: 6
        },

        {
            nome: "Creme de Alho",
            preco: 6
        },

        {
            nome: "Barbecue",
            preco: 5
        },

        {
            nome: "Ketchup",
            preco: 5
        }
    ]
};


// ============================================
// ADICIONAIS
// SOMENTE PARA OS 10 LANCHES INDIVIDUAIS
// ============================================

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


// ============================================
// FORMATAÇÃO
// ============================================

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


// ============================================
// ABRIR CATEGORIA
// ============================================

function abrirCategoria(nome) {

    const categorias = document.getElementById("categorias");
    const produtos = document.getElementById("produtos");

    if (categorias) {
        categorias.style.display = "none";
    }

    if (produtos) {
        produtos.style.display = "block";
    }

    mostrarProdutos(nome);
}


// ============================================
// VOLTAR PARA CATEGORIAS
// ============================================

function voltarCategorias() {

    const categorias = document.getElementById("categorias");
    const produtos = document.getElementById("produtos");

    if (produtos) {
        produtos.style.display = "none";
    }

    if (categorias) {
        categorias.style.display = "block";
    }
}


// ============================================
// MOSTRAR PRODUTOS
// ============================================

function mostrarProdutos(categoria) {

    const container = document.getElementById("lista-produtos");

    if (!container) return;

    container.innerHTML = "";

    const produtos = cardapio[categoria];

    if (!produtos) return;

    produtos.forEach((produto, index) => {

        const div = document.createElement("div");

        div.className = "produto";

        div.innerHTML = `

            <div class="produto-info">

                <h3>${produto.nome}</h3>

                ${
                    produto.descricao
                    ? `<p>${produto.descricao}</p>`
                    : ""
                }

                <strong>
                    ${formatarPreco(produto.preco)}
                </strong>

            </div>

            <button
                class="btn-adicionar"
                onclick="adicionarProduto('${categoria}', ${index})"
            >
                + ADICIONAR
            </button>

        `;

        container.appendChild(div);
    });
}


// ============================================
// ADICIONAR PRODUTO
// ============================================

function adicionarProduto(categoria, index) {

    const produto = cardapio[categoria][index];

    if (!produto) return;

    // Lanches individuais recebem adicionais
    if (
        categoria === "lanches" &&
        nomesDosLanches.includes(produto.nome)
    ) {

        abrirAdicionais(produto);

        return;
    }

    // Balde de Tulipa fritas
    if (produto.fritas) {

        abrirEscolhaFritas(produto);

        return;
    }

    adicionarAoCarrinho(
        produto.nome,
        produto.preco
    );
}


// ============================================
// ADICIONAIS DOS LANCHES
// ============================================

function abrirAdicionais(produto) {

    let html = `
        <div class="modal-conteudo">

            <h2>${produto.nome}</h2>

            <p>Deseja adicionar algum adicional?</p>

            <div class="lista-adicionais">
    `;

    adicionais.forEach((adicional, index) => {

        html += `
            <label class="adicional-item">

                <input
                    type="checkbox"
                    id="adicional-${index}"
                    value="${index}"
                >

                <span>
                    ${adicional[0]}
                    — ${formatarPreco(adicional[1])}
                </span>

            </label>
        `;
    });

    html += `

            </div>

            <button
                class="btn-confirmar"
                onclick="confirmarAdicionais('${produto.nome}', ${produto.preco})"
            >
                ADICIONAR AO CARRINHO
            </button>

            <button
                class="btn-cancelar"
                onclick="fecharModal()"
            >
                CANCELAR
            </button>

        </div>
    `;

    abrirModal(html);
}


// ============================================
// CONFIRMAR ADICIONAIS
// ============================================

function confirmarAdicionais(nome, precoBase) {

    const escolhidos = [];

    let total = precoBase;

    adicionais.forEach((adicional, index) => {

        const checkbox =
            document.getElementById(`adicional-${index}`);

        if (
            checkbox &&
            checkbox.checked
        ) {

            escolhidos.push(adicional[0]);

            total += adicional[1];
        }
    });

    adicionarAoCarrinho(
        nome,
        total,
        escolhidos
    );

    fecharModal();
}


// ============================================
// BALDE FRITAS
// ============================================

function abrirEscolhaFritas(produto) {

    const html = `

        <div class="modal-conteudo">

            <h2>${produto.nome}</h2>

            <p>Escolha o acompanhamento:</p>

            <button
                class="opcao-modal"
                onclick="confirmarFritas('${produto.nome}', ${produto.preco}, 'Batata Frita')"
            >
                🍟 BATATA FRITA
            </button>

            <button
                class="opcao-modal"
                onclick="confirmarFritas('${produto.nome}', ${produto.preco}, 'Polenta Frita')"
            >
                🥔 POLENTA FRITA
            </button>

            <button
                class="btn-cancelar"
                onclick="fecharModal()"
            >
                CANCELAR
            </button>

        </div>
    `;

    abrirModal(html);
}


function confirmarFritas(
    nome,
    preco,
    acompanhamento
) {

    adicionarAoCarrinho(
        nome,
        preco,
        [acompanhamento]
    );

    fecharModal();
}


// ============================================
// ADICIONAR AO CARRINHO
// ============================================

function adicionarAoCarrinho(
    nome,
    preco,
    extras = []
) {

    carrinho.push({
        nome: nome,
        preco: preco,
        extras: extras
    });

    atualizarCarrinho();

    mostrarMensagem(
        `${nome} foi adicionado ao carrinho!`
    );
}


// ============================================
// ATUALIZAR CARRINHO
// ============================================

function atualizarCarrinho() {

    const quantidade =
        document.getElementById("quantidade-carrinho");

    const total =
        document.getElementById("total-carrinho");

    if (quantidade) {
        quantidade.textContent =
            carrinho.length;
    }

    if (total) {

        let valor =
            carrinho.reduce(
                (soma, item) =>
                    soma + item.preco,
                0
            );

        if (tipoEntrega === "entrega") {
            valor += TAXA_ENTREGA;
        }

        total.textContent =
            formatarPreco(valor);
    }
}


// ============================================
// ABRIR CARRINHO
// ============================================

function abrirCarrinho() {

    const carrinhoDiv =
        document.getElementById("carrinho");

    if (!carrinhoDiv) return;

    carrinhoDiv.style.display = "block";

    renderizarCarrinho();
}


// ============================================
// FECHAR CARRINHO
// ============================================

function fecharCarrinho() {

    const carrinhoDiv =
        document.getElementById("carrinho");

    if (carrinhoDiv) {
        carrinhoDiv.style.display = "none";
    }
}


// ============================================
// RENDERIZAR CARRINHO
// ============================================

function renderizarCarrinho() {

    const lista =
        document.getElementById("lista-carrinho");

    if (!lista) return;

    lista.innerHTML = "";

    carrinho.forEach((item, index) => {

        const div =
            document.createElement("div");

        div.className = "item-carrinho";

        div.innerHTML = `

            <div>

                <strong>${item.nome}</strong>

                ${
                    item.extras &&
                    item.extras.length
                    ? `
                        <small>
                            ${item.extras.join(", ")}
                        </small>
                    `
                    : ""
                }

                <span>
                    ${formatarPreco(item.preco)}
                </span>

            </div>

            <button
                onclick="removerItem(${index})"
            >
                🗑️
            </button>

        `;

        lista.appendChild(div);
    });

    atualizarResumoCarrinho();
}


// ============================================
// REMOVER ITEM
// ============================================

function removerItem(index) {

    carrinho.splice(index, 1);

    atualizarCarrinho();

    renderizarCarrinho();
}


// ============================================
// RESUMO DO CARRINHO
// ============================================

function atualizarResumoCarrinho() {

    const subtotal =
        carrinho.reduce(
            (soma, item) =>
                soma + item.preco,
            0
        );

    let taxa = 0;

    if (tipoEntrega === "entrega") {
        taxa = TAXA_ENTREGA;
    }

    const total =
        subtotal + taxa;

    const elementoSubtotal =
        document.getElementById("subtotal");

    const elementoTaxa =
        document.getElementById("taxa-entrega");

    const elementoTotal =
        document.getElementById("total-final");

    if (elementoSubtotal) {
        elementoSubtotal.textContent =
            formatarPreco(subtotal);
    }

    if (elementoTaxa) {
        elementoTaxa.textContent =
            formatarPreco(taxa);
    }

    if (elementoTotal) {
        elementoTotal.textContent =
            formatarPreco(total);
    }
}


// ============================================
// ENTREGA / RETIRADA
// ============================================

function selecionarEntrega(tipo, botao) {

    tipoEntrega = tipo;

    document
        .querySelectorAll(".opcao-entrega")
        .forEach(btn => {
            btn.classList.remove("selecionado");
        });

    if (botao) {
        botao.classList.add("selecionado");
    }

    const endereco =
        document.getElementById("endereco");

    if (endereco) {

        if (tipo === "entrega") {
            endereco.style.display = "block";
        } else {
            endereco.style.display = "none";
        }
    }

    atualizarCarrinho();
    atualizarResumoCarrinho();
}


// ============================================
// PAGAMENTO
// ============================================

function selecionarPagamento(
    pagamento,
    botao
) {

    formaPagamento = pagamento;

    document
        .querySelectorAll(".opcao-pagamento")
        .forEach(btn => {
            btn.classList.remove("selecionado");
        });

    if (botao) {
        botao.classList.add("selecionado");
    }

    const dinheiro =
        document.getElementById("campo-troco");

    const pix =
        document.getElementById("dados-pix");

    if (dinheiro) {

        if (pagamento === "Dinheiro") {
            dinheiro.style.display = "block";
        } else {
            dinheiro.style.display = "none";
        }
    }

    if (pix) {

        if (pagamento === "PIX") {
            pix.style.display = "block";

            const chave =
                document.getElementById("chave-pix");

            if (chave) {
                chave.textContent = PIX;
            }

        } else {

            pix.style.display = "none";
        }
    }
}


// ============================================
// TROCO
// ============================================

function definirTroco(valor) {

    trocoPara = valor;
}


// ============================================
// SALVAR PEDIDO NO SUPABASE
// ============================================

async function salvarPedidoNoSupabase(
    dadosPedido
) {

    try {

        console.log(
            "Enviando pedido para o Supabase..."
        );

        const {
            data,
            error
        } = await supabaseClient
            .from("Pedidos")
            .insert([dadosPedido])
            .select();

        if (error) {

            console.error(
                "Erro do Supabase:",
                error
            );

            alert(
                "Não foi possível salvar o pedido. " +
                "Verifique sua conexão e tente novamente."
            );

            return false;
        }

        console.log(
            "Pedido salvo com sucesso:",
            data
        );

        return true;

    } catch (erro) {

        console.error(
            "Erro ao salvar pedido:",
            erro
        );

        alert(
            "Ocorreu um erro ao salvar o pedido."
        );

        return false;
    }
}


// ============================================
// ENVIAR PEDIDO
// ============================================

async function enviarPedido() {

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio!"
        );

        return;
    }


    if (!tipoEntrega) {

        alert(
            "Escolha entre Retirada ou Entrega."
        );

        return;
    }


    if (!formaPagamento) {

        alert(
            "Escolha a forma de pagamento."
        );

        return;
    }


    const nomeInput =
        document.getElementById("nome");

    const ruaInput =
        document.getElementById("rua");

    const bairroInput =
        document.getElementById("bairro");

    const observacaoInput =
        document.getElementById("observacao");


    const nome =
        nomeInput
        ? nomeInput.value.trim()
        : "";


    const rua =
        ruaInput
        ? ruaInput.value.trim()
        : "";


    const bairro =
        bairroInput
        ? bairroInput.value.trim()
        : "";


    const observacao =
        observacaoInput
        ? observacaoInput.value.trim()
        : "";


    if (!nome) {

        alert(
            "Digite seu nome."
        );

        return;
    }


    if (
        tipoEntrega === "entrega" &&
        (!rua || !bairro)
    ) {

        alert(
            "Informe a rua e o bairro para a entrega."
        );

        return;
    }


    // ----------------------------------------
    // TOTAL
    // ----------------------------------------

    const subtotal =
        carrinho.reduce(
            (soma, item) =>
                soma + item.preco,
            0
        );

    const taxa =
        tipoEntrega === "entrega"
        ? TAXA_ENTREGA
        : 0;

    const total =
        subtotal + taxa;


    // ----------------------------------------
    // ITENS PARA O BANCO
    // ----------------------------------------

    const itensBanco =
        carrinho.map(item => {

            let texto =
                item.nome;

            if (
                item.extras &&
                item.extras.length
            ) {

                texto +=
                    " | Adicionais: " +
                    item.extras.join(", ");
            }

            return texto;
        }).join(" | ");


    // ----------------------------------------
    // DADOS DO PEDIDO
    // ----------------------------------------

    const pedidoBanco = {

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
                trocoPara
                ? trocoPara
                : "Não precisa"
            )
            : "Não se aplica",

        Itens:
            itensBanco,

        Total:
            total,

        Data:
            new Date().toISOString()
    };


    // ----------------------------------------
    // SALVAR NO SUPABASE
    // ----------------------------------------

    const pedidoSalvo =
        await salvarPedidoNoSupabase(
            pedidoBanco
        );


    if (!pedidoSalvo) {

        return;
    }


    // ----------------------------------------
    // MONTAR MENSAGEM DO WHATSAPP
    // ----------------------------------------

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


    if (tipoEntrega === "entrega") {

        mensagem +=
            "\n📍 *Rua:* " +
            rua;

        mensagem +=
            "\n🏘️ *Bairro:* " +
            bairro;
    }


    mensagem +=
        "\n\n🛒 *PEDIDO:*";


    carrinho.forEach(item => {

        mensagem +=
            "\n• " +
            item.nome +
            " — " +
            formatarPreco(item.preco);

        if (
            item.extras &&
            item.extras.length
        ) {

            mensagem +=
                "\n  + " +
                item.extras.join(", ");
        }
    });


    mensagem +=
        "\n\n💰 *Subtotal:* " +
        formatarPreco(subtotal);


    if (tipoEntrega === "entrega") {

        mensagem +=
            "\n🚚 *Taxa de entrega:* " +
            formatarPreco(TAXA_ENTREGA);
    }


    mensagem +=
        "\n💵 *TOTAL:* " +
        formatarPreco(total);


    mensagem +=
        "\n\n💳 *Pagamento:* " +
        formaPagamento;


    if (
        formaPagamento === "Dinheiro"
    ) {

        mensagem +=
            "\n💵 *Troco:* " +
            (
                trocoPara
                ? "Para " + trocoPara
                : "Não precisa"
            );
    }


    if (formaPagamento === "PIX") {

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


    // ----------------------------------------
    // ABRIR WHATSAPP
    // ----------------------------------------

    const url =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(mensagem);


    window.location.href = url;
}


// ============================================
// MODAL
// ============================================

function abrirModal(conteudo) {

    let modal =
        document.getElementById("modal");

    if (!modal) {

        modal =
            document.createElement("div");

        modal.id = "modal";

        modal.className = "modal";

        document.body.appendChild(modal);
    }

    modal.innerHTML = conteudo;

    modal.style.display = "flex";
}


function fecharModal() {

    const modal =
        document.getElementById("modal");

    if (modal) {

        modal.style.display = "none";

        modal.innerHTML = "";
    }
}


// ============================================
// MENSAGEM TEMPORÁRIA
// ============================================

function mostrarMensagem(texto) {

    const mensagem =
        document.createElement("div");

    mensagem.className =
        "mensagem-adicionado";

    mensagem.textContent =
        texto;

    document.body.appendChild(
        mensagem
    );

    setTimeout(() => {

        mensagem.remove();

    }, 2000);
}


// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        atualizarCarrinho();

        console.log(
            "Benvenuto Chicken carregado!"
        );

    }
);
