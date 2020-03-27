const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let point= 0;
let snake;

function setup() {
    snake = new Snake();
    let foot = new Foot();
    foot.location();
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        foot.draw();
        snake.update();
        snake.draw();

        if (snake.eat(foot)) {
            foot.location();
            point++;
            document.getElementById('point').innerHTML=point;
        }
    }, 250);
};

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))