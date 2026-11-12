// Akademik Çalışma ve Sınav Portalı — Editorial Multi-Course Exam Engine
// Handles: Deutsche Literaturwissenschaft (66 Q) & Fremdsprachendidaktik (68 Q - Purely Turkish)
// Features: Landing portal, dynamic filtering, dual shuffle, timer, TR toggle, review ledger & keyboard shortcuts

(function () {
  // Course Registries
  const COURSES = {
    edebiyat: {
      id: 'edebiyat',
      titleDe: 'Deutsche Literatur',
      subtitleDe: 'Klausurarchiv · 66 Fragen',
      titleTr: 'Deutsche Literaturwissenschaft',
      fullTitle: 'Deutsche Literaturwissenschaft — Sınav Arşivi (66 Soru)',
      badgeName: 'Deutsche Literaturwissenschaft',
      getQuestions: () => (typeof questions !== 'undefined' ? questions : []),
      filters: [
        { id: 'all', label: 'Tümü', count: 66 },
        { id: 'multiple_choice', label: 'Çoktan Seçmeli', count: 56 },
        { id: 'true_false', label: 'R / F', count: 10 }
      ],
      filterFn: (q, f) => (f === 'all' ? true : q.type === f),
      badgeFn: (q) => (q.type === 'multiple_choice' ? 'I. Multiple Choice' : 'II. Richtig / Falsch'),
      gridColsClass: 'grid-cols-11 sm:grid-cols-16'
    },
    yaklasimlar: {
      id: 'yaklasimlar',
      titleDe: 'Yaklaşımlar ve Yöntemler',
      subtitleDe: 'Didaktik Arşivi · 120 Soru',
      titleTr: 'Yabancı Dil Öğretiminde Yaklaşımlar ve Yöntemler',
      fullTitle: 'Yabancı Dil Öğretiminde Yaklaşımlar ve Yöntemler — Sınav Arşivi (120 Soru)',
      badgeName: 'Fremdsprachendidaktik & Methoden',
      getQuestions: () => (typeof yaklasimlarQuestions !== 'undefined' ? yaklasimlarQuestions : []),
      filters: [
        { id: 'all', label: 'Tümü', count: 120 },
        { id: 'gum', label: 'GÜM', count: 42 },
        { id: 'dogrudan', label: 'Doğrudan', count: 37 },
        { id: 'isitsel', label: 'İşitsel-Dilsel', count: 41 }
      ],
      filterFn: (q, f) => (f === 'all' ? true : q.category === f),
      badgeFn: (q) => {
        const catMap = { gum: 'GÜM', dogrudan: 'Doğrudan Yöntem', isitsel: 'İşitsel-Dilsel Yöntem' };
        return `Yöntem · ${catMap[q.category] || 'Didaktik'}`;
      },
      gridColsClass: 'grid-cols-11 sm:grid-cols-18'
    },
    yaklasimlar_zor: {
      id: 'yaklasimlar_zor',
      titleDe: 'Yaklaşımlar (Zor Sorular)',
      subtitleDe: 'Didaktik Arşivi · 75 Soru',
      titleTr: 'Yaklaşımlar ve Yöntemler (Sadece Zor Sorular)',
      fullTitle: 'Yaklaşımlar ve Yöntemler (Sadece Zor Sorular) — 75 Soru',
      badgeName: 'Fremdsprachendidaktik · Zor Sorular',
      getQuestions: () => (typeof yaklasimlarZorQuestions !== 'undefined' ? yaklasimlarZorQuestions : []),
      filters: [
        { id: 'all', label: 'Tümü', count: 75 },
        { id: 'gum', label: 'GÜM', count: 21 },
        { id: 'dogrudan', label: 'Doğrudan', count: 22 },
        { id: 'isitsel', label: 'İşitsel-Dilsel', count: 32 }
      ],
      filterFn: (q, f) => (f === 'all' ? true : q.category === f),
      badgeFn: (q) => {
        const catMap = { gum: 'GÜM (Zor)', dogrudan: 'Doğrudan (Zor)', isitsel: 'İşitsel-Dilsel (Zor)' };
        return `Zor Soru · ${catMap[q.category] || 'Didaktik'}`;
      },
      gridColsClass: 'grid-cols-11 sm:grid-cols-18'
    }
  };

  // State
  let currentCourse = null;
  let activeFilter = 'all';
  let activeReviewFilter = 'all';
  let activeQuestions = [];
  let currentIndex = 0;
  // userAnswers: { [questionId]: { status: 'answered' | 'skipped', selectedIndex: number | null } }
  let userAnswers = {};
  let showTurkish = true;
  let isShuffled = false;
  let elapsedSeconds = 0;
  let timerInterval = null;
  let isExamFinished = false;

  // Header & Global DOM Elements
  const mainHeader = document.getElementById('main-header');
  const headerBackBtn = document.getElementById('header-back-btn');
  const headerTitle = document.getElementById('header-title');
  const headerSubtitle = document.getElementById('header-subtitle');
  const timerContainer = document.getElementById('timer-container');
  const timerDisplay = document.getElementById('timer-display');
  const shuffleBtn = document.getElementById('shuffle-btn');
  const toggleTrBtn = document.getElementById('toggle-tr-btn');
  const toggleTrDot = document.getElementById('toggle-tr-dot');
  const toggleTrLabel = document.getElementById('toggle-tr-label');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleLabel = document.getElementById('theme-toggle-label');
  const finishExamBtn = document.getElementById('finish-exam-btn');

  // Screens
  const landingScreen = document.getElementById('landing-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');

  // Quiz DOM Elements
  const quizFilterContainer = document.getElementById('quiz-filter-container');
  const liveCorrect = document.getElementById('live-correct');
  const liveWrong = document.getElementById('live-wrong');
  const liveSkipped = document.getElementById('live-skipped');

  const progressText = document.getElementById('progress-text');
  const progressPercent = document.getElementById('progress-percent');
  const progressBar = document.getElementById('progress-bar');

  const questionTypeBadge = document.getElementById('question-type-badge');
  const shuffleModeBadge = document.getElementById('shuffle-mode-badge');
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
  const matrixCourseLabel = document.getElementById('matrix-course-label');

  // Results DOM Elements
  const resCourseName = document.getElementById('res-course-name');
  const resTime = document.getElementById('res-time');
  const resCorrect = document.getElementById('res-correct');
  const resWrong = document.getElementById('res-wrong');
  const resSkipped = document.getElementById('res-skipped');
  const resPercent = document.getElementById('res-percent');
  const restartBtn = document.getElementById('restart-btn');
  const restartShuffleBtn = document.getElementById('restart-shuffle-btn');
  const changeCourseBtn = document.getElementById('change-course-btn');
  const reviewFilterButtons = document.querySelectorAll('[data-review-filter]');
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
      if (currentScrollY > lastScrollY && currentScrollY > 32) {
        mainHeader.classList.add('header-hidden');
      } else {
        mainHeader.classList.remove('header-hidden');
      }
      lastScrollY = currentScrollY;
    },
    { passive: true }
  );

  // Timer Management
  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      updateTimerDisplay();
    }, 1000);
    updateTimerDisplay();
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (timerDisplay) timerDisplay.textContent = formatted;
  }

  // Deep Clone and optionally Shuffle Questions & Options
  function buildQuestionList(course, filterType, shouldShuffle) {
    const rawQuestions = course.getQuestions();
    const baseList = rawQuestions.filter((q) => course.filterFn(q, filterType));

    let cloned = baseList.map((q) => {
      const correctVal = q.correctAnswer !== undefined ? q.correctAnswer : q.correct;
      if (!shouldShuffle) {
        return {
          ...q,
          options: [...q.options],
          correctAnswer: correctVal
        };
      }

      // Option Shuffle while preserving correct answer
      const indexedOptions = q.options.map((opt, idx) => ({
        val: typeof opt === 'string' ? opt : { ...opt },
        isCorrect: idx === correctVal
      }));

      // Fisher-Yates for options
      for (let i = indexedOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
      }

      const newCorrectIndex = indexedOptions.findIndex((opt) => opt.isCorrect);
      return {
        ...q,
        options: indexedOptions.map((item) => item.val),
        correctAnswer: newCorrectIndex
      };
    });

    if (shouldShuffle) {
      // Fisher-Yates for questions
      for (let i = cloned.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
      }
    }

    return cloned;
  }

  // Build Quiz Filter Tab Bar dynamically based on current course
  function renderFilterTabs() {
    if (!quizFilterContainer || !currentCourse) return;
    quizFilterContainer.innerHTML = '';

    const allCourseQuestions = currentCourse.getQuestions();
    currentCourse.filters.forEach((filter) => {
      const dynamicCount = allCourseQuestions.filter((q) => currentCourse.filterFn(q, filter.id)).length;
      const countDisplay = dynamicCount || filter.count;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `filter-tab ${activeFilter === filter.id ? 'active' : ''}`;
      btn.setAttribute('data-filter', filter.id);
      btn.innerHTML = `${filter.label} <span class="font-mono-tabular text-[10px] opacity-75">(${countDisplay})</span>`;
      btn.addEventListener('click', () => {
        applyFilter(filter.id, isShuffled);
      });
      quizFilterContainer.appendChild(btn);
    });

    // Add inline shuffle button
    const inlineShuffle = document.createElement('button');
    inlineShuffle.type = 'button';
    inlineShuffle.className = 'filter-tab !text-[var(--accent-primary)] hover:!bg-[var(--accent-primary-soft)] font-semibold';
    inlineShuffle.title = 'Soru sırasını ve şıkların yerini karıştır';
    inlineShuffle.innerHTML = '↻ Karıştır';
    inlineShuffle.addEventListener('click', () => {
      applyFilter(activeFilter, true);
    });
    quizFilterContainer.appendChild(inlineShuffle);
  }

  // Apply Filter or Shuffle mode
  function applyFilter(filterType, shuffleMode) {
    if (!currentCourse) return;
    activeFilter = filterType;
    isShuffled = shuffleMode;
    activeQuestions = buildQuestionList(currentCourse, activeFilter, isShuffled);
    currentIndex = 0;

    // Update filter tabs active state
    const tabs = quizFilterContainer.querySelectorAll('[data-filter]');
    tabs.forEach((tab) => {
      if (tab.getAttribute('data-filter') === activeFilter) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update shuffle badges & button label
    if (shuffleModeBadge) {
      if (isShuffled) {
        shuffleModeBadge.classList.remove('hidden');
        shuffleModeBadge.classList.add('inline-flex');
      } else {
        shuffleModeBadge.classList.add('hidden');
        shuffleModeBadge.classList.remove('inline-flex');
      }
    }

    if (shuffleBtn) {
      shuffleBtn.classList.toggle('ctrl-btn-accent', isShuffled);
    }

    renderCurrentQuestion();
    renderQuestionGrid();
    updateLiveLedger();
  }

  // Calculate live D / Y / B scores
  function calculateStats() {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    activeQuestions.forEach((q) => {
      const record = userAnswers[q.id];
      if (!record || record.status === 'skipped') {
        if (record && record.status === 'skipped') skipped++;
        return;
      }
      if (record.status === 'answered') {
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
      skipped,
      totalUnansweredOrSkipped
    };
  }

  function updateLiveLedger() {
    const stats = calculateStats();
    if (liveCorrect) liveCorrect.textContent = stats.correct;
    if (liveWrong) liveWrong.textContent = stats.wrong;
    if (liveSkipped) liveSkipped.textContent = stats.skipped;
  }

  // Render Current Question
  function renderCurrentQuestion() {
    if (!activeQuestions || activeQuestions.length === 0) return;
    const q = activeQuestions[currentIndex];
    const total = activeQuestions.length;
    const record = userAnswers[q.id];
    const isAnswered = record && record.status === 'answered';
    const isYaklasimlar = currentCourse && (currentCourse.id === 'yaklasimlar' || currentCourse.id === 'yaklasimlar_zor');

    // Header Metadata
    if (questionTypeBadge && currentCourse) {
      questionTypeBadge.textContent = currentCourse.badgeFn(q);
    }

    // Status Badge (Doğru / Yanlış / Boş)
    if (questionStatusBadge) {
      if (record) {
        questionStatusBadge.classList.remove('hidden');
        if (record.status === 'skipped') {
          questionStatusBadge.className =
            'font-mono-tabular text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border border-[var(--status-skip-border)] text-[var(--status-skip-text)] bg-[var(--status-skip-bg)]';
          questionStatusBadge.textContent = 'Boş Bırakıldı';
        } else if (record.selectedIndex === q.correctAnswer) {
          questionStatusBadge.className =
            'font-mono-tabular text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border border-[var(--status-correct-border)] text-[var(--status-correct-text)] bg-[var(--status-correct-bg)]';
          questionStatusBadge.textContent = 'Doğru Cevap';
        } else {
          questionStatusBadge.className =
            'font-mono-tabular text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border border-[var(--status-wrong-border)] text-[var(--status-wrong-text)] bg-[var(--status-wrong-bg)]';
          questionStatusBadge.textContent = 'Yanlış Cevap';
        }
      } else {
        questionStatusBadge.classList.add('hidden');
      }
    }

    // Question Stems: Pure Turkish for Yaklasimlar, DE + TR for Edebiyat
    if (isYaklasimlar) {
      if (questionDe) {
        questionDe.textContent = q.question || q.question_tr;
      }
      if (questionTr) {
        questionTr.textContent = '';
        questionTr.style.display = 'none';
      }
    } else {
      if (questionDe) {
        questionDe.textContent = q.question_de;
      }
      if (questionTr) {
        questionTr.textContent = q.question_tr;
        questionTr.style.display = '';
      }
    }

    // Progress Bar & Counter
    const numDisplay = String(currentIndex + 1).padStart(2, '0');
    const totalDisplay = String(total).padStart(2, '0');
    const percent = Math.round(((currentIndex + 1) / total) * 100);
    if (progressText) progressText.textContent = `${numDisplay} / ${totalDisplay}`;
    if (progressPercent) progressPercent.textContent = `(${percent}%)`;
    if (progressBar) progressBar.style.width = `${percent}%`;

    // Render Options
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const isTrueFalse = q.type === 'true_false';

      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn group';
        btn.disabled = isAnswered;

        // Keycap label
        let keyLabel = '';
        if (isTrueFalse) {
          keyLabel = idx === 0 ? 'R' : 'F';
        } else {
          keyLabel = String.fromCharCode(65 + idx); // A, B, C, D
        }

        // Apply Answered Styles
        if (isAnswered) {
          if (idx === q.correctAnswer) {
            btn.classList.add('option-correct');
          } else if (idx === record.selectedIndex) {
            btn.classList.add('option-wrong');
          } else {
            btn.classList.add('option-muted');
          }
        }

        if (isYaklasimlar) {
          const optText = typeof opt === 'string' ? opt : (opt.tr || opt.de);
          btn.innerHTML = `
            <span class="option-key">${keyLabel}</span>
            <div class="space-y-0.5 flex-1 min-w-0">
              <p class="text-xs sm:text-[14px] font-medium leading-snug text-[var(--text-primary)]">
                ${optText}
              </p>
            </div>
          `;
        } else {
          btn.innerHTML = `
            <span class="option-key">${keyLabel}</span>
            <div class="space-y-0.5 flex-1 min-w-0">
              <p class="text-xs sm:text-[14px] font-medium leading-snug text-[var(--text-primary)]">
                ${opt.de}
              </p>
              <p class="tr-text text-[11px] sm:text-[12.5px] leading-snug text-[var(--text-tr)]">
                ${opt.tr}
              </p>
            </div>
          `;
        }

        btn.addEventListener('click', () => {
          selectAnswer(idx);
        });

        optionsContainer.appendChild(btn);
      });
    }

    // Explanation Box: Pure Turkish for Yaklasimlar, DE + TR for Edebiyat
    if (explanationBox) {
      if (isAnswered) {
        explanationBox.classList.remove('hidden');
        if (isYaklasimlar) {
          if (explanationDe) explanationDe.textContent = q.explanation || q.explanation_tr || '';
          if (explanationTr) {
            explanationTr.textContent = '';
            explanationTr.style.display = 'none';
          }
        } else {
          if (explanationDe) explanationDe.textContent = q.explanation_de || '';
          if (explanationTr) {
            explanationTr.textContent = q.explanation_tr || '';
            explanationTr.style.display = '';
          }
        }
      } else {
        explanationBox.classList.add('hidden');
      }
    }

    // Update Bottom Nav Buttons
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) {
      if (currentIndex === total - 1) {
        if (nextBtnLabel) nextBtnLabel.textContent = 'Sonucu Gör (Abschließen)';
      } else {
        if (nextBtnLabel) nextBtnLabel.textContent = 'Weiter (İleri)';
      }
    }

    updateQuestionGridHighlight();
  }

  // Option selection handler
  function selectAnswer(selectedIndex) {
    const q = activeQuestions[currentIndex];
    userAnswers[q.id] = {
      status: 'answered',
      selectedIndex: selectedIndex
    };

    updateLiveLedger();
    renderCurrentQuestion();
    renderQuestionGrid();
  }

  // Skip question handler
  function skipCurrentQuestion() {
    const q = activeQuestions[currentIndex];
    if (!userAnswers[q.id] || userAnswers[q.id].status !== 'answered') {
      userAnswers[q.id] = {
        status: 'skipped',
        selectedIndex: null
      };
    }

    updateLiveLedger();
    renderQuestionGrid();

    if (currentIndex < activeQuestions.length - 1) {
      currentIndex++;
      renderCurrentQuestion();
    } else {
      finishExam();
    }
  }

  // Navigation handlers
  function goToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderCurrentQuestion();
    }
  }

  function goToNext() {
    if (currentIndex < activeQuestions.length - 1) {
      currentIndex++;
      renderCurrentQuestion();
    } else {
      finishExam();
    }
  }

  function jumpToQuestion(idx) {
    if (idx >= 0 && idx < activeQuestions.length) {
      currentIndex = idx;
      renderCurrentQuestion();
    }
  }

  // Render collapsible question index matrix
  function renderQuestionGrid() {
    if (!questionGrid || !currentCourse) return;
    questionGrid.innerHTML = '';
    questionGrid.className = `grid ${currentCourse.gridColsClass} gap-1 pt-2.5 mt-2 border-t border-[var(--border-hairline)]`;

    if (matrixCourseLabel) {
      matrixCourseLabel.textContent = `(${activeQuestions.length})`;
    }

    activeQuestions.forEach((q, idx) => {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'matrix-cell';
      cell.textContent = String(idx + 1).padStart(2, '0');
      cell.title = `Soru ${idx + 1}`;

      const record = userAnswers[q.id];
      if (record) {
        if (record.status === 'skipped') {
          cell.classList.add('is-skipped');
        } else if (record.status === 'answered') {
          if (record.selectedIndex === q.correctAnswer) {
            cell.classList.add('is-correct');
          } else {
            cell.classList.add('is-wrong');
          }
        }
      }

      if (idx === currentIndex) {
        cell.classList.add('is-current');
      }

      cell.addEventListener('click', () => {
        jumpToQuestion(idx);
      });

      questionGrid.appendChild(cell);
    });
  }

  function updateQuestionGridHighlight() {
    if (!questionGrid) return;
    const cells = questionGrid.querySelectorAll('.matrix-cell');
    cells.forEach((cell, idx) => {
      if (idx === currentIndex) {
        cell.classList.add('is-current');
      } else {
        cell.classList.remove('is-current');
      }
    });
  }

  // Complete Exam and Switch to Results
  function finishExam() {
    isExamFinished = true;
    stopTimer();

    const stats = calculateStats();
    const total = activeQuestions.length;
    const successRate = total > 0 ? Math.round((stats.correct / total) * 100) : 0;

    if (resCourseName && currentCourse) {
      resCourseName.textContent = currentCourse.fullTitle;
    }

    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    if (resTime) {
      resTime.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    if (resCorrect) resCorrect.textContent = stats.correct;
    if (resWrong) resWrong.textContent = stats.wrong;
    if (resSkipped) resSkipped.textContent = total - (stats.correct + stats.wrong);
    if (resPercent) resPercent.textContent = `%${successRate}`;

    // Switch Screens
    landingScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    // Controls visibility in result screen
    if (finishExamBtn) finishExamBtn.classList.add('hidden');
    if (shuffleBtn) shuffleBtn.classList.add('hidden');
    if (headerBackBtn) headerBackBtn.classList.remove('hidden');

    activeReviewFilter = 'all';
    renderReviewList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render Detailed Review List in Result Screen
  function renderReviewList() {
    if (!reviewList || !currentCourse) return;
    reviewList.innerHTML = '';
    const isYaklasimlar = currentCourse && (currentCourse.id === 'yaklasimlar' || currentCourse.id === 'yaklasimlar_zor');

    const filtered = activeQuestions.filter((q) => {
      const record = userAnswers[q.id];
      if (activeReviewFilter === 'all') return true;
      if (activeReviewFilter === 'correct') {
        return record && record.status === 'answered' && record.selectedIndex === q.correctAnswer;
      }
      if (activeReviewFilter === 'wrong') {
        return record && record.status === 'answered' && record.selectedIndex !== q.correctAnswer;
      }
      if (activeReviewFilter === 'skipped') {
        return !record || record.status === 'skipped';
      }
      return true;
    });

    if (filtered.length === 0) {
      reviewList.innerHTML = `
        <div class="editorial-sheet p-6 text-center text-[var(--text-muted)] text-xs font-mono-tabular">
          Bu filtreye uygun soru bulunamadı.
        </div>
      `;
      return;
    }

    filtered.forEach((q, idx) => {
      const record = userAnswers[q.id];
      const isAnswered = record && record.status === 'answered';
      const isCorrect = isAnswered && record.selectedIndex === q.correctAnswer;
      const isSkipped = !record || record.status === 'skipped';

      let statusBadgeHtml = '';
      if (isCorrect) {
        statusBadgeHtml = `<span class="px-2 py-0.5 rounded text-[10px] font-mono-tabular font-semibold border border-[var(--status-correct-border)] text-[var(--status-correct-text)] bg-[var(--status-correct-bg)]">Doğru</span>`;
      } else if (isSkipped) {
        statusBadgeHtml = `<span class="px-2 py-0.5 rounded text-[10px] font-mono-tabular font-semibold border border-[var(--status-skip-border)] text-[var(--status-skip-text)] bg-[var(--status-skip-bg)]">Boş</span>`;
      } else {
        statusBadgeHtml = `<span class="px-2 py-0.5 rounded text-[10px] font-mono-tabular font-semibold border border-[var(--status-wrong-border)] text-[var(--status-wrong-text)] bg-[var(--status-wrong-bg)]">Yanlış</span>`;
      }

      const card = document.createElement('article');
      card.className = 'editorial-sheet p-3.5 sm:p-4 space-y-2.5';

      const optionsHtml = q.options
        .map((opt, optIdx) => {
          let itemStyle = 'background-color: var(--bg-subtle); border: 1px solid var(--border-hairline);';
          let keyStyle = 'background-color: var(--bg-elevated); border: 1px solid var(--border-hairline); color: var(--text-secondary);';

          if (optIdx === q.correctAnswer) {
            itemStyle = 'background-color: var(--status-correct-bg); border: 1px solid var(--status-correct-border); border-left: 3px solid var(--status-correct-border);';
            keyStyle = 'background-color: var(--status-correct-border); color: #fff;';
          } else if (isAnswered && optIdx === record.selectedIndex && !isCorrect) {
            itemStyle = 'background-color: var(--status-wrong-bg); border: 1px solid var(--status-wrong-border); border-left: 3px solid var(--status-wrong-border);';
            keyStyle = 'background-color: var(--status-wrong-border); color: #fff;';
          }

          const optKey = q.type === 'true_false' ? (optIdx === 0 ? 'R' : 'F') : String.fromCharCode(65 + optIdx);
          const optText = typeof opt === 'string' ? opt : (opt.tr || opt.de);

          if (isYaklasimlar) {
            return `
              <div style="${itemStyle}" class="rounded p-2 flex items-start gap-2 text-xs">
                <span style="${keyStyle}" class="w-5 h-5 rounded flex items-center justify-center font-mono-tabular font-bold shrink-0 text-[10px]">${optKey}</span>
                <div class="min-w-0 flex-1">
                  <p class="font-medium text-[var(--text-primary)] leading-tight">${optText}</p>
                </div>
              </div>
            `;
          } else {
            return `
              <div style="${itemStyle}" class="rounded p-2 flex items-start gap-2 text-xs">
                <span style="${keyStyle}" class="w-5 h-5 rounded flex items-center justify-center font-mono-tabular font-bold shrink-0 text-[10px]">${optKey}</span>
                <div class="min-w-0 flex-1">
                  <p class="font-medium text-[var(--text-primary)] leading-tight">${opt.de}</p>
                  <p class="tr-text text-[11px] text-[var(--text-tr)] mt-0.5 leading-tight">${opt.tr}</p>
                </div>
              </div>
            `;
          }
        })
        .join('');

      const qTitle = isYaklasimlar ? (q.question || q.question_tr) : q.question_de;
      const qSub = isYaklasimlar ? '' : `<p class="tr-text text-xs text-[var(--text-tr)] leading-snug">${q.question_tr}</p>`;
      const explMain = isYaklasimlar ? (q.explanation || q.explanation_tr || '') : (q.explanation_de || '');
      const explSub = isYaklasimlar ? '' : `<p class="tr-text text-[11px] text-[var(--text-tr)] leading-snug">${q.explanation_tr || ''}</p>`;

      card.innerHTML = `
        <div class="flex items-center justify-between gap-2 border-b border-[var(--border-hairline)] pb-2 flex-wrap">
          <span class="font-mono-tabular text-[10px] uppercase tracking-wider font-semibold text-[var(--text-muted)]">
            Soru ${idx + 1} · ${currentCourse.badgeFn(q)}
          </span>
          ${statusBadgeHtml}
        </div>
        <div class="space-y-0.5">
          <h4 class="font-serif-editorial text-[15px] sm:text-[16px] font-semibold text-[var(--text-primary)] leading-snug">
            ${qTitle}
          </h4>
          ${qSub}
        </div>
        <div class="grid grid-cols-1 gap-1.5 pt-1">
          ${optionsHtml}
        </div>
        <div class="footnote-box text-xs space-y-1 mt-2">
          <span class="font-mono-tabular text-[9.5px] uppercase tracking-widest text-[var(--accent-brass)] font-semibold block">Açıklama / Not</span>
          <p class="text-[var(--text-primary)] font-medium leading-snug">${explMain}</p>
          ${explSub}
        </div>
      `;

      reviewList.appendChild(card);
    });
  }

  // Switch to Landing Screen (Course Selection Portal)
  function showLanding() {
    stopTimer();
    currentCourse = null;
    isExamFinished = false;
    userAnswers = {};

    landingScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');

    // Controls visibility
    if (headerBackBtn) headerBackBtn.classList.add('hidden');
    if (timerContainer) {
      timerContainer.classList.add('hidden');
      timerContainer.classList.remove('flex');
    }
    if (shuffleBtn) shuffleBtn.classList.add('hidden');
    if (toggleTrBtn) toggleTrBtn.classList.add('hidden');
    if (finishExamBtn) finishExamBtn.classList.add('hidden');

    if (headerTitle) headerTitle.textContent = 'Akademik Portal';
    if (headerSubtitle) headerSubtitle.textContent = 'Philologie & Didaktik';
    document.title = 'Akademik Çalışma ve Sınav Portalı — Philologie & Didaktik';

    try {
      history.pushState(null, '', window.location.pathname);
    } catch (_) {}

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Start / Select Course
  function selectCourse(courseId, shouldShuffle) {
    const course = COURSES[courseId];
    if (!course) return;

    currentCourse = course;
    activeFilter = 'all';
    isShuffled = !!shouldShuffle;
    isExamFinished = false;
    userAnswers = {};
    elapsedSeconds = 0;

    // Header updates
    if (headerTitle) headerTitle.textContent = course.titleDe;
    if (headerSubtitle) headerSubtitle.textContent = course.subtitleDe;
    document.title = course.fullTitle;

    // Controls visibility
    if (headerBackBtn) headerBackBtn.classList.remove('hidden');
    if (timerContainer) {
      timerContainer.classList.remove('hidden');
      timerContainer.classList.add('flex');
    }
    if (shuffleBtn) shuffleBtn.classList.remove('hidden');
    if (finishExamBtn) finishExamBtn.classList.remove('hidden');

    // TR toggle button only relevant for bilingual courses (Edebiyat)
    if (toggleTrBtn) {
      if (courseId === 'yaklasimlar' || courseId === 'yaklasimlar_zor') {
        toggleTrBtn.classList.add('hidden');
      } else {
        toggleTrBtn.classList.remove('hidden');
      }
    }

    // Screen transitions
    landingScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Build questions & filters
    renderFilterTabs();
    applyFilter('all', isShuffled);
    startTimer();

    try {
      history.pushState(null, '', `?course=${courseId}`);
    } catch (_) {}

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Keyboard Navigation & Shortcuts
  function setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      // Ignore if focus is in an input or modal
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      // Only active during quiz screen
      if (quizScreen.classList.contains('hidden') || isExamFinished) return;

      const q = activeQuestions[currentIndex];
      if (!q) return;

      // Option Selection: 1, 2, 3, 4 OR A, B, C, D OR R, F
      const key = e.key.toUpperCase();
      let selectedOption = -1;

      if (['1', 'A'].includes(key)) selectedOption = 0;
      else if (['2', 'B'].includes(key)) selectedOption = 1;
      else if (['3', 'C'].includes(key) && q.options.length > 2) selectedOption = 2;
      else if (['4', 'D'].includes(key) && q.options.length > 3) selectedOption = 3;
      else if (q.type === 'true_false') {
        if (key === 'R') selectedOption = 0;
        else if (key === 'F') selectedOption = 1;
      }

      if (selectedOption !== -1) {
        e.preventDefault();
        const record = userAnswers[q.id];
        if (!record || record.status !== 'answered') {
          selectAnswer(selectedOption);
        }
        return;
      }

      // Navigation: Left / Right Arrows
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }

      // Skip: S or Space
      if (key === 'S') {
        e.preventDefault();
        skipCurrentQuestion();
      }
    });
  }

  // Event Listeners
  function setupEvents() {
    // Header Back button to Landing
    if (headerBackBtn) {
      headerBackBtn.addEventListener('click', () => {
        if (!isExamFinished && Object.keys(userAnswers).length > 0) {
          const confirmExit = confirm('Mevcut sınav oturumunu sonlandırıp ders seçim ekranına dönmek istiyor musunuz?');
          if (!confirmExit) return;
        }
        showLanding();
      });
    }

    // Landing Screen Course Start Buttons
    const startButtons = document.querySelectorAll('[data-start-course]');
    startButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const courseId = btn.getAttribute('data-start-course');
        selectCourse(courseId, false);
      });
    });

    // Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Turkish Translation Toggle
    if (toggleTrBtn) {
      toggleTrBtn.addEventListener('click', () => {
        showTurkish = !showTurkish;
        document.body.classList.toggle('hide-tr', !showTurkish);
        if (toggleTrDot) {
          toggleTrDot.className = `w-1.5 h-1.5 rounded-full ${showTurkish ? 'bg-[#3b825a]' : 'bg-[var(--text-muted)]'}`;
        }
      });
    }

    // Top Shuffle Button
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        applyFilter(activeFilter, !isShuffled);
      });
    }

    // Finish Exam Button
    if (finishExamBtn) {
      finishExamBtn.addEventListener('click', () => {
        const stats = calculateStats();
        if (stats.totalUnansweredOrSkipped > 0) {
          const confirmFinish = confirm(
            `Henüz cevaplamadığınız veya boş bıraktığınız ${stats.totalUnansweredOrSkipped} soru var. Sınavı bitirmek istiyor musunuz?`
          );
          if (!confirmFinish) return;
        }
        finishExam();
      });
    }

    // Bottom Navigation
    if (prevBtn) prevBtn.addEventListener('click', goToPrev);
    if (nextBtn) nextBtn.addEventListener('click', goToNext);
    if (skipBtn) skipBtn.addEventListener('click', skipCurrentQuestion);

    // Results Actions
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        if (currentCourse) selectCourse(currentCourse.id, false);
      });
    }

    if (restartShuffleBtn) {
      restartShuffleBtn.addEventListener('click', () => {
        if (currentCourse) selectCourse(currentCourse.id, true);
      });
    }

    if (changeCourseBtn) {
      changeCourseBtn.addEventListener('click', showLanding);
    }

    // Review Filters in Result Screen
    reviewFilterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        reviewFilterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeReviewFilter = btn.getAttribute('data-review-filter');
        renderReviewList();
      });
    });

    // Popstate (Browser Back/Forward navigation)
    window.addEventListener('popstate', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const courseParam = urlParams.get('course');
      if (courseParam && COURSES[courseParam]) {
        selectCourse(courseParam, false);
      } else {
        showLanding();
      }
    });
  }

  // Initial Boot
  function init() {
    initTheme();
    setupEvents();
    setupKeyboard();

    // Check URL parameters for direct course links (e.g., ?course=edebiyat or ?course=yaklasimlar)
    const urlParams = new URLSearchParams(window.location.search);
    const courseParam = urlParams.get('course');

    if (courseParam && COURSES[courseParam]) {
      selectCourse(courseParam, false);
    } else {
      showLanding();
    }
  }

  // Execute on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
