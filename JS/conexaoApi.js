import { interactiveDom } from "./manipulandoDom.js"

export const apiKey = "d2c26747e5f0df03b11828b4a60d1c1e"
let movies = []

fetch(`https://api.themoviedb.org/3/account/${apiKey}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
        movies = data.results.slice(0, 10)
        interactiveDom(movies)
    })
    .catch(error => {
        alert('ocorreu um erro ao obter os filmes', error)
    })


const home = document.querySelector(".text-title")
    home.addEventListener('click', () => {
        interactiveDom(movies)
        document.getElementById("container__checkbox").checked = false
        document.querySelector("card__empt-movies")
        document.querySelector(".pesquisa-input")
    })
