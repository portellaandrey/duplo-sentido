const phrases = [
  "Quando você vai ao médico, prefere exame rápido ou alguém que vá fundo no problema?",
  "Quando tá carente, você pede um abraço apertado ou prefere alguém que te escute com calma?",
  "Quando vou reformar a casa, gosto de começar pela entrada e terminar no fundo.",
  "Quando você cozinha pra alguém, serve devagar ou gosta de caprichar na porção?",
  "Quando algo não entra de primeira, você força ou tenta com mais jeito?"
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

    phraseEl.textContent = "SEU BAITOLAAA 😏🔥";
    result.classList.remove("hidden");
  });

  // Pra láaa
  rejectBtn.addEventListener("click", () => {
    choiceBox.classList.add("hidden");
    result.classList.add("hidden");

    phraseEl.textContent = "Clique no botão 😈";
  });
});
