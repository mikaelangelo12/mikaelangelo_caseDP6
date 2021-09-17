(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','dp6');

  dp6('create', 'UA-12345-6', 'auto');
  dp6('send', 'pageview');

//Função responsavel para o "Download PDF" em todas as páginas
function downloadPDF() {
  dp6('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'download_pdf',
    eventLabel: 'download_pdf'
  });
}
//Função responsavel por link externo "Entre em contato" em todas as páginas
function  entreEmContato() {
  dp6('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'entre_em_contato',
    eventLabel: 'link_externo'
  });
}

// Funções responsavel pelo formulario em Sobre
$("#nome").on("blur", function() {
  dp6('send', 'event', {
    eventCategory: 'contato',
    eventAction: 'nome',
    eventLabel: 'preencheu'
  });
});

$( "#email").on("blur", function() { 
  dp6('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'email',
      eventLabel: 'preencheu'
  });
});

$("#telefone").on("blur", function() { 
  dp6('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'telefone',
      eventLabel: 'preencheu'
  });
});
$("#aceito").on("click", function() {  
  dp6('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'aceito',
      eventLabel: 'preencheu'
  });
});

function enviar() {
  dp6('send', 'event', {
      eventCategory: 'contato',
      eventAction: 'enviado',
      eventLabel: 'enviado'
  });
}

//Funções responsavel pela  pagina "Analise"
$(".card-montadoras").each(function (){ 
  $(this).on("click", () => {
    dp6('send', {
      hitType: 'event',
      eventCategory: 'analise',
      eventAction: 'ver_mais',
      eventLabel: $(this).data('name')
    });
  });
});
