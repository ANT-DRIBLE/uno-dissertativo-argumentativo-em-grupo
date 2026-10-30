const cartas = [
    {
        categoria: "TESE",
        cor: "#df2929",
        desafio: "As redes sociais influenciam negativamente os jovens? Apresente sua tese."
    },
    {
        categoria: "ARGUMENTO",
        cor: "#2563eb",
        desafio: "Explique por que a educação é importante para combater a desigualdade social."
    },
    {
        categoria: "REPERTÓRIO",
        cor: "#159447",
        desafio: "Cite um filme, livro ou filósofo que possa ser utilizado em uma redação sobre tecnologia."
    },
    {
        categoria: "CONCLUSÃO",
        cor: "#e4b51c",
        desafio: "Apresente uma proposta de intervenção para combater o bullying nas escolas."
    },
    {
        categoria: "CONTRA-ARGUMENTO",
        cor: "#2563eb",
        desafio: "Conteste a afirmação: a tecnologia só traz benefícios para a sociedade."
    },
    {
        categoria: "POLÊMICA",
        cor: "#df2929",
        desafio: "A inteligência artificial representa uma ameaça aos empregos humanos? Defenda sua opinião."
    }
];

let indice = 0;
let pontos = 0;
let restantes = 7;

function mostrarCarta() {
    const carta = cartas[indice];

    document.getElementById("categoria").textContent =
        carta.categoria;

    document.getElementById("desafio").textContent =
        carta.desafio;

    document.getElementById("carta").style.background =
        carta.cor;
}

function jogar() {
    const resposta =
        document.getElementById("resposta").value.trim();

    const mensagem =
        document.getElementById("mensagem");

    if (resposta.length < 15) {
        mensagem.textContent =
            "Escreva uma resposta com pelo menos 15 caracteres!";
        return;
    }

    pontos += 10;
    restantes--;

    document.getElementById("pontos").textContent = pontos;
    document.getElementById("restantes").textContent = restantes;

    document.getElementById("resposta").value = "";

    if (restantes === 0) {
        mensagem.textContent =
            "🎉 UNO! Você venceu! Pontuação: " + pontos;
        document.getElementById("restantes").textContent = 0;
        return;
    }

    mensagem.textContent =
        "Boa jogada! Você ganhou 10 pontos!";

    indice = (indice + 1) % cartas.length;

    mostrarCarta();
}

function comprar() {
    const mensagem =
        document.getElementById("mensagem");

    if (restantes === 0) {
        mensagem.textContent = "A partida já terminou!";
        return;
    }

    indice = (indice + 1) % cartas.length;

    mostrarCarta();

    mensagem.textContent =
        "Você comprou uma nova carta!";
}

mostrarCarta();
