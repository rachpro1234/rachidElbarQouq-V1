/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* =================== NUMBERS INCREMENT ANIMATION =====================*/
const numEle = document.querySelectorAll(".about-num");
const numSec = document.querySelector(".about");
let interval = 4000;


function animateValue (el, start, end, duration) {
  let startTimestamp = null;
  const easeEffect = (t) => t * (2 - t);

  const step = (timestamp) => {
    if(!startTimestamp) startTimestamp = timestamp;
    let progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let eased = easeEffect(progress);
    el.innerHTML = Math.floor(start + eased * (end - start)) + "+";
    if(progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step)
}


const secObserve = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if(entry.isIntersecting) {
      console.log("section about is in view");
      numEle.forEach((valueDisplay) => {
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        animateValue(valueDisplay, 0, endValue, interval);
      });
      secObserve.unobserve(entry.target);

      
       } else {
        console.log("element is not in View yet");
       }
   })
}, { threshold: 0.5 });

secObserve.observe(numSec);


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  keyboard: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("nav");

  // if(window.innerWidth <= 767) {
  //   nav.classList.remove("scroll-header");
  //   return;
  // }

  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  

  if (this.scrollY >= 500) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }


  scrollUp.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", scrollUp);

/* ==================== SECTION FADE IN ANIMATION =================== */
const allSections = document.querySelectorAll(".fade");


const fade = function(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("inview");
      io.unobserve(entry.target); // stop observing after it's in view
    }
  });
}

const io = new IntersectionObserver(fade)
allSections.forEach(section => io.observe(section));
// io.observe(allSections)
/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Set dark theme as default
document.body.classList.add(darkTheme);
themeButton.classList.add(iconTheme);

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");



const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
};


// on/off the theme manually with the button

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // save it in the local-storage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// =========================== COLOR PICK ============================ //
// ========================================
// COLOR THEME DROPDOWN
// ========================================

const root = document.documentElement;

const colorDropdown = document.querySelector(".dropdown-colors");
const colorButton = document.querySelector(".color-btn");
const colorCircle = document.querySelector(".color-circle");
const dropdownResults = document.querySelector(".dropdown-results");
const colorOptions = document.querySelectorAll(".dropdown-option");

let dropdownOpen = false;


// ========================================
// THEMES
// ========================================

const themes = {

  purple: {
    firstColor: "hsl(250, 69%, 61%)",
    firstColorAlt: "#5a52d5"
  },

  green: {
    firstColor: " hsl(142, 69%, 61%)",
    firstColorAlt: "#159a29"
  },

  blue: {
    firstColor: "hsl(41, 100%, 42%)",
    firstColorAlt: "#b98b29"
  },

  pink: {
    firstColor: "hsl(0, 0%, 50%)",
    firstColorAlt: "#6c5f65"
  }

};


// ========================================
// INITIAL DROPDOWN STATE
// ========================================

gsap.set(dropdownResults, {
  autoAlpha: 0,
  y: -10,
  scale: 0.95,
  transformOrigin: "top center"
});

gsap.set(colorOptions, {
  opacity: 0,
  y: -8
});


// ========================================
// OPEN DROPDOWN
// ========================================

function openColorDropdown() {

  if (dropdownOpen) return;

  dropdownOpen = true;

  colorButton.setAttribute("aria-expanded", "true");

  gsap.killTweensOf([
    dropdownResults,
    colorOptions
  ]);

  const tl = gsap.timeline();

  tl.to(dropdownResults, {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    duration: 0.35,
    ease: "back.out(1.4)"
  })

  .to(colorOptions, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power3.out",
    stagger: 0.05
  }, "-=0.2");
}


// ========================================
// CLOSE DROPDOWN
// ========================================

function closeColorDropdown() {

  if (!dropdownOpen) return;

  dropdownOpen = false;

  colorButton.setAttribute("aria-expanded", "false");

  gsap.killTweensOf([
    dropdownResults,
    colorOptions
  ]);

  const tl = gsap.timeline();

  tl.to(colorOptions, {
    opacity: 0,
    y: -8,
    duration: 0.2,
    ease: "power3.in",
    stagger: {
      each: 0.025,
      from: "end"
    }
  })

  .to(dropdownResults, {
    autoAlpha: 0,
    y: -10,
    scale: 0.95,
    duration: 0.25,
    ease: "power3.in"
  }, "-=0.1");
}


