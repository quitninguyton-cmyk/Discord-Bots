```javascript
// 🌊 CREATOR HQ — OCEAN THEME SCRIPT
// Fixed bubble parallax speeds

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

    // ⭐ Give this bubble ONE permanent parallax speed
    bubble.dataset.parallaxSpeed =
      (Math.random() * 0.15 + 0.05).toFixed(3);

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 15000);
  }


  // Create bubbles
  setInterval(() => {

    if (Math.random() > 0.25) {
      createBubble();
    }

  }, 500);


  // Create starting bubbles
  for (let i = 0; i < 20; i++) {
    createBubble();
  }


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
  // 🌊 WATER CLICK RIPPLE
  // ==============================

  document.addEventListener("click", event => {

    const ripple =
      document.createElement("div");

    ripple.className =
      "water-ripple";

    ripple.style.left =
      event.clientX + "px";

    ripple.style.top =
      event.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);

  });


  // ==============================
  // 🎮 BUTTON EFFECT
  // ==============================

  document.querySelectorAll(
    ".main-button, .second-button, .join-small"
  ).forEach(button => {

    button.addEventListener("click", () => {

      button.classList.add(
        "button-clicked"
      );

      setTimeout(() => {

        button.classList.remove(
          "button-clicked"
        );

      }, 150);

    });

  });


  // ==============================
  // 🐚 CARD 3D WATER EFFECT
  // ==============================

  document.querySelectorAll(
    ".game-card, .event-card, .team-card"
  ).forEach(card => {

    card.addEventListener(
      "mousemove",
      event => {

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          ((y - centerY) / centerY) * -4;

        const rotateY =
          ((x - centerX) / centerX) * 4;

        card.style.transform =
          `perspective(700px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-8px)`;

      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform =
          "perspective(700px) rotateX(0deg) rotateY(0deg)";

      }
    );

  });


  // ==============================
  // 🌊 FIXED PARALLAX SYSTEM
  // ==============================

  let ticking = false;

  function updateParallax() {

    const bubbles =
      document.querySelectorAll(
        ".ocean-bubble"
      );

    bubbles.forEach(bubble => {

      // ⭐ Use the speed saved when the bubble was created
      const speed =
        parseFloat(
          bubble.dataset.parallaxSpeed
        ) || 0.1;

      const movement =
        window.scrollY * speed;

      bubble.style.setProperty(
        "--parallax-y",
        `${movement}px`
      );

    });

    ticking = false;
  }


  window.addEventListener(
    "scroll",
    () => {

      if (!ticking) {

        window.requestAnimationFrame(
          updateParallax
        );

        ticking = true;
      }

    },
    { passive: true }
  );


  // ==============================
  // 🌊 PAGE START
  // ==============================

  updateParallax();

  console.log(
    "🌊 Creator HQ Ocean Theme loaded!"
  );

});
```
```javascript
// ==============================
// 🌊 OCEAN MUSIC PLAYER
// ==============================

const oceanMusic =
  document.getElementById("oceanMusic");

const musicToggle =
  document.getElementById("musicToggle");

const musicStatus =
  document.getElementById("musicStatus");

const volumeControl =
  document.getElementById("volumeControl");

if (oceanMusic && musicToggle) {

  // Starting volume
  oceanMusic.volume =
    Number(volumeControl.value);

  // Play / pause
  musicToggle.addEventListener("click", () => {

    if (oceanMusic.paused) {

      oceanMusic.play()
        .then(() => {

          musicToggle.textContent = "⏸️";
          musicStatus.textContent =
            "Ocean Vibes Playing";

        })
        .catch(() => {

          musicStatus.textContent =
            "Click again to play";

        });

    } else {

      oceanMusic.pause();

      musicToggle.textContent = "▶️";
      musicStatus.textContent =
        "Music Off";

    }

  });


  // Volume
  volumeControl.addEventListener(
    "input",
    () => {

      oceanMusic.volume =
        Number(volumeControl.value);

    }
  );

}
```
