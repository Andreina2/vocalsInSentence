function getSentence (phrase) {
  return phrase
}

sentence= getSentence("Buenos días mundo")
console.log(sentence)

function searchVocals(sentence) {
  let lista = []
  let vocals= ["a", "e", "i", "o", "u"]
  for (let i=0; i< sentence.length; i++) {
    if (vocals.includes(sentence [i]) ){
      lista.push(sentence[i])
    }
  }
  return lista
}

listaVocals= searchVocals(sentence)
console.log(listaVocals)



function deleteDuplicity(lista) {
  return [...new Set(lista)];
}
console.log(deleteDuplicity(['i', 'i']));


function getVocals(sentence) {
  const vocals = searchVocals(sentence);
  return vocals.join(',');
}
console.log(getVocals('Hello World!'));