// ========================================
// TOGGLE DROPDOWN
// ========================================

colorButton.addEventListener("click", (event) => {

  event.stopPropagation();

  if (dropdownOpen) {
    closeColorDropdown();
  } else {
    openColorDropdown();
  }

});


// ========================================
// THEME
// ========================================

function applyTheme(theme) {

  const selectedTheme = themes[theme];

  if (!selectedTheme) return;

  root.style.setProperty(
    "--first-color",
    selectedTheme.firstColor
  );

  root.style.setProperty(
    "--first-color-alt",
    selectedTheme.firstColorAlt
  );

  // Update color shown inside the button
  colorCircle.style.backgroundColor =
    selectedTheme.firstColor;

  // Mark active option
  colorOptions.forEach((option) => {

    option.classList.toggle(
      "active",
      option.dataset.theme === theme
    );

  });

  // Save theme
  localStorage.setItem(
    "selectedTheme",
    theme
  );
}


// ========================================
// COLOR OPTIONS
// ========================================

colorOptions.forEach((option) => {

  const circle = option.querySelector(".circle");

  // Set preview color
  circle.style.backgroundColor =
    option.dataset.color;


  option.addEventListener("click", () => {

    const theme = option.dataset.theme;

    applyTheme(theme);

    closeColorDropdown();

  });

});


// ========================================
// RESTORE SAVED THEME
// ========================================

const savedTheme =
  localStorage.getItem("selectedTheme");

if (savedTheme && themes[savedTheme]) {

  applyTheme(savedTheme);

} else {

  applyTheme("purple");

}


// ========================================
// CLICK OUTSIDE
// ========================================

document.addEventListener("click", (event) => {

  if (
    dropdownOpen &&
    !colorDropdown.contains(event.target)
  ) {
    closeColorDropdown();
  }

});


// ========================================
// ESCAPE
// ========================================

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    dropdownOpen
  ) {

    closeColorDropdown();

    colorButton.focus();

  }

});

// ============================ translation =========================== //

// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

let languageSwitcher = document.getElementById("languageSwitcher");

// Define the language reload anchors

// let aboutProject = "completed projects";

// const splitString = aboutProject.split("").map((word) => {
//   `${word.length === 9 ? "<br>" : "" }`;

//   console.log(word)
// });

// console.log(splitString.join(""));


let profileInfos = {
  en: {
    description:
      "Energetic frontend developer adept at writing well-designed code and responsive websites with a mobile-first approach.",
    profileName: "I'm Rachid",
    profileRole: "Frontend developer",
    contactBtn: "contact me",
    scrollDown: "scroll down",
  },
  it: {
    description:
      "Sviluppatore frontend energico abile nello scrivere codice ben progettato e siti Web reattivi con un approccio mobile-first.",
    profileName: "sono Rachid",
    profileRole: "Sviluppatore frontend",
    contactBtn: "contattami",
    scrollDown: "scorrere verso il basso",
  },
  de: {
    description:
      "Energischer Frontend-Entwickler, der sich mit dem Schreiben von gut gestaltetem Code und reaktionsfähigen Websites mit Mobile-First-Ansatz auskennt.",
    profileName: "Ich bin Rachid",
    profileRole: "Frontend-Entwickler",
    contactBtn: "Kontaktieren Sie mich",
    scrollDown: "Runterscrollen",
  },
};

let navs = {
  en: {
    home: "home",
    about: "about",
    skills: "skills",
    services: "services",
    portfolio: "portfolio",
    contact: "contact",
  },
  it: {
    home: "home",
    about: "Di",
    skills: "competenze",
    services: "servizi",
    portfolio: "portfolio",
    contact: "contatto",
  },
  de: {
    home: "starteseite",
    about: "über",
    skills: "Fähigkeiten",
    services: "Dienstleistungen",
    portfolio: "portfolio",
    contact: "Kontakt",
  },
};

