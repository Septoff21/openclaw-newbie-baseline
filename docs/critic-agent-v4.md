# 🔥 Critic Agent v4 — Final Push to 9.5+

_Reviewer: OK I'm actually starting to like this | Mood: Constructive_

## Score: 9/10 → Target: 9.5/10

### What's solid now
- Clean, focused homepage
- Good SEO foundations
- User-focused copy
- Prompt preview
- Tip of the day
- One-click deploy path

### Final polish (the last 0.5 points)

---

## 1. "No visual feedback when you copy a prompt"

**Problem:** Button says "Copied!" but it's tiny text in the same button. User might not notice on mobile.

**Fix:** Add a toast notification that slides in from top: "✅ Prompt copied! Paste it in your AI chat."

---

## 2. "The verification page is a wall of text"

**Problem:** Good content, but no visual breaks. Everything is same-weight paragraphs and lists.

**Fix:** Add colored icons/badges to the 4 locks. Make the red flags section visually distinct (red left border, warning background).

---

## 3. "Directory page: no way to see total count"

**Problem:** User doesn't know if they're looking at 10 projects or 100.

**Fix:** Add "Showing X projects (Y verified, Z repo-only)" header.

---

## 4. "Models page: 'Awaiting verification' repeated 4 times"

**Problem:** Task routing table shows 4 identical "Awaiting verification" rows. Looks unfinished.

**Fix:** Show at least one verified model example (hunter-alpha for daily ops). Add "Help us verify" link.

---

## 5. "No way back from subpages on mobile"

**Problem:** Mobile bottom nav has no explicit "back" — user has to know to tap Home. Some subpages have "Back to Home" hero CTA, some don't consistently.

**Fix:** Ensure all subpages have a consistent "Back to Home" CTA in hero.

---

## 6. "Footer is missing"

**Problem:** No footer. Site just ends. No copyright, no GitHub link, no "built with OpenClaw" branding.

**Fix:** Add a simple footer: GitHub link + "Built with 🦞 OpenClaw" + license.

---

## Priority
1. Copy toast (high impact, low effort)
2. Verification page visual breaks (medium)
3. Directory count header (quick)
4. Models routing table content (quick)
5. Consistent back-to-home CTA (quick)
6. Simple footer (quick)

_All 6 are quick wins. Total effort: ~20 minutes._
