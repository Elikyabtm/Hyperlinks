const cardsData = [
  {
    id: 1,
    title: "Projet Xanadu",
    subtitle: "Ted Nelson, 1964",
    year: 1964,
    headerTitle: "The ancestors",
    headerSubtitle: "of the blue hyperlink",
    description: "The first concept to visually connect two pieces of information...",
    modalDescription: `<p>Project Xanadu was one of the first systems to create visual connections between documents.</p>
<p>Instead of colored text or buttons, it used lines to show a link between different pieces of information.</p>
<p>These lines weren't clickable like modern hyperlinks, but they introduced the concept of connecting digital documents in a visual, structured way.</p>
<p>This was a major leap toward what would eventually become hypertext as we know it.</p>`,
    image: "images/1964 – Project Xanadu.webp",
    downloadFile: "Projet Xanadu.png"
  },
  {
    id: 2,
    title: "HyperTIES System",
    subtitle: "University of Maryland, 1983",
    year: 1983,
    headerTitle: "The ancestors",
    headerSubtitle: "of the blue hyperlink",
    description: "Used cyan hyperlinks on a black background to distinguish links...",
    modalDescription: `<p>HyperTIES was an interactive system that introduced color to its interface, using cyan hyperlinks on a black background.</p>
<p>It was part of an electronic journal used in academic and professional contexts.</p>
<p>Although cyan isn't the same as dark blue, this marked one of the earliest uses of color to differentiate links.</p>
<p>It's a clear step forward in making digital navigation more intuitive, even if the iconic hyperlink blue hadn't appeared just yet.</p>`,
    image: "images/1983 – HyperTIES system.webp",
    downloadFile: "HyperTIES System.png"
  },
  {
    id: 3,
    title: "Windows 1.0",
    subtitle: "Microsoft, 1985",
    year: 1985,
    headerTitle: "Visual Foundations",
    headerSubtitle: "of Hyperlinks",
    description: "Introduced dark blue in the UI (not yet for links), but most importantly...",
    modalDescription: `<p>Windows 1.0 brought a fully graphical interface to home computers.</p>
<p>While hyperlinks weren't yet common, the interface used dark blue heavily in headings and window borders.</p>
<p>Even more interesting, it introduced underlined text to indicate clickable areas. An early design convention that persists today.</p>
<p>It also featured hover states, where the interface changed appearance when users moved the mouse over certain elements. Another crucial element of modern hyperlink design.</p>`,
    image: "images/1985 – Windows 1.0.png",
    downloadFile: "Windows 1.0.png"
  },
  {
    id: 4,
    title: "HyperCard",
    subtitle: "Apple, 1987",
    year: 1987,
    headerTitle: "Visual Foundations",
    headerSubtitle: "of Hyperlinks",
    description: "Hyperlinks between cards/apps, but still black and white...",
    modalDescription: `<p>Apple's HyperCard allowed users to build and navigate between cards filled with content.</p>
<p>It featured clickable areas, similar to hyperlinks, though without color.</p>
<p>These links were purely functional and relied on layout and interaction rather than color or underline.</p>
<p>Although the design was visually refined, it didn't help users identify links at a glance. Making it a key example of how interaction came before visual identity in hyperlink design.</p>`,
    image: "images/1987 – HyperCard.jpg",
    downloadFile: "HyperCard.png"
  },
  {
    id: 5,
    title: "Windows 3.0",
    subtitle: "Microsoft, 1990",
    year: 1990,
    headerTitle: "The Road",
    headerSubtitle: "to Interactivity",
    description: "Introduced 16 colors, but links remained black...",
    modalDescription: `<p>Windows 3.0 introduced support for 16 colors, which allowed for much richer interfaces.</p>
<p>Yet, despite these new capabilities, links were still displayed as black text on a white background, and selected items flipped to white on black.</p>
<p>It's clear that designers were still figuring out how to use color meaningfully.</p>
<p>The use of blue for links wasn't there yet but the environment was becoming more visually sophisticated.</p>`,
    image: "images/1990 – Windows 3.0 .png",
    downloadFile: "Windows 3.0.png"
  },
  {
    id: 6,
    title: "Windows 3.1",
    subtitle: "Microsoft, 1992",
    year: 1992,
    headerTitle: "The Road",
    headerSubtitle: "to Interactivity",
    description: "Microsoft uses hyperlink blue for active selections in the interface...",
    modalDescription: `<p>By this point, Microsoft had been using dark blue in its interfaces for several years.</p>
<p>In Windows 3.1, we see blue used not only for layout but for interactive states like when clicking on a drive or folder.</p>
<p>This change suggests a growing link between the color blue and interactivity.</p>
<p>It's not quite a blue hyperlink yet, but it's an important visual shift that predates Mosaic by about a year.</p>`,
    image: "images/April 6, 1992 – Windows 3.1 .webp",
    downloadFile: "Windows 3.1.png"
  },
  {
    id: 7,
    title: "Mosaic",
    subtitle: "NCSA, 1993",
    year: 1993,
    headerTitle: "The Blue Hyperlink",
    headerSubtitle: "is Born",
    description: "Early versions used black underlined links, no blue yet...",
    modalDescription: `<p>The very first version of the Mosaic browser often considered the ancestor of modern browsers featured underlined black hyperlinks with an outline.</p>
<p>This early interface didn't include blue yet, but it set the stage for it.</p>
<p>The user guide mentioned visual cues like underlining and highlighting, emphasizing the importance of visibility and interaction clarity.</p>`,
    image: "images/January, 1993 – Mosaic.webp",
    downloadFile: "Mosaic.png"
  },
  {
    id: 8,
    title: "Mosaic Version 0.13",
    subtitle: "NCSA, 1993",
    year: 1993,
    headerTitle: "The Blue Hyperlink",
    headerSubtitle: "is Born",
    description: "This is the official birth of the blue hyperlink...",
    modalDescription: `<p>Changed default anchor representations: blue and single solid underline for unvisited, dark purple and single dashed underline for visited.</p>
<p>This was the first confirmed appearance of blue hyperlinks in a web browser.</p>
<p>That exact color system blue for unvisited, purple for visited would go on to become the standard across the web.</p>`,
    image: "images/April 12, 1993 – Mosaic Version 0.13.webp",
    downloadFile: "Mosaic Version 0.13.png"
  },
  {
    id: 9,
    title: "Netscape Navigator",
    subtitle: "Marc Andreessen, 1994",
    year: 1994,
    headerTitle: "Standardization",
    headerSubtitle: "and Legacy",
    description: "Used the same blue links on gray background as Mosaic...",
    modalDescription: `<p>Created by Marc Andreessen, one of the developers behind Mosaic, Netscape Navigator carried over Mosaic's visual language.</p>
<p>It featured blue underlined hyperlinks on a gray background, instantly familiar to users.</p>
<p>With Netscape's growing popularity, this style became the default for web design.</p>
<p>This version helped lock in the blue hyperlink as a web convention, setting the tone for what hyperlinks would look like for decades.</p>`,
    image: "images/October 13, 1994 – Netscape Navigator.webp",
    downloadFile: "Netscape Navigator.png"
  },
  {
    id: 10,
    title: "Internet Explorer 1.0",
    subtitle: "Microsoft, 1995",
    year: 1995,
    headerTitle: "Standardization",
    headerSubtitle: "and Legacy",
    description: "Blue hyperlinks became a standard as they reached mainstream users...",
    modalDescription: `<p>Microsoft released its own browser, Internet Explorer, alongside Windows 95.</p>
<p>Like Netscape, it featured blue links and a gray UI.</p>
<p>But this time, it came pre-installed with the operating system meaning millions of users saw and accepted this design immediately.</p>
<p>This moment helped cement the blue hyperlink as a global standard, and marked the beginning of the famous browser wars.</p>`,
    image: "images/July 1995 – Internet Explorer 1.0.webp",
    downloadFile: "Internet Explorer 1.0.png"
  }
];


