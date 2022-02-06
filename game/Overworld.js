class Overworld {
   constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(".screen-canvas");
      this.ctx = this.canvas.getContext("2d");
      console.log("here")
   }

   init() {
      const image = new Image();
      image.onload = () => {
         this.ctx.drawImage(image, 0, 0)
      }
      image.src = "/images/map.png";
      const x = 6;
      const y = 3;

      const hero = new Image();
      hero.onload = () => {
         this.ctx.drawImage(
            hero, 
            0, 
            0,
            48,
            48,
            x * 22,
            y * 22,
            45,
            45)
      }
      hero.src = "images/char.png"
   }
}