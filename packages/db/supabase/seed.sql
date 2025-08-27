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
  status,
  page_views,
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
  'accepting-applications',
  127,
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
  'accepting-applications',
  89,
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
  'accepting-applications',
  243,
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

-- Insert pipeline statuses for each listing
INSERT INTO public.pipeline_statuses (listing_id, name, "order", created_at) VALUES
-- Frontend Engineer (listing 1) pipeline
(1, 'Applied', 0, '2025-06-01 07:35:00.000000'),
(1, 'Interview', 1, '2025-06-01 07:35:00.000000'),
(1, 'Offer', 2, '2025-06-01 07:35:00.000000'),
-- Senior Manager (listing 2) pipeline
(2, 'Applied', 0, '2025-06-01 11:41:00.000000'),
(2, 'Interview', 1, '2025-06-01 11:41:00.000000'),
(2, 'Offer', 2, '2025-06-01 11:41:00.000000'),
-- Software Engineer (listing 3) pipeline
(3, 'Applied', 0, '2025-06-14 06:08:00.000000'),
(3, 'Interview', 1, '2025-06-14 06:08:00.000000'),
(3, 'Offer', 2, '2025-06-14 06:08:00.000000');

-- Insert mock applications to match original hardcoded pipeline data
-- Frontend Engineer: 3 applied, 0 interview, 0 offer, 8 discarded = 11 total
INSERT INTO public.applications (
  email,
  first_name,
  last_name,
  image,
  listing_id,
  resume_file_key,
  pipeline_status_id,
  is_discarded,
  created_at
) VALUES
-- Applied candidates (3)
('john.doe@example.com', 'John', 'Doe', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', 1, 'resume_john_doe.pdf', 1, false, '2025-06-02 09:15:00.000000'),
('sarah.wilson@example.com', 'Sarah', 'Wilson', 'https://images.unsplash.com/photo-1494790108755-2616b612614f?w=100&h=100&fit=crop&crop=face', 1, 'resume_sarah_wilson.pdf', 1, false, '2025-06-03 14:30:00.000000'),
('mike.johnson@example.com', 'Mike', 'Johnson', null, 1, 'resume_mike_johnson.pdf', 1, false, '2025-06-04 11:45:00.000000'),
-- Discarded candidates (8)
('alex.brown@example.com', 'Alex', 'Brown', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', 1, 'resume_alex_brown.pdf', 1, true, '2025-06-02 10:00:00.000000'),
('emma.davis@example.com', 'Emma', 'Davis', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', 1, 'resume_emma_davis.pdf', 1, true, '2025-06-02 11:30:00.000000'),
('chris.miller@example.com', 'Chris', 'Miller', null, 1, 'resume_chris_miller.pdf', 1, true, '2025-06-03 08:20:00.000000'),
('lisa.garcia@example.com', 'Lisa', 'Garcia', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face', 1, 'resume_lisa_garcia.pdf', 1, true, '2025-06-03 16:45:00.000000'),
('david.taylor@example.com', 'David', 'Taylor', null, 1, 'resume_david_taylor.pdf', 1, true, '2025-06-04 09:10:00.000000'),
('amanda.white@example.com', 'Amanda', 'White', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face', 1, 'resume_amanda_white.pdf', 1, true, '2025-06-04 13:25:00.000000'),
('ryan.moore@example.com', 'Ryan', 'Moore', null, 1, 'resume_ryan_moore.pdf', 1, true, '2025-06-05 10:40:00.000000'),
('jennifer.clark@example.com', 'Jennifer', 'Clark', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face', 1, 'resume_jennifer_clark.pdf', 1, true, '2025-06-05 15:55:00.000000');

-- Add some applications for other listings too (smaller numbers)
-- Senior Manager (listing 2): 2 applied, 1 interview, 0 offer
INSERT INTO public.applications (
  email,
  first_name,
  last_name,
  image,
  listing_id,
  resume_file_key,
  pipeline_status_id,
  is_discarded,
  created_at
) VALUES
('senior.dev1@example.com', 'Robert', 'Anderson', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', 2, 'resume_robert_anderson.pdf', 4, false, '2025-06-02 12:00:00.000000'),
('senior.dev2@example.com', 'Maria', 'Rodriguez', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face', 2, 'resume_maria_rodriguez.pdf', 5, false, '2025-06-03 15:30:00.000000'),
('senior.dev3@example.com', 'Thomas', 'Lee', null, 2, 'resume_thomas_lee.pdf', 4, false, '2025-06-04 09:45:00.000000');

-- Software Engineer (listing 3): 4 applied, 2 interview, 1 offer
INSERT INTO public.applications (
  email,
  first_name,
  last_name,
  image,
  listing_id,
  resume_file_key,
  pipeline_status_id,
  is_discarded,
  created_at
) VALUES
('meta.dev1@example.com', 'Kevin', 'Zhang', 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face', 3, 'resume_kevin_zhang.pdf', 7, false, '2025-06-15 10:00:00.000000'),
('meta.dev2@example.com', 'Jessica', 'Kumar', 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face', 3, 'resume_jessica_kumar.pdf', 8, false, '2025-06-16 11:30:00.000000'),
('meta.dev3@example.com', 'Daniel', 'Smith', null, 3, 'resume_daniel_smith.pdf', 9, false, '2025-06-17 14:15:00.000000'),
('meta.dev4@example.com', 'Sophie', 'Chen', 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=face', 3, 'resume_sophie_chen.pdf', 8, false, '2025-06-18 09:45:00.000000'),
('meta.dev5@example.com', 'Marcus', 'Johnson', null, 3, 'resume_marcus_johnson.pdf', 7, false, '2025-06-18 16:20:00.000000'),
('meta.dev6@example.com', 'Rachel', 'Williams', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face', 3, 'resume_rachel_williams.pdf', 7, false, '2025-06-19 13:10:00.000000'),
('meta.dev7@example.com', 'Anthony', 'Davis', null, 3, 'resume_anthony_davis.pdf', 7, false, '2025-06-20 10:30:00.000000');

SELECT setval('listings_id_seq', (SELECT MAX(id) FROM public.listings), true);
