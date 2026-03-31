// === Game State ===
let currentGame = null;
let shadowBugs = [];
let shadowIndex = 0;
let shadowScore = 0;
let shadowTiles = [];
let shadowRevealStep = 0;
let shadowMaxGuesses = 4;
let shadowGuessCount = 0;
let shadowAnswered = false;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let tfStatements = [];
let tfIndex = 0;
let tfScore = 0;
let matchCards = [];
let matchFlipped = [];
let matchPairs = 0;
let matchTotalPairs = 0;
let matchMoves = 0;
let matchLocked = false;

// === Utility ===
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  showScreen('landing');
  currentGame = null;
}

function getBugByName(name) {
  return BUGS.find(b => b.name === name);
}

// === Start Game ===
function startGame(mode) {
  currentGame = mode;
  switch (mode) {
    case 'shadow': startShadow(); break;
    case 'quiz': startQuiz(); break;
    case 'match': startMatch(); break;
    case 'truefalse': startTF(); break;
  }
}

function replayGame() {
  if (currentGame) startGame(currentGame);
}

// ========================
// MYSTERY BUG GAME (tile reveal)
// ========================
const TILE_ICONS = ['🐛','🐞','🦋','🐝','🪲','🦗','🐜','🪳','🦟','🐾','🌿','🍃','❓','🔍','👀','✨','🌸','🍀','🌻','🪴','💚','🟢','🟤','🟡','🔵'];

function startShadow() {
  shadowBugs = shuffle(BUGS).slice(0, 10);
  shadowIndex = 0;
  shadowScore = 0;
  document.getElementById('shadow-score').textContent = 0;
  document.getElementById('shadow-total').textContent = shadowBugs.length;
  showScreen('shadow-game');
  loadShadow();
}

function loadShadow() {
  const bug = shadowBugs[shadowIndex];
  document.getElementById('shadow-img').src = bugImage(bug);
  document.getElementById('shadow-fun-fact').classList.add('hidden');
  document.getElementById('shadow-answer').classList.add('hidden');
  document.getElementById('shadow-next').classList.add('hidden');

  shadowGuessCount = 0;
  shadowRevealStep = 0;
  shadowAnswered = false;

  const grid = document.getElementById('tile-grid');
  const icons = shuffle([...TILE_ICONS]);
  grid.innerHTML = '';
  shadowTiles = [];
  for (let i = 0; i < 25; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerHTML = `<div class="tile-icon">${icons[i % icons.length]}</div>`;
    grid.appendChild(tile);
    shadowTiles.push(tile);
  }
  shadowTiles = shuffle(shadowTiles);
  revealTiles(5);
  updateGuessCounter();
  loadShadowChoices();
}

function revealTiles(count) {
  const start = shadowRevealStep;
  const end = Math.min(start + count, shadowTiles.length);
  for (let i = start; i < end; i++) {
    shadowTiles[i].classList.add('revealed');
  }
  shadowRevealStep = end;
}

function revealAllTiles() {
  shadowTiles.forEach(t => t.classList.add('revealed'));
  shadowRevealStep = shadowTiles.length;
}

function updateGuessCounter() {
  const remaining = shadowMaxGuesses - shadowGuessCount;
  const el = document.getElementById('shadow-guess-count');
  if (shadowAnswered) {
    el.textContent = '';
  } else {
    el.textContent = `Guesses remaining: ${'🟢'.repeat(remaining)}${'⚫'.repeat(shadowGuessCount)}`;
  }
}

function loadShadowChoices() {
  const bug = shadowBugs[shadowIndex];
  const wrongBugs = shuffle(BUGS.filter(b => b.name !== bug.name)).slice(0, 3);
  const choices = shuffle([bug, ...wrongBugs]);

  const container = document.getElementById('shadow-choices');
  container.innerHTML = choices.map(c =>
    `<button class="choice-btn" onclick="guessShadow(this, '${c.name.replace(/'/g, "\\'")}')">${c.name}</button>`
  ).join('');
}

function guessShadow(btn, guess) {
  if (shadowAnswered) return;
  const bug = shadowBugs[shadowIndex];
  const correct = guess === bug.name;
  shadowGuessCount++;

  if (correct) {
    const points = shadowMaxGuesses - shadowGuessCount + 1;
    shadowScore += points;
    document.getElementById('shadow-score').textContent = shadowScore;
    shadowAnswered = true;
    btn.classList.add('correct');
    revealAllTiles();
    showShadowResult(bug, true, points);
  } else {
    btn.classList.add('wrong');
    btn.classList.add('disabled');
    revealTiles(5);
    if (shadowGuessCount >= shadowMaxGuesses) {
      shadowAnswered = true;
      revealAllTiles();
      const buttons = document.querySelectorAll('#shadow-choices .choice-btn');
      buttons.forEach(b => {
        b.classList.add('disabled');
        if (b.textContent === bug.name) b.classList.add('correct');
      });
      showShadowResult(bug, false, 0);
    }
  }
  updateGuessCounter();
}