document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Initialize sections
  const sections = document.querySelectorAll(".section")
  let currentSectionIndex = 0

  // Progress bar
  const progressFill = document.getElementById("progressFill")

  // Navigation buttons
  const nextSectionBtn = document.getElementById("nextSectionBtn")
  const topButton = document.getElementById("topButton")

  // Continue buttons
  const introScrollButton = document.getElementById("introScrollButton")
  const cardsContinueBtn = document.getElementById("cardsContinueBtn")
  const perceptionContinueBtn = document.getElementById("perceptionContinueBtn")
  const cssContinueBtn = document.getElementById("cssContinueBtn")
  const restartButton = document.getElementById("restartButton")

  // Update progress bar based on scroll position
  function updateProgress() {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.body.scrollHeight

    const progress = (scrollPosition / (documentHeight - windowHeight)) * 100
    progressFill.style.width = `${progress}%`

    // Show/hide top button
    if (scrollPosition > 300) {
      topButton.classList.remove("hidden")
    } else {
      topButton.classList.add("hidden")
    }

    // Determine current section
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
        currentSectionIndex = index

        // Hide next section button on last section
        if (index === sections.length - 1) {
          nextSectionBtn.classList.add("hidden")
        } else {
          nextSectionBtn.classList.remove("hidden")
        }
      }
    })
  }

  // Scroll to next section
  function scrollToNextSection() {
    const nextIndex = Math.min(currentSectionIndex + 1, sections.length - 1)
    sections[nextIndex].scrollIntoView({ behavior: "smooth" })
  }

  // Scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Event listeners for navigation
  window.addEventListener("scroll", updateProgress)
  nextSectionBtn.addEventListener("click", scrollToNextSection)
  topButton.addEventListener("click", scrollToTop)
  introScrollButton.addEventListener("click", scrollToNextSection)
  cardsContinueBtn.addEventListener("click", scrollToNextSection)
  perceptionContinueBtn.addEventListener("click", scrollToNextSection)
  cssContinueBtn.addEventListener("click", scrollToNextSection)
  restartButton.addEventListener("click", scrollToTop)

  // Initialize intro section
  function initIntro() {
    const mainIntroText = document.getElementById("mainIntroText")
    const welcomeIntro = document.getElementById("welcomeIntro")
    const scrollIndicator = document.getElementById("scrollIndicator")

    // Create particles optimized for mobile
    const particleCount = window.innerWidth < 768 ? 10 : 20
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.classList.add("particle")

      const size = Math.random() * 8 + 3 // Smaller particles for mobile
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      // Add animation
      particle.style.animation = `
        ${Math.random() * 10 + 10}s infinite alternate ease-in-out
        ${Math.random() * 5}s
        both
        float
      `

      particles.appendChild(particle)
    }

    // Add float animation
    const floatKeyframes = `
      @keyframes float {
        0% {
          transform: translate(0, 0);
          opacity: 0.2;
        }
        50% {
          transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
          opacity: 0.7;
        }
        100% {
          transform: translate(0, 0);
          opacity: 0.2;
        }
      }
    `

    const style = document.createElement("style")
    style.textContent = floatKeyframes
    document.head.appendChild(style)

    // Démarrer l'animation d'intro après 4 secondes
    setTimeout(() => {
      // Faire disparaître le texte principal
      mainIntroText.classList.add("fade-out")
      scrollIndicator.style.opacity = "0"

      // Après la transition, afficher le texte de bienvenue
    setTimeout(() => {
    mainIntroText.classList.add("hidden"); // Supprime-le du flux visuel
    welcomeIntro.classList.add("show");
    welcomeIntro.classList.remove("hidden");

        // Réafficher l'indicateur de scroll après l'intro
        setTimeout(() => {
          scrollIndicator.style.opacity = "1"
        }, 1000)
      }, 500)
    }, 4000)
  }

  // Initialize cards timeline section
  class StackedCards {
    constructor() {
      this.currentIndex = 0
      this.selectedCard = null
      this.cardsContainer = document.getElementById("cardsContainer")
      this.progressIndicator = document.getElementById("progressIndicator")
      this.modal = document.getElementById("modal")
      this.yearLeft = document.getElementById("yearLeft")
      this.yearRight = document.getElementById("yearRight")
      this.isWheeling = false
      this.wheelTimeout = null

      this.init()
      this.bindEvents()
    }

    init() {
      this.createCards()
      this.createProgressDots()
      this.updateCards()
      this.updateYearHeader()
    }

    createCards() {
      this.cardsContainer.innerHTML = ""
      cardsData.forEach((card, index) => {
        const cardElement = document.createElement("div")
        cardElement.className = "timeline-card"
        cardElement.innerHTML = `
          <div class="timeline-card-content">
            <div class="timeline-card-header">
              <h3 class="timeline-card-title">${card.title}</h3>
              <p class="timeline-card-subtitle">${card.subtitle}</p>
            </div>
            <p class="timeline-card-description">${card.description}</p>
            <div class="timeline-card-image-container">
              <img src="${card.image}" alt="${card.title}" class="timeline-card-image">
              <button class="timeline-card-eye-button" data-card-index="${index}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>
        `
        this.cardsContainer.appendChild(cardElement)
      })
    }

    createProgressDots() {
      this.progressIndicator.innerHTML = ""
      cardsData.forEach((_, index) => {
        const dot = document.createElement("div")
        dot.className = "progress-dot"
        if (index === 0) dot.classList.add("active")
        this.progressIndicator.appendChild(dot)
      })
    }

    updateCards() {
      const cards = this.cardsContainer.querySelectorAll(".timeline-card")
      const dots = this.progressIndicator.querySelectorAll(".progress-dot")
      const N = cardsData.length
      const visibleRange = 2

      cards.forEach((card, actualIndex) => {
        let displayOffset = actualIndex - this.currentIndex
        if (displayOffset > N / 2) displayOffset -= N
        else if (displayOffset < -N / 2) displayOffset += N

        let translateY = displayOffset * 15
        let scale = 1 - Math.abs(displayOffset) * 0.05
        let opacity = Math.abs(displayOffset) <= visibleRange ? 1 - Math.abs(displayOffset) * 0.25 : 0
        let zIndex = displayOffset === 0 ? N + 1 : N - Math.abs(displayOffset)

        card.style.transform = `translateY(${translateY}px) scale(${scale})`
        card.style.opacity = opacity
        card.style.zIndex = zIndex
      })

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === this.currentIndex)
      })

      this.updateYearHeader()
    }

    updateYearHeader() {
      const card = cardsData[this.currentIndex]
      const year = card.year.toString()
      const left = year.slice(0, 2)
      const right = year.slice(2)

      const titleEl = document.getElementById("headerTitle")
      const subtitleEl = document.getElementById("headerSubtitle")

      this.yearLeft.classList.add("fade")
      this.yearRight.classList.add("fade")
      titleEl.classList.add("fade")
      subtitleEl.classList.add("fade")

      setTimeout(() => {
        this.yearLeft.textContent = left
        this.yearRight.textContent = right
        titleEl.textContent = card.headerTitle
        subtitleEl.textContent = card.headerSubtitle
      }, 150)

      setTimeout(() => {
        this.yearLeft.classList.remove("fade")
        this.yearRight.classList.remove("fade")
        titleEl.classList.remove("fade")
        subtitleEl.classList.remove("fade")
      }, 300)
    }

    handleWheel(event) {
      event.preventDefault()
      if (this.isWheeling) return
      this.isWheeling = true
      clearTimeout(this.wheelTimeout)
      this.wheelTimeout = setTimeout(() => (this.isWheeling = false), 900)

      const N = cardsData.length
      if (event.deltaY > 0) this.currentIndex = (this.currentIndex + 1) % N
      else if (event.deltaY < 0) this.currentIndex = (this.currentIndex - 1 + N) % N
      this.updateCards()
    }

    handleSwipe(startY, endY, threshold) {
      const swipeDistance = startY - endY
      if (Math.abs(swipeDistance) > threshold) {
        if (swipeDistance > 0) this.currentIndex = (this.currentIndex + 1) % cardsData.length
        else this.currentIndex = (this.currentIndex - 1 + cardsData.length) % cardsData.length
        this.updateCards()
      }
    }

    openModal(cardIndex) {
      this.selectedCard = cardsData[cardIndex]
      document.getElementById("modalTitleMobile").textContent = this.selectedCard.title
      document.getElementById("modalTitleDesktop").textContent = this.selectedCard.title
      document.getElementById("modalSubtitleMobile").textContent = this.selectedCard.subtitle
      document.getElementById("modalSubtitleDesktop").textContent = this.selectedCard.subtitle
      document.getElementById("modalImage").src = this.selectedCard.image
      document.getElementById("modalImage").alt = this.selectedCard.title
      document.getElementById("modalDescription").innerHTML = this.selectedCard.modalDescription || this.selectedCard.description

      this.modal.classList.add("active")
      document.body.style.overflow = "hidden"
      const downloadLink = document.getElementById("downloadLink");
if (downloadLink && this.selectedCard.downloadFile) {
  const filePath = `fiches/${this.selectedCard.downloadFile}`;
  downloadLink.href = filePath;
  downloadLink.setAttribute("download", this.selectedCard.downloadFile);
} else {
  downloadLink.href = "#";
  downloadLink.removeAttribute("download");
}

    }

    closeModal() {
      this.modal.classList.remove("active")
      document.body.style.overflow = ""
      this.selectedCard = null
    }

    bindEvents() {
      this.cardsContainer.addEventListener("wheel", this.handleWheel.bind(this), { passive: false })

      this.cardsContainer.addEventListener("click", (e) => {
        const eyeButton = e.target.closest(".timeline-card-eye-button")
        if (eyeButton) {
          e.preventDefault()
          const cardIndex = Number.parseInt(eyeButton.dataset.cardIndex, 10)
          this.openModal(cardIndex)
        }
      })

      document.getElementById("modalBackdrop").addEventListener("click", () => this.closeModal())
      document.getElementById("modalCloseMobile").addEventListener("click", () => this.closeModal())
      document.getElementById("modalCloseDesktop").addEventListener("click", () => this.closeModal())
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.modal.classList.contains("active")) this.closeModal()
      })
      document.getElementById("modalContent").addEventListener("click", (e) => e.stopPropagation())

      let touchStartY = 0
      let touchEndY = 0
      const swipeThreshold = 50

      this.cardsContainer.addEventListener("touchstart", (e) => {
        touchStartY = e.changedTouches[0].screenY
      }, { passive: true })

      this.cardsContainer.addEventListener("touchend", (e) => {
        touchEndY = e.changedTouches[0].screenY
        this.handleSwipe(touchStartY, touchEndY, swipeThreshold)
      }, { passive: true })
    }
  }

  function initCardsTimeline() {
    new StackedCards()
  }

 // Initialize perception test section - CORRIGÉ
