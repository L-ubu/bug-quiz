# Bug World

An educational quiz game about insects. Learn fascinating facts about 47 bug species across four game modes — all running in the browser with zero dependencies.

## Game modes

**Mystery Bug** — A tiled image gradually reveals itself. Guess the bug early for more points (5 pts on first guess, down to 2 on last). 10 rounds per game.

**Bug Quiz** — 12 multiple-choice trivia questions about insect abilities, anatomy, and survival tactics. Each question shows a related bug photograph.

**Bug Match** — Classic memory card game. Flip cards to match bug images with their names. Tracked by move count — under 12 moves earns top marks.

**True or False** — Decide whether wild insect facts are real or made up. Each answer reveals a detailed explanation.

## Features

- 47 real bug species with fun facts and photographs
- 30 trivia questions and 33 true/false statements
- Dark theme with gradient accents and smooth animations
- Animated floating bugs on the landing page
- Custom caterpillar cursor that transforms into a butterfly
- Responsive grid layout for mobile and desktop
- No frameworks, no build step, no server — just open and play

## Run

Open `index.html` in any browser. That's it.

Or use a local server:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Project structure

```
bug-quiz/
  index.html    # Single-page app with landing + 4 game screens + results
  bugs.js       # Bug database (47 species), quiz questions, true/false statements
  game.js       # Game logic, state management, all 4 mode implementations
  style.css     # Dark theme, animations, responsive layout
  images/       # 50 bug photographs
```

## License

MIT
