function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function () {
        return '<img  width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top:' + this.top + 'px;left:' + this.left + 'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    }
}

let hero = new Hero('images/mabb.jpg', top = 20, left = 20, size = 200, 100);
let ghost = true;

function start() {
    if (hero.left < window.innerWidth - hero.size && ghost) {
        hero.moveRight();
    } else {
        ghost = false;
        if (!ghost) {
            hero.moveLeft();
            if (hero.left <= 0) {
                ghost = true;
            }
        }
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1000 / 30)
}

start();