function initPerceptionTest() {
  const startGameBtn = document.getElementById("startGameBtn")
  const retryTestBtn = document.getElementById("retryTestBtn")
  const gameStart = document.getElementById("gameStart")
  const countdown = document.getElementById("countdown")
  const countdownNumber = document.getElementById("countdownNumber")
  const gameArea = document.getElementById("gameArea")
  const wordsGrid = document.getElementById("wordsGrid")
  const roundInfo = document.getElementById("roundInfo")
  const gameProgress = document.getElementById("gameProgress")
  const gameResults = document.getElementById("gameResults")
  const avgReactionTime = document.getElementById("avgReactionTime")
  const blueReactionTime = document.getElementById("blueReactionTime")
  const otherReactionTime = document.getElementById("otherReactionTime")
  const conclusion = document.getElementById("conclusion")
  const perceptionContinueBtn = document.getElementById("perceptionContinueBtn")
  const timerBar = document.getElementById("timerBar")

  const colors = [
    "var(--red-500)",
    "var(--green-500)",
    "var(--blue-500)",
    "var(--yellow-500)",
    "var(--purple-500)",
    "var(--pink-500)",
    "var(--orange-500)",
    "var(--teal-500)",
  ]

  const colorClasses = [
    "text-red-500",
    "text-green-500",
    "text-blue-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-orange-500",
    "text-teal-500",
  ]

  const words = ["text", "button", "page", "website", "menu", "image", "code", "screen"]

  let rounds = []
  let currentRound = 0
  let reactionTimes = []
  let startTime = 0
  let timerInterval = null

  // Generate rounds - CORRIGÉ pour garantir que le mot "link" apparaît toujours
  function generateRounds() {
    rounds = []

    // Garantir au moins un lien bleu dans le test
    let hasBlueLink = false

    for (let i = 0; i < 5; i++) {
      const shuffledWords = [...words].sort(() => Math.random() - 0.5)
      const shuffledColors = [...colors].sort(() => Math.random() - 0.5)
      const shuffledColorClasses = [...colorClasses].sort(() => Math.random() - 0.5)

      // S'assurer que le mot "link" est inclus
      const targetIndex = Math.floor(Math.random() * 9) // 0-8

      // Forcer au moins un lien bleu si nous sommes au dernier tour et n'en avons pas encore eu
      let targetColorIndex = Math.floor(Math.random() * shuffledColors.length)
      if (i === 4 && !hasBlueLink) {
        const blueIndex = shuffledColors.findIndex((color) => color === "var(--blue-500)")
        targetColorIndex = blueIndex !== -1 ? blueIndex : 2 // Utiliser l'index 2 par défaut si bleu non trouvé
      }

      if (shuffledColors[targetColorIndex % shuffledColors.length] === "var(--blue-500)") {
        hasBlueLink = true
      }

      const roundWords = []

      // Créer 9 mots pour la grille
      for (let j = 0; j < 9; j++) {
        if (j === targetIndex) {
          // Toujours inclure le mot "link" à la position cible
          roundWords.push({
            text: "link",
            color: shuffledColors[targetColorIndex % shuffledColors.length],
            colorClass: shuffledColorClasses[targetColorIndex % shuffledColorClasses.length],
            isTarget: true,
          })
        } else {
          // Utiliser des mots aléatoires pour les autres positions
          roundWords.push({
            text: shuffledWords[j % shuffledWords.length],
            color: shuffledColors[j % shuffledColors.length],
            colorClass: shuffledColorClasses[j % shuffledColorClasses.length],
            isTarget: false,
          })
        }
      }

      rounds.push({
        words: roundWords,
        targetIndex,
      })
    }

    // Vérification finale pour s'assurer qu'au moins un lien bleu est présent
    if (!hasBlueLink) {
      const randomRound = Math.floor(Math.random() * 5)
      const targetIndex = rounds[randomRound].targetIndex
      rounds[randomRound].words[targetIndex].color = "var(--blue-500)"
      rounds[randomRound].words[targetIndex].colorClass = "text-blue-500"
    }
  }

  // Start game
  startGameBtn.addEventListener("click", () => {
    gameStart.classList.add("hidden")
    countdown.classList.remove("hidden")

    let count = 3
    countdownNumber.textContent = count

    const timer = setInterval(() => {
      count--

      if (count <= 0) {
        clearInterval(timer)
        countdown.classList.add("hidden")
        startGame()
      } else {
        countdownNumber.textContent = count
      }
    }, 1000)
  })

  // Retry test
  retryTestBtn.addEventListener("click", () => {
    gameResults.classList.add("hidden")
    countdown.classList.remove("hidden")

    let count = 3
    countdownNumber.textContent = count

    const timer = setInterval(() => {
      count--

      if (count <= 0) {
        clearInterval(timer)
        countdown.classList.add("hidden")
        startGame()
      } else {
        countdownNumber.textContent = count
      }
    }, 1000)
  })

  // Start game
  function startGame() {
    generateRounds()
    currentRound = 0
    reactionTimes = []

    gameArea.classList.remove("hidden")
    displayRound()
    startTime = Date.now()

    // Start the timer bar animation
    startTimerBar()
  }

  // Start timer bar animation
  function startTimerBar() {
    // Reset the timer bar
    timerBar.style.width = "100%"
    timerBar.style.backgroundColor = "var(--blue-500)"

    // Clear any existing interval
    if (timerInterval) clearInterval(timerInterval)

    // Set a timeout to automatically move to next word if user doesn't click in time
    const timeLimit = 5000 // 5 seconds
    const decrementInterval = 50 // Update every 50ms
    const decrementAmount = (decrementInterval / timeLimit) * 100

    let timeRemaining = 100

    timerInterval = setInterval(() => {
      timeRemaining -= decrementAmount
      timerBar.style.width = `${timeRemaining}%`

      // Change color as time runs out
      if (timeRemaining < 30) {
        timerBar.style.backgroundColor = "var(--red-500)"
      } else if (timeRemaining < 60) {
        timerBar.style.backgroundColor = "var(--yellow-500)"
      }

      if (timeRemaining <= 0) {
        clearInterval(timerInterval)
        // If time runs out, record a slow reaction time and move to next round
        const slowReactionTime = 5000 // 5 seconds (max time)
        reactionTimes.push({
          time: slowReactionTime,
          isBlue: rounds[currentRound].words[rounds[currentRound].targetIndex].color === "var(--blue-500)",
        })

        if (currentRound < 4) {
          currentRound++
          displayRound()
          startTime = Date.now()
          startTimerBar()
        } else {
          gameArea.classList.add("hidden")
          showResults()
        }
      }
    }, decrementInterval)
  }

  // Display current round
  function displayRound() {
    roundInfo.textContent = `Round ${currentRound + 1}/5`
    gameProgress.style.width = `${((currentRound + 1) / 5) * 100}%`

    wordsGrid.innerHTML = ""

    rounds[currentRound].words.forEach((word, index) => {
      const button = document.createElement("button")
      button.classList.add("word-button")
      button.style.color = word.color

      if (word.isTarget) {
        button.classList.add("target")
      }

      button.textContent = word.text

      button.addEventListener("click", () => {
        if (word.isTarget) {
          handleWordClick()
        } else {
          // Add a small penalty for wrong clicks
          button.classList.add("wrong-click")
          setTimeout(() => {
            button.classList.remove("wrong-click")
          }, 300)
        }
      })

      wordsGrid.appendChild(button)
    })
  }

  // Handle word click
  function handleWordClick() {
    const endTime = Date.now()
    const reactionTime = endTime - startTime

    // Clear the timer interval
    if (timerInterval) clearInterval(timerInterval)

    reactionTimes.push({
      time: reactionTime,
      isBlue: rounds[currentRound].words[rounds[currentRound].targetIndex].color === "var(--blue-500)",
    })

    if (currentRound < 4) {
      currentRound++
      displayRound()
      startTime = Date.now()
      startTimerBar()
    } else {
      gameArea.classList.add("hidden")
      showResults()
    }
  }

  // Show results
  function showResults() {
    const times = reactionTimes.map((rt) => rt.time)
    const averageTime = Math.round(times.reduce((a, b) => a + b, 0) / times.length)

    const blueTimes = reactionTimes.filter((rt) => rt.isBlue).map((rt) => rt.time)
    const otherTimes = reactionTimes.filter((rt) => !rt.isBlue).map((rt) => rt.time)

    const blueAverage = blueTimes.length > 0 ? Math.round(blueTimes.reduce((a, b) => a + b, 0) / blueTimes.length) : 0

    const otherAverage =
      otherTimes.length > 0 ? Math.round(otherTimes.reduce((a, b) => a + b, 0) / otherTimes.length) : 0

    const isBlueFaster = blueAverage > 0 && otherAverage > 0 && blueAverage < otherAverage

    avgReactionTime.textContent = `Average reaction time: ${averageTime} ms`

    if (blueTimes.length > 0) {
      blueReactionTime.textContent = `Average for blue links: ${blueAverage} ms`
    }

    if (otherTimes.length > 0) {
      otherReactionTime.textContent = `Average for other colors: ${otherAverage} ms`
    }

    conclusion.textContent = isBlueFaster
      ? "You spotted the blue links faster! Perhaps this is why blue has become the standard color for links."
      : "Interesting! You spotted other colors faster than blue. But historically, blue was chosen because it stands out well and was rare in early websites."

    gameResults.classList.remove("hidden")
    perceptionContinueBtn.classList.remove("hidden")

    // Animate the results with a staggered reveal
    const resultItems = document.querySelectorAll(".result-item")
    resultItems.forEach((item, index) => {
      item.style.opacity = "0"
      item.style.transform = "translateY(20px)"
      setTimeout(() => {
        item.style.transition = "all 0.5s ease"
        item.style.opacity = "1"
        item.style.transform = "translateY(0)"
      }, 300 * index)
    })
  }
}

