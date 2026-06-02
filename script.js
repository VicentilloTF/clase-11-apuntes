
<div>
  <canvas id="dispersion"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  const ctx = document.getElementById('dispersion');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Metropolitana', 'Valparaíso', 'Biobío', 'La Araucanía', 'Los Ríos', 'Maule', 'Ñuble', 'Coquimbo', 'Antofagasta'],
      datasets: [{
        label: 'Numero de matriculas',
        data: [3563, 520, 358, 238, 135, 135, 90, 45, 40, 35 ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
