const rand = () => {
  return Math.random().toString(36).substr(2)
}

const fakeToken = () => {
  return rand() + rand()
}

export default fakeToken
