

class EnemyFish{
    constructor(x, y, imgSrc, weight, direction,directionVertical){
        this.x = x;
        this.y = y;
        this.width = INIT_FISH_WIDTH * weight;              // need const height and width in init file ***
        this.height = INIT_FISH_HEIGHT * weight;              // need const height and width in init file ***
        this.imgSrc = "./images/Enemies" + "/" + direction + "/" + imgSrc;
        this.direction = direction;
        this.directionVertical=directionVertical;
        this.weight = weight;
        this.speedX = 3 * level + (4 * LEVEL_SPEED);
        this.speedY = 0.3*level + (0.6 * LEVEL_SPEED);
        this.element;
    }

    createFish(){
        this.element = document.createElement("img");
        this.element.src = this.imgSrc;
        this.element.style.position = "absolute";
        this.element.height = this.height;
        this.element.width = this.width;

        if (this.direction === "left")
            this.x = window.innerWidth + this.width;
        else if (this.direction === "right")
            this.x = 0 - this.width;

        this.element.style.top = this.y + "px";
        this.element.style.left = this.x + "px";

        container.appendChild(this.element);
    }

    moveFishes(){
        if (this.direction === "left") {
            this.x -= this.speedX;
    
        }
        else if (this.direction === "right") {
            this.x += this.speedX;
        }
    
        this.element.style.left = this.x + "px";
    
        if (this.directionVertical === "top") {
            this.y -= this.speedY;
    
        }
        else if (this.directionVertical === "down") {
            this.y += this.speedY;
        }
        this.element.style.top = this.y + "px";
    }

}

