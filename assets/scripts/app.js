
const addMovieModal = document.getElementById('add-modal');


const startAddMovieBtn = document.getElementById('add-movie');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = document.getElementById('cancel');
const confirmAddMovieBtn = document.getElementById('add');
const userInputs = addMovieModal.querySelectorAll('input');
const movies = [];
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearMovieInputs = () => {
    for(const userInput of userInputs){
        userInput.value = '';
    }
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ){
        alert('Please enter a Valid value! (rating between 1 to 5)');
    }
    const newMovie = {
        title : titleValue,
        image : imageUrlValue,
        rating : ratingValue
    }

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
};

const bakcdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', bakcdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);

// startAddMovieBtn.addEventListener('click', () => {
//     addMovieModal.classList.toggle('visible');
// });
// startAddMovieBtn.addEventListener('click', () => {
//     addMovieModal.classList.toggle('visible');
// });
