from fastapi import FastAPI

app = FastAPI(title="Triage AI Backend")

@app.get("/")
def root():
    return {"message": "Triage AI Backend is running"}

@app.get("/api/health")
def health():
    return {"status": "healthy"}