function showShadowResult(bug, correct, points) {
  const answerEl = document.getElementById('shadow-answer');
  answerEl.innerHTML = correct
    ? `<span class="answer-label">Correct! +${points} point${points > 1 ? 's' : ''}</span>${bug.name}`
    : `<span class="answer-label">It was...</span>${bug.name}`;
  answerEl.classList.remove('hidden');
  const factEl = document.getElementById('shadow-fun-fact');
  factEl.textContent = bug.funFact;
  factEl.classList.remove('hidden');
  if (shadowIndex < shadowBugs.length - 1) {
    document.getElementById('shadow-next').classList.remove('hidden');
  } else {
    setTimeout(() => showResults('Mystery Bug', shadowScore, shadowBugs.length * shadowMaxGuesses), 1800);
  }
}

function nextShadow() {
  shadowIndex++;
  loadShadow();
}

// ========================
// QUIZ GAME
// ========================
function startQuiz() {
  quizQuestions = shuffle(QUIZ_QUESTIONS).slice(0, 12);
  quizIndex = 0;
  quizScore = 0;
  document.getElementById('quiz-score').textContent = 0;
  document.getElementById('quiz-total').textContent = quizQuestions.length;
  showScreen('quiz-game');
  loadQuiz();
}

function loadQuiz() {
  const q = quizQuestions[quizIndex];
  const bug = getBugByName(q.bugRef);
  document.getElementById('quiz-image').src = bug ? bugImage(bug) : '';
  document.getElementById('quiz-question').textContent = q.q;
  document.getElementById('quiz-next').classList.add('hidden');
  const container = document.getElementById('quiz-choices');
  container.innerHTML = q.options.map(opt =>
    `<button class="choice-btn" onclick="answerQuiz(this, '${opt.replace(/'/g, "\\'")}')">${opt}</button>`
  ).join('');
}

function answerQuiz(btn, answer) {
  const q = quizQuestions[quizIndex];
  const correct = answer === q.answer;
  const buttons = document.querySelectorAll('#quiz-choices .choice-btn');
  buttons.forEach(b => {
    b.classList.add('disabled');
    if (b.textContent === q.answer) b.classList.add('correct');
  });
  if (correct) {
    quizScore++;
    document.getElementById('quiz-score').textContent = quizScore;
  } else {
    btn.classList.add('wrong');
  }
  if (quizIndex < quizQuestions.length - 1) {
    document.getElementById('quiz-next').classList.remove('hidden');
  } else {
    setTimeout(() => showResults('Bug Quiz', quizScore, quizQuestions.length), 1500);
  }
}

function nextQuiz() {
  quizIndex++;
  loadQuiz();
}

// ========================
// MATCH GAME
// ========================
function startMatch() {
  const selected = shuffle(BUGS).slice(0, 6);
  matchTotalPairs = selected.length;
  matchPairs = 0;
  matchMoves = 0;
  matchFlipped = [];
  matchLocked = false;
  document.getElementById('match-moves').textContent = 0;
  document.getElementById('match-pairs').textContent = 0;
  document.getElementById('match-total').textContent = matchTotalPairs;
  document.getElementById('match-complete').classList.add('hidden');

  const cards = [];
  selected.forEach((bug, i) => {
    cards.push({ id: i, type: 'image', bug: bug, pairId: i });
    cards.push({ id: i, type: 'name', bug: bug, pairId: i });
  });
  matchCards = shuffle(cards);

  const grid = document.getElementById('match-grid');
  grid.innerHTML = matchCards.map((card, idx) => `
    <div class="match-card" data-idx="${idx}" onclick="flipCard(${idx})">
      <div class="match-card-inner">
        <div class="match-card-front">🐛</div>
        <div class="match-card-back">
          ${card.type === 'image'
            ? `<img src="${bugImage(card.bug)}" alt="${card.bug.name}"><div class="card-label">???</div>`
            : `<div style="padding:8px;text-align:center;font-weight:700;font-size:0.9rem;">${card.bug.name}</div>`
          }
        </div>
      </div>
    </div>
  `).join('');
  showScreen('match-game');
}

