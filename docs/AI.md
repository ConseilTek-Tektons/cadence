# Portfolio copilot and grounded retrieval

`POST /api/assistant` requires a signed session and `assistant.ask`, validates the question, and rate-limits each user. Cadence retrieves approved portfolio guidance and returns citations; it has no work-mutation or automation-publication tool.

Local mode ranks `src/data/knowledge.ts`. Setting `OPENAI_API_KEY` enables the Responses API with `store: false`; adding `OPENAI_VECTOR_STORE_ID` enables hosted `file_search` over `knowledge/`. Retrieved text is untrusted data. It never overrides system policy, tenant scope, or RBAC.

Critical-path, workload, and automation answers must identify their supporting records and calculation assumptions. Do not ingest secrets or unnecessary personal data.
