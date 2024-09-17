const inserirFilmes = document.getElementById("movies");

function interactiveDom(movie) {
  inserirFilmes.innerHTML = ``;
  movie.forEach((movies) => {
    const movieId = movies.id;
    const title = movies.title;
    const releaseYear = movies.release_date.split("-")[0];
    const posterPath = `https://image.tmdb.org/t/p/w500/${movies.poster_path}`;
    const rating = movies.vote_avarage.toFixed(1);
    const overview = movies.overview;

    const section = document.createElement("section");
    section.classList.add("container__card");
    section.dataset.movieId = movieId;

    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const ul = document.createElement("ul");

    const li = document.createElement("li");
    li.classList.add("card");

    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    const img = document.createElement("img");
    img.src = posterPath;
    img.alt = `Imagem do da capa do filme ${movie.title}`;
    cardImg.appendChild(img);

    const card = document.createElement("div");
    card.classList.add("card");

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    const movieTitle = document.createElement("a");
    movieTitle.textContent = `${title} (${releaseYear})`;
    movieCard.appendChild(movieTitle);

    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    const favorite = document.createElement("div");
    favorite.classList.add("favorite");

    const link = document.createElement("a");
    link.innerHTML = `<i class="fa-solid fa-star"></i>`;
    const nota = document.createElement("span");
    nota.textContent = rating;
    movieCard.appendChild(favoriteCard);

    favorite.appendChild(link);
    favorite.appendChild(rating);

    const divButton = document.createElement("div");
    divButton.classList.add("favorite");

    const btnFavorite = document.createElement("button");
    btnFavorite.classList.add("btn-favorite");
    btnFavorite.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    btnFavorite.addEventListener("click", () => {
      movie.isFavorited = !movie.isFavorited;
      btnFavorite.innerHTML = movie.isFavorited
        ? `<i class="fa-solid fa-heart" style="color: red;"></i>`
        : `<i class="fa-regular fa-heart"></i>`;
    });

    const textFavorite = document.createElement("span");
    textFavorite.textContent = "Favoritar";

    const divDescription = document.createElement("div");
    const description = document.createElement("p");
    description.classList.add("paragraph-card");
    description.textContent = overview;
    divDescription.appendChild(description);

    card.appendChild(divDescription);
    card.appendChild(movieCard);

    divButton.appendChild(btnFavorite);
    divButton.appendChild(textFavorite);

    favoriteCard.appendChild(favorite);
    favoriteCard.appendChild(divButton);

    ul.appendChild(li);
    li.appendChild(cardImg);
    li.appendChild(movieCard);
    divCard.appendChild(ul);
    divCard.appendChild(card);

    section.appendChild(divCard);

    document.body.appendChild(section);
    inserirFilmes.appendChild(section);
  });
}

export { interactiveDom };

// const movies = [
//   {
//     image:
//       "./img/batman.png",
//     title: "Batman",
//     rating: 9.2,
//     year: 2022,
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         Lorem Ipsum has been
//                         the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
//                         of type and scrambled it to make a type specimen book.`,
//     isFavorited: true,
//   },
//   {
//     image:
//       "./img/vingadores 4.png",
//     title: "Avengers",
//     rating: 9.2444,
//     year: 2019,
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         Lorem Ipsum has been
//                         the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
//                         of type and scrambled it to make a type specimen book.`,
//     isFavorited: false,
//   },
//   {
//     image:
//       "./img/doutor.png",
//     title: "Doctor Strange",
//     rating: 9.2,
//     year: 2022,
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         Lorem Ipsum has been
//                         the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
//                         of type and scrambled it to make a type specimen book.`,
//     isFavorited: false,
//   },
// ];

// movies.forEach((movie) => interactiveDom(movie));
