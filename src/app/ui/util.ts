export const getElementByIdOrThrow = (id: string): HTMLElement => {
  const element = document.getElementById(id)
  if (!element) {
    throw new Error(`element with id "${id}" not found`)
  }
  
  return element
}
