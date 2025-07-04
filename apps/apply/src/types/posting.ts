export interface Posting {
    id: number 
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
}