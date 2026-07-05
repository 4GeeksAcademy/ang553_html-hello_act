(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");

  const navLinks = Array.from(document.querySelectorAll("a[data-section]"));
  const sections = Array.from(document.querySelectorAll("main > section"));
  const title = document.getElementById("active-section-title");

  const activeClasses = [
    "border",
    "border-blue-200",
    "bg-blue-50",
    "text-blue-700",
    "dark:border-blue-400/30",
    "dark:bg-blue-500/20",
    "dark:text-blue-100",
  ];
  const inactiveClasses = ["border-transparent", "text-slate-600", "dark:text-slate-300"];

  function updateThemeButton() {
    const isDark = root.classList.contains("dark");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeLabel.textContent = isDark ? "Dark" : "Light";
  }

  themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    updateThemeButton();
  });

  updateThemeButton();

  function updateActiveLink(activeLink) {
    navLinks.forEach((link) => {
      link.classList.remove(...activeClasses, ...inactiveClasses);
      if (link === activeLink) {
        link.classList.add(...activeClasses);
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.add(...inactiveClasses);
        link.setAttribute("aria-current", "false");
      }
    });
  }

  function updateActiveSection(sectionId, sectionTitle) {
    sections.forEach((section) => {
      section.classList.toggle("hidden", section.id !== sectionId);
    });
    title.textContent = sectionTitle;
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = link.dataset.section;
      const sectionTitle = link.dataset.title;
      updateActiveSection(sectionId, sectionTitle);
      updateActiveLink(link);
    });
  });
})();

(function () {
  const usersSection = document.getElementById("users");
  const toggleButtons = Array.from(usersSection.querySelectorAll(".users-menu-toggle"));
  const modal = document.getElementById("user-detail-modal");
  const closeButton = document.getElementById("user-detail-close");
  const backdrop = document.getElementById("user-detail-backdrop");

  const modalFields = {
    name: document.getElementById("modal-user-name"),
    email: document.getElementById("modal-user-email"),
    plan: document.getElementById("modal-user-plan"),
    status: document.getElementById("modal-user-status"),
    company: document.getElementById("modal-user-company"),
  };

  let openDropdown = null;

  function closeDropdown() {
    if (!openDropdown) {
      return;
    }
    openDropdown.menu.classList.add("hidden");
    openDropdown.button.setAttribute("aria-expanded", "false");
    openDropdown = null;
  }

  function openUserModal(row) {
    modalFields.name.textContent = row.dataset.userName;
    modalFields.email.textContent = row.dataset.userEmail;
    modalFields.plan.textContent = row.dataset.userPlan;
    modalFields.status.textContent = row.dataset.userStatus;
    modalFields.company.textContent = row.dataset.userCompany;
    modal.classList.remove("hidden");
  }

  function closeUserModal() {
    modal.classList.add("hidden");
  }

  toggleButtons.forEach((button) => {
    const wrapper = button.closest(".relative");
    const menu = wrapper.querySelector(".users-dropdown");

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      if (openDropdown && openDropdown.button === button) {
        closeDropdown();
        return;
      }

      closeDropdown();
      menu.classList.remove("hidden");
      button.setAttribute("aria-expanded", "true");
      openDropdown = { button, menu };
    });

    menu.addEventListener("click", (event) => {
      const actionButton = event.target.closest(".users-action");
      if (!actionButton) {
        return;
      }

      const action = actionButton.dataset.action;
      const row = button.closest("tr");
      closeDropdown();

      if (action === "detail") {
        openUserModal(row);
      }
    });
  });

  closeButton.addEventListener("click", closeUserModal);
  backdrop.addEventListener("click", closeUserModal);

  document.addEventListener("click", (event) => {
    if (openDropdown && !openDropdown.menu.contains(event.target) && !openDropdown.button.contains(event.target)) {
      closeDropdown();
    }
  });
})();

