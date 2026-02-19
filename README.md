# CellRepair.ai — Grok AI Demo

Complete demo repository:

- Setup in <60s (Docker Compose)
- FastAPI (Backend) + Next.js (Frontend)
- Guardrails (Confidence-Gate, Fallback, Abort)
- CI Workflow
- Assets (Logo, Colors, Font)

---

## Quickstart

1. `cp .env.example .env` (fill in your keys)
2. `docker compose up -d`
3. Web: http://localhost:3000 | API: http://localhost:8000

---

## Environment Variables

- `MODEL_ROUTING=quality_cost`
- Hard-Limits + Session-Budget
- Confidence-Gate <0.6 → Re-route
- Stuck-Agent Abort + Trace-IDs
- DEV/STAGE/PROD Profile

---

## Structure

- `api/` (FastAPI)
- `web/` (Next.js)
- `assets/` (Logo/Branding)
- `.github/workflows/` (CI)

---

## Grok Assets (Included)

- Logo: [CellRepair AI Network Logo](https://cellrepair.ai/assets/LOGO%20CellRepair%20AI%20NETWORK.png) + `assets/logo.svg`
- Colors: `assets/colors.json`
- Font: Inter (Google Fonts)

---

## What is CellRepair.ai?

CellRepair.ai is a scalable multi-agent framework with real guardrails (Confidence-Gate <0.6 → Re-route, Hard-Limits, Abort/Trace-IDs). Goal: faster from idea to production – robust and cost-aware.

---

## Get Started in 3 Minutes

- **Without Docker:** Install Node 20 + Python 3.11, then `npm i && npm run dev` in `web/` and `uvicorn api.app:app` in `api/`.
- **With Docker:** `docker compose up -d` → Web: `http://localhost:3000`, API: `http://localhost:8000`.

---

## Guardrails – Explained

- **Confidence-Gate:** Uncertain responses (<0.6) are automatically re-routed.
- **Hard-Limits + Session-Budget:** Costs and usage clearly limited.
- **Abort + Trace-IDs:** Clean debugging for "stuck" agents.

---

**Built by [Oliver Winkel](https://github.com/PowerForYou74) at [CellRepair AI](https://cellrepair.ai)**
