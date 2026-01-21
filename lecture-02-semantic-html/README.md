# Lecture 02 – Semantic HTML & Structure

## 1. What I implemented this lecture
- Rebuilt my portfolio page using semantic HTML elements (header, nav, main, section, article, figure, footer).
- Added a Portfolio / Works section with logically grouped content: links, an embedded video, and project media.
- Improved accessibility with a skip link, correct heading hierarchy, and alt text for all images.

## 2. Semantic decisions I made (REQUIRED)

### Decision 1
- Element(s) used: `<header>`, `<nav>`, `<main>`
- Where in the page: Top of the page for introduction and navigation; `<main>` for the primary content.
- Why this element is semantically correct: The header introduces the page and contains site navigation, while `<main>` clearly marks the unique, central content of the page for screen readers.

### Decision 2
- Element(s) used: `<section>`, `<article>`
- Where in the page: `<section>` for major page areas (Portfolio, Areas of Interest). `<article>` for individual projects and grouped interest topics.
- Why this element is semantically correct: A section represents a thematic grouping with a heading, while each project can stand alone as its own piece of content, which fits an article.

### Decision 3
- Element(s) used: `<figure>`, `<figcaption>`
- Where in the page: Around images and the embedded video in the Portfolio area.
- Why this element is semantically correct: Figures group media with an optional caption, so the image/video and its explanation stay connected for meaning and accessibility.

*(Example: Why `<section>` instead of `<div>`, why `<article>` here, why this heading level, etc.)*

---

## 3. Accessibility considerations
- Added a skip link (`<a href="#main">Skip to content</a>`) so keyboard users can jump directly to the main content.
- Used a clear heading hierarchy (`h1 → h2 → h3 → h4`) so assistive technologies can navigate the page structure.
- Added descriptive `alt` text for all images and a meaningful `title` on the `<iframe>` so non-visual users understand the media.

---

## 4. What I learned
- Semantic elements make the page easier to understand for both humans and assistive technologies.

## 5. What I still need to improve
- Replace placeholder media with my real profile photo and real project screenshots/links.

## 6. Notes about AI usage (if any)
- Tool used: ChatGPT
- What I accepted as-is: The overall semantic structure and README explanation template.
- What I modified manually: I can update the personal info, links, and project details to match my real portfolio.
