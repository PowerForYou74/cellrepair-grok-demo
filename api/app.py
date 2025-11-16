from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI(title="CellRepair Grok Demo API")

class Prompt(BaseModel):
	text: str

@app.get("/health")
def health():
	return {"ok": True, "routing": os.getenv("MODEL_ROUTING", "quality_cost")}

@app.post("/demo")
def demo(p: Prompt):
	return {
		"agents_used": 17,
		"confidence": 0.91,
		"routing": os.getenv("MODEL_ROUTING", "quality_cost"),
		"message": "Demoantwort: Guardrails aktiv (Confidence-Gate, Fallback, Abort)"
	}
