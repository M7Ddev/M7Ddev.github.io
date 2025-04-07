document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); 
            }
        });
    }, {
        threshold: 0.1 
    });

    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
});
