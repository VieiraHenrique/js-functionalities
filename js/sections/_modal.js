const modal = document.querySelector(".modal");

document.addEventListener("click", (event) => {
    if (event.target) {
        if (event.target.matches(".modal--trigger")) {
            openModal();
        }
        if (event.target.matches(".modal__backdrop")) {
            closeModal();
        }
        if (event.target.matches(".modal--close")) {
            closeModal();
        }
    }
});

const openModal = () => {
    modal.classList.add("modal--opened");
    setTimeout(() => {
        document.querySelector(".modal__content").classList.add('modal-centered');
    }, 1);
};

const closeModal = () => {
    modal.classList.remove("modal--opened");
    document.querySelector(".modal__content").classList.remove('modal-centered');
};
