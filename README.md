# Om Career Hub — EdVyro Task 3: Secure Application Integration

A yellow-and-charcoal themed, responsive internship application portal prepared as Om's distinct UI variant. It connects a browser frontend to an Express API, validates application data in the browser and on the server, stores records in SQLite with prepared statements, and includes automated API tests.

## Requirements
- Node.js 22 LTS recommended (Node.js 20+ may work depending on the native SQLite binary available for your platform)
- npm

## Run on Windows PowerShell
From this project folder:

```powershell
npm install
Copy-Item backend/.env.example backend/.env
npm run dev
```

Open **http://localhost:5000**.

## Run tests
Open another terminal in the project folder:

```powershell
npm test
npm run check
```

## Features
- Responsive yellow visual theme and mobile-friendly application form
- Live API health indicator and recent application list
- Client-side validation and strict server-side Zod validation
- SQLite persistence using parameterized prepared statements
- Helmet security headers, disabled `X-Powered-By`, request body size limit, and configurable rate limiting
- Safe HTML escaping for user-provided values rendered in the UI
- Vitest + Supertest API regression tests
- GitHub Actions workflow for automated checks

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API health check |
| GET | `/api/applications` | List demo applications |
| POST | `/api/applications` | Validate and create an application |

## Environment configuration
Copy `backend/.env.example` to `backend/.env`. Defaults use port `5000`, a local SQLite database, and a development rate limit. Do not commit real secrets or production credentials.

## Project structure
```text
EdVyro_TASK3_Secure_Application_Integration/
├── .github/workflows/ci.yml
├── backend/
│   ├── src/ (app, routes, controllers, middleware, validators, services, database)
│   ├── tests/application.test.js
│   ├── .env.example
│   └── package.json
├── docs/TESTING.md
├── frontend/ (index.html, css/, js/)
├── .gitignore
└── package.json
```

## Demo limitations
This is an educational task project. The recent-applications endpoint is intentionally public for local demonstration; a real hiring platform must add authenticated and authorized administrative access, privacy/retention controls, HTTPS, monitoring, and deployment-specific CORS rules before production use.
