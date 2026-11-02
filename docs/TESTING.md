# Testing and verification checklist

1. Start the server with `npm run dev`.
2. Visit `/api/health` and confirm `{ "success": true, "status": "ok" }`.
3. Load the homepage and confirm the API status says connected.
4. Submit the form with a valid name, email, phone, role, and cover letter (20+ characters).
5. Confirm the success message and new entry in Recent applications.
6. Try an invalid email and a short cover letter; confirm client-side messages.
7. Send invalid JSON fields directly to `POST /api/applications`; confirm HTTP 400 and field errors.
8. Run `npm test`; all automated API tests should pass.
9. Check responsive layout at desktop and mobile widths.
