# 🔥 Critic Agent v2 — Round 2

_Reviewer: Same angry designer, back for more | Mood: Slightly less annoyed_

---

## Score: 7/10 → Target: 8.5/10

### What improved since v1
- ✅ Homepage is now scannable (5 sections, not 19)
- ✅ Mobile nav is cleaner (4 tabs)
- ✅ Card copy speaks to user intent
- ✅ Verification is collapsible

### Remaining issues (the sharp ones)

---

## 1. "Your hero title is a gradient meme"

**Problem:** Red-to-blue gradient on "Learn by Copying" looks like every other AI/SaaS site in 2025. It's not unique, it's not readable on all screens, and it doesn't communicate your brand.

**Fix:** Use solid color with a subtle underline or accent. Your brand is warmth + trust, not "cool gradient bro."

---

## 2. "Your cards lie about effort"

**Problem:** Cards say "I want my AI to just work" / "I want to trust" / "I want it to run itself" — but clicking the button gives a 6-line technical prompt. The promise (simple) doesn't match the delivery (complex).

**Fix:** Show a preview of what the prompt actually says. Or simplify the prompts to 2-3 lines.

---

## 3. "Your model cards are invisible"

**Problem:** "New Models Today" shows 3 cards with just model ID and CTX. No price, no modality, no "why should I care?" A user sees `openrouter/hunter-alpha | ctx=1,048,576` and thinks "...and?"

**Fix:** Add price (Free!), modality icon, and a 3-word use case tag.

---

## 4. "Your directory filters are still wrapping on mobile"

**Problem:** 6 filter buttons on a 390px screen = 3 lines of filters before any actual content.

**Fix:** Horizontal scroll with `overflow-x: auto` and `white-space: nowrap`. Or reduce to 3 most important filters + "More."

---

## 5. "No loading states, no error handling"

**Problem:** If `api/models-daily.json` fails to load, the "New Models Today" section just shows nothing. No error, no fallback, no "loading..." text.

**Fix:** Add a loading skeleton and error fallback.

---

## 6. "Your fork page is a lie"

**Problem:** Fork page says "5-minute setup" but step 2 is "Enable GitHub Pages → Settings → Pages → Source: gh-pages branch." That's not 5 minutes for a non-technical user. That's 5 minutes for a developer. Your target audience doesn't know what "gh-pages branch" means.

**Fix:** Add a "For non-developers" path: use Vercel/Netlify one-click deploy button.

---

## Priority
1. Hero gradient → solid (quick fix)
2. Model cards add price+use-case (medium)
3. Card prompts match promise (medium)
4. Directory filters horizontal scroll (quick)
5. Loading/error states (medium)
6. Fork page non-dev path (high)

---

_New score prediction after fixes: 8.5/10_
