# Triage AI

A privacy-first AI medical triage assistant that helps clinicians assess patient urgency while protecting patient data.

## Overview

Triage AI uses AI to analyze clinical notes and suggest triage priority levels (1-5) while ensuring patient identifiers never reach the AI through automated PII sanitization.

## Tech Stack

- **Build Tool:** Vite
- **Frontend:** React.js + TypeScript + TailwindCSS
- **Icons:** Lucide React
- **Backend:** FastAPI + Python
- **Privacy Layer:** Microsoft Presidio
- **AI:** OpenAI GPT API

## Project Status

🚧 **In Development** - Currently building initial functionality

## Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`

### Backend

```bash
cd backend
source back-env/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Or use the convenience script:

```bash
cd backend
./run.sh
```

Runs on `http://localhost:8000`

## Author

Ricardo - UX Designer & Developer
