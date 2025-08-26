-- Organizations
INSERT INTO public.organizations (
  name,
  workos_id,
  logo,
  hue,
  rounding,
  created_at,
  updated_at
) VALUES
(
  'meta',
  'org_01K07QB2PPQHSW6BA33DXV0MH2',
  'https://static.xx.fbcdn.net/rsrc.php/v4/yR/r/T4gf4KKiTO9.png',
  213,
  true,
  '2025-06-01 07:34:33.039531',
  '2025-06-17 12:47:24.129716'
),
(
  'whiteaway-group',
  'org_01K07PVFFX10TZ5R81S9CTREET',
  'https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico',
  150,
  true,
  '2025-06-01 07:34:33.039531',
  '2025-06-17 12:47:24.129716'
),
(
  'demant-oticon',
  'org_01K07QDBS7XRDJM7HCX0XZD135',
  'https://www.oticon.com/favicon.ico',
  270,
  true,
  '2025-06-01 11:40:42.328017',
  '2025-06-17 12:47:24.129716'
);

-- Users
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

-- Organization memberships
INSERT INTO public.organization_memberships (
  id,
  user_id,
  organization_name,
  role,
  created_at,
  updated_at
) VALUES
('om_01E4ZCR3C56J083X43JQXF3JK5','user_01JXTE4JB2S4PMA40ZX07DCZR8','meta','admin','2025-05-15 09:25:15.123456','2025-05-15 09:25:15.123456'),
('om_02E4ZCR3C56J083X43JQXF3JK6','user_01JXTE4JB2S4PMA40ZX07DCZR8','whiteaway-group','member','2025-05-15 09:25:15.123456','2025-05-15 09:25:15.123456'),
('om_03E4ZCR3C56J083X43JQXF3JK7','user_01JXTE4JB2S4PMA40ZX07DCZR8','demant-oticon','member','2025-05-15 09:25:15.123456','2025-05-15 09:25:15.123456'),
('om_04E4ZCR3C56J083X43JQXF3JK8','user_01JZE5M79F126NWRQ3BNJ97946','meta','member','2025-05-16 14:35:22.654321','2025-05-16 14:35:22.654321'),
('om_05E4ZCR3C56J083X43JQXF3JK9','user_01JZE5M79F126NWRQ3BNJ97946','whiteaway-group','admin','2025-05-16 14:35:22.654321','2025-05-16 14:35:22.654321'),
('om_06E4ZCR3C56J083X43JQXF3JKA','user_01JZE5M79F126NWRQ3BNJ97946','demant-oticon','member','2025-05-16 14:35:22.654321','2025-05-16 14:35:22.654321'),
('om_07E4ZCR3C56J083X43JQXF3JKB','user_01JXSMRXG9M1F9M3761CPBA7FB','meta','member','2025-05-17 11:50:33.987654','2025-05-17 11:50:33.987654'),
('om_08E4ZCR3C56J083X43JQXF3JKC','user_01JXSMRXG9M1F9M3761CPBA7FB','whiteaway-group','member','2025-05-17 11:50:33.987654','2025-05-17 11:50:33.987654'),
('om_09E4ZCR3C56J083X43JQXF3JKD','user_01JXSMRXG9M1F9M3761CPBA7FB','demant-oticon','admin','2025-05-17 11:50:33.987654','2025-05-17 11:50:33.987654');

-- Listings (now with structured fields)
INSERT INTO public.listings (
  id,
  title,
  org_name,
  created_at,
  updated_at,
  about_company,
  about_role,
  responsibilities,
  requirements,
  outro,
  min_salary,
  max_salary,
  salary_period,
  currency,
  employment_type
) VALUES
(
  1,
  'Frontend Engineer',
  'whiteaway-group',
  '2025-06-01 07:34:33.039531',
  '2025-06-17 12:47:24.129716',
  'Whiteaway Group is a leading retailer in home appliances across Scandinavia.',
  'We are looking for a senior-level frontend engineer to join our team.',
  'Build and maintain our e-commerce platform, collaborate with designers and backend engineers, and deliver high-quality user experiences.',
  '5+ years experience with React/TypeScript, strong CSS skills, and experience with design systems.',
  'We offer flexibility, remote work, and a strong engineering culture.',
  55000,
  65000,
  'monthly',
  'DKK',
  'Full-time'
),
(
  2,
  'Senior Manager - Embedded Software',
  'demant-oticon',
  '2025-06-01 11:40:42.328017',
  '2025-06-17 12:47:24.129716',
  'Demant Oticon is a world leader in hearing aid technology.',
  'We are seeking a senior manager to lead our embedded software team.',
  'Lead a team of embedded engineers, drive architecture decisions, and ensure timely delivery of firmware.',
  '10+ years in embedded systems, leadership experience, and strong C/C++ background.',
  'Join us to make a difference in people’s lives through better hearing.',
  70000,
  90000,
  'monthly',
  'DKK',
  'Full-time'
),
(
  3,
  'Software Engineer, Product',
  'meta',
  '2025-06-14 06:07:33.437887',
  '2025-06-17 12:47:24.129716',
  'Meta builds technologies that help people connect, find communities, and grow businesses.',
  'We are looking for experienced full-stack engineers to join our product teams.',
  'Develop new features across Meta products, collaborate with cross-functional teams, and scale systems to billions of users.',
  '8+ years programming experience, 6+ years building large-scale applications, experience with React/React Native and backend services.',
  'Competitive salary, equity, and benefits. Work on products that impact billions.',
  120000,
  180000,
  'yearly',
  'USD',
  'Full-time'
);

-- Reset sequence
SELECT setval('listings_id_seq', (SELECT MAX(id) FROM public.listings), true);
