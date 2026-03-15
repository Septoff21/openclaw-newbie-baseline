# Claw Site Directory + Style Analysis (v1)

Date: 2026-03-15
Goal: collect claw-related websites, classify style direction, and define iteration path for a warmer beginner-friendly OpenClaw experience.

## A. Seed sites (direct references)

1. https://www.shopclawmart.com/
2. https://sanwan.ai/
3. https://septoff21.github.io/openclaw-newbie-baseline/

## B. Captured screenshots (local)

- `claw-analysis/screenshots/shopclawmart.png`
- `claw-analysis/screenshots/sanwan.png`
- `claw-analysis/screenshots/openclaw-playground.png`

## C. Style categories (from observed structure + Gemini analysis)

### 1) Clean commerce / modern brand
- Example: shopclawmart
- Visual traits: light background, straightforward hierarchy, familiar trust cues
- User feeling: practical, approachable, easy start

### 2) AI minimalist / product-led
- Example: sanwan.ai
- Visual traits: whitespace, refined typography, restrained gradients
- User feeling: premium, modern, clear, less noisy

### 3) Dark neon tech / builder vibe
- Example: current OpenClaw playground
- Visual traits: dark canvas, neon accents, technical tone
- User feeling: powerful but can feel cold/technical for non-dev beginners

## D. What to improve for “warmth” (next iteration checklist)

1. Move from pure dark-neon to mixed light + accent theme options.
2. Add human-centered hero copy (benefit first, not tool first).
3. Add simple “What you can do today” cards with concrete examples.
4. Keep rounded card/buttons + softer shadows.
5. Reduce jargon; use plain language and friendly action verbs.
6. Keep copy-first workflow (one-click prompt copy) but add visual guidance.
7. Add “verify before trust” section in Advance layer.
8. Add context warning ladder (70/85/95) in visible UI and docs.
9. Add a “Beginner path” progress indicator (Step 1/2/3).
10. Add one-click template customization hints (name/color/brand assets).

## E. Proposed directory model for “claw websites” (for frontend)

Use three filters so users can browse by style and purpose:

- **Purpose**: onboarding / docs / plugins / community / examples
- **Style**: warm-light / minimal-pro / dark-tech
- **Audience**: non-dev beginner / mixed / developer-heavy

Each site card should include:
- URL
- 1-line summary
- style tag
- audience tag
- “what to borrow” bullet (e.g., hero style, card layout, CTA wording)

## F. Gemini-assisted notes (analysis source)

Gemini output saved at:
- `claw-analysis/gemini-style-analysis.txt`

Key extracted idea:
- Keep Beginner section visually warm and low-friction,
- push technical depth to Advance/Extremely layers,
- maintain a trust loop: plan/progress/blocker/final + explicit verification.

## G. Next deliverable

- Build `claw-directory.json` + site card UI in the project frontend
- Add filter chips (Purpose/Style/Audience)
- Add screenshot thumbnails and “borrow this pattern” notes
