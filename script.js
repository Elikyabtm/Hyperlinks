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
    const timelineContinueBtn = document.getElementById("timelineContinueBtn")
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
    timelineContinueBtn.addEventListener("click", scrollToNextSection)
    perceptionContinueBtn.addEventListener("click", scrollToNextSection)
    cssContinueBtn.addEventListener("click", scrollToNextSection)
    restartButton.addEventListener("click", scrollToTop)
  
    // Initialize intro section
    function initIntro() {
      const backgroundPattern = document.getElementById("backgroundPattern")
      const introContainer = document.getElementById("introContainer")
      const particles = document.getElementById("particles")
  
      // Create background pattern
      for (let i = 0; i < 30; i++) {
        const patternItem = document.createElement("div")
        patternItem.classList.add("pattern-item")
        patternItem.style.fontSize = `${Math.random() * 3 + 1}rem`
        patternItem.style.top = `${Math.random() * 100}%`
        patternItem.style.left = `${Math.random() * 100}%`
        patternItem.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 20 - 10}deg)`
        patternItem.style.animationDelay = `${0.05 * i}s`
        patternItem.textContent = i % 3 === 0 ? "hyperlinks" : i % 3 === 1 ? "liens" : "links"
  
        backgroundPattern.appendChild(patternItem)
      }
  
      // Create particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div")
        particle.classList.add("particle")
  
        const size = Math.random() * 10 + 5
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
  
      // Add parallax effect
      introContainer.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = introContainer.getBoundingClientRect()
  
        const x = (clientX - left) / width - 0.5
        const y = (clientY - top) / height - 0.5
  
        const introContent = document.querySelector(".intro-content")
        introContent.style.transform = `translate(${x * -20}px, ${y * -20}px)`
      })
  
      // Add float animation
      const floatKeyframes = `
        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
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
    }
  
    // Initialize timeline section
    function initTimeline() {
      const timelineEvents = document.querySelectorAll(".timeline-event")
      const timelineMarkers = document.querySelectorAll(".timeline-marker")
      const demoLink = document.getElementById("demoLink")
      const demoResult = document.getElementById("demoResult")
  
      // Set year data attribute for markers
      timelineEvents.forEach((event, index) => {
        const year = event.getAttribute("data-year")
        const marker = event.querySelector(".timeline-marker")
        marker.setAttribute("data-year", year)
      })
  
      // Check which timeline event is in view
      const observeTimeline = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible")
  
              // Activate marker
              const marker = entry.target.querySelector(".timeline-marker")
              timelineMarkers.forEach((m) => m.classList.remove("active"))
              marker.classList.add("active")
            }
          })
        },
        { threshold: 0.5 },
      )
  
      timelineEvents.forEach((event) => {
        observeTimeline.observe(event)
      })
  
      // Demo link interaction
      let linkClicked = false
  
      demoLink.addEventListener("click", (e) => {
        e.preventDefault()
  
        if (!linkClicked) {
          demoLink.style.color = "var(--blue-600)"
  
          setTimeout(() => {
            demoLink.style.color = "var(--purple-600)"
          }, 1000)
  
          demoResult.classList.remove("hidden")
          linkClicked = true
        } else {
          demoLink.style.color = ""
          demoResult.classList.add("hidden")
          linkClicked = false
        }
      })
    }
  
    // Initialize perception test section
    function initPerceptionTest() {
      const startGameBtn = document.getElementById("startGameBtn")
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
  
      // Generate rounds
      function generateRounds() {
        rounds = []
  
        for (let i = 0; i < 5; i++) {
          const shuffledWords = [...words].sort(() => Math.random() - 0.5)
          const shuffledColors = [...colors].sort(() => Math.random() - 0.5)
          const shuffledColorClasses = [...colorClasses].sort(() => Math.random() - 0.5)
  
          // Make sure the target word "lien" is included
          const targetIndex = Math.floor(Math.random() * 9) // 0-8
  
          const roundWords = shuffledWords.slice(0, 9).map((word, index) => {
            return {
              text: index === targetIndex ? "link" : word,
              color: shuffledColors[index % shuffledColors.length],
              colorClass: shuffledColorClasses[index % shuffledColorClasses.length],
              isTarget: index === targetIndex,
            }
          })
  
          rounds.push({
            words: roundWords,
            targetIndex,
          })
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
  
      // Start game
      function startGame() {
        generateRounds()
        currentRound = 0
        reactionTimes = []
  
        gameArea.classList.remove("hidden")
        displayRound()
        startTime = Date.now()
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
            }
          })
  
          wordsGrid.appendChild(button)
        })
      }
  
      // Handle word click
      function handleWordClick() {
        const endTime = Date.now()
        const reactionTime = endTime - startTime
  
        reactionTimes.push({
          time: reactionTime,
          isBlue: rounds[currentRound].words[rounds[currentRound].targetIndex].colorClass === "text-blue-500",
        })
  
        if (currentRound < 4) {
          currentRound++
          displayRound()
          startTime = Date.now()
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
  
        avgReactionTime.textContent = `Average reaction time : ${averageTime} ms`
  
        if (blueTimes.length > 0) {
          blueReactionTime.textContent = `Average for blue links : ${blueAverage} ms`
        }
  
        if (otherTimes.length > 0) {
          otherReactionTime.textContent = `Average for other colors : ${otherAverage} ms`
        }
  
        conclusion.textContent = isBlueFaster
          ? "You spotted the blue links faster! Perhaps this is why blue has become the standard color for links."
          : "Interesting! You spotted other colors faster than blue. But historically, blue was chosen because it stands out well and was rare in early websites."
  
        gameResults.classList.remove("hidden")
        perceptionContinueBtn.classList.remove("hidden")
      }
    }
  
    // Initialize CSS Experience section
    function initCssExperience() {
      const tabButtons = document.querySelectorAll(".tab-button")
      const tabContents = document.querySelectorAll(".tab-content")
  
      // Link color controls
      const linkColor = document.getElementById("linkColor")
      const linkColorValue = document.getElementById("linkColorValue")
      const visitedColor = document.getElementById("visitedColor")
      const visitedColorValue = document.getElementById("visitedColorValue")
  
      // Underline controls
      const hasUnderline = document.getElementById("hasUnderline")
      const underlineControls = document.getElementById("underlineControls")
      const underlineStyle = document.getElementById("underlineStyle")
      const underlineThickness = document.getElementById("underlineThickness")
      const thicknessValue = document.getElementById("thicknessValue")
  
      // Hover effect controls
      const hoverEffect = document.getElementById("hoverEffect")
  
      // Animation controls
      const transitionDuration = document.getElementById("transitionDuration")
      const durationValue = document.getElementById("durationValue")
  
      // Preview elements
      const normalLink = document.getElementById("normalLink")
      const visitedLink = document.getElementById("visitedLink")
      const hoverLink = document.getElementById("hoverLink")
  
      // Code display
      const cssCode = document.getElementById("cssCode")
      const copyButton = document.getElementById("copyButton")
  
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
  
      // Update duration value
      transitionDuration.addEventListener("input", () => {
        durationValue.textContent = transitionDuration.value
        updatePreview()
      })
  
      // Update preview on any change
      ;[underlineStyle, hoverEffect].forEach((control) => {
        control.addEventListener("change", updatePreview)
      })
  
      // Update preview
      function updatePreview() {
        const linkStyles = {
          color: linkColor.value,
          textDecoration: hasUnderline.checked ? `${underlineStyle.value} underline` : "none",
          textDecorationThickness: `${underlineThickness.value}px`,
          transition: `all ${transitionDuration.value}s ease`,
        }
  
        const visitedStyles = {
          ...linkStyles,
          color: visitedColor.value,
        }
  
        // Apply styles to preview links
        applyStyles(normalLink, linkStyles)
        applyStyles(visitedLink, visitedStyles)
        applyStyles(hoverLink, linkStyles)
  
        // Generate hover styles
        let hoverStyles = ""
  
        switch (hoverEffect.value) {
          case "underline":
            hoverStyles = "text-decoration: underline;"
            break
          case "color":
            hoverStyles = "color: var(--red-500);"
            break
          case "background":
            hoverStyles = `
              background-color: var(--blue-100);
              padding: 0 4px;
              border-radius: 2px;
            `
            break
          case "scale":
            hoverStyles = "transform: scale(1.05);"
            break
          case "shadow":
            hoverStyles = "text-shadow: 0 0 2px rgba(59, 130, 246, 0.5);"
            break
        }
  
        // Add hover effect
        const styleElement = document.getElementById("hover-style") || document.createElement("style")
        styleElement.id = "hover-style"
        styleElement.textContent = `
          #hoverLink:hover {
            ${hoverStyles}
          }
        `
  
        if (!document.getElementById("hover-style")) {
          document.head.appendChild(styleElement)
        }
  
        // Generate CSS code
        const code = generateCssCode(linkStyles, visitedStyles, hoverEffect.value)
        cssCode.textContent = code
      }
  
      // Apply styles to element
      function applyStyles(element, styles) {
        Object.assign(element.style, styles)
      }
  
      // Generate CSS code
      function generateCssCode(linkStyles, visitedStyles, hoverEffectValue) {
        let hoverStyles = ""
  
        switch (hoverEffectValue) {
          case "underline":
            hoverStyles = "  text-decoration: underline;"
            break
          case "color":
            hoverStyles = "  color: #ef4444;"
            break
          case "background":
            hoverStyles = `  background-color: #dbeafe;
    padding: 0 4px;
    border-radius: 2px;`
            break
          case "scale":
            hoverStyles = "  transform: scale(1.05);"
            break
          case "shadow":
            hoverStyles = "  text-shadow: 0 0 2px rgba(59, 130, 246, 0.5);"
            break
        }
  
        return `/* Style de base du lien */
  a {
    color: ${linkStyles.color};
    text-decoration: ${linkStyles.textDecoration};
    text-decoration-thickness: ${linkStyles.textDecorationThickness};
    transition: ${linkStyles.transition};
  }
  
  /* Style au survol */
  a:hover {
  ${hoverStyles}
  }
  
  /* Style des liens visités */
  a:visited {
    color: ${visitedStyles.color};
  }`
      }
  
      // Copy to clipboard
      copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(cssCode.textContent)
  
        copyButton.classList.add("copied")
        copyButton.querySelector("span").textContent = "Copié !"
  
        setTimeout(() => {
          copyButton.classList.remove("copied")
          copyButton.querySelector("span").textContent = "Copier"
        }, 2000)
      })
  
      // Initialize preview
      updatePreview()
    }
  
    // Initialize conclusion section
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
    initTimeline()
    initPerceptionTest()
    initCssExperience()
    initConclusion()
  
    // Initial update
    updateProgress()
  })
  