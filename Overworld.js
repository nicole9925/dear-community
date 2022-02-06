class Overworld {
   constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(".screen-canvas");
      this.ctx = this.canvas.getContext("2d");
      this.map = null;
      this.sound = null;
   }
   
   startGameLoop() {
      const step = () => {
         const cameraPerson = this.map.gameObjects.hero;
         Object.values(this.map.gameObjects).forEach(object => {
            object.update({
               arrow: this.directionInput.direction
            })
         })
         this.map.drawLowerImage(this.ctx, cameraPerson);
         Object.values(this.map.gameObjects).forEach(object => {
            object.sprite.draw(this.ctx, cameraPerson);
         })
         this.map.drawUpperImage(this.ctx, cameraPerson);
         requestAnimationFrame(() => {
            // Object.values(this.map.gameObjects)
            step();
         })
      } 
      step();
   }

   init() {
      this.map = new OverworldMap(window.OverworldMaps.MainMap)
      this.directionInput = new DirectionInput();
      this.directionInput.init();
      this.startGameLoop();
      this.sound = new Sound({music: "./background.mp3"})
      this.sound.init();
   }
}