-- Step 1: Insert into public.listings (similar to original, but simplified content field)
INSERT INTO public.listings (
  id,
  title,
  company,
  hue,
  rounding,
  favicon,
  badges,
  created_at,
  updated_at
) VALUES
(
  1,
  'Frontend Engineer',
  'Whiteaway Group',
  150,
  true,
  'https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico',
  'Remote,Full-time,Aarhus',
  '2025-06-01 07:34:33.039531',
  '2025-06-17 12:47:24.129716'
),
(
  2,
  'Senior Manager - Embedded Software',
  'Meta',
  213,
  true,
  'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
  'Full-time,Copenhagen',
  '2025-06-01 11:40:42.328017',
  '2025-06-17 12:47:24.129716'
),
(
  3,
  'Software Engineer, Product',
  'Meta',
  213,
  true,
  'https://static.xx.fbcdn.net/rsrc.php/v4/yR/r/T4gf4KKiTO9.png',
  'Meta,Engineering,Product',
  '2025-06-14 06:07:33.437887',
  '2025-06-17 12:47:24.129716'
);

-- Step 2: Insert into public.content_blocks
-- This part needs to be dynamically generated by parsing the original 'content' strings.
-- I'll provide the generated SQL for your provided seed data.

-- Listing 1: Frontend Engineer
INSERT INTO public.content_blocks (listing_id, "order", type, content) VALUES
(1, 0, 'h3', 'About the Role'),
(1, 1, 'paragraph', 'We''re looking for a senior-level product manager to join the team.'),
(1, 2, 'paragraph', 'In this role, you''ll be responsible for leading the development of products end-to-end, from conception through development and rollout. If you''re excited to have a lot of ownership while remaining in the details day to day, this might be a great fit for you.'),
(1, 3, 'paragraph', 'Linear is a product-led company that focuses on both building and selling. It''s up to you to bring together the building and selling sides of the company in order to create something that our customers will love.'),
(1, 4, 'h3', 'Requirements'),
(1, 5, 'paragraph', '- 6+ years experience in the software industry'),
(1, 6, 'paragraph', '- Previous experience in product management and/or engineering leadership roles'),
(1, 7, 'paragraph', '- Exceptional product and operational judgment'),
(1, 8, 'paragraph', '- Strong root-cause and systems thinking'),
(1, 9, 'h3', 'What You''ll Do'),
(1, 10, 'paragraph', '- Perform up-front discovery through user interviews, competitive research, data analysis, etc., and present findings to the team with conviction and rigor'),
(1, 11, 'paragraph', '- Help engineers and designers deeply understand user needs, empowering them to make great product decisions'),
(1, 12, 'paragraph', '- Craft messaging around upcoming features that resonates with users'),
(1, 13, 'paragraph', '- Enable sales and marketing teams to effectively communicate with and win with customers'),
(1, 14, 'h3', 'What We''re Looking For'),
(1, 15, 'paragraph', '- World-class design & product taste'),
(1, 16, 'paragraph', '- Shameless curiosity, a propensity to question things deeply'),
(1, 17, 'paragraph', '- Extreme speed and clarity'),
(1, 18, 'h3', 'What We Offer'),
(1, 19, 'paragraph', '- Some of the most interesting and challenging work you will do'),
(1, 20, 'paragraph', '- Being surrounded by some of the most talented people you will ever work with'),
(1, 21, 'paragraph', '- Flexibility, fully remote work'),
(1, 22, 'paragraph', '- Paid lunch and coffee during workdays'),
(1, 23, 'paragraph', '- Paid co-working space/desk at an office'),
(1, 24, 'paragraph', '- Regular team events and offsites'),
(1, 25, 'paragraph', '- 5 weeks paid vacation'),
(1, 26, 'paragraph', '- 4 months paid parental leave'),
(1, 27, 'paragraph', '- Employee-friendly equity terms (early exercise, extended exercise)'),
(1, 28, 'h3', 'Learn More'),
(1, 29, 'paragraph', '- [A story about our mission: Read Me](https://linear.app/readme)'),
(1, 30, 'paragraph', '- [Scatter Brain chat with our CEO, Karri Saarinen: A better way to build Software](https://sarharibhakti.substack.com/p/a-better-way-to-build-software)'),
(1, 31, 'paragraph', '- [Sequoia Capital Spotlight: Designing for the Developers](https://www.sequoiacap.com/article/designing-for-the-developers/)'),
(1, 32, 'paragraph', '- [Lenny’s Newsletter Podcast with our CEO Karri: Inside Linear](https://www.lennysnewsletter.com/p/inside-linear-building-with-taste)'),
(1, 33, 'paragraph', '- [Lenny’s Newsletter Podcast with our Head of Product, Nan Yu](https://www.lennysnewsletter.com/p/linears-secret-to-building-beloved)');

-- Listing 2: Senior Manager - Embedded Software (simplified as content was 'essa')
INSERT INTO public.content_blocks (listing_id, "order", type, content) VALUES
(2, 0, 'paragraph', 'essa');

-- Listing 3: Software Engineer, Product
INSERT INTO public.content_blocks (listing_id, "order", type, content) VALUES
(3, 0, 'paragraph', 'We are the teams who create all of Meta''s products used by billions of people around the world. Want to build new features and improve existing products like Messenger, Video, Groups, News Feed, Search and more? Want to solve unique, large-scale, highly complex technical problems? Meta is seeking experienced full-stack Software Engineers to join our product teams.'),
(3, 1, 'h3', 'Responsibilities'),
(3, 2, 'paragraph', '- Full-stack web/mobile application development with a variety of languages'),
(3, 3, 'paragraph', '- Create consumer products and features using Hack'),
(3, 4, 'paragraph', '- Implement web or mobile interfaces using XHTML, CSS, and JavaScript'),
(3, 5, 'paragraph', '- Work closely with PM and Design to define feature specs and build with React & React Native'),
(3, 6, 'paragraph', '- Work closely with Ops and Infra to build and scale back-end services'),
(3, 7, 'paragraph', '- Build report interfaces and data feeds'),
(3, 8, 'h3', 'Minimum Qualifications'),
(3, 9, 'paragraph', '- 8+ years programming experience'),
(3, 10, 'paragraph', '- 6+ years building large-scale applications'),
(3, 11, 'paragraph', '- Experience with scripting languages such as Python, JavaScript, or Hack'),
(3, 12, 'paragraph', '- Experience leading major initiatives'),
(3, 13, 'paragraph', '- Bachelor’s degree in CS, CE, or equivalent practical experience'),
(3, 14, 'h3', 'Preferred'),
(3, 15, 'paragraph', '- Experience with C, C++, Java, Swift, or Kotlin'),
(3, 16, 'paragraph', '$85.10/hour – $251 000/year + bonus + equity + benefits');

-- Step 3: Clear the old 'content' field in listingsTable (Optional, but good practice if it's no longer used)
-- ALTER TABLE public.listings DROP COLUMN content;
-- You'll need to run this separately as it's a DDL statement.
