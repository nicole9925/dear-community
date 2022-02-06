class Person extends GameObject {
   constructor(config) {
      super(config);
      this.movingProgressRemaining = 0;
      this.directionUpdate = {
         "up": ["y", -1],
         "down": ["y", 1],
         "left": ["x", -1],
         "right": ["x", 1]
      }
      this.sprite = new Sprite({
         gameObject: this,
         src: config.src || "./images/char.png"
      })
   }
   update(state) {
      this.updatePosition();
      this.updateSprite(state);
      if(this.movingProgressRemaining === 0 && state.arrow) {
         this.direction = state.arrow;
         this.movingProgressRemaining = 16;
      }
   }
   updatePosition() {
      if(this.movingProgressRemaining > 0) {
         const [property, change] = this.directionUpdate[this.direction];
         this[property] += change;
         this.movingProgressRemaining -= 1;
      } 
   }
   updateSprite(state) {

      if (this.movingProgressRemaining > 0) {
         this.sprite.setAnimation("walk-" + this.direction);
      } else {
         this.sprite.setAnimation("idle-" + this.direction);
      }
   }
}