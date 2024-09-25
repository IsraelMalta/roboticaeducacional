function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum resultado encontrado. Você precisa digitar uma palavra para efetuar a pesquisa</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>

                <p class="descricao-meta">${dado.descricao}</p> 

                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    
    }

    if(!resultados){
        resultados = "<p>Nenhum resultado encontrado</p>";
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}

 //O código abaixo foi feito passo a passo assistindo as aulas e o código acima foi comentado pelo Gemini:-->

//function pesquisar(){
//    let section = document.getElementById("resultados-pesquisa")
//console.log(section);

//let resultados = ""

//for(let dado of dados){
//    resultados += `
//<div class="item-resultado">
//                <h2>
//                    <a href="#" target="_blank">${dado.titulo}</a<
//                </h2>

//                <p class="descricao-meta">${dado.descricao}</p> 
                
//               <a href=${dado.link} target="_blank">Mais informações</a>
//              </div>
//`
//}
//section.innerHTML = resultados
//}


