<script>
  
  function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {const key = el.getAttribute("data-i18n");
      el.innerText = translations[lang][key] || el.innerText;
        });
    localStorege.setItem("lang", lang);
  }

const saveLang = localStorage.getItem("lang") || "pt";
document.getElementById("languageSwitcher").value = savedLang;
translatePage(savedLang);

document.getElementById("languageSwitcher").addEventListener("change", e => translatePage(e.target.value));
</script>

