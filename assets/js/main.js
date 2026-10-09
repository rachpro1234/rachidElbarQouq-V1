/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("is-open");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
  });
}

/* =================== NUMBERS INCREMENT ANIMATION =====================*/
//  motion
const numSec = document.querySelector(".about");
const animateNums = document.querySelectorAll(".about-num");

const aboutNumbers = [3, 16, 1];

const secObserve = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      console.log("about section is in view");
       animateNums.forEach((ele, index) => {
         animate(0, aboutNumbers[index], {
           duration: 3,
           ease: 'circOut',
           onUpdate: (latest) => (ele.innerHTML = Math.round(latest) + "+"),
         })
       })
    
      secObserve.unobserve(entry.target);
    } else {
       console.log("about section isn't in view")
    }
  })
}, { threshold: 0.5 });

secObserve.observe(numSec);



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("is-open");
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

/* ========================== LOADER ====================== */

function hideLoader() {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.display = "none";
  }
}

if (document.readyState === "complete") {
  hideLoader();
} else {
  window.addEventListener("load", hideLoader, { once: true });
}


// ============================ translation =========================== //

// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

let languageSwitcher = document.getElementById("languageSwitcher");


// language variables
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
    skillExperience1: "more than 3 year",
    frameworks: "frameworks",
    skillExperience2: "more than 3 year",
    backRole: "backend developer",
    skillExperience3: "more than 1 year"
  },
  it: {
    skills: "competenze",
    skillsTitle: "Il mio livello tecnico",
    frontRole: "Sviluppatore frontend",
    skillExperience1: "più di 3 anno",
    frameworks: "Quadri",
    skillExperience2: "più di 3 anno",
    backRole: "Sviluppatore backend",
    skillExperience3: "più di 1 anno"
  },
  de: {
    skills: "Fähigkeiten",
    skillsTitle: "Mein technisches Niveau",
    frontRole: "Frontend Entwickler",
    skillExperience1: "Mehr als 3 Jahr",
    frameworks: "Rahmenwerke",
    skillExperience2: "Mehr als 3 Jahr",
    backRole: "backend Entwickler",
    skillExperience3: "Mehr als 1 Jahr"
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
    training4Place: "Omar EL Khayam Gymnasium – Marokko",
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
    work4: "Frontend developer a tempo pieno", 
  },
  de: {
    work1: "Praktikum in der Webentwicklung",
    work2: "lokaler Freiberufler",
    work2Place: "selbständig",
    work3: "Praktikum als Frontend-Entwickler",
    work4: "Frontend-Entwickler Vollzeit",
  },
};

