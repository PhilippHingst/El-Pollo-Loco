class ThrowBottle extends MovableObject {

    height = 100;
    width = 75;
    y = 200;

    IMAGES_WALKING = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300;
        this.animate();
    }
    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
    }

}