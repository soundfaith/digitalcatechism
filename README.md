# Digital Catechism

A multi-layer Catechism of the Catholic Church learning platform.

## Recommended stack

- **Frontend:** TypeScript, React, Vite, Tailwind CSS
- **Backend:** TypeScript, Fastify, Zod
- **Future persistence:** PostgreSQL with Prisma
- **Future audio storage:** S3-compatible object storage and a CDN

TypeScript across the frontend and backend keeps the topic contracts consistent while the separate applications preserve a clear deployment boundary.

## Workspace layout

```text
frontend/   React + Vite mobile-first course reader
backend/    Fastify API for course and topic data
```

## Run locally

Open two terminals:

```powershell
cd frontend
npm install
npm run dev
```

```powershell
cd backend
npm install
npm run dev
```

The frontend expects the API at `http://localhost:4000`. Set `VITE_API_URL` to change it.

## MVP content boundary

The starter content contains one original, pastoral summary for each of the seven days. It is intentionally modeled as course data so the 14-day, 30-day, full library, and audience editions can be added without changing the reader UI.
