# DEMANDRA — PRD + FULL VISUAL DIRECTION

## STATUS
NEW ACTIVE PRODUCT. This document supersedes the older PRD/visual direction.

---

# PART I — PRODUCT REQUIREMENTS

## 1. PRODUCT DEFINITION

**Product:** Demandra — AI Demand Prediction for Retail  
**One-line promise:** **Know what every store will need next.**  
**Sector:** AI Demand Prediction for Retail  
**Primary B2B users:** retail chains, FMCG manufacturers, wholesalers, distributors and multi-store operators  
**Core object:** SKU/store demand signals  

### Problem
Teams often learn that a product is running out only after demand has already shifted.

### Solution
Demandra reads sales, promotions, seasonality, weather and local demand signals to predict what each store will need next.

### AI story
**DEMAND SIGNALS → PATTERN → FORECAST → REPLENISH**

The homepage should explain this without a wall of text.

---

## 2. BUSINESS MODEL

Pure B2B SaaS. No consumer marketplace, no consultancy positioning.

Commercial motion: self-serve trial where appropriate + sales-led demo for larger customers.

The Nigerian startup story is:
**Built in Nigeria → expanding across Africa → later expanding into Europe.**

Do not use US office details, Silicon Valley language or foreign headquarters.

---

## 3. CORE USER EXPERIENCE

A buyer arrives and should understand the following within the first screen:
1. what operational problem exists
2. what the AI notices/predicts
3. what the business does differently because of it

Avoid technical model language in the hero.

---

## 4. ROUTES

Create these routes, but do NOT expose all of them in the top navbar:

- `/home`
- `/pricing` (may be merged into a conversion route only if justified; otherwise build it)
- `/security`
- `/about`
- `/legal`
- `/solution`
- `/problem`
- `/technology`

All routes must be real pages with complete layout, title, metadata, navigation and footer.
The visual direction decides how they look; they do not have to share the same section structure as other products.

---

## 5. NAVIGATION

Use exactly this visible concept for the primary nav:

**Planning · Demand Intelligence · Retail Operations · Company**

Primary CTA: **See Demandra in action**

Secondary pages such as Security, Technology, Pricing, Legal and deep product explanations belong in grouped dropdowns and/or the footer.

No top bar above the navbar.  
No “Live” strip.  
No uptime badge beside the logo.  
No telemetry in the header.

The navbar should feel spacious, with short labels and generous horizontal padding.

---

## 6. HOMEPAGE CONTENT LOGIC

The homepage is intentionally not the same 14-section template as another product.
Use the following narrative beats, merging them when visually appropriate:

### Hero
Promise + one-sentence explanation + one primary CTA + one secondary CTA.

### Problem moment
Show the real-world failure state visually.

### AI moment
Show how the AI notices a signal that humans/systems miss.

### Action moment
Show what the user does differently because the AI surfaced that signal.

### Outcome
Show measurable business outcomes through typography, one chart, one comparison,
or an interactive graphic. Do not create a wall of KPI cards.

### Proof / scale
Use development placeholder figures until verified.

### Trust / technology
Explain cloud, data handling and security without turning the marketing page into an Azure brochure.

### Company / market
Nigeria first, Africa expansion next, Europe later.

### Conversion
A concise CTA with the product-specific action.

---

## 7. INTERACTION REQUIREMENT

The homepage must include one memorable interaction.  
It must teach the AI story.  
It must not be a dashboard.

**Signature interaction:** An illustrated supermarket aisle changes as the user scrolls. Product stacks rise/fall according to simulated demand; the AI marks only the shelves where the predicted change matters.

Keep it lightweight, responsive and accessible. On mobile, it becomes a simpler scroll interaction rather than a hover-only desktop experience.

---

## 8. TRACTION / SCALE

The master brief asks for live-looking scale. For a portfolio build, use these as **development placeholders only** and replace with verified numbers before public claims.

Suggested proof language:
- “{verified} stores / facilities / projects monitored”
- “{verified} SKU/store demand signals processed this month”
- “{verified} decisions supported”
- “{verified}% faster response / planning”

Never invent customer names, certification logos or audited outcome claims.
Never show zero traction on the visible prototype.

---

## 9. PRICING MODEL

Price by store count + forecast volume; no slider. Show three compact plans with store ranges.

Use dollar pricing because the portfolio brief is aimed at enterprise buyers, but make the eventual billing geography-aware if necessary.

Never reuse Propvera’s pricing slider/component.

---

## 10. TECHNOLOGY / MICROSOFT REVIEW

The Technology page must make the heavy workload credible.
Map relevant services to the actual workload:

- Azure Static Web Apps / CDN for the web experience
- Azure Blob Storage for isolated tenant data
- Azure OpenAI for language/reasoning tasks where needed
- Azure Machine Learning for model training/scoring where justified
- AKS for workload spikes where justified
- Microsoft Entra ID for enterprise identity/RBAC
- Azure Key Vault for secrets/certificates
- Private Link and TLS for network security
- Defender for Cloud + Azure Monitor + Application Insights for security/observability

Do not put these services into the hero.

