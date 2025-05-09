document.addEventListener('DOMContentLoaded', () => {
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
    }
  };

  let currentLang = 'en';

  toggleSelect.addEventListener('change', () => {
    currentLang = toggleSelect.value;

    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerText = translations[currentLang][key];
    });

    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', translations[currentLang][key]);
    });
  });

  toggleSelect.addEventListener('change', function () {
    const selectedOption = toggleSelect.options[toggleSelect.selectedIndex];
    console.log('Ausgewählte Sprache:', selectedOption.value);
  });
});