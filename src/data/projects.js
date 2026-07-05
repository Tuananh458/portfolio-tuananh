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
      en: 'An advanced AI-powered platform for automatic exam paper generation, question classification, and test repository management, serving as an intelligent copilot for educators.',
      vi: 'Nền tảng AI Copilot hỗ trợ giáo viên xây dựng ngân hàng câu hỏi, tự động phân loại học liệu và tạo đề thi tối ưu từ Prompt, Sách giáo khoa (RAG) và ma trận kiểm tra.'
    },
    bullets: {
      en: [
        'OCR & Multimodal Digitization: Engineered a layout-aware OCR ingestion pipeline using PyMuPDF and Pillow coupled with a Gemini Vision and Pixtral-12b model fallback chain to accurately extract text, equations, and tables from textbooks and handwritten documents into Markdown + LaTeX.',
        'Hybrid RAG Retrieval Engine: Developed a hybrid search system combining dense vector search (Google text-embedding-004 stored in a PostgreSQL pgvector store) and sparse lexical search (BM25Okapi), reranked by Cohere rerank-v3.5 and Reciprocal Rank Fusion (RRF) for precise context retrieval.',
        'Agentic Solver-Verifier Workflow: Orchestrated an iterative LangGraph agent workflow utilizing gpt-4o-mini and gemini-2.0-flash to act as a Solver (generating math questions), Verifier (validating alignment with curriculum, difficulty levels, and formatting), and Refiner to guarantee 100% accurate output.',
        'Dynamic Math Graphics: Built a dynamic diagramming pipeline using Gemini to generate TikZ coordinate scripts and compiled them server-side using pdflatex / tectonic.exe to output high-resolution vector geometry shapes and functions.',
        'Scrambled Multi-Format Export: Implemented a custom docx-generator in Python for exporting structured tests with scrambled question sheets ("đa mã đề") and automated grading keys to Excel format.'
      ],
      vi: [
        'OCR & Số hóa tài liệu đa phương thức: Xây dựng pipeline xử lý tài liệu sử dụng PyMuPDF, tiền xử lý ảnh OpenCV kết hợp chuỗi fallback Gemini Vision và Pixtral-12b để trích xuất văn bản, bảng biểu và công thức toán học từ SGK/tài liệu viết tay sang định dạng Markdown + LaTeX.',
        'Kiến trúc Hybrid RAG & Rerank: Phát triển hệ thống tìm kiếm lai ghép kết hợp Vector Search (mô hình text-embedding-004 lưu trữ trên cơ sở dữ liệu PostgreSQL + pgvector) và Lexical Search (BM25Okapi), tối ưu hóa độ chính xác bằng Cohere rerank-v3.5 và thuật toán xếp hạng RRF.',
        'Quy trình Agent tự trị (LangGraph): Thiết kế luồng xử lý agentic lặp gồm 3 tác nhân Solver (giải đề và sinh câu hỏi), Verifier (kiểm tra độ khó, kiểm duyệt nội dung) và Refiner (chuẩn hóa định dạng LaTeX) sử dụng LangGraph để đảm bảo chất lượng và độ chuẩn xác 100% của đề thi.',
        'Tự động vẽ hình học không gian & đồ thị: Tích hợp module AI tự động sinh mã nguồn đồ họa TikZ và biên dịch trực tiếp trên server qua tectonic.exe để xuất hình vẽ không gian, đồ thị hàm số sắc nét dưới định dạng SVG/PNG.',
        'Trộn đề và Xuất bản đa định dạng: Phát triển hệ thống xuất đề thi Word (.docx) đa mã đề được căn chỉnh lề chuẩn và bảng đáp án Excel (.xlsx) hỗ trợ chấm điểm tự động.'
      ]
    },
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Gemini API', 'OCR', 'RAG', 'ReactJS', 'NextJS'],
    link: 'https://quizify.edu.vn',
    embedUrl: 'http://localhost:5174'
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