---

## 11. SECURITY PAGE

Explain, in plain language:
- tenant isolation
- encryption in transit and at rest
- RBAC
- identity controls
- auditability
- model/data boundaries
- retention controls
- monitored infrastructure

Use one technical illustration or diagram, not a grid of security cards.

---

## 12. TEAM

Show 2–3 Nigerian founders/team members, approximately 28–35, in realistic modern professional contexts.
Use placeholder names until real team details are supplied.
Do not fabricate backgrounds, employers or awards.

---

## 13. LEGAL

Privacy and Terms should be real pages with actual placeholder legal copy that is clearly marked for counsel review.
Do not invent regulatory approvals.

---

# PART II — VISUAL DIRECTION

## 14. DESIGN THESIS

**editorial supermarket / market-floor storytelling; shelves, cartons, shopping baskets and Nigerian retail environments become the visual language**

The experience must feel premium, calm and highly intentional.

Reference atmosphere only:
**RELEX Solutions — https://www.relexsolutions.com/ — use only for category clarity around demand planning and replenishment, not for layout or branding.**

---

## 15. COLOR SYSTEM

Ivory #F6F4ED; ink #141715; leaf #48765A; soft lime #DDE6B8; clay #B98C67; line #D8D5CB

Use one dominant background, one dark text color, one signature accent and one secondary support color.
Do not use a rainbow palette.
Do not use a generic neon-AI gradient.

---

## 16. TYPOGRAPHY

Primary: **Inter**.  
Use large editorial Inter for hero and section headlines.  
Body: 16–20px with 1.4–1.6 line height.  
Micro labels: 11–13px, restrained letter spacing.

Suggested sizing:
- desktop H1: clamp(3.5rem, 7vw, 7.5rem)
- desktop H2: clamp(2.25rem, 4vw, 4.75rem)
- mobile H1: 42–56px depending on length
- body mobile: 16–18px

Use width constraints so no paragraph becomes a wall of text.

---

## 17. NAVBAR ART DIRECTION

The navbar is a brand component, not a utility template.

Structure:
- logo left
- **Planning · Demand Intelligence · Retail Operations · Company** center/right
- **See Demandra in action** as a compact action
- mobile drawer with the same logical groupings

Do not add:
- announcement bar
- top status bar
- telemetry
- live processing number
- generic “Get Started” pill duplicated from another product

Allow generous empty space around labels.

---

## 18. HERO COMPOSITION

**Hero concept:** editorial supermarket / market-floor storytelling; shelves, cartons, shopping baskets and Nigerian retail environments become the visual language

Use the hero to tell a complete mini-story:
1. show the real-world environment
2. introduce the hidden problem
3. introduce the AI insight
4. state the outcome

Do not use a giant fake dashboard or browser frame.

Hero media should have an accessible poster/fallback.

Hero uses a short Flow-generated video loop with a static poster fallback.

---

## 19. FLOW VIDEO PROMPT

Cinematic tracking shot through a modern Nigerian supermarket during opening hours; Nigerian retail workers and shoppers aged approximately 28–35; shelves initially full; camera subtly follows one category as stock moves faster; warm natural daylight; realistic Lagos/Abuja commercial environment; premium brand film; no holograms; no dashboards; no baked text; 16:9; photorealistic; seamless-feeling 8 second loop.

Implementation:
- use `<video>` with muted autoplay loop playsInline where appropriate
- poster image must make sense without video
- do not bake UI/text into the footage
- overlay website typography in HTML/CSS
- provide reduced-motion fallback to poster/image

---

## 20. IMAGE GENERATION PROMPTS

### Hero/cover still
Create a premium editorial photograph in a believable modern Nigerian commercial environment related to AI Demand Prediction for Retail. Use Nigerian people approximately 28–35 where people appear, natural skin texture, realistic wardrobe, documentary composition, modern Nigerian architecture or work setting, no white people, no generic Western stock-photo look, no futuristic holograms, no fake UI, no text baked into the image, photorealistic, art-directed brand photography, 3:2.

### Detail / secondary image
Close-up detail from the same world: materials, hands, equipment, documents or environmental cues relevant to SKU/store demand signals. Nigerian context should remain believable. Premium editorial photography, shallow depth of field, natural light, photorealistic, no text, no holograms, no generic stock aesthetic.

### Team image
Nigerian startup team members aged approximately 28–35 in a modern Lagos/Abuja office or work environment, candid not posed, premium editorial corporate photography, natural interaction, modern clothing, realistic Nigerian features, no white people, no fake logos, no text, no AI-looking faces.

---

## 21. HOMEPAGE LAYOUT — DETAILED

### Section 1 — Hero
Use a strong visual field. H1 should be **Know what every store will need next.**.
One short sentence underneath.
One primary CTA and one secondary link.
No third CTA.

### Section 2 — Problem
Use a full-bleed or large split visual that represents the operational pain.
Headline should be 5–9 words.
Supporting text max 2–3 sentences.

