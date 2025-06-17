function escolher(opcao) {
  const texto = document.getElementById("texto");
  const botoes = document.getElementById("botoes");

  if (opcao === 1) {
    texto.innerHTML = "Na feira, João conhece Ana, uma jovem da cidade que adora produtos naturais. O que ele faz?";
    botoes.innerHTML = `
      <button onclick="escolher(3)">Oferece uma troca</button>
      <button onclick="escolher(4)">Conta sobre a fazenda</button>
    `;
  } else if (opcao === 2) {
    texto.innerHTML = "João encontra Carlos, um antigo amigo da cidade. Eles conversam e decidem:";
    botoes.innerHTML = `
      <button onclick="escolher(5)">Ir ao parque</button>
      <button onclick="escolher(6)">Ir à biblioteca</button>
    `;
  } else if (opcao === 3) {
    texto.innerHTML = "Ana adora a ideia e oferece um sabonete artesanal em troca. Uma amizade começa e os dois planejam futuras trocas.";
    botoes.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  } else if (opcao === 4) {
    texto.innerHTML = "Ela se encanta com as histórias do campo e convida João para apresentar sua fazenda em um evento cultural.";
    botoes.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  } else if (opcao === 5) {
    texto.innerHTML = "No parque, João aprende sobre compostagem urbana e decide levar a ideia para seu sítio. Um novo hábito começa.";
    botoes.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  } else if (opcao === 6) {
    texto.innerHTML = "Na biblioteca, encontram livros sobre agroecologia. João e Carlos decidem criar um projeto integrando escola e comunidade.";
    botoes.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  } else if (opcao === 7) {
    texto.innerHTML = "Explorando sozinho, João encontra uma feira clandestina que maltrata animais. Ele denuncia o local e se torna ativista pelos direitos rurais.";
    botoes.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  }
}
