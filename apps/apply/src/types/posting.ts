export interface Posting {
    title: string
    caption?: string
    company: {
        name: string
        image: string
    }
    content: string
    about: string
    tools: string[]
    skills: string[]
    perks: string[]
}