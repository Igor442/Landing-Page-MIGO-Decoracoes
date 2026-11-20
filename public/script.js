// 1. Filtro da Galeria de Portfólio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filterValue === 'todos' || item.getAttribute('data-category') === filterValue) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});

// 2. Envio do Formulário Direto para o WhatsApp
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // COLOQUE AQUI O NÚMERO DA SUA MÃE (Código do país 55 + DDD + Número, só dígitos)
  const telefoneWhatsApp = '5511999999999';

  const nome = document.getElementById('nome').value.trim();
  const tipoFesta = document.getElementById('tipoFesta').value;
  const dataRaw = document.getElementById('dataEvento').value;
  const tema = document.getElementById('tema').value.trim();
  const cidade = document.getElementById('cidade').value.trim();

  // Formata a data de AAAA-MM-DD para DD/MM/AAAA
  const [ano, mes, dia] = dataRaw.split('-');
  const dataFormatada = `${dia}/${mes}/${ano}`;

  const mensagem = `Olá! Gostaria de pedir um orçamento de decoração:\n\n` +
                   `*Nome:* ${nome}\n` +
                   `*Evento:* ${tipoFesta}\n` +
                   `*Data:* ${dataFormatada}\n` +
                   `*Tema/Cores:* ${tema}\n` +
                   `*Local:* ${cidade}`;

  const url = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
});