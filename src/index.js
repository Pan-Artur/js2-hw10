// Task 1

const timerOfInterval = () => {
  const overlayEl = document.querySelector(".modal-overlay");
  const coupleEl = document.querySelector(".modal-couple");

  let count = 0;

  const showModal = () => {
    if (count < 5) {
      overlayEl.classList.remove("hidden");

      coupleEl.addEventListener("click", modalClose);
    }
  };

  const interval = setInterval(() => {
    if (overlayEl.classList.contains("hidden")) {
      overlayEl.classList.remove("hidden");
      clearInterval(interval);
    }
  }, 1000);

  const modalClose = (e) => {
    if (
      e.target.classList.contains("modal-yes") ||
      e.target.classList.contains("modal-no")
    ) {
      overlayEl.classList.add("hidden");
      coupleEl.removeEventListener("click", modalClose);
      count += 1;

      if (count < 5) {
        setTimeout(startInterval, 1000);
      }
    }
  };

  const startInterval = () => {
    setTimeout(() => {
      showModal();
    }, 1000);
  };

  startInterval();
};

timerOfInterval();

// Task 2

const animateElements = () => {
  const images = document.querySelectorAll(".animate-image");
  let currentIndex = 0;

  setInterval(() => {
    images.forEach((img) => img.classList.remove("animated"));

    images[currentIndex].classList.add("animated");

    currentIndex = (currentIndex + 1) % images.length;
  }, 1500);
};

animateElements();

// Task 3

const interactiveGame = () => {
  const buttonEl = document.querySelector(".interactive-button");
  const startButtonEl = document.querySelector(".start-button");
  const pointsEl = document.querySelector(".interactive-result");
  const timerEl = document.querySelector(".interactive-timer");
  const overlayEl = document.querySelector(".modal-i-overlay");
  const resultEl = document.querySelector(".modal-i-title");
  const closeEl = document.querySelector(".modal-i-close");

  let roundPoints = 0;
  let totalPoints = 0;
  let timer = 10;
  const initialTimer = timer;

  function updatePoints() {
    roundPoints++;
    totalPoints++;
  }

  function startTimer() {
    startButtonEl.setAttribute("disabled", "");
    buttonEl.removeAttribute("disabled");

    timer = initialTimer;
    timerEl.textContent = timer;

    const interval = setInterval(() => {
      timer--;
      timerEl.textContent = timer;

      if (timer === 0) {
        clearInterval(interval);

        buttonEl.setAttribute("disabled", "");
        startButtonEl.removeAttribute("disabled");

        pointsEl.textContent = `Зароблено: ${totalPoints} $ITCOIN`;
        resultEl.textContent = `Ви заробили ${roundPoints} $ITCOIN, усього лише за ${initialTimer} секунд`;
        overlayEl.classList.remove("hidden");
      }
    }, 1000);
  }

  startButtonEl.addEventListener("click", () => {
    roundPoints = 0;
    startTimer();
  });

  buttonEl.addEventListener("click", updatePoints);

  closeEl.addEventListener("click", () => {
    overlayEl.classList.add("hidden");
  });
};

interactiveGame();

// Task 4

const timeInput = document.querySelector(".time-input");
const startButton = document.querySelector(".time-start-button");
const message = document.querySelector(".message");

startButton.addEventListener("click", () => {
  const time = parseInt(timeInput.value, 10);

  if (isNaN(time) || time <= 0) {
    message.textContent = "Будь ласка, введіть коректний час!";
    return;
  }

  message.textContent = `Очікуйте ${time} секунд...`;

  setTimeout(() => {
    message.textContent = "Час вийшов!";
  }, time * 1000);
});