let aboutSection = {
  en: {
    aboutMe: "a litte about me",
    aboutDesc: "My introduction",
    aboutContent:
      "Frontend developer with experience in building websites and web applications. I specialize in JavaScript, HTML5, CSS3, TailwindCSS, Reactjs, Nextjs and Typescript. My job is to write and style the frontend components and deliver quality work at all levels.",
    aboutExperience: "years of experience",
    aboutProject: "completed projects",
    aboutCompany: "companies worked",
    aboutCv: "Download resume",
  },
  it: {
    aboutMe: "un po' di me",
    aboutDesc: "La mia introduzione",
    aboutContent:
      "Sviluppatore frontend con esperienza nella realizzazione di siti e applicazioni web. Sono specializzato in JavaScript, HTML5, CSS3, TailwindCSS, Reactjs, Nextjs e Typescript. Il mio lavoro è scrivere e modellare i componenti del frontend e fornire un lavoro di qualità a tutti i livelli.",
    aboutExperience: "anni di esperienza",
    aboutProject: "completa i progetti",
    aboutCompany: "le aziende lavoravano",
    aboutCv: "Scarica curriculum",
  },
  de: {
    aboutMe: "ein wenig über mich",
    aboutDesc: "Meine Einleitung",
    aboutContent:
      "Frontend-Entwickler mit Erfahrung in der Erstellung von Websites und Webanwendungen. Ich bin auf JavaScript, HTML5, CSS3, TailwindCSS, Reactjs, Nextjs und Typescript spezialisiert. Meine Aufgabe ist es, zu schreiben und zu stylen die Frontend-Komponenten und liefern Qualitätsarbeit auf allen Ebenen.",
    aboutExperience: "jahre erfahrung",
    aboutProject: "vollendet projekte",
    aboutCompany: "firmen gearbeitet",
    aboutCv: "Lebenslauf herunterladen",
  },
};

let skillSection = {
  en: {
    skills: "skills",
    skillsTitle: "My technical level",
    frontRole: "frontend developer",
    skillsExperience1: "more than 3 year",
    frameworks: "frameworks",
    skillsExperience2: "more than 3 year",
    backRole: "",
  },
  it: {
    skills: "competenze",
    skillsTitle: "Il mio livello tecnico",
    frontRole: "Sviluppatore frontend",
    skillsExperience1: "più di 3 anno",
    frameworks: "Quadri",
    skillsExperience2: "più di 3 anno",
  },
  de: {
    skills: "Fähigkeiten",
    skillsTitle: "Mein technisches Niveau",
    frontRole: "Frontend Entwickler",
    skillsExperience1: "Mehr als 3 Jahr",
    frameworks: "Rahmenwerke",
    skillsExperience2: "Mehr als 3 Jahr",
  },
};

let qualificationSection = {
  en: {
    qualification: "qualification",
    qualificationTitle: "My personal path",
    academystudy: "Training",
    work: "work",
  },
  it: {
    qualification: "qualificazione",
    qualificationTitle: "Il mio percorso personale",
    academystudy: "Formazione",
    work: "Lavoro",
  },
  de: {
    qualification: "Qualifikation",
    qualificationTitle: "Mein persönlicher Weg",
    academystudy: "Ausbildung",
    work: "arbeiten",
  },
};

let training = {
  en: {
    training1: "Englich studies department",
    training1Place: "Languages & cultures university",
    training2: "Technical basics in Javascript",
    training2Place: "private programming institut",
    training3: "German intermediate level certificate B1+",
    training3Place: "German Goethe Institut",
    training4: "Abitur degree in literature and human sciences",
    training4Place: "Omar EL Khiyam High School - Morocco",
  },
  it: {
    training1: "Dipartimento di studi inglesi",
    training1Place: "Università di Lingue e Culture",
    training2: "Nozioni di base tecniche in Javascript",
    training2Place: "istituto di programmazione privato",
    training3: "Certificato di livello intermedio tedesco B1+",
    training3Place: "Goethe-Institut tedesco",
    training4: "Laurea magistrale in lettere e scienze umane",
    training4Place: "Scuola Superiore Omar EL Khiyam - Marocco",
  },
  de: {
    training1: "Abteilung für Anglistik",
    training1Place: "Universität für Sprachen und Kulturen",
    training2: "Technische Grundlagen in Javascript",
    training2Place: "privates Programmierinstitut",
    training3: "Deutsch-Mittelstufe-Zertifikat B1+",
    training3Place: "Deutsches Goethe-Institut",
    training4: "Abitur-Abschluss in Literatur und Humanwissenschaften",
    training4Place: "Omar EL Khayam High School – Marokko",
  },
};