let service = {
  en: {
    serviceTitle: "Services",
    servicesSubTitle: "What I offer",
    // service 1
    service1Role: "frontend developer",
    service1Task1: "Using ReactJs & NextJs to develop UI interfaces.",
    service1Task2: "Managing the state of the application with Redux",
    service1Task3: "Implement the entire app using React hooks",
    service1Task4: "Consume API(s).",
    // service 2
    service2Role: "ui/ux Designer",
    service2Task1: "User interface development",
    service2Task2: "Creating a responsive website with TailwindCSS",
    service2Task3: "Creating usage plans and flowcharts",
    service2Task4: "Animate your website with CSS and TailwindCSS",
    // service 3
    service3Role: "backend developer",
    service3Task1: "build RESTful APIs and integrate MySQL databases.",
    service3Task2: "handle authentication, and data management. test, troubleshoot",
    service3Task3: "implement server-side logic & optimize backend systems",
    service3Task4: "focus on building reliable and maintainable systems.",
  },
  it: {
    serviceTitle: "Servizi",
    servicesSubTitle: "Cosa offro",
    // service 1
    service1Role: "sviluppatore frontend",
    service1Task1: "Sviluppare interfacce utente con React.js e Next.js.",
    service1Task2: "Gestire lo stato dell'applicazione con Redux.",
    service1Task3: "Implementare l'intera applicazione utilizzando gli hook di React.",
    service1Task4: "Consumare API.",
    // service 2
    service2Role: "designer UI/UX",
    service2Task1: "Sviluppo di interfacce utente.",
    service2Task2: "Creare siti web responsive con Tailwind CSS.",
    service2Task3: "Creare piani di utilizzo e diagrammi di flusso.",
    service2Task4: "Animare i siti web con CSS e Tailwind CSS.",
    // service 3
    service3Role: "sviluppatore backend",
    service3Task1: "Sviluppare API RESTful e integrare database MySQL.",
    service3Task2: "Gestire l'autenticazione e i dati, eseguire test e risolvere problemi.",
    service3Task3: "Implementare la logica lato server e ottimizzare i sistemi backend.",
    service3Task4: "Concentrarsi sulla creazione di sistemi affidabili e facilmente manutenibili."
  },
  de: {
    serviceTitle: "Dienstleistungen",
    servicesSubTitle: "Was ich anbiete",
    // service 1
    service1Role: "Frontend-Entwickler",
    service1Task1: "Benutzeroberflächen mit React.js und Next.js entwickeln.",
    service1Task2: "Den Anwendungsstatus mit Redux verwalten.",
    service1Task3: "Die gesamte Anwendung mithilfe von React Hooks implementieren.",
    service1Task4: "APIs konsumieren.",
    // service 2
    service2Role: "UI/UX-Designer",
    service2Task1: "Entwicklung von Benutzeroberflächen.",
    service2Task2: "Responsive Websites mit Tailwind CSS erstellen.",
    service2Task3: "Nutzungskonzepte und Flussdiagramme erstellen.",
    service2Task4: "Websites mit CSS und Tailwind CSS animieren.",
    // service 3
    service3Role: "Backend-Entwickler",
    service3Task1: "RESTful APIs entwickeln und MySQL-Datenbanken integrieren.",
    service3Task2: "Authentifizierung und Datenverwaltung übernehmen, Tests durchführen und Probleme beheben.",
    service3Task3: "Serverseitige Logik implementieren und Backend-Systeme optimieren.",
    service3Task4: "Zuverlässige und wartbare Systeme entwickeln."
  },
};

