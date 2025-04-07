const word = prompt("Qual è la parola?");

function palindrom(word) {
  for (let i = 0; i < word.length / 2; i++) {
    // Se un carattere non corrisponde al carattere nell'altra metà: NON palindroma
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}

if (palindrom(word)) {
  console.log(word + " è una parola palindroma.");
} else {
  console.log(word + " non è una parola palindroma.");
}
