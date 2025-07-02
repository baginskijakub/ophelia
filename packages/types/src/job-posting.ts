export interface JobPosting {
  id: string;
  title: string;
  company: {
    name: string;
    image: string;
  }
  createdAt: string; // ISO date string
  applicantsCount: number;
}
