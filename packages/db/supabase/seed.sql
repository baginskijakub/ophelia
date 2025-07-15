INSERT INTO public.organizations (
  id,
  name,
  logo,
  theme,
  mode,
  hue,
  about,
  rounding,
  font,
  created_at,
  updated_at
) VALUES
(
  'org_01K07QB2PPQHSW6BA33DXV0MH2',
  'Meta',
  'https://static.xx.fbcdn.net/rsrc.php/v4/yR/r/T4gf4KKiTO9.png',
  'tech',
  'light',
  213,
  'Meta builds technologies that help people connect, find communities, and grow businesses. Apps like Messenger, Instagram and WhatsApp empower billions. Now we''re moving beyond 2-D screens toward immersive experiences such as AR/VR.',
  true,
  'Inter',
  '2025-06-01 07:34:33.039531',
  '2025-06-17 12:47:24.129716'
),
(
  'org_01K07PVFFX10TZ5R81S9CTREET',
  'Whiteaway Group',
  'https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico',
  'pastel',
  'light',
  150,
  'Linear is a product-led company that focuses on both building and selling. It''s up to you to bring together the building and selling sides of the company in order to create something that our customers will love.',
  true,
  'Inter',
  '2025-06-01 07:34:33.039531',
  '2025-06-17 12:47:24.129716'
),
(
  'org_01K07QDBS7XRDJM7HCX0XZD135',
  'Demant (Oticon)',
  'https://www.oticon.com/favicon.ico',
  'default',
  'light',
  270,
  'Oticon is a part of Demant. Demant is a world-leading hearing healthcare and technology group built on a heritage of care, health, and innovation since 1904. The Group offers innovative technologies, solutions, and expertise to help people hear better.',
  true,
  'Inter',
  '2025-06-01 11:40:42.328017',
  '2025-06-17 12:47:24.129716'
);

-- Insert mock users
INSERT INTO public.users (
  id,
  created_at,
  updated_at
) VALUES
(
  'user_01JXTE4JB2S4PMA40ZX07DCZR8',
  '2025-05-15 09:20:15.123456',
  '2025-05-15 09:20:15.123456'
),
(
  'user_01JZE5M79F126NWRQ3BNJ97946',
  '2025-05-16 14:30:22.654321',
  '2025-05-16 14:30:22.654321'
),
(
  'user_01JXSMRXG9M1F9M3761CPBA7FB',
  '2025-05-17 11:45:33.987654',
  '2025-05-17 11:45:33.987654'
);

-- Insert organization memberships
INSERT INTO public.organization_memberships (
  id,
  user_id,
  organization_id,
  role,
  created_at,
  updated_at
) VALUES
-- User 1 in all 3 orgs
(
  'om_01E4ZCR3C56J083X43JQXF3JK5',
  'user_01JXTE4JB2S4PMA40ZX07DCZR8',
  'org_01K07QB2PPQHSW6BA33DXV0MH2',
  'admin',
  '2025-05-15 09:25:15.123456',
  '2025-05-15 09:25:15.123456'
),
(
  'om_02E4ZCR3C56J083X43JQXF3JK6',
  'user_01JXTE4JB2S4PMA40ZX07DCZR8',
  'org_01K07PVFFX10TZ5R81S9CTREET',
  'member',
  '2025-05-15 09:25:15.123456',
  '2025-05-15 09:25:15.123456'
),
(
  'om_03E4ZCR3C56J083X43JQXF3JK7',
  'user_01JXTE4JB2S4PMA40ZX07DCZR8',
  'org_01K07QDBS7XRDJM7HCX0XZD135',
  'member',
  '2025-05-15 09:25:15.123456',
  '2025-05-15 09:25:15.123456'
),
-- User 2 in all 3 orgs
(
  'om_04E4ZCR3C56J083X43JQXF3JK8',
  'user_01JZE5M79F126NWRQ3BNJ97946',
  'org_01K07QB2PPQHSW6BA33DXV0MH2',
  'member',
  '2025-05-16 14:35:22.654321',
  '2025-05-16 14:35:22.654321'
),
(
  'om_05E4ZCR3C56J083X43JQXF3JK9',
  'user_01JZE5M79F126NWRQ3BNJ97946',
  'org_01K07PVFFX10TZ5R81S9CTREET',
  'admin',
  '2025-05-16 14:35:22.654321',
  '2025-05-16 14:35:22.654321'
),
(
  'om_06E4ZCR3C56J083X43JQXF3JKA',
  'user_01JZE5M79F126NWRQ3BNJ97946',
  'org_01K07QDBS7XRDJM7HCX0XZD135',
  'member',
  '2025-05-16 14:35:22.654321',
  '2025-05-16 14:35:22.654321'
),
-- User 3 in all 3 orgs
(
  'om_07E4ZCR3C56J083X43JQXF3JKB',
  'user_01JXSMRXG9M1F9M3761CPBA7FB',
  'org_01K07QB2PPQHSW6BA33DXV0MH2',
  'member',
  '2025-05-17 11:50:33.987654',
  '2025-05-17 11:50:33.987654'
),
(
  'om_08E4ZCR3C56J083X43JQXF3JKC',
  'user_01JXSMRXG9M1F9M3761CPBA7FB',
  'org_01K07PVFFX10TZ5R81S9CTREET',
  'member',
  '2025-05-17 11:50:33.987654',
  '2025-05-17 11:50:33.987654'
),
(
  'om_09E4ZCR3C56J083X43JQXF3JKD',
  'user_01JXSMRXG9M1F9M3761CPBA7FB',
  'org_01K07QDBS7XRDJM7HCX0XZD135',
  'admin',
  '2025-05-17 11:50:33.987654',
  '2025-05-17 11:50:33.987654'
);

