class Sprite {
   constructor(config) {
      this.image = new Image();
      this.image.src = config.src;
      this.image.onload = () => {
         this.isLoaded = true;
      }
      this.closed = false;
      //Shadow
      this.shadow = new Image();
      this.shadow.src = "images/shadow.png";
      this.shadow.onload = () => {
         this.isShadowLoaded = true;
      }
      this.useShadow = true;
      //Configure animation state
      this.animations = config.animations || {
         "idle-down": [[0, 0]],
         "idle-up": [[0, 1]],
         "idle-right": [[0, 3]],
         "idle-left": [[0, 2]],
         "walk-down": [[3,0],[1,0],[2,0],[0,0]],
         "walk-up": [[0,1],[2,1],[1,1],[3,1]],
         "walk-right": [[0,3],[2,3],[1,3],[3,3]],
         "walk-left": [[0,2],[2,2],[1,2],[3,2]]
      }
      this.currentAnimation = config.currentAnimation || "walk-down";
      this.currentAnimationFrame = 0;

      this.animationFrameLimit = config.animationFrameLimit || 8;
      this.animationFrameProgress = this.animationFrameLimit

      this.gameObject = config.gameObject;

      this.message = null;

   }
   get frame() {
      return this.animations[this.currentAnimation][this.currentAnimationFrame]
   }

   setAnimation(key) {
      if (this.currentAnimation !== key) {
         this.currentAnimation = key;
         this.currentAnimationFrame = 0;
         this.animationFrameProgress = this.animationFrameLimit;
      }
   }

   updateAnimationProgress() {
      if (this.animationFrameProgress > 0) {
         this.animationFrameProgress -= 1;
         return;
      } 
      this.animationFrameProgress = this.animationFrameLimit;
      this.currentAnimationFrame += 1;
      if(this.animations[this.currentAnimation][this.currentAnimationFrame] == undefined) {
         this.currentAnimationFrame = 0;
      }
   }

   checkForMessage() {
      if (this.gameObject.x == utils.withGrid(15) && this.gameObject.y == utils.withGrid(7)) {
         if (this.closed == false) {
            this.closed == true;
            this.message = new TextMessage({text: "1st answer to question", container: document.querySelector(".screen-container")});
            this.message.init();
         }
      } else if (this.gameObject.x == utils.withGrid(8) && this.gameObject.y == utils.withGrid(3)) {
         if (this.closed == false) {
            this.closed == true;
            this.message = new TextMessage({text: "2nd answer to question", container: document.querySelector(".screen-container")});
            this.message.init();
         }
      } else if (this.gameObject.x == utils.withGrid(9) && this.gameObject.y == utils.withGrid(6)) {
         if (this.closed == false) {
            this.closed == true;
            this.message = new TextMessage({text: "3rd answer to question", container: document.querySelector(".screen-container")});
            this.message.init();
         }
      } else if (this.gameObject.x == utils.withGrid(10) && this.gameObject.y == utils.withGrid(4)) {
         if (this.closed == false) {
            this.closed == true;
            this.message = new TextMessage({text: "4th answer to question", container: document.querySelector(".screen-container")});
            this.message.init();
         }
      } else if (this.gameObject.x == utils.withGrid(13) && this.gameObject.y == utils.withGrid(2)) {
         if (this.closed == false) {
            this.closed == true;
            this.message = new TextMessage({text: "5th answer to question", container: document.querySelector(".screen-container")});
            this.message.init();
         }
      } else {
         this.closed == false
         if (this.message != null) {
            console.log("here")
            this.message.done();
         } this.message = null;
      }
   }

   draw(ctx, cameraPerson) {
      const x = this.gameObject.x + utils.withGrid(10.5) - cameraPerson.x;
      const y = this.gameObject.y + utils.withGrid(6) - cameraPerson.y;
      this.isShadowLoaded && ctx.drawImage(
         this.shadow,
         0,0,
         48,48, 
         x+8, y+1.5,
         48,48)
      const [frameX, frameY] = this.frame;
      this.isLoaded && ctx.drawImage(
         this.image,
         frameX * 48,frameY * 48,
         48,48,
         x,y,
         48,48
      )
      this.updateAnimationProgress();
      this.checkForMessage();
   }
}