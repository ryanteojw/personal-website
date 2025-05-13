function createExperienceCards(data) {
    const swiperWrapper = document.getElementById("experiences-wrapper");
    const modalContainer = document.getElementById("modal-container");

    data.forEach((exp, index) => {
        const modalId = `experiencesModal${index}`;

        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        const card = document.createElement("div");
        card.className = "card experiences-card text-center p-4 h-100";
        card.setAttribute("data-bs-toggle", "modal");
        card.setAttribute("data-bs-target", `#${modalId}`);

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = exp.title;

        const company = document.createElement("p");
        company.className = "card-text";
        company.textContent = exp.company;

        const date = document.createElement("p");
        date.className = "text-muted";
        date.textContent = exp.date;

        const overlayPrompt = document.createElement("div");
        overlayPrompt.className = "overlayPrompt";
        overlayPrompt.textContent = "Click for more details";

        card.appendChild(title);
        card.appendChild(company);
        card.appendChild(date);
        card.appendChild(overlayPrompt);
        slide.appendChild(card);
        swiperWrapper.appendChild(slide);

        // modal segment
        const modal = document.createElement("div");
        modal.className = "modal fade";
        modal.id = modalId;
        modal.tabIndex = -1;
        modal.setAttribute("aria-labelledby", `modalLabel${index}`);
        modal.setAttribute("aria-hidden", "true");

        const modalDialog = document.createElement("div");
        modalDialog.className = "modal-dialog modal-dialog-centered";
        modalDialog.style.maxWidth = "65%";
        modalDialog.style.margin = "0 auto";

        const modalContent = document.createElement("div");
        modalContent.className = "modal-content p-4";
        
        // header section
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";

        const modalTitle = document.createElement("h5");
        modalTitle.className = "modal-title";
        modalTitle.id = `modalLabel${index}`;
        modalTitle.textContent = exp.title;

        const modalCompany = document.createElement("div");
        modalCompany.textContent = exp.company;

        const modalHeaderleftSide = document.createElement("div");
        modalHeaderleftSide.className = "d-flex flex-column align-items-start";
        modalHeaderleftSide.appendChild(modalTitle);
        modalHeaderleftSide.appendChild(modalCompany);

        const modalDate = document.createElement("div");
        modalDate.className = "text-muted small mt-2 mt-md-0";
        modalDate.textContent = exp.date;

        const modalHeaderContent = document.createElement("div");
        modalHeaderContent.className = "d-flex flex-column flex-md-row justify-content-between w-100 align-items-start align-items-md-center";
        modalHeaderContent.appendChild(modalHeaderleftSide);
        modalHeaderContent.appendChild(modalDate);

        const closeButton = document.createElement("button");
        closeButton.className = "btn-close ms-4";
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.setAttribute("aria-label", "Close");

        modalHeader.appendChild(modalHeaderContent);
        modalHeader.appendChild(closeButton);

        // body section
        const modalBody = document.createElement("div");
        const detailList = exp.details;
        const ul = document.createElement("ul");
        ul.style.listStyleType = "disc";
        modalBody.className = "modal-body";
        
        detailList.forEach(detail => {
          const li = document.createElement("li");
          li.textContent = detail;
          li.style.marginBottom = "10px";
          li.style.textAlign = "left";
          ul.appendChild(li);
        })

        modalBody.append(ul);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        modalContainer.appendChild(modal);
    });

    const experiencesSwiper = new Swiper(".experiencesSwiper", {
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

export { createExperienceCards };