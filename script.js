console.log("Olá mundo");


let projetos = [
    {
        nome: "Projeto 1 - Calculadora",
        imagem: "./Imagens/Projeto.png",
        tecnologias: "JavaScript, HTML, CSS",
        link: "https://www.uol.com.br/"
    },
    {
        nome: "Projeto 2 - Portifólio",
        imagem: "./Imagens/Projeto.png",
        tecnologias: "JavaScript, HTML, CSS",
        link: "https://www.uol.com.br/"
    },
    {
        nome: "Projeto 3 - BlackJack",
        imagem: "./Imagens/Projeto.png",
        tecnologias: "JavaScript, HTML, CSS",
        link: "https://www.uol.com.br/"
    },
    {
        nome: "Projeto 4 - Biblioteca",
        imagem: "./Imagens/Projeto.png",
        tecnologias: "JavaScript, HTML, CSS",
        link: "https://www.uol.com.br/"
    },
    {
        nome: "Projeto 5 - Arquivo Histórico",
        imagem: "./Imagens/Projeto.png",
        tecnologias: "JavaScript, HTML, CSS",
        link: "https://www.uol.com.br/"
    },
    {
        nome: "Projeto 6 - Site",
        imagem: "./Imagens/Projeto.png",
        tecnologias: "JavaScript, HTML, CSS",
        link: "https://www.uol.com.br/"
    }
]

let gridProjetos = document.getElementById("projetos")

gridProjetos.innerHTML = projetos.map((itemProjeto) => {

return (`<a  href = ${itemProjeto.link} class="projetosContainer" target="_blank"><img class="imagensProjeto" src= ${itemProjeto.imagem} alt=${itemProjeto.nome}> ${itemProjeto.nome} <br>Tecnologias: ${itemProjeto.tecnologias}</a>`)
})
