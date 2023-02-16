class Coin extends MovableObject {
    y = 325;
    height = 120;
    width = 120;
    IMAGES_WALKING = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 2000; //Zahl zwischen 200 und 700
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 300);
    }
}
