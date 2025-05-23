export type Theme = 'default' | 'pastel' | 'tech'

export interface Branding {
    theme: Theme
    mode: 'light' | 'dark'
    colors: {
        10: string
        30: string
        50: string
        70: string
        80: string
        90: string
    }
    rounding: boolean
    font: string
}