(function () {
  const agentsSection = document.getElementById("agents");
  const agentCards = Array.from(agentsSection.querySelectorAll("[data-agent-card]"));
  const modal = document.getElementById("agent-config-modal");
  const closeButton = document.getElementById("agent-config-close");
  const backdrop = document.getElementById("agent-config-backdrop");
  const modalName = document.getElementById("modal-agent-name");
  const modalOwner = document.getElementById("modal-agent-owner");
  const modalPrompt = document.getElementById("modal-agent-prompt");

  let openDropdown = null;

  function closeAgentDropdown() {
    if (!openDropdown) {
      return;
    }
    openDropdown.menu.classList.add("hidden");
    openDropdown.button.setAttribute("aria-expanded", "false");
    openDropdown = null;
  }

  function openAgentModal(card) {
    modalName.textContent = card.dataset.agentName;
    modalOwner.textContent = card.dataset.agentOwner;
    modalPrompt.value = card.dataset.agentPrompt;
    modal.classList.remove("hidden");
  }

  function closeAgentModal() {
    modal.classList.add("hidden");
  }

  function toggleSkills(card) {
    const button = card.querySelector(".agents-skills-toggle");
    const panel = card.querySelector(".agents-skills-panel");
    const arrow = card.querySelector(".agents-skills-arrow");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    panel.classList.toggle("max-h-0", isExpanded);
    panel.classList.toggle("opacity-0", isExpanded);
    panel.classList.toggle("max-h-40", !isExpanded);
    panel.classList.toggle("opacity-100", !isExpanded);
    arrow.classList.toggle("rotate-180", !isExpanded);
  }

  agentCards.forEach((card) => {
    const skillsToggle = card.querySelector(".agents-skills-toggle");
    const menuButton = card.querySelector(".agents-menu-toggle");
    const menu = card.querySelector(".agents-dropdown");

    skillsToggle.addEventListener("click", () => {
      toggleSkills(card);
    });

    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();

      if (openDropdown && openDropdown.button === menuButton) {
        closeAgentDropdown();
        return;
      }

      closeAgentDropdown();
      menu.classList.remove("hidden");
      menuButton.setAttribute("aria-expanded", "true");
      openDropdown = { button: menuButton, menu };
    });

    menu.addEventListener("click", (event) => {
      const actionButton = event.target.closest(".agents-action");
      if (!actionButton) {
        return;
      }

      const action = actionButton.dataset.action;
      closeAgentDropdown();

      if (action === "configure") {
        openAgentModal(card);
      }
    });
  });

  closeButton.addEventListener("click", closeAgentModal);
  backdrop.addEventListener("click", closeAgentModal);

  document.addEventListener("click", (event) => {
    if (openDropdown && !openDropdown.menu.contains(event.target) && !openDropdown.button.contains(event.target)) {
      closeAgentDropdown();
    }
  });
})();

(function () {
  const skillsSection = document.getElementById("skills");
  const skillCards = Array.from(skillsSection.querySelectorAll("[data-skill-name]"));
  const modal = document.getElementById("skill-detail-modal");
  const closeButton = document.getElementById("skill-detail-close");
  const backdrop = document.getElementById("skill-detail-backdrop");
  const modalName = document.getElementById("modal-skill-name");
  const modalDescription = document.getElementById("modal-skill-description");
  const modalCount = document.getElementById("modal-skill-count");

  let openDropdown = null;

  function closeSkillDropdown() {
    if (!openDropdown) {
      return;
    }
    openDropdown.menu.classList.add("hidden");
    openDropdown.button.setAttribute("aria-expanded", "false");
    openDropdown = null;
  }

  function openSkillModal(card) {
    modalName.textContent = card.dataset.skillName;
    modalDescription.textContent = card.dataset.skillDescription;
    modalCount.textContent = card.dataset.skillCount;
    modal.classList.remove("hidden");
  }

  function closeSkillModal() {
    modal.classList.add("hidden");
  }

  skillCards.forEach((card) => {
    const menuButton = card.querySelector(".skills-menu-toggle");
    const menu = card.querySelector(".skills-dropdown");

    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();

      if (openDropdown && openDropdown.button === menuButton) {
        closeSkillDropdown();
        return;
      }

      closeSkillDropdown();
      menu.classList.remove("hidden");
      menuButton.setAttribute("aria-expanded", "true");
      openDropdown = { button: menuButton, menu };
    });

    menu.addEventListener("click", (event) => {
      const actionButton = event.target.closest(".skills-action");
      if (!actionButton) {
        return;
      }

      const action = actionButton.dataset.action;
      closeSkillDropdown();

      if (action === "detail") {
        openSkillModal(card);
      }
    });
  });

  closeButton.addEventListener("click", closeSkillModal);
  backdrop.addEventListener("click", closeSkillModal);

  document.addEventListener("click", (event) => {
    if (openDropdown && !openDropdown.menu.contains(event.target) && !openDropdown.button.contains(event.target)) {
      closeSkillDropdown();
    }
  });
})();

