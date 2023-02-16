class BottleGround extends MovableObject {
    y = 325;
    height = 100;
    width = 100;
    BOTTLE_GROUND = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.BOTTLE_GROUND);
        this.x = 200 + Math.random() * 2000; //Zahl zwischen 200 und 700
    }
  
}