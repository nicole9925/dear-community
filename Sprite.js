class Sprite {
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
      //Configure animation state
      this.animations = config.animations || {
         idleDown: [
            [0, 0]
         ]
      }
      this.currentAnimation = config.currentAnimation || "idleDown";
      this.currentAnimationFrame = 0;

      this.gameObject = config.gameObject;
   }

   draw(ctx) {
      const x = this.gameObject.x * 22;
      const y = this.gameObject.y * 22;
      this.isShadowLoaded && ctx.drawImage(
         this.shadow,
         0,0,
         48,48, 
         x+8, y+2,
         48,48)
      this.isLoaded && ctx.drawImage(
         this.image,
         0,0,
         48,48,
         x,y,
         48,48
      )
   }
}