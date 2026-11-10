// Deutsche Literaturwissenschaft — Editorial & Archival Exam Engine
// Preserves full 66-question state machine, dual-level shuffle, timer, TR toggle & review filter

(function () {
  // State
  let activeFilter = 'all';
  let activeReviewFilter = 'all';
  let activeQuestions = [];
  let currentIndex = 0;
  // userAnswers stores: { [questionId]: { status: 'answered' | 'skipped', selectedIndex: number | null } }
  let userAnswers = {};
  let showTurkish = true;
  let isShuffled = false;
  let elapsedSeconds = 0;
  let timerInterval = null;
  let isExamFinished = false;

  // DOM Elements
  const mainHeader = document.getElementById('main-header');
  const timerDisplay = document.getElementById('timer-display');
  const shuffleBtn = document.getElementById('shuffle-btn');
  const inlineShuffleBtn = document.getElementById('inline-shuffle-btn');
  const restartShuffleBtn = document.getElementById('restart-shuffle-btn');
  const shuffleModeBadge = document.getElementById('shuffle-mode-badge');
  const toggleTrBtn = document.getElementById('toggle-tr-btn');
  const toggleTrDot = document.getElementById('toggle-tr-dot');
  const toggleTrLabel = document.getElementById('toggle-tr-label');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleLabel = document.getElementById('theme-toggle-label');
  const finishExamBtn = document.getElementById('finish-exam-btn');

  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');

  const filterButtons = document.querySelectorAll('[data-filter]');
  const reviewFilterButtons = document.querySelectorAll('[data-review-filter]');
  const liveCorrect = document.getElementById('live-correct');
  const liveWrong = document.getElementById('live-wrong');
  const liveSkipped = document.getElementById('live-skipped');

  const progressText = document.getElementById('progress-text');
  const progressPercent = document.getElementById('progress-percent');
  const progressBar = document.getElementById('progress-bar');

  const questionTypeBadge = document.getElementById('question-type-badge');
  const questionStatusBadge = document.getElementById('question-status-badge');
  const questionDe = document.getElementById('question-de');
  const questionTr = document.getElementById('question-tr');
  const optionsContainer = document.getElementById('options-container');

  const explanationBox = document.getElementById('explanation-box');
  const explanationDe = document.getElementById('explanation-de');
  const explanationTr = document.getElementById('explanation-tr');

  const prevBtn = document.getElementById('prev-btn');
  const skipBtn = document.getElementById('skip-btn');
  const nextBtn = document.getElementById('next-btn');
  const nextBtnLabel = document.getElementById('next-btn-label');
  const questionGrid = document.getElementById('question-grid');

  // Results DOM
  const resTime = document.getElementById('res-time');
  const resCorrect = document.getElementById('res-correct');
  const resWrong = document.getElementById('res-wrong');
  const resSkipped = document.getElementById('res-skipped');
  const resPercent = document.getElementById('res-percent');
  const restartBtn = document.getElementById('restart-btn');
  const reviewList = document.getElementById('review-list');

  // Theme Initialization (Editorial Ink Dark vs Archival Paper Light)
  function initTheme() {
    try {
      const savedTheme = localStorage.getItem('edebiyat_theme');
      if (savedTheme === 'paper') {
        document.documentElement.classList.add('theme-paper');
        if (themeToggleLabel) themeToggleLabel.textContent = 'Mürekkep';
      } else {
        document.documentElement.classList.remove('theme-paper');
        if (themeToggleLabel) themeToggleLabel.textContent = 'Kağıt';
      }
    } catch (_) {}
  }

  function toggleTheme() {
    const isPaper = document.documentElement.classList.toggle('theme-paper');
    if (themeToggleLabel) {
      themeToggleLabel.textContent = isPaper ? 'Mürekkep' : 'Kağıt';
    }
    try {
      localStorage.setItem('edebiyat_theme', isPaper ? 'paper' : 'ink');
    } catch (_) {}
  }

  // Scroll-to-Hide Header Logic
  let lastScrollY = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 28) {
        mainHeader.classList.add('header-hidden');
      } else {
        mainHeader.classList.remove('header-hidden');
      }
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    },
    { passive: true }
  );

  // Fisher-Yates Array Shuffle
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Deep Clone and optionally Shuffle Questions & Options
  function buildQuestionList(filterType, shouldShuffle) {
    const baseList =
      filterType === 'all'
        ? questions
        : questions.filter((q) => q.type === filterType);

    let cloned = baseList.map((q) => ({
      ...q,
      options: q.options.map((opt) => ({ ...opt }))
    }));

    if (shouldShuffle) {
      cloned = shuffleArray(cloned);

      cloned = cloned.map((q) => {
        const taggedOptions = q.options.map((opt, idx) => ({
          opt,
          isCorrect: idx === q.correctAnswer
        }));
        const shuffledTagged = shuffleArray(taggedOptions);
        const newCorrectIndex = shuffledTagged.findIndex((item) => item.isCorrect);
        return {
          ...q,
          options: shuffledTagged.map((item) => item.opt),
          correctAnswer: newCorrectIndex
        };
      });
    }

    return cloned;
  }

  // Format question text with dynamic index when shuffled
  function formatQuestionTitle(rawText, displayNumber) {
    if (!isShuffled) return rawText;
    const stripped = rawText.replace(/^(\d+[-.]\s*|R\/F\s*\d+:\s*|D\/Y\s*\d+:\s*)/i, '');
    return `${displayNumber}. ${stripped}`;
  }

  // Format seconds as MM:SS
  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function startTimer() {
    stopTimer();
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      timerDisplay.textContent = formatTime(elapsedSeconds);
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // Initialize / Reset Quiz
  function initQuiz(filterType = activeFilter, shuffleMode = isShuffled) {
    activeFilter = filterType;
    isShuffled = shuffleMode;
    activeQuestions = buildQuestionList(activeFilter, isShuffled);

    currentIndex = 0;
    userAnswers = {};
    elapsedSeconds = 0;
    isExamFinished = false;
    timerDisplay.textContent = '00:00';

    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    finishExamBtn.classList.remove('hidden');

    if (isShuffled) {
      shuffleModeBadge.classList.remove('hidden');
      shuffleModeBadge.classList.add('inline-flex');
    } else {
      shuffleModeBadge.classList.add('hidden');
      shuffleModeBadge.classList.remove('inline-flex');
    }

    updateFilterButtonsUI();
    startTimer();
    renderCurrentQuestion();
    updateLiveStats();
    renderQuestionGrid();
  }

  function updateFilterButtonsUI() {
    filterButtons.forEach((btn) => {
      const f = btn.getAttribute('data-filter');
      if (f === activeFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function updateReviewFilterButtonsUI() {
    reviewFilterButtons.forEach((btn) => {
      const rf = btn.getAttribute('data-review-filter');
      if (rf === activeReviewFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Compute Stats
  function getStats() {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    activeQuestions.forEach((q) => {
      const record = userAnswers[q.id];
      if (!record || record.status === 'skipped') {
        if (record && record.status === 'skipped') {
          skipped++;
        }
      } else if (record.status === 'answered') {
        if (record.selectedIndex === q.correctAnswer) {
          correct++;
        } else {
          wrong++;
        }
      }
    });

    const totalUnansweredOrSkipped = activeQuestions.length - (correct + wrong);
    return {
      correct,
      wrong,
      explicitSkipped: skipped,
      finalSkipped: totalUnansweredOrSkipped
    };
  }

  function updateLiveStats() {
    const stats = getStats();
    liveCorrect.textContent = stats.correct;
    liveWrong.textContent = stats.wrong;
    liveSkipped.textContent = stats.explicitSkipped;
  }

  // Render Current Question
  function renderCurrentQuestion() {
    const q = activeQuestions[currentIndex];
    const total = activeQuestions.length;
    const record = userAnswers[q.id];
    const isAnswered = record && record.status === 'answered';
    const isSkipped = record && record.status === 'skipped';

    // Tabular Progress Bar
    const pct = Math.round(((currentIndex + 1) / total) * 100);
    const numStr = String(currentIndex + 1).padStart(2, '0');
    const totalStr = String(total).padStart(2, '0');
    progressText.textContent = `${numStr} / ${totalStr}`;
    progressPercent.textContent = `(${pct}%)`;
    progressBar.style.width = `${pct}%`;

    // Editorial Section Classification
    if (q.type === 'true_false') {
      questionTypeBadge.textContent = 'II. Richtig / Falsch · Doğru / Yanlış';
    } else {
      questionTypeBadge.textContent = 'I. Multiple Choice · Çoktan Seçmeli';
    }

    // Status Stamp on Question Sheet
    if (isAnswered) {
      const isRight = record.selectedIndex === q.correctAnswer;
      questionStatusBadge.classList.remove('hidden');
      if (isRight) {
        questionStatusBadge.textContent = 'Richtig · Doğru';
        questionStatusBadge.style.backgroundColor = 'var(--status-correct-bg)';
        questionStatusBadge.style.borderColor = 'var(--status-correct-border)';
        questionStatusBadge.style.color = 'var(--status-correct-text)';
      } else {
        questionStatusBadge.textContent = 'Falsch · Yanlış';
        questionStatusBadge.style.backgroundColor = 'var(--status-wrong-bg)';
        questionStatusBadge.style.borderColor = 'var(--status-wrong-border)';
        questionStatusBadge.style.color = 'var(--status-wrong-text)';
      }
    } else if (isSkipped) {
      questionStatusBadge.classList.remove('hidden');
      questionStatusBadge.textContent = 'Übersprungen · Boş';
      questionStatusBadge.style.backgroundColor = 'var(--status-skip-bg)';
      questionStatusBadge.style.borderColor = 'var(--status-skip-border)';
      questionStatusBadge.style.color = 'var(--status-skip-text)';
    } else {
      questionStatusBadge.classList.add('hidden');
    }

    // Question Stem
    questionDe.textContent = formatQuestionTitle(q.question_de, currentIndex + 1);
    questionTr.textContent = formatQuestionTitle(q.question_tr, currentIndex + 1);

    // Options Layout
    if (q.type === 'true_false') {
      optionsContainer.className = 'grid grid-cols-2 gap-2.5 pt-0.5';
    } else {
      optionsContainer.className = 'grid grid-cols-1 gap-2 pt-0.5';
    }

    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.disabled = isAnswered;

      let stateClass = 'option-btn';
      if (isAnswered) {
        if (idx === q.correctAnswer) {
          stateClass += ' option-correct';
        } else if (idx === record.selectedIndex && idx !== q.correctAnswer) {
          stateClass += ' option-wrong';
        } else {
          stateClass += ' option-muted';
        }
      }

      btn.className = stateClass;

      const keyLabel =
        q.type === 'true_false'
          ? opt.de.toLowerCase().includes('richtig')
            ? 'R'
            : 'F'
          : letters[idx];

      btn.innerHTML = `
        <span class="option-key">${keyLabel}</span>
        <div class="space-y-0.5 flex-1 min-w-0">
          <div class="text-sm sm:text-[15px] font-medium text-[var(--text-primary)] leading-snug">${opt.de}</div>
          <div class="tr-text text-[11.5px] sm:text-xs text-[var(--text-tr)] leading-snug">${opt.tr}</div>
        </div>
      `;

      btn.addEventListener('click', () => handleSelectOption(idx));
      optionsContainer.appendChild(btn);
    });

    // Explanation Footnote Box
    if (isAnswered) {
      explanationDe.textContent = q.explanation_de;
      explanationTr.textContent = q.explanation_tr;
      explanationBox.classList.remove('hidden');
    } else {
      explanationBox.classList.add('hidden');
    }

    // Navigation Controls State
    prevBtn.disabled = currentIndex === 0;
    skipBtn.disabled = isAnswered;

    if (currentIndex === total - 1) {
      nextBtnLabel.textContent = 'Auswertung (Bitir)';
    } else {
      nextBtnLabel.textContent = 'Weiter (İleri)';
    }

    renderQuestionGrid();
  }

  // Handle Option Selection
  function handleSelectOption(selectedIndex) {
    const q = activeQuestions[currentIndex];
    if (!q || selectedIndex < 0 || selectedIndex >= q.options.length) return;

    const existing = userAnswers[q.id];
    if (existing && existing.status === 'answered') {
      return;
    }

    userAnswers[q.id] = {
      status: 'answered',
      selectedIndex
    };

    updateLiveStats();
    renderCurrentQuestion();
  }

  // Handle Skip ("Boş Bırak")
  function handleSkipQuestion() {
    const q = activeQuestions[currentIndex];
    const existing = userAnswers[q.id];
    if (!existing || existing.status !== 'answered') {
      userAnswers[q.id] = {
        status: 'skipped',
        selectedIndex: null
      };
    }

    updateLiveStats();

    if (currentIndex < activeQuestions.length - 1) {
      currentIndex++;
      renderCurrentQuestion();
    } else {
      finishExam();
    }
  }

  // Render 66-Question Matrix Grid
  function renderQuestionGrid() {
    questionGrid.innerHTML = '';
    activeQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = String(idx + 1).padStart(2, '0');

      const record = userAnswers[q.id];
      let cellClass = 'matrix-cell';

      if (record && record.status === 'answered') {
        if (record.selectedIndex === q.correctAnswer) {
          cellClass += ' is-correct';
        } else {
          cellClass += ' is-wrong';
        }
      } else if (record && record.status === 'skipped') {
        cellClass += ' is-skipped';
      }

      if (idx === currentIndex) {
        cellClass += ' is-current';
      }

      btn.className = cellClass;
      btn.addEventListener('click', () => {
        currentIndex = idx;
        renderCurrentQuestion();
      });

      questionGrid.appendChild(btn);
    });
  }

  // Finish Exam & Transition to Evaluation Dossier
  function finishExam() {
    isExamFinished = true;
    stopTimer();

    const stats = getStats();
    const total = activeQuestions.length;
    const percentage = total > 0 ? Math.round((stats.correct / total) * 100) : 0;

    resTime.textContent = formatTime(elapsedSeconds);
    resCorrect.textContent = stats.correct;
    resWrong.textContent = stats.wrong;
    resSkipped.textContent = stats.finalSkipped;
    resPercent.textContent = `${percentage}%`;

    activeReviewFilter = 'all';
    updateReviewFilterButtonsUI();

    quizScreen.classList.add('hidden');
    finishExamBtn.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    renderReviewList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render Review List with Filter Support
  function renderReviewList() {
    reviewList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    let visibleCount = 0;

    activeQuestions.forEach((q, idx) => {
      const record = userAnswers[q.id];
      const isAnswered = record && record.status === 'answered';
      const isRight = isAnswered && record.selectedIndex === q.correctAnswer;
      const isWrong = isAnswered && !isRight;
      const isSkippedOrBlank = !isAnswered;

      if (activeReviewFilter === 'correct' && !isRight) return;
      if (activeReviewFilter === 'wrong' && !isWrong) return;
      if (activeReviewFilter === 'skipped' && !isSkippedOrBlank) return;

      visibleCount++;

      let statusStamp = '';
      if (isRight) {
        statusStamp = `<span class="font-mono-tabular text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border" style="background:var(--status-correct-bg);border-color:var(--status-correct-border);color:var(--status-correct-text)">Richtig · Doğru</span>`;
      } else if (isWrong) {
        statusStamp = `<span class="font-mono-tabular text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border" style="background:var(--status-wrong-bg);border-color:var(--status-wrong-border);color:var(--status-wrong-text)">Falsch · Yanlış</span>`;
      } else {
        statusStamp = `<span class="font-mono-tabular text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border" style="background:var(--status-skip-bg);border-color:var(--status-skip-border);color:var(--status-skip-text)">Offen · Boş</span>`;
      }

      const userOpt = isAnswered ? q.options[record.selectedIndex] : null;
      const correctOpt = q.options[q.correctAnswer];

      const userPrefix =
        isAnswered && q.type === 'multiple_choice' ? `[${letters[record.selectedIndex]}] ` : '';
      const correctPrefix =
        q.type === 'multiple_choice' ? `[${letters[q.correctAnswer]}] ` : '';

      const userAnswerHtml = userOpt
        ? `<div class="editorial-subsheet p-2.5 border-l-2" style="border-left-color:${
            isRight ? 'var(--status-correct-border)' : 'var(--status-wrong-border)'
          }">
            <div class="font-mono-tabular text-[10px] uppercase tracking-wider mb-0.5" style="color:${
              isRight ? 'var(--status-correct-text)' : 'var(--status-wrong-text)'
            }">Senin Cevabın · Deine Antwort</div>
            <div class="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">${userPrefix}${userOpt.de}</div>
            <div class="tr-text text-[11px] text-[var(--text-tr)]">${userOpt.tr}</div>
          </div>`
        : `<div class="editorial-subsheet p-2.5 border-l-2" style="border-left-color:var(--status-skip-border)">
            <div class="font-mono-tabular text-[10px] uppercase tracking-wider mb-0.5" style="color:var(--status-skip-text)">Senin Cevabın · Deine Antwort</div>
            <div class="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">Boş Bırakıldı · Übersprungen</div>
          </div>`;

      const correctAnswerHtml = `
        <div class="editorial-subsheet p-2.5 border-l-2" style="border-left-color:var(--status-correct-border)">
          <div class="font-mono-tabular text-[10px] uppercase tracking-wider mb-0.5" style="color:var(--status-correct-text)">Doğru Cevap · Richtige Antwort</div>
          <div class="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">${correctPrefix}${correctOpt.de}</div>
          <div class="tr-text text-[11px] text-[var(--text-tr)]">${correctOpt.tr}</div>
        </div>
      `;

      const card = document.createElement('article');
      card.className = 'editorial-sheet p-3.5 sm:p-4 space-y-2.5';
      card.innerHTML = `
        <div class="flex items-center justify-between gap-2 pb-1.5 border-b border-[var(--border-hairline)]">
          <span class="font-mono-tabular text-[11px] font-semibold text-[var(--text-muted)]">
            #${String(idx + 1).padStart(2, '0')} · ${
              q.type === 'true_false' ? 'Richtig / Falsch' : 'Multiple Choice'
            }
          </span>
          ${statusStamp}
        </div>
        <div class="space-y-0.5">
          <h4 class="font-serif-editorial text-sm sm:text-[16px] font-semibold text-[var(--text-primary)] leading-snug">${formatQuestionTitle(
            q.question_de,
            idx + 1
          )}</h4>
          <p class="tr-text text-xs text-[var(--text-tr)] leading-snug">${formatQuestionTitle(
            q.question_tr,
            idx + 1
          )}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${userAnswerHtml}
          ${correctAnswerHtml}
        </div>
        <div class="footnote-box space-y-0.5">
          <div class="font-mono-tabular text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-brass)]">Anmerkung · Açıklama</div>
          <p class="text-xs text-[var(--text-primary)] leading-snug">${q.explanation_de}</p>
          <p class="tr-text text-[11px] text-[var(--text-tr)] leading-snug">${q.explanation_tr}</p>
        </div>
      `;

      reviewList.appendChild(card);
    });

    if (visibleCount === 0) {
      reviewList.innerHTML = `
        <div class="editorial-sheet p-6 text-center text-xs font-mono-tabular text-[var(--text-muted)]">
          Bu filtrede görüntülenecek soru bulunmuyor.
        </div>
      `;
    }
  }

  // Shuffle All Trigger
  function handleShuffleAll() {
    initQuiz(activeFilter, true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Keyboard Navigation & Option Selection on Desktop
  window.addEventListener('keydown', (e) => {
    if (isExamFinished) return;
    if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    const q = activeQuestions[currentIndex];
    if (!q) return;

    const key = e.key.toLowerCase();

    if (q.type === 'multiple_choice') {
      if (key === '1' || key === 'a') handleSelectOption(0);
      else if (key === '2' || key === 'b') handleSelectOption(1);
      else if (key === '3' || key === 'c') handleSelectOption(2);
      else if (key === '4' || key === 'd') handleSelectOption(3);
    } else if (q.type === 'true_false') {
      if (key === '1') handleSelectOption(0);
      else if (key === '2') handleSelectOption(1);
      else if (key === 'r' || key === 'd') {
        const rIdx = q.options.findIndex((o) => o.de.toLowerCase().includes('richtig'));
        if (rIdx !== -1) handleSelectOption(rIdx);
      } else if (key === 'f' || key === 'y') {
        const fIdx = q.options.findIndex((o) => o.de.toLowerCase().includes('falsch'));
        if (fIdx !== -1) handleSelectOption(fIdx);
      }
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevBtn.click();
    } else if (key === 's') {
      e.preventDefault();
      if (!skipBtn.disabled) skipBtn.click();
    }
  });

  // Event Listeners
  shuffleBtn.addEventListener('click', handleShuffleAll);
  inlineShuffleBtn.addEventListener('click', handleShuffleAll);
  restartShuffleBtn.addEventListener('click', handleShuffleAll);

  toggleTrBtn.addEventListener('click', () => {
    showTurkish = !showTurkish;
    if (showTurkish) {
      document.body.classList.remove('hide-tr');
      toggleTrLabel.textContent = 'TR';
      toggleTrDot.className = 'w-1.5 h-1.5 rounded-full bg-[#3b825a]';
    } else {
      document.body.classList.add('hide-tr');
      toggleTrLabel.textContent = 'TR Kapalı';
      toggleTrDot.className = 'w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]';
    }
  });

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderCurrentQuestion();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < activeQuestions.length - 1) {
      currentIndex++;
      renderCurrentQuestion();
    } else {
      finishExam();
    }
  });

  skipBtn.addEventListener('click', handleSkipQuestion);
  finishExamBtn.addEventListener('click', finishExam);

  restartBtn.addEventListener('click', () => {
    initQuiz(activeFilter, false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter');
      initQuiz(selectedFilter, isShuffled);
    });
  });

  reviewFilterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeReviewFilter = btn.getAttribute('data-review-filter');
      updateReviewFilterButtonsUI();
      renderReviewList();
    });
  });

  // Initialize Theme & Start Quiz
  initTheme();
  initQuiz('all', false);
})();
