/* 

Desenvolvido dia 16/12/2025 por Samuel Mioni

Objetivo:

    Given a string and a target number, determine
    whether the string contains exactly the target 
    number of consonants.

    Consonants are all alphabetic characters except 
    "a", "e", "i", "o", and "u" in any case.
    Ignore digits, punctuation, spaces, and other 
    non-letter characters when counting.

Link do desafio:
- https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-16

Complexidade:

    A complexidade desse código é O(n), pois o método
    replace() com uma expressão regular precisa percorrer
    toda a string.

*/


function hasConsonantCount(text, target) {
  
  let textoFormatado = text.replace(/[^a-zA-Z]|[aeiou]/gi, "");
  console.log(`consoantes: ${textoFormatado} tamanho: ${textoFormatado.length}`);

  if(textoFormatado.length === target){
    text = true;
  }
  else {
    text = false;
  }

  return text;
}

hasConsonantCount("helloworld", 7);
hasConsonantCount("eieio", 5);
hasConsonantCount("freeCodeCamp Rocks!", 11);
hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24)
hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23)

