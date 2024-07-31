document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('hover-scale');
        });

        button.addEventListener('mouseout', () => {
            button.classList.remove('hover-scale');
        });
    });
});
