const revealElement = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
    for (let i = 0; i < revealElement.length; i++) {
        const isElementOnScreen = revealElement[i].getBoundingClientRect().top < window.innerHeight;

        if(isElementOnScreen){
            revealElement[i].classList.add("revealed")
        }else{
            revealElement[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("load", scrollReveal);
window.addEventListener("scroll", scrollReveal);


// ------------------- Light Box --------------------- 


const galleryItem = document.getElementsByClassName("img-grid-box");


const lightboxContainer = document.createElement("div");
const lightboxContent = document.createElement("div");
const lightboxImg = document.createElement("img");
const lightboxPrev = document.createElement("div");
const lightboxNext = document.createElement("div");


lightboxContainer.classList.add("lightbox");
lightboxContent.classList.add("lightbox-content");
lightboxImg.classList.add("lightbox-img");
lightboxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightboxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightboxContainer.appendChild(lightboxContent);
lightboxContent.appendChild(lightboxImg);
lightboxContent.appendChild(lightboxPrev);
lightboxContent.appendChild(lightboxNext);
document.body.appendChild(lightboxContainer);


let index = 1;

function showLightBox(n){
    if(n > galleryItem.length){
        index = 1;
    }
    else if(n < 1){
        index = galleryItem.length;
    }

    let imgLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightboxImg.setAttribute("src", imgLocation);
}



function currentImg(){
    lightboxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex)
}

for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImg);
}

function sliderImg(n){
    showLightBox(index += n);
}

function prevImg(){
    sliderImg(-1)
}

function nextImg(){
    sliderImg(1)
}

lightboxNext.addEventListener("click", nextImg);
lightboxPrev.addEventListener("click", prevImg);

function closeLightBox(event){
    if(this === event.target){
        lightboxContainer.style.display = "none";
    }
}

lightboxContainer.addEventListener("click", closeLightBox);










