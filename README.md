🚀 RoleReady - AI-Powered Interview Preparation Platform

RoleReady is an intelligent interview preparation platform that leverages Google Gemini AI to generate personalized interview reports. It helps candidates prepare effectively by analyzing their resume, job descriptions, and self-descriptions.


✨ Features

🔹 Core Functionality
AI-Powered Interview Reports – Generate comprehensive reports using Google Gemini AI
Resume Analysis – Upload and analyze PDF resumes to extract skills and experience
Personalized Questions – Tailored technical and behavioral interview questions
Skill Gap Analysis – Identify weak areas with severity levels (High/Medium/Low)
Preparation Roadmap – Day-by-day plan to improve weak areas
Match Scoring – Percentage match between profile and job requirements
Custom Resume Generation – ATS-friendly, job-tailored HTML resumes

🎨 User Experience
Modern UI built with React + Tailwind CSS
Real-time report generation with loading states
Report history tracking
Secure authentication (JWT-based)
Secure PDF upload with validation


🛠 Tech Stack

🖥 Frontend (Client)
React 19.2.0
React Router 7.13.1
TailwindCSS 4.2.1
Axios 1.13.6
React Icons 5.6.0
Vite 7.3.1

⚙️ Backend (Server)
Node.js 18+
Express 5.2.1
MongoDB + Mongoose 9.2.3
Google Gemini AI 1.44.0
JWT 9.0.3
bcryptjs 3.0.3
Multer 2.1.1
PDF-parse 1.1.1
Zod 4.3.6

🧰 Development Tools
Nodemon
ESLint
dotenv
📋 Prerequisites
Node.js (v18 or higher)
MongoDB (local or Atlas)
Google Gemini API Key


Git
⚡ Quick Start
1. Clone the Repository
git clone <repo-url>
cd RoleReady
2. Environment Setup
📁 Server .env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
PORT=3000
NODE_ENV=development
📁 Client .env
VITE_API_URL=http://localhost:3000
3. Install Dependencies
# Server
cd server
npm install

# Client
cd ../client
npm install
4. Start the Application
# Start server
cd server
npm run dev

# Start client
cd ../client
npm run dev
🌐 App URLs
Frontend → http://localhost:5173
Backend → http://localhost:3000


📁 Project Structure
RoleReady/
│
├── client/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── interview/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── app.routes.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
├── server/                # Node backend
│   ├── src/
│   │   ├── app.js
│   │   └── services/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md


🔧 API Endpoints
🔐 Authentication
POST /api/auth/register → Register user
POST /api/auth/login → Login
POST /api/auth/logout → Logout
GET /api/auth/me → Current user
📊 Interview Reports
POST /api/interview/generate → Generate report
GET /api/interview/reports → Get all reports
GET /api/interview/report/:id → Get specific report
GET /api/interview/resume/:id/html → Download resume
🤖 AI Integration

RoleReady uses Google Gemini AI for:

Interview report generation
Technical & behavioral questions
Skill gap detection
Preparation planning
Resume customization

✅ All responses are validated using Zod schemas.


🔐 Security Features

JWT Authentication
Password hashing (bcryptjs)
Secure cookies (HttpOnly, SameSite)
Token blacklisting (logout security)
Input validation (Zod)
Secure file uploads (Multer restrictions)

🎯 User Flow
Register / Login
Upload resume + job description
AI generates report
Review insights (score, questions, gaps)
Download custom resume
Track progress
📊 Report Includes
Match Score (0–100%)
10+ Technical Questions (with answers)
Behavioral Questions (STAR format)
Skill Gap Analysis
Preparation Plan
Custom Resume
🧪 Development
Run Tests
cd server && npm test
cd client && npm test
Lint Code
cd server && npm run lint
cd client && npm run lint
Build for Production
cd client && npm run build
cd server && npm start
🚀 Deployment
Environment Setup
NODE_ENV=production
Secure MongoDB URI
Strong JWT secret
Proper CORS config
HTTPS enabled
Recommended Platforms
Frontend → Vercel / Netlify
Backend → Render / AWS / DigitalOcean
Database → MongoDB Atlas
🤝 Contributing
git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature

Then open a Pull Request 🚀

📝 License
MIT License
🆘 Support
📧 dhruvtanwani967@gmail.com
Or open an issue in the repository

🔮 Future Roadmap
Mock interview simulations
Video interview practice
Company-specific insights
Community features
Analytics dashboard
LinkedIn & job board integrations
Mobile app

Built With ❤️ 
React • Node.js • MongoDB • Google Gemini AI
