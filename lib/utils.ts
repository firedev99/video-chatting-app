function uniqueID(): string {
  return Math.random().toString(36).slice(2)
}

function generateRandomValue(dict: string[] = []): string {
  let rand = Math.random() * dict.length
  rand = Math.floor(rand)

  return dict[rand]
}

function camelize(text: string) {
  let _text = text
    .toLowerCase()
    .trim()
    .split(/[.\-_\s]/g) // removes all (- space _ .)
    .reduce(
      (str, nextWord) => str + nextWord[0].toUpperCase() + nextWord.slice(1)
    )

  return _text
}

export const firey = {
  uniqueID,
  generateRandomValue,
  camelize,
}
