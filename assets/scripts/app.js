
const addMovieModal = document.getElementById('add-modal');


const startAddMovieBtn = document.getElementById('add-movie');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = document.getElementById('cancel');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}

const bakcdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', bakcdropClickHandler);
cancelAddMovieBtn.addEventListener('click', bakcdropClickHandler);


// startAddMovieBtn.addEventListener('click', () => {
//     addMovieModal.classList.toggle('visible');
// });
// startAddMovieBtn.addEventListener('click', () => {
//     addMovieModal.classList.toggle('visible');
// });
