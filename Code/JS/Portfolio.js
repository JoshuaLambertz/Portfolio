document.addEventListener('DOMContentLoaded', () => {
  //Sprachumschaltung
  const toggleSelect = document.getElementById('lang-toggle');
  const elements = document.querySelectorAll('[data-i18n]');
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');

  const translations = {
    de: {
      projects: "Projekte",
      about: "Über mich",
      contact: "Kontakt",
      introduction: "Hallo, ich bin Joshua - Full Stack Entwickler mit Sitz in Düsseldorf, Deutschland",
      "email-address": "Email Adresse",
      name: "Name",
      message: "Schreib mir eine Nachricht",
      location: "Standort",
      city: "Düsseldorf, Deutschland",
      submit: "Senden",
    },
    en: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
      introduction: "Hello, I'm Joshua - Full stack developer based in Düsseldorf, Germany",
      "email-address": "Email Address",
      name: "Name",
      message: "Write me a message",
      location: "Location",
      city: "Düsseldorf, Germany",
      submit: "Submit"
    }
  };

  let currentLang = localStorage.getItem('lang') || 'en';
  toggleSelect.value = currentLang;

  const updateLanguage = () => {
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
  
      if (el.tagName === 'INPUT' && el.type === 'submit') {
        el.value = translations[currentLang][key];
      } else {
        el.innerText = translations[currentLang][key];
      }
    });
  
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', translations[currentLang][key]);
    });
  };

  updateLanguage();

  toggleSelect.addEventListener('change', () => {
    currentLang = toggleSelect.value;
    localStorage.setItem('lang', currentLang);
    updateLanguage();

    const selectedOption = toggleSelect.options[toggleSelect.selectedIndex];
    console.log('Ausgewählte Sprache:', selectedOption.value);
  });
  
  //Counter für Textfeld input
  const counterText = () => {
    const message = document.getElementById('message').value;
    const counter = document.getElementById('counter');
    counter.innerText = `${message.length}/1000`;
  };

  document.getElementById('message').addEventListener('input', counterText);
  counterText();
});