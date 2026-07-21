# PRD: Research Lens MVP

<!-- This file translates the concept into a small, testable product scope. -->

## Goal
Validate whether a source-grounded brief helps PMs begin decision writing with more confidence and less synthesis effort.

## User story
As a product manager, I want to select a small set of research notes and generate a cited draft so that I can review the evidence before writing a recommendation.

## MVP requirements
| Area | Requirement | Priority |
| --- | --- | --- |
| Source set | Show 2–10 user-selected sources with titles and short excerpts. | Must |
| Brief | Produce a structured summary, themes, and open questions. | Must |
| Traceability | Attach a source label to every generated factual claim. | Must |
| Review | Let the user inspect a source, edit the draft, and flag a claim. | Must |
| Boundaries | State that output is a draft and may be incomplete. | Must |
| Export | Copy plain text to the clipboard. | Could |

## Out of scope
- Live web search, automatic ingestion, collaboration, user accounts, persistent storage, and model/provider selection.
- Any workflow involving confidential data, legal advice, or automatic decision-making.

## Acceptance criteria
1. A reviewer can identify the source attached to each displayed claim.
2. A reviewer can see at least one uncertainty or open question when the evidence is incomplete.
3. The static prototype works with no network request or credentials.
4. The UI clearly labels generated text as a draft for human review.

## Open questions
- `[ADD] Which research artifact is the best initial input: interview notes, survey results, or support tickets?`
- `[ADD] What citation granularity do users need: document, paragraph, or quote?`
- `[ADD] What does “good enough” look like for a first draft in this workflow?`
