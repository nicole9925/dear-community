class Overworld {
   constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(".screen-canvas");
      this.ctx = this.canvas.getContext("2d");
   }
   
   startGameLoop() {
      const step = () => {
         console.log("here");
         requestAnimationFrame(() => {
            // Object.values(this.map.gameObjects)
            step();
         })
      } 
      step();
   }

   init() {
      this.startGameLoop();
      const image = new Image();
      image.onload = () => {
         this.ctx.drawImage(image, 0, 0)
      }
      image.src = "/images/map.png";

      const hero = new GameObject({
         x: 4,
         y: 4
      })

      hero.sprite.draw(this.ctx);
   }
}