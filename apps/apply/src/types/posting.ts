export interface Posting {
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
    tools: string[]
    skills: string[]
    perks: string[]
}