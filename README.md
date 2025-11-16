# CellRepair.ai — Grok AI Demo

Vollständiges Demo-Repo:
- Setup in <60s (Docker Compose)
- FastAPI (Backend) + Next.js (Frontend)
- Guardrails (Confidence-Gate, Fallback, Abort)
- CI-Workflow
- Assets (Logo, Farben, Font)

## Quickstart
1) cp .env.example .env (fülle Keys aus)
2) docker compose up -d
3) Web: http://localhost:3000  |  API: http://localhost:8000

## Env
- MODEL_ROUTING=quality_cost
- Hard-Limits + Session-Budget
- Confidence-Gate <0.6 → Re-route
- Stuck-Agent Abort + Trace-IDs
- DEV/STAGE/PROD-Profile

## Struktur
- api/ (FastAPI)
- web/ (Next.js)
- assets/ (Logo/Branding)
- .github/workflows/ (CI)

## Grok Assets-Wunschliste (bereitgestellt)
- Logo: https://cellrepair.ai/assets/LOGO%20CellRepair%20AI%20NETWORK.png + assets/logo.svg
- Farben: assets/colors.json
- Font: Inter (Google Fonts)

## Was ist CellRepair.ai?
CellRepair.ai ist ein skalierbares Multi‑Agent Framework mit echten Guardrails (Confidence‑Gate <0.6 → Re‑route, Hard‑Limits, Abort/Trace‑IDs). Ziel: schneller von Idee zu Produktion – robust und kostenbewusst.

## In 3 Minuten loslegen
- Ohne Docker: Node 20 + Python 3.11 installieren, dann `npm i && npm run dev` im `web/` und `uvicorn api.app:app` im `api/`.
- Mit Docker: `docker compose up -d` → Web: `http://localhost:3000`, API: `http://localhost:8000`.

## Guardrails – kurz erklärt
- Confidence‑Gate: Unsichere Antworten (<0.6) werden automatisch neu geroutet.
- Hard‑Limits + Session‑Budget: Kosten und Nutzung klar begrenzt.
- Abort + Trace‑IDs: Sauberes Debugging bei „stuck“ Agenten.

## FAQ
- Wer nutzt es? Dev‑Teams, Startups, Research Labs.
- Was kostet es? Open‑Source; Cloud‑Kosten je nach Modell/Provider.
- Wie integrieren? HTTP‑API (`/api/v1/collaborate`) und Web‑Demo (dieses Repo).
