function createProjectCards(data) {
    const swiperWrapper = document.getElementById("projects-wrapper");
    
    data.forEach((project) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        const card = document.createElement("div");
        card.className = "card p-3 h-100 project-card";
        card.style.position = "relative";

        card.addEventListener("click", () => {
            window.open(project.link, "_blank");
        });

        const overlayPrompt = document.createElement("div");
        overlayPrompt.className = "overlayPrompt";
        overlayPrompt.textContent = "Click to see project";

        const img = document.createElement("img");
        img.src = project.image;
        img.className = "card-img-top mb-3";
        img.style.height = "200px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "0.5rem";
        img.style.border = "1px solid #cccccc"; 

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        
        if (window.innerWidth < 768) {
            cardBody.style.minHeight = "200px";
        }

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = project.title;

        const summary = document.createElement("p");
        summary.className = "card-text";
        summary.textContent = project.summary;

        cardBody.appendChild(title);
        cardBody.appendChild(summary);
        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(overlayPrompt);
        slide.appendChild(card);
        swiperWrapper.appendChild(slide);
    });

    const projectsSwiper = new Swiper(".projectsSwiper", {
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

                if (projectsSwiper.activeIndex <= firstSet) {
                    projectsSwiper.slideTo(0);
                } else {
                    projectsSwiper.slideTo(firstSet);
                }
            },
            reachEnd: function () {
                const lastSet = Math.floor(this.totalSlides - (this.perView / 2));

                if (projectsSwiper.activeIndex >= lastSet) {
                    projectsSwiper.slideTo(this.totalSlides - 1); 
                } else {
                    projectsSwiper.slideTo(lastSet);
                }
            }
        }
    });
}

export { createProjectCards };