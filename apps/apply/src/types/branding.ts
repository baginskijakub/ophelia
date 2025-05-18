export type Theme = 'default' | 'pastel' | 'tech'

export interface Branding {
    theme: Theme
    mode: 'light' | 'dark'
    colors: {
        primary: string
        secondary: string
    }
    font: string
}