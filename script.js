/* =========================================================
   BENVENUTO CHICKEN
   SCRIPT COMPLETO
========================================================= */


/* ================= CARDÁPIO ================= */

const cardapio = {

    lanches: {

        titulo: "🍔 LANCHES",

        descricao:
        "Todos os lanches acompanham molho de alho.",

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
            ]

        ]

    },


    baldes: {

        titulo: "🍗 BALDES",

        descricao:
        "Escolha Coxinha, Sassami, Tulipa ou Misto. Todo balde acompanha ketchup e barbecue.",

        produtos: [

            [
                "Balde 8 unidades",
                21,
                "8 unidades de frango."
            ],

            [
                "Balde P",
                40,
                "12 unidades de frango."
            ],

            [
                "Balde M",
                50,
                "15 unidades de frango."
            ],

            [
                "Balde G",
                60,
                "20 unidades de frango."
            ],

            [
                "Balde Fritas P",
                55.90,
                "12 unidades de frango + 400 g de batata ou polenta. Metade frango e metade acompanhamento."
            ],

            [
                "Balde Fritas M",
                65.90,
                "15 unidades de frango + 600 g de batata ou polenta. Metade frango e metade acompanhamento."
            ]

        ]

    },


    combos: {

        titulo: "🔥 COMBOS",

        descricao:
        "Combos de frango, batatas e lanches.",

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


    bebidas: {

        titulo: "🥤 BEBIDAS",

        descricao:
        "Refrigerantes e água.",

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

        descricao:
        "Porções e acompanhamentos.",

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

            [
                "Batata 300 g",
                19,
                ""
            ],

            [
                "Batata 500 g",
                30,
                ""
            ],

            [
                "Batata Bacon + Cheddar 500 g",
                36,
                ""
            ],

            [
                "Polenta 300 g",
                12,
                ""
            ],

            [
                "Polenta 500 g",
                17,
                ""
            ],

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

            [
                "Anel de Cebola 300 g",
                20,
                ""
            ],

            [
                "Anel de Cebola 500 g",
                35,
                ""
            ]

        ]

    },


    molhos: {

        titulo: "🥣 MOLHOS",

        descricao:
        "Molhos extras.",

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


/* ================= CONFIGURAÇÕES ================= */

const chavePix = "64213198000174";

const numeroWhatsApp = "5544997323438";

const taxaEntrega = 4;


/* ================= ESTADOS ================= */

let carrinho = [];

let categoriaAtual = "";

let produtoAtual = null;

let baldeAtual = null;

let comboAtual = null;

let tipoFrango = "";

let misto = [];

let acompanhamentoAtual = "";

let tipoCombo = "";

let acompanhamentoCombo = "";

let formaRecebimento = "retirada";

let formaPagamento = "";

let precisaTroco = "";

let trocoPara = "";


/* ================= NOMES DOS LANCHES ================= */

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


/* ================= FORMATAÇÃO ================= */

function dinheiro(valor){

    return Number(valor)
        .toFixed(2)
        .replace(".", ",");

}


/* ================= NAVEGAÇÃO ================= */

function esconderTodas(){

    document
        .getElementById("inicio")
        .classList.add("hidden");

    document
        .getElementById("cardapio")
        .classList.add("hidden");

    document
        .getElementById("produtosPagina")
        .classList.add("hidden");

}


function mostrarInicio(){

    esconderTodas();

    document
        .getElementById("inicio")
        .classList.remove("hidden");

    window.scrollTo(0,0);

}


function mostrarCardapio(){

    esconderTodas();

    document
        .getElementById("cardapio")
        .classList.remove("hidden");

    window.scrollTo(0,0);

}


function voltarCategorias(){

    mostrarCardapio();

}


/* ================= ABRIR CATEGORIA ================= */

function abrirCategoria(nome){

    if(!cardapio[nome]){

        alert("Categoria não encontrada.");

        return;

    }

    categoriaAtual = nome;

    const categoria = cardapio[nome];

    esconderTodas();

    document
        .getElementById("produtosPagina")
        .classList.remove("hidden");


    document
        .getElementById("tituloCategoria")
        .textContent = categoria.titulo;


    document
        .getElementById("descricaoCategoria")
        .textContent = categoria.descricao;


    const lista =
        document.getElementById("listaProdutos");


    lista.innerHTML = "";


    categoria.produtos.forEach((produto,index)=>{

        const artigo =
            document.createElement("article");

        artigo.className = "produto";


        artigo.innerHTML = `

            <h2>${produto[0]}</h2>

            ${
                produto[2]
                ?
                `<p class="produto-descricao">
                    ${produto[2]}
                </p>`
                :
                ""
            }

            <div class="produto-preco">
                R$ ${dinheiro(produto[1])}
            </div>

            <button
                class="botao-adicionar"
                onclick="adicionarProduto(${index})">

                🛒 ADICIONAR

            </button>

        `;


        lista.appendChild(artigo);

    });


    window.scrollTo(0,0);

}


/* ================= ADICIONAR PRODUTO ================= */

function adicionarProduto(index){

    const produto =
        cardapio[categoriaAtual].produtos[index];


    if(categoriaAtual === "baldes"){

        abrirBalde(produto);

        return;

    }


    if(categoriaAtual === "lanches"){

        abrirLanche(produto);

        return;

    }


    if(categoriaAtual === "combos"){

        abrirCombo(produto);

        return;

    }


    adicionarAoCarrinho(

        produto[0],
        produto[1],
        produto[2] || "",
        []

    );

}


/* =========================================================
   BALDES
========================================================= */

function abrirBalde(produto){

    baldeAtual = produto;

    tipoFrango = "";

    misto = [];

    acompanhamentoAtual = "";


    document
        .getElementById("nomeBalde")
        .innerHTML =
        `<strong>${produto[0]}</strong>
         — R$ ${dinheiro(produto[1])}`;


    document
        .getElementById("mistoBox")
        .classList.add("hidden");


    document
        .getElementById("acompanhamentoBalde")
        .classList.toggle(
            "hidden",
            !produto[0].includes("Fritas")
        );


    document
        .getElementById("resumoBalde")
        .innerHTML =
        "Escolha o tipo de frango.";


    document
        .querySelectorAll(".escolha-frango")
        .forEach(botao =>
            botao.classList.remove("selecionado")
        );


    document
        .querySelectorAll(".escolha-acompanhamento")
        .forEach(botao =>
            botao.classList.remove("selecionado")
        );


    document
        .querySelectorAll(".misto-opcao input")
        .forEach(input =>
            input.checked = false
        );


    document
        .getElementById("statusMisto")
        .textContent =
        "Escolha 2 tipos.";


    document
        .getElementById("modalBalde")
        .classList.remove("hidden");

}


function escolherTipoFrango(tipo,botao){

    tipoFrango = tipo;

    document
        .querySelectorAll(".escolha-frango")
        .forEach(b =>
            b.classList.remove("selecionado")
        );


    botao.classList.add("selecionado");


    if(tipo === "Misto"){

        document
            .getElementById("mistoBox")
            .classList.remove("hidden");

    }else{

        document
            .getElementById("mistoBox")
            .classList.add("hidden");

        misto = [];

        document
            .querySelectorAll(".misto-opcao input")
            .forEach(input =>
                input.checked = false
            );

    }


    atualizarResumoBalde();

}


function selecionarMisto(input){

    if(input.checked && misto.length >= 2){

        input.checked = false;

        alert(
            "No Misto você pode escolher apenas 2 tipos de frango."
        );

        return;

    }


    if(input.checked){

        misto.push(input.value);

    }else{

        misto =
            misto.filter(
                tipo => tipo !== input.value
            );

    }


    document
        .getElementById("statusMisto")
        .textContent =
        misto.length === 2
        ?
        "✓ " + misto.join(" + ")
        :
        `Escolha ${2 - misto.length} tipo(s).`;


    atualizarResumoBalde();

}


function escolherAcompanhamento(tipo,botao){

    acompanhamentoAtual = tipo;


    document
        .querySelectorAll(".escolha-acompanhamento")
        .forEach(b =>
            b.classList.remove("selecionado")
        );


    botao.classList.add("selecionado");


    atualizarResumoBalde();

}


function calcularAdicionalFrango(tipo,listaMisto){

    if(tipo === "Tulipa"){

        return 10;

    }


    if(tipo === "Misto"){

        if(
            listaMisto.includes("Tulipa")
        ){

            return 10;

        }

        return 5;

    }


    return 0;

}


function atualizarResumoBalde(){

    if(!tipoFrango){

        document
            .getElementById("resumoBalde")
            .textContent =
            "Escolha o tipo de frango.";

        return;

    }


    let preco = baldeAtual[1];

    const adicional =
        calcularAdicionalFrango(
            tipoFrango,
            misto
        );


    preco += adicional;


    let descricao =
        tipoFrango;


    if(tipoFrango === "Misto"){

        if(misto.length === 2){

            descricao =
                "Misto: " +
                misto.join(" + ");

        }else{

            descricao =
                "Misto — escolha 2 tipos";

        }

    }


    let texto =
        `🍗 <strong>${descricao}</strong>`;


    if(
        baldeAtual[0].includes("Fritas")
    ){

        texto +=
            acompanhamentoAtual
            ?
            `<br>🍟 ${acompanhamentoAtual}`
            :
            `<br>🍟 Escolha batata ou polenta`;

    }


    texto +=
        `<br>🥫 Acompanha ketchup e barbecue`;

    texto +=
        `<br>💰 R$ ${dinheiro(preco)}`;


    document
        .getElementById("resumoBalde")
        .innerHTML = texto;

}


function confirmarBalde(){

    if(!tipoFrango){

        alert(
            "Escolha Coxinha, Sassami, Tulipa ou Misto."
        );

        return;

    }


    if(
        tipoFrango === "Misto" &&
        misto.length !== 2
    ){

        alert(
            "Escolha exatamente 2 tipos para o Misto."
        );

        return;

    }


    if(
        baldeAtual[0].includes("Fritas") &&
        !acompanhamentoAtual
    ){

        alert(
            "Escolha batata frita ou polenta frita."
        );

        return;

    }


    let preco = baldeAtual[1];


    preco +=
        calcularAdicionalFrango(
            tipoFrango,
            misto
        );


    let escolha = tipoFrango;


    if(tipoFrango === "Misto"){

        escolha =
            "Misto: " +
            misto.join(" + ");

    }


    if(
        baldeAtual[0].includes("Fritas")
    ){

        escolha +=
            " • " +
            acompanhamentoAtual;

    }


    adicionarAoCarrinho(

        baldeAtual[0],

        preco,

        escolha,

        []

    );


    fecharModal("modalBalde");

}


/* =========================================================
   LANCHES
========================================================= */

function abrirLanche(produto){

    produtoAtual = produto;


    document
        .getElementById("nomeLanche")
        .innerHTML =
        `<strong>${produto[0]}</strong>
         — R$ ${dinheiro(produto[1])}`;


    const lista =
        document.getElementById("listaAdicionais");


    lista.innerHTML = "";


    adicionais.forEach((adicional,index)=>{

        const label =
            document.createElement("label");

        label.className = "adicional";


        label.innerHTML = `

            <span>

                <input
                    type="checkbox"
                    value="${index}">

                ${adicional[0]}

            </span>

            <strong>
                + R$ ${dinheiro(adicional[1])}
            </strong>

        `;


        lista.appendChild(label);

    });


    document
        .getElementById("modalLanche")
        .classList.remove("hidden");

}


function confirmarLanche(){

    const escolhidos =
        [
            ...document.querySelectorAll(
                "#listaAdicionais input:checked"
            )
        ]
        .map(input=>{

            const adicional =
                adicionais[
                    Number(input.value)
                ];

            return {

                nome: adicional[0],

                preco: adicional[1]

            };

        });


    adicionarAoCarrinho(

        produtoAtual[0],

        produtoAtual[1],

        produtoAtual[2],

        escolhidos

    );


    fecharModal("modalLanche");

}


/* =========================================================
   COMBOS
========================================================= */

function abrirCombo(produto){

    comboAtual = produto;

    tipoCombo = "";

    acompanhamentoCombo = "";


    document
        .getElementById("nomeCombo")
        .innerHTML =
        `<strong>${produto[0]}</strong>
         — R$ ${dinheiro(produto[1])}`;


    const area =
        document.getElementById("opcoesCombo");


    area.innerHTML = "";


    const precisaTipo =
        [
            "Combo Individual de Frango",
            "Combo Duo de Frango",
            "Combo Família de Frango",
            "Combo 1",
            "Combo 3"
        ].includes(produto[0]);


    const precisaAcompanhamento =
        [
            "Combo Individual de Frango",
            "Combo Duo de Frango",
            "Combo Família de Frango"
        ].includes(produto[0]);


    if(precisaTipo){

        area.innerHTML += `

            <div class="bloco-opcao">

                <h3>🍗 Escolha o tipo de frango:</h3>

                <div class="escolhas">

                    <button
                        class="escolha-frango"
                        onclick="escolherTipoCombo('Coxinha',this)">

                        Coxinha

                    </button>

                    <button
                        class="escolha-frango"
                        onclick="escolherTipoCombo('Sassami',this)">

                        Sassami

                    </button>

                    <button
                        class="escolha-frango"
                        onclick="escolherTipoCombo('Tulipa',this)">

                        Tulipa
                        <small>+ R$ 10,00</small>

                    </button>

                    <button
                        class="escolha-frango"
                        onclick="escolherTipoCombo('Misto',this)">

                        Misto
                        <small>+ R$ 5,00</small>

                    </button>

                </div>

                <div
                    id="mistoComboBox"
                    class="hidden">

                    <h3>Escolha 2 tipos:</h3>

                    <label class="misto-opcao">

                        <input
                            type="checkbox"
                            value="Coxinha"
                            onchange="selecionarMistoCombo(this)">

                        Coxinha

                    </label>

                    <label class="misto-opcao">

                        <input
                            type="checkbox"
                            value="Sassami"
                            onchange="selecionarMistoCombo(this)">

                        Sassami

                    </label>

                    <label class="misto-opcao">

                        <input
                            type="checkbox"
                            value="Tulipa"
                            onchange="selecionarMistoCombo(this)">

                        Tulipa

                    </label>

                    <p id="statusMistoCombo">
                        Escolha 2 tipos.
                    </p>

                </div>

            </div>

        `;

    }


    if(precisaAcompanhamento){

        area.innerHTML += `

            <div class="bloco-opcao">

                <h3>🍟 Escolha o acompanhamento:</h3>

                <div class="escolhas">

                    <button
                        class="escolha-acompanhamento"
                        onclick="escolherAcompanhamentoCombo('Batata frita',this)">

                        🍟 Batata frita

                    </button>

                    <button
                        class="escolha-acompanhamento"
                        onclick="escolherAcompanhamentoCombo('Polenta frita',this)">

                        🟨 Polenta frita

                    </button>

                </div>

            </div>

        `;

    }


    atualizarResumoCombo();


    document
        .getElementById("modalCombo")
        .classList.remove("hidden");

}


function escolherTipoCombo(tipo,botao){

    tipoCombo = tipo;


    document
        .querySelectorAll("#opcoesCombo .escolha-frango")
        .forEach(b =>
            b.classList.remove("selecionado")
        );


    botao.classList.add("selecionado");


    const box =
        document.getElementById("mistoComboBox");


    if(box){

        if(tipo === "Misto"){

            box.classList.remove("hidden");

        }else{

            box.classList.add("hidden");

        }

    }


    atualizarResumoCombo();

}


function selecionarMistoCombo(input){

    const marcados =
        [
            ...document.querySelectorAll(
                "#mistoComboBox input:checked"
            )
        ]
        .map(x=>x.value);


    if(marcados.length > 2){

        input.checked = false;

        alert(
            "Escolha apenas 2 tipos."
        );

        return;

    }


    misto = marcados;


    const status =
        document.getElementById(
            "statusMistoCombo"
        );


    if(status){

        status.textContent =
            misto.length === 2
            ?
            "✓ " + misto.join(" + ")
            :
            `Escolha ${2 - misto.length} tipo(s).`;

    }


    atualizarResumoCombo();

}


function escolherAcompanhamentoCombo(tipo,botao){

    acompanhamentoCombo = tipo;


    document
        .querySelectorAll(
            "#opcoesCombo .escolha-acompanhamento"
        )
        .forEach(b =>
            b.classList.remove("selecionado")
        );


    botao.classList.add("selecionado");


    atualizarResumoCombo();

}


function atualizarResumoCombo(){

    const resumo =
        document.getElementById(
            "resumoCombo"
        );


    if(!comboAtual){

        return;

    }


    let preco =
        comboAtual[1];


    let texto = "";


    if(tipoCombo){

        texto +=
            "🍗 " + tipoCombo;


        if(tipoCombo === "Misto"){

            if(misto.length === 2){

                texto =
                    "🍗 Misto: " +
                    misto.join(" + ");

            }else{

                texto =
                    "🍗 Misto — escolha 2 tipos";

            }

        }


        preco +=
            calcularAdicionalFrango(
                tipoCombo,
                misto
            );

    }


    if(acompanhamentoCombo){

        texto +=
            `<br>🍟 ${acompanhamentoCombo}`;

    }


    texto +=
        `<br>💰 R$ ${dinheiro(preco)}`;


    resumo.innerHTML = texto;

}


function confirmarCombo(){

    const nome =
        comboAtual[0];


    const precisaTipo =
        [
            "Combo Individual de Frango",
            "Combo Duo de Frango",
            "Combo Família de Frango",
            "Combo 1",
            "Combo 3"
        ].includes(nome);


    const precisaAcompanhamento =
        [
            "Combo Individual de Frango",
            "Combo Duo de Frango",
            "Combo Família de Frango"
        ].includes(nome);


    if(
        precisaTipo &&
        !tipoCombo
    ){

        alert(
            "Escolha o tipo de frango."
        );

        return;

    }


    if(
        tipoCombo === "Misto" &&
        misto.length !== 2
    ){

        alert(
            "Escolha exatamente 2 tipos para o Misto."
        );

        return;

    }


    if(
        precisaAcompanhamento &&
        !acompanhamentoCombo
    ){

        alert(
            "Escolha batata frita ou polenta frita."
        );

        return;

    }


    let preco =
        comboAtual[1];


    if(tipoCombo){

        preco +=
            calcularAdicionalFrango(
                tipoCombo,
                misto
            );

    }


    let escolha = "";


    if(tipoCombo){

        if(tipoCombo === "Misto"){

            escolha =
                "Misto: " +
                misto.join(" + ");

        }else{

            escolha =
                tipoCombo;

        }

    }


    if(acompanhamentoCombo){

        escolha +=
            " • " +
            acompanhamentoCombo;

    }


    adicionarAoCarrinho(

        nome,

        preco,

        escolha || comboAtual[2] || "",

        []

    );


    fecharModal("modalCombo");

}


/* =========================================================
   CARRINHO
========================================================= */

function adicionarAoCarrinho(
    nome,
    preco,
    descricao,
    extras
){

    const chave =
        nome +
        "|" +
        descricao +
        "|" +
        extras.map(
            x=>x.nome
        ).join(",");


    const existente =
        carrinho.find(
            item => item.chave === chave
        );


    if(existente){

        existente.quantidade++;

    }else{

        carrinho.push({

            chave,

            nome,

            preco,

            descricao,

            adicionais: extras,

            quantidade:1

        });

    }


    atualizarContador();


    alert(
        "✓ Produto adicionado ao pedido!"
    );

}


function atualizarContador(){

    const quantidade =
        carrinho.reduce(
            (total,item)=>
                total + item.quantidade,
            0
        );


    document
        .getElementById("contador")
        .textContent =
        quantidade;

}


/* ================= ABRIR CARRINHO ================= */

function abrirCarrinho(){

    renderizarCarrinho();

    document
        .getElementById("modalCarrinho")
        .classList.remove("hidden");

}


/* ================= RENDERIZAR CARRINHO ================= */

function renderizarCarrinho(){

    const lista =
        document.getElementById(
            "listaCarrinho"
        );


    if(!carrinho.length){

        lista.innerHTML =
            `<p>
                🛒 Seu pedido está vazio.
            </p>`;

        atualizarValores();

        return;

    }


    lista.innerHTML = "";


    carrinho.forEach((item,index)=>{

        const precoUnitario =
            item.preco +
            item.adicionais.reduce(
                (total,adicional)=>
                    total + adicional.preco,
                0
            );


        const valorTotal =
            precoUnitario *
            item.quantidade;


        const div =
            document.createElement("div");


        div.className = "item";


        let extras = "";


        if(item.adicionais.length){

            extras =
                `<br>➕ Adicionais:
                ${
                    item.adicionais
                    .map(x=>x.nome)
                    .join(", ")
                }`;

        }


        div.innerHTML = `

            <h3>
                ${item.quantidade}x
                ${item.nome}
            </h3>

            ${
                item.descricao
                ?
                `<p>${item.descricao}</p>`
                :
                ""
            }

            ${
                extras
            }

            <p>
                <strong>
                    R$ ${dinheiro(valorTotal)}
                </strong>
            </p>

            <div class="controles">

                <button
                    onclick="alterarQuantidade(${index},-1)">
                    −
                </button>

                <strong>
                    ${item.quantidade}
                </strong>

                <button
                    onclick="alterarQuantidade(${index},1)">
                    +
                </button>

            </div>

        `;


        lista.appendChild(div);

    });


    atualizarValores();

}


/* ================= QUANTIDADE ================= */

function alterarQuantidade(index,quantidade){

    carrinho[index].quantidade +=
        quantidade;


    if(
        carrinho[index].quantidade <= 0
    ){

        carrinho.splice(index,1);

    }


    atualizarContador();

    renderizarCarrinho();

}


/* ================= VALORES ================= */

function atualizarValores(){

    const subtotal =
        carrinho.reduce(
            (total,item)=>{

                const extras =
                    item.adicionais.reduce(
                        (soma,adicional)=>
                            soma + adicional.preco,
                        0
                    );


                return total +
                    (
                        item.preco +
                        extras
                    ) *
                    item.quantidade;

            },
            0
        );


    const taxa =
        formaRecebimento === "entrega"
        ?
        taxaEntrega
        :
        0;


    document
        .getElementById("subtotal")
        .textContent =
        "R$ " + dinheiro(subtotal);


    document
        .getElementById("taxa")
        .textContent =
        "R$ " + dinheiro(taxa);


    document
        .getElementById("total")
        .textContent =
        "R$ " +
        dinheiro(
            subtotal + taxa
        );

}


/* =========================================================
   ENTREGA / RETIRADA
========================================================= */

function selecionarRecebimento(tipo){

    formaRecebimento = tipo;


    const entrega =
        document.getElementById(
            "botaoEntrega"
        );


    const retirada =
        document.getElementById(
            "botaoRetirada"
        );


    entrega.classList.toggle(
        "ativo",
        tipo === "entrega"
    );


    retirada.classList.toggle(
        "ativo",
        tipo === "retirada"
    );


    document
        .getElementById("campoEndereco")
        .classList.toggle(
            "hidden",
            tipo !== "entrega"
        );


    atualizarValores();

}


/* =========================================================
   PAGAMENTO
========================================================= */

function selecionarPagamento(tipo){

    formaPagamento = tipo;


    document
        .querySelectorAll(".pagamento")
        .forEach(botao =>
            botao.classList.remove(
                "selecionado"
            )
        );


    const mapa = {

        "Dinheiro":
        "pagDinheiro",

        "Crédito":
        "pagCredito",

        "Débito":
        "pagDebito",

        "PIX":
        "pagPix"

    };


    if(mapa[tipo]){

        document
            .getElementById(
                mapa[tipo]
            )
            .classList.add(
                "selecionado"
            );

    }


    document
        .getElementById(
            "detalhesDinheiro"
        )
        .classList.add("hidden");


    document
        .getElementById(
            "detalhesPix"
        )
        .classList.add("hidden");


    precisaTroco = "";

    trocoPara = "";


    if(tipo === "Dinheiro"){

        document
            .getElementById(
                "detalhesDinheiro"
            )
            .classList.remove(
                "hidden"
            );

    }


    if(tipo === "PIX"){

        document
            .getElementById(
                "detalhesPix"
            )
            .classList.remove(
                "hidden"
            );

    }

}


/* ================= TROCO ================= */

function mostrarCampoTroco(mostrar){

    document
        .getElementById(
            "campoTrocoContainer"
        )
        .classList.toggle(
            "hidden",
            !mostrar
        );


    if(!mostrar){

        document
            .getElementById(
                "trocoPara"
            )
            .value = "";

        trocoPara = "";

    }

}


/* ================= COPIAR PIX ================= */

function copiarPix(){

    if(
        navigator.clipboard &&
        navigator.clipboard.writeText
    ){

        navigator.clipboard
            .writeText(chavePix)
            .then(()=>{

                alert(
                    "✓ Chave PIX copiada!"
                );

            })
            .catch(()=>{

                alert(
                    "Chave PIX: " +
                    chavePix
                );

            });

    }else{

        alert(
            "Chave PIX: " +
            chavePix
        );

    }

}


/* =========================================================
   ENVIAR WHATSAPP
========================================================= */

function enviarWhatsApp(){

    if(!carrinho.length){

        alert(
            "Seu pedido está vazio."
        );

        return;

    }


    const nome =
        document
        .getElementById(
            "nomeCliente"
        )
        .value
        .trim();


    const observacao =
        document
        .getElementById(
            "observacoes"
        )
        .value
        .trim();


    if(!nome){

        alert(
            "Digite seu nome."
        );

        return;

    }


    let rua = "";

    let bairro = "";


    if(
        formaRecebimento === "entrega"
    ){

        rua =
            document
            .getElementById(
                "ruaCliente"
            )
            .value
            .trim();


        bairro =
            document
            .getElementById(
                "bairroCliente"
            )
            .value
            .trim();


        if(!rua){

            alert(
                "Digite sua rua."
            );

            return;

        }


        if(!bairro){

            alert(
                "Digite seu bairro."
            );

            return;

        }

    }


    if(!formaPagamento){

        alert(
            "Escolha uma forma de pagamento."
        );

        return;

    }


    /* ===== DINHEIRO ===== */

    if(
        formaPagamento === "Dinheiro"
    ){

        const selecionado =
            document.querySelector(
                'input[name="troco"]:checked'
            );


        if(!selecionado){

            alert(
                "Informe se precisa de troco."
            );

            return;

        }


        precisaTroco =
            selecionado.value;


        if(
            precisaTroco === "Sim"
        ){

            trocoPara =
                document
                .getElementById(
                    "trocoPara"
                )
                .value
                .trim();


            if(!trocoPara){

                alert(
                    "Digite para quanto precisa de troco."
                );

                return;

            }

        }

    }


    /* ===== CALCULAR VALORES ===== */

    let subtotal = 0;


    let mensagem =
`🍗 *BENVENUTO CHICKEN* 🍗
━━━━━━━━━━━━━━━━━━
🛒 *NOVO PEDIDO*
━━━━━━━━━━━━━━━━━━

👤 *Nome:* ${nome}

`;


    if(
        formaRecebimento === "entrega"
    ){

        mensagem +=
`🚚 *ENTREGA*
📍 *Rua:* ${rua}
🏘️ *Bairro:* ${bairro}

`;

    }else{

        mensagem +=
`🏪 *RETIRADA NO LOCAL*

`;

    }


    mensagem +=
`🍔 *ITENS DO PEDIDO*
━━━━━━━━━━━━━━━━━━

`;


    carrinho.forEach(item=>{

        const extras =
            item.adicionais.reduce(
                (total,adicional)=>
                    total + adicional.preco,
                0
            );


        const valorUnitario =
            item.preco + extras;


        const valorTotal =
            valorUnitario *
            item.quantidade;


        subtotal +=
            valorTotal;


        mensagem +=
`🍗 *${item.quantidade}x ${item.nome}*
💰 R$ ${dinheiro(valorTotal)}
`;


        /*
           Para manter o WhatsApp limpo,
           não colocamos as composições
           normais dos produtos.
        */


        if(item.adicionais.length){

            mensagem +=
`➕ *Adicionais:* ${
                item.adicionais
                .map(x=>x.nome)
                .join(", ")
            }
`;

        }


        /*
           Para baldes e combos,
           as escolhas feitas pelo cliente
           estão em descricao.
        */

        if(
            item.descricao &&
            (
                item.nome.includes("Balde") ||
                item.nome.includes("Combo")
            )
        ){

            mensagem +=
`🔹 *Escolha:* ${item.descricao}
`;

        }


        mensagem += "\n";

    });


    const taxa =
        formaRecebimento === "entrega"
        ?
        taxaEntrega
        :
        0;


    const total =
        subtotal + taxa;


    mensagem +=
`━━━━━━━━━━━━━━━━━━
💰 *Subtotal:* R$ ${dinheiro(subtotal)}
🚚 *Taxa de entrega:* R$ ${dinheiro(taxa)}
💵 *TOTAL:* R$ ${dinheiro(total)}

💳 *PAGAMENTO*
━━━━━━━━━━━━━━━━━━
💳 *Forma:* ${formaPagamento}
`;


    if(
        formaPagamento === "PIX"
    ){

        mensagem +=
`🔑 *Chave PIX:* ${chavePix}
`;

    }


    if(
        formaPagamento === "Dinheiro"
    ){

        mensagem +=
`🔄 *Precisa de troco:* ${precisaTroco}
`;

        if(
            precisaTroco === "Sim"
        ){

            mensagem +=
`💵 *Troco para:* ${trocoPara}
`;

        }

    }


    if(observacao){

        mensagem +=
`
📝 *OBSERVAÇÃO:*
${observacao}
`;

    }


    mensagem +=
`
━━━━━━━━━━━━━━━━━━
❤️ Obrigado por pedir na Benvenuto Chicken!
`;


    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(
            mensagem
        );


    window.open(
        url,
        "_blank"
    );

}


/* ================= FECHAR MODAL ================= */

function fecharModal(id){

    const modal =
        document.getElementById(id);


    if(modal){

        modal.classList.add(
            "hidden"
        );

    }

}


/* ================= INICIAR ================= */

mostrarInicio();

atualizarContador();

selecionarRecebimento("retirada");