// Initialize CSS Experience section - CORRIGÉ
function initCssExperience() {
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  // Link color controls
  const linkColor = document.getElementById("linkColor")
  const linkColorValue = document.getElementById("linkColorValue")
  const visitedColor = document.getElementById("visitedColor")
  const visitedColorValue = document.getElementById("visitedColorValue")
  const activeColor = document.getElementById("activeColor")
  const activeColorValue = document.getElementById("activeColorValue")

  // Underline controls
  const hasUnderline = document.getElementById("hasUnderline")
  const underlineControls = document.getElementById("underlineControls")
  const underlineStyle = document.getElementById("underlineStyle")
  const underlineThickness = document.getElementById("underlineThickness")
  const thicknessValue = document.getElementById("thicknessValue")
  const underlineOffset = document.getElementById("underlineOffset")
  const offsetValue = document.getElementById("offsetValue")

  // Interaction controls
  const tapEffect = document.getElementById("tapEffect")

  // Animation controls
  const transitionDuration = document.getElementById("transitionDuration")
  const durationValue = document.getElementById("durationValue")
  const hasAnimation = document.getElementById("hasAnimation")
  const animationControls = document.getElementById("animationControls")
  const animationType = document.getElementById("animationType")

  // Preview elements
  const normalLink = document.getElementById("normalLink")
  const visitedLink = document.getElementById("visitedLink")
  const activeLink = document.getElementById("activeLink")
  const mobileLink = document.querySelector(".preview-link.mobile")

  // Code display
  const cssCode = document.getElementById("cssCode")
  const copyButton = document.getElementById("copyButton")

  // Preset buttons
  const presetButtons = document.querySelectorAll(".preset-button")

  // Tab switching
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.getAttribute("data-tab")

      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      button.classList.add("active")
      document.getElementById(tab).classList.add("active")

      if (tab === "preview") {
        updatePreview()
      }
    })
  })

  // Update color values
  linkColor.addEventListener("input", () => {
    linkColorValue.textContent = linkColor.value
    updatePreview()
  })

  visitedColor.addEventListener("input", () => {
    visitedColorValue.textContent = visitedColor.value
    updatePreview()
  })

  activeColor.addEventListener("input", () => {
    activeColorValue.textContent = activeColor.value
    updatePreview()
  })

  // Toggle underline controls
  hasUnderline.addEventListener("change", () => {
    underlineControls.style.display = hasUnderline.checked ? "block" : "none"
    updatePreview()
  })

  // Update thickness value
  underlineThickness.addEventListener("input", () => {
    thicknessValue.textContent = underlineThickness.value
    updatePreview()
  })

  // Update offset value
  underlineOffset.addEventListener("input", () => {
    offsetValue.textContent = underlineOffset.value
    updatePreview()
  })

  // Update duration value
  transitionDuration.addEventListener("input", () => {
    durationValue.textContent = transitionDuration.value
    updatePreview()
  })

  // Toggle animation controls
  hasAnimation.addEventListener("change", () => {
    animationControls.classList.toggle("hidden", !hasAnimation.checked)
    updatePreview()
  })

  // Update preview on any change
  ;[underlineStyle, tapEffect, animationType].forEach((control) => {
    control.addEventListener("change", updatePreview)
  })

  // Preset buttons
  presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const preset = button.getAttribute("data-preset")
      applyPreset(preset)
    })
  })

  // Apply preset styles
  function applyPreset(preset) {
    switch (preset) {
      case "classic":
        linkColor.value = "#0000EE"
        linkColorValue.textContent = "#0000EE"
        visitedColor.value = "#551A8B"
        visitedColorValue.textContent = "#551A8B"
        activeColor.value = "#FF0000"
        activeColorValue.textContent = "#FF0000"
        hasUnderline.checked = true
        underlineControls.style.display = "block"
        underlineStyle.value = "solid"
        underlineThickness.value = "1"
        thicknessValue.textContent = "1"
        underlineOffset.value = "0"
        offsetValue.textContent = "0"
        tapEffect.value = "color"
        transitionDuration.value = "0"
        durationValue.textContent = "0"
        hasAnimation.checked = false
        animationControls.classList.add("hidden")
        break

      case "modern":
        linkColor.value = "#2563eb"
        linkColorValue.textContent = "#2563eb"
        visitedColor.value = "#7c3aed"
        visitedColorValue.textContent = "#7c3aed"
        activeColor.value = "#1d4ed8"
        activeColorValue.textContent = "#1d4ed8"
        hasUnderline.checked = false
        underlineControls.style.display = "none"
        tapEffect.value = "color"
        transitionDuration.value = "0.3"
        durationValue.textContent = "0.3"
        hasAnimation.checked = false
        animationControls.classList.add("hidden")
        break

      case "minimal":
        linkColor.value = "#111827"
        linkColorValue.textContent = "#111827"
        visitedColor.value = "#374151"
        visitedColorValue.textContent = "#374151"
        activeColor.value = "#2563eb"
        activeColorValue.textContent = "#2563eb"
        hasUnderline.checked = false
        underlineControls.style.display = "none"
        tapEffect.value = "color"
        transitionDuration.value = "0.2"
        durationValue.textContent = "0.2"
        hasAnimation.checked = false
        animationControls.classList.add("hidden")
        break

      case "bold":
        linkColor.value = "#2563eb"
        linkColorValue.textContent = "#2563eb"
        visitedColor.value = "#7c3aed"
        visitedColorValue.textContent = "#7c3aed"
        activeColor.value = "#ffffff"
        activeColorValue.textContent = "#ffffff"
        hasUnderline.checked = true
        underlineControls.style.display = "block"
        underlineStyle.value = "solid"
        underlineThickness.value = "3"
        thicknessValue.textContent = "3"
        underlineOffset.value = "4"
        offsetValue.textContent = "4"
        tapEffect.value = "background"
        transitionDuration.value = "0.3"
        durationValue.textContent = "0.3"
        hasAnimation.checked = false
        animationControls.classList.add("hidden")
        break

      case "playful":
        linkColor.value = "#ec4899"
        linkColorValue.textContent = "#ec4899"
        visitedColor.value = "#8b5cf6"
        visitedColorValue.textContent = "#8b5cf6"
        activeColor.value = "#f97316"
        activeColorValue.textContent = "#f97316"
        hasUnderline.checked = true
        underlineControls.style.display = "block"
        underlineStyle.value = "wavy"
        underlineThickness.value = "2"
        thicknessValue.textContent = "2"
        underlineOffset.value = "5"
        offsetValue.textContent = "5"
        tapEffect.value = "scale"
        transitionDuration.value = "0.5"
        durationValue.textContent = "0.5"
        hasAnimation.checked = true
        animationControls.classList.remove("hidden")
        animationType.value = "rainbow"
        break
    }

    updatePreview()
  }

  // Update preview
  function updatePreview() {
    const linkStyles = {
      color: linkColor.value,
      textDecoration: hasUnderline.checked ? `${underlineStyle.value} underline` : "none",
      textDecorationThickness: `${underlineThickness.value}px`,
      textUnderlineOffset: `${underlineOffset.value}px`,
      transition: `all ${transitionDuration.value}s ease`,
    }

    const visitedStyles = {
      ...linkStyles,
      color: visitedColor.value,
    }

    const activeStyles = {
      ...linkStyles,
      color: activeColor.value,
    }

    // Apply styles to preview links
    applyStyles(normalLink, linkStyles)
    applyStyles(visitedLink, visitedStyles)
    applyStyles(activeLink, linkStyles)
    applyStyles(mobileLink, linkStyles)

    // Simulate tap effect for preview
    activeLink.addEventListener("click", (e) => {
      e.preventDefault()
      simulateTapEffect(activeLink)
    })

    mobileLink.addEventListener("click", (e) => {
      e.preventDefault()
      simulateTapEffect(mobileLink)
    })

    // Generate animation styles
    let animationStyles = ""
    if (hasAnimation.checked) {
      switch (animationType.value) {
        case "pulse":
          animationStyles = "animation: link-pulse 2s infinite;"
          break
        case "bounce":
          animationStyles = "animation: link-bounce 1s infinite;"
          break
        case "shake":
          animationStyles = "animation: link-shake 0.5s infinite;"
          break
        case "rainbow":
          animationStyles = "animation: link-rainbow 3s infinite;"
          break
      }
    }

    // Create animation keyframes if needed
    let keyframes = ""
    if (hasAnimation.checked) {
      switch (animationType.value) {
        case "pulse":
          keyframes = `
            @keyframes link-pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.6; }
            }
          `
          break
        case "bounce":
          keyframes = `
            @keyframes link-bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
          `
          break
        case "shake":
          keyframes = `
            @keyframes link-shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-2px); }
              75% { transform: translateX(2px); }
            }
          `
          break
        case "rainbow":
          keyframes = `
            @keyframes link-rainbow {
              0% { color: #ff0000; }
              16% { color: #ff8000; }
              33% { color: #ffff00; }
              50% { color: #00ff00; }
              66% { color: #00ffff; }
              83% { color: #0000ff; }
              100% { color: #ff00ff; }
            }
          `
          break
      }
    }

    // Add animation styles
    const styleElement = document.getElementById("hover-style") || document.createElement("style")
    styleElement.id = "hover-style"

    styleElement.textContent = `
        ${keyframes}
        .preview-link {
          ${animationStyles}
        }
      `

    if (!document.getElementById("hover-style")) {
      document.head.appendChild(styleElement)
    }

    // Generate CSS code
    const code = generateCssCode(linkStyles, visitedStyles, activeStyles, animationStyles)
    cssCode.textContent = code
  }

  // Simulate tap effect for preview
  function simulateTapEffect(element) {
    const originalStyles = { ...element.style }

    // Apply tap effect
    switch (tapEffect.value) {
      case "color":
        element.style.color = activeColor.value
        break
      case "scale":
        element.style.transform = "scale(0.95)"
        break
      case "opacity":
        element.style.opacity = "0.7"
        break
      case "background":
        element.style.backgroundColor = `${activeColor.value}33` // 20% opacity
        element.style.padding = "0 4px"
        element.style.borderRadius = "4px"
        break
    }

    // Reset after animation
    setTimeout(
      () => {
        Object.keys(originalStyles).forEach((key) => {
          element.style[key] = originalStyles[key]
        })
      },
      Number.parseFloat(transitionDuration.value) * 1000 || 300,
    )
  }

  // Apply styles to element
  function applyStyles(element, styles) {
    Object.assign(element.style, styles)
  }

  // Generate CSS code - CORRIGÉ pour enlever le texte en français
  function generateCssCode(linkStyles, visitedStyles, activeStyles, animationStyles) {
    let animationCode = ""
    if (animationStyles) {
      animationCode = `
/* Link animation */
@keyframes link-${animationType.value} {
${
  animationType.value === "pulse"
    ? "  0%, 100% { opacity: 1; }\n  50% { opacity: 0.6; }"
    : animationType.value === "bounce"
      ? "  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-5px); }"
      : animationType.value === "shake"
        ? "  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-2px); }\n  75% { transform: translateX(2px); }"
        : "  0% { color: #ff0000; }\n  16% { color: #ff8000; }\n  33% { color: #ffff00; }\n  50% { color: #00ff00; }\n  66% { color: #00ffff; }\n  83% { color: #0000ff; }\n  100% { color: #ff00ff; }"
}
}`
    }

    // Generate tap effect code
    let tapEffectCode = ""
    switch (tapEffect.value) {
      case "color":
        tapEffectCode = `color: ${activeStyles.color};`
        break
      case "scale":
        tapEffectCode = "transform: scale(0.95);"
        break
      case "opacity":
        tapEffectCode = "opacity: 0.7;"
        break
      case "background":
        tapEffectCode = `
  background-color: ${activeStyles.color}33;
  padding: 0 4px;
  border-radius: 4px;`
        break
      case "none":
        tapEffectCode = "/* No tap effect */"
        break
    }

    return `/* Base link style */
a {
  color: ${linkStyles.color};
  text-decoration: ${linkStyles.textDecoration};
  text-decoration-thickness: ${linkStyles.textDecorationThickness};
  text-underline-offset: ${linkStyles.textUnderlineOffset};
  transition: ${linkStyles.transition};${
    animationStyles
      ? `
  ${animationStyles.replace("animation:", "animation:")}`
      : ""
  }
}

/* Visited link style */
a:visited {
  color: ${visitedStyles.color};
}

/* Active link style (when clicked/tapped) */
a:active {
${tapEffectCode
  .split(";")
  .filter((s) => s.trim())
  .map((s) => "  " + s.trim() + ";")
  .join("\n")}
}${animationCode ? "\n\n" + animationCode : ""}`
  }

  // Copy to clipboard
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(cssCode.textContent)

    copyButton.classList.add("copied")
    copyButton.querySelector("span").textContent = "Copied!"

    setTimeout(() => {
      copyButton.classList.remove("copied")
      copyButton.querySelector("span").textContent = "Copy"
    }, 2000)
  })

  // Initialize preview
  updatePreview()
}

