let main = document.getElementById("container");
let button = document.getElementById("btn-primary");

let colors = ['black', 'red', 'blue', 'grey'];
main.style.backgroundColor=colors[0];
main.style.height='100vh';
main.style.width='250vh';

button.style.position="absolute";
button.style.top="50vh";
button.style.left="100vh";
button.style.fontSize="30px";
button.style.color="gery";

window.onload = () => {
    colorFlip(colors)
}

button.addEventListener('click', () => colorFlip(colors));

function colorFlip(colors) {
    let afterClick = Math.floor(Math.random()*colors.length);
    main.style.backgroundColor=colors[afterClick];
}