let portfolio = {
  en: {
    title: "portfolio",
    subtitle: "Latest work",
    portfolioDemo: "demo",
    portfolioCode: "Source code",
    portfolioDesc1: "A customizable, responsive website for all devices, made with ReactJS, Firebase. It has different pages and switchable Animation movements.",
    portfolioDesc2: "A clothing website made with NextJS and Typescript that interacts with all screen types.",
    portfolioDesc3: "A Dice Game made with ReactJS. the point of this game is to flip the dice and switch between different faces of the dice",
    portfolioDesc4: "A Web Page made logically with Javascript, that allows users to calculate a ride from point A to B, then to get the ride info like the price, distance and duration.",
    portfolioDesc5: "An Antique App made with Nextjs, that is like a store for Sellers and Dealers who are presenting their Antique Products (Th App is not fully complete, still working on it)",
    portfolioDesc6: "Anaia.ma is a professional moving and relocation service based in France with branches in Morocco, focused on providing secure and high-quality residential and commercial moves, especially around Marrakech and other major cities.",
    portfolioDesc7: "Gourmand is a modern Restaurant website made with Next js containing many features like translation to many languages and a booking system sychnonized with Google calendar and many more features.",
    portfolioDesc8: "Key To Marrakech is a property management and concierge service based in Marrakech, focused on short-term rentals (Airbnb...). The whole website is made with Next js with many features like swiping between popular languages as well as featuring the Services provided in a clean and modern design."
  },
  it: {
    title: "portfolio",
    subtitle: "Ultimi lavori",
    portfolioDemo: "demo",
    portfolioCode: "Codice sorgente",
    portfolioDesc1: "Un sito web personalizzabile e responsive per tutti i dispositivi, realizzato con ReactJS e Firebase. Presenta diverse pagine e animazioni intercambiabili.",
    portfolioDesc2: "Un sito web dedicato all'abbigliamento, realizzato con Next.js e TypeScript, che si adatta a tutti i tipi di schermo.",
    portfolioDesc3: "Un gioco di dadi realizzato con ReactJS, Lo scopo di questo gioco è lanciare i dadi e passare tra le diverse facce dei dadi",
    portfolioDesc4: "Una pagina web realizzata in modo logico con Javascript, che permette agli utenti di calcolare un tragitto dal punto A al punto B e di ottenere poi le informazioni relative al tragitto, quali il prezzo, la distanza e la durata.",
    portfolioDesc5: "Un'app dedicata all'antiquariato realizzata con NextJS, che funge da vetrina per venditori e commercianti che presentano i propri prodotti d'antiquariato (l'app non è ancora del tutto completa, ci stiamo ancora lavorando)",
    portfolioDesc6: "Anaia.ma è un’azienda specializzata in traslochi e trasferimenti con sede in Francia e filiali in Marocco, che si occupa di fornire servizi di trasloco residenziale e commerciale sicuri e di alta qualità, in particolare nella zona di Marrakech e in altre grandi città.",
    portfolioDesc7: "Gourmand è un sito web moderno dedicato a un ristorante, realizzato con Next.js, che offre numerose funzionalità, tra cui la traduzione in diverse lingue e un sistema di prenotazione sincronizzato con Google Calendar, oltre a molte altre funzionalità.",
    portfolioDesc8: "Key To Marrakech è un servizio di gestione immobiliare e concierge con sede a Marrakech, specializzato in affitti a breve termine (Airbnb...). L'intero sito web è realizzato con Next.js e offre numerose funzionalità, tra cui la possibilità di passare da una lingua all'altra con un semplice scorrimento, oltre a presentare i servizi offerti con un design pulito e moderno."

  },
  de: {
    title: "portfolio",
    subtitle: "Neueste Arbeiten",
    portfolioDemo: "demo",
    portfolioCode: "quellecode",
    portfolioDesc1: "Eine anpassbare, responsiv gestaltete Website für alle Geräte, erstellt mit ReactJS und Firebase. Sie verfügt über verschiedene Seiten und umschaltbare Animationen.",
    portfolioDesc2: "Eine Website zum Thema Bekleidung, die mit Next.js und TypeScript erstellt wurde und sich an alle Bildschirmgrößen anpasst.",
    portfolioDesc3: "Ein Würfelspiel, das mit ReactJS entwickelt wurde, Der Punkt dieses Spiels ist es, die Würfel zu drehen und zwischen den verschiedenen Seiten der Würfel zu wechseln.",
    portfolioDesc4: "Eine logisch aufgebaute Webseite mit <span>JS</span>, auf der Nutzer eine Fahrt von Punkt A nach B berechnen und anschließend Informationen zur Fahrt wie Preis, Entfernung und Dauer abrufen können.",
    portfolioDesc5: "Eine Antiquitäten-App, die mit <span>NextJS</span> erstellt wurde und wie ein Shop für Verkäufer und Händler funktioniert, die ihre Antiquitäten präsentieren (die App ist noch nicht ganz fertig, wir arbeiten noch daran)",
    portfolioDesc6: "Anaia.ma è un’azienda specializzata in traslochi e trasferimenti con sede in Francia e filiali in Marocco, che si occupa di fornire servizi di trasloco residenziale e commerciale sicuri e di alta qualità, in particolare nella zona di Marrakech e in altre grandi città.",
    portfolioDesc7: "Gourmand ist eine moderne Restaurant-Website, die mit Next.js erstellt wurde und zahlreiche Funktionen bietet, darunter die Übersetzung in viele Sprachen sowie ein mit Google Kalender synchronisiertes Buchungssystem und viele weitere Funktionen.",
    portfolioDesc8: "Key To Marrakech“ ist ein in Marrakesch ansässiger Immobilienverwaltungs- und Concierge-Service, der sich auf Kurzzeitvermietungen (Airbnb...) spezialisiert hat. Die gesamte Website wurde mit Next.js erstellt und bietet zahlreiche Funktionen, darunter das Umschalten zwischen gängigen Sprachen sowie die Präsentation der angebotenen Dienstleistungen in einem übersichtlichen und modernen Design." 
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
    reservedRights: "All rights reserved",
  },
  it: {
    role: "sviluppatore frontend",
    reservedRights: "tutti i diritti riservati",
  },
  de: {
    role: "Frontend-Entwickler",
    reservedRights: "Alle Rechte vorbehalten",
  },
};

