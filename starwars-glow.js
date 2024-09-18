const cardContainer = document.querySelector(".card-images");
const images = document.querySelectorAll(".image");
let index = 0;

const changeImage = () => {
    // remove selection of images
    images.forEach((img) => {
        img.classList.remove("active")
    });

    index++;

    // check if index is greather than 2
    if(index > images.length - 1) {
        index = 0;
    }

    // apply active class to current image
    setTimeout(() => images[index].classList.add("active"), 150);

    // aaply fade in effect on container
    cardContainer.classList.add("effect");
    setTimeout(() => cardContainer.classList.remove("effect"), 900);
}

setInterval(() => {
    changeImage();
}, 3200);