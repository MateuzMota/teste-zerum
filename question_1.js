// Questão 1. Quando é possível escrever uma palavra a partir de outra, diz-se que uma é
// anagrama da outra, alguns exemplos famosos de anagrama são roma e amor, pato e topa.
// Crie uma função, em qualquer linguagem, que retorne true caso duas strings sejam
// anagramas uma da outra e false, caso contrário.

function anagram(str, secondStr) {
    let arrStr = toArray(str).sort();
    let arrSecondStr = toArray(secondStr).sort();
    
    let isTrue = true;

    for(let i = 0; i < arrStr.length && isTrue; i++) {
        if(arrStr.length === arrSecondStr.length) {
            if (arrStr[i] === arrSecondStr[i]) {
                isTrue = true;
            } else {
                isTrue = false;
            }
        } else {
            isTrue = false;
        }
    }
    return isTrue;
}

function toArray(str) {
    let arr = [];

    for(i in str) {
        arr.push(str[i]);
    }

    return arr;
}
  
console.log(anagram("roma", "amor"));
console.log(anagram("pato", "topa"));
console.log(anagram("gato", "lebre"));
console.log(anagram("iracema", "america"));
console.log(anagram("papa", "paprica"));