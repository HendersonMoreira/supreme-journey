document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#currentYear");
  const form = document.querySelector("#contactForm");
  const message = document.querySelector("#formMessage");
  const nav = document.querySelector("#mainNav");
  const revealTargets = document.querySelectorAll(".intro-strip .container, .section-heading, .service-item, .about-visual, .about-copy, .process-step, .faq-intro, #faqAccordion .accordion-item, .contact-intro, .contact-form");

  year.textContent = new Date().getFullYear();

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach((element) => element.classList.add("scroll-reveal"));
    document.querySelectorAll(".service-item, .process-step, #faqAccordion .accordion-item").forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    document.body.classList.add("motion-ready");
    revealTargets.forEach((element) => revealObserver.observe(element));
  }

  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.classList.remove("is-success");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      message.textContent = "Confira os campos obrigatórios para continuar.";
      return;
    }

    message.textContent = "Dados validados. Conecte este formulário a um serviço de envio para receber solicitações.";
    message.classList.add("is-success");
    form.reset();
    form.classList.remove("was-validated");
  });
});