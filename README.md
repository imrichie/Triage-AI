# Triage AI

A privacy-first AI medical triage assistant that helps clinicians assess patient urgency while protecting patient data.

## Overview

Triage AI uses AI to analyze clinical notes and suggest triage priority levels (1-5) while ensuring patient identifiers never reach the AI through automated PII sanitization.

## Tech Stack

- **Frontend:** React.js + Tailwind CSS
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
npm start
```

### Backend

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Author

Ricardo - Designer & Developer
