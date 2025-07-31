document.getElementById("rollButton").addEventListener("click", playGame);

function playGame() {
  const player = Math.floor(Math.random() * 6) + 1;
  const computer = Math.floor(Math.random() * 6) + 1;

  let message = `あなた：${player}　コンピュータ：${computer}<br>`;

  if (player > computer) {
    message += "🎉 勝ち！";
  } else if (player < computer) {
    message += "😢 負け...";
  } else {
    message += "🤝 引き分け！";
  }

  document.getElementById("result").innerHTML = message;
}