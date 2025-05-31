export type Theme = 'default' | 'pastel' | 'tech'

export interface Branding {
    theme: Theme
    mode: 'light' | 'dark'
    color: {
        hue: number
    }
    rounding: boolean
    font: string
}