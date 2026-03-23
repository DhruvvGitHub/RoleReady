RoleReady - AI-Powered Interview Preparation Platform
RoleReady is an intelligent interview preparation platform that leverages Google's Gemini AI to generate personalized interview reports, helping candidates prepare effectively for job interviews by analyzing their resume, job descriptions, and self-descriptions.

🚀 Features
Core Functionality
AI-Powered Interview Reports: Generate comprehensive interview preparation reports using Google Gemini AI
Resume Analysis: Upload and analyze PDF resumes to extract skills and experience
Personalized Questions: Get tailored technical and behavioral interview questions based on your profile
Skill Gap Analysis: Identify areas for improvement with severity levels (High/Medium/Low)
Preparation Roadmap: Receive day-by-day preparation plans to strengthen weak areas
Match Scoring: Get a percentage match score between your profile and job requirements
Custom Resume Generation: Download ATS-friendly, job-tailored HTML resumes
User Experience
Modern UI: Clean, responsive interface built with React and Tailwind CSS
Real-time Processing: Fast report generation with loading states
Report History: View and manage previous interview reports
Secure Authentication: JWT-based authentication with cookie management
File Upload Support: Secure PDF resume upload with validation
🛠 Technology Stack
Frontend (Client)
React 19.2.0 - Modern React with latest features
React Router 7.13.1 - Client-side routing
TailwindCSS 4.2.1 - Utility-first CSS framework
Axios 1.13.6 - HTTP client for API calls
React Icons 5.6.0 - Icon library
Vite 7.3.1 - Fast build tool and dev server
Sass 1.97.3 - CSS preprocessor
Backend (Server)
Node.js 18+ - JavaScript runtime
Express 5.2.1 - Web framework
MongoDB with Mongoose 9.2.3 - Database and ODM
Google Gemini AI 1.44.0 - AI service for report generation
JWT 9.0.3 - Authentication tokens
bcryptjs 3.0.3 - Password hashing
Multer 2.1.1 - File upload handling
PDF-parse 1.1.1 - PDF text extraction
Zod 4.3.6 - Schema validation
Development Tools
Nodemon 3.1.14 - Auto-restart for development
ESLint 9.39.1 - Code linting
dotenv 17.3.1 - Environment variable management
📋 Prerequisites
Node.js 18 or higher
MongoDB (local or cloud instance)
Google Gemini AI API key
Git
🚀 Quick Start
1. Clone the Repository
bash
git clone <your-repository-url>
cd RoleReady
2. Environment Setup
Create .env files in both client and server directories:

Server .env:

env
# Database
MONGODB_URI=your_mongodb_connection_string
 
# JWT Secret
JWT_SECRET=your_jwt_secret_key
 
# Google Gemini AI
GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
 
# Server Configuration
PORT=3000
NODE_ENV=development
Client .env:

env
VITE_API_URL=http://localhost:3000
3. Install Dependencies
bash
# Install server dependencies
cd server
npm install
 
# Install client dependencies
cd ../client
npm install
4. Start the Application
bash
# Start the server (from server directory)
npm run dev
 
# Start the client (from client directory)
npm run dev
The application will be available at:

Frontend: http://localhost:5173
Backend API: http://localhost:3000
📁 Project Structure
RoleReady/
├── client/                     # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── features/           # Feature modules
│   │   │   ├── auth/          # Authentication features
│   │   │   └── interview/      # Interview features
│   │   ├── assets/             # Images and assets
│   │   ├── App.jsx            # Main app component
│   │   ├── app.routes.jsx     # Route configuration
│   │   └── main.jsx           # App entry point
│   ├── .env                   # Client environment variables
│   └── package.json
├── server/                     # Node.js backend
│   ├── src/
│   │   ├── app.js             # Express app configuration
│   │   └── services/          # AI and business logic
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/           # Route controllers
│   │   ├── auth.controller.js
│   │   └── interview.controller.js
│   ├── middlewares/           # Custom middlewares
│   ├── models/                # MongoDB models
│   ├── routes/                # API routes
│   ├── .env                   # Server environment variables
│   ├── package.json
│   └── server.js              # Server entry point
└── README.md
🔧 API Endpoints
Authentication
POST /api/auth/register - User registration
POST /api/auth/login - User login
POST /api/auth/logout - User logout
GET /api/auth/me - Get current user
Interview Reports
POST /api/interview/generate - Generate interview report
GET /api/interview/reports - Get all user reports
GET /api/interview/report/:id - Get specific report
GET /api/interview/resume/:id/html - Download custom resume


🤖 AI Integration
The platform uses Google Gemini AI for:

Interview Report Generation: Analyzes resume, job description, and self-description to create comprehensive reports
Question Generation: Creates relevant technical and behavioral questions with model answers
Skill Gap Analysis: Identifies missing skills and categorizes by severity
Preparation Planning: Generates day-by-day study plans
Resume Customization: Creates job-tailored, ATS-friendly resumes
AI Schema Validation
All AI responses are validated using Zod schemas to ensure data consistency and reliability.

🔐 Security Features
JWT Authentication: Secure token-based authentication
Password Hashing: bcryptjs for secure password storage
Cookie Security: HttpOnly, Secure, and SameSite cookie settings
Token Blacklisting: Secure logout with token invalidation
Input Validation: Zod schema validation for all inputs
File Upload Security: Multer with file type and size restrictions
🎯 User Flow
Registration/Login: Users create accounts or sign in
Report Generation: Upload resume, provide job description and optional self-description
AI Analysis: System analyzes inputs and generates comprehensive report
Review Results: View match score, questions, skill gaps, and preparation plan
Download Resume: Get customized, job-tailored resume
Track Progress: Access previous reports to monitor improvement
📊 Report Components
Each interview report includes:

Match Score: 0-100% compatibility rating
Technical Questions: 10+ role-specific technical questions with answers
Behavioral Questions: STAR-format behavioral questions
Skill Gaps: Identified weaknesses with severity levels
Preparation Plan: Day-by-day improvement roadmap
Custom Resume: ATS-friendly, job-tailored HTML resume
🧪 Development
Running Tests
bash
# From server directory
npm test
 
# From client directory
npm test
Code Quality
bash
# Lint server code
cd server && npm run lint
 
# Lint client code
cd client && npm run lint
Building for Production
bash
# Build client
cd client && npm run build
 
# Start server in production
cd server && npm start
🚀 Deployment
Environment Variables for Production
Set NODE_ENV=production
Configure production MongoDB URI
Use secure JWT secrets
Set up proper CORS origins
Configure HTTPS
Recommended Deployment Platforms
Frontend: Vercel, Netlify, or AWS S3
Backend: Heroku, AWS EC2, or DigitalOcean
Database: MongoDB Atlas
🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support
For support, please contact: dhruvtanwani967@gmail.com

Create an issue in the GitHub repository
Email: dhruvtanwani967@gmail.com


🔮 Future Roadmap
Mock interview simulations
Video interview practice
Company-specific insights
Community features
Advanced analytics dashboard
Integration with LinkedIn and job boards
Mobile application

Built with ❤️ using React, Node.js, and Google Gemini AI
