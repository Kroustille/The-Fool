import { resetPickedValues } from './reset'

document.addEventListener('DOMContentLoaded', () => {
  const reset_button = document.getElementById('reset')
  if (!reset_button) {
    throw new Error('reset button not found')
  }

  reset_button.addEventListener('click', resetPickedValues)
})
