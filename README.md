# Remote Control Mouse

A cybersecurity proof-of-concept: how an ordinary desk peripheral — a mouse
or its wireless receiver — can be turned into a remote-control and
surveillance implant, and what a device built to *refuse* that would look
like.

The page is a single-page explainer built around **Pivot One**, a concept
pointer/presenter/media remote whose security model is defined by what it
cannot do: no microphone, no journal that outlives a sleep cycle, no packet
on the wire unless a button is held.

## What it covers

- **Threat model** — the swap, the senses, the journal, the beacon: how a
  compromised peripheral is provisioned four steps up the supply chain.
- **From the other side** — the receiver as a keyboard in disguise, a radio
  that takes instructions back in, and movement timing as a signature of you.
- **The takeover** — a *simulated* reconstruction of what a compromised
  pointer's recording would look like. Nothing is live.
- **The backend** — a *simulated* implant console: buffer, relay, injected
  keystrokes. Nothing here is wired to anything.
- **The evidence** — a capability-by-capability checklist of what
  surveillance hardware needs, beside a device designed without it.

## Important

Everything adversarial on this page is **described, not demonstrated**. The
recording and operator console are simulations with no live capture, no
network relay and no working payload. It is an awareness piece about the
peripheral attack surface, not a build guide.

## Running it

Open `index.html` in a browser, or serve the folder statically (e.g. GitHub
Pages). The in-page animations run from the local bundle; no external
services are called.

---

*Concept and write-up by Niall O'Hara.*
