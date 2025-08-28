document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Obrigado pelo contato! Em breve entraremos em contato para agendar sua avaliação gratuita."
  );
  this.reset();
});