// ================================
// MOBILE MENU
// ================================

const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

  navLinks.classList.toggle("mobile-active");

});


// ================================
// CLOSE MOBILE MENU
// ================================

document.querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove(
        "mobile-active"
      );

    });

  });


// ================================
// SCROLL ANIMATION
// ================================

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "show"
          );

        }

      });

    },
    {
      threshold: 0.15
    }
  );


document
  .querySelectorAll(
    ".skill-card, .project-card, .timeline-item"
  )
  .forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

  });
