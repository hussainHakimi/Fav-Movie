const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.getElementById("add-movie");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieBtn = document.getElementById("cancel");
const confirmAddMovieBtn = document.getElementById("add");
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const updateUI = () => {
    if (movies.length === 0) {
    entryTextSection.style.display = "block";
    } else {
    entryTextSection.style.display = "none";
    }
};

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
    if (movie.id === movieId) {
        break;
    }
    movieIndex++;
    }
  movies.splice(movieIndex, 1); // splice will delete form an array.
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
};

const startDeleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add("visible");
    toggleBackdrop();
    const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
    let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

    cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);

    cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
    confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
    );
};

const newMovieElementDetails = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
    );
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
    addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
};

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
    userInput.value = "";
    }
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    clearMovieInputs();
    toggleBackdrop();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
    ) {
    alert("Please enter a Valid value! (rating between 1 to 5)");
    }
    const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
    newMovieElementDetails(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
    );
    updateUI();
};

const bakcdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInputs();
};

startAddMovieBtn.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", bakcdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);

// startAddMovieBtn.addEventListener('click', () => {
//     addMovieModal.classList.toggle('visible');
// });
// startAddMovieBtn.addEventListener('click', () => {
//     addMovieModal.classList.toggle('visible');
// });

//  images link : data:image/png;base64,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
