The idea of this project is to remove the burden of creating, maintaining and syncing a design system together with component library.

Designers can control their design system as they usually would in figma.
- they can define colors (semantic and primitives)
- they can define typography rules
- they can customize prebuilt components to their liking.
- they can publish and import the design system to figma and use it to design pages, features, etc.

Devs can just import tools and do what they do best - build:
- run `npm i @ophelia/[company]`
- consume the component library

 The idea is to publish it as a react component library based on pure css, the package will expose tailwind config if thats the preffered styling tool so it can be imported to consumer's tailwind config

very rough state, just a side gig im working on atm
