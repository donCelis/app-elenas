const getFirstCharacter = (name) => name && name.charAt(0).toUpperCase()

export const createAvatar = (name) => {
  return {
    name: getFirstCharacter(name)
  }
}
