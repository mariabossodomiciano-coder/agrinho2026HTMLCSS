const formulario = document.getElementById('formIrrigacao');
const resultado = document.getElementById('resultadoCalculo');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const area = Number(document.getElementById('area').value);
  const agua = Number(document.getElementById('agua').value);
  const dias = Number(document.getElementById('dias').value);

  if (area <= 0 || agua <= 0 || dias <= 0) {
    resultado.innerHTML = '<p>Preencha todos os campos com valores maiores que zero.</p>';
    return;
  }

  const consumoDiario = area * agua;
  const consumoTotal = consumoDiario * dias;
  const economia = consumoTotal * 0.20;
  const consumoComEconomia = consumoTotal - economia;

  let mensagem = '';

  if (consumoDiario <= 500) {
    mensagem = 'Uso de água considerado baixo. Continue evitando desperdícios.';
  } else if (consumoDiario <= 2000) {
    mensagem = 'Uso de água moderado. Verifique se a irrigação está sendo feita no melhor horário.';
  } else {
    mensagem = 'Uso de água alto. Considere usar irrigação por gotejamento ou reaproveitamento de água.';
  }

  resultado.innerHTML = `
    <p>Consumo diário:</p>
    <p class="destaque">${consumoDiario.toFixed(2)} litros</p>

    <p>Consumo em ${dias} dias:</p>
    <p class="destaque">${consumoTotal.toFixed(2)} litros</p>

    <p>Economia possível reduzindo 20%:</p>
    <p class="destaque">${economia.toFixed(2)} litros</p>

    <p>Consumo após economia:</p>
    <p class="destaque">${consumoComEconomia.toFixed(2)} litros</p>

    <p>${mensagem}</p>
  `;
});
