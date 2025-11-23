function capitalizeFirstLetter(value: string): string {
  return value
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase().concat(word.substring(1).toLocaleLowerCase())
    )
    .join(' ')
}

export const stringUtils = {
  capitalizeFirstLetter
}
