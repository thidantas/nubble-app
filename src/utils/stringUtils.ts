function capitalizeFirstLetter(value: string): string {
  return value
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase().concat(word.substring(1).toLocaleLowerCase())
    )
    .join(' ')
    .trim()
}

export const stringUtils = {
  capitalizeFirstLetter
}
