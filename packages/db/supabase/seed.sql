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
  created_at,
  processed_at,
  requirements_met,
  requirements_not_met,
  ai_summary,
  ocr_summary,
  projects,
  work_experience
) VALUES
-- Applied candidates (3)
(
  'john.doe@example.com', 'John', 'Doe', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  1, 'resume_john_doe.pdf', 1, false, '2025-06-02 09:15:00.000000',
  '2025-06-02 09:16:00.000000',
  '["5+ years experience with React/TypeScript", "strong CSS skills"]',
  '["experience with design systems"]',
  'Experienced frontend engineer with strong React and CSS skills, seeking new challenges.',
  'John Doe has 6 years of experience in frontend development, primarily with React and TypeScript. He has a solid understanding of CSS and has contributed to several web projects. Lacks specific mention of design systems.',
  '[{"name": "E-commerce Platform Redesign", "description": "Led the frontend team in redesigning a large-scale e-commerce platform using React and TypeScript.", "date": "2023-2024", "link": "https://example.com/ecommerce-redesign"}, {"name": "Internal Tool Development", "description": "Developed internal tools to streamline development workflows, improving efficiency by 15%.", "date": "2022-2023"}]',
  '[{"position": "Senior Frontend Developer", "company": "Tech Solutions Inc.", "date": "2021-Present", "description": "Developed and maintained user-facing features using React, TypeScript, and Styled-Components. Mentored junior developers and participated in architectural decisions."}, {"position": "Frontend Developer", "company": "Web Innovations Ltd.", "date": "2019-2021", "description": "Implemented responsive web designs and integrated RESTful APIs. Collaborated with UX/UI designers to ensure pixel-perfect implementations."}]'
),
(
  'sarah.wilson@example.com', 'Sarah', 'Wilson', 'https://images.unsplash.com/photo-1494790108755-2616b612614f?w=100&h=100&fit=crop&crop=face',
  1, 'resume_sarah_wilson.pdf', 1, false, '2025-06-03 14:30:00.000000',
  '2025-06-03 14:31:00.000000',
  '["5+ years experience with React/TypeScript", "strong CSS skills", "experience with design systems"]',
  '[]',
  'Highly skilled frontend engineer with extensive experience in React, TypeScript, CSS, and design systems.',
  'Sarah Wilson brings over 7 years of frontend development expertise, with a strong focus on React, TypeScript, and modern CSS practices. She has a proven track record of working with and contributing to design systems.',
  '[{"name": "Design System Implementation", "description": "Led the creation and implementation of a company-wide design system, standardizing UI components across multiple products.", "date": "2023-2024"}, {"name": "Mobile-First E-commerce Site", "description": "Developed a new mobile-first e-commerce website, resulting in a 20% increase in mobile conversions.", "date": "2021-2023", "link": "https://example.com/mobile-ecommerce"}]',
  '[{"position": "Lead Frontend Engineer", "company": "Creative Web Solutions", "date": "2022-Present", "description": "Managed a team of frontend engineers, overseeing the development of complex web applications. Championed the adoption of new technologies and best practices."}, {"position": "Frontend Engineer", "company": "Digital Experiences LLC", "date": "2018-2022", "description": "Built interactive user interfaces using React, Redux, and SASS. Collaborated closely with product managers and designers."}]'
),
(
  'mike.johnson@example.com', 'Mike', 'Johnson', null,
  1, 'resume_mike_johnson.pdf', 1, false, '2025-06-04 11:45:00.000000',
  '2025-06-04 11:46:00.000000',
  '["strong CSS skills"]',
  '["5+ years experience with React/TypeScript", "experience with design systems"]',
  'Frontend developer with strong CSS abilities, looking to grow in a React/TypeScript environment.',
  'Mike Johnson has 4 years of frontend experience with a strong command of CSS and responsive design. He has some exposure to React but is looking to gain more expertise in TypeScript and design systems.',
  '[{"name": "Company Website Relaunch", "description": "Contributed to the frontend development of a major company website relaunch, focusing on performance and accessibility.", "date": "2024"}, {"name": "CSS Animation Library", "description": "Developed a reusable CSS animation library for internal projects.", "date": "2023", "link": "https://github.com/mikej/css-animations"}]',
  '[{"position": "Frontend Developer", "company": "Startup Innovations", "date": "2022-Present", "description": "Developed and maintained web applications using HTML, CSS, and JavaScript. Optimized website performance and improved user experience."}, {"position": "Junior Web Developer", "company": "Digital Agency Pro", "date": "2021-2022", "description": "Assisted in the development of client websites, focusing on frontend implementation and cross-browser compatibility."}]'
),
-- Discarded candidates (8)
(
  'alex.brown@example.com', 'Alex', 'Brown', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  1, 'resume_alex_brown.pdf', 1, true, '2025-06-02 10:00:00.000000',
  '2025-06-02 10:01:00.000000',
  '[]',
  '["5+ years experience with React/TypeScript", "strong CSS skills", "experience with design systems"]',
  'Entry-level developer with basic web skills.',
  'Alex Brown has 1 year of experience as a junior web developer, primarily working with basic HTML, CSS, and JavaScript. Lacks advanced experience in React, TypeScript, and design systems.',
  '[]',
  '[{"position": "Junior Web Developer", "company": "Local Web Design", "date": "2024-Present", "description": "Developed static websites and assisted with content updates. Gained basic understanding of web development workflows."}]'
),
(
  'emma.davis@example.com', 'Emma', 'Davis', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  1, 'resume_emma_davis.pdf', 1, true, '2025-06-02 11:30:00.000000',
  '2025-06-02 11:31:00.000000',
  '["strong CSS skills"]',
  '["5+ years experience with React/TypeScript", "experience with design systems"]',
  'Designer with some frontend knowledge, seeking a more design-focused role.',
  'Emma Davis is primarily a UX/UI designer with some foundational knowledge of HTML and CSS. Her experience does not align with the engineering requirements for this role.',
  '[]',
  '[{"position": "UX/UI Designer", "company": "Design Hub", "date": "2022-Present", "description": "Designed user interfaces and conducted user research for various web and mobile applications. Occasionally implemented UI elements using HTML/CSS."}]'
),
(
  'chris.miller@example.com', 'Chris', 'Miller', null,
  1, 'resume_chris_miller.pdf', 1, true, '2025-06-03 08:20:00.000000',
  '2025-06-03 08:21:00.000000',
  '["5+ years experience with React/TypeScript"]',
  '["strong CSS skills", "experience with design systems"]',
  'Experienced React/TypeScript developer but lacking strong CSS and design system exposure.',
  'Chris Miller has 6 years of experience primarily in backend development using Node.js and some React. While familiar with React, his CSS skills are basic, and he lacks experience with design systems.',
  '[]',
  '[{"position": "Fullstack Developer", "company": "Backend Solutions", "date": "2019-Present", "description": "Developed backend APIs using Node.js and Express. Contributed to frontend with React for internal tools."}]'
),
(
  'lisa.garcia@example.com', 'Lisa', 'Garcia', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  1, 'resume_lisa_garcia.pdf', 1, true, '2025-06-03 16:45:00.000000',
  '2025-06-03 16:46:00.000000',
  '[]',
  '["5+ years experience with React/TypeScript", "strong CSS skills", "experience with design systems"]',
  'Recent graduate with limited professional experience.',
  'Lisa Garcia recently graduated with a degree in Computer Science and has only academic project experience. She does not meet the 5+ years experience requirement.',
  '[]',
  '[{"position": "Software Engineering Intern", "company": "Summer Tech Program", "date": "Summer 2024", "description": "Assisted senior engineers on a React component library. Gained exposure to modern development practices."}]'
),
(
  'david.taylor@example.com', 'David', 'Taylor', null,
  1, 'resume_david_taylor.pdf', 1, true, '2025-06-04 09:10:00.000000',
  '2025-06-04 09:11:00.000000',
  '["strong CSS skills"]',
  '["5+ years experience with React/TypeScript", "experience with design systems"]',
  'Freelance web developer, mostly working with Wordpress.',
  'David Taylor has been a freelance web developer for 8 years, but his experience is heavily skewed towards Wordpress and general-purpose web development, with minimal React/TypeScript exposure.',
  '[]',
  '[{"position": "Freelance Web Developer", "company": "Self-Employed", "date": "2017-Present", "description": "Developed and maintained client websites using Wordpress, HTML, CSS, and JavaScript. Managed hosting and domain configurations."}]'
),
(
  'amanda.white@example.com', 'Amanda', 'White', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
  1, 'resume_amanda_white.pdf', 1, true, '2025-06-04 13:25:00.000000',
  '2025-06-04 13:26:00.000000',
  '["experience with design systems"]',
  '["5+ years experience with React/TypeScript", "strong CSS skills"]',
  'Design system specialist, but limited coding experience.',
  'Amanda White has extensive experience managing and documenting design systems, but her direct coding experience with React/TypeScript and CSS implementation is insufficient for a senior engineering role.',
  '[]',
  '[{"position": "Design System Manager", "company": "Product Co.", "date": "2020-Present", "description": "Oversaw the governance and evolution of the company’s design system. Collaborated with engineering and design teams on component libraries."}]'
),
(
  'ryan.moore@example.com', 'Ryan', 'Moore', null,
  1, 'resume_ryan_moore.pdf', 1, true, '2025-06-05 10:40:00.000000',
  '2025-06-05 10:41:00.000000',
  '[]',
  '["5+ years experience with React/TypeScript", "strong CSS skills", "experience with design systems"]',
  'Backend developer with no frontend experience.',
  'Ryan Moore is an experienced backend developer focusing on Java and Spring Boot. He has no relevant frontend experience with React, TypeScript, or advanced CSS.',
  '[]',
  '[{"position": "Senior Backend Developer", "company": "Enterprise Software", "date": "2018-Present", "description": "Designed and implemented robust backend services using Java, Spring Boot, and PostgreSQL. Managed database schemas and API integrations."}]'
),
(
  'jennifer.clark@example.com', 'Jennifer', 'Clark', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
  1, 'resume_jennifer_clark.pdf', 1, true, '2025-06-05 15:55:00.000000',
  '2025-06-05 15:56:00.000000',
  '[]',
  '["5+ years experience with React/TypeScript", "strong CSS skills", "experience with design systems"]',
  'Career changer, currently in a coding bootcamp.',
  'Jennifer Clark is transitioning careers and is currently enrolled in a full-stack coding bootcamp. Her professional experience is outside of software development.',
  '[]',
  '[{"position": "Sales Manager", "company": "Retail Chain", "date": "2019-2024", "description": "Managed a team of 10 sales associates, exceeding quarterly sales targets by 15%. Trained new hires and developed sales strategies."}]'
);

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
  created_at,
  processed_at,
  requirements_met,
  requirements_not_met,
  ai_summary,
  ocr_summary,
  projects,
  work_experience
) VALUES
(
  'senior.dev1@example.com', 'Robert', 'Anderson', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  2, 'resume_robert_anderson.pdf', 4, false, '2025-06-02 12:00:00.000000',
  '2025-06-02 12:01:00.000000',
  '["10+ years in embedded systems", "leadership experience", "strong C/C++ background"]',
  '[]',
  'Highly experienced embedded software engineer with strong leadership skills and a deep C/C++ background.',
  'Robert Anderson possesses 12 years of experience in embedded systems, including 5 years in a leadership role. His resume highlights extensive work with C/C++ development for various hardware platforms.',
  '[{"name": "IoT Device Firmware", "description": "Led the development of firmware for a new line of IoT devices, from conception to mass production.", "date": "2022-2024"}, {"name": "Real-time OS Customization", "description": "Customized and optimized a real-time operating system for a medical device, ensuring low latency and high reliability.", "date": "2019-2022"}]',
  '[{"position": "Lead Embedded Engineer", "company": "Innovate Systems", "date": "2020-Present", "description": "Managed a team of 8 embedded engineers. Oversaw firmware architecture, design, and implementation for critical projects."}, {"position": "Senior Embedded Engineer", "company": "Hardware Solutions", "date": "2015-2020", "description": "Developed and debugged embedded software for various consumer electronics. Proficient in C, C++, and RTOS."}]'
),
(
  'senior.dev2@example.com', 'Maria', 'Rodriguez', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
  2, 'resume_maria_rodriguez.pdf', 5, false, '2025-06-03 15:30:00.000000',
  '2025-06-03 15:31:00.000000',
  '["10+ years in embedded systems", "strong C/C++ background"]',
  '["leadership experience"]',
  'Seasoned embedded engineer with extensive C/C++ experience, looking for a management role.',
  'Maria Rodriguez has 11 years of experience in embedded software development with strong C/C++ skills. While she has mentored junior engineers, her direct leadership experience in a managerial role is limited.',
  '[{"name": "Automotive Infotainment System", "description": "Developed embedded software for automotive infotainment systems, focusing on performance and security.", "date": "2020-2024"}, {"name": "Embedded Linux Kernel Module", "description": "Authored and maintained custom Linux kernel modules for specialized hardware.", "date": "2018-2020"}]',
  '[{"position": "Principal Embedded Software Engineer", "company": "AutoTech Systems", "date": "2019-Present", "description": "Designed and implemented critical software components for automotive systems. Acted as technical lead on several projects and mentored junior engineers."}, {"position": "Embedded Software Engineer", "company": "Electro Devices", "date": "2014-2019", "description": "Developed firmware for industrial control systems using C and embedded Linux. Performed hardware-software integration and debugging."}]'
),
(
  'senior.dev3@example.com', 'Thomas', 'Lee', null,
  2, 'resume_thomas_lee.pdf', 4, false, '2025-06-04 09:45:00.000000',
  '2025-06-04 09:46:00.000000',
  '["strong C/C++ background"]',
  '["10+ years in embedded systems", "leadership experience"]',
  'Mid-level embedded engineer with strong C/C++ skills, seeking to grow into leadership.',
  'Thomas Lee has 7 years of embedded software experience with strong C/C++ skills. He has no leadership experience and does not meet the 10+ years of experience requirement.',
  '[{"name": "Drone Flight Controller", "description": "Developed flight control software for consumer drones, including sensor fusion and navigation algorithms.", "date": "2023-Present"}, {"name": "Embedded Graphics Driver", "description": "Implemented optimized graphics drivers for custom embedded display solutions.", "date": "2021-2023"}]',
  '[{"position": "Embedded Software Engineer", "company": "Drone Innovations", "date": "2021-Present", "description": "Designed, developed, and tested embedded firmware for drone platforms. Worked with RTOS and bare-metal programming."}, {"position": "Junior Embedded Developer", "company": "IoT Solutions", "date": "2018-2021", "description": "Assisted in the development of firmware for various IoT devices. Performed unit testing and debugging."}]'
);

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
  created_at,
  processed_at,
  requirements_met,
  requirements_not_met,
  ai_summary,
  ocr_summary,
  projects,
  work_experience
) VALUES
(
  'meta.dev1@example.com', 'Kevin', 'Zhang', 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face',
  3, 'resume_kevin_zhang.pdf', 7, false, '2025-06-15 10:00:00.000000',
  '2025-06-15 10:01:00.000000',
  '["8+ years programming experience", "6+ years building large-scale applications", "experience with React/React Native and backend services"]',
  '[]',
  'Highly experienced full-stack engineer with expertise in large-scale applications, React/React Native, and backend services.',
  'Kevin Zhang has 9 years of programming experience, with 7 years focused on building and scaling large-scale applications. He has strong skills in React, React Native, and has built robust backend services.',
  '[{"name": "Social Media Feature Rollout", "description": "Led the development and rollout of a new feature for a major social media platform, impacting millions of users.", "date": "2023-2024"}, {"name": "Backend Microservices Migration", "description": "Architected and implemented a migration from monolithic to microservices architecture for a high-traffic service.", "date": "2021-2023"}]',
  '[{"position": "Staff Software Engineer", "company": "Global Social Media Co.", "date": "2021-Present", "description": "Designed and implemented scalable full-stack solutions for user-facing features using React, Node.js, and GraphQL. Mentored junior engineers."}, {"position": "Senior Software Engineer", "company": "E-commerce Giant", "date": "2016-2021", "description": "Developed core e-commerce functionalities, including payment processing and inventory management, using React, Java, and Spring Boot."}]'
),
(
  'meta.dev2@example.com', 'Jessica', 'Kumar', 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face',
  3, 'resume_jessica_kumar.pdf', 8, false, '2025-06-16 11:30:00.000000',
  '2025-06-16 11:31:00.000000',
  '["8+ years programming experience", "6+ years building large-scale applications", "experience with React/React Native and backend services"]',
  '[]',
  'Versatile full-stack engineer with strong experience in product development and scaling systems.',
  'Jessica Kumar has 10 years of programming experience, including 8 years working on large-scale product applications. She is proficient in React, has some exposure to React Native, and solid experience with various backend technologies.',
  '[{"name": "Cloud Platform Development", "description": "Contributed to the development of a scalable cloud-based data analytics platform, enhancing its real-time processing capabilities.", "date": "2022-2024"}, {"name": "Mobile Application Launch", "description": "Was a key contributor to the launch of a new mobile application built with React Native, from API integration to UI implementation.", "date": "2020-2022"}]',
  '[{"position": "Senior Full-stack Engineer", "company": "Cloud Innovations", "date": "2019-Present", "description": "Developed features across frontend (React) and backend (Python, Django) for a SaaS product. Optimized database queries and improved system performance."}, {"position": "Software Engineer", "company": "Mobile Solutions Co.", "date": "2015-2019", "description": "Built and maintained mobile applications using React Native and native iOS/Android development. Worked on API design and integration."}]'
),
(
  'meta.dev3@example.com', 'Daniel', 'Smith', null,
  3, 'resume_daniel_smith.pdf', 9, false, '2025-06-17 14:15:00.000000',
  '2025-06-17 14:16:00.000000',
  '["8+ years programming experience", "6+ years building large-scale applications", "experience with React/React Native and backend services"]',
  '[]',
  'Principal engineer with deep expertise in distributed systems and high-performance computing.',
  'Daniel Smith is a principal engineer with 15 years of programming experience, including 10+ years on large-scale distributed systems. He has extensive experience with backend services, and a strong understanding of frontend technologies like React.',
  '[{"name": "Distributed Database System", "description": "Designed and implemented a distributed, highly available database system capable of handling petabytes of data.", "date": "2020-2024"}, {"name": "Real-time Data Processing Engine", "description": "Built a real-time data processing engine with ultra-low latency for financial trading applications.", "date": "2016-2020"}]',
  '[{"position": "Principal Engineer", "company": "FinTech Corp.", "date": "2018-Present", "description": "Led architectural design for critical financial trading systems. Developed high-performance backend services using C++ and Java. Mentored engineering teams."}, {"position": "Senior Software Engineer", "company": "Data Analytics Inc.", "date": "2012-2018", "description": "Developed scalable data ingestion pipelines and analytics platforms. Contributed to frontend visualizations with React."}]'
),
(
  'meta.dev4@example.com', 'Sophie', 'Chen', 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=face',
  3, 'resume_sophie_chen.pdf', 8, false, '2025-06-18 09:45:00.000000',
  '2025-06-18 09:46:00.000000',
  '["8+ years programming experience", "experience with React/React Native and backend services"]',
  '["6+ years building large-scale applications"]',
  'Experienced full-stack developer with strong React and backend skills, but less focus on massive scale.',
  'Sophie Chen has 8 years of programming experience, strong in React and Node.js for backend services. Her experience is with medium-to-large scale applications, but not necessarily "billions of users" level scale.',
  '[{"name": "SaaS Platform Development", "description": "Developed full-stack features for a B2B SaaS platform using React, Node.js, and PostgreSQL. Focused on modularity and testability.", "date": "2020-Present"}, {"name": "API Gateway Implementation", "description": "Designed and implemented a custom API gateway to manage traffic and authentication for various microservices.", "date": "2018-2020"}]',
  '[{"position": "Senior Software Engineer", "company": "Productivity Tools Inc.", "date": "2018-Present", "description": "Led the development of new features across the stack, including React frontend, Node.js backend, and GraphQL APIs. Mentored junior engineers."}, {"position": "Software Engineer", "company": "Web Solutions Co.", "date": "2015-2018", "description": "Built responsive web applications using React and Ruby on Rails. Participated in code reviews and agile sprints."}]'
),
(
  'meta.dev5@example.com', 'Marcus', 'Johnson', null,
  3, 'resume_marcus_johnson.pdf', 7, false, '2025-06-18 16:20:00.000000',
  '2025-06-18 16:21:00.000000',
  '["8+ years programming experience", "experience with React/React Native and backend services"]',
  '["6+ years building large-scale applications"]',
  'Backend-focused engineer with some React experience, strong in system architecture.',
  'Marcus Johnson has 10 years of programming experience, heavily focused on backend systems and architecture with Python and Java. He has some experience with React for internal dashboards but lacks extensive experience with large-scale frontend development.',
  '[{"name": "Distributed Caching System", "description": "Designed and implemented a distributed caching layer for high-volume data access, significantly reducing database load.", "date": "2022-Present"}, {"name": "Data Pipeline Optimization", "description": "Optimized complex data processing pipelines, improving processing speed by 30%.", "date": "2019-2022"}]',
  '[{"position": "Staff Backend Engineer", "company": "DataCorp", "date": "2017-Present", "description": "Developed and maintained highly scalable backend services using Python, Java, and AWS. Architected new data storage solutions. Contributed to React dashboards."}, {"position": "Software Engineer", "company": "Tech Innovations", "date": "2013-2017", "description": "Built and maintained backend services for various web applications. Worked with relational and NoSQL databases."}]'
),
(
  'meta.dev6@example.com', 'Rachel', 'Williams', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face',
  3, 'resume_rachel_williams.pdf', 7, false, '2025-06-19 13:10:00.000000',
  '2025-06-19 13:11:00.000000',
  '["8+ years programming experience", "experience with React/React Native and backend services"]',
  '["6+ years building large-scale applications"]',
  'Full-stack engineer with strong React and Node.js skills, specializing in user experience.',
  'Rachel Williams has 9 years of programming experience, focusing on full-stack development with a strong emphasis on React and Node.js. She has built several complex applications but her experience with "billions of users" scale might be less direct.',
  '[{"name": "Customer Portal Redesign", "description": "Led the full-stack redesign of a critical customer-facing portal, improving user engagement by 25%.", "date": "2022-2024"}, {"name": "Internal Analytics Dashboard", "description": "Developed an internal analytics dashboard from scratch using React and a custom Node.js API.", "date": "2020-2022"}]',
  '[{"position": "Senior Full-stack Developer", "company": "SaaS Solutions Co.", "date": "2019-Present", "description": "Developed and maintained features for a large SaaS application using React, Node.js, and MongoDB. Collaborated with product and design teams."}, {"position": "Software Engineer", "company": "Digital Agency", "date": "2015-2019", "description": "Built custom web applications for clients using a variety of technologies, including React, Angular, and PHP."}]'
),
(
  'meta.dev7@example.com', 'Anthony', 'Davis', null,
  3, 'resume_anthony_davis.pdf', 7, false, '2025-06-20 10:30:00.000000',
  '2025-06-20 10:31:00.000000',
  '["8+ years programming experience", "6+ years building large-scale applications"]',
  '["experience with React/React Native and backend services"]',
  'Infrastructure engineer with extensive experience in scaling systems, but limited React/React Native.',
  'Anthony Davis has 12 years of programming experience, primarily focused on infrastructure, DevOps, and scaling distributed systems with Go and Kubernetes. While he understands system architecture at scale, his direct experience with React/React Native and general frontend services is minimal.',
  '[{"name": "Container Orchestration Platform", "description": "Designed and implemented a Kubernetes-based container orchestration platform for internal services.", "date": "2021-Present"}, {"name": "CI/CD Pipeline Automation", "description": "Automated CI/CD pipelines for multiple large-scale applications, reducing deployment times by 50%.", "date": "2018-2021"}]',
  '[{"position": "Staff Infrastructure Engineer", "company": "Cloud Hosting Co.", "date": "2018-Present", "description": "Managed and scaled critical cloud infrastructure using Go, Python, and various AWS services. Optimized system performance and reliability."}, {"position": "DevOps Engineer", "company": "Tech Scaleups", "date": "2013-2018", "description": "Implemented and maintained CI/CD pipelines, monitoring, and logging solutions for web applications. Scripted automation tools."}]'
);
