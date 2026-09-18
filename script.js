let carrinho = [];

let produtoAtual = null;
let categoriaAtual = "";
let quantidadeAtual = 1;


/* ================= DADOS DO CARDÁPIO ================= */

const dados = {

    lanches: {

        titulo: "🍔 LANCHES",

        produtos: [

            ["X-Burguer", 19, "Lanche artesanal com molho de alho."],
            ["Pop Chicken", 22, "Lanche de frango crocante."],
            ["Chicken", 26, "Lanche de frango especial."],
            ["X-Calabresa", 27, "Lanche com calabresa."],
            ["X-Bacon", 27, "Lanche com bacon."],
            ["X-Salada", 25, "Lanche completo com salada."],
            ["X-Rings", 27, "Lanche especial com anel de cebola."],
            ["Especial Duplo Cheddar", 37, "Lanche especial com duplo cheddar."],
            ["Duplo Cheddar", 33, "Lanche com duplo cheddar."],
            ["Americano", 28, "Lanche estilo americano."],

            /* COMBOS DE LANCHE AGORA ESTÃO AQUI */

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


    /* ================= BALDES ================= */

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


    /* ================= COMBOS ================= */

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


    /* ================= BEBIDAS ================= */

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


    /* ================= PORÇÕES ================= */

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


    /* ================= MOLHOS ================= */

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


/* ================= ADICIONAIS ================= */

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


/* ================= FORMATAÇÃO ================= */

function dinheiro(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


/* ================= NAVEGAÇÃO ================= */

function esconderTodasAsTelas() {

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });
}


function abrirCardapio() {

    esconderTodasAsTelas();

    document.getElementById("cardapio").classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function abrirCategoria(categoria) {

    categoriaAtual = categoria;

    esconderTodasAsTelas();

    document.getElementById("produtos").classList.add("ativa");

    document.getElementById("tituloCategoria").textContent =
        dados[categoria].titulo;

    const lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

    dados[categoria].produtos.forEach((produto, index) => {

        const div = document.createElement("div");

        div.className = "produto";

        div.innerHTML = `

            <h2>${produto[0]}</h2>

            ${
                produto[2]
                ? `<p>${produto[2]}</p>`
                : ""
            }

            <div class="produto-preco">
                ${dinheiro(produto[1])}
            </div>

            <button
                class="btn-produto"
                onclick="abrirProduto(${index})"
            >
                ADICIONAR
            </button>

        `;

        lista.appendChild(div);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function voltarCategorias() {

    esconderTodasAsTelas();

    document.getElementById("cardapio").classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= PRODUTO ================= */

function abrirProduto(index) {

    produtoAtual = dados[categoriaAtual].produtos[index];

    quantidadeAtual = 1;

    document.getElementById("modalTitulo").textContent =
        produtoAtual[0];

    document.getElementById("modalDescricao").textContent =
        produtoAtual[2];

    document.getElementById("quantidadeProduto").textContent =
        quantidadeAtual;

    const opcoes = document.getElementById("opcoesProduto");

    opcoes.innerHTML = "";


    /* ===== BALDES ===== */

    if (categoriaAtual === "baldes") {

        opcoes.innerHTML = `

            <div class="opcao-grupo">

                <h3>🍗 Tipo de frango</h3>

                <label>
                    <input
                        type="radio"
                        name="tipoFrango"
                        value="Coxinha"
                        data-adicional="0"
                    >
                    Coxinha
                </label>

                <label>
                    <input
                        type="radio"
                        name="tipoFrango"
                        value="Sassami"
                        data-adicional="0"
                    >
                    Sassami
                </label>

                <label>
                    <input
                        type="radio"
                        name="tipoFrango"
                        value="Tulipa"
                        data-adicional="10"
                    >
                    Tulipa <strong>(+ R$10)</strong>
                </label>

                <label>
                    <input
                        type="radio"
                        name="tipoFrango"
                        value="Misto"
                        data-adicional="5"
                        onchange="mostrarMisto()"
                    >
                    Misto <strong>(+ R$5)</strong>
                </label>

                <div id="mistoOpcoes"></div>

            </div>

        `;

        if (
            produtoAtual[0] === "Balde Fritas P" ||
            produtoAtual[0] === "Balde Fritas M"
        ) {

            opcoes.innerHTML += `

                <div class="opcao-grupo">

                    <h3>🍟 Acompanhamento</h3>

                    <label>
                        <input
                            type="radio"
                            name="acompanhamento"
                            value="Batata frita"
                        >
                        Batata frita
                    </label>

                    <label>
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
    }


    /* ===== COMBOS DE FRANGO ===== */

    if (
        categoriaAtual === "combos" &&
        (
            produtoAtual[0] === "Combo Individual de Frango" ||
            produtoAtual[0] === "Combo Duo de Frango" ||
            produtoAtual[0] === "Combo Família de Frango" ||
            produtoAtual[0] === "Combo 1" ||
            produtoAtual[0] === "Combo 3"
        )
    ) {

        opcoes.innerHTML = `

            <div class="opcao-grupo">

                <h3>🍗 Tipo de frango</h3>

                <label>
                    <input
                        type="radio"
                        name="tipoFrango"
                        value="Coxinha"
                        data-adicional="0"
                    >
                    Coxinha
                </label>

                <label>
                    <input
                        type="radio"
                        name="tipoFrango"
                        value="Sassami"
                        data-adicional="0"
                    >
                    Sassami
                </label>

                <label>
                    <input
                        type="radio"
                        name="tipoFrango"
                        value="Tulipa"
                        data-adicional="10"
                    >
                    Tulipa <strong>(+ R$10)</strong>
                </label>

                <label>
                    <input
                        type="radio"
                        name="tipoFrango"
                        value="Misto"
                        data-adicional="5"
                        onchange="mostrarMisto()"
                    >
                    Misto <strong>(+ R$5)</strong>
                </label>

                <div id="mistoOpcoes"></div>

            </div>

            <div class="opcao-grupo">

                <h3>🍟 Acompanhamento</h3>

                <label>
                    <input
                        type="radio"
                        name="acompanhamento"
                        value="Batata frita"
                    >
                    Batata frita
                </label>

                <label>
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


    /* ===== LANCHES ===== */

    if (categoriaAtual === "lanches") {

        const ehComboLanche =
            produtoAtual[0].includes("Combo");

        if (!ehComboLanche) {

            let html = `

                <div class="opcao-grupo">

                    <h3>➕ Adicionais</h3>

            `;

            adicionais.forEach((item, index) => {

                html += `

                    <label>

                        <input
                            type="checkbox"
                            name="adicional"
                            value="${index}"
                        >

                        ${item[0]} (+ ${dinheiro(item[1])})

                    </label>

                `;
            });

            html += `</div>`;

            opcoes.innerHTML = html;
        }
    }


    /* ===== COMBO 2 É FIXO ===== */

    if (
        categoriaAtual === "combos" &&
        produtoAtual[0] === "Combo 2 — Misto"
    ) {

        opcoes.innerHTML = `

            <div class="opcao-grupo">

                <h3>ℹ️ Informações</h3>

                <p>
                    Este combo já possui coxinha e Sassami
                    conforme a descrição do cardápio.
                </p>

            </div>

        `;
    }


    document
        .getElementById("modalProduto")
        .classList.add("aberto");
}


/* ================= MISTO ================= */

function mostrarMisto() {

    const escolhido =
        document.querySelector(
            'input[name="tipoFrango"]:checked'
        );

    const container =
        document.getElementById("mistoOpcoes");

    if (!escolhido || escolhido.value !== "Misto") {

        if (container) {
            container.innerHTML = "";
        }

        return;
    }

    container.innerHTML = `

        <div class="aviso-misto">

            Misto: <strong>+ R$5</strong><br>

            Se escolher Tulipa no Misto:
            <strong>+ R$10 no total</strong>

        </div>

        <div class="opcao-grupo">

            <h3>Escolha exatamente 2 tipos</h3>

            <label>
                <input
                    type="checkbox"
                    name="mistoTipo"
                    value="Coxinha"
                    onchange="limitarMisto()"
                >
                Coxinha
            </label>

            <label>
                <input
                    type="checkbox"
                    name="mistoTipo"
                    value="Sassami"
                    onchange="limitarMisto()"
                >
                Sassami
            </label>

            <label>
                <input
                    type="checkbox"
                    name="mistoTipo"
                    value="Tulipa"
                    onchange="limitarMisto()"
                >
                Tulipa <strong>(+ R$10 no total)</strong>
            </label>

        </div>

    `;
}


function limitarMisto() {

    const caixas =
        document.querySelectorAll(
            'input[name="mistoTipo"]'
        );

    const selecionados =
        [...caixas].filter(c => c.checked);

    if (selecionados.length >= 2) {

        caixas.forEach(c => {

            if (!c.checked) {
                c.disabled = true;
            }

        });

    } else {

        caixas.forEach(c => {
            c.disabled = false;
        });
    }
}


/* ================= QUANTIDADE ================= */

function alterarQuantidade(valor) {

    quantidadeAtual += valor;

    if (quantidadeAtual < 1) {
        quantidadeAtual = 1;
    }

    document.getElementById("quantidadeProduto").textContent =
        quantidadeAtual;
}


/* ================= CONFIRMAR PRODUTO ================= */

function confirmarProduto() {

    if (!produtoAtual) {
        return;
    }

    let adicionaisSelecionados = [];

    let adicionalValor = 0;

    let tipoFrango = "";

    let acompanhamento = "";

    let mistoTipos = [];


    /* ===== TIPO FRANGO ===== */

    const radioFrango =
        document.querySelector(
            'input[name="tipoFrango"]:checked'
        );

    if (radioFrango) {

        tipoFrango = radioFrango.value;

        if (tipoFrango === "Misto") {

            const caixas =
                document.querySelectorAll(
                    'input[name="mistoTipo"]:checked'
                );

            mistoTipos =
                [...caixas].map(c => c.value);

            if (mistoTipos.length !== 2) {

                alert(
                    "No Misto, escolha exatamente 2 tipos de frango."
                );

                return;
            }

            if (
                mistoTipos.includes("Tulipa")
            ) {

                adicionalValor = 10;

            } else {

                adicionalValor = 5;
            }

        } else {

            adicionalValor =
                Number(
                    radioFrango.dataset.adicional || 0
                );
        }
    }


    /* ===== ACOMPANHAMENTO ===== */

    const radioAcompanhamento =
        document.querySelector(
            'input[name="acompanhamento"]:checked'
        );

    if (radioAcompanhamento) {

        acompanhamento =
            radioAcompanhamento.value;
    }


    /* ===== BALDE FRITAS ===== */

    if (
        categoriaAtual === "baldes" &&
        (
            produtoAtual[0] === "Balde Fritas P" ||
            produtoAtual[0] === "Balde Fritas M"
        )
    ) {

        if (!acompanhamento) {

            alert(
                "Escolha Batata frita ou Polenta frita."
            );

            return;
        }
    }


    /* ===== COMBOS DE FRANGO ===== */

    if (
        categoriaAtual === "combos" &&
        (
            produtoAtual[0] === "Combo Individual de Frango" ||
            produtoAtual[0] === "Combo Duo de Frango" ||
            produtoAtual[0] === "Combo Família de Frango" ||
            produtoAtual[0] === "Combo 1" ||
            produtoAtual[0] === "Combo 3"
        )
    ) {

        if (!tipoFrango) {

            alert(
                "Escolha o tipo de frango."
            );

            return;
        }

        if (!acompanhamento) {

            alert(
                "Escolha Batata frita ou Polenta frita."
            );

            return;
        }
    }


    /* ===== ADICIONAIS DOS LANCHES ===== */

    if (categoriaAtual === "lanches") {

        const ehComboLanche =
            produtoAtual[0].includes("Combo");

        if (!ehComboLanche) {

            const caixas =
                document.querySelectorAll(
                    'input[name="adicional"]:checked'
                );

            caixas.forEach(c => {

                const item =
                    adicionais[Number(c.value)];

                adicionaisSelecionados.push(item[0]);

                adicionalValor += item[1];
            });
        }
    }


    const precoUnitario =
        produtoAtual[1] + adicionalValor;

    const precoTotal =
        precoUnitario * quantidadeAtual;


    carrinho.push({

        nome: produtoAtual[0],

        precoUnitario: precoUnitario,

        quantidade: quantidadeAtual,

        precoTotal: precoTotal,

        tipoFrango: tipoFrango,

        mistoTipos: mistoTipos,

        acompanhamento: acompanhamento,

        adicionais: adicionaisSelecionados
    });


    fecharModal("modalProduto");

    atualizarCarrinho();

    alert("Produto adicionado ao carrinho! 🛒");
}


/* ================= CARRINHO ================= */

function atualizarCarrinho() {

    const quantidade =
        carrinho.reduce(
            (total, item) =>
                total + item.quantidade,
            0
        );

    document.getElementById(
        "quantidadeCarrinho"
    ).textContent = quantidade;
}


function abrirCarrinho() {

    atualizarListaCarrinho();

    document
        .getElementById("modalCarrinho")
        .classList.add("aberto");
}


function atualizarListaCarrinho() {

    const lista =
        document.getElementById("listaCarrinho");

    lista.innerHTML = "";

    if (carrinho.length === 0) {

        lista.innerHTML = `
            <p style="font-size:20px;text-align:center;padding:25px;">
                Seu carrinho está vazio.
            </p>
        `;

        atualizarTotais();

        return;
    }


    carrinho.forEach((item, index) => {

        let detalhes = [];

        if (item.tipoFrango) {

            if (
                item.tipoFrango === "Misto"
            ) {

                detalhes.push(
                    "Misto: " +
                    item.mistoTipos.join(" + ")
                );

            } else {

                detalhes.push(
                    item.tipoFrango
                );
            }
        }

        if (item.acompanhamento) {

            detalhes.push(
                item.acompanhamento
            );
        }

        if (
            item.adicionais &&
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

            <h3>
                ${item.quantidade}x ${item.nome}
            </h3>

            ${
                detalhes.length
                ? `<p>${detalhes.join(" • ")}</p>`
                : ""
            }

            <p>
                ${dinheiro(item.precoTotal)}
            </p>

            <button
                class="remover"
                onclick="removerItem(${index})"
            >
                REMOVER
            </button>
        `;

        lista.appendChild(div);
    });

    atualizarTotais();
}


function removerItem(index) {

    carrinho.splice(index, 1);

    atualizarCarrinho();

    atualizarListaCarrinho();
}


/* ================= TOTAIS ================= */

function calcularSubtotal() {

    return carrinho.reduce(
        (total, item) =>
            total + item.precoTotal,
        0
    );
}


function obterTipoPedido() {

    const selecionado =
        document.querySelector(
            'input[name="tipoPedido"]:checked'
        );

    return selecionado
        ? selecionado.value
        : "";
}


function atualizarTotais() {

    const subtotal =
        calcularSubtotal();

    const tipoPedido =
        obterTipoPedido();

    const taxa =
        tipoPedido === "Entrega"
        ? 4
        : 0;

    document.getElementById(
        "subtotal"
    ).textContent = dinheiro(subtotal);

    document.getElementById(
        "taxaEntrega"
    ).textContent = dinheiro(taxa);

    document.getElementById(
        "total"
    ).textContent =
        dinheiro(subtotal + taxa);
}


/* ================= ENTREGA / RETIRADA ================= */

function mudarTipoPedido() {

    const tipo =
        obterTipoPedido();

    const dadosEntrega =
        document.getElementById(
            "dadosEntrega"
        );

    if (tipo === "Entrega") {

        dadosEntrega.style.display =
            "block";

    } else {

        dadosEntrega.style.display =
            "none";
    }

    atualizarTotais();
}


/* ================= PAGAMENTO ================= */

function mostrarPagamento() {

    const pagamento =
        document.querySelector(
            'input[name="pagamento"]:checked'
        );

    const div =
        document.getElementById(
            "dadosPagamento"
        );

    div.innerHTML = "";

    if (!pagamento) {
        return;
    }


    if (pagamento.value === "Dinheiro") {

        div.innerHTML = `

            <div class="opcao-grupo">

                <h3>💵 Troco</h3>

                <label>
                    <input
                        type="radio"
                        name="troco"
                        value="Não"
                        onchange="mostrarCampoTroco()"
                    >
                    Não precisa de troco
                </label>

                <label>
                    <input
                        type="radio"
                        name="troco"
                        value="Sim"
                        onchange="mostrarCampoTroco()"
                    >
                    Sim, preciso de troco
                </label>

                <div id="campoTroco"></div>

            </div>

        `;
    }


    if (pagamento.value === "PIX") {

        div.innerHTML = `

            <div class="pix-box">

                <p>
                    🟢 <strong>Chave PIX</strong>
                </p>

                <p class="pix-chave">
                    64213198000174
                </p>

                <button
                    class="btn-copiar"
                    onclick="copiarPix()"
                >
                    📋 COPIAR CHAVE PIX
                </button>

            </div>

        `;
    }
}


function mostrarCampoTroco() {

    const troco =
        document.querySelector(
            'input[name="troco"]:checked'
        );

    const div =
        document.getElementById(
            "campoTroco"
        );

    if (!troco) {
        return;
    }

    if (troco.value === "Sim") {

        div.innerHTML = `

            <label style="display:block;margin-top:15px;">

                Troco para quanto?

                <input
                    type="text"
                    id="valorTroco"
                    inputmode="decimal"
                    placeholder="Ex.: R$ 100,00"
                >

            </label>

        `;

    } else {

        div.innerHTML = "";
    }
}


function copiarPix() {

    navigator.clipboard
        .writeText("64213198000174")
        .then(() => {

            alert(
                "Chave PIX copiada! 🟢"
            );

        })
        .catch(() => {

            alert(
                "Chave PIX: 64213198000174"
            );

        });
}


/* ================= WHATSAPP ================= */

function enviarWhatsApp() {

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio."
        );

        return;
    }


    const tipoPedido =
        obterTipoPedido();

    if (!tipoPedido) {

        alert(
            "Escolha entre Entrega ou Retirada."
        );

        return;
    }


    const nome =
        document
            .getElementById("nomeCliente")
            .value
            .trim();

    if (!nome) {

        alert(
            "Digite seu nome."
        );

        return;
    }


    let rua = "";
    let bairro = "";
    let observacao = "";


    if (tipoPedido === "Entrega") {

        rua =
            document
                .getElementById("ruaCliente")
                .value
                .trim();

        bairro =
            document
                .getElementById("bairroCliente")
                .value
                .trim();

        if (!rua) {

            alert(
                "Digite a rua e o número."
            );

            return;
        }

        if (!bairro) {

            alert(
                "Digite o bairro."
            );

            return;
        }
    }


    observacao =
        document
            .getElementById("observacaoCliente")
            .value
            .trim();


    const pagamento =
        document.querySelector(
            'input[name="pagamento"]:checked'
        );


    if (!pagamento) {

        alert(
            "Escolha a forma de pagamento."
        );

        return;
    }


    let texto = "";

    texto +=
        "🍗 *BENVENUTO CHICKEN*";

    texto += "\n\n";

    texto +=
        "🛒 *PEDIDO*";

    texto += "\n";


    carrinho.forEach(item => {

        texto +=
            `\n${item.quantidade}x ${item.nome}`;

        if (item.tipoFrango) {

            if (
                item.tipoFrango === "Misto"
            ) {

                texto +=
                    ` — Misto (${item.mistoTipos.join(" + ")})`;

            } else {

                texto +=
                    ` — ${item.tipoFrango}`;
            }
        }

        if (item.acompanhamento) {

            texto +=
                ` — ${item.acompanhamento}`;
        }

        if (
            item.adicionais &&
            item.adicionais.length
        ) {

            texto +=
                ` — Adicionais: ${item.adicionais.join(", ")}`;
        }

        texto +=
            ` — ${dinheiro(item.precoTotal)}`;
    });


    const subtotal =
        calcularSubtotal();

    const taxa =
        tipoPedido === "Entrega"
        ? 4
        : 0;

    const total =
        subtotal + taxa;


    texto += "\n\n";

    texto +=
        `💰 *Subtotal:* ${dinheiro(subtotal)}`;

    texto += "\n";

    texto +=
        `🚚 *Taxa de entrega:* ${dinheiro(taxa)}`;

    texto += "\n";

    texto +=
        `💵 *TOTAL:* ${dinheiro(total)}`;


    texto += "\n\n";

    texto +=
        `👤 *Nome:* ${nome}`;

    texto += "\n";

    texto +=
        `📦 *Recebimento:* ${tipoPedido}`;


    if (tipoPedido === "Entrega") {

        texto += "\n";

        texto +=
            `🏠 *Endereço:* ${rua}`;

        texto += "\n";

        texto +=
            `📍 *Bairro:* ${bairro}`;
    }


    if (observacao) {

        texto += "\n";

        texto +=
            `📝 *Observação:* ${observacao}`;
    }


    texto += "\n\n";

    texto +=
        `💳 *Pagamento:* ${pagamento.value}`;


    if (
        pagamento.value === "Dinheiro"
    ) {

        const troco =
            document.querySelector(
                'input[name="troco"]:checked'
            );

        if (!troco) {

            alert(
                "Informe se precisa de troco."
            );

            return;
        }


        texto += "\n";

        texto +=
            `💵 *Precisa de troco:* ${troco.value}`;


        if (
            troco.value === "Sim"
        ) {

            const valorTroco =
                document
                    .getElementById("valorTroco")
                    .value
                    .trim();

            if (!valorTroco) {

                alert(
                    "Informe para quanto precisa do troco."
                );

                return;
            }

            texto += "\n";

            texto +=
                `💵 *Troco para:* ${valorTroco}`;
        }
    }


    if (
        pagamento.value === "PIX"
    ) {

        texto += "\n";

        texto +=
            "🟢 *Chave PIX:* 64213198000174";
    }


    const telefone =
        "5544997323438";

    const url =
        "https://wa.me/" +
        telefone +
        "?text=" +
        encodeURIComponent(texto);


    window.location.href = url;
}


/* ================= FECHAR MODAL ================= */

function fecharModal(id) {

    document
        .getElementById(id)
        .classList.remove("aberto");
}


/* ================= INICIALIZAÇÃO ================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        document
            .querySelectorAll(
                'input[name="tipoPedido"]'
            )
            .forEach(input => {

                input.checked = false;

            });

        document
            .getElementById(
                "dadosEntrega"
            )
            .style.display = "none";

        atualizarCarrinho();

    }
);