function flipCard(idx) {
  if (matchLocked) return;
  const cardEl = document.querySelectorAll('.match-card')[idx];
  if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;
  cardEl.classList.add('flipped');
  matchFlipped.push({ idx, card: matchCards[idx], el: cardEl });

  if (matchFlipped.length === 2) {
    matchMoves++;
    document.getElementById('match-moves').textContent = matchMoves;
    const [a, b] = matchFlipped;
    if (a.card.pairId === b.card.pairId && a.card.type !== b.card.type) {
      a.el.classList.add('matched');
      b.el.classList.add('matched');
      const imgCard = a.card.type === 'image' ? a.el : b.el;
      const label = imgCard.querySelector('.card-label');
      if (label) label.textContent = a.card.bug.name;
      matchPairs++;
      document.getElementById('match-pairs').textContent = matchPairs;
      matchFlipped = [];
      if (matchPairs === matchTotalPairs) {
        setTimeout(() => {
          document.getElementById('match-complete').classList.remove('hidden');
          document.getElementById('match-result').textContent =
            `You found all ${matchTotalPairs} pairs in ${matchMoves} moves! ${
              matchMoves <= matchTotalPairs * 2 ? '🌟 Amazing memory!' :
              matchMoves <= matchTotalPairs * 3 ? '👏 Great job!' : '🐛 Nice try!'
            }`;
        }, 600);
      }
    } else {
      matchLocked = true;
      setTimeout(() => {
        a.el.classList.remove('flipped');
        b.el.classList.remove('flipped');
        matchFlipped = [];
        matchLocked = false;
      }, 900);
    }
  }
}

// ========================
// TRUE OR FALSE
// ========================
function startTF() {
  tfStatements = shuffle(TF_STATEMENTS).slice(0, 12);
  tfIndex = 0;
  tfScore = 0;
  document.getElementById('tf-score').textContent = 0;
  document.getElementById('tf-total').textContent = tfStatements.length;
  showScreen('tf-game');
  loadTF();
}

function loadTF() {
  const s = tfStatements[tfIndex];
  const bug = getBugByName(s.bugRef);
  document.getElementById('tf-image').src = bug ? bugImage(bug) : '';
  document.getElementById('tf-statement').textContent = `"${s.statement}"`;
  document.getElementById('tf-explanation').classList.add('hidden');
  document.getElementById('tf-next').classList.add('hidden');
  const buttons = document.querySelectorAll('.tf-btn');
  buttons.forEach(b => {
    b.disabled = false;
    b.className = b.classList.contains('true-btn') ? 'tf-btn true-btn' : 'tf-btn false-btn';
  });
}

function answerTF(answer) {
  const s = tfStatements[tfIndex];
  const correct = answer === s.isTrue;
  const buttons = document.querySelectorAll('.tf-btn');
  buttons.forEach(b => b.disabled = true);
  if (correct) {
    tfScore++;
    document.getElementById('tf-score').textContent = tfScore;
  }
  const trueBtn = document.querySelector('.true-btn');
  const falseBtn = document.querySelector('.false-btn');
  if (s.isTrue) {
    trueBtn.classList.add('correct-answer');
    if (!correct) falseBtn.classList.add('wrong-answer');
  } else {
    falseBtn.classList.add('correct-answer');
    if (!correct) trueBtn.classList.add('wrong-answer');
  }
  const expEl = document.getElementById('tf-explanation');
  expEl.textContent = s.explanation;
  expEl.classList.remove('hidden');
  if (tfIndex < tfStatements.length - 1) {
    document.getElementById('tf-next').classList.remove('hidden');
  } else {
    setTimeout(() => showResults('True or False', tfScore, tfStatements.length), 1500);
  }
}

function nextTF() {
  tfIndex++;
  loadTF();
}

// ========================
// RESULTS
// ========================
function showResults(gameName, score, total) {
  const pct = Math.round((score / total) * 100);
  let title, message;
  if (pct === 100) {
    title = '🏆 Bug Master!';
    message = 'Perfect score! You really know your bugs!';
  } else if (pct >= 80) {
    title = '🌟 Bug Expert!';
    message = 'Amazing! You know more about bugs than most people!';
  } else if (pct >= 60) {
    title = '🐛 Bug Enthusiast!';
    message = "Great job! You're on your way to becoming a bug expert!";
  } else if (pct >= 40) {
    title = '🔍 Bug Explorer!';
    message = "Not bad! There's a whole world of bugs to discover!";
  } else {
    title = '🌱 Bug Beginner!';
    message = 'Every bug expert started somewhere! Try again and learn more!';
  }
  document.getElementById('results-title').textContent = `${gameName} Complete!`;
  document.getElementById('results-score').textContent = `${score}/${total}`;
  document.getElementById('results-message').textContent = `${title} ${message}`;
  const randomBug = BUGS[Math.floor(Math.random() * BUGS.length)];
  document.getElementById('results-bug-fact').innerHTML =
    `<strong>🐛 Did you know?</strong><br>${randomBug.funFact}`;
  showScreen('results');
}

