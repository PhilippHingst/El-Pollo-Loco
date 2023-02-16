class Statusbar extends MovableObject {
    width = 150; 
    height = 50;

    constructor(imagePath, y){
        super().loadImage(imagePath);
        this.x = 30;
        this.y = y;
    }

}