### Section 3 — The AI sees it
Create the signature interaction: **An illustrated supermarket aisle changes as the user scrolls. Product stacks rise/fall according to simulated demand; the AI marks only the shelves where the predicted change matters.**.
Use progressive reveal. Do not add four explanatory cards.

### Section 4 — What changes
Use one before/after composition or one narrative graphic.
Example structure:
**BEFORE** → **AI** → **AFTER**

### Section 5 — Proof
Use a typographic or data-driven composition. Maximum three major proof statements.

### Section 6 — How it works
Use a visual sequence matching **DEMAND SIGNALS → PATTERN → FORECAST → REPLENISH**.
This may be four illustrated moments, one continuous diagram, or one scroll-driven story.
Do not use four cards.

### Section 7 — Trust / Technology
One architectural illustration, concise copy, infrastructure details beneath it.

### Section 8 — Market / Company
Nigeria → Africa → Europe shown with elegant geography/typography if useful.

### Section 9 — Pricing / conversion
Use the product-specific pricing model. Do not reuse another site's pricing component.

### Section 10 — Final CTA
One statement, one action, plenty of breathing room.

---

## 22. INNER PAGE DIRECTIONS

### `/pricing`
Commercially clear. Product-specific pricing unit. One comparison mechanism max.
No slider copied from Propvera.

### `/security`
Trust-first, diagram-led. Use architecture illustration and concise sections.

### `/about`
Editorial company story. Nigerian origin, team, mission, Nigeria → Africa → Europe growth.

### `/legal`
Quiet, readable legal typography. No marketing decoration that harms reading.

### `/solution`
Demonstrate the AI transformation with a visual sequence. It should feel like an interactive case study.

### `/problem`
Tell the operational problem through imagery, one or two data points and a short narrative. Do not write a research paper.

### `/technology`
Technical architecture diagram + 4–6 concise technical principles. Azure appears naturally here.

---

## 23. UI LANGUAGE

UI is supporting evidence only.

Allowed:
- small contextual interface fragments
- one compact table
- one timeline
- one chart
- one annotated map/diagram
- document snippets

Forbidden:
- giant dashboard hero
- dashboard wall
- app window inside browser frame
- KPI card grid
- 6-card feature section

Use flat, purposeful shapes. Keep radii restrained and product-specific.

---

## 24. MOTION SYSTEM

Use motion to reveal the story.
- 180–250ms micro transitions
- 500–900ms visual reveals
- scroll-linked sequences only when they clarify the product
- no continuous decorative movement everywhere
- honor prefers-reduced-motion

---

## 25. FOOTER ART DIRECTION


## FOOTER CONTENT — COMPLETE ON EVERY ROUTE

Legal name: **Demandra Technologies Ltd** — replace with verified CAC-registered name.
RC: **RC XXXXXXX** — placeholder only; replace with verified number.
HQ: **Lagos, Nigeria** — replace with verified full Nigerian address.
Phone: **+234 XXX XXX XXXX** — replace with verified number.
Email: **hello@demandra.ai**
Social: LinkedIn · Facebook · email icon/address.

Footer groups should include Product, Company, Trust/Security, Legal, Privacy and Terms.
The exact visual footer composition is product-specific; the information is not.


Visual treatment for this product should NOT copy another product's footer.
Possible approach: large statement + four grouped columns + legal strip.
Adjust the exact composition to fit the product's color world.

Footer tagline:
**Demand intelligence for the retail floor.**

---

## 26. RESPONSIVE BEHAVIOR

### 1440px
Hero media may occupy 55–75% of the viewport.
Use a 12-column grid and strong negative space.

### 1024px
Reduce overlap. Preserve hero subject. Keep nav short.

### 768px
Recompose rather than simply stack. Turn large visual interactions into one-column scroll narratives.

### 375px
- no horizontal overflow
- H1 42–56px based on fit
- media crops around the key subject
- CTAs stack only when needed
- navigation becomes a clean drawer
- complex diagrams simplify, never break

---

## 27. ACCESSIBILITY

Semantic headings.
Alt text for meaningful imagery.
Decorative images marked accordingly.
Keyboard-accessible nav and interactions.
Visible focus.
Reduced-motion support.
Do not rely on color alone for meaning.

---

## 28. FINAL ANTI-SLOP TEST

Reject the build if it looks like:
- a generic AI landing page
- a Tailwind template
- a Webflow clone
- a dashboard product tour
- a collection of rounded cards
- a futuristic AI concept page

Reject it if the first viewport contains:
- a badge above the navbar
- a top announcement/status strip
- a telemetry line directly under the hero CTA
- a giant app screenshot

Ask one final question:
**Can a busy business owner understand what this AI does from the first screen without reading a full paragraph?**
If not, redesign the hero.

---

# 29. BUILD ORDER FOR ANTIGRAVITY

1. Read `00_MASTER_PORTFOLIO_RULES.md`.
2. Read this file.
3. Build the navbar and hero only.
4. Test desktop + mobile.
5. Build the signature interaction.
6. Complete the homepage narrative.
7. Build inner pages.
8. Verify footer consistency across every route.
9. Run responsive QA.
10. Remove anything that looks like a reusable SaaS template.
