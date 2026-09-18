/* =====================================================
   BENVENUTO CHICKEN
   ===================================================== */

const WHATSAPP = "5544997323438";
const PIX = "64213198000174";
const TAXA_ENTREGA = 4;

let carrinho = [];
let produtoSelecionado = null;
let categoriaAtual = "";


/* =====================================================
   PRODUTOS
   ===================================================== */

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
            ["Americano", 28, "Lanche estilo americano."]
        ]
    },


    baldes: {
        titulo: "🍗 BALDES",

        produtos: [
            ["Balde 8 unidades", 21, "8 unidades de frango."],
            ["Balde P — 12 unidades", 40, "12 unidades de frango."],
            ["Balde M — 15 unidades", 50, "15 unidades de frango."],
            ["Balde G — 20 unidades", 60, "20 unidades de frango."],
            ["Balde Fritas P", 55.90, "12 unidades de frango + 400 g de batata ou polenta."],
            ["Balde Fritas M", 65.90, "15 unidades de frango + 600 g de batata ou polenta."]
        ]
    },


    combos: {
        titulo: "🔥 COMBOS",

        produtos: [
            ["Combo Individual de Frango", 36, "8 unidades + 300 g de acompanhamento + refrigerante 220 ml."],
            ["Combo Duo de Frango", 66, "12 unidades + 300 g de acompanhamento + refrigerante 600 ml."],
            ["Combo Família de Frango", 106, "20 unidades + 500 g de acompanhamento + refrigerante 2 L."],

            ["Combo 1", 96, "1 kg de frango + 1 kg de batata com bacon e cheddar."],
            ["Combo 2 — Misto", 120, "1 kg de coxinha e Sassami + 1 kg de polenta + 500 g de calabresa acebolada."],
            ["Combo 3", 116, "1 kg de coxinha + 500 g de batata + 500 g de anel de cebola + 500 g de polenta + refrigerante 2 L."],
            ["Combo 4", 120, "1 kg de mandioca + 1 kg de Sassami + 500 g de calabresa + refrigerante 2 L."],
            ["Combo 5", 50, "1 kg de batata com bacon e cheddar."],
            ["Combo 6", 40, "1 kg de mandioca + 500 g de calabresa."],

            ["Combo Individual de Lanche", 45, "1 Chicken + 300 g de batata + refrigerante 220 ml."],
            ["Combo Duo de Lanche", 66, "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml."],
            ["Combo Trio", 80, "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml."],
            ["Combo Família de Lanche", 150, "5 Chickens + 1 kg de batata + refrigerante 2 L."],

            ["Combo Especial Duplo Cheddar — Duo", 84, "2 Especial Duplo Cheddar + 600 g de batata + 2 refrigerantes 220 ml."],
            ["Combo Especial Duplo Cheddar — Individual", 47, "1 Especial Duplo Cheddar + 300 g de batata + refrigerante 220 ml."],
            ["Combo Especial Lanche", 80, "2 Chickens + 500 g de batata bacon cheddar + refrigerante 600 ml."],
            ["Combo Individual Chicken", 40, "1 Chicken + 300 g de batata bacon cheddar + refrigerante 220 ml."]
        ]
    },


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


    porcoes: {
        titulo: "🍟 PORÇÕES",

        produtos: [
            ["Salada Americana", 28, "Alface americano, tomate cereja, frango crocante e molho especial."],
            ["Batata Apimentada", 38, "Batata com molho de pimenta."],

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


/* =====================================================
   NAVEGAÇÃO
   ===================================================== */

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

    const tela = document.getElementById("produtos");

    tela.classList.add("ativa");

    document.getElementById("tituloCategoria").textContent =
        dados[categoria].titulo;

    const lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

    dados[categoria].produtos.forEach((produto, index) => {

        const nome = produto[0];
        const preco = produto[1];
        const descricao = produto[2];

        const div = document.createElement("div");

        div.className = "produto";

        div.innerHTML = `
            <h3>${nome}</h3>

            ${descricao ? `<p>${descricao}</p>` : ""}

            <div class="preco">
                R$ ${formatarPreco(preco)}
            </div>

            <button class="btn-adicionar"
                    onclick="abrirProduto('${categoria}', ${index})">
                ➕ ADICIONAR
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


/* =====================================================
   PRODUTO
   ===================================================== */

function abrirProduto(categoria, index) {

    produtoSelecionado = {
        categoria,
        index
    };

    const produto = dados[categoria].produtos[index];

    document.getElementById("modalTitulo").textContent = produto[0];

    document.getElementById("modalDescricao").textContent = produto[2] || "";

    const opcoes = document.getElementById("opcoesProduto");

    opcoes.innerHTML = "";

    if (categoria === "lanches") {

        opcoes.innerHTML = `
            <div class="opcao-grupo">
                <h3>Adicionais</h3>

                ${criarCheckbox("Anel de cebola", 3)}
                ${criarCheckbox("Hambúrguer", 10)}
                ${criarCheckbox("Bacon", 5)}
                ${criarCheckbox("Muçarela", 4)}
                ${criarCheckbox("Alface", 1)}
                ${criarCheckbox("Catupiry", 5)}
                ${criarCheckbox("Tomate", 1)}
                ${criarCheckbox("Cebola", 1)}
                ${criarCheckbox("Cheddar", 5)}
                ${criarCheckbox("Cebola roxa", 4)}
            </div>
        `;
    }


    if (categoria === "baldes") {

        const nome = produto[0];

        opcoes.innerHTML = `
            <div class="opcao-grupo">

                <h3>Escolha o tipo de frango</h3>

                <label class="opcao">
                    <input type="radio"
                           name="tipoBalde"
                           value="Coxinha"
                           onchange="mostrarMistoBalde()">
                    Coxinha
                </label>

                <label class="opcao">
                    <input type="radio"
                           name="tipoBalde"
                           value="Sassami"
                           onchange="mostrarMistoBalde()">
                    Sassami
                </label>

                <label class="opcao">
                    <input type="radio"
                           name="tipoBalde"
                           value="Tulipa"
                           onchange="mostrarMistoBalde()">
                    Tulipa (+ R$ 10,00)
                </label>

                <label class="opcao">
                    <input type="radio"
                           name="tipoBalde"
                           value="Misto"
                           onchange="mostrarMistoBalde()">
                    Misto
                </label>

            </div>

            <div id="mistoBalde"></div>
        `;

        if (
            nome.includes("Fritas")
        ) {

            opcoes.innerHTML += `
                <div class="opcao-grupo">

                    <h3>Escolha o acompanhamento</h3>

                    <label class="opcao">
                        <input type="radio"
                               name="acompanhamento"
                               value="Batata frita">
                        🍟 Batata frita
                    </label>

                    <label class="opcao">
                        <input type="radio"
                               name="acompanhamento"
                               value="Polenta frita">
                        🟨 Polenta frita
                    </label>

                </div>
            `;
        }
    }


    if (categoria === "combos") {

        const nome = produto[0];

        if (comboTemEscolhaFrango(nome)) {

            opcoes.innerHTML = `
                <div class="opcao-grupo">

                    <h3>Escolha o frango</h3>

                    <label class="opcao">
                        <input type="radio"
                               name="tipoCombo"
                               value="Coxinha"
                               onchange="mostrarMistoCombo()">
                        Coxinha
                    </label>

                    <label class="opcao">
                        <input type="radio"
                               name="tipoCombo"
                               value="Sassami"
                               onchange="mostrarMistoCombo()">
                        Sassami
                    </label>

                    <label class="opcao">
                        <input type="radio"
                               name="tipoCombo"
                               value="Tulipa"
                               onchange="mostrarMistoCombo()">
                        Tulipa (+ R$ 10,00)
                    </label>

                    <label class="opcao">
                        <input type="radio"
                               name="tipoCombo"
                               value="Misto"
                               onchange="mostrarMistoCombo()">
                        Misto
                    </label>

                </div>

                <div id="mistoCombo"></div>
            `;

            if (
                nome.includes("Individual de Frango") ||
                nome.includes("Duo de Frango") ||
                nome.includes("Família de Frango") ||
                nome === "Combo 1" ||
                nome === "Combo 3"
            ) {

                opcoes.innerHTML += `
                    <div class="opcao-grupo">

                        <h3>Escolha o acompanhamento</h3>

                        <label class="opcao">
                            <input type="radio"
                                   name="acompanhamento"
                                   value="Batata frita">
                            🍟 Batata frita
                        </label>

                        <label class="opcao">
                            <input type="radio"
                                   name="acompanhamento"
                                   value="Polenta frita">
                            🟨 Polenta frita
                        </label>

                    </div>
                `;
            }

        }
    }


    document.getElementById("modalProduto").classList.add("aberto");

}


function fecharModal() {

    document.getElementById("modalProduto").classList.remove("aberto");

}


/* =====================================================
   CHECKBOX ADICIONAIS
   ===================================================== */

function criarCheckbox(nome, preco) {

    return `
        <label class="opcao">

            <input type="checkbox"
                   class="adicional"
                   data-nome="${nome}"
                   data-preco="${preco}">

            ${nome} (+ R$ ${formatarPreco(preco)})

        </label>
    `;
}


/* =====================================================
   BALDES
   ===================================================== */

function mostrarMistoBalde() {

    const selecionado =
        document.querySelector('input[name="tipoBalde"]:checked');

    const div = document.getElementById("mistoBalde");

    if (!div) return;

    if (!selecionado || selecionado.value !== "Misto") {

        div.innerHTML = "";

        return;
    }

    div.innerHTML = `
        <div class="opcao-grupo">

            <h3>Escolha 2 tipos</h3>

            <label class="opcao">
                <input type="checkbox"
                       class="mistoBaldeTipo"
                       value="Coxinha"
                       onchange="limitarMistoBalde()">
                Coxinha
            </label>

            <label class="opcao">
                <input type="checkbox"
                       class="mistoBaldeTipo"
                       value="Sassami"
                       onchange="limitarMistoBalde()">
                Sassami
            </label>

            <label class="opcao">
                <input type="checkbox"
                       class="mistoBaldeTipo"
                       value="Tulipa"
                       onchange="limitarMistoBalde()">
                Tulipa
            </label>

        </div>
    `;
}


function limitarMistoBalde() {

    const selecionados =
        document.querySelectorAll(".mistoBaldeTipo:checked");

    if (selecionados.length >= 2) {

        document.querySelectorAll(".mistoBaldeTipo:not(:checked)")
            .forEach(input => {
                input.disabled = true;
            });

    } else {

        document.querySelectorAll(".mistoBaldeTipo")
            .forEach(input => {
                input.disabled = false;
            });

    }
}


/* =====================================================
   COMBOS
   ===================================================== */

function comboTemEscolhaFrango(nome) {

    return (
        nome === "Combo Individual de Frango" ||
        nome === "Combo Duo de Frango" ||
        nome === "Combo Família de Frango" ||
        nome === "Combo 1" ||
        nome === "Combo 3"
    );
}


function mostrarMistoCombo() {

    const selecionado =
        document.querySelector('input[name="tipoCombo"]:checked');

    const div = document.getElementById("mistoCombo");

    if (!div) return;

    if (!selecionado || selecionado.value !== "Misto") {

        div.innerHTML = "";

        return;
    }

    div.innerHTML = `
        <div class="opcao-grupo">

            <h3>Escolha 2 tipos</h3>

            <label class="opcao">
                <input type="checkbox"
                       class="mistoComboTipo"
                       value="Coxinha"
                       onchange="limitarMistoCombo()">
                Coxinha
            </label>

            <label class="opcao">
                <input type="checkbox"
                       class="mistoComboTipo"
                       value="Sassami"
                       onchange="limitarMistoCombo()">
                Sassami
            </label>

            <label class="opcao">
                <input type="checkbox"
                       class="mistoComboTipo"
                       value="Tulipa"
                       onchange="limitarMistoCombo()">
                Tulipa
            </label>

        </div>
    `;
}


function limitarMistoCombo() {

    const selecionados =
        document.querySelectorAll(".mistoComboTipo:checked");

    if (selecionados.length >= 2) {

        document.querySelectorAll(".mistoComboTipo:not(:checked)")
            .forEach(input => {
                input.disabled = true;
            });

    } else {

        document.querySelectorAll(".mistoComboTipo")
            .forEach(input => {
                input.disabled = false;
            });

    }
}


/* =====================================================
   CONFIRMAR PRODUTO
   ===================================================== */

function confirmarProduto() {

    if (!produtoSelecionado) return;

    const categoria = produtoSelecionado.categoria;
    const index = produtoSelecionado.index;

    const produto = dados[categoria].produtos[index];

    let nome = produto[0];
    let preco = produto[1];

    let escolha = "";
    let extras = [];


    /* ---------- LANCHES ---------- */

    if (categoria === "lanches") {

        document.querySelectorAll(".adicional:checked")
            .forEach(input => {

                const adicional = input.dataset.nome;
                const valor = Number(input.dataset.preco);

                extras.push({
                    nome: adicional,
                    preco: valor
                });

                preco += valor;

            });
    }


    /* ---------- BALDES ---------- */

    if (categoria === "baldes") {

        const tipo =
            document.querySelector('input[name="tipoBalde"]:checked');

        if (!tipo) {

            alert("Escolha o tipo de frango.");

            return;
        }

        escolha = tipo.value;


        if (tipo.value === "Tulipa") {

            preco += 10;

        }


        if (tipo.value === "Misto") {

            const tipos =
                [...document.querySelectorAll(".mistoBaldeTipo:checked")]
                    .map(x => x.value);

            if (tipos.length !== 2) {

                alert("Escolha exatamente 2 tipos para o Misto.");

                return;
            }

            escolha = "Misto: " + tipos.join(" + ");

            if (tipos.includes("Tulipa")) {

                preco += 10;

            } else {

                preco += 5;

            }
        }


        if (nome.includes("Fritas")) {

            const acompanhamento =
                document.querySelector('input[name="acompanhamento"]:checked');

            if (!acompanhamento) {

                alert("Escolha Batata frita ou Polenta frita.");

                return;
            }

            escolha += " — " + acompanhamento.value;
        }
    }


    /* ---------- COMBOS ---------- */

    if (categoria === "combos") {

        if (comboTemEscolhaFrango(nome)) {

            const tipo =
                document.querySelector('input[name="tipoCombo"]:checked');

            if (!tipo) {

                alert("Escolha o tipo de frango.");

                return;
            }

            escolha = tipo.value;


            if (tipo.value === "Tulipa") {

                preco += 10;

            }


            if (tipo.value === "Misto") {

                const tipos =
                    [...document.querySelectorAll(".mistoComboTipo:checked")]
                        .map(x => x.value);

                if (tipos.length !== 2) {

                    alert("Escolha exatamente 2 tipos para o Misto.");

                    return;
                }

                escolha = "Misto: " + tipos.join(" + ");

                if (tipos.includes("Tulipa")) {

                    preco += 10;

                } else {

                    preco += 5;

                }
            }


            if (
                nome.includes("Individual de Frango") ||
                nome.includes("Duo de Frango") ||
                nome.includes("Família de Frango") ||
                nome === "Combo 1" ||
                nome === "Combo 3"
            ) {

                const acompanhamento =
                    document.querySelector('input[name="acompanhamento"]:checked');

                if (!acompanhamento) {

                    alert("Escolha Batata frita ou Polenta frita.");

                    return;
                }

                escolha += " — " + acompanhamento.value;
            }
        }
    }


    /* ---------- ADICIONAR ---------- */

    carrinho.push({
        nome,
        preco,
        escolha,
        extras
    });


    atualizarQuantidadeCarrinho();

    fecharModal();

}


/* =====================================================
   CARRINHO
   ===================================================== */

function abrirCarrinho() {

    atualizarCarrinho();

    document.getElementById("modalCarrinho")
        .classList.add("aberto");

}


function fecharCarrinho() {

    document.getElementById("modalCarrinho")
        .classList.remove("aberto");

}


function atualizarQuantidadeCarrinho() {

    document.getElementById("quantidadeCarrinho")
        .textContent = carrinho.length;

}


function atualizarCarrinho() {

    const lista =
        document.getElementById("listaCarrinho");

    lista.innerHTML = "";


    if (carrinho.length === 0) {

        lista.innerHTML = `
            <p style="font-size:20px; padding:20px 0;">
                Seu carrinho está vazio.
            </p>
        `;

    } else {

        carrinho.forEach((item, index) => {

            let adicionaisTexto = "";

            if (item.extras && item.extras.length) {

                adicionaisTexto =
                    "<br>Adicionais: " +
                    item.extras.map(x => x.nome).join(", ");

            }


            lista.innerHTML += `

                <div class="item-carrinho">

                    <h3>
                        ${index + 1}. ${item.nome}
                    </h3>

                    ${
                        item.escolha
                        ? `<p>${item.escolha}</p>`
                        : ""
                    }

                    ${
                        adicionaisTexto
                        ? `<p>${adicionaisTexto}</p>`
                        : ""
                    }

                    <strong>
                        R$ ${formatarPreco(item.preco)}
                    </strong>

                    <button class="btn-remover"
                            onclick="removerItem(${index})">
                        🗑️ REMOVER
                    </button>

                </div>
            `;

        });
    }

    atualizarTotal();

}


function removerItem(index) {

    carrinho.splice(index, 1);

    atualizarQuantidadeCarrinho();

    atualizarCarrinho();

}


/* =====================================================
   ENTREGA / TOTAL
   ===================================================== */

function atualizarTotal() {

    let subtotal = 0;

    carrinho.forEach(item => {
        subtotal += item.preco;
    });


    const forma =
        document.querySelector(
            'input[name="formaRecebimento"]:checked'
        );


    let taxa = 0;

    if (forma && forma.value === "entrega") {

        taxa = TAXA_ENTREGA;

    }


    document.getElementById("subtotal")
        .textContent = "R$ " + formatarPreco(subtotal);

    document.getElementById("taxaEntrega")
        .textContent = "R$ " + formatarPreco(taxa);

    document.getElementById("total")
        .textContent = "R$ " + formatarPreco(subtotal + taxa);

}


/* =====================================================
   PAGAMENTO
   ===================================================== */

function mostrarPagamento() {

    const pagamento =
        document.querySelector(
            'input[name="pagamento"]:checked'
        );

    const div =
        document.getElementById("dadosPagamento");

    div.innerHTML = "";


    if (!pagamento) return;


    if (pagamento.value === "Dinheiro") {

        div.innerHTML = `

            <div class="campo">

                <label>Precisa de troco?</label>

                <select id="precisaTroco"
                        onchange="mostrarTroco()">

                    <option value="">
                        Selecione
                    </option>

                    <option value="Não">
                        Não
                    </option>

                    <option value="Sim">
                        Sim
                    </option>

                </select>

            </div>

            <div id="campoTroco"></div>
        `;
    }


    if (
        pagamento.value === "Crédito" ||
        pagamento.value === "Débito"
    ) {

        div.innerHTML = `

            <div class="campo">

                <p style="font-size:18px;">
                    Pagamento selecionado:
                    <strong>${pagamento.value}</strong>
                </p>

            </div>
        `;
    }


    if (pagamento.value === "PIX") {

        div.innerHTML = `

            <div class="pix-box">

                <h3>🟢 PIX</h3>

                <p>
                    Chave PIX:
                    <strong>${PIX}</strong>
                </p>

                <button class="btn-pix"
                        onclick="copiarPix()">
                    📋 COPIAR CHAVE PIX
                </button>

            </div>
        `;
    }

}


function mostrarTroco() {

    const valor =
        document.getElementById("precisaTroco").value;

    const div =
        document.getElementById("campoTroco");


    if (valor === "Sim") {

        div.innerHTML = `

            <div class="campo">

                <label>
                    Troco para quanto?
                </label>

                <input
                    type="number"
                    id="valorTroco"
                    placeholder="Ex.: 50"
                    min="0"
                    step="0.01"
                >

            </div>
        `;

    } else {

        div.innerHTML = "";

    }

}


/* =====================================================
   COPIAR PIX
   ===================================================== */

function copiarPix() {

    navigator.clipboard.writeText(PIX)
        .then(() => {

            alert("Chave PIX copiada!");

        })
        .catch(() => {

            alert("Não foi possível copiar automaticamente. Chave PIX: " + PIX);

        });

}


/* =====================================================
   WHATSAPP
   ===================================================== */

function enviarWhatsApp() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio.");

        return;
    }


    const recebimento =
        document.querySelector(
            'input[name="formaRecebimento"]:checked'
        );


    if (!recebimento) {

        alert("Escolha Retirada ou Entrega.");

        return;
    }


    const pagamento =
        document.querySelector(
            'input[name="pagamento"]:checked'
        );


    if (!pagamento) {

        alert("Escolha a forma de pagamento.");

        return;
    }


    let mensagem =
        "🍗 *NOVO PEDIDO — BENVENUTO CHICKEN*%0A%0A";


    carrinho.forEach((item, index) => {

        mensagem +=
            `${index + 1}. *${item.nome}*`;

        if (item.escolha) {

            mensagem +=
                ` — ${item.escolha}`;

        }


        if (item.extras && item.extras.length) {

            mensagem +=
                ` — Adicionais: ${item.extras.map(x => x.nome).join(", ")}`;

        }


        mensagem +=
            ` — R$ ${formatarPreco(item.preco)}%0A`;

    });


    let subtotal = carrinho.reduce(
        (total, item) => total + item.preco,
        0
    );


    let taxa = 0;

    if (recebimento.value === "entrega") {

        taxa = TAXA_ENTREGA;

    }


    let total = subtotal + taxa;


    mensagem += `%0A`;
    mensagem += `📦 *Recebimento:* ${recebimento.value === "entrega" ? "Entrega" : "Retirada"}%0A`;

    if (taxa > 0) {

        mensagem += `🛵 *Taxa de entrega:* R$ 4,00%0A`;

    }


    mensagem += `💳 *Pagamento:* ${pagamento.value}%0A`;


    if (pagamento.value === "Dinheiro") {

        const precisaTroco =
            document.getElementById("precisaTroco");

        if (!precisaTroco || !precisaTroco.value) {

            alert("Informe se precisa de troco.");

            return;
        }


        mensagem +=
            `💵 *Troco:* ${precisaTroco.value}%0A`;


        if (precisaTroco.value === "Sim") {

            const valorTroco =
                document.getElementById("valorTroco");

            if (!valorTroco || !valorTroco.value) {

                alert("Informe para quanto precisa de troco.");

                return;
            }


            mensagem +=
                `💰 *Troco para:* R$ ${formatarPreco(Number(valorTroco.value))}%0A`;
        }

    }


    mensagem += `%0A`;
    mensagem += `💰 *TOTAL: R$ ${formatarPreco(total)}*`;


    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            decodeURIComponent(mensagem)
        )}`;


    window.location.href = url;

}


/* =====================================================
   FORMATAÇÃO
   ===================================================== */

function formatarPreco(valor) {

    return Number(valor).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}


/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */

atualizarQuantidadeCarrinho();
