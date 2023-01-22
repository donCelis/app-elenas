const getFirstCharacter = (name: string): string => name && name.charAt(0).toUpperCase()

export const createAvatar = (name: string): { name: string } => {
  return {
    name: getFirstCharacter(name)
  }
}
