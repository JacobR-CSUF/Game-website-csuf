Step 2: Development Workflow with GitHub

Branch Strategy:

```
Text Only
main branch (production-ready code)
├── feature/counter-game
├── feature/string-game
├── feature/random-number
├── feature/dictionary-game
├── feature/word-counter
├── feature/color-game
├── feature/shape-generator
└── feature/home-page
```

Collaboration Workflow:

Each team member creates feature branches for individual games
Work on games independently
Create pull requests for code review
Merge completed features to main branch

Step 3: Project Structure in GitHub



```
Text Only
your-repo/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
├── games/
│   ├── counter/
│   ├── string/
│   ├── random-number/
│   ├── dictionary/
│   ├── word-counter/
│   ├── color/
│   └── shape/
└── images/
    └── screenshots/
```
Free Hosting with GitHub Pages

Step 4: Enable GitHub Pages

Go to repository Settings
Scroll to Pages section
Select Deploy from a branch
Choose main branch and / (root)
Your site will be available at: https://yourusername.github.io/your-repo-name

Step 5: Automatic Deployment

Every push to main branch automatically updates your live site
No additional hosting costs
HTTPS enabled by default