let work = {
  en: {
    work1: "web development internship",
    work2: "local freelance",
    work2Place: "self-independent",
    work3: "Frontend developer internship",
    work4: "Frontend developer Fulll-Time"
  },
  it: {
    work1: "tirocinio di sviluppo web",
    work2: "libero professionista locale",
    work2Place: "auto-indipendente",
    work3: "Stage di sviluppatore frontend",
    work4: "Frontend developer a tempo pieno", // Italian translation
  },
  de: {
    work1: "Praktikum in der Webentwicklung",
    work2: "lokaler Freiberufler",
    work2Place: "selbständig",
    work3: "Praktikum als Frontend-Entwickler",
    work4: "Frontend-Entwickler Vollzeit", // German translation
  },
};

let service = {
  en: {
    serviceTitle: "Services",
    servicesSubTitle: "What I offer",
    // service 1
    service1: "frontend developer",
    service1Plus: "frontend developer",
    service1Sub: "See more",
    service1Task1: "Using ReactJs & NextJs to develop UI interfaces.",
    service1Task2: "Managing the state of the application with Redux",
    service1Task3: "Implement the entire app using React hooks",
    service1Task4: "Consume API(s).",
    // service 2
    service2: "ui/ux Designer",
    service2Plus: "ui/ux Designer",
    service2Sub: "See more",
    service2Task1: "User interface development",
    service2Task2: "Creating a responsive website with TailwindCSS",
    service2Task3: "Creating usage plans and flowcharts",
    service2Task4: "Animate your website with CSS and TailwindCSS",
  },
  it: {
    serviceTitle: "Servizi",
    servicesSubTitle: "Cosa offro",
    service1: "sviluppatore frontend",
    service1Plus: "sviluppatore frontend",
    service1Sub: "Vedi di più",
    service1Task1: "Utilizzo ReactJs & NextJs per sviluppare interfacce utente.",
    service1Task2: "Gestisco lo stato dell'applicazione con Redux",
    service1Task3: "Implemento l'intera app utilizzando hook di React",
    service1Task4: "Consumo API.",
    // service 2
    service2: "Progettista UI/UX",
    service2Plus: "Progettista UI/UX",
    service2Sub: "Vedi di più",
    service2Task1: "Sviluppo dell'interfaccia utente",
    service2Task2: "Creo un sito web responsivo con TailwindCSS",
    service2Task3: "Creo piani di utilizzo e diagrammi di flusso",
    service2Task4: "Animazione del sito web con CSS e TailwindCSS",
  },
  de: {
    serviceTitle: "Dienstleistungen",
    servicesSubTitle: "Was ich anbiete",
    service1: "Frontend-Entwickler",
    service1Plus: "Frontend-Entwickler",
    service1Sub: "mehr sehen",
    service1Task1: "Verwende ReactJs & NextJs, um Benutzeroberflächen zu entwickeln.",
    service1Task2: "Verwalte den Zustand der Anwendung mit Redux",
    service1Task3: "Implementiere die gesamte App mit React Hooks",
    service1Task4: "Verbrauche API.",
    // service 2
    service2: "UI/UX-Designer",
    service2Plus: "UI/UX-Designer",
    service2Sub: "Mehr sehen",
    service2Task1: "Entwicklung der Benutzeroberfläche",
    service2Task2: "Erstelle ein responsives Website mit TailwindCSS",
    service2Task3: "Erstelle Nutzungspläne und Flussdiagramme",
    service2Task4: "Animiere deine Website mit CSS und TailwindCSS",
  },
};

let portfolio = {
  en: {
    subtitle: "Latest work",
  },
  it: {
    subtitle: "Ultimi lavori",
  },
  de: {
    subtitle: "Neueste Arbeiten",
  },
};

