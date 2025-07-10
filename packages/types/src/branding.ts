export type Theme = 'default' | 'pastel' | 'tech'

export interface Branding {
  logo: string
  theme: Theme
  mode: 'light' | 'dark'
  color: {
    hue: number
  }
  rounding: boolean
  font: string
}
