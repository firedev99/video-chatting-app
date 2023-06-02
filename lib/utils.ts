function uniqueID(): string {
  return Math.random().toString(36).slice(2)
}

function generateRandomValue(dict: string[] = []): string {
  let rand = Math.random() * dict.length
  rand = Math.floor(rand)

  return dict[rand]
}

export const firey = {
  uniqueID,
  generateRandomValue,
}