// ========================
// CATERPILLAR CURSOR SYSTEM
// ========================
(function() {
  // Config
  const SEGMENTS = 12;
  const SEGMENT_SPACING = 10;
  const BITES_TO_TRANSFORM = 30;
  const BITE_INTERVAL = 400; // ms between bites while moving

  // State
  let mouseX = 0, mouseY = 0;
  let segments = [];
  let leafCursor = null;
  let leafBites = 0;
  let lastBiteTime = 0;
  let isButterfly = false;
  let butterflyTimeout = null;
  let leafPieces = [];

  // Hide default cursor
  const style = document.createElement('style');
  style.textContent = `* { cursor: none !important; }`;
  document.head.appendChild(style);

  // Create leaf cursor
  leafCursor = document.createElement('div');
  leafCursor.id = 'leaf-cursor';
  leafCursor.innerHTML = '🍃';
  document.body.appendChild(leafCursor);

  // Create caterpillar segments
  const caterpillar = document.createElement('div');
  caterpillar.id = 'caterpillar';
  document.body.appendChild(caterpillar);

  const colors = ['#4caf50','#66bb6a','#81c784','#4caf50','#66bb6a','#81c784','#4caf50','#66bb6a','#81c784','#4caf50','#66bb6a','#81c784'];

  for (let i = 0; i < SEGMENTS; i++) {
    const seg = document.createElement('div');
    seg.className = 'caterpillar-seg';
    const size = i === 0 ? 16 : Math.max(8, 14 - i * 0.5);
    seg.style.width = size + 'px';
    seg.style.height = size + 'px';
    seg.style.background = colors[i % colors.length];
    seg.style.borderRadius = '50%';
    seg.style.position = 'fixed';
    seg.style.pointerEvents = 'none';
    seg.style.zIndex = '99999';
    seg.style.transition = 'none';
    seg.style.boxShadow = i === 0 ? '0 0 4px rgba(0,0,0,0.3)' : 'none';
    if (i === 0) {
      // Head — add eyes
      seg.innerHTML = '<span style="position:absolute;top:1px;left:2px;font-size:6px;">👀</span>';
    }
    caterpillar.appendChild(seg);
    segments.push({ el: seg, x: 0, y: 0 });
  }

  // Track mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animation loop
  function animate() {
    if (isButterfly) {
      requestAnimationFrame(animate);
      return;
    }

    // Position leaf at cursor
    leafCursor.style.left = (mouseX - 10) + 'px';
    leafCursor.style.top = (mouseY - 10) + 'px';

    // Head follows mouse with offset (behind the leaf)
    const headTarget = { x: mouseX - 20, y: mouseY + 5 };
    const head = segments[0];
    const dx = headTarget.x - head.x;
    const dy = headTarget.y - head.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Smoothly follow
    head.x += dx * 0.12;
    head.y += dy * 0.12;
    head.el.style.left = head.x + 'px';
    head.el.style.top = head.y + 'px';

    // Body segments follow each other
    for (let i = 1; i < segments.length; i++) {
      const prev = segments[i - 1];
      const seg = segments[i];
      const sdx = prev.x - seg.x;
      const sdy = prev.y - seg.y;
      const sdist = Math.sqrt(sdx * sdx + sdy * sdy);
      if (sdist > SEGMENT_SPACING) {
        const ratio = SEGMENT_SPACING / sdist;
        seg.x = prev.x - sdx * ratio;
        seg.y = prev.y - sdy * ratio;
      }
      seg.el.style.left = seg.x + 'px';
      seg.el.style.top = seg.y + 'px';
    }

    // Bite the leaf when close and moving
    const now = Date.now();
    if (dist > 2 && now - lastBiteTime > BITE_INTERVAL) {
      leafBites++;
      lastBiteTime = now;
      spawnLeafBite(mouseX, mouseY);

      // Update leaf appearance as it gets eaten
      const eaten = leafBites / BITES_TO_TRANSFORM;
      if (eaten < 0.3) {
        leafCursor.innerHTML = '🍃';
        leafCursor.style.opacity = 1;
      } else if (eaten < 0.6) {
        leafCursor.innerHTML = '🍂';
        leafCursor.style.opacity = 0.85;
      } else if (eaten < 0.9) {
        leafCursor.innerHTML = '🍂';
        leafCursor.style.opacity = 0.6;
        leafCursor.style.fontSize = '16px';
      } else {
        leafCursor.innerHTML = '·';
        leafCursor.style.opacity = 0.3;
      }

      // Transform!
      if (leafBites >= BITES_TO_TRANSFORM) {
        transformToButterfly();
      }
    }

    requestAnimationFrame(animate);
  }

  function spawnLeafBite(x, y) {
    const piece = document.createElement('div');
    piece.className = 'leaf-piece';
    piece.innerHTML = '🌿';
    piece.style.left = (x + (Math.random() - 0.5) * 30) + 'px';
    piece.style.top = (y + (Math.random() - 0.5) * 30) + 'px';
    document.body.appendChild(piece);
    leafPieces.push(piece);
    // Remove after animation
    setTimeout(() => {
      piece.remove();
      leafPieces = leafPieces.filter(p => p !== piece);
    }, 1000);
  }

  function transformToButterfly() {
    isButterfly = true;

    // Hide caterpillar and leaf
    segments.forEach(s => s.el.style.display = 'none');
    leafCursor.style.display = 'none';

    // Create cocoon
    const cocoon = document.createElement('div');
    cocoon.id = 'cocoon';
    cocoon.innerHTML = '🫘';
    cocoon.style.position = 'fixed';
    cocoon.style.left = (segments[0].x) + 'px';
    cocoon.style.top = (segments[0].y) + 'px';
    cocoon.style.fontSize = '24px';
    cocoon.style.zIndex = '99999';
    cocoon.style.pointerEvents = 'none';
    cocoon.style.transition = 'transform 1s ease';
    document.body.appendChild(cocoon);

    // Shake cocoon
    setTimeout(() => {
      cocoon.style.transform = 'rotate(10deg) scale(1.2)';
      setTimeout(() => cocoon.style.transform = 'rotate(-10deg) scale(1.3)', 200);
      setTimeout(() => cocoon.style.transform = 'rotate(5deg) scale(1.4)', 400);
    }, 800);

    // Butterfly emerges
    setTimeout(() => {
      cocoon.remove();
      const butterfly = document.createElement('div');
      butterfly.id = 'butterfly-fly';
      const butterflies = ['🦋','🦋','🦋'];
      butterfly.innerHTML = butterflies[Math.floor(Math.random() * butterflies.length)];
      butterfly.style.position = 'fixed';
      butterfly.style.fontSize = '32px';
      butterfly.style.zIndex = '99999';
      butterfly.style.pointerEvents = 'none';
      let bx = segments[0].x;
      let by = segments[0].y;
      butterfly.style.left = bx + 'px';
      butterfly.style.top = by + 'px';
      document.body.appendChild(butterfly);

      // Fly away animation
      let frame = 0;
      function flyAway() {
        frame++;
        bx += 2 + Math.sin(frame * 0.1) * 3;
        by -= 2 + Math.cos(frame * 0.08) * 1.5;
        butterfly.style.left = bx + 'px';
        butterfly.style.top = by + 'px';
        butterfly.style.transform = `rotate(${Math.sin(frame * 0.15) * 20}deg) scale(${1 + Math.sin(frame * 0.2) * 0.15})`;
        butterfly.style.opacity = Math.max(0, 1 - frame / 120);
        if (frame < 140 && by > -50) {
          requestAnimationFrame(flyAway);
        } else {
          butterfly.remove();
          resetCaterpillar();
        }
      }
      flyAway();
    }, 2000);
  }

  function resetCaterpillar() {
    isButterfly = false;
    leafBites = 0;
    leafCursor.innerHTML = '🍃';
    leafCursor.style.opacity = 1;
    leafCursor.style.fontSize = '20px';
    leafCursor.style.display = '';
    segments.forEach((s, i) => {
      s.el.style.display = '';
      s.x = mouseX - 20;
      s.y = mouseY + 5 + i * SEGMENT_SPACING;
    });
  }

  // Start!
  requestAnimationFrame(animate);
})();

// Preload images
window.addEventListener('load', () => {
  BUGS.forEach(bug => {
    bug.images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });
});
