const phrases = [
  "Quando você vai ao médico, prefere exame rápido ou alguém que vá fundo no problema?",
  "Quando tá carente, você pede um abraço apertado ou prefere alguém que te escute com calma?",
  "Quando vou reformar a casa, gosto de começar pela entrada e terminar no fundo.",
  "Quando você cozinha pra alguém, serve devagar ou gosta de caprichar na porção?",
  "Quando o carro não pega, você insiste até funcionar ou chama quem sabe lidar melhor?",
  "Quando tá frio, você prefere coberta leve ou algo que esquente de verdade?",
  "Quando o trabalho aperta, você encara sozinho ou pede uma mãozinha?",
  "Quando vai montar um móvel, lê o manual ou tenta encaixar do seu jeito?",
  "Quando o serviço é pesado, você faz com cuidado ou vai com tudo de uma vez?",
  "Quando algo não entra de primeira, você força ou tenta com mais jeito?",

  "Quando tá difícil de resolver, você insiste até dar certo ou troca de posição?",
  "Quando a coisa começa a fluir, você acelera ou mantém o ritmo?",
  "Quando chega no final, você já tá cansado ou satisfeito?",
  "Quando alguém pede ajuda, você faz rapidinho ou gosta de demorar?",
  "Quando o encaixe é perfeito, você percebe na hora ou só depois?",
  "Quando começa devagar, não costuma terminar melhor?",
  "Quando aperta demais, você gosta ou prefere aliviar?",
  "Quando tá tudo molhado, facilita o trabalho, não facilita?",
  "Quando dá certo de primeira, perde a graça ou ganha confiança?",
  "Quando termina, você já pensa na próxima vez?",

  "Quando você corta o cabelo, prefere curto na frente ou bem trabalhado atrás?",
  "Quando tá estressado, você descarrega sozinho ou chama alguém pra ajudar?",
  "Quando o negócio é grande, você encara ou fica só olhando?",
  "Quando começa pequeno, você acha que cresce com o tempo?",
  "Quando alguém te chama, você vai com pressa ou faz charme?",
  "Quando a pressão aumenta, você aguenta firme ou pede uma pausa?",
  "Quando você pega pesado, costuma avisar antes?",
  "Quando entra no assunto, você vai direto ou dá uma rodeada?",
  "Quando o trabalho rende, você repete ou se dá por satisfeito?",
  "Quando começa a suar, é sinal de que tá funcionando, né?",

  "Quando você segura, prefere com firmeza ou com cuidado?",
  "Quando o ritmo acelera, você acompanha ou pede pra diminuir?",
  "Quando fica duro de resolver, você insiste ou deixa pra depois?",
  "Quando chega no limite, você para ou força mais um pouco?",
  "Quando encaixa certinho, você comemora ou mantém a postura?",
  "Quando a coisa esquenta, você mantém o controle?",
  "Quando alguém pede devagar, você respeita ou ignora?",
  "Quando o espaço é pequeno, você se adapta?",
  "Quando a tarefa é longa, você tem resistência?",
  "Quando acaba, você sente alívio ou saudade?",

  "Quando você entra em algo novo, vai com calma ou sem medo?",
  "Quando o fundo é importante, você chega lá?",
  "Quando alguém pede mais, você entrega?",
  "Quando fica apertado, você dá um jeito?",
  "Quando começa simples, pode ficar intenso?",
  "Quando você pega no pesado, costuma cansar?",
  "Quando dá trabalho, vale a pena no final?",
  "Quando alguém se abre com você, você aproveita o momento?",
  "Quando a experiência é boa, você recomenda?",
  "Quando termina do jeito certo, dá vontade de repetir?"
];

const phraseEl = document.getElementById("phrase");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);

  phraseEl.classList.remove("phrase");
  void phraseEl.offsetWidth; // reset animação

  phraseEl.textContent = phrases[randomIndex];
  phraseEl.classList.add("phrase");
});