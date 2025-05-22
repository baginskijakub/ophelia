import { Posting } from "../types";

export const posting: Posting = {
    title: "Frontend Engineer",
    company: {
      name: "Whiteaway Group",
      image: {
        width: 32,
        height: 32,
        src: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico",
      }
    },
    content: `We’re looking for a frontend engineer who cares about great UI, fast performance, and clean architecture. You’ll work closely with our product team to bring powerful features to life in a simple, intuitive interface.`,
    about: `Loop Commerce is a fast-growing startup helping brands personalize their shopping experience with smarter tools. We’re a remote-first team based in Europe and the US, backed by leading investors.`,
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
    skills: ["Component architecture", "Accessibility", "State management", "Testing"],
    perks: ["Remote-first", "Equity", "Learning budget", "Async-friendly culture"],
  };