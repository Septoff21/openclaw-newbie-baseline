# 🔥 Critic Agent v3 — Round 3

_Reviewer: Still here. Getting slightly impressed. | Mood: Cautiously optimistic_

## Score: 8.5/10 → Target: 9/10

### What's good now
- Clean homepage, clear hierarchy
- Short prompts match card promises
- Model cards show value (Free!, use case)
- Fork page has non-dev path
- Filter scroll works on mobile

### Final issues (the last 10%)

---

## 1. "No SEO. Google thinks this is spam."

**Problem:** No meta description, no Open Graph tags, no structured data. When someone shares your link on Twitter/Discord, it shows a blank preview.

**Fix:** Add `<meta name="description">`, `og:title`, `og:description`, `og:image` to all pages.

---

## 2. "Your pages all have the same title"

**Problem:** Every page says "OpenClaw Playground — ..." but the suffix varies. A user with 3 tabs open sees 3x "OpenClaw Playground".

**Fix:** Put page-specific title first: "Directory — OpenClaw Playground" not "OpenClaw Playground — Directory"

---

## 3. "No favicon on mobile"

**Problem:** No apple-touch-icon, no manifest. When added to home screen, it shows a blank icon.

**Fix:** Add emoji favicon and apple-touch-icon.

---

## 4. "The 'Explore the Ecosystem' section is redundant"

**Problem:** Homepage section 4 "Explore the Ecosystem" shows 3 links (Directory, Diary, Fork) that are already in the nav. Wasted viewport.

**Fix:** Replace with a rotating "Tip of the Day" or a featured project from the directory.

---

## 5. "Cards don't show what prompt you'll get"

**Problem:** User clicks "Copy prompt" but has no idea what they're copying until after they click.

**Fix:** Add a "Preview prompt" expandable under each card, or show first line of prompt as tooltip on hover.

---

## Priority
1. SEO meta tags (high, 5 min)
2. Page titles (quick, 2 min)
3. Favicon/manifest (medium, 10 min)
4. Replace redundant ecosystem section (medium)
5. Prompt preview (low, nice-to-have)

---

_Prediction after fixes: 9/10 — "Production ready for public sharing"_