INSERT INTO public.listings (
  id,
  title,
  content,
  badges,
  org_id,
  created_at,
  updated_at
) VALUES
(
  1,
  'Frontend Engineer',
  $$
#### About the Role

We're looking for a senior-level product manager to join the team.

In this role, you'll be responsible for leading the development of products
end-to-end, from conception through development and rollout. If you're excited
to have a lot of ownership while remaining in the details day to day, this
might be a great fit for you.

Linear is a product-led company that focuses on both building and selling. It's
up to you to bring together the building and selling sides of the company in
order to create something that our customers will love.

#### Requirements

- 6+ years experience in the software industry
- Previous experience in product management and/or engineering leadership roles
- Exceptional product and operational judgment
- Strong root-cause and systems thinking

#### What You'll Do

- Perform up-front discovery through user interviews, competitive research,
  data analysis, etc., and present findings to the team with conviction and
  rigor
- Help engineers and designers deeply understand user needs, empowering them to
  make great product decisions
- Craft messaging around upcoming features that resonates with users
- Enable sales and marketing teams to effectively communicate with and win with
  customers

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
- [Lenny's Newsletter Podcast with our CEO Karri: Inside Linear](https://www.lennysnewsletter.com/p/inside-linear-building-with-taste)
- [Lenny's Newsletter Podcast with our Head of Product, Nan Yu](https://www.lennysnewsletter.com/p/linears-secret-to-building-beloved)
$$,
  'Remote,Full-time,Aarhus',
  'org_01K07PVFFX10TZ5R81S9CTREET',
  '2025-06-01 07:34:33.039531',
  '2025-06-17 12:47:24.129716'
),
(
  2,
  'Senior Manager - Embedded Software',
  'Embedded software development role with focus on hearing aid technology and innovation.',
  'Full-time,Copenhagen',
  'org_01K07QDBS7XRDJM7HCX0XZD135',
  '2025-06-01 11:40:42.328017',
  '2025-06-17 12:47:24.129716'
),
(
  3,
  'Software Engineer, Product',
  $$
We are the teams who create all of Meta's products used by billions of people
around the world. Want to build new features and improve existing products like
Messenger, Video, Groups, News Feed, Search and more? Want to solve unique,
large-scale, highly complex technical problems? Meta is seeking experienced
full-stack Software Engineers to join our product teams.

### Responsibilities

- Full-stack web/mobile application development with a variety of languages
- Create consumer products and features using Hack
- Implement web or mobile interfaces using XHTML, CSS, and JavaScript
- Work closely with PM and Design to define feature specs and build with React &
  React Native
- Work closely with Ops and Infra to build and scale back-end services
- Build report interfaces and data feeds

### Minimum Qualifications

- 8+ years programming experience
- 6+ years building large-scale applications
- Experience with scripting languages such as Python, JavaScript, or Hack
- Experience leading major initiatives
- Bachelor's degree in CS, CE, or equivalent practical experience

### Preferred

- Experience with C, C++, Java, Swift, or Kotlin

$85.10/hour – $251 000/year + bonus + equity + benefits
$$,
  'Meta,Engineering,Product',
  'org_01K07QB2PPQHSW6BA33DXV0MH2',
  '2025-06-14 06:07:33.437887',
  '2025-06-17 12:47:24.129716'
);

