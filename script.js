const Modal = document.querySelector(".modal");
const Overlay = document.querySelector(".Overlay");

const openModal = () => {
    console.log("1");
    Modal.classList.add("modalActive");
    console.log("2");
    Overlay.classList.add("OverlayActive");
    console.log("3");
};

const closeModal = () => {
    console.log("4");
    Modal.classList.remove("modalActive");
    console.log("5");
    Overlay.classList.remove("OverlayActive");
    console.log("6");
};