// Initialize conclusion section - CORRIGÉ (sans réseaux sociaux)
function initConclusion() {
  const interactiveWords = document.querySelectorAll(".interactive-word")
  const wordAnimation = document.getElementById("wordAnimation")
  const finalLine = document.getElementById("finalLine")
  const finalText = document.getElementById("finalText")

  // Word animations
  interactiveWords.forEach((word) => {
    word.addEventListener("click", () => {
      const wordType = word.getAttribute("data-word")

      // Clear previous animation
      wordAnimation.innerHTML = ""

      // Create animation based on word type
      switch (wordType) {
        case "passage":
          const passageAnimation = document.createElement("div")
          passageAnimation.classList.add("passage-animation")

          const passageLine = document.createElement("div")
          passageLine.classList.add("passage-line")

          passageAnimation.appendChild(passageLine)
          wordAnimation.appendChild(passageAnimation)
          break

        case "fil":
          const filAnimation = document.createElement("div")
          filAnimation.classList.add("fil-animation")

          filAnimation.innerHTML = `
              <svg class="fil-svg" viewBox="0 0 100 20">
                <path class="fil-path" d="M10,10 Q50,0 90,10" />
                <circle class="fil-circle" cx="10" cy="10" r="3" />
                <circle class="fil-circle" cx="90" cy="10" r="3" />
              </svg>
            `

          wordAnimation.appendChild(filAnimation)
          break

        case "porte":
          const porteAnimation = document.createElement("div")
          porteAnimation.classList.add("porte-animation")

          const porteContainer = document.createElement("div")
          porteContainer.classList.add("porte-container")

          const porteDoor = document.createElement("div")
          porteDoor.classList.add("porte-door", "porte-door-moving")

          const porteFrame = document.createElement("div")
          porteFrame.classList.add("porte-frame")

          porteContainer.appendChild(porteDoor)
          porteContainer.appendChild(porteFrame)
          porteAnimation.appendChild(porteContainer)

          wordAnimation.appendChild(porteAnimation)
          break
      }

      // Remove animation after delay
      setTimeout(() => {
        wordAnimation.innerHTML = ""
      }, 2000)
    })
  })

  // Final message animation
  const observeFinal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            finalLine.classList.add("animate")

            setTimeout(() => {
              finalText.classList.add("animate")
            }, 2000)
          }, 1000)
        }
      })
    },
    { threshold: 0.8 },
  )

  observeFinal.observe(document.querySelector(".final-message"))
}


  // Initialize all sections
  initIntro()
  initCardsTimeline()
  initPerceptionTest()
  initCssExperience()
  initConclusion()

  // Initial update
  updateProgress()

  // Ajouter les fonctions pour les boutons
  window.scrollToNextSection = () => {
    scrollToNextSection()
  }

  window.scrollToTimeline = () => {
    const cardsTimelineSection = document.getElementById("cards-timeline")
    cardsTimelineSection.scrollIntoView({ behavior: "smooth" })
  }
})
