import { getPossibilitiesCount } from './possibilities'
import { resetPickedValues } from './reset'

document.addEventListener('DOMContentLoaded', () => {
  const reset_button = document.getElementById('reset')
  if (!reset_button) {
    throw new Error('reset button not found')
  }

  reset_button.addEventListener('click', resetPickedValues)

  const possibilities_count_element = document.getElementById('possibilities_count')
  if (possibilities_count_element) {
    const possibilities_count = getPossibilitiesCount()
    possibilities_count_element.textContent = `${possibilities_count}`
  }
})
