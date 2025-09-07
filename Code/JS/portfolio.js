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
        introduction: "Hallo, ich bin <span style='color:rgb(81, 81, 81);  font-weight: 600;'>Joshua <br>Lambertz</span> - Full Stack <br>Entwickler mit Sitz <br>in Wien, Österreich",
        "email-address": "Email Adresse",
        name: "Name",
        message: "Schreib mir eine Nachricht",
        location: "Standort",
        city: "Wien, Österreich",
        submit: "Senden",
        "message-subject": "Betreff",
        statuserror: "Nachricht konnte nicht gesendet werden"
      },
      en: {
        projects: "Projects",
        about: "About",
        contact: "Contact",
        introduction: "Hello, I'm <span style='color:rgb(81, 81, 81);  font-weight: 600;'>Joshua <br>Lambertz</span> - Full Stack <br>Developer based in <br>Vienna, Austria",
        "email-address": "Email Address",
        name: "Name",
        message: "Write me a message",
        location: "Location",
        city: "Vienna, Austria",
        submit: "Submit",
        "message-subject": "Subject",
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
          el.innerHTML = translations[currentLang][key];
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
    
    //Counter für message input
    const counterText = () => {
      const message = document.getElementById('message').value;
      const counter = document.getElementById('counter');
      counter.innerText = `${message.length}/1000`;
    };
  
    document.getElementById('message').addEventListener('input', counterText);
    counterText();
    
    //Redirect
    const params = new URLSearchParams(window.location.search);

    const status = params.get('status');

  if (status) {
    const statusBox = document.getElementById('status-message');
    statusBox.hidden = false;
    const p = statusBox.querySelector("p");

    if (status === 'success') {
      p.innerText = "Message sent.";
    } else if (status === 'error') {
      p.innerText = "Error sending. Try again later or contact me via mail.";
    }
  }
});