# Risks and guardrails

<!-- This file records foreseeable AI risks and the product choices intended to reduce them. -->

| Risk | Why it matters | Guardrail | Validation |
| --- | --- | --- | --- |
| Unsupported claim | A polished but false statement can mislead a decision. | Bounded sources, visible citations, and “not enough evidence” behavior. | Expert faithfulness review |
| Missing context | A short summary can conceal disagreement or caveats. | Open-question section and source inspection. | Conflict-source test set |
| Automation bias | Users may accept fluent output without review. | Draft labels and explicit reviewer responsibility. | Usability observation |
| Sensitive data | Research material may contain private or confidential information. | Portfolio prototype uses fictional examples only; no upload, storage, or network calls. | Static-code review |
| Scope creep | A demo could be mistaken for a production tool. | README and interface state the portfolio/demo boundary. | Portfolio review checklist |

## Escalation placeholder
`[ADD WHO OWNS RISK REVIEW, WHAT BLOCKS A RELEASE, AND HOW FEEDBACK IS TRACKED.]`
