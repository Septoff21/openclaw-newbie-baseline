# 🔥 Critic Agent v1 — Brutal Review

_Reviewer: Senior Product Designer + Frontend Architect | Mood: Unimpressed_

---

## 1. Homepage: "Everything screams, nothing speaks"

**Problem:** The homepage has **12+ sections** stacked vertically. A new user lands and sees:
- Hero
- Fast Path
- Today's Model Changes
- 3 B/A/E cards
- Copy prompts
- Verification Loop
- Verification Checklist
- Model Context Reminder
- Simulated Human Critique
- Role/Agents/Tools baseline
- Community directory
- Live claw websites
- Frontend Kit
- UHX evolution
- AI SEO playbook
- Sanwan case
- Sanwan diary
- Diary templates
- Bottom CTA

**Verdict:** This is a **dumping ground**, not a landing page. A user's brain shuts off after the 5th section. You've optimized for "showing work" instead of "guiding action."

**Fix needed:**
- Homepage should have MAX 5 sections
- Move everything else to subpages
- One clear primary CTA per viewport

---

## 2. Navigation: "5 tabs on mobile? Are you serious?"

**Problem:** Mobile bottom nav has 5 tabs: Home / Dir / Models / Verify / Diary. Industry standard is 3-5, but 5 only works when each tab is a distinct, high-frequency action. "Verify" and "Diary" are not high-frequency for a first-time visitor.

**Verdict:** You're designing for your own workflow, not the user's mental model.

**Fix needed:**
- Mobile: 4 tabs max (Home / Directory / Models / More)
- "More" opens a sheet with Verify, Diary, Fork, etc.

---

## 3. Cards: "Pretty but purposeless"

**Problem:** The B/A/E cards on homepage say:
- "Quick start with copy-ready prompts and safe defaults"
- "Add verification, context warnings, and workflow automation"
- "Multi-agent, routing, memory strategy, and governance"

**These descriptions mean NOTHING to a beginner.** "Multi-agent, routing, memory strategy" — is this a textbook index or a call to action?

**Verdict:** You're writing for people who already know what these mean. Your target audience doesn't.

**Fix needed:**
- Beginner: "I want my AI assistant to just work" → Copy this prompt
- Advance: "I want to trust what my AI tells me" → Copy this prompt
- Extreme: "I want my AI to run itself" → Copy this prompt

---

## 4. "Verification" obsession: "You're solving YOUR problem, not the user's"

**Problem:** You have a verification loop section, a verification checklist section, a model context reminder section, AND a separate verification page. That's **4 different sections about the same thing** — "don't trust the AI blindly."

**Verdict:** You had a bad hallucination experience once and now you're building a cathedral to verification. The user just wants to get started.

**Fix needed:**
- One verification section on homepage (collapsed/expandable)
- One verification page (for deep dive)
- Remove the other two

---

## 5. Mobile: "Did you actually test this on a phone?"

**Problem:**
- Hero stats: 3 columns on mobile = tiny text, cramped
- Cards: full-width with too much padding = tall, scroll-heavy
- Model cards in "Today's Model Changes" take half the screen
- Directory filter buttons: 6 buttons wrapping to 3 lines on small screens

**Verdict:** You tested at 390px iPhone width. Did you test at 320px? 360px? Foldable? You're designing for your emulator, not real devices.

**Fix needed:**
- Hero stats: stack to single column on mobile
- Directory filters: horizontal scroll, not wrap
- Model cards: show only 3 on homepage with "See all" link

---

## 6. Performance: "Your site loads fonts before content"

**Problem:**
- Google Fonts `<link>` loads Noto Sans SC (400/600/700/900) — that's ~400KB of fonts BEFORE any content renders
- No `font-display: swap` in the Google Fonts URL (you have it but double-check)
- CSS is a single 13KB file (not terrible, but not optimized)

**Verdict:** On slow 3G, your user stares at blank text for 2-3 seconds while fonts download. For a "beginner-friendly" site, this is hostile.

**Fix needed:**
- Add `&display=swap` to font URL
- Consider system font stack as default, load custom font async
- Add `font-display: swap` to @font-face if any

---

## 7. Content: "Where's the beef?"

**Problem:**
- Directory has 14 entries, but 9 are "repo-only" with no live URL
- Model page shows "0 new today, 0 removed" — why show a counter that's always zero?
- Diary has 3 entries, all from today (no historical depth)
- "Simulated Human Critique" section is self-congratulatory fiction

**Verdict:** You've built infrastructure for content you don't have yet. An empty state is better than a fake state.

**Fix needed:**
- Directory: show only verified-live entries by default, repo-only behind a toggle
- Model page: hide the "new/removed" counter if zero
- Diary: don't pad with entries, show what's real
- Remove "Simulated Human Critique" — it's not credible

---

## 8. Brand: "What ARE you?"

**Problem:** The site calls itself:
- "OpenClaw Playground"
- "OpenClaw Visual Onboarding"
- "A beginner-first, copy-and-run OpenClaw project"
- "Not an install guide — a reference platform"

**Verdict:** I don't know if I should play, learn, reference, or copy. Pick ONE identity.

**Fix needed:**
- Primary: "OpenClaw Playground — Learn by Copying"
- Drop "Visual Onboarding" and "reference platform"
- Consistent naming everywhere

---

## Priority Order (what to fix first)

1. **Homepage bloat** (biggest UX sin)
2. **Mobile nav reduction** (affects all mobile users)
3. **Card copy rewrite** (affects comprehension)
4. **Remove redundant verification sections** (reduce noise)
5. **Mobile card sizing** (affects scroll fatigue)
6. **Performance** (font loading)
7. **Content quality** (remove fake/empty states)
8. **Brand consistency** (naming)

---

_Review complete. Overall score: 4/10 — "Ambitious architecture, poor information design. Ship less, polish more."_