(function () {
  const contractsSection = document.getElementById("contracts");
  const contractRows = Array.from(contractsSection.querySelectorAll("tbody tr"));
  const modal = document.getElementById("contract-detail-modal");
  const closeButton = document.getElementById("contract-detail-close");
  const backdrop = document.getElementById("contract-detail-backdrop");

  const modalClient = document.getElementById("modal-contract-client");
  const modalAgent = document.getElementById("modal-contract-agent");
  const modalStart = document.getElementById("modal-contract-start");
  const modalEnd = document.getElementById("modal-contract-end");
  const modalSkills = document.getElementById("modal-contract-skills");
  const modalSubtotal = document.getElementById("modal-contract-subtotal");
  const modalDiscount = document.getElementById("modal-contract-discount");
  const modalTotal = document.getElementById("modal-contract-total");

  let openDropdown = null;

  function formatCurrency(value) {
    return `$${Number(value).toLocaleString("en-US")}`;
  }

  function closeContractDropdown() {
    if (!openDropdown) {
      return;
    }
    openDropdown.menu.classList.add("hidden");
    openDropdown.button.setAttribute("aria-expanded", "false");
    openDropdown = null;
  }

  function openContractModal(row) {
    modalClient.textContent = row.dataset.contractClient;
    modalAgent.textContent = row.dataset.contractAgent;
    modalStart.textContent = row.dataset.contractStart;
    modalEnd.textContent = row.dataset.contractEnd;

    const skills = row.dataset.contractSkills
      .split("|")
      .map((item) => item.split("::"))
      .filter((item) => item.length === 2);

    modalSkills.innerHTML = "";
    skills.forEach(([skillName, price]) => {
      const li = document.createElement("li");
      li.className = "flex items-center justify-between px-4 py-3 text-sm";

      const skill = document.createElement("span");
      skill.className = "font-medium text-slate-700";
      skill.textContent = skillName;

      const amount = document.createElement("span");
      amount.className = "font-semibold text-slate-900";
      amount.textContent = formatCurrency(price);

      li.append(skill, amount);
      modalSkills.appendChild(li);
    });

    modalSubtotal.textContent = formatCurrency(row.dataset.contractSubtotal);
    modalDiscount.textContent = `${row.dataset.contractDiscountLabel} (${formatCurrency(row.dataset.contractDiscountAmount)})`;
    modalTotal.textContent = formatCurrency(row.dataset.contractTotal);

    modal.classList.remove("hidden");
  }

  function closeContractModal() {
    modal.classList.add("hidden");
  }

  contractRows.forEach((row) => {
    const menuButton = row.querySelector(".contracts-menu-toggle");
    const menu = row.querySelector(".contracts-dropdown");

    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();

      if (openDropdown && openDropdown.button === menuButton) {
        closeContractDropdown();
        return;
      }

      closeContractDropdown();
      menu.classList.remove("hidden");
      menuButton.setAttribute("aria-expanded", "true");
      openDropdown = { button: menuButton, menu };
    });

    menu.addEventListener("click", (event) => {
      const actionButton = event.target.closest(".contracts-action");
      if (!actionButton) {
        return;
      }

      const action = actionButton.dataset.action;
      closeContractDropdown();

      if (action === "detail") {
        openContractModal(row);
      }
    });
  });

  closeButton.addEventListener("click", closeContractModal);
  backdrop.addEventListener("click", closeContractModal);

  document.addEventListener("click", (event) => {
    if (openDropdown && !openDropdown.menu.contains(event.target) && !openDropdown.button.contains(event.target)) {
      closeContractDropdown();
    }
  });
})();

(function () {
  const errorsSection = document.getElementById("errors");
  const errorRows = Array.from(errorsSection.querySelectorAll(".error-row"));
  const modal = document.getElementById("error-detail-modal");
  const closeButton = document.getElementById("error-detail-close");
  const backdrop = document.getElementById("error-detail-backdrop");

  const modalTimestamp = document.getElementById("modal-error-timestamp");
  const modalAgent = document.getElementById("modal-error-agent");
  const modalType = document.getElementById("modal-error-type");
  const modalSeverity = document.getElementById("modal-error-severity");
  const modalDescription = document.getElementById("modal-error-description");
  const modalTrace = document.getElementById("modal-error-trace");

  let openDropdown = null;

  function closeErrorDropdown() {
    if (!openDropdown) {
      return;
    }
    openDropdown.menu.classList.add("hidden");
    openDropdown.button.setAttribute("aria-expanded", "false");
    openDropdown = null;
  }

  function openErrorModal(row) {
    modalTimestamp.textContent = row.dataset.errorTimestamp;
    modalAgent.textContent = row.dataset.errorAgent;
    modalType.textContent = row.dataset.errorType;
    modalSeverity.textContent = row.dataset.errorSeverity;
    modalDescription.textContent = row.dataset.errorDescription;
    modalTrace.textContent = row.dataset.errorTrace;
    modal.classList.remove("hidden");
  }

  function closeErrorModal() {
    modal.classList.add("hidden");
  }

  function markAsResolved(row) {
    row.dataset.errorState = "resuelto";
    row.classList.add("opacity-80");

    const stateBadge = row.querySelector(".error-state-badge");
    stateBadge.textContent = "Resuelto";
    stateBadge.className =
      "error-state-badge mt-1 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700";
  }

  errorRows.forEach((row) => {
    const menuButton = row.querySelector(".errors-menu-toggle");
    const menu = row.querySelector(".errors-dropdown");

    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();

      if (openDropdown && openDropdown.button === menuButton) {
        closeErrorDropdown();
        return;
      }

      closeErrorDropdown();
      menu.classList.remove("hidden");
      menuButton.setAttribute("aria-expanded", "true");
      openDropdown = { button: menuButton, menu };
    });

    menu.addEventListener("click", (event) => {
      const actionButton = event.target.closest(".errors-action");
      if (!actionButton) {
        return;
      }

      const action = actionButton.dataset.action;
      closeErrorDropdown();

      if (action === "detail") {
        openErrorModal(row);
      }

      if (action === "resolve") {
        markAsResolved(row);
      }
    });
  });

  closeButton.addEventListener("click", closeErrorModal);
  backdrop.addEventListener("click", closeErrorModal);

  document.addEventListener("click", (event) => {
    if (openDropdown && !openDropdown.menu.contains(event.target) && !openDropdown.button.contains(event.target)) {
      closeErrorDropdown();
    }
  });
})();
