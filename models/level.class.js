class Level {
    enemies;
    objects;
    clouds;
    backgroundObjects;
    level_end_x = 2020;


    constructor(enemies, objects, clouds,statusbar, backgroundObjects){
        this.enemies = enemies;
        this.objects = objects;
        this.clouds = clouds;
        this.statusbar = statusbar;
        this.backgroundObjects = backgroundObjects;
    }
}