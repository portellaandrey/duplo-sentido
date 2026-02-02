const phrases = [
  "Quando começa algo novo, você prefere testar primeiro ou já ir até o fundo?",
  "Você gosta mais quando entram devagar ou quando já chegam com tudo?",
  "Quando dá resistência, você insiste ou muda a forma de fazer?",
  "Você é do tipo que gosta de controle ou prefere deixar fluir?",
  "Quando alguém pede com jeitinho, você atende melhor?",
  "Você prefere algo curto e intenso ou longo e bem aproveitado?",
  "Quando a situação esquenta, você mantém a calma ou se empolga?",
  "Você gosta de preparar bem antes ou resolve tudo na hora?",
  "Quando o encaixe é perfeito, você continua ou já fica satisfeito?",
  "Você costuma ir até o fim ou para quando acha que já deu?",
  "Você gosta quando é repetido ou prefere variar sempre?",
  "Quando demora, você perde a paciência ou aguenta firme?",
  "Você é mais de ritmo constante ou gosta de acelerar no final?",
  "Quando a pressão aumenta, você rende mais ou trava?",
  "Você prefere explorar tudo ou focar em um ponto só?",
  "Quando pedem com carinho, fica mais difícil dizer não?",
  "Você gosta quando é surpresa ou quando já está esperando?",
  "Você costuma caprichar na entrada ou no acabamento?",
  "Quando algo não sai de primeira, você tenta de novo?",
  "Você prefere fazer do seu jeito ou se adapta fácil?",
  "Quando é bom, você prolonga ou resolve logo?",
  "Você gosta mais de intensidade ou de constância?",
  "Quando começa devagar, você reclama ou aproveita?",
  "Você é do tipo que gosta de conduzir ou de ser guiado?",
  "Quando a coisa fica apertada, você dá um jeito?",
  "Você prefere algo simples ou cheio de detalhes?",
  "Quando tem desafio, você se anima mais?",
  "Você gosta de repetir quando dá certo?",
  "Quando alguém pede com firmeza, você obedece?",
  "Você costuma prestar atenção nos detalhes finais?",
  "Você gosta de sentir que valeu a pena no final?",
  "Quando começa, você já pensa no final?",
  "Você prefere experimentar tudo ou escolher um favorito?",
  "Quando é intenso demais, você recua ou encara?",
  "Você gosta mais quando dura mais tempo?",
  "Quando o ritmo muda, você acompanha?",
  "Você é mais de improviso ou planejamento?",
  "Quando alguém conduz bem, você se entrega?",
  "Você gosta de manter o controle até o fim?",
  "Quando acaba, você fica satisfeito ou quer mais?",
  "Você gosta quando começa simples e termina intenso?",
  "Quando pedem pra ir com calma, você consegue?",
  "Você prefere algo direto ou cheio de preliminar?",
  "Quando encaixa certinho, você percebe na hora?",
  "Você gosta de testar limites?",
  "Quando dizem “só mais um pouco”, você aceita?",
  "Você é do tipo que aproveita cada etapa?",
  "Quando termina bem feito, você sente orgulho?",
  "Você gosta quando é inesperado?",
  "Quando é bom demais, você repete sem pensar?"
];

document.addEventListener("DOMContentLoaded", () => {
  const phraseEl = document.getElementById("phrase");
  const btn = document.getElementById("btn");
  const choiceBox = document.getElementById("choiceBox");
  const result = document.getElementById("result");

  const acceptBtn = document.querySelector(".accept");
  const rejectBtn = document.querySelector(".reject");
  
  // Botão principal
  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);

    phraseEl.classList.remove("phrase");
    void phraseEl.offsetWidth;

    phraseEl.textContent = phrases[randomIndex];
    phraseEl.classList.add("phrase");

    choiceBox.classList.remove("hidden");
    result.classList.add("hidden");
  });

  // Aceito
  acceptBtn.addEventListener("click", () => {
    choiceBox.classList.add("hidden");

    phraseEl.textContent = "HMMMMMMMMM 😏🔥";
    result.classList.remove("hidden");
  });

  // Pra láaa
  rejectBtn.addEventListener("click", () => {
    choiceBox.classList.add("hidden");
    result.classList.add("hidden");

    phraseEl.textContent = "Clique no botão 😈";
  });
});
