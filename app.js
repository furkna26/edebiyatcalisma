// Bilingual German Literature Quiz App Logic (Vanilla JS)

(function () {
  // State
  let activeFilter = 'all';
  let activeQuestions = [...questions];
  let currentIndex = 0;
  // userAnswers stores: { [questionId]: { status: 'answered' | 'skipped', selectedIndex: number | null } }
  let userAnswers = {};
  let showTurkish = true;
  let elapsedSeconds = 0;
  let timerInterval = null;
  let isExamFinished = false;

  // DOM Elements
  const timerDisplay = document.getElementById('timer-display');
  const toggleTrBtn = document.getElementById('toggle-tr-btn');
  const toggleTrDot = document.getElementById('toggle-tr-dot');
  const toggleTrLabel = document.getElementById('toggle-tr-label');
  const finishExamBtn = document.getElementById('finish-exam-btn');

  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');

  const filterButtons = document.querySelectorAll('.filter-btn');
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

  // Format seconds as MM:SS
  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Start Timer
  function startTimer() {
    stopTimer();
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      timerDisplay.textContent = formatTime(elapsedSeconds);
    }, 1000);
  }

  // Stop Timer
  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // Initialize / Reset Quiz
  function initQuiz(filterType = activeFilter) {
    activeFilter = filterType;
    if (filterType === 'all') {
      activeQuestions = [...questions];
    } else {
      activeQuestions = questions.filter((q) => q.type === filterType);
    }

    currentIndex = 0;
    userAnswers = {};
    elapsedSeconds = 0;
    isExamFinished = false;
    timerDisplay.textContent = '00:00';

    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    finishExamBtn.classList.remove('hidden');

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
        btn.className = 'filter-btn px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-600 text-white transition';
      } else {
        btn.className = 'filter-btn px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
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

    // Progress Bar
    const pct = Math.round(((currentIndex + 1) / total) * 100);
    progressText.textContent = `Frage ${currentIndex + 1} / ${total}`;
    progressPercent.textContent = `${pct}%`;
    progressBar.style.width = `${pct}%`;

    // Question Type Badge
    if (q.type === 'true_false') {
      questionTypeBadge.textContent = 'Richtig / Falsch (Doğru / Yanlış)';
      questionTypeBadge.className =
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30';
    } else {
      questionTypeBadge.textContent = 'Multiple Choice (Çoktan Seçmeli)';
      questionTypeBadge.className =
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30';
    }

    // Status Badge on Question
    if (isAnswered) {
      const isRight = record.selectedIndex === q.correctAnswer;
      questionStatusBadge.classList.remove('hidden');
      if (isRight) {
        questionStatusBadge.textContent = '✓ Richtig (Doğru)';
        questionStatusBadge.className = 'text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
      } else {
        questionStatusBadge.textContent = '✗ Falsch (Yanlış)';
        questionStatusBadge.className = 'text-xs font-bold px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/40';
      }
    } else if (isSkipped) {
      questionStatusBadge.classList.remove('hidden');
      questionStatusBadge.textContent = '↷ Übersprungen (Boş Bırakıldı)';
      questionStatusBadge.className = 'text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40';
    } else {
      questionStatusBadge.classList.add('hidden');
    }

    // Question Text
    questionDe.textContent = q.question_de;
    questionTr.textContent = q.question_tr;

    // Options Layout: 2 side-by-side buttons for true_false, 4 stacked buttons for multiple_choice
    if (q.type === 'true_false') {
      optionsContainer.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1';
    } else {
      optionsContainer.className = 'grid grid-cols-1 gap-3.5 pt-1';
    }

    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.disabled = isAnswered;

      let baseClass =
        'option-btn w-full text-left rounded-xl p-4 border border-slate-700/80 bg-slate-800/60 flex items-start gap-3.5 focus:outline-none';

      if (q.type === 'true_false') {
        baseClass =
          'option-btn w-full text-center rounded-xl p-5 border border-slate-700/80 bg-slate-800/60 flex flex-col items-center justify-center gap-1.5 focus:outline-none';
      }

      // Highlighting if already answered
      if (isAnswered) {
        if (idx === q.correctAnswer) {
          baseClass += ' option-correct';
        } else if (idx === record.selectedIndex && idx !== q.correctAnswer) {
          baseClass += ' option-wrong';
        } else {
          baseClass += ' opacity-60';
        }
      }

      btn.className = baseClass;

      if (q.type === 'true_false') {
        const iconHtml =
          idx === 0
            ? `<span class="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center font-extrabold text-base">R</span>`
            : `<span class="w-9 h-9 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center justify-center font-extrabold text-base">F</span>`;

        btn.innerHTML = `
          ${iconHtml}
          <span class="text-lg sm:text-xl font-bold text-white tracking-wide">${opt.de}</span>
          <span class="tr-text text-xs sm:text-sm italic text-slate-400">${opt.tr}</span>
        `;
      } else {
        let badgeStyle = 'bg-slate-700/80 text-slate-200 border-slate-600';
        if (isAnswered) {
          if (idx === q.correctAnswer) {
            badgeStyle = 'bg-emerald-500 text-slate-950 border-emerald-400';
          } else if (idx === record.selectedIndex) {
            badgeStyle = 'bg-rose-500 text-white border-rose-400';
          }
        }

        btn.innerHTML = `
          <span class="w-8 h-8 rounded-lg border ${badgeStyle} font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
            ${letters[idx]}
          </span>
          <div class="space-y-1 flex-1">
            <div class="text-base sm:text-lg font-semibold text-slate-100 leading-snug">${opt.de}</div>
            <div class="tr-text text-xs sm:text-sm italic text-slate-400 leading-normal">${opt.tr}</div>
          </div>
        `;
      }

      btn.addEventListener('click', () => handleSelectOption(idx));
      optionsContainer.appendChild(btn);
    });

    // Explanation Box
    if (isAnswered) {
      explanationDe.textContent = q.explanation_de;
      explanationTr.textContent = q.explanation_tr;
      explanationBox.classList.remove('hidden');
    } else {
      explanationBox.classList.add('hidden');
    }

    // Navigation Buttons State
    prevBtn.disabled = currentIndex === 0;
    skipBtn.disabled = isAnswered;
    if (isAnswered) {
      skipBtn.classList.add('opacity-40', 'pointer-events-none');
    } else {
      skipBtn.classList.remove('opacity-40', 'pointer-events-none');
    }

    if (currentIndex === total - 1) {
      nextBtnLabel.textContent = 'Auswertung (Bitir)';
    } else {
      nextBtnLabel.textContent = 'Weiter (İleri)';
    }

    renderQuestionGrid();
  }

  // Handle Option Click
  function handleSelectOption(selectedIndex) {
    const q = activeQuestions[currentIndex];
    const existing = userAnswers[q.id];
    if (existing && existing.status === 'answered') {
      return; // Locked once answered
    }

    userAnswers[q.id] = {
      status: 'answered',
      selectedIndex
    };

    updateLiveStats();
    renderCurrentQuestion();
  }

  // Handle Skip ("Überspringen / Boş Bırak")
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

  // Render Question Navigator Grid
  function renderQuestionGrid() {
    questionGrid.innerHTML = '';
    activeQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = idx + 1;

      const record = userAnswers[q.id];
      let colorClass = 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700';

      if (record && record.status === 'answered') {
        if (record.selectedIndex === q.correctAnswer) {
          colorClass = 'bg-emerald-500/25 text-emerald-300 border-emerald-500/50 font-bold';
        } else {
          colorClass = 'bg-rose-500/25 text-rose-300 border-rose-500/50 font-bold';
        }
      } else if (record && record.status === 'skipped') {
        colorClass = 'bg-amber-500/25 text-amber-300 border-amber-500/50 font-bold';
      }

      const activeRing = idx === currentIndex ? 'ring-2 ring-indigo-400 border-indigo-400' : '';

      btn.className = `h-8 rounded-lg border text-xs font-mono transition flex items-center justify-center ${colorClass} ${activeRing}`;
      btn.addEventListener('click', () => {
        currentIndex = idx;
        renderCurrentQuestion();
      });

      questionGrid.appendChild(btn);
    });
  }

  // Finish Exam & Show Results Screen (Auswertung)
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

    quizScreen.classList.add('hidden');
    finishExamBtn.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    renderReviewList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render Full Review List
  function renderReviewList() {
    reviewList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    activeQuestions.forEach((q, idx) => {
      const record = userAnswers[q.id];
      const isAnswered = record && record.status === 'answered';
      const isRight = isAnswered && record.selectedIndex === q.correctAnswer;

      let statusBadge = '';
      let borderClass = 'border-slate-800';

      if (isAnswered && isRight) {
        statusBadge = `<span class="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">✓ Richtig (Doğru)</span>`;
        borderClass = 'border-emerald-500/30';
      } else if (isAnswered && !isRight) {
        statusBadge = `<span class="px-2.5 py-1 rounded-md text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">✗ Falsch (Yanlış)</span>`;
        borderClass = 'border-rose-500/30';
      } else {
        statusBadge = `<span class="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">↷ Übersprungen (Boş)</span>`;
        borderClass = 'border-amber-500/30';
      }

      const userOpt = isAnswered ? q.options[record.selectedIndex] : null;
      const correctOpt = q.options[q.correctAnswer];

      const userPrefix =
        isAnswered && q.type === 'multiple_choice' ? `${letters[record.selectedIndex]}) ` : '';
      const correctPrefix =
        q.type === 'multiple_choice' ? `${letters[q.correctAnswer]}) ` : '';

      const userAnswerHtml = userOpt
        ? `<div class="p-3 rounded-xl ${
            isRight
              ? 'bg-emerald-950/30 border border-emerald-500/30'
              : 'bg-rose-950/30 border border-rose-500/30'
          }">
            <div class="text-xs font-bold uppercase tracking-wider ${
              isRight ? 'text-emerald-400' : 'text-rose-400'
            } mb-1">Deine Antwort / Senin Cevabın:</div>
            <div class="text-sm font-semibold text-white">${userPrefix}${userOpt.de}</div>
            <div class="tr-text text-xs italic text-slate-400">${userOpt.tr}</div>
          </div>`
        : `<div class="p-3 rounded-xl bg-amber-950/25 border border-amber-500/30">
            <div class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">Deine Antwort / Senin Cevabın:</div>
            <div class="text-sm font-semibold text-amber-200">Übersprungen / Boş Bırakıldı</div>
          </div>`;

      const correctAnswerHtml = `
        <div class="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
          <div class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">Richtige Antwort / Doğru Cevap:</div>
          <div class="text-sm font-semibold text-white">${correctPrefix}${correctOpt.de}</div>
          <div class="tr-text text-xs italic text-slate-400">${correctOpt.tr}</div>
        </div>
      `;

      const card = document.createElement('div');
      card.className = `bg-slate-900 border ${borderClass} rounded-2xl p-5 space-y-4`;
      card.innerHTML = `
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <span class="text-xs font-mono font-semibold text-slate-400">Frage #${idx + 1} (${
            q.type === 'true_false' ? 'Richtig/Falsch' : 'Multiple Choice'
          })</span>
          ${statusBadge}
        </div>
        <div class="space-y-1">
          <h4 class="text-base sm:text-lg font-bold text-white">${q.question_de}</h4>
          <p class="tr-text text-xs sm:text-sm italic text-slate-400">${q.question_tr}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${userAnswerHtml}
          ${correctAnswerHtml}
        </div>
        <div class="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/70 space-y-1">
          <div class="text-xs font-bold text-indigo-400 uppercase tracking-wider">Erklärung / Açıklama</div>
          <p class="text-xs sm:text-sm text-slate-200">${q.explanation_de}</p>
          <p class="tr-text text-xs italic text-slate-400">${q.explanation_tr}</p>
        </div>
      `;

      reviewList.appendChild(card);
    });
  }

  // Event Listeners
  toggleTrBtn.addEventListener('click', () => {
    showTurkish = !showTurkish;
    if (showTurkish) {
      document.body.classList.remove('hide-tr');
      toggleTrLabel.textContent = 'Türkçe Çevirileri Gizle';
      toggleTrDot.className = 'w-2 h-2 rounded-full bg-emerald-400';
    } else {
      document.body.classList.add('hide-tr');
      toggleTrLabel.textContent = 'Türkçe Çevirileri Göster';
      toggleTrDot.className = 'w-2 h-2 rounded-full bg-slate-500';
    }
  });

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
    initQuiz(activeFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter');
      if (selectedFilter !== activeFilter) {
        initQuiz(selectedFilter);
      }
    });
  });

  // Start immediately on page load
  initQuiz('all');
})();
