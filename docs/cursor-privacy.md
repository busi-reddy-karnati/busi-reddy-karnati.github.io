# Cursor Privacy and Anonymity Setup

This project includes safeguards to reduce local tracking footprint, but full anonymity depends on your Cursor account/session settings.

## 1) Exclude editor artifacts from the repo

Already added:

- `.gitignore` excludes `.cursor/` and env files
- `.cursorignore` excludes `.cursor/`, `node_modules/`, `dist/`, env files

## 2) Disable telemetry and data sharing in Cursor

In Cursor settings:

- Disable telemetry / analytics / usage reporting (if available in your version)
- Disable crash and diagnostics sharing
- Disable cloud sync for sensitive workspaces (optional)

## 3) Use local-only project practices

- Avoid committing workspace metadata
- Keep secrets in `.env` only (already ignored)
- Review staged files before every commit: `git status`

## 4) Understand practical limits

- If signed into an account, some platform-side logging may still exist.
- For stronger privacy, use a dedicated account and minimal sync features.
