const guessingGame = () => {
  let guessNumber = Math.ceil(Math.random() * 20);

  let pnjGuess = Math.ceil(Math.random() * 20);

  if (guessNumber <= pnjGuess) {
    alert(
      `PERDU, vous avez fait ${guessNumber} et votre adversaire à fait ${pnjGuess}!`
    );
  } else {
    alert(
      `GAGNE, vous avez fait ${guessNumber} et votre adversaire à fait ${pnjGuess}!`
    );
  }
};
