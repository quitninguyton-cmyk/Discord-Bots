```javascript
// 🌊 CREATOR HQ — OCEAN THEME SCRIPT
// Discord: https://discord.gg/Rb64dunDJ

document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // 🌊 SMOOTH SCROLLING
  // ==============================

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  // ==============================
  // 🫧 BUBBLE GENERATOR
  // ==============================

  function createBubble() {

    const bubble = document.createElement("div");

    bubble.className = "ocean-bubble";

    const size = Math.random() * 25 + 5;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left =
      Math.random() * 100 + "vw";

    bubble.style.bottom = "-50px";

    bubble.style.animationDuration =
      Math.random() * 8 + 6 + "s";

    bubble.style.opacity =
      Math.random() * 0.6 + 0.2;

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 15000);
  }


  // Make bubbles continuously
  setInterval(() => {

    if (Math.random() > 0.25) {
      createBubble();
    }

  }, 500);


  // ==============================
  // 🐠 FLOATING SEA CREATURES
  // ==============================

  const creatures = [
    "🐠",
    "🐟",
    "🐬",
    "🦈",
    "🐙",
    "🪼",
    "🐳",
    "🦀"
  ];

  function createCreature() {

    const creature =
      document.createElement("div");

    creature.className =
      "floating-creature";

    creature.textContent =
      creatures[
        Math.floor(
          Math.random() * creatures.length
        )
      ];

    creature.style.top =
      Math.random() * 80 + 10 + "vh";

    creature.style.fontSize =
      Math.random() * 25 + 20 + "px";

    creature.style.animationDuration =
      Math.random() * 12 + 12 + "s";

    document.body.appendChild(creature);

    setTimeout(() => {
      creature.remove();
    }, 25000);
  }


  setInterval(() => {

    if (Math.random() > 0.4) {
      createCreature();
    }

  }, 7000);


  // ==============================
  // 🌊 WAVE EFFECT
  // ==============================

  function createWave() {

    const wave =
      document.createElement("div");

    wave.className = "ocean-wave";

    document.body.appendChild(wave);

    setTimeout(() => {
      wave.remove();
    }, 5000);
  }

  createWave();


  // ==============================
  // 💧 WATER CLICK EFFECT
  // ==============================

  document.addEventListener("click", event => {

    const ripple =
      document.createElement("div");
```