let contact = {
  en: {
    contactme: "contact me",
    getintouch: "Get in touch",
    callme: "call me",
    email: "email",
    location: "location",
    message: "message",
    project: "project",
    theName: "name",
    sendBtn: "Send Message",
  },
  it: {
    contactme: "Contattami",
    getintouch: "Entrare in contatto",
    callme: "Chiamami",
    email: "email",
    location: "luogo",
    message: "messaggio",
    project: "progetto",
    theName: "nome",
    sendBtn: "Invia messaggio",
  },
  de: {
    contactme: "Kontaktiere mich",
    getintouch: "Kommen Sie mit mir in Kontakt",
    callme: "Rufen Sie mich an",
    email: "E-Mail",
    location: "Ort",
    message: "nachricht",
    project: "projekt",
    theName: "name",
    sendBtn: "nachricht senden",
  },
};

let footer = {
  en: {
    role: "frontend developer",
    services: "services",
    portfolio: "portfolio",
    contact: "contact",
    reservedRights: "All rights reserved",
  },
  it: {
    role: "sviluppatore frontend",
    services: "servizi",
    portfolio: "portfolio",
    contact: "contatto",
    reservedRights: "tutti i diritti riservati",
  },
  de: {
    role: "Frontend-Entwickler",
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    contact: "Kontakt",
    reservedRights: "Alle Rechte vorbehalten",
  },
};

