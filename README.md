# CareerBoost AI

Hey there! 👋 Welcome to **CareerBoost AI** – your AI-powered career booster.

- Scans resumes, GitHub, LinkedIn profiles.
- Tailors applications for jobs.
- Generates personalized career roadmaps.
- Makes job hunting smarter and easier.

## Main Aim

- Empower job seekers with AI tools.
- Analyze and optimize career documents/profiles.
- Help stand out in competitive markets.
- Provide personalized strategies for success.
- Guide through resume polishing, online presence, and career planning.

## Features

### 1. Resume Audit & Tailoring
- Upload PDF resume for AI analysis.
- Checks ATS compatibility, keywords, formatting.
- Suggests tailoring for job descriptions.
- **Key Files**:
  - Frontend: `ResumeAudit.jsx`, `ResumeCombined.jsx`, `ResumeTailor.jsx`.
  - Backend: `resumeController.js`, `aiService.js`, `gemini.js`.
  - Hooks: `useScanAts.js`.

### 2. ATS Scanner
- Simulates ATS reading of resumes.
- Scores match against job descriptions.
- Highlights missing keywords and improvements.
- **Key Files**:
  - Frontend: `AtsScanner.jsx`.
  - Backend: `atsController.js`, `aiService.js`.

### 3. GitHub Profile Scan
- Analyzes GitHub for skills, projects, contributions.
- Provides recruiter insights and tips.
- **Key Files**:
  - Frontend: `GithubScanner.jsx`.
  - Backend: `githubController.js`, `aiService.js`.
  - Hooks: `useScanGithub.js`.

### 4. LinkedIn Profile Review
- Reviews profile completeness and visibility.
- Checks summary, experience, skills, endorsements.
- Offers networking tips.
- **Key Files**:
  - Frontend: `LinkedinScanner.jsx`.
  - Backend: `linkedinController.js`, `aiService.js`.
  - Hooks: `useScanLinkedin.js`.

### 5. Roadmap Generator
- Generates personalized career roadmaps.
- Based on goals, skills, target roles.
- Includes steps, timelines, resources.
- **Key Files**:
  - Frontend: `RoadmapGenerator.jsx`.
  - Backend: `roadmapController.js`, `aiService.js`.
  - Hooks: `useRoadmap.js`.

### 6. AI-Powered Insights & UI
- AI for smart, context-aware advice.
- UI with 3D scenes, glass cards, animations.
- **Key Files**:
  - Frontend: `HeroScene.jsx`, `GlassCard.jsx`, `Animations.jsx`, `GradientButton.jsx`.
  - Backend: `aiService.js`, `gemini.js`.
  - Store: `useStore.js`.

### Additional Backend Features
- **File Upload & Parsing**:
  - Handles PDF uploads.
  - Files: `upload.js`, `inspect_pdf_parse.js`.
- **Database & Models**:
  - User profiles storage.
  - Files: `db.js`, `UserProfile.js`.
- **Error Handling & Routing**:
  - Middleware and API routes.
  - Files: `errorMiddleware.js`, `apiRoutes.js`.

## Tech Stack

- **Frontend**:
  - React (JSX) for UI.
  - Vite for development/bundling.
  - Tailwind CSS for styling.
  - Three.js for 3D.
  - ESLint, PostCSS for quality.

- **Backend**:
  - Node.js, Express.js for server.
  - MongoDB (Mongoose) for data.
  - Multer for uploads.
  - PDF parsing libs.

- **AI & Integrations**:
  - Gemini AI for NLP/insights.
  - Axios for API calls (`api.js`).

- **Other**:
  - npm for packages.
  - Git for version control.

## Project Structure

```
demo/
├── client/                    # React app
│   ├── public/                # Assets
│   ├── src/
│   │   ├── components/        # UI components
│   │   │   ├── 3d/            # 3D scenes
│   │   │   ├── features/      # Feature components
│   │   │   └── ui/            # UI elements
│   │   ├── hooks/             # React hooks
│   │   ├── services/          # API layer
│   │   ├── store/             # State
│   │   └── App.jsx            # Main app
│   ├── package.json
│   └── vite.config.js
├── server/                    # Node.js app
│   ├── config/                # DB config
│   ├── controllers/           # Handlers
│   ├── middleware/            # Middleware
│   ├── models/                # Data models
│   ├── routes/                # API routes
│   ├── services/                # Logic
│   ├── utils/                 # Utils
│   ├── uploads/               # Files
│   ├── server.js              # Main server
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (16+)
- npm/yarn
- MongoDB
- Gemini API key

### Installation
1. Clone repo: `git clone <url> && cd careerboost-ai`
2. Backend setup:
   - `cd server`
   - `npm install`
   - Create `.env`:
     ```
     GEMINI_API_KEY=...
     MONGODB_URI=...
     PORT=5000
     ```
   - `npm start`
3. Frontend setup:
   - `cd client`
   - `npm install`
   - `npm run dev`
4. Open `http://localhost:3000`

### Configuration
- Add API key and DB URI to `.env`.
- Ensure MongoDB runs.
- Ports: Backend 5000, Frontend 3000.

## Usage
- Dashboard: 3D hero, navigate features.
- Resume: Upload PDF in `ResumeAudit.jsx` for audit.
- Scanners: Use ATS, GitHub, LinkedIn components.
- Roadmap: Generate in `RoadmapGenerator.jsx`.
- API: Frontend calls backend via `api.js`.

## API Endpoints
- `POST /api/resume/audit` - Resume analysis
- `POST /api/ats/scan` - ATS scan
- `POST /api/github/scan` - GitHub scan
- `POST /api/linkedin/scan` - LinkedIn review
- `POST /api/roadmap/generate` - Roadmap gen
- `POST /api/upload` - File upload

## Contributing
- Fork repo.
- Create branch: `git checkout -b feature`
- Make changes, test.
- PR with clear commits.

## License
MIT License.

## Support
Open issues on GitHub.

Happy boosting! 🚀