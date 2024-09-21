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
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 500) {
    scrollUp.classList.add("show-scroll");
  } else scrollUp.classList.remove("show-scroll");


  scrollUp.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", scrollUp);


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

// if (selectedTheme) {
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }

// on/off the theme manually with the button

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // save it in the local-storage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors

let profileInfos = {
  eng: {
    description:
      "Energetic frontend developer adept at writing well-designed code and responsive websites with a mobile-first approach.",
    profileName: "Hello, I'm Rachid",
    profileRole: "Frontend developer",
    contactBtn: "contact me",
    scrollDown: "scroll down",
  },
  it: {
    description:
      "Sviluppatore frontend energico abile nello scrivere codice ben progettato e siti Web reattivi con un approccio mobile-first.",
    profileName: "Ciao, sono Rachid",
    profileRole: "Sviluppatore frontend",
    contactBtn: "contattami",
    scrollDown: "scorrere verso il basso",
  },
  de: {
    description:
      "Energischer Frontend-Entwickler, der sich mit dem Schreiben von gut gestaltetem Code und reaktionsfähigen Websites mit Mobile-First-Ansatz auskennt.",
    profileName: "Hallo, Ich bin Rachid",
    profileRole: "Frontend-Entwickler",
    contactBtn: "Kontaktieren Sie mich",
    scrollDown: "Runterscrollen",
  },
};

let navs = {
  eng: {
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
  eng: {
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
  eng: {
    skills: "skills",
    skillsTitle: "My technical level",
    frontRole: "frontend developer",
    skillsExperience: "more than 1 year",
    skillsExperience1: "more than 1 year",
    frameworks: "frameworks",
  },
  it: {
    skills: "competenze",
    skillsTitle: "Il mio livello tecnico",
    frontRole: "Sviluppatore frontend",
    skillsExperience: "più di 1 anno",
    skillsExperience1: "più di 1 anno",
    frameworks: "Quadri",
  },
  de: {
    skills: "Fähigkeiten",
    skillsTitle: "Mein technisches Niveau",
    frontRole: "Frontend Entwickler",
    skillsExperience: "Mehr als 1 Jahr",
    skillsExperience1: "Mehr als 1 Jahr",
    frameworks: "Rahmenwerke",
  },
};

let qualificationSection = {
  eng: {
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
  eng: {
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
  eng: {
    work1: "web development internship",
    work2: "local freelance",
    work2Place: "self-independent",
    work3: "Frontend developer internship",
  },
  it: {
    work1: "tirocinio di sviluppo web",
    work2: "libero professionista locale",
    work2Place: "auto-indipendente",
    work3: "Stage di sviluppatore frontend",
  },
  de: {
    work1: "Praktikum in der Webentwicklung",
    work2: "lokaler Freiberufler",
    work2Place: "selbständig",
    work3: "Praktikum als Frontend-Entwickler",
  },
};

let service = {
  eng: {
    serviceTitle: "Services",
    servicesSubTitle: "What I offer",
    // service 1
    service1: "frontend developer",
    service1Plus: "frontend developer",
    service1Sub: "See more",
    service1Task1: "Using ReactJs to develop UI interfaces.",
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
    service1Task1: "Utilizzo ReactJs per sviluppare interfacce utente.",
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
    service1Task1: "Verwende ReactJs, um Benutzeroberflächen zu entwickeln.",
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
  eng: {
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
  eng: {
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
  eng: {
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
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#it") {
    // profile infos
    profileDesc.textContent = profileInfos.it.description;
    profileInformation.textContent = profileInfos.it.profileName;
    role.textContent = profileInfos.it.profileRole;
    contactButton.textContent = profileInfos.it.contactBtn;
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
    frontrole.textContent = skillSection.it.frontRole;
    skillexperience.textContent = skillSection.it.skillsExperience;
    skillexperience1.textContent = skillSection.it.skillsExperience1;
    frameworks.textContent = skillSection.it.frameworks;
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
    // profile infos
    profileDesc.textContent = profileInfos.de.description;
    profileInformation.textContent = profileInfos.de.profileName;
    role.textContent = profileInfos.de.profileRole;
    contactButton.textContent = profileInfos.de.contactBtn;
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
    skill.textContent = skillSection.de.skills;
    skilltitle.textContent = skillSection.de.skillsTitle;
    frontrole.textContent = skillSection.de.frontRole;
    skillexperience.textContent = skillSection.de.skillsExperience;
    skillexperience1.textContent = skillSection.de.skillsExperience1;
    frameworks.textContent = skillSection.de.frameworks;
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
  }
}
