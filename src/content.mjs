// ─────────────────────────────────────────────────────────────
//  All site content lives here. It mirrors Reem Sharaf's CV exactly.
//  Edit this file, run `npm run build`, and every page, the sitemap,
//  the structured data (JSON-LD) and llms.txt update together.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  url: 'https://reemsharaf.vercel.app',
  name: 'Reem Sharaf',
  nameAr: 'ريم شرف',
  shortTitle: 'Reem Sharaf — Software Engineer, AI Researcher & University Lecturer',
  locale: 'en_US',
  themeColor: '#7B1E3A',
  // Paste the token from Google Search Console ("HTML tag" method) here, then rebuild.
  googleSiteVerification: '',
  // Paste the token from Bing Webmaster Tools here (optional), then rebuild.
  bingSiteVerification: '',
  image: '/assets/img/reem-sharaf-software-engineer-ai-researcher.webp',
  ogImage: '/assets/img/og-reem-sharaf.jpg',
  cv: '/assets/docs/Reem_Sharaf_CV.pdf'
};

export const PERSON = {
  name: 'Reem Sharaf',
  fullName: 'Reem Abdulhalim Sharaf',
  alternateNames: [
    'Reem Sharaf',
    'Reem Abdulhalim Sharaf',
    'Eng. Reem Sharaf',
    'Engineer Reem Sharaf',
    'ريم شرف',
    'المهندسة ريم شرف',
    'م. ريم شرف',
    'ريم عبد الحليم شرف'
  ],
  headline: 'Software Engineer | AI Researcher & Developer | University Lecturer',
  roles: ['Software Engineer', 'AI Researcher & Developer', 'University Lecturer'],
  location: 'Damascus, Syria',
  phone: '+963 936 471 379',
  phoneHref: '+963936471379',
  email: 'reemsharaf0@gmail.com',
  linkedin: 'https://linkedin.com/in/reem-sharaf1',
  linkedinLabel: 'linkedin.com/in/reem-sharaf1',
  years: 7
};

export const SUMMARY = {
  lead: 'Software Engineer, AI Researcher, and University Lecturer with 7 years of academic experience and a strong focus on Artificial Intelligence, Large Language Models (LLMs), and AI model training.',
  body: "Currently pursuing a Master's degree in Web Science with a specialization in Artificial Intelligence, conducting research on training, fine-tuning, evaluating, and improving AI models using Python. Experienced in software engineering, systems analysis and design, advanced computer science education, and academic project supervision, with strong programming skills in Python, C#, C++, and Java."
};

// Core Competencies (CV order). `group` only drives the on-page filter.
export const COMPETENCIES = [
  { name: 'Artificial Intelligence', group: 'ai' },
  { name: 'Large Language Models (LLMs)', group: 'ai' },
  { name: 'AI Model Training & Fine-Tuning', group: 'ai' },
  { name: 'Model Evaluation & Optimization', group: 'ai' },
  { name: 'Python Development', group: 'eng' },
  { name: 'Software Engineering', group: 'eng' },
  { name: 'Systems Analysis & Design', group: 'eng' },
  { name: 'Distributed Systems', group: 'eng' },
  { name: 'Compiler Design', group: 'eng' },
  { name: 'Academic Research', group: 'acad' },
  { name: 'University Teaching', group: 'acad' },
  { name: 'Graduation & Academic Project Supervision', group: 'acad' }
];

export const EXPERIENCE = [
  {
    id: 'lecturer',
    role: 'University Lecturer',
    org: 'Al-Kalamoon Private University',
    mode: 'On-site',
    place: 'Syria',
    period: 'Sep 2019 – Present',
    start: 2019,
    end: null,
    points: [
      'Teach core and advanced courses within the Information Engineering program, including Software Engineering, Distributed Systems, Compiler Design, and Artificial Intelligence.',
      'Deliver practical instruction in complete Software Development Life Cycle (SDLC) processes, systems analysis and design, distributed system development using Java, compiler construction phases, and Artificial Intelligence using Python.',
      'Perform and supervise systems analysis for various academic projects, including requirements elicitation, functional requirements definition, use case modeling, and the development of analytical and design diagrams.',
      'Supervise graduation and semester projects, providing hands-on guidance in practical implementation, software design, and problem solving.',
      'Conduct training workshops for university administrative staff and contribute to academic and technical development activities.'
    ],
    courses: ['Software Engineering', 'Distributed Systems', 'Compiler Design', 'Artificial Intelligence']
  },
  {
    id: 'volunteer',
    role: 'Volunteer',
    org: 'Training & Career Center, Damascus University',
    mode: 'On-site',
    place: 'Syria',
    period: '2017 – 2019',
    start: 2017,
    end: 2019,
    points: [
      "Contributed as a volunteer to the university's Training & Career Center, supporting a variety of organizational, student-focused, and operational activities."
    ],
    courses: []
  }
];

