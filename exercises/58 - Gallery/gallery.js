function Gallery(gallery) {
    if (!gallery) {
        throw new Error("No Gallery Found");
    }

    // select the elements I need;
    const images = Array.from(gallery.querySelectorAll("img"));
    const modal = document.querySelector(".modal");
    const prevBtn = modal.querySelector(".prev");
    const nextBtn = modal.querySelector(".next");
    let currentImage;

    function openModal() {
        if (modal.matches(".open")) {
            console.info("Opening modal");
            return;
        }
        modal.classList.add("open");
        modal.addEventListener('click', handleClickOutside)
        window.addEventListener('keyup', handleKeyup)
        nextBtn.addEventListener('click', showNextImage)
        prevBtn.addEventListener('click', showPrevImage)

    }

    function closeModal() {
        modal.classList.remove("open");
        modal.removeEventListener('click', handleClickOutside)
        window.removeEventListener('keyup', handleKeyup)
        nextBtn.removeEventListener('click', showNextImage)

    }
    function handleKeyup(e) {
        if (e.key === 'Escape') closeModal()
    }

    function showNextImage() {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild)
    }
    function showPrevImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild)
    }

    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    function showImage(el) {
        if (!el) {
            console.info("no image to show");
            return;
        }
        console.log(el);
        modal.querySelector("img").src = el.src;
        modal.querySelector("h2").textContent = el.title;
        modal.querySelector("figure p").textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }

    images.forEach((image) =>
        image.addEventListener("click", (e) => showImage(e.currentTarget))
    );

}
const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));
