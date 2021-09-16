document.getElementById("downloadPDF").addEventListener("click", downloadPDF)
document.getElementById("entreEmContato").addEventListener("click", entreEmContato)

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-12345-6', 'auto');
  ga('send', 'pageview');

//Função responsavel para o "Download PDF" em todas as páginas
function downloadPDF() {
  alert("OlaMundo")
  ga('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'download_pdf',
    eventLabel: 'download_pdf'
  });
}
//Função responsavel por link externo "Entre em contato" em todas as páginas
function  entreEmContato() {
  ga('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'entre_em_contato',
    eventLabel: 'link_externo'
  });
}

// Funções responsavel pelo formulario em Sobre

function nome() {
  ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'nome',
      eventLabel: 'preencheu'
    });
  }
function email() {
  ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'email',
      eventLabel: 'preencheu'
  });
}
function telefone() {
  ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'telefone',
      eventLabel: 'preencheu'
  });
}
function aceito() {
  ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'aceito',
      eventLabel: 'preencheu'
  });
}
function enviar() {
  ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'enviado',
      eventLabel: 'enviado'
  });
}