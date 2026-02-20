<div align="center">

# ⚡ CellRepair.AI — Grok AI Demo

[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![Next.js](https://img.shields.io/badge/Next.js-Frontend-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Grok](https://img.shields.io/badge/Grok-xAI-red?style=for-the-badge)](https://x.ai)

**Complete demo repository: CellRepair.AI + Grok integration with guardrails.**

[Website](https://cellrepair.ai) · [Demo Video](https://youtube.com) · [Live Demo](https://cellrepair.ai)

</div>

---

## 🚀 Quick Start

```bash
cp .env.example .env  # fill in your keys
docker compose up -d
```

- **Web:** http://localhost:3000
- **API:** http://localhost:8000

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Docker Compose** | Setup in <60s |
| **FastAPI Backend** | High-performance API |
| **Next.js Frontend** | Modern React UI |
| **Guardrails** | Confidence-Gate, Fallback, Abort |
| **CI Workflow** | GitHub Actions |
| **Brand Assets** | Logo, Colors, Font |

## ⚙️ Environment Variables

| Variable | Description |
|----------|-------------|
| `MODEL_ROUTING` | `quality_cost` routing strategy |
| Hard-Limits | Session-Budget enforcement |
| Confidence-Gate | <0.6 triggers re-route |
| Stuck-Agent Abort | + Trace-IDs |
| DEV/STAGE/PROD | Profile switching |

## 🏗️ Project Structure

```
cellrepair-grok-demo/
├── api/              # FastAPI backend
├── web/              # Next.js frontend
├── assets/           # Brand assets (logo, colors)
├── .github/          # CI workflow
├── docker-compose.yml
└── .env.example
```

## 🔗 Related Projects

| Project | Description |
|---------|-------------|
| [cellrepair-ai](https://github.com/PowerForYou74/cellrepair-ai) | Core AI framework |
| [cellrepair-agentx-purple](https://github.com/PowerForYou74/cellrepair-agentx-purple) | AgentX Purple Agent (96.5% win rate) |
| [cellrepair-langchain](https://github.com/PowerForYou74/cellrepair-langchain) | LangChain integration |
| [cellrepair-mcp-server](https://github.com/PowerForYou74/cellrepair-mcp-server) | Claude MCP integration |

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">

Built by [Oliver Winkel](https://github.com/PowerForYou74) at [CellRepair AI](https://cellrepair.ai)

</div>
