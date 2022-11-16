function getFirstCharacter (name) {
  return name && name.charAt(0).toUpperCase()
}

export const createAvatar = (name) => {
  return {
    name: getFirstCharacter(name)
  }
}
