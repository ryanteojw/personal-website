function createCertCards(data) {
    const swiperWrapper = document.getElementById("certs-wrapper");
    
    data.forEach((cert) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        const card = document.createElement("div");
        card.className = "card p-3 h-100 cert-card";
        card.style.position = "relative";

        card.addEventListener("click", () => {
            window.open(cert.link, "_blank");
        });

        const overlayPrompt = document.createElement("div");
        overlayPrompt.className = "overlayPrompt";
        overlayPrompt.textContent = "Click to see certificate";

        const img = document.createElement("img");
        img.src = cert.image;
        img.className = "card-img-top mb-3";
        img.style.height = "200px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "0.5rem";
        img.style.border = "1px solid #cccccc"; 

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column justify-content-center align-items-center";
        cardBody.style.minHeight = "140px";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = cert.title;

        cardBody.appendChild(title);
        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(overlayPrompt);
        slide.appendChild(card);
        swiperWrapper.appendChild(slide);
    });

    const certSwiper = new Swiper(".certSwiper", {
        slidesPerView: 3.3,
        spaceBetween: 20,
        centeredSlides: true,
        initialSlide: 0,
        grabCursor: true,
        breakpoints: {
            0: {
                slidesPerView: 1.3,
                initialSlide: 0
            },
            768: {
                slidesPerView: 2.3,
                initialSlide: 0
            },
            1024: {
                slidesPerView: 3.3,
                initialSlide: 1
            },
        },
        on: {
            init: function() {
                this.totalSlides = this.slides.length;
                this.perView = this.params.slidesPerView;
            },
            reachBeginning: function () {
                const firstSet = Math.floor(this.perView / 2);

                if (certSwiper.activeIndex <= firstSet) {
                    certSwiper.slideTo(0);
                } else {
                    certSwiper.slideTo(firstSet);
                }
            },
            reachEnd: function () {
                const lastSet = Math.floor(this.totalSlides - (this.perView / 2));

                if (certSwiper.activeIndex >= lastSet) {
                    certSwiper.slideTo(this.totalSlides - 1); 
                } else {
                    certSwiper.slideTo(lastSet);
                }
            }
        }
    });
}

export { createCertCards };