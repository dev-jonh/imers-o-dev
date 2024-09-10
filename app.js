function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");


    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
       section.innerHTML = "<p>Nenhum item foi encontrado</p>"
        return
        
    }
campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
let resultados ="";
let titulo = "";
let sinopse = "";
let tags = "";

// Itera sobre cada lado da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa)|| sinopse.includes
      (campoPesquisa)|| tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class= "item-resultado">
                        <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
    <p class="sinopse-meta">${dado.sinopse}</p>
    <a href=${dado.link} target="_blank">Mais informações sobre o filme</a>
    <div>
    `;
      }
}

if(!resultados) {
   resultados = "<p>Nenhum filme ou seríe encontrado</p>"
}

// Atribui os resultados gerados á seção HTML
section.innerHTML = resultados
}