export const PROJECTS = [
  {
    id: 'thesis',
    kind: "Master's Thesis",
    title: 'Intelligent System for Generating Arabic University Course Content from Real Data Using AI',
    text: 'Designed and developed an intelligent system for generating structured Arabic university lectures from real academic course and reference data using Large Language Models (LLMs). Fine-tuned and evaluated Qwen3-8B for domain-specific lecture generation, incorporating dataset development, data augmentation, prompt engineering, ontology-based knowledge representation, and multi-agent AI workflows across multiple processing stages. Conducted research-oriented experiments and comparative evaluation to improve generation quality, with results currently being prepared for scientific publication.',
    status: 'Results being prepared for scientific publication',
    pipeline: [
      { k: 'Data', v: 'Real course & reference data · dataset development · augmentation' },
      { k: 'Knowledge', v: 'Ontology-based knowledge representation' },
      { k: 'Model', v: 'Fine-tuned Qwen3-8B · prompt engineering' },
      { k: 'Agents', v: 'Multi-agent AI workflows across processing stages' },
      { k: 'Evaluate', v: 'Comparative evaluation · ROUGE · METEOR · BERTScore' }
    ],
    tags: ['LLMs', 'Qwen3-8B', 'Fine-Tuning', 'Prompt Engineering', 'Ontologies', 'Multi-Agent AI', 'Python', 'Hugging Face']
  },
  {
    id: 'microservices',
    kind: "Master's Course Project",
    title: 'Distributed E-Commerce Microservices System',
    text: 'Designed and developed a distributed online shopping system using C# and ASP.NET Core Web API, composed of Users, Products, Orders, and Payments microservices. Implemented Ocelot API Gateway for routing, authentication, authorization, and load balancing, with RabbitMQ for asynchronous inter-service communication and Round Robin request distribution.',
    status: 'Master\'s course project',
    services: ['Users', 'Products', 'Orders', 'Payments'],
    tags: ['C#', 'ASP.NET Core Web API', 'Microservices', 'Ocelot API Gateway', 'RabbitMQ', 'Load Balancing', 'Round Robin']
  }
];

export const SKILLS = [
  { id: 'ai', title: 'Artificial Intelligence & LLMs', items: ['Large Language Models (LLMs)', 'Natural Language Processing (NLP)', 'Agentic AI', 'Multi-Agent Systems', 'AI Model Training', 'Fine-Tuning', 'Model Evaluation & Optimization', 'Prompt Engineering', 'Data Augmentation', 'Qwen Models', 'Hugging Face', 'Transformers'] },
  { id: 'kr', title: 'Knowledge Representation', items: ['Ontology Development', 'Ontology-Based Knowledge Representation', 'Semantic Knowledge Organization'] },
  { id: 'lang', title: 'Programming Languages', items: ['Python', 'C#', 'C++', 'Java'] },
  { id: 'se', title: 'Software Engineering & Systems Analysis', items: ['Software Development Life Cycle (SDLC)', 'Requirements Analysis', 'Functional Requirements', 'System Analysis & Design', 'UML Modeling', 'Use Case Modeling', 'Analytical & Design Diagrams'] },
  { id: 'backend', title: 'Distributed Systems & Backend', items: ['Microservices Architecture', '.NET', 'ASP.NET Core Web API', 'RESTful APIs', 'Ocelot API Gateway', 'RabbitMQ', 'Asynchronous Communication', 'Load Balancing', 'Authentication & Authorization', 'HTTP', 'JSON'] },
  { id: 'research', title: 'AI Research & Evaluation', items: ['Experimental Design', 'Model Performance Evaluation', 'Comparative Analysis', 'Research Data Preparation', 'ROUGE', 'METEOR', 'BERTScore'] },
  { id: 'tools', title: 'Development Tools', items: ['Visual Studio Code', 'Google Colab', 'Postman', 'Thunder Client'] }
];

