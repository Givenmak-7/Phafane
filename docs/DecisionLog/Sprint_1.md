# Decision Log 🧠

## Day 01
While attempting to install **Tailwind CSS v4**, I encountered an error where **npm could not determine the executable to run**. After investigating, I realized that Tailwind v4 might not be recognizing the CLI in the same way as previous versions.  

**Decision / Solution:**  
I reverted to **Tailwind CSS v3**, which installed successfully and allowed the project setup to continue without blocking progress.

---

## Day 02
During project setup, I spent more time than expected trying to **style the documentation site**. I realized that focusing on styling too early was slowing down progress and introducing unnecessary complexity.  

**Decision / Solution:**  
I decided to **prioritize documenting the project first and defer styling** to a later stage. This approach:
- Maintains **Separation of Concerns**, ensuring that content, structure, and styling remain independent  
- Allows for more flexibility in how the project evolves  
- Ensures documentation reflects actual decisions and project structure, rather than being influenced by visual design

Additionally, this is my first time managing a project of this scope independently. The number of responsibilities can be overwhelming, which is why I use a **project management tool like Trello** to stay organized and track tasks. Conducting research on tools and technologies also helps reduce friction and improve decision-making.

## Day 03
The **Hero section and other Home page sections** (Highlights, Quick Info, CTA) were not expanding to the full width of the screen.  
Instead, they appeared constrained within a centered column, while the **Navbar and Footer displayed correctly at full width**.

Attempts to fix the issue within `Home.jsx` (using `w-full`, `absolute`, `relative`, etc.) did not resolve the problem.

🔍 Root Cause

The issue was caused by a **global width constraint applied in `App.jsx`**:

```
<main className="flex-grow max-w-6xl mx-auto px-4 py-1">
```
Because all pages are rendered inside <main>, classes in main were affected on every section on the Home page. This prevented any Home page section from spanning the full viewport width.

✅ Decision

Remove all width and padding constraints from the global <main> element and allow each page and section to control its own layout and width.
```
<main className="flex-grow w-full">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</main>
```
