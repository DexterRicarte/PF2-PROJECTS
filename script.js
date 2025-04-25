const words = ["apple", "banana", "grape", "orange", "peach", "kiwi"];
const secretWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 5;
let gameOver = false;

console.log("Secret word for testing:", secretWord); // For testing

function submitGuess() {
  if (gameOver) return;

  const inputField = document.getElementById("userInput");
  const message = document.getElementById("message");
  const guess = inputField.value.trim().toLowerCase();

  if (guess === "") {
    attemptsLeft--;
    message.innerHTML = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
  } else if (guess === secretWord) {
    message.innerHTML = `<span class="win">Congratulations! You guessed the secret word!</span>`;
    gameOver = true;
    return;
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      message.innerHTML = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
    } else {
      message.innerHTML = `<span class="lose">Game over! The secret word was '${secretWord}'.</span>`;
      gameOver = true;
    }
  }
  message.innerHTML += `<br>Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;

  document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") submitGuess();
  });
  

  inputField.value = "";
}
