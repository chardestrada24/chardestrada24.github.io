// ===== Portfolio interactions =====
(function () {
  "use strict";

  // ---- Project data (rendered into #projectsGrid) ----
  var projects = [
    {
      title: "E-Commerce E2E Suite",
      img: "images/project1.jpg",
      desc: "Cypress end-to-end suite covering search, cart, and checkout flows, with cross-browser runs and CI reporting.",
      tags: ["Cypress", "JavaScript", "CI/CD"],
      demo: "pages/project-detail.html",
      code: "#"
    },
    {
      title: "Playwright Regression Framework",
      img: "images/project2.jpg",
      desc: "Scalable Playwright framework using the Page Object Model, parallel execution, and visual regression checks.",
      tags: ["Playwright", "TypeScript", "POM"],
      demo: "#",
      code: "#"
    },
    {
      title: "API Automation Collection",
      img: "images/project3.jpg",
      desc: "Data-driven REST API test suites in Postman and Bruno with contract validation and automated environment runs.",
      tags: ["Postman", "Bruno", "REST"],
      demo: "#",
      code: "#"
    },
    {
      title: "JMeter Performance Harness",
      img: "images/project4.jpg",
      desc: "Load and stress test plans in JMeter that validate SLAs, surface bottlenecks, and trend response times over releases.",
      tags: ["JMeter", "Performance", "Load"],
      demo: "#",
      code: "#"
    },
    {
      title: "Mobile Automation with Appium",
      img: "images/project5.jpg",
      desc: "Cross-platform Appium suite for Android and iOS apps, running on real devices and emulators in the pipeline.",
      tags: ["Appium", "Java", "Mobile"],
      demo: "#",
      code: "#"
    },
    {
      title: "BDD Test Framework",
      img: "images/project6.jpg",
      desc: "Behavior-driven test framework with Cucumber and living documentation that keeps QA and product aligned.",
      tags: ["Cucumber", "BDD", "TestNG"],
      demo: "#",
      code: "#"
    }
  ];

  // ---- Render project cards ----
  function renderProjects() {
    var grid = document.getElementById("projectsGrid");
    if (!grid) return;

    var html = projects
      .map(function (p) {
        var tags = p.tags
          .map(function (t) {
            return "<span>" + t + "</span>";
          })
          .join("");

        return (
          '<article class="project-card reveal">' +
          '<div class="project-thumb">' +
          '<img src="' + p.img + '" alt="' + p.title + ' screenshot" loading="lazy" />' +
          "</div>" +
          '<div class="project-body">' +
          "<h3>" + p.title + "</h3>" +
          "<p>" + p.desc + "</p>" +
          '<div class="project-tags">' + tags + "</div>" +
          '<div class="project-links">' +
          '<a href="' + p.demo + '">Live Demo</a>' +
          '<a href="' + p.code + '">Source Code</a>' +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    grid.innerHTML = html;
  }

  // ---- Mobile nav toggle ----
  function initNav() {
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    if (!toggle || !links) return;

    function closeMenu() {
      links.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // ---- Navbar shadow on scroll ----
  function initNavbarScroll() {
    var navbar = document.getElementById("navbar");
    if (!navbar) return;
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  // ---- Scroll reveal via IntersectionObserver ----
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- Contact form validation (demo, no backend) ----
  function initForm() {
    var form = document.getElementById("contactForm");
    var status = document.getElementById("formStatus");
    if (!form) return;

    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var fields = [
        { el: form.name, check: function (v) { return v.trim().length > 1; } },
        { el: form.email, check: function (v) { return emailRe.test(v.trim()); } },
        { el: form.message, check: function (v) { return v.trim().length > 4; } }
      ];

      fields.forEach(function (f) {
        var wrap = f.el.closest(".form-field");
        if (!f.check(f.el.value)) {
          valid = false;
          if (wrap) wrap.classList.add("invalid");
        } else if (wrap) {
          wrap.classList.remove("invalid");
        }
      });

      if (!valid) {
        status.textContent = "Please fill out all fields with valid information.";
        status.className = "form-status error";
        return;
      }

      status.textContent = "Thanks! Your message has been sent (demo only).";
      status.className = "form-status success";
      form.reset();
    });
  }

  // ---- Theme toggle (light / dark) ----
  function initTheme() {
    var btn = document.getElementById("themeToggle");
    var root = document.documentElement;

    function apply(theme) {
      root.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {
        /* storage unavailable; theme still applies for this session */
      }
      if (btn) {
        btn.setAttribute(
          "aria-label",
          theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
        );
      }
    }

    // Ensure an attribute exists even if the head script didn't run.
    if (!root.getAttribute("data-theme")) apply("light");

    if (btn) {
      btn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        apply(current === "dark" ? "light" : "dark");
      });
    }
  }

  // ---- Footer year ----
  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  // ---- Init ----
  document.addEventListener("DOMContentLoaded", function () {
    renderProjects();
    initNav();
    initNavbarScroll();
    initReveal(); // called after renderProjects so project cards are observed
    initForm();
    initTheme();
    initYear();
  });
})();
