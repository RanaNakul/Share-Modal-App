const Modal = document.querySelector(".modal");
const Overlay = document.querySelector(".Overlay");

const openModal = () => {
    Modal.classList.add("modalActive");
    Overlay.classList.add("OverlayActive");
};

const closeModal = () => {

    Modal.classList.remove("modalActive");
    Overlay.classList.remove("OverlayActive");
};