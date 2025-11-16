// sample data + small UI init
document.addEventListener('DOMContentLoaded', () => {
  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // bar chart (Statistik Mahasiswa)
  const ctx = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Class A','Class B','Class C','Class D','Class E'],
      datasets: [{
        label: 'Avg Point',
        data: [60,50,40,20,30],
        backgroundColor: [
          'rgba(43,120,214,0.9)',
          'rgba(43,120,214,0.8)',
          'rgba(43,120,214,0.7)',
          'rgba(43,120,214,0.6)',
          'rgba(43,120,214,0.9)'
        ],
        borderRadius: 6,
        barThickness: 28
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max:100, ticks:{stepSize:20} },
        x: { grid:{display:false} }
      },
      plugins: { legend:{display:false}, tooltip:{mode:'index',intersect:false} }
    }
  });

  // small interactions: sidebar active state
  document.querySelectorAll('.menu-item').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
