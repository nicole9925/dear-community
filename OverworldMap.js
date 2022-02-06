class OverworldMap {
   constructor(config) {
      this.gameObjects = config.gameObjects;
      this.walls = config.walls || {};

      this.lowerImage = new Image();
      this.lowerImage.src = config.lowerSrc;

      this.upperImage = new Image();
      this.upperImage.src = config.upperSrc;
   }

   drawLowerImage(ctx, cameraPerson) {
      ctx.drawImage(this.lowerImage, utils.withGrid(10.5)-cameraPerson.x, utils.withGrid(6)-cameraPerson.y);
   }
   drawUpperImage(ctx, cameraPerson) {
      ctx.drawImage(this.upperImage, utils.withGrid(10.5)-cameraPerson.x, utils.withGrid(6)-cameraPerson.y)
   }
}

window.OverworldMaps = {
   MainMap: {
      lowerSrc: "/images/mapLower.png",
      upperSrc: "/images/mapUpper.png",
      gameObjects: {
         hero: new Person({
            x: utils.withGrid(4),
            y: utils.withGrid(5)
         }),
         sunflower1: new GameObject({
            src: "/images/sunflower.png", 
            x: utils.withGrid(15),
            y: utils.withGrid(7)
         }),
         sunflower2: new GameObject({
            src: "/images/sunflower.png", 
            x: utils.withGrid(8),
            y: utils.withGrid(3)
         }),
         sunflower3: new GameObject({
            src: "/images/sunflower.png", 
            x: utils.withGrid(9),
            y: utils.withGrid(6)
         }),
         sunflower4: new GameObject({
            src: "/images/sunflower.png", 
            x: utils.withGrid(10),
            y: utils.withGrid(4)
         }),
         sunflower5: new GameObject({
            src: "/images/sunflower.png", 
            x: utils.withGrid(13),
            y: utils.withGrid(2)
         })
         // ,
         // walls: {
         //    //"16, 16": true
         //    [utils.asGridCoords(7, 6)]: true,
         //    [utils.asGridCoords(8, 6)]: true,
         //    [utils.asGridCoords(7, 7)]: true,
         //    [utils.asGridCoords(8, 7)]: true
         // }
      }
   }
}