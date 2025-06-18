// TODO: decide whether to keep or remove
// is this something that we want to keep?
// for now I will use much simpler type

export interface Application {
  firstName: string;
  lastName: string;
  email: string;
  resume: File | null;
}

// export type ApplicationQuestion = {
//     type: 'checkbox' | 'input' | 'textarea'
//     label: string
//     optional: boolean
// }
//
// interface ApplicationExperience {
//     from: string
//     to: string
//     company: string
//     location?: string
//     title: string
//     description?: string
// }
//
// interface ApplicationEducation {
//     from: string
//     to: string
//     institution: string
//     location?: string
//     title: string
// }
//
//
//
// export interface ApplicationForm {
//     resume: {
//         name: string
//         content: Blob
//     }
//     contact: {
//         firstName: string
//         lastName: string
//         email: string
//         phone: string
//         adressLine: string
//         city: string
//         postalCode: string
//         country: string
//     }
//     experience: ApplicationExperience[]
//     education: ApplicationEducation[]
//     additionalQuestions: ApplicationQuestion[]
// }

