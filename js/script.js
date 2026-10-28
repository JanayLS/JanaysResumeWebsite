// Project "About this project" buttons

const projectButtons = document.querySelectorAll(
    ".project-details-toggle"
);

projectButtons.forEach(button => {
    button.addEventListener("click", () => {

        const isExpanded =
            button.getAttribute("aria-expanded") === "true";

        button.setAttribute(
            "aria-expanded",
            !isExpanded
        );

    });
});