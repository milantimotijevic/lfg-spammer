const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'p', 'q', 'r', 's', 't', 'v', 'w']
const vowels = ['a', 'e', 'i', 'o', 'u']

// Generate the bime
const generateBime = () => {
  const length = getRandomInt(4, 10);  
  const letters = []
  for (let index = 0; index < length; index++) {
    const list = (index % 2) ? vowels : consonants
    let letter = list[Math.floor(Math.random() * list.length)]
    if (index === 0) {
        letter = letter.toUpperCase();
    }
    letters.push(letter)
  }
  const bime = letters.join('')
  return bime
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateBime())
