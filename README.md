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
- Logo: assets/logo.svg + assets/logo.svg
- Farben: assets/colors.json
- Font: Inter (Google Fonts)
