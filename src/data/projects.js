// `live: true` projects are embedded (fully interactive) in the "Live Products" section.
export const projects = [
  {
    id: 'quizify',
    featured: true,
    live: true,
    accent: 'from-indigo-500 via-violet-500 to-fuchsia-500',
    title: {
      en: 'Quizify — AI Exam Generation Platform',
      vi: 'Quizify — Nền tảng soạn đề thi bằng AI'
    },
    short: {
      en: 'AI copilot that turns textbooks into exam papers',
      vi: 'AI copilot biến sách giáo khoa thành đề thi'
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
      en: 'An AI copilot for high-school teachers: upload a textbook PDF and get a curriculum-aligned question bank, Bloom-taxonomy-balanced exam papers and print-ready Word/PDF exports in minutes instead of hours.',
      vi: 'AI copilot cho giáo viên THPT: tải lên SGK dạng PDF và nhận ngay ngân hàng câu hỏi bám sát chương trình, đề kiểm tra cân bằng theo thang Bloom và file Word/PDF sẵn sàng in — chỉ trong vài phút thay vì vài giờ.'
    },
    highlights: {
      en: [
        'Layout-aware OCR for textbooks & handwriting → Markdown + LaTeX',
        'Hybrid RAG (pgvector + BM25) with Cohere rerank',
        'LangGraph Solver → Verifier → Refiner agents',
        'Auto TikZ geometry diagrams, multi-version .docx export'
      ],
      vi: [
        'OCR nhận diện bố cục SGK & chữ viết tay → Markdown + LaTeX',
        'Hybrid RAG (pgvector + BM25) kết hợp Cohere rerank',
        'Chuỗi agent LangGraph Solver → Verifier → Refiner',
        'Tự vẽ hình TikZ, trộn đề & xuất .docx đa mã đề'
      ]
    },
    bullets: {
      en: [
        'OCR & Multimodal Digitization: Engineered a layout-aware OCR ingestion pipeline using PyMuPDF and Pillow coupled with a Gemini Vision and Pixtral-12b model fallback chain to accurately extract text, equations, and tables from textbooks and handwritten documents into Markdown + LaTeX.',
        'Hybrid RAG Retrieval Engine: Developed a hybrid search system combining dense vector search (Google text-embedding-004 stored in a PostgreSQL pgvector store) and sparse lexical search (BM25Okapi), reranked by Cohere rerank-v3.5 and Reciprocal Rank Fusion (RRF) for precise context retrieval.',
        'Agentic Solver-Verifier Workflow: Orchestrated an iterative LangGraph agent workflow utilizing gpt-4o-mini and gemini-2.0-flash to act as a Solver (generating math questions), Verifier (validating alignment with curriculum, difficulty levels, and formatting), and Refiner to keep the output accurate and consistent.',
        'Dynamic Math Graphics: Built a dynamic diagramming pipeline using Gemini to generate TikZ coordinate scripts and compiled them server-side using pdflatex / tectonic to output high-resolution vector geometry shapes and functions.',
        'Scrambled Multi-Format Export: Implemented a custom docx-generator in Python for exporting structured tests with scrambled question sheets ("đa mã đề") and automated grading keys to Excel format.'
      ],
      vi: [
        'OCR & Số hóa tài liệu đa phương thức: Xây dựng pipeline xử lý tài liệu sử dụng PyMuPDF, tiền xử lý ảnh OpenCV kết hợp chuỗi fallback Gemini Vision và Pixtral-12b để trích xuất văn bản, bảng biểu và công thức toán học từ SGK/tài liệu viết tay sang định dạng Markdown + LaTeX.',
        'Kiến trúc Hybrid RAG & Rerank: Phát triển hệ thống tìm kiếm lai ghép kết hợp Vector Search (text-embedding-004 trên PostgreSQL + pgvector) và Lexical Search (BM25Okapi), tối ưu độ chính xác bằng Cohere rerank-v3.5 và thuật toán xếp hạng RRF.',
        'Quy trình Agent tự trị (LangGraph): Thiết kế luồng agentic lặp gồm 3 tác nhân Solver (giải đề và sinh câu hỏi), Verifier (kiểm tra độ khó, kiểm duyệt nội dung) và Refiner (chuẩn hóa định dạng LaTeX) để đảm bảo chất lượng và độ chính xác của đề thi.',
        'Tự động vẽ hình học & đồ thị: Tích hợp module AI tự sinh mã TikZ và biên dịch trực tiếp trên server (pdflatex / tectonic) để xuất hình không gian, đồ thị hàm số sắc nét dạng SVG/PNG.',
        'Trộn đề và xuất bản đa định dạng: Phát triển hệ thống xuất đề Word (.docx) đa mã đề căn lề chuẩn và bảng đáp án Excel (.xlsx) hỗ trợ chấm điểm tự động.'
      ]
    },
    tags: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'pgvector', 'OpenAI API', 'Gemini API', 'OCR', 'RAG', 'NextJS'],
    link: 'https://www.quizify.vn',
    embedUrl: 'https://www.quizify.vn'
  },
  {
    id: 'hkchinese',
    featured: true,
    live: true,
    accent: 'from-rose-500 via-orange-500 to-amber-400',
    title: {
      en: 'HKChinese — AI-powered Chinese Learning Platform',
      vi: 'HKChinese — Nền tảng học tiếng Trung tích hợp AI'
    },
    short: {
      en: 'Learn Chinese & ace the HSK with an AI tutor',
      vi: 'Học tiếng Trung & luyện thi HSK cùng trợ giảng AI'
    },
    role: {
      en: 'Founder & Full-stack AI Engineer',
      vi: 'Founder & Kỹ sư AI Full-stack'
    },
    date: {
      en: '2026 — Present',
      vi: '2026 — Hiện tại'
    },
    desc: {
      en: 'An online platform for Vietnamese learners of Chinese: vocabulary, grammar, Hanzi and HSK mock tests in one place, with an AI tutor and an AI speaking partner that listens, scores pronunciation and talks back.',
      vi: 'Nền tảng học tiếng Trung trực tuyến cho người Việt: từ vựng, ngữ pháp, Hán tự và thi thử HSK trong một nơi, đi kèm trợ giảng AI và bạn luyện nói AI có thể nghe, chấm phát âm và trò chuyện lại.'
    },
    highlights: {
      en: [
        'AI tutor + real-time AI speaking partner',
        'Automatic pronunciation scoring',
        'HSK mock tests: listening, reading, writing, speaking',
        'Hanzi radical network, flashcards & spaced review'
      ],
      vi: [
        'Trợ giảng AI + bạn luyện nói AI thời gian thực',
        'Chấm điểm phát âm tự động',
        'Thi thử HSK: nghe, đọc, viết, nói',
        'Mạng lưới bộ thủ Hán tự, flashcard & ôn tập ngắt quãng'
      ]
    },
    bullets: {
      en: [
        'AI Tutor & Speaking Partner: Built an LLM-based tutor and a real-time voice "sparring" mode where learners hold free or situational conversations and receive instant feedback.',
        'Pronunciation Scoring: Integrated speech-assessment providers to grade tones and pronunciation, with per-user fair-use quotas and graceful fallbacks.',
        'HSK Exam Engine: Designed mini-tests and full mock tests covering listening, reading, writing and speaking question types, with history and analytics.',
        'Hanzi Knowledge Graph: Implemented a character/radical network, visual dictionary, flashcards and spaced-repetition review, driven by a personalised study plan.',
        'Production SaaS: Shipped authentication (email + Google), memberships, payments and an admin console as a fast React SPA.'
      ],
      vi: [
        'Trợ giảng & bạn luyện nói AI: Xây dựng trợ giảng dựa trên LLM và chế độ "sparring" giọng nói thời gian thực để người học hội thoại tự do hoặc theo tình huống và nhận phản hồi tức thì.',
        'Chấm điểm phát âm: Tích hợp dịch vụ đánh giá giọng nói để chấm thanh điệu và phát âm, có hạn mức sử dụng theo người dùng và cơ chế dự phòng.',
        'Hệ thống thi HSK: Thiết kế bài mini-test và thi thử đầy đủ 4 kỹ năng nghe, đọc, viết, nói, kèm lịch sử làm bài và thống kê.',
        'Đồ thị tri thức Hán tự: Xây dựng mạng lưới chữ/bộ thủ, từ điển hình ảnh, flashcard và ôn tập ngắt quãng theo lộ trình học cá nhân hoá.',
        'SaaS vận hành thực tế: Triển khai đăng nhập (email + Google), gói thành viên, thanh toán và trang quản trị trên React SPA tối ưu tốc độ.'
      ]
    },
    tags: ['ReactJS', 'Vite', 'LLMs', 'AI Tutor', 'Speech Assessment', 'Realtime Voice', 'Payments'],
    link: 'https://hkchinese.com',
    embedUrl: 'https://hkchinese.com'
  },
  {
    id: 'educonnect',
    featured: false,
    live: false,
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
    embedUrl: ''
  }
];

export const liveProjects = projects.filter((p) => p.live);
