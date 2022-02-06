class ObjectSprite {
   constructor(config) {
      this.image = new Image();
      this.image.src = config.src;
      this.image.onload = () => {
         this.isLoaded = true;
      }
      //Shadow
      this.shadow = new Image();
      this.shadow.src = "images/shadow.png";
      this.shadow.onload = () => {
         this.isShadowLoaded = true;
      }
      this.useShadow = true;

      this.gameObject = config.gameObject;

   }

   draw(ctx, cameraPerson) {
      const x = this.gameObject.x + utils.withGrid(10.5) - cameraPerson.x;
      const y = this.gameObject.y + utils.withGrid(6) - cameraPerson.y ;
      this.isShadowLoaded && ctx.drawImage(
         this.shadow,
         0,0,
         48,48, 
         x-10, y-3,
         48,48)

      this.isLoaded && ctx.drawImage(
         this.image,
         130,32,
         48,28,
         x,y,
         48,28
      )
   }
}