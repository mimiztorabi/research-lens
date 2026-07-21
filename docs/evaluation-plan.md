# Evaluation plan

<!-- This file defines how the portfolio concept would be validated before launch. -->

## Evaluation questions
1. Can users find the evidence behind a generated claim?
2. Does the draft reduce synthesis effort without lowering decision confidence?
3. Does the assistant correctly communicate gaps and conflicts?

## Methods
| Method | What it tests | Placeholder success bar |
| --- | --- | --- |
| Moderated usability sessions | Source selection, citation review, and editing flow. | `[ADD TASK SUCCESS TARGET]` |
| Expert quality review | Faithfulness, completeness, and usefulness of drafts. | `[ADD RUBRIC AND PASS RATE]` |
| Red-team prompt set | Unsupported claims, conflicting sources, and ambiguous requests. | `[ADD BLOCKING FAILURE THRESHOLD]` |
| Pilot instrumentation | Time-to-first-draft, edits, source opens, and flags. | `[ADD TARGET AND PRIVACY PLAN]` |

## Quality rubric
Score each draft from 1–5 for:
- **Faithfulness:** Is each claim supported by the provided sources?
- **Traceability:** Can a reviewer identify the supporting source?
- **Usefulness:** Does the structure help the intended decision task?
- **Uncertainty handling:** Are gaps and contradictions visible?

## Decision rule
Do not expand the concept beyond a pilot until the evidence shows acceptable faithfulness and traceability, no unresolved blocking safety issue, and qualitative evidence of user value.
