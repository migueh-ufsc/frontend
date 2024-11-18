document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;

  if (username.trim() !== "") {
    // Simulação do cálculo de probabilidade (substituir com backend real)
    const probability = Math.floor(Math.random() * 101);

    // Exibir resultado
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('progress').style.width = `${probability}%`;
    document.getElementById('probability').innerText = `${probability}%`;
  }
});