// Check if a hash value exists in the URL
// if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#it") {
    // profile infos

    languageSwitcher.value = "it";
    profileDesc.textContent = profileInfos.it.description;
    profileInformation.textContent = profileInfos.it.profileName;
    role.textContent = profileInfos.it.profileRole;
    contactButtonText.textContent = profileInfos.it.contactBtn;
    scrollBtn.textContent = profileInfos.it.scrollDown;
    // navbar items
    homeNav.textContent = navs.it.home;
    aboutNav.textContent = navs.it.about;
    skillsNav.textContent = navs.it.skills;
    serviceNav.textContent = navs.it.services;
    portfolioNav.textContent = navs.it.portfolio;
    contactNav.textContent = navs.it.contact;
    // about section
    aboutme.textContent = aboutSection.it.aboutMe;
    aboutsub.textContent = aboutSection.it.aboutDesc;
    aboutcontent.textContent = aboutSection.it.aboutContent;
    aboutexperience.textContent = aboutSection.it.aboutExperience;
    aboutproject.textContent = aboutSection.it.aboutProject;
    aboutcompany.textContent = aboutSection.it.aboutCompany;
    aboutcv.textContent = aboutSection.it.aboutCv;
    // skills section
    skill.textContent = skillSection.it.skills;
    skilltitle.textContent = skillSection.it.skillsTitle;
    frontRole.textContent = skillSection.it.frontRole;
    skillExperience1.textContent = skillSection.it.skillsExperience1;
    frameworks.textContent = skillSection.it.frameworks;
    skillExperience2.textContent = skillSection.it.skillsExperience2;
    // qualification section
    qualification.textContent = qualificationSection.it.qualification;
    qualificationtitle.textContent = qualificationSection.it.qualificationTitle;
    academy.textContent = qualificationSection.it.academystudy;
    worktitle.textContent = qualificationSection.it.work;
    // qualification (training)
    training1.textContent = training.it.training1;
    training1Place.textContent = training.it.training1Place;
    training2.textContent = training.it.training2;
    training2Place.textContent = training.it.training2Place;
    training3.textContent = training.it.training3;
    training3Place.textContent = training.it.training3Place;
    training4.textContent = training.it.training4;
    training4Place.textContent = training.it.training4Place;
    // qualification (work)
    work1.textContent = work.it.work1;
    work2.textContent = work.it.work2;
    work2Place.textContent = work.it.work2Place;
    work3.textContent = work.it.work3;
    work4.textContent = work.it.work4;
    // service section
    serviceTitle.textContent = service.it.serviceTitle;
    serviceSubTitle.textContent = service.it.servicesSubTitle;
    // service 1
    service1.textContent = service.it.service1;
    service1Plus.textContent = service.it.service1Plus;
    service1Sub.textContent = service.it.service1Sub;
    service1Task1.textContent = service.it.service1Task1;
    service1Task2.textContent = service.it.service1Task2;
    service1Task3.textContent = service.it.service1Task3;
    service1Task4.textContent = service.it.service1Task4;
    // service 2
    service2.textContent = service.it.service2;
    service2Plus.textContent = service.it.service2Plus;
    service2Sub.textContent = service.it.service2Sub;
    service2Task1.textContent = service.it.service2Task1;
    service2Task2.textContent = service.it.service2Task2;
    service2Task3.textContent = service.it.service2Task3;
    service2Task4.textContent = service.it.service2Task4;
    // portfolio
    secSubtitle.textContent = portfolio.it.subtitle;
    // contact
    contactMe.textContent = contact.it.contactme;
    getInTouch.textContent = contact.it.getintouch;
    callMe.textContent = contact.it.callme;
    email.textContent = contact.it.email;
    myLocation.textContent = contact.it.location;
    myMessage.textContent = contact.it.message;
    myProject.textContent = contact.it.project;
    myName.textContent = contact.it.theName;
    sendbtn.textContent = contact.it.sendBtn;
    // footer
    footerRole.textContent = footer.it.role;
    footerServices.textContent = footer.it.services;
    footerPortfolio.textContent = footer.it.portfolio;
    footerContact.textContent = footer.it.contact;
    footerReservedRights.textContent = footer.it.reservedRights;
  } else if (window.location.hash == "#de") {
    languageSwitcher.value = "de";
    // profile infos
    profileDesc.textContent = profileInfos.de.description;
    profileInformation.textContent = profileInfos.de.profileName;
    role.textContent = profileInfos.de.profileRole;
    contactButtonText.textContent = profileInfos.de.contactBtn;
    scrollBtn.textContent = profileInfos.de.scrollDown;
    // navbar items
    homeNav.textContent = navs.de.home;
    aboutNav.textContent = navs.de.about;
    skillsNav.textContent = navs.de.skills;
    serviceNav.textContent = navs.de.services;
    portfolioNav.textContent = navs.de.portfolio;
    contactNav.textContent = navs.de.contact;
    // about section
    aboutme.textContent = aboutSection.de.aboutMe;
    aboutsub.textContent = aboutSection.de.aboutDesc;
    aboutcontent.textContent = aboutSection.de.aboutContent;
    aboutexperience.textContent = aboutSection.de.aboutExperience;
    aboutproject.textContent = aboutSection.de.aboutProject;
    aboutcompany.textContent = aboutSection.de.aboutCompany;
    aboutcv.textContent = aboutSection.de.aboutCv;
    // skills section
    skill.textContent = skillSection.de.skills;
    skilltitle.textContent = skillSection.de.skillsTitle;
    frontRole.textContent = skillSection.de.frontRole;
    skillExperience1.textContent = skillSection.de.skillsExperience1;
    frameworks.textContent = skillSection.de.frameworks;
    skillExperience2.textContent = skillSection.de.skillsExperience2;
    // qualification section
    qualification.textContent = qualificationSection.de.qualification;
    qualificationtitle.textContent = qualificationSection.de.qualificationTitle;
    academy.textContent = qualificationSection.de.academystudy;
    worktitle.textContent = qualificationSection.de.work;
    // qualification (training)
    training1.textContent = training.de.training1;
    training1Place.textContent = training.de.training1Place;
    training2.textContent = training.de.training2;
    training2Place.textContent = training.de.training2Place;
    training3.textContent = training.de.training3;
    training3Place.textContent = training.de.training3Place;
    training4.textContent = training.de.training4;
    training4Place.textContent = training.de.training4Place;
    // qualification (work)
    work1.textContent = work.de.work1;
    work2.textContent = work.de.work2;
    work2Place.textContent = work.de.work2Place;
    work3.textContent = work.de.work3;
    work4.textContent = work.de.work4;
    // service section
    serviceTitle.textContent = service.de.serviceTitle;
    serviceSubTitle.textContent = service.de.servicesSubTitle;
    // service 2
    service1.textContent = service.de.service1;
    service1Plus.textContent = service.de.service1Plus;
    service1Sub.textContent = service.de.service1Sub;
    service1Task1.textContent = service.de.service1Task1;
    service1Task2.textContent = service.de.service1Task2;
    service1Task3.textContent = service.de.service1Task3;
    service1Task4.textContent = service.de.service1Task4;
    // service 2
    service2.textContent = service.de.service2;
    service2Plus.textContent = service.de.service2Plus;
    service2Sub.textContent = service.de.service2Sub;
    service2Task1.textContent = service.de.service2Task1;
    service2Task2.textContent = service.de.service2Task2;
    service2Task3.textContent = service.de.service2Task3;
    service2Task4.textContent = service.de.service2Task4;
    // portfolio
    secSubtitle.textContent = portfolio.de.subtitle;
    // contact
    contactMe.textContent = contact.de.contactme;
    getInTouch.textContent = contact.de.getintouch;
    callMe.textContent = contact.de.callme;
    email.textContent = contact.de.email;
    myLocation.textContent = contact.de.location;
    myMessage.textContent = contact.de.message;
    myProject.textContent = contact.de.project;
    myName.textContent = contact.de.theName;
    sendbtn.textContent = contact.de.sendBtn;
    // footer
    footerRole.textContent = footer.de.role;
    footerServices.textContent = footer.de.services;
    footerPortfolio.textContent = footer.de.portfolio;
    footerContact.textContent = footer.de.contact;
    footerReservedRights.textContent = footer.de.reservedRights;
  } else {
    languageSwitcher.value = "en";
    // profile infos
    profileDesc.textContent = profileInfos.en.description;
    profileInformation.textContent = profileInfos.en.profileName;
    role.textContent = profileInfos.en.profileRole;
    contactButtonText.textContent = profileInfos.en.contactBtn;
    scrollBtn.textContent = profileInfos.en.scrollDown;
    // navbar items
    homeNav.textContent = navs.en.home;
    aboutNav.textContent = navs.en.about;
    skillsNav.textContent = navs.en.skills;
    serviceNav.textContent = navs.en.services;
    portfolioNav.textContent = navs.en.portfolio;
    contactNav.textContent = navs.en.contact;
    // about section
    aboutme.textContent = aboutSection.en.aboutMe;
    aboutsub.textContent = aboutSection.en.aboutDesc;
    aboutcontent.textContent = aboutSection.en.aboutContent;
    aboutexperience.textContent = aboutSection.en.aboutExperience;
    aboutproject.textContent = aboutSection.en.aboutProject;
    aboutcompany.textContent = aboutSection.en.aboutCompany;
    aboutcv.textContent = aboutSection.en.aboutCv;
    // skills section
    skill.textContent = skillSection.en.skills;
    skilltitle.textContent = skillSection.en.skillsTitle;
    frontRole.textContent = skillSection.en.frontRole;
    skillExperience1.textContent = skillSection.en.skillsExperience1;
    frameworks.textContent = skillSection.en.frameworks;
    skillExperience2.textContent = skillSection.en.skillsExperience2;
    // qualification section
    qualification.textContent = qualificationSection.en.qualification;
    qualificationtitle.textContent = qualificationSection.en.qualificationTitle;
    academy.textContent = qualificationSection.en.academystudy;
    worktitle.textContent = qualificationSection.en.work;
    // qualification (training)
    training1.textContent = training.en.training1;
    training1Place.textContent = training.en.training1Place;
    training2.textContent = training.en.training2;
    training2Place.textContent = training.en.training2Place;
    training3.textContent = training.en.training3;
    training3Place.textContent = training.en.training3Place;
    training4.textContent = training.en.training4;
    training4Place.textContent = training.en.training4Place;
    // qualification (work)
    work1.textContent = work.en.work1;
    work2.textContent = work.en.work2;
    work2Place.textContent = work.en.work2Place;
    work3.textContent = work.en.work3;
    work4.textContent = work.en.work4;
    // service section
    serviceTitle.textContent = service.en.serviceTitle;
    serviceSubTitle.textContent = service.en.servicesSubTitle;
    // service 1
    service1.textContent = service.en.service1;
    service1Plus.textContent = service.en.service1Plus;
    service1Sub.textContent = service.en.service1Sub;
    service1Task1.textContent = service.en.service1Task1;
    service1Task2.textContent = service.en.service1Task2;
    service1Task3.textContent = service.en.service1Task3;
    service1Task4.textContent = service.en.service1Task4;
    // service 2
    service2.textContent = service.en.service2;
    service2Plus.textContent = service.en.service2Plus;
    service2Sub.textContent = service.en.service2Sub;
    service2Task1.textContent = service.en.service2Task1;
    service2Task2.textContent = service.en.service2Task2;
    service2Task3.textContent = service.en.service2Task3;
    service2Task4.textContent = service.en.service2Task4;
    // portfolio
    secSubtitle.textContent = portfolio.en.subtitle;
    // contact
    contactMe.textContent = contact.en.contactme;
    getInTouch.textContent = contact.en.getintouch;
    callMe.textContent = contact.en.callme;
    email.textContent = contact.en.email;
    myLocation.textContent = contact.en.location;
    myMessage.textContent = contact.en.message;
    myProject.textContent = contact.en.project;
    myName.textContent = contact.en.theName;
    sendbtn.textContent = contact.en.sendBtn;
    // footer
    footerRole.textContent = footer.en.role;
    footerServices.textContent = footer.en.services;
    footerPortfolio.textContent = footer.en.portfolio;
    footerContact.textContent = footer.en.contact;
    footerReservedRights.textContent = footer.en.reservedRights;
  }
