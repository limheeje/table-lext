export const KEY_NAME = Object.freeze({
  'dangol/Red': '--color-dangol-red',
  'dangol/Blue': '--color-dangol-blue',
  'dangol/Purple': '--color-dangol-purple',
  'dangol/Black_0': '--color-dangol-balck0',
  'Gray/gray_7': '--color-dangol-gray-7',
  'Gray/gray_9': '--color-dangol-gray-9',
  'Gray/gray_line': '--color-dangol-gray-line',
  'Gray/gray_line2': '--color-dangol-gray-line-2',
  'Gray/gray_BG': '--color-dangol-gray-bg',
  'dangol/white_0': '--color-dangol-white0',
  'Gradient/01': '--color-dangol-gradient'
})

export default function color(s: string) {
  const _KEY_NAME = KEY_NAME as Record<string, any>
  return Object.values(_KEY_NAME).includes(s) ? `var(${s})` : 'black'
}
