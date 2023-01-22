const rand = (): string => {
  return Math.random().toString(36).substr(2)
}

const fakeToken = (): string => {
  return rand() + rand()
}

export default fakeToken
