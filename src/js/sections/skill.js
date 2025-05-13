function createSkillCards(data) {
    const gridContainer = document.getElementById("skills-grid");
    const swiperWrapper = document.getElementById("skills-wrapper");

    data.forEach(skill => {
        const card = document.createElement("div");
        card.className = "d-flex flex-column align-items-center justify-content-center skill-card text-center";

        const img = document.createElement("img");
        img.src = skill.image;
        img.className = "skill-image mb-2";

        const title = document.createElement("div");
        title.className = "skill-title";
        title.textContent = skill.title;

        card.appendChild(img);
        card.appendChild(title);

        const col = document.createElement("div");
        col.className = "col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center";
        col.appendChild(card.cloneNode(true));
        gridContainer.appendChild(col);

        const slide = document.createElement("div");
        slide.className = "swiper-slide d-flex justify-content-center";
        slide.appendChild(card);
        swiperWrapper.appendChild(slide);
    });    

    const skillsSwiper = new Swiper(".skillsSwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        grabCursor: true,
    });

    if (window.innerWidth < 768) {
        skillsSwiper;
    }
}

export { createSkillCards };