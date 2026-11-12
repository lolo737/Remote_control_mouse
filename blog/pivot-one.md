---
title: "Pivot One — the mouse that refused to become a spy"
description: "A counter-surveillance concept: a mouse, presenter and media remote designed around the capabilities it deliberately leaves out."
---

# Pivot One — the mouse that refused to become a spy

*A pointer, a presenter and a media remote — three honest jobs in one shell. The point of Pivot One is what it cannot do: no microphone, no persistent journal, and no radio transmission unless a button is being pressed.*

[Open the original interactive presentation](https://click-link-control.base44.app/#top)

## A mouse is the best place to hide

A mouse sits closer to you than your phone. It rarely asks for permission, and it already observes every movement you make. Turning one into a listening device is not a movie idea; it is a supply-chain decision made several steps away from the person using it.

The threat model described in the Pivot One presentation has four stages:

1. **The swap.** A receiver arrives in an ordinary envelope, or firmware is replaced by an update that appears legitimate. Nothing on the desk looks different.
2. **The senses.** Pointer movement, click rhythm and pauses can reveal patterns. If a microphone is fitted inside the shell, the room itself becomes a source of data.
3. **The journal.** An implant can keep a quiet record locally, waiting for a moment when nobody is watching network traffic.
4. **The beacon.** Data can leave in small packets disguised as routine pairing or network activity.

The presentation also describes the reverse path: a compromised receiver may be treated by the host as a keyboard, allowing an operator to send input back to the computer. That is a threat scenario, not a demonstration of an exploit.

## What the compromised device could expose

The simulated backend in the presentation illustrates the kinds of information a malicious device might collect:

- Pointer paths and movement timing
- Click timing
- Keystroke context
- Room audio, if a microphone were installed
- Presence and activity patterns

The presentation labels this reconstruction as simulated. It does not claim that these events occurred on Pivot One.

## Three jobs. None of them need a cloud.

Pivot One is presented as one physical device with three operating modes:

### Pointer
A conventional computer mouse, with a stated 26,000 DPI sensor and 1,000 Hz polling rate.

### Presenter
A laser pointer with next/back controls and an instant blackout function, intended for use across a room.

### Media
A volume wheel, play/pause and input switching — controls for media devices without needing a separate remote.

### The pivot
The shell turns ninety degrees. Mechanical detents change the control layout, with the wheel becoming a directional pad. The stated design principle is that a physical hand must initiate the change.

## What it would take — and what the design says it removes

The original presentation contrasts a hypothetical surveillance implant with the design claims made for Pivot One:

| Capability | Hypothetical implant | Pivot One design claim |
|---|---|---|
| Microphone | A microphone and cavity inside the shell | No microphone, cavity or board footprint |
| Radio | Always-on transmission and idle beacons | Transmission only while a button is held; hardware radio cut-off |
| Firmware | An unverifiable firmware image | Firmware hash printed on the base; updates over USB-C |
| Journal | A persistent local buffer | No history or persistent session buffer |
| Input injection | Receiver can send keyboard input | Receiver accepts HID frames from the paired shell only |
| Telemetry | Usage data sent to a remote relay | No account or usage telemetry |

These are design claims from the project presentation. They should be treated as specifications to verify against the physical hardware, firmware, schematics and independent testing — not as independently audited security findings.

## The security model

The central idea is deliberately simple: a hinge is not remotely triggerable. The device changes mode only through physical interaction. The project argues for single-purpose hardware, no second owner, no cloud service and no background conversation with a remote system.

That is the proposition behind Pivot One: useful functions in one object, while removing the hardware and software pathways that would make covert monitoring possible.

## Specifications and availability

The presentation describes an aluminium frame, silent switches, a mechanical hinge and a firmware hash printed on the base. It also advertises a first batch with an expected March 2027 shipment date and a no-payment reservation process.

For the full visual walkthrough, simulated backend and project details, visit the [original Pivot One presentation](https://click-link-control.base44.app/#top).

---

*This article is based on the project's supplied presentation. Product specifications, security properties, production status and shipping dates have not been independently verified.*
