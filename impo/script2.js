const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerwidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener ('DOMContent Loaded', () => {
    const button = document.getElementById('button');

    button.addEventListener ('click', () => alert( "You clicked me!"));

    button.addEventListener('mouseover', () => {

        button.style.left = Math.floor (Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor (Math.random() * (maxHeight + 1)) + 'px';
    });
});