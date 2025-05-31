import { Branding, Posting } from "../types";

export const posting: Posting = {
    id: 'Frontend Engineer',
    title: "Frontend Engineer",
    company: {
      name: "Whiteaway Group",
      image: {
        width: 32,
        height: 32,
        src: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico",
      }
    },
    content: `
#### About the Role

We're looking for a senior-level product manager to join the team.

In this role, you'll be responsible for leading the development of products end-to-end, from conception through development and rollout. If you're excited to have a lot of ownership while remaining in the details day to day, this might be a great fit for you.

Linear is a product-led company that focuses on both building and selling. It's up to you to bring together the building and selling sides of the company in order to create something that our customers will love.

#### Requirements

- 6+ years experience in the software industry
- Previous experience in product management and/or engineering leadership roles
- Exceptional product and operational judgment
- Strong root-cause and systems thinking

#### What You'll Do

- Perform up-front discovery through user interviews, competitive research, data analysis, etc., and present findings to the team with conviction and rigor
- Help engineers and designers deeply understand user needs, empowering them to make great product decisions
- Craft messaging around upcoming features that resonates with users
- Enable sales and marketing teams to effectively communicate with and win with customers

#### What We're Looking For

- World-class design & product taste
- Shameless curiosity, a propensity to question things deeply
- Extreme speed and clarity

#### What We Offer

- Some of the most interesting and challenging work you will do
- Being surrounded by some of the most talented people you will ever work with
- Flexibility, fully remote work
- Paid lunch and coffee during workdays
- Paid co-working space/desk at an office
- Regular team events and offsites
- 5 weeks paid vacation
- 4 months paid parental leave
- Employee-friendly equity terms (early exercise, extended exercise)

#### Learn More

- [A story about our mission: Read Me](https://linear.app/readme)
- [Scatter Brain chat with our CEO, Karri Saarinen: A better way to build Software](https://sarharibhakti.substack.com/p/a-better-way-to-build-software)
- [Sequoia Capital Spotlight: Designing for the Developers](https://www.sequoiacap.com/article/designing-for-the-developers/)
- [Lenny’s Newsletter Podcast with our CEO Karri: Inside Linear: Building with taste, craft, and focus](https://www.lennysnewsletter.com/p/inside-linear-building-with-taste)
- [Lenny’s Newsletter Podcast with our Head of Product, Nan Yu: Linear’s secret to building beloved B2B products](https://www.lennysnewsletter.com/p/linears-secret-to-building-beloved)
`,
    about: `
Linear is a product-led company that focuses on both building and selling. It's up to you to bring together the building and selling sides of the company in order to create something that our customers will love.
    `,
    badges: ["Remote", "Full-time", "Senior"],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
    skills: ["Component architecture", "Accessibility", "State management", "Testing"],
    perks: ["Remote-first", "Equity", "Learning budget", "Async-friendly culture"],
  };

  export const branding: Branding = {
    theme: 'pastel',
    mode: 'light',
    color: {
      hue: 150
    },
    rounding: true,
    font: 'Inter'
  }