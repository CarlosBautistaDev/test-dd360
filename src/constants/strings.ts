export const GAME_TITLE ='WORDLE'

export const WIN_MESSAGES = ['¡Así se hace!', 'Impresionante', '¡Bien hecho!']
export const NOT_ENOUGH_LETTERS_MESSAGE = 'No hay suficientes letras'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para mejorar la vista del color'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Debe usar ${guess} en la posición ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Supongo que debe contener ${letter}`
export const ENTER_TEXT = 'ENTER'
export const STATISTICS_TITLE = 'Estadísticas'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const TOTAL_TRIES_TEXT = 'Intentos totales'
export const CURRENT_STREAK_TEXT = 'Racha actual'