// Check if a hash value exists in the URL
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
    skillExperience1.textContent = skillSection.it.skillExperience1;
    frameworks.textContent = skillSection.it.frameworks;
    skillExperience2.textContent = skillSection.it.skillExperience2;
    backRole.textContent = skillSection.it.backRole;
    skillExperience3.textContent = skillSection.it.skillExperience3
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
    service1Role.textContent = service.it.service1Role;
    service1Task1.textContent = service.it.service1Task1;
    service1Task2.textContent = service.it.service1Task2;
    service1Task3.textContent = service.it.service1Task3;
    service1Task4.textContent = service.it.service1Task4;
    // service 2
    service2Role.textContent = service.it.service2Role;
    service2Task1.textContent = service.it.service2Task1;
    service2Task2.textContent = service.it.service2Task2;
    service2Task3.textContent = service.it.service2Task3;
    service2Task4.textContent = service.it.service2Task4;
     // service 3
    service3Role.textContent = service.it.service3Role;
    service3Task1.textContent = service.it.service3Task1;
    service3Task2.textContent = service.it.service3Task2;
    service3Task3.textContent = service.it.service3Task3;
    service3Task4.textContent = service.it.service3Task4;
    // portfolio
    portfolioTitle.textContent = portfolio.it.title; 
    secSubtitle.textContent = portfolio.it.subtitle;
    document.querySelectorAll("#portfolioDemo").forEach((demo) => {
      demo.textContent = portfolio.it.portfolioDemo;
    })
    document.querySelectorAll("#portfolioCode").forEach((source) => {
      source.textContent = portfolio.it.portfolioCode;
    })
    portfolioDesc1.textContent = portfolio.it.portfolioDesc1;
    portfolioDesc2.textContent = portfolio.it.portfolioDesc2;
    portfolioDesc3.textContent = portfolio.it.portfolioDesc3;
    portfolioDesc4.textContent = portfolio.it.portfolioDesc4;
    portfolioDesc5.textContent = portfolio.it.portfolioDesc5;
    portfolioDesc6.textContent = portfolio.it.portfolioDesc6;
    portfolioDesc7.textContent = portfolio.it.portfolioDesc7;
    portfolioDesc8.textContent = portfolio.it.portfolioDesc8;

    // contact
    contactMe.textContent = contact.it.contactme;
    getInTouch.textContent = contact.it.getintouch;
    // footer
    footerRole.textContent = footer.it.role;
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
    skillExperience1.textContent = skillSection.de.skillExperience1;
    frameworks.textContent = skillSection.de.frameworks;
    skillExperience2.textContent = skillSection.de.skillExperience2;
    backRole.textContent = skillSection.de.backRole;
    skillExperience3.textContent = skillSection.de.skillExperience3
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
    // service 1
    service1Role.textContent = service.de.service1Role;
    service1Task1.textContent = service.de.service1Task1;
    service1Task2.textContent = service.de.service1Task2;
    service1Task3.textContent = service.de.service1Task3;
    service1Task4.textContent = service.de.service1Task4;
    // service 2
    service2Role.textContent = service.de.service2Role;
    service2Task1.textContent = service.de.service2Task1;
    service2Task2.textContent = service.de.service2Task2;
    service2Task3.textContent = service.de.service2Task3;
    service2Task4.textContent = service.de.service2Task4;
    // service 3
    service3Role.textContent = service.de.service3Role;
    service3Task1.textContent = service.de.service3Task1;
    service3Task2.textContent = service.de.service3Task2;
    service3Task3.textContent = service.de.service3Task3;
    service3Task4.textContent = service.de.service3Task4;
    // portfolio
    portfolioTitle.textContent = portfolio.de.title; 
    secSubtitle.textContent = portfolio.de.subtitle;
     document.querySelectorAll("#portfolioDemo").forEach((demo) => {
      demo.textContent = portfolio.de.portfolioDemo;
    })
    document.querySelectorAll("#portfolioCode").forEach((source) => {
      source.textContent = portfolio.de.portfolioCode;
    })
    portfolioDesc1.textContent = portfolio.de.portfolioDesc1;
    portfolioDesc2.textContent = portfolio.de.portfolioDesc2;
    portfolioDesc3.textContent = portfolio.de.portfolioDesc3;
    portfolioDesc4.textContent = portfolio.de.portfolioDesc4;
    portfolioDesc5.textContent = portfolio.de.portfolioDesc5;
    portfolioDesc6.textContent = portfolio.de.portfolioDesc6;
    portfolioDesc7.textContent = portfolio.de.portfolioDesc7;
    portfolioDesc8.textContent = portfolio.de.portfolioDesc8;
    // contact
    contactMe.textContent = contact.de.contactme;
    getInTouch.textContent = contact.de.getintouch;
    // footer
    footerRole.textContent = footer.de.role;
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
    skillExperience1.textContent = skillSection.en.skillExperience1;
    frameworks.textContent = skillSection.en.frameworks;
    skillExperience2.textContent = skillSection.en.skillExperience2;
     backRole.textContent = skillSection.en.backRole;
    skillExperience3.textContent = skillSection.en.skillExperience3
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
    service1Role.textContent = service.en.service1Role;
    service1Task1.textContent = service.en.service1Task1;
    service1Task2.textContent = service.en.service1Task2;
    service1Task3.textContent = service.en.service1Task3;
    service1Task4.textContent = service.en.service1Task4;
    // service 2
    service2Role.textContent = service.en.service2Role;
    service2Task1.textContent = service.en.service2Task1;
    service2Task2.textContent = service.en.service2Task2;
    service2Task3.textContent = service.en.service2Task3;
    service2Task4.textContent = service.en.service2Task4;
    // service 3
    service3Role.textContent = service.en.service3Role;
    service3Task1.textContent = service.en.service3Task1;
    service3Task2.textContent = service.en.service3Task2;
    service3Task3.textContent = service.en.service3Task3;
    service3Task4.textContent = service.en.service3Task4;
    // portfolio
    portfolioTitle.textContent = portfolio.en.title; 
    secSubtitle.textContent = portfolio.en.subtitle;
     document.querySelectorAll("#portfolioDemo").forEach((demo) => {
      demo.textContent = portfolio.en.portfolioDemo;
    })
    document.querySelectorAll("#portfolioCode").forEach((source) => {
      source.textContent = portfolio.en.portfolioCode;
    })
    portfolioDesc1.textContent = portfolio.en.portfolioDesc1;
    portfolioDesc2.textContent = portfolio.en.portfolioDesc2;
    portfolioDesc3.textContent = portfolio.en.portfolioDesc3;
    portfolioDesc4.textContent = portfolio.en.portfolioDesc4;
    portfolioDesc5.textContent = portfolio.en.portfolioDesc5;
    portfolioDesc6.textContent = portfolio.en.portfolioDesc6;
    portfolioDesc7.textContent = portfolio.en.portfolioDesc7;
    portfolioDesc8.textContent = portfolio.en.portfolioDesc8;

    // contact
    contactMe.textContent = contact.en.contactme;
    getInTouch.textContent = contact.en.getintouch;
    // footer
    footerRole.textContent = footer.en.role;
    footerReservedRights.textContent = footer.en.reservedRights;
  }



/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  // loop: true,

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


/* ================ CURRENT DATE ================= */
function currentDate() {
  let currentDateHolder = document.getElementById("current-date").textContent = new Date().getFullYear();
  return currentDateHolder;
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
  // home content
  splitChars = SplitText.create("#role", {type:"chars"});
  splitWords = SplitText.create("#profileInformation", {type:"words"});
  splitLines = SplitText.create("#profileDesc", {type:"lines"});
  // about content
  splitChars = SplitText.create("#aboutsub", { type: "chars" });
  splitWords = SplitText.create("#aboutcontent", { type: "words" });
}
setup();
playAnimation();
window.addEventListener("resize", setup);

// drawSVG animation
gsap.registerPlugin(DrawSVGPlugin);

const svg = document.querySelector(".portfolio__logo #svg-stage");

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