export const EDUCATION = [
  { id: 'msc', short: 'MSc', degree: "Master's Degree in Web Science", spec: 'Artificial Intelligence Specialization', school: 'Syrian Virtual University', period: '2025 – Present', start: 2025, end: null, status: 'In progress' },
  { id: 'bsc', short: 'BSc', degree: "Bachelor's Degree in Information Engineering", spec: 'Software Engineering Specialization', school: 'Damascus University', period: '2013 – 2018', start: 2013, end: 2018, status: 'Completed' }
];

export const CERTIFICATIONS = [
  { id: 'advising', title: 'Academic Advising Training & Qualification', issuer: 'Al-Kalamoon Private University', date: 'Aug 2021', iso: '2021-08', img: null, verify: null },
  { id: 'version-control', title: 'Version Control', issuer: 'Meta (Coursera)', date: 'Jan 2023', iso: '2023-01-08', img: 'version-control-meta-coursera-reem-sharaf', verify: 'https://coursera.org/verify/5B4GHUNJPEBW' },
  { id: 'javascript', title: 'Programming with JavaScript', issuer: 'Meta (Coursera)', date: 'Dec 2022', iso: '2022-12-27', img: 'programming-with-javascript-meta-coursera-reem-sharaf', verify: 'https://coursera.org/verify/A4XMVW9PL6K3' },
  { id: 'front-end', title: 'Introduction to Front-End Development', issuer: 'Meta (Coursera)', date: 'Nov 2022', iso: '2022-11-12', img: 'introduction-to-front-end-development-meta-coursera-reem-sharaf', verify: 'https://coursera.org/verify/QZ6Z7AH9XR7H' }
];

export const RECOGNITION = [
  { id: 'appreciation', title: 'Certificate of Appreciation for Distinguished Cooperation in Academic Development', issuer: 'Faculty of Engineering, Al-Kalamoon Private University', date: 'Sep 2021', iso: '2021-09-20', img: 'certificate-of-appreciation-academic-development-kalamoon-reem-sharaf' }
];

// Official letters (scanned documents supplied by Reem).
export const LETTERS = [
  { id: 'experience-letter', title: 'Experience Letter — Full-Time Technical Staff, Faculty of Engineering (since Sep 2019)', issuer: 'Al-Kalamoon Private University', date: 'Apr 2024', iso: '2024-04-06', img: 'experience-letter-kalamoon-reem-sharaf' }
];

export const LANGUAGES = [
  { name: 'Arabic', level: 'Native', pct: 100 },
  { name: 'English', level: 'Professional Working', pct: 80 }
];

// Highlights shown on the home page (all facts come from the CV).
export const STRENGTHS = [
  { n: '7', l: 'years of academic experience' },
  { n: 'Qwen3-8B', l: 'fine-tuned for Arabic lecture generation' },
  { n: '4', l: 'languages: Python · C# · C++ · Java' },
  { n: 'MSc', l: 'Web Science · AI specialization' }
];

// Key strengths (about section) — each line restates a CV fact.
export const KEY_STRENGTHS = [
  ['LLM training & fine-tuning', 'Fine-tuned and evaluated Qwen3-8B for domain-specific Arabic lecture generation.'],
  ['Arabic AI content generation', 'Generates structured Arabic university lectures from real course and reference data.'],
  ['Multi-agent AI workflows', 'Designs agentic pipelines across multiple processing stages.'],
  ['Knowledge representation', 'Ontology-based knowledge representation and semantic knowledge organization.'],
  ['Rigorous model evaluation', 'Experimental design and comparative evaluation with ROUGE, METEOR and BERTScore.'],
  ['Systems analysis & design', 'Requirements elicitation, functional requirements, use cases and UML diagrams.'],
  ['Distributed backend engineering', 'Microservices with ASP.NET Core, Ocelot API Gateway and RabbitMQ.'],
  ['7 years of university teaching', 'Software Engineering, Distributed Systems, Compiler Design and AI.'],
  ['Project supervision & training', 'Supervises graduation projects and trains university administrative staff.']
];

