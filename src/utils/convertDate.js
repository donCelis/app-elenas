export const converDate = (entry = new Date()) => {
  const date = new Date(entry)
  return new Intl.DateTimeFormat('en-GB').format(date)
}
