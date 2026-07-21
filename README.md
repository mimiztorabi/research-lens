# Research Lens — AI Product Portfolio Case Study

<!-- This README is the beginner-friendly map to this Senior Product Manager portfolio project. -->

Research Lens is a fictional concept for helping knowledge workers turn a small set of sources into a traceable research brief. This repository shows **product strategy, AI behavior design, evaluation thinking, and a static prototype**—not a production service.

> **Portfolio note:** All names, content, metrics, and screens are illustrative placeholders unless labelled otherwise. Replace them with your own evidence before publishing.

## Start here

1. Read the [product brief](docs/product-brief.md) for the problem and concept.
2. Read the [PRD](docs/prd.md) for the proposed MVP scope.
3. Open [`prototype/index.html`](prototype/index.html) in a browser to explore the no-backend demo.
4. Use [the case study](docs/case-study.md) as the narrative for a portfolio review.

## Repository map

| Location | What it contains |
| --- | --- |
| `docs/` | Product artifacts: scope, user journey, AI behavior, evaluation, risks, and case-study narrative. |
| `prototype/` | A dependency-free, GitHub Pages-safe HTML/CSS/JavaScript demonstration. |
| `assets/prototype-screens/` | Put exported screenshots or annotated screen images here. The included placeholder keeps the folder in Git. |
| `AGENTS.md` | Practical guardrails for contributors and AI coding agents. |

## Run the prototype locally

No installation is required. Either open `prototype/index.html` directly, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/prototype/`. The “Generate brief” interaction uses sample content stored in the page; it never uploads a file or calls an AI model.

## Customize before publishing

- Replace bracketed placeholders such as `[ADD EVIDENCE]` with your own research and outcomes.
- Add screenshots to `assets/prototype-screens/` and link them from `docs/case-study.md`.
- Verify that examples are fictional or approved for public use.
- Keep the prototype static unless you deliberately reposition this as an engineering project.

## What this demonstrates

- Framing an AI opportunity around a user decision rather than model novelty.
- Designing citations, uncertainty, and user control into the experience.
- Defining measurable quality, safety, and adoption signals before launch.

## Plain-English technical notes

This is deliberately a small front-end demonstration. The browser loads three local files: the page structure (`index.html`), its visual design (`styles.css`), and a little interaction logic (`script.js`). The logic only filters and displays fictional text already included in the repository. It does not send research notes, questions, or usage information to a server.

That design makes the concept easy to review on GitHub Pages and keeps the portfolio focused on product decisions: what evidence the assistant may use, how it communicates uncertainty, and how a person remains responsible for the final decision.