// ─── Pages: order = the in-place navigation sequence ───
export const PAGES = [
  { slug: '', key: 'home', label: 'Home', title: 'Reem Sharaf — Software Engineer, AI Researcher & Lecturer', desc: 'Reem Sharaf (ريم شرف) is a Software Engineer, AI Researcher & Developer and University Lecturer in Damascus, Syria, with 7 years of academic experience in AI, LLMs and AI model training.' },
  { slug: 'about', key: 'about', label: 'Summary', title: 'About Reem Sharaf — Professional Summary', desc: "Professional summary of Eng. Reem Sharaf: 7 years of academic experience, Master's research in Web Science (AI), training and fine-tuning LLMs with Python, C#, C++ and Java." },
  { slug: 'competencies', key: 'competencies', label: 'Competencies', title: 'Core Competencies — Reem Sharaf', desc: 'Core competencies of Reem Sharaf: Artificial Intelligence, Large Language Models, model training and fine-tuning, software engineering, distributed systems, compiler design and university teaching.' },
  { slug: 'experience', key: 'experience', label: 'Experience', title: 'Experience — Reem Sharaf, Al-Kalamoon Private University', desc: 'Reem Sharaf has been a University Lecturer at Al-Kalamoon Private University since September 2019, teaching Software Engineering, Distributed Systems, Compiler Design and Artificial Intelligence.' },
  { slug: 'projects', key: 'projects', label: 'Key Projects', title: 'Key Projects — LLMs & Microservices | Reem Sharaf', desc: "Reem Sharaf's key projects: a Master's thesis system that generates Arabic university course content with a fine-tuned Qwen3-8B, and a distributed e-commerce microservices system in ASP.NET Core." },
  { slug: 'skills', key: 'skills', label: 'Technical Skills', title: 'Technical Skills — LLMs, NLP, Python, .NET | Reem Sharaf', desc: 'Technical skills of Reem Sharaf: LLMs, NLP, agentic and multi-agent AI, fine-tuning, Hugging Face, Transformers, ontologies, Python, C#, C++, Java, ASP.NET Core, RabbitMQ, ROUGE, METEOR, BERTScore.' },
  { slug: 'education', key: 'education', label: 'Education', title: "Education — Master's in Web Science (AI) | Reem Sharaf", desc: "Reem Sharaf is pursuing a Master's Degree in Web Science (AI) at the Syrian Virtual University and holds a Bachelor's Degree in Information Engineering (Software Engineering) from Damascus University." },
  { slug: 'certifications', key: 'certifications', label: 'Certifications', title: 'Certifications & Recognition — Reem Sharaf', desc: 'Certifications of Reem Sharaf: Meta Version Control, Programming with JavaScript and Front-End Development (Coursera), plus academic training and recognition.' },
  { slug: 'faq', key: 'faq', label: 'FAQ', title: 'Who is Reem Sharaf? — Frequently Asked Questions', desc: 'Answers about Eng. Reem Sharaf (ريم شرف): who she is, what she researches, where she teaches, her education, skills and how to contact her.' },
  { slug: 'contact', key: 'contact', label: 'Contact', title: 'Contact Reem Sharaf — Email, LinkedIn & CV', desc: 'Contact Eng. Reem Sharaf in Damascus, Syria: email reemsharaf0@gmail.com, LinkedIn, phone, and download her CV.' }
];

export const PAGE_AR = {
  slug: 'ar',
  key: 'ar',
  title: 'المهندسة ريم شرف — مهندسة برمجيات وباحثة في الذكاء الاصطناعي ومحاضِرة جامعية',
  desc: 'ريم شرف مهندسة برمجيات وباحثة ومطوّرة في الذكاء الاصطناعي ومحاضِرة جامعية في دمشق، سوريا، لديها 7 سنوات من الخبرة الأكاديمية في الذكاء الاصطناعي ونماذج اللغة الكبيرة وتدريب النماذج.'
};

// ─── FAQ (visible on /faq + FAQPage JSON-LD) — answers use CV facts only ───
export const FAQ = [
  { q: 'Who is Reem Sharaf?', a: 'Reem Sharaf is a Software Engineer, AI Researcher & Developer and University Lecturer based in Damascus, Syria, with 7 years of academic experience and a strong focus on Artificial Intelligence, Large Language Models (LLMs) and AI model training.' },
  { q: 'Where does Reem Sharaf teach?', a: 'Reem Sharaf has been a University Lecturer at Al-Kalamoon Private University (on-site, Syria) since September 2019, teaching Software Engineering, Distributed Systems, Compiler Design and Artificial Intelligence within the Information Engineering program.' },
  { q: 'What is Reem Sharaf researching?', a: "For her Master's thesis, Reem Sharaf designed and developed an intelligent system that generates structured Arabic university lectures from real course and reference data using LLMs. She fine-tuned and evaluated Qwen3-8B, using dataset development, data augmentation, prompt engineering, ontology-based knowledge representation and multi-agent AI workflows. The results are being prepared for scientific publication." },
  { q: 'What is Reem Sharaf studying?', a: "Reem Sharaf is pursuing a Master's Degree in Web Science with an Artificial Intelligence specialization at the Syrian Virtual University (2025 – present). She holds a Bachelor's Degree in Information Engineering, Software Engineering specialization, from Damascus University (2013 – 2018)." },
  { q: 'Which programming languages does Reem Sharaf use?', a: 'Python, C#, C++ and Java. She also works with ASP.NET Core Web API, Hugging Face, Transformers, RabbitMQ and Ocelot API Gateway.' },
  { q: 'What certifications does Reem Sharaf hold?', a: 'Version Control (Meta, Coursera, Jan 2023), Programming with JavaScript (Meta, Coursera, Dec 2022), Introduction to Front-End Development (Meta, Coursera, Nov 2022) and Academic Advising Training & Qualification (Al-Kalamoon Private University, Aug 2021). She also received a Certificate of Appreciation for Distinguished Cooperation in Academic Development from the Faculty of Engineering, Al-Kalamoon Private University (Sep 2021).' },
  { q: 'How can I contact Reem Sharaf?', a: 'By email at reemsharaf0@gmail.com, by phone at +963 936 471 379, or on LinkedIn at linkedin.com/in/reem-sharaf1. Her CV can be downloaded from reemsharaf.vercel.app.' }
];