// }

/* ================ CURRENT DATE ================= */
function currentDate() {
  let currentDateHolder = document.getElementById("current-date").textContent = new Date().getFullYear();
};

window.addEventListener("DOMContentLoaded", currentDate);


/* ============================== GSAP ANIMATION ============================= */

// split text animation
gsap.registerPlugin(SplitText);

let splitChars, splitWords, splitLines, animation;

function playAnimation() {
  animation && animation.revert();
  animation = gsap.timeline()
    .from(splitChars.chars, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4",
      stagger: 0.04
    })
    .from(splitWords.words, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2",
      stagger: 0.08
    }, "<")
    .from(splitLines.lines, {
      rotationX: -100,
      transformOrigin: "50% 50% -160px",
      opacity: 0,
      duration: 0.8, 
      ease: "power3",
      stagger: 0.25
    }, "<")
}


function setup() {
  splitChars && splitChars.revert();
  splitWords && splitWords.revert();
  splitLines && splitLines.revert();

  animation && animation.revert();
  splitChars = SplitText.create("#role", {type:"chars"});
  splitWords = SplitText.create("#profileInformation", {type:"words"});
  splitLines = SplitText.create("#profileDesc", {type:"lines"});
}
setup();
playAnimation();
window.addEventListener("resize", setup);

// drawSVG animation
// gsap.registerPlugin(DrawSVGPlugin);

// const tl = gsap
//   .timeline({
//     repeat: -1,
//     defaults:{ duration: 3, ease: 'power1.inOut' }
//   })
//   .set('#svg-stage', { opacity: 1 })
//   .from('path', { drawSVG:'0% 0%' })
//   .to('path', { drawSVG:'100% 100%' })


gsap.registerPlugin(DrawSVGPlugin);

const svg = document.querySelector("#svg-stage");

const headerSvgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.set(svg, { opacity: 1 });

        gsap.from("#letter-r", {
          drawSVG: "0%",
          duration: 2,
          ease: "power2.inOut"
        });

        headerSvgObserver.unobserve(svg);
      }
    });
  },
  {
    threshold: 0.3
  }
);

headerSvgObserver.observe(svg);

const bgSvg = document.querySelector("#svg-bg");

const bgSvgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.set(svg, { opacity: 1 });

        gsap.from("#bg-letter-r", {
          drawSVG: "0%",
          duration: 2,
          ease: "power2.inOut"
        });

        bgSvgObserver.unobserve(bgSvg);
      }
    });
  },
  {
    threshold: 0.3
  }
);

bgSvgObserver.observe(bgSvg);