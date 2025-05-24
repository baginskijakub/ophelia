export interface Posting {
    id: string
    title: string
    company: {
        name: string
        image: {
            src: string
            width: number
            height: number
        }
    }
    content: string
    about: string
    badges: string[]
    tools: string[]
    skills: string[]
    perks: string[]
}