// ─── Arabic profile (faithful translation of the CV) ───
export const AR = {
  name: 'ريم شرف',
  headline: 'مهندسة برمجيات | باحثة ومطوّرة في الذكاء الاصطناعي | محاضِرة جامعية',
  location: 'دمشق، سوريا',
  summary: 'مهندسة برمجيات وباحثة في الذكاء الاصطناعي ومحاضِرة جامعية، لديها 7 سنوات من الخبرة الأكاديمية وتركيز قوي على الذكاء الاصطناعي ونماذج اللغة الكبيرة (LLMs) وتدريب نماذج الذكاء الاصطناعي. تتابع حالياً دراسة الماجستير في علوم الويب باختصاص الذكاء الاصطناعي، وتجري أبحاثاً في تدريب نماذج الذكاء الاصطناعي وضبطها الدقيق وتقييمها وتحسينها باستخدام Python. تمتلك خبرة في هندسة البرمجيات، وتحليل النظم وتصميمها، وتعليم علوم الحاسوب المتقدمة، والإشراف على المشاريع الأكاديمية، مع مهارات برمجية قوية في Python وC# وC++ وJava.',
  competencies: ['الذكاء الاصطناعي', 'نماذج اللغة الكبيرة (LLMs)', 'تدريب نماذج الذكاء الاصطناعي وضبطها الدقيق', 'تقييم النماذج وتحسينها', 'التطوير بلغة Python', 'هندسة البرمجيات', 'تحليل النظم وتصميمها', 'الأنظمة الموزعة', 'تصميم المترجمات', 'البحث الأكاديمي', 'التدريس الجامعي', 'الإشراف على مشاريع التخرج والمشاريع الأكاديمية'],
  experience: [
    { role: 'محاضِرة جامعية', org: 'جامعة القلمون الخاصة', period: 'أيلول 2019 – حتى الآن · حضوري · سوريا', points: ['تدريس مقررات أساسية ومتقدمة ضمن برنامج هندسة المعلوماتية، منها هندسة البرمجيات والأنظمة الموزعة وتصميم المترجمات والذكاء الاصطناعي.', 'تقديم تدريب عملي على مراحل دورة حياة تطوير البرمجيات (SDLC) كاملة، وتحليل النظم وتصميمها، وتطوير الأنظمة الموزعة بلغة Java، ومراحل بناء المترجمات، والذكاء الاصطناعي بلغة Python.', 'تنفيذ تحليل النظم والإشراف عليه في مشاريع أكاديمية متنوعة، بما في ذلك استخلاص المتطلبات وتعريف المتطلبات الوظيفية ونمذجة حالات الاستخدام وإعداد المخططات التحليلية والتصميمية.', 'الإشراف على مشاريع التخرج والمشاريع الفصلية مع توجيه عملي في التنفيذ وتصميم البرمجيات وحل المشكلات.', 'تقديم ورشات تدريبية للكادر الإداري في الجامعة والمساهمة في أنشطة التطوير الأكاديمي والتقني.'] },
    { role: 'متطوعة', org: 'مركز التدريب والتوجيه المهني، جامعة دمشق', period: '2017 – 2019 · حضوري · سوريا', points: ['المساهمة تطوعاً في مركز التدريب والتوجيه المهني في الجامعة ودعم أنشطة تنظيمية وطلابية وتشغيلية متنوعة.'] }
  ],
  projects: [
    { kind: 'رسالة الماجستير', title: 'نظام ذكي لتوليد محتوى المقررات الجامعية باللغة العربية من بيانات حقيقية باستخدام الذكاء الاصطناعي', text: 'تصميم وتطوير نظام ذكي لتوليد محاضرات جامعية عربية منظّمة من بيانات المقررات والمراجع الأكاديمية الحقيقية باستخدام نماذج اللغة الكبيرة. ضبط نموذج Qwen3-8B وتقييمه لتوليد المحاضرات في مجال محدد، مع بناء مجموعة البيانات وزيادتها، وهندسة الأوامر، وتمثيل المعرفة القائم على الأنطولوجيا، وسير عمل متعدد الوكلاء عبر مراحل معالجة متعددة. إجراء تجارب بحثية وتقييم مقارن لتحسين جودة التوليد، والنتائج قيد التحضير للنشر العلمي.' },
    { kind: 'مشروع مقرر في الماجستير', title: 'نظام تجارة إلكترونية موزع قائم على الخدمات المصغّرة', text: 'تصميم وتطوير نظام تسوق إلكتروني موزع باستخدام C# وASP.NET Core Web API، يتكون من خدمات مصغّرة للمستخدمين والمنتجات والطلبات والمدفوعات. استخدام بوابة Ocelot API للتوجيه والمصادقة والتفويض وموازنة الحمل، وRabbitMQ للاتصال غير المتزامن بين الخدمات، مع توزيع الطلبات بأسلوب Round Robin.' }
  ],
  education: [
    { degree: 'ماجستير في علوم الويب', spec: 'اختصاص الذكاء الاصطناعي', school: 'الجامعة الافتراضية السورية', period: '2025 – حتى الآن' },
    { degree: 'إجازة في هندسة المعلوماتية', spec: 'اختصاص هندسة البرمجيات', school: 'جامعة دمشق', period: '2013 – 2018' }
  ],
  certifications: ['التدريب والتأهيل في الإرشاد الأكاديمي — جامعة القلمون الخاصة · آب 2021', 'Version Control — Meta (Coursera) · كانون الثاني 2023', 'Programming with JavaScript — Meta (Coursera) · كانون الأول 2022', 'Introduction to Front-End Development — Meta (Coursera) · تشرين الثاني 2022'],
  recognition: 'شهادة شكر وتقدير على التعاون المميز في تطوير العمل الأكاديمي — كلية الهندسة، جامعة القلمون الخاصة · أيلول 2021',
  languages: ['العربية — اللغة الأم', 'الإنجليزية — مستوى عمل احترافي']
};
