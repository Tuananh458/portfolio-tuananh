export const projects = [
  {
    id: 'quizify',
    featured: true,
    title: {
      en: 'Quizify — AI Exam Generation Platform',
      vi: 'Quizify — Nền tảng tạo đề thi AI'
    },
    role: {
      en: 'Founder & AI Engineer',
      vi: 'Founder & Kỹ sư AI'
    },
    date: {
      en: '2026 — Present',
      vi: '2026 — Hiện tại'
    },
    desc: {
      en: 'AI-powered platform for generating question banks and exam papers from educational content.',
      vi: 'Nền tảng AI tạo ngân hàng câu hỏi và đề thi tự động từ nội dung giáo dục.'
    },
    bullets: {
      en: [
        'Designed AI pipelines for processing PDF, DOCX, images, and handwritten documents.',
        'Developed OCR workflows for educational document extraction.',
        'Built automated question classification by subject, chapter, lesson, and difficulty level.',
        'Developed exam generation and question bank management systems.',
        'Integrated OpenAI and Gemini models for content generation and evaluation.'
      ],
      vi: [
        'Thiết kế pipeline AI xử lý PDF, DOCX, hình ảnh và tài liệu viết tay.',
        'Phát triển quy trình OCR trích xuất tài liệu giáo dục.',
        'Xây dựng phân loại câu hỏi tự động theo môn, chương, bài và độ khó.',
        'Phát triển hệ thống tạo đề thi và quản lý ngân hàng câu hỏi.',
        'Tích hợp mô hình OpenAI và Gemini để sinh và đánh giá nội dung.'
      ]
    },
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Gemini API', 'OCR', 'RAG', 'ReactJS', 'NextJS'],
    link: 'https://quizify.edu.vn',
    embedUrl: 'https://quizify.edu.vn'
  },
  {
    id: 'educonnect',
    featured: false,
    title: {
      en: 'EduConnect',
      vi: 'EduConnect'
    },
    role: {
      en: 'Full-stack Developer',
      vi: 'Lập trình viên Full-stack'
    },
    date: {
      en: '2024 — Present',
      vi: '2024 — Hiện tại'
    },
    desc: {
      en: 'Educational platform connecting schools, teachers, parents, and students.',
      vi: 'Nền tảng giáo dục kết nối nhà trường, giáo viên, phụ huynh và học sinh.'
    },
    bullets: {
      en: [
        'Developed backend APIs and business logic.',
        'Built learning management and user interaction features.',
        'Designed and optimized database architecture.'
      ],
      vi: [
        'Phát triển API backend và xử lý nghiệp vụ.',
        'Xây dựng tính năng quản lý học tập và tương tác người dùng.',
        'Thiết kế và tối ưu kiến trúc cơ sở dữ liệu.'
      ]
    },
    tags: ['ASP.NET Core', 'PostgreSQL', 'Blazor'],
    link: '',
    embedUrl: '' // Empty means placeholder/demo coming soon